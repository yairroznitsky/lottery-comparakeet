import { intlFaqPathsWithContent } from "@/lib/intlFaqs";
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

/** International game paths with FAQ content (SEO pages; others are client-rendered). */
export function getIntlGamePrerenderPaths(): string[] {
  return intlFaqPathsWithContent();
}

/** Paths for `/:region/:game` static generation (USA games + intl FAQ hubs). */
export function getDrawResultsPrerenderPaths(): string[] {
  return [
    ...new Set([
      ...getUsaStateGamePrerenderPaths(),
      ...getIntlGamePrerenderPaths(),
    ]),
  ].sort();
}
