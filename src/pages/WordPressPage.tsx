import { useLocation } from "react-router-dom";
import PageSeo from "@/components/wordpress/PageSeo";
import WordPressContent from "@/components/wordpress/WordPressContent";
import { getWordPressByPath } from "@/lib/wordpressContent";
import NotFound from "@/pages/NotFound";

export function getWordPressCatchAllStaticPaths() {
  return [];
}

const WordPressPage = () => {
  const { pathname } = useLocation();
  const data = getWordPressByPath(pathname);

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
