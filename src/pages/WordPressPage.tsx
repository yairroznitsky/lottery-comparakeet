import { useLocation } from "react-router-dom";
import PageLoadingState from "@/components/wordpress/PageLoadingState";
import PageSeo from "@/components/wordpress/PageSeo";
import WordPressContent from "@/components/wordpress/WordPressContent";
import { useWordPressPath } from "@/hooks/useLocalWordPressContent";
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

  return (
    <>
      <PageSeo fallbackTitle={data.title} seo={data.seo} path={pathname} />
      <WordPressContent content={data} />
    </>
  );
};

export default WordPressPage;
