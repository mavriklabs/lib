/**
 * Possible lock-in periods for staking.
 * This represents the 'Duration' enum from the smart contract.
 */
export enum StakeDuration {
  /**
   * 0 months (NONE).
   */
  X0 = 0,
  /**
   * 3 months (THREE_MONTHS).
   */
  X3 = 3,
  /**
   * 6 months (SIX_MONTHS).
   */
  X6 = 6,
  /**
   * 12 months (TWELVE_MONTHS).
   */
  X12 = 12
}
