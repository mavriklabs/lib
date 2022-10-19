import { ChainId } from '../ChainId';

export enum DistributionType {
  ETH = 'ETH',
  INFT = 'INFT'
}

export enum EthDistributionSources {
  Curation = 'CURATION',
  Referrals = 'REFERRALS'
}

export interface ETHDistribution {
  type: DistributionType.ETH;
  chainId: ChainId;
  stakingContractAddress: string;
  tokenContractAddress: string;
  airdropContractAddress: string;
  maxTimestamp: number;
  sources: Record<EthDistributionSources, number>;
}

export enum INFTDistributionSources {
  TradingFeeRefund = 'TRADING_FEE_REFUND'
}

export interface INFTDistribution {
  type: DistributionType.INFT;
  chainId: ChainId;
  tokenContractAddress: string;
  airdropContractAddress: string;
  phaseIds: string[];
  sources: Record<INFTDistributionSources, number>;
}

export type DistributionConfig = ETHDistribution | INFTDistribution;

export interface MerkleRootDoc<T extends string> {
  config: DistributionConfig;
  updatedAt: number;
  nonce: number;
  numEntries: number;
  root: string;
  totalCumulativeAmount: string;
  sourceAmounts: Record<T, string>;
}

export interface MerkleRootLeafDoc<T extends string> {
  nonce: number;
  address: string;
  cumulativeAmount: string;
  expectedMerkleRoot: string;
  proof: string[];
  leaf: string;
  updatedAt: number;
  sourcesAmounts: Record<T, string>;
}
