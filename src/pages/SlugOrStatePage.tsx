import { useLoaderData, useParams } from "react-router-dom";
import { RESERVED_SLUGS } from "@/constants/reservedSlugs";
import { useUsaStates } from "@/hooks/useLotteryData";
import { getUsaStatePrerenderSlugs } from "@/lib/prerenderRoutes";
import { getStateGames } from "@/lib/stateGames";
import { getWordPressSingleSegmentStaticSlugs } from "@/lib/wordpressContent";
import StateLandingPage from "@/pages/StateLandingPage";
import WordPressPage from "@/pages/WordPressPage";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import {
  fetchUsaResults,
  fetchUsaStateGames,
} from "@/services/lotteryResultsApi";
import type { DrawResultView } from "@/types/lottery";

export interface SlugOrStateLoaderData {
  kind: "state" | "other";
  slug?: string;
  games?: string[];
  results?: DrawResultView[];
}

export function getSlugOrStateStaticPaths() {
  return [
    ...new Set([
      ...getUsaStatePrerenderSlugs(),
      ...getWordPressSingleSegmentStaticSlugs(),
    ]),
  ].sort();
}

export async function slugOrStateLoader({
  params,
}: {
  params: { slug?: string };
}): Promise<SlugOrStateLoaderData> {
  const slug = params.slug;
  if (!slug || RESERVED_SLUGS.has(slug)) {
    return { kind: "other" };
  }
  if (!getUsaStatePrerenderSlugs().includes(slug)) {
    return { kind: "other" };
  }
  const manifestGames = getStateGames(slug);
  if (!import.meta.env.SSR) {
    return { kind: "state", slug, games: manifestGames };
  }
  let games = manifestGames;
  let results: DrawResultView[] = [];
  try {
    if (games.length === 0) {
      games = await fetchUsaStateGames(slug);
    }
    results = await fetchUsaResults(slug, undefined, "lastTen");
  } catch {
    /* build-time API hiccup; page still prerenders from manifest + FAQ */
  }
  return { kind: "state", slug, games, results };
}

const SlugOrStatePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const loaderData = useLoaderData() as SlugOrStateLoaderData | undefined;
  const { data: states, isPending } = useUsaStates();

  if (!slug) {
    return <WordPressPage />;
  }

  if (RESERVED_SLUGS.has(slug)) {
    return <WordPressPage />;
  }

  if (loaderData?.kind === "state" && loaderData.slug) {
    return (
      <StateLandingPage
        stateSlug={loaderData.slug}
        initialGames={loaderData.games}
        initialResults={loaderData.results}
      />
    );
  }

  if (isPending) {
    return <PageLoadingState />;
  }

  if (states?.includes(slug)) {
    return <StateLandingPage stateSlug={slug} />;
  }

  return <WordPressPage />;
};

export default SlugOrStatePage;
