import type { Locale } from "@/i18n/locales";

export interface BreadcrumbItem {
  name: string;
  path?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  path?: string;
  canonical?: string;
  image?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: object | object[];
  /** Locales with a full translation for this page (for hreflang). Defaults to current locale only. */
  availableLocales?: Locale[];
}
