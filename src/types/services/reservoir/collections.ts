export interface ReservoirSingleCollectionResponse {
  collection: ReservoirCollection;
}

export interface ReservoirCollection {
  id: string;
  name: string;
  slug: string;
  image: string;
  metadata: ReservoirCollectionMetadata;
  sampleImages: string[];
  tokenCount: string | number;
  ownerCount: string | number;
  onSaleCount: string | number;
  floorAsk: ReservoirCollectionFloorAsk;
  topBid: ReservoirCollectionTopBid;
  rank: ReservoirCollectionPeriodStat;
  volume: ReservoirCollectionPeriodStat;
  volumeChange: ReservoirCollectionPeriodStat;
  floorSale: ReservoirCollectionPeriodStat;
  floorSaleChange: ReservoirCollectionPeriodStat;
  attributes: ReservoirCollectionAttribute[];
}

export interface ReservoirCollectionFloorAsk {
  id: string;
  price: number;
  maker: string;
  validFrom: number;
  validUntil: number;
  token: {
    contract: string;
    tokenId: string;
    name: string;
    image: string;
  };
}

export interface ReservoirCollectionTopBid {
  id: string;
  value: number;
  maker: string;
  validFrom: number;
  validUntil: number;
}

export interface ReservoirCollectionPeriodStat {
  '1day': number;
  '7day': number;
  '30day': number;
  allTime?: number;
}

export interface ReservoirCollectionAttribute {
  key: string;
  kind: string;
  count: number;
}

export interface ReservoirCollectionMetadata {
  imageUrl: string;
  discordUrl: string;
  description: string;
  externalUrl: string;
  bannerImageUrl: string;
  twitterUsername: string;
}
