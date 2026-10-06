import SiteSeo from "@/components/seo/SiteSeo";
import { absoluteUrl } from "@/config/site";
import type { WordPressSeoMetadata } from "@/types/wordpress";

interface PageSeoProps {
  fallbackTitle: string;
  seo: WordPressSeoMetadata;
  path: string;
  jsonLd?: object | object[];
}

const PageSeo = ({ fallbackTitle, seo, path, jsonLd }: PageSeoProps) => {
  const description =
    seo.description ??
    `Read ${fallbackTitle} on Lottery Parakeet — lottery results, jackpots, and guides.`;

  const noIndex = seo.robotsIndex === false;
  const canonical = seo.canonical ?? absoluteUrl(path);

  return (
    <SiteSeo
      title={seo.title ?? fallbackTitle}
      description={description}
      path={path}
      canonical={canonical}
      image={seo.ogImage}
      ogType="article"
      noIndex={noIndex}
      titleTemplate={!seo.title}
      jsonLd={jsonLd}
    />
  );
};

export default PageSeo;
