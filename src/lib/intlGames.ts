interface IntlGamesManifest {
  paths?: string[];
  regions?: Record<string, { gameSlug: string; name: string }[]>;
}

const manifest = import.meta.glob("../../content/intl-games/manifest.json", {
  eager: true,
  import: "default",
}) as Record<string, IntlGamesManifest>;

const data = Object.values(manifest)[0] ?? { paths: [], regions: {} };

export function getIntlGamePaths(): string[] {
  return [...(data.paths ?? [])].sort();
}

export function getIntlRegionGames(regionSlug: string): string[] {
  const entries = data.regions?.[regionSlug] ?? [];
  return entries.map((e) => e.gameSlug);
}

export function getAllIntlRegions(): string[] {
  return Object.keys(data.regions ?? {}).sort();
}
