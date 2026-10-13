import { useLoaderData, useParams } from "react-router-dom";
import { RESERVED_SLUGS } from "@/constants/reservedSlugs";
import { localeFromPathname } from "@/i18n/paths";
import { useUsaStates } from "@/hooks/useLotteryData";
import { loadBrandReviewFaqItems } from "@/lib/brandReviewFaqs";
import { isBrandReviewSlug } from "@/lib/brandReviewSlugs";
import { getUsaStatePrerenderSlugs } from "@/lib/prerenderRoutes";
import { getStateGames } from "@/lib/stateGames";
import { loadStateFaqItems } from "@/lib/stateFaqs";
import { getWordPressSingleSegmentStaticSlugs } from "@/lib/wordpressContent";
import StateLandingPage from "@/pages/StateLandingPage";
import WordPressPage from "@/pages/WordPressPage";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import {
  fetchUsaResults,
  fetchUsaStateGames,
} from "@/services/lotteryResultsApi";
import type { BrandReviewFaqItem } from "@/types/brandReviewFaq";
import type { DrawResultView } from "@/types/lottery";
import type { StateFaqItem } from "@/types/stateFaq";

export interface SlugOrStateLoaderData {
  kind: "state" | "wordpress" | "other";
  slug?: string;
  games?: string[];
  results?: DrawResultView[];
  faqItems?: StateFaqItem[] | BrandReviewFaqItem[];
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
  request,
}: {
  params: { slug?: string };
  request: Request;
}): Promise<SlugOrStateLoaderData> {
  const slug = params.slug;
  const locale = localeFromPathname(new URL(request.url).pathname);
  if (!slug || RESERVED_SLUGS.has(slug)) {
    return { kind: "other" };
  }
  if (isBrandReviewSlug(slug)) {
    return {
      kind: "wordpress",
      slug,
      faqItems: await loadBrandReviewFaqItems(slug, locale),
    };
  }
  if (!getUsaStatePrerenderSlugs().includes(slug)) {
    return { kind: "other" };
  }
  const manifestGames = getStateGames(slug);
  const faqItems = await loadStateFaqItems(slug, locale);
  if (!import.meta.env.SSR) {
    return { kind: "state", slug, games: manifestGames, faqItems };
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
  return { kind: "state", slug, games, results, faqItems };
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

  if (loaderData?.kind === "wordpress") {
    return (
      <WordPressPage
        initialBrandReviewFaqItems={
          loaderData.faqItems as BrandReviewFaqItem[] | undefined
        }
      />
    );
  }

  if (loaderData?.kind === "state" && loaderData.slug) {
    return (
      <StateLandingPage
        stateSlug={loaderData.slug}
        initialGames={loaderData.games}
        initialResults={loaderData.results}
        initialFaqItems={loaderData.faqItems as StateFaqItem[] | undefined}
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
