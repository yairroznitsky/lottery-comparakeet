import { NON_EN_LOCALES } from "@/i18n/locales";

/** Single-segment routes handled outside US state landing. */
export const RESERVED_SLUGS = new Set([
  ...NON_EN_LOCALES,
  "best-online-lottery-sites",
  "buy-lottery-tickets",
  "top-jackpots",
  "usa-lottery",
  "international-results",
  "play-responsibly",
  "lottery-win-claim-forms",
  "kerala-lottery-results",
]);
