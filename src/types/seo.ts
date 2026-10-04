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
}
