import { getIntlGamePaths } from "@/lib/intlGames";
import { getAllStateGamePaths } from "@/lib/stateGames";
import { stateFaqSlugsWithContent } from "@/lib/stateFaqs";

/** State slugs to pre-render at `/:slug` (US lottery landing pages). */
export function getUsaStatePrerenderSlugs(): string[] {
  const fromFaqs = stateFaqSlugsWithContent();
  const fromGames = [...new Set(getAllStateGamePaths().map((p) => p.split("/")[0]!))];
  return [...new Set([...fromFaqs, ...fromGames])].sort();
}

/** Paths like `california/powerball` for `/:region/:game`. */
export function getUsaStateGamePrerenderPaths(): string[] {
  return getAllStateGamePaths();
}

/** International `region/game` paths (excludes US states). */
export function getIntlGamePrerenderPaths(): string[] {
  return getIntlGamePaths();
}

export function getAllGamePrerenderPaths(): string[] {
  return [...new Set([...getUsaStateGamePrerenderPaths(), ...getIntlGamePrerenderPaths()])].sort();
}
