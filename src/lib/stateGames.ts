import type { StateGamesFile } from "@/types/stateGames";

const gameFiles = import.meta.glob("../../content/state-games/*.json", {
  eager: true,
  import: "default",
}) as Record<string, StateGamesFile | { stateSlug: string; games: string[] }>;

const gamesByState = new Map<string, string[]>();

for (const [filePath, payload] of Object.entries(gameFiles)) {
  if (filePath.endsWith("manifest.json")) {
    continue;
  }
  const slug =
    "stateSlug" in payload && payload.stateSlug
      ? payload.stateSlug
      : filePath.split("/").pop()?.replace(/\.json$/, "");
  const games = payload.games ?? [];
  if (slug && games.length > 0) {
    gamesByState.set(slug, games);
  }
}

export function getStateGames(stateSlug: string): string[] {
  return gamesByState.get(stateSlug) ?? [];
}

export function getAllStateGamePaths(): string[] {
  const paths: string[] = [];
  for (const [state, games] of gamesByState.entries()) {
    for (const game of games) {
      paths.push(`${state}/${game}`);
    }
  }
  return paths.sort();
}
