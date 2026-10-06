/** Canonical slugs for lottery brand review posts (comparison table). */
export const BRAND_REVIEW_SLUGS = [
  "thelotter-review",
  "wintrillions-review",
  "lottokings-review",
  "jackpot-com-review",
  "lotto247-review",
  "playhugelottos-review",
  "multilotto-review",
  "lotto-agent-review",
] as const;

export type BrandReviewSlug = (typeof BRAND_REVIEW_SLUGS)[number];

const SLUG_SET = new Set<string>(BRAND_REVIEW_SLUGS);

export function isBrandReviewSlug(slug: string): slug is BrandReviewSlug {
  return SLUG_SET.has(slug);
}
