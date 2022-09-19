// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./interfaces/IERC20.sol";
import "./interfaces/Uniswap.sol";

import "hardhat/console.sol";

contract Swap {
    address private constant UNISWAP_V2_ROUTER =
        0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address private constant UNISWAP_V2_FACTORY =
        0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;

    IERC20 private immutable tokenIn;
    IERC20 private immutable tokenOut;
    bool private immutable owner;

    //uint256 private totalBalance;
    mapping(address => uint256) private depositedAmnt;
    mapping(address => bool) private depositors_map;
    address[] private depositors_list;

    bool private depositsEnabled = true;

    modifier onlyOwner() {
        require(msg.sender == owner, "only owner");
        _;
    }

    constructor(address _tokenIn, address _tokenOut) {
        tokenIn = IERC20(_tokenIn);
        tokenOut = IERC20(_tokenOut);
    }

    function disableDeposits() external onlyOwner {
        depositsEnabled = false;
    }

    function deposit(uint256 _amount) external {
        if (!depositors_map[msg.sender]) {
            depositors_map[msg.sender] = true;
            depositors_list.push(msg.sender);
        }
        tokenIn.transferFrom(msg.sender, address(this), _amount);
        depositedAmnt[msg.sender] += _amount;
    }

    function withdraw(uint256 _amount) external {
        require(
            depositedAmnt[msg.sender] >= _amount,
            "_amount excedes deposit of sender"
        );
        depositedAmnt[msg.sender] -= _amount;
        tokenIn.transfer(msg.sender, _amount);
    }

    function withdrawAll() external {
        require(depositedAmnt[msg.sender] >= 0, "withdraw 0");
        depositedAmnt[msg.sender] = 0;
        tokenIn.transfer(msg.sender, depositedAmnt[msg.sender]);
    }

    function getDepositedAmount(address depositor)
        external
        view
        returns (uint256)
    {
        return depositedAmnt[depositor];
    }

    function swapForWEth(
        address _tokenIn,
        uint256 _amountIn,
        uint256 _amountOutMin,
        address _to
    ) external {
        IERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);
        IERC20(_tokenIn).approve(UNISWAP_V2_ROUTER, _amountIn);

        address[] memory path;
        path = new address[](2);
        path[0] = _tokenIn;
        path[1] = WETH;

        IUniswapV2Router(UNISWAP_V2_ROUTER).swapExactTokensForTokens(
            _amountIn,
            _amountOutMin,
            path,
            _to,
            block.timestamp
        );
    }

    function swapTokens(
        address _tokenIn,
        uint256 _amountIn,
        address _tokenOut,
        uint256 _amountOutMin,
        address _to,
        bool isFot
    ) external {
        IERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);
        IERC20(_tokenIn).approve(UNISWAP_V2_ROUTER, _amountIn);

        address[] memory path;
        path = new address[](2);
        path[0] = _tokenIn;
        path[1] = _tokenOut;

        if (!isFot) {
            IUniswapV2Router(UNISWAP_V2_ROUTER).swapExactTokensForTokens(
                _amountIn,
                _amountOutMin,
                path,
                _to,
                block.timestamp
            );
        } else {
            //*console.log("FOT");
            IUniswapV2Router(UNISWAP_V2_ROUTER)
            //.swapExactTokensForTokensSupportingFeeOnTransferTokens(
                .swapExactTokensForTokensSupportingFeeOnTransferTokens(
                    _amountIn,
                    _amountOutMin,
                    path,
                    _to,
                    block.timestamp
                );
        }
    }

    function getOutMin(
        address _tokenIn,
        address _tokenOut,
        uint256 _amountIn
    ) external view returns (uint256) {
        address[] memory path;
        path = new address[](2);
        path[0] = _tokenIn;
        path[1] = _tokenOut;

        uint256[] memory amountOutMins = IUniswapV2Router(UNISWAP_V2_ROUTER)
            .getAmountsOut(_amountIn, path);

        return amountOutMins[path.length - 1];
    }

    function addLiquidity(
        address _tokenA,
        address _tokenB,
        uint256 _amountA,
        uint256 _amountB
    ) external returns (address pair) {
        pair = IUniswapV2Factory(UNISWAP_V2_FACTORY).getPair(_tokenA, _tokenB);
        if (pair == address(0)) {
            IUniswapV2Factory(UNISWAP_V2_FACTORY).createPair(_tokenA, _tokenB);
        }
        //console.log(pair);
        IERC20(_tokenA).transferFrom(msg.sender, address(this), _amountA);
        IERC20(_tokenB).transferFrom(msg.sender, address(this), _amountB);

        IERC20(_tokenA).approve(UNISWAP_V2_ROUTER, _amountA);
        IERC20(_tokenB).approve(UNISWAP_V2_ROUTER, _amountB);

        (
            uint256 amountA,
            uint256 amountB,
            uint256 liquidity
        ) = IUniswapV2Router(UNISWAP_V2_ROUTER).addLiquidity(
                _tokenA,
                _tokenB,
                _amountA,
                _amountB,
                1,
                1,
                address(this),
                block.timestamp
            );
        console.log("AFTER, tokenA ", IERC20(_tokenA).balanceOf(address(this)));
        console.log("AFTER, tokenB ", IERC20(_tokenB).balanceOf(address(this)));

        IERC20(_tokenB).transferFrom(
            address(this),
            msg.sender,
            IERC20(_tokenB).balanceOf(address(this))
        );
        IERC20(_tokenA).transferFrom(
            address(this),
            msg.sender,
            IERC20(_tokenA).balanceOf(address(this))
        );

        return pair;
    }
}
