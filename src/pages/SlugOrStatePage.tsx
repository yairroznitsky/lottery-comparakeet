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
import type { BrandReviewFaqItem } from "@/types/brandReviewFaq";
import type { StateFaqItem } from "@/types/stateFaq";

export interface SlugOrStateLoaderData {
  kind: "state" | "wordpress" | "other";
  slug?: string;
  games?: string[];
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
  return { kind: "state", slug, games: manifestGames, faqItems };
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
        initialFaqItems={loaderData.faqItems as StateFaqItem[] | undefined}
      />
    );
  }

  const isStateSlug =
    getUsaStatePrerenderSlugs().includes(slug) ||
    Boolean(states?.includes(slug));

  if (isPending && !isStateSlug) {
    return <PageLoadingState />;
  }

  if (isStateSlug) {
    return <StateLandingPage stateSlug={slug} />;
  }

  return <WordPressPage />;
};

export default SlugOrStatePage;
