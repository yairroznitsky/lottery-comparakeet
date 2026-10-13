import { useLoaderData, useParams } from "react-router-dom";
import { RESERVED_SLUGS } from "@/constants/reservedSlugs";
import { localeFromPathname } from "@/i18n/paths";
import { useUsaStates } from "@/hooks/useLotteryData";
import { loadBrandReviewFaqItems } from "@/lib/brandReviewFaqs";
import { isBrandReviewSlug } from "@/lib/brandReviewSlugs";
import { getUsaStatePrerenderSlugs } from "@/lib/prerenderRoutes";
import { getStateGames } from "@/lib/stateGames";
import { loadStateFaqItems } from "@/lib/stateFaqs";
import {
  getWordPressSingleSegmentStaticSlugs,
  loadWordPressOptional,
} from "@/lib/wordpressContent";
import StateLandingPage from "@/pages/StateLandingPage";
import WordPressPage from "@/pages/WordPressPage";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import type { BrandReviewFaqItem } from "@/types/brandReviewFaq";
import type { StateFaqItem } from "@/types/stateFaq";
import type { WordPressContentView } from "@/types/wordpress";

export interface SlugOrStateLoaderData {
  kind: "state" | "wordpress" | "other";
  slug?: string;
  games?: string[];
  faqItems?: StateFaqItem[] | BrandReviewFaqItem[];
  /** WordPress page body (wordpress kind) or state "About" section (state kind). */
  wordpress?: WordPressContentView | null;
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
  if (!slug) {
    return { kind: "other" };
  }
  const wordpress = await loadWordPressOptional(slug, locale);
  if (
    !RESERVED_SLUGS.has(slug) &&
    !isBrandReviewSlug(slug) &&
    getUsaStatePrerenderSlugs().includes(slug)
  ) {
    return {
      kind: "state",
      slug,
      games: getStateGames(slug),
      faqItems: await loadStateFaqItems(slug, locale),
      wordpress,
    };
  }
  if (isBrandReviewSlug(slug)) {
    return {
      kind: "wordpress",
      slug,
      wordpress,
      faqItems: await loadBrandReviewFaqItems(slug, locale),
    };
  }
  return { kind: wordpress ? "wordpress" : "other", slug, wordpress };
}

const SlugOrStatePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const loaderData = useLoaderData() as SlugOrStateLoaderData | null | undefined;
  const { data: states, isPending } = useUsaStates();

  if (!slug) {
    return <WordPressPage />;
  }

  if (loaderData?.kind === "wordpress") {
    return (
      <WordPressPage
        initialContent={loaderData.wordpress}
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
        initialAboutContent={loaderData.wordpress}
      />
    );
  }

  if (RESERVED_SLUGS.has(slug)) {
    return <WordPressPage initialContent={loaderData?.wordpress} />;
  }

  const isStateSlug =
    getUsaStatePrerenderSlugs().includes(slug) ||
    Boolean(states?.includes(slug));

  if (isStateSlug) {
    return <StateLandingPage stateSlug={slug} />;
  }

  if (isPending) {
    return <PageLoadingState />;
  }

  return <WordPressPage initialContent={loaderData?.wordpress} />;
};

export default SlugOrStatePage;
