import { Head } from "vite-react-ssg";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  absoluteUrl,
  defaultOgImageUrl,
  getSiteUrl,
  pageTitle,
} from "@/config/site";
import {
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo";
import type { PageMeta } from "@/types/seo";

interface SiteSeoProps extends PageMeta {
  /** When true, append site name to document title (default). */
  titleTemplate?: boolean;
}

function buildStructuredGraph(
  path: string | undefined,
  breadcrumbs: PageMeta["breadcrumbs"],
  extra: PageMeta["jsonLd"],
): object | undefined {
  const siteUrl = getSiteUrl();
  const structured: object[] = [buildOrganizationJsonLd(siteUrl, SITE_NAME)];
  if (path === "/" || path === undefined || path === "") {
    structured.push(buildWebSiteJsonLd(siteUrl, SITE_NAME));
  }
  if (breadcrumbs && breadcrumbs.length > 0) {
    structured.push(buildBreadcrumbJsonLd(breadcrumbs, siteUrl));
  }
  if (extra) {
    structured.push(...(Array.isArray(extra) ? extra : [extra]));
  }
  if (structured.length === 0) {
    return undefined;
  }
  if (structured.length === 1) {
    return structured[0];
  }
  return {
    "@context": "https://schema.org",
    "@graph": structured.map((node) => {
      const entry = { ...node } as Record<string, unknown>;
      delete entry["@context"];
      return entry;
    }),
  };
}

const SiteSeo = ({
  title,
  description,
  path,
  canonical,
  image,
  ogType = "website",
  noIndex = false,
  breadcrumbs,
  jsonLd,
  titleTemplate = true,
}: SiteSeoProps) => {
  const fullTitle = titleTemplate ? pageTitle(title) : title;
  const canonicalUrl =
    canonical ?? (path !== undefined ? absoluteUrl(path) : absoluteUrl("/"));
  const ogImage = image ?? defaultOgImageUrl();
  const robots = noIndex ? "noindex, follow" : "index, follow";
  const structured = buildStructuredGraph(path, breadcrumbs, jsonLd);

  return (
    <Head>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content={SITE_NAME} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonicalUrl} />
      {structured ? (
        <script type="application/ld+json">
          {JSON.stringify(structured)}
        </script>
      ) : null}
    </Head>
  );
};

export default SiteSeo;

export { DEFAULT_DESCRIPTION, SITE_NAME };
