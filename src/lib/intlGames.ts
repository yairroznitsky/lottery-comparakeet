interface IntlGamesManifest {
  paths?: string[];
  regions?: Record<string, { gameSlug: string; name: string }[]>;
}

const manifest = import.meta.glob("../../content/intl-games/manifest.json", {
  eager: true,
  import: "default",
}) as Record<string, IntlGamesManifest>;

const data = Object.values(manifest)[0] ?? { paths: [], regions: {} };

export interface IntlRegionGameEntry {
  gameSlug: string;
  displayName: string;
}

function displayNameFromApiName(fullName: string): string {
  const dashIndex = fullName.indexOf(" - ");
  return dashIndex >= 0 ? fullName.slice(dashIndex + 3) : fullName;
}

export function getIntlRegionGameEntries(
  regionSlug: string,
): IntlRegionGameEntry[] {
  const entries = data.regions?.[regionSlug] ?? [];
  const seen = new Set<string>();
  const result: IntlRegionGameEntry[] = [];
  for (const entry of entries) {
    if (seen.has(entry.gameSlug)) {
      continue;
    }
    seen.add(entry.gameSlug);
    result.push({
      gameSlug: entry.gameSlug,
      displayName: displayNameFromApiName(entry.name),
    });
  }
  return result;
}

export function getIntlGamePaths(): string[] {
  return [...new Set(data.paths ?? [])].sort();
}

export function getIntlRegionGames(regionSlug: string): string[] {
  return getIntlRegionGameEntries(regionSlug).map((e) => e.gameSlug);
}

export function getIntlGameDisplayName(
  regionSlug: string,
  gameSlug: string,
): string | null {
  const entries = data.regions?.[regionSlug] ?? [];
  const hit = entries.find((e) => e.gameSlug === gameSlug);
  return hit ? displayNameFromApiName(hit.name) : null;
}

export function getAllIntlRegions(): string[] {
  return Object.keys(data.regions ?? {}).sort();
}
