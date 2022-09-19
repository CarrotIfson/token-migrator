/* import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import * as chai from "chai";
import { keccak256 } from "ethers/lib/utils";
import { IERC20 } from "../typechain";
import BigNumber from 'bignumber.js';
import { Signer } from "ethers";

*/
import { expect } from "chai";
import { ethers, network, waffle } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { Contract } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import * as chai from "chai";
import { keccak256 } from "ethers/lib/utils";
//import { IERC20 } from "../typechain";
import BigNumber from 'bignumber.js';
import { Signer, BigNumberish } from "ethers";
import { WETH_ABI } from "../helpers/weth";

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised); 
const provider = waffle.provider;

function parse18Dec(amount: Number) {
    return ethers.utils.parseUnits(amount.toString(), 18);
}
function parseWei(amount: BigNumberish) {
    return parseFloat(ethers.utils.formatEther(amount));
}
async function getTokenBalance(token: any, address: string) {
    return parseWei(await token.balanceOf(address));
}

async function printBalances(weth: any, x7: any, address: string) {
    let bal =  parseWei(await provider.getBalance(address));
    console.log(`\tETH balance: ${bal}`);
    bal = await getTokenBalance(weth, address);
    console.log(`\tWETH balance: ${bal}`);
    bal = await getTokenBalance(x7, address );
    console.log(`\tX7 balance: ${bal}`); 
}

describe("TokenMigrator", function () {
    let owner: SignerWithAddress,
        susan: SignerWithAddress,
        bob: SignerWithAddress,
        carl: SignerWithAddress,
        holder1: JsonRpcSigner;

    let swap: Contract;
    const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const X7 = "0x06D5cA7C9accd15a87d4993A421B7e702BDBaB20";

    const holder1_address = "0x9edc3668e4e990f23663341d0a667effdd6f1f56";

    let x7: Contract;
    let weth: Contract; 

    let addr: string;
    let sAddr: string;

    this.beforeEach(async () => {
        //await ethers.provider.send("hardhat_reset", []);
        [owner, susan, bob, carl] = await ethers.getSigners();
        const Swap = await ethers.getContractFactory("Swap", owner);
        swap = await Swap.deploy(X7,X7);
        console.log(`\tDeployed Swap contract at ${swap.address}`);
 
        weth = await ethers.getContractAt(WETH_ABI, WETH);
        x7 = await ethers.getContractAt("IERC20", X7); 

        addr = owner.address;
        sAddr = addr.slice(0, 8);
        await network.provider.request({
            method: "hardhat_impersonateAccount",
            params: [holder1_address],
        });
        
        holder1 = await ethers.provider.getSigner(holder1_address);
        holder1.address = holder1._address;
        /*
        holder1 = await ethers.provider.getSigner(holder1_address);
        holder1.address = holder1._address;
        */
        
    })
    it("WRAP 10 WETH", async function () { 
        const weth_bal = await getTokenBalance(weth, addr);
        weth.connect(owner).deposit({value: parse18Dec(10)}); 
        expect(await getTokenBalance(weth, addr) - weth_bal == (10)); 
        await printBalances(weth, x7, addr);
    })

    it("Swap 10 WETH for X7", async function () {
        //aprove 10 weth
        await weth.connect(owner).approve(swap.address, parse18Dec(10)); 

        let minOut = 0.93*parseWei(await swap.connect(owner).getOutMin(WETH, X7, parse18Dec(10)));
        await swap.connect(owner).swapTokens(WETH, parse18Dec(10), X7, parse18Dec(minOut), addr, false);
        expect(await getTokenBalance(weth, addr) == 0); 
        expect(await getTokenBalance(x7, addr) >= minOut); 
        await printBalances(weth, x7, addr);
        
    });
    
    it("Swap X7 Balance for WETH", async function () { 
        const x7_balance = (await getTokenBalance(x7, addr))-0.1;  

        await x7.connect(owner).approve(swap.address, parse18Dec(x7_balance)); 
        let minOut = 0.93*parseWei(await swap.connect(owner).getOutMin(X7, WETH,  parse18Dec(x7_balance)));
        await swap.connect(owner).swapTokens(X7, parse18Dec(x7_balance), WETH, parse18Dec(minOut), addr, true);
        
        expect(await getTokenBalance(weth, addr) >= minOut); 
        expect(await getTokenBalance(x7, addr) <= 0.1); 
        
        await printBalances(weth, x7, addr);
    });
    
    it("Test Deposit + Withdraw X7 Balance for WETH", async function () {  
        await owner.sendTransaction({
            to: holder1.address,
            value: ethers.utils.parseEther("1.0"), // Sends exactly 1.0 ether
          });
        const x7_to_deposit = (await getTokenBalance(x7, holder1.address))-0.1;  

        await x7.connect(holder1).approve(swap.address, parse18Dec(x7_to_deposit));  
        await swap.connect(holder1).deposit(parse18Dec(x7_to_deposit));

        let deposited_amount = parseWei(await swap.connect(holder1).getDepositedAmount(holder1.address));
 
        expect(await getTokenBalance(x7, addr) <= 0.10);  
        expect(deposited_amount <= x7_to_deposit);
        
        const amount = 10000;  
        await swap.connect(holder1).withdraw(parse18Dec(amount)); 
        expect((await getTokenBalance(x7, holder1.address)) >= amount); 
        expect((await getTokenBalance(x7, holder1.address)) <= x7_to_deposit); 

        await swap.connect(holder1).withdrawAll(); 
        expect((await getTokenBalance(x7, holder1.address)) >= x7_to_deposit); 
        expect((await swap.connect(holder1).getDepositedAmount(holder1.address)) == 0);  
    }); 

    

})