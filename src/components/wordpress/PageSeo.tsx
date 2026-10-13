import SiteSeo from "@/components/seo/SiteSeo";
import { absoluteUrl } from "@/config/site";
import type { WordPressSeoMetadata } from "@/types/wordpress";

interface PageSeoProps {
  fallbackTitle: string;
  seo: WordPressSeoMetadata;
  path: string;
  jsonLd?: object | object[];
  noIndex?: boolean;
}

const PageSeo = ({ fallbackTitle, seo, path, jsonLd, noIndex }: PageSeoProps) => {
  const description =
    seo.description ??
    `Read ${fallbackTitle} on Lottery Parakeet — lottery results, jackpots, and guides.`;

  const noIndexFinal = noIndex === true || seo.robotsIndex === false;
  const canonical = seo.canonical ?? absoluteUrl(path);

  return (
    <SiteSeo
      title={seo.title ?? fallbackTitle}
      description={description}
      path={path}
      canonical={canonical}
      image={seo.ogImage}
      ogType="article"
      noIndex={noIndexFinal}
      titleTemplate={!seo.title}
      jsonLd={jsonLd}
    />
  );
};

export default PageSeo;
