import { TokenStandard } from './Token';

export enum SaleSource {
  OpenSea = 'OPENSEA',
  Infinity = 'INFINITY'
}

export interface NftSale {
  chainId: string;
  txHash: string;
  blockNumber: number;
  timestamp: number;
  collectionAddress: string;
  tokenId: string;
  price: number;
  paymentToken: string;
  buyer: string;
  seller: string;
  quantity: number;
  source: SaleSource;
  tokenType: TokenStandard;
}