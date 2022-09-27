import { TradingFeeRefundDto } from '../../dto';
import { ChainId } from '../ChainId';
import { InfinityNftSale } from '../NftSale';

export interface TransactionFeePhaseRewardsDoc {
  phaseName: string;
  phaseId: string;
  phaseIndex: number;
  userAddress: string;
  chainId: ChainId;
  rewards: number;
  volumeEth: number;
  volumeWei: string;
  volumeUSDC: number;
  updatedAt: number;
  userSells: number;
  userBuys: number;
  protocolFeesWei: string;
  protocolFeesEth: number;
  protocolFeesUSDC: number;
  config: Omit<TradingFeeRefundDto, 'rewardSupplyUsed'>;
  isCopiedToRaffles: boolean;
}

export interface AllTimeTransactionFeeRewardsDoc {
  userAddress: string;
  chainId: ChainId;
  rewards: number;
  volumeEth: number;
  volumeWei: string;
  volumeUSDC: number;
  updatedAt: number;
  userSells: number;
  userBuys: number;
  protocolFeesWei: string;
  protocolFeesEth: number;
  protocolFeesUSDC: number;
}

export interface TransactionFeeRewardDoc {
  userAddress: string;
  chainId: ChainId;
  sale: InfinityNftSale;
  volumeWei: string;
  volumeEth: number;
  volumeUSDC: number;
  isSplit: boolean;
  phaseId: string;
  phaseName: string;
  phaseIndex: number;
  config: Omit<TradingFeeRefundDto, 'rewardSupplyUsed'>;
  isAggregated: boolean;
  reward: number;
  protocolFeesWei: string;
  protocolFeesEth: number;
  protocolFeesUSDC: number;
}
