import { useLocation } from "react-router-dom";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import PageSeo from "@/components/wordpress/PageSeo";
import WordPressContent from "@/components/wordpress/WordPressContent";
import { useWordPressPath } from "@/hooks/useLocalWordPressContent";
import { getBrandReviewFaqItems } from "@/lib/brandReviewFaqs";
import { isBrandReviewSlug } from "@/lib/brandReviewSlugs";
import { buildFaqPageJsonLd } from "@/lib/seo";
import NotFound from "@/pages/NotFound";

export function getWordPressCatchAllStaticPaths() {
  return [];
}

const WordPressPage = () => {
  const { pathname } = useLocation();
  const { data, isPending } = useWordPressPath(pathname);

  if (isPending) {
    return <PageLoadingState />;
  }

  if (!data) {
    return <NotFound />;
  }

  const faqItems = isBrandReviewSlug(data.slug)
    ? getBrandReviewFaqItems(data.slug)
    : [];
  const faqJsonLd = buildFaqPageJsonLd(faqItems);

  return (
    <>
      <PageSeo
        fallbackTitle={data.title}
        seo={data.seo}
        path={pathname}
        jsonLd={faqJsonLd}
      />
      <WordPressContent content={data} />
    </>
  );
};

export default WordPressPage;
