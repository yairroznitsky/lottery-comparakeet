/** WordPress page slugs used for international lottery result pages. */
export function intlGameWordPressSlugCandidates(
  regionSlug: string,
  gameSlug: string,
): string[] {
  const composite = `${regionSlug}-${gameSlug}`;
  return [
    `${composite}-latest-results-winning-numbers`,
    `${gameSlug}-latest-results-winning-numbers`,
    composite,
    gameSlug,
    regionSlug,
  ];
}

export function primaryIntlGameWordPressSlug(
  regionSlug: string,
  gameSlug: string,
): string {
  return `${regionSlug}-${gameSlug}-latest-results-winning-numbers`;
}
