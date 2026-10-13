import { useLoaderData, useLocation } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { localeFromPathname, logicalPathFromPathname } from "@/i18n/paths";
import { shouldNoIndexFallback } from "@/i18n/pageTranslations";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import PageSeo from "@/components/wordpress/PageSeo";
import WordPressContent from "@/components/wordpress/WordPressContent";
import { useWordPressPath } from "@/hooks/useLocalWordPressContent";
import {
  getBrandReviewFaqItems,
  loadBrandReviewFaqItems,
} from "@/lib/brandReviewFaqs";
import { isBrandReviewSlug } from "@/lib/brandReviewSlugs";
import { buildFaqPageJsonLd } from "@/lib/seo";
import {
  loadWordPressOptional,
  slugFromPathname,
} from "@/lib/wordpressContent";
import NotFound from "@/pages/NotFound";
import type { BrandReviewFaqItem } from "@/types/brandReviewFaq";
import type { WordPressContentView } from "@/types/wordpress";

export function getWordPressCatchAllStaticPaths() {
  return [];
}

export interface WordPressLoaderData {
  wordpress: WordPressContentView | null;
  brandReviewFaqItems?: BrandReviewFaqItem[];
}

export async function wordPressLoader({
  request,
}: {
  request: Request;
}): Promise<WordPressLoaderData> {
  const pathname = new URL(request.url).pathname;
  const locale = localeFromPathname(pathname);
  const slug = slugFromPathname(pathname);
  if (!slug) {
    return { wordpress: null };
  }
  return {
    wordpress: await loadWordPressOptional(slug, locale),
    brandReviewFaqItems: isBrandReviewSlug(slug)
      ? await loadBrandReviewFaqItems(slug, locale)
      : undefined,
  };
}

interface WordPressPageProps {
  initialContent?: WordPressContentView | null;
  initialBrandReviewFaqItems?: BrandReviewFaqItem[];
}

const WordPressPage = ({
  initialContent,
  initialBrandReviewFaqItems,
}: WordPressPageProps) => {
  const { pathname } = useLocation();
  const locale = useLocale();
  const loaderData = useLoaderData() as
    | Partial<WordPressLoaderData>
    | null
    | undefined;
  const preloaded =
    initialContent !== undefined ? initialContent : loaderData?.wordpress;
  const { data, isPending } = useWordPressPath(pathname, preloaded);

  if (isPending) {
    return <PageLoadingState />;
  }

  if (!data) {
    return <NotFound />;
  }

  const faqItems = isBrandReviewSlug(data.slug)
    ? (initialBrandReviewFaqItems ??
      loaderData?.brandReviewFaqItems ??
      getBrandReviewFaqItems(data.slug, locale))
    : [];
  const faqJsonLd = buildFaqPageJsonLd(faqItems);
  const noIndexFallback = shouldNoIndexFallback(
    logicalPathFromPathname(pathname),
    locale,
  );

  return (
    <>
      <PageSeo
        fallbackTitle={data.title}
        seo={data.seo}
        path={pathname}
        jsonLd={faqJsonLd}
        noIndex={noIndexFallback}
      />
      <WordPressContent
        content={data}
        brandReviewFaqItems={faqItems}
      />
    </>
  );
};

export default WordPressPage;
