export interface WordPressFeaturedImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface WordPressSeoMetadata {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  robotsIndex?: boolean;
  robotsFollow?: boolean;
}

export interface WordPressContentView {
  id: number;
  title: string;
  contentHtml: string;
  excerptHtml: string;
  slug: string;
  date: string;
  modified: string;
  link: string;
  featuredImage: WordPressFeaturedImage | null;
  seo: WordPressSeoMetadata;
  contentType: "page" | "post";
}
