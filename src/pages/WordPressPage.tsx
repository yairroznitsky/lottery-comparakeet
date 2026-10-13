import { useLocation } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { logicalPathFromPathname } from "@/i18n/paths";
import { shouldNoIndexFallback } from "@/i18n/pageTranslations";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import PageSeo from "@/components/wordpress/PageSeo";
import WordPressContent from "@/components/wordpress/WordPressContent";
import { useWordPressPath } from "@/hooks/useLocalWordPressContent";
import { getBrandReviewFaqItems } from "@/lib/brandReviewFaqs";
import { isBrandReviewSlug } from "@/lib/brandReviewSlugs";
import { buildFaqPageJsonLd } from "@/lib/seo";
import NotFound from "@/pages/NotFound";
import type { BrandReviewFaqItem } from "@/types/brandReviewFaq";

export function getWordPressCatchAllStaticPaths() {
  return [];
}

interface WordPressPageProps {
  initialBrandReviewFaqItems?: BrandReviewFaqItem[];
}

const WordPressPage = ({
  initialBrandReviewFaqItems,
}: WordPressPageProps) => {
  const { pathname } = useLocation();
  const locale = useLocale();
  const { data, isPending } = useWordPressPath(pathname);

  if (isPending) {
    return <PageLoadingState />;
  }

  if (!data) {
    return <NotFound />;
  }

  const faqItems = isBrandReviewSlug(data.slug)
    ? (initialBrandReviewFaqItems ??
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
