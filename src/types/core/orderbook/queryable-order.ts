import { OrderKind } from './order-kind';
import { OrderSource } from './order-source';
import { OrderStatus } from './order-status';

export interface QueryableOrder {
  isSellOrder: boolean;
  /**
   * start times
   */
  startTime: number;
  endTime: number;
  startTimeMs: number;
  endTimeMs: number;

  maker: string;
  taker: string;

  numItems: number;

  currency: string;

  /**
   * base prices - does not include additional costs
   * needed to execute order
   */
  startPrice: string;
  endPrice: string;

  startPriceEth: number;
  endPriceEth: number;
  startPricePerItem: string;
  startPricePerItemEth: number;
  endPricePerItem: string;
  endPricePerItemEth: number;

  /**
   * gas to fulfill the order
   */
  gasUsageString: string;
  gasUsage: number;

  nonce: string;

  /**
   * gas to fulfill order on infinity
   */
  maxGasPrice: string;
  maxGasPriceGwei: number;
  maxGasPriceEth: number;

  /**
   * whether every item in the order has a blue check
   */
  hasBlueCheck: boolean;

  complication: string;

  sourceMarketplace: OrderSource;

  orderKind: OrderKind;

  status: OrderStatus;
  /**
   * is true if the order is `active` or `inactive`
   */
  isValid: boolean;
}