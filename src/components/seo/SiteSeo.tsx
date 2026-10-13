import { Head } from "vite-react-ssg";
import {
  SITE_NAME,
  absoluteUrl,
  defaultOgImageUrl,
  getSiteUrl,
  pageTitle,
} from "@/config/site";
import { useLocale, useT } from "@/i18n/LocaleContext";
import {
  LOCALE_HREFLANG,
  LOCALE_HTML_LANG,
  LOCALE_OG,
  LOCALES,
  type Locale,
} from "@/i18n/locales";
import { localizePath, logicalPathFromPathname } from "@/i18n/paths";
import {
  getAvailableLocalesForPath,
  shouldNoIndexFallback,
} from "@/i18n/pageTranslations";
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
  locale: Locale,
  siteDescription: string,
): object | undefined {
  const siteUrl = getSiteUrl();
  const structured: object[] = [
    buildOrganizationJsonLd(siteUrl, SITE_NAME, locale),
  ];
  const logical = path ? logicalPathFromPathname(path) : "";
  if (logical === "" || path === "/" || path === undefined) {
    structured.push(buildWebSiteJsonLd(siteUrl, SITE_NAME, siteDescription, locale));
  }
  if (breadcrumbs && breadcrumbs.length > 0) {
    structured.push(
      buildBreadcrumbJsonLd(breadcrumbs, siteUrl, locale),
    );
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
  availableLocales,
}: SiteSeoProps) => {
  const locale = useLocale();
  const t = useT();
  const siteName = t("site.name");
  const fullTitle = titleTemplate ? pageTitle(title, siteName) : title;
  const canonicalPath =
    path !== undefined ? path : localizePath("/", locale);
  const canonicalUrl = canonical ?? absoluteUrl(canonicalPath);
  const ogImage = image ?? defaultOgImageUrl();
  const logicalPath = logicalPathFromPathname(canonicalPath);
  const hreflangLocales =
    availableLocales ?? getAvailableLocalesForPath(logicalPath);
  const indexBlocked =
    noIndex || shouldNoIndexFallback(logicalPath, locale);
  const robots = indexBlocked ? "noindex, follow" : "index, follow";
  const structured = buildStructuredGraph(
    canonicalPath,
    breadcrumbs,
    jsonLd,
    locale,
    t("site.webSiteDescription"),
  );
  const alternateLocales = LOCALES.filter((l) =>
    hreflangLocales.includes(l),
  );

  return (
    <Head>
      <html lang={LOCALE_HTML_LANG[locale]} />
      <title>{fullTitle}</title>
      <meta name="description" content={description || t("site.defaultDescription")} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content={siteName} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={LOCALE_OG[locale]} />
      {alternateLocales
        .filter((l) => l !== locale)
        .map((l) => (
          <meta
            key={l}
            property="og:locale:alternate"
            content={LOCALE_OG[l]}
          />
        ))}
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
      {alternateLocales.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={LOCALE_HREFLANG[l]}
          href={absoluteUrl(localizePath(`/${logicalPath}`, l))}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={absoluteUrl(localizePath(`/${logicalPath}`, "en"))}
      />
      {structured ? (
        <script type="application/ld+json">
          {JSON.stringify(structured)}
        </script>
      ) : null}
    </Head>
  );
};

export default SiteSeo;

export function useDefaultDescription(): string {
  return useT()("site.defaultDescription");
}
