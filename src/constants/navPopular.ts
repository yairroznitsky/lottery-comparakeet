/** Curated state slugs for nav dropdowns (must match API slugs). */
export const POPULAR_USA_STATE_SLUGS = [
  "california",
  "new-york",
  "florida",
  "texas",
  "new-jersey",
  "pennsylvania",
] as const;

/** Same list as the USA Lottery nav dropdown “Popular” section. */
export function listPopularUsaStates(
  apiStateSlugs?: string[] | null,
): string[] {
  if (!apiStateSlugs?.length) {
    return [...POPULAR_USA_STATE_SLUGS];
  }
  return POPULAR_USA_STATE_SLUGS.filter((slug) =>
    apiStateSlugs.includes(slug),
  );
}

export function listPopularUsaStatesExcept(
  currentSlug: string,
  apiStateSlugs?: string[] | null,
): string[] {
  return listPopularUsaStates(apiStateSlugs).filter(
    (slug) => slug !== currentSlug,
  );
}
