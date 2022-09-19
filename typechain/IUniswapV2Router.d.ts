/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IUniswapV2RouterInterface extends ethers.utils.Interface {
  functions: {
    "addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "getAmountsOut(uint256,address[])": FunctionFragment;
    "removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "swapExactETHForTokens(uint256,address[],address,uint256)": FunctionFragment;
    "swapExactTokensForETH(uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactETHForTokens",
    values: [BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForETH",
    values: [BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForETHSupportingFeeOnTransferTokens",
    values: [BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    values: [BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactETHForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForETHSupportingFeeOnTransferTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class IUniswapV2Router extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: IUniswapV2RouterInterface;

  functions: {
    addLiquidity(
      tokenA: string,
      tokenB: string,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)"(
      tokenA: string,
      tokenB: string,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    removeLiquidity(
      tokenA: string,
      tokenB: string,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)"(
      tokenA: string,
      tokenB: string,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "swapExactETHForTokens(uint256,address[],address,uint256)"(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    swapExactTokensForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapExactTokensForETH(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapExactTokensForETHSupportingFeeOnTransferTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapExactTokensForTokensSupportingFeeOnTransferTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    tokenA: string,
    tokenB: string,
    amountADesired: BigNumberish,
    amountBDesired: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)"(
    tokenA: string,
    tokenB: string,
    amountADesired: BigNumberish,
    amountBDesired: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getAmountsOut(
    amountIn: BigNumberish,
    path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getAmountsOut(uint256,address[])"(
    amountIn: BigNumberish,
    path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  removeLiquidity(
    tokenA: string,
    tokenB: string,
    liquidity: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)"(
    tokenA: string,
    tokenB: string,
    liquidity: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapExactETHForTokens(
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "swapExactETHForTokens(uint256,address[],address,uint256)"(
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  swapExactTokensForETH(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapExactTokensForETH(uint256,uint256,address[],address,uint256)"(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapExactTokensForETHSupportingFeeOnTransferTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapExactTokensForTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapExactTokensForTokensSupportingFeeOnTransferTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      tokenA: string,
      tokenB: string,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
      }
    >;

    "addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)"(
      tokenA: string,
      tokenB: string,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
      }
    >;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    removeLiquidity(
      tokenA: string,
      tokenB: string,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
    >;

    "removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)"(
      tokenA: string,
      tokenB: string,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
    >;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "swapExactETHForTokens(uint256,address[],address,uint256)"(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swapExactTokensForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "swapExactTokensForETH(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swapExactTokensForETHSupportingFeeOnTransferTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swapExactTokensForTokensSupportingFeeOnTransferTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      tokenA: string,
      tokenB: string,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)"(
      tokenA: string,
      tokenB: string,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidity(
      tokenA: string,
      tokenB: string,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)"(
      tokenA: string,
      tokenB: string,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "swapExactETHForTokens(uint256,address[],address,uint256)"(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    swapExactTokensForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapExactTokensForETH(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapExactTokensForETHSupportingFeeOnTransferTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapExactTokensForTokensSupportingFeeOnTransferTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      tokenA: string,
      tokenB: string,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)"(
      tokenA: string,
      tokenB: string,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAmountsOut(uint256,address[])"(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      tokenA: string,
      tokenB: string,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)"(
      tokenA: string,
      tokenB: string,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "swapExactETHForTokens(uint256,address[],address,uint256)"(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    swapExactTokensForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapExactTokensForETH(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapExactTokensForETHSupportingFeeOnTransferTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokensSupportingFeeOnTransferTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)"(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
