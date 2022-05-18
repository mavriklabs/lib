import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';
import { ChainId, OBOrder } from '../types/core';
import { chainConstants, NULL_ADDRESS } from './constants';

export function getTxnCurrencyAddress(_chainId: string): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.wethAddress ?? NULL_ADDRESS;
}

export function getOBComplicationAddress(_chainId: string): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.infinityContracts?.obComplicationAddress ?? NULL_ADDRESS;
}

export function getExchangeAddress(_chainId: string): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.infinityContracts?.exchangeAddress ?? NULL_ADDRESS;
}

export function getFeeTreasuryAddress(_chainId: string): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.infinityContracts?.feeTreasuryAddress ?? NULL_ADDRESS;
}

export function getCreatorFeeManagerAddress(_chainId: string): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.infinityContracts?.creatorsFeeManagerAddress ?? NULL_ADDRESS;
}

export const getCurrentOBOrderPrice = (
  order: Pick<OBOrder, 'startPriceEth' | 'startTimeMs' | 'endPriceEth' | 'endTimeMs'>
): BigNumber => {
  const startTime = BigNumber.from(order.startTimeMs);
  const endTime = BigNumber.from(order.endTimeMs);
  const startPrice = BigNumber.from(parseEther(String(order.startPriceEth)));
  const endPrice = BigNumber.from(parseEther(String(order.endPriceEth)));
  const duration = endTime.sub(startTime);
  let priceDiff = BigNumber.from(0);
  if (startPrice.gt(endPrice)) {
    priceDiff = startPrice.sub(endPrice);
  } else {
    priceDiff = endPrice.sub(startPrice);
  }
  if (priceDiff.eq(0) || duration.eq(0)) {
    return startPrice;
  }
  const elapsedTime = BigNumber.from(Date.now()).sub(startTime.toNumber());
  const precision = 10000;
  const portion = elapsedTime.gt(duration) ? 1 : elapsedTime.mul(precision).div(duration);
  priceDiff = priceDiff.mul(portion).div(precision);
  let currentPrice = BigNumber.from(0);
  if (startPrice.gt(endPrice)) {
    currentPrice = startPrice.sub(priceDiff);
  } else {
    currentPrice = startPrice.add(priceDiff);
  }
  return currentPrice;
};

export const isOBOrderExpired = (order: Pick<OBOrder, 'endTimeMs'>): boolean => {
  // special case of never expire
  if (order.endTimeMs === 0) {
    return false;
  }

  return order.endTimeMs < Date.now();
};
