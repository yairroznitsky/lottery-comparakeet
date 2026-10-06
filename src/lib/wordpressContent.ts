import { RESERVED_SLUGS } from "@/constants/reservedSlugs";
import { intlGameWordPressSlugCandidates } from "@/lib/intlWpSlugs";
import { getUsaStatePrerenderSlugs } from "@/lib/prerenderRoutes";
import type { WordPressContentView } from "@/types/wordpress";
import wpManifest from "../../content/wordpress/manifest.json";

type JsonModule = { default: WordPressContentView };

const pageLoaders = import.meta.glob("../../content/wordpress/pages/*.json");
const postLoaders = import.meta.glob("../../content/wordpress/posts/*.json");

const contentCache = new Map<string, WordPressContentView>();

const DEDICATED_APP_SLUGS = new Set([
  "best-online-lottery-sites",
  "top-jackpots",
  "usa-lottery",
  "international-results",
]);

/** Marketing / legal pages worth pre-rendering (not legacy game mirror URLs). */
const STATIC_WORDPRESS_PAGE_SLUGS = new Set([
  "about-us",
  "articles",
  "cookies-policy",
  "faqs",
  "jackpots",
  "lottery-results",
  "play-responsibly",
  "buy-lottery-tickets",
  "lottery-win-claim-forms",
  "kerala-lottery-results",
  "india-kerala-lottery-results",
]);

function slugFromModulePath(modulePath: string): string {
  return modulePath.split("/").pop()?.replace(/\.json$/, "") ?? "";
}

function buildSlugLoaderMap(
  loaders: Record<string, () => Promise<unknown>>,
): Map<string, () => Promise<JsonModule>> {
  const map = new Map<string, () => Promise<JsonModule>>();
  for (const [modulePath, loader] of Object.entries(loaders)) {
    map.set(slugFromModulePath(modulePath), loader as () => Promise<JsonModule>);
  }
  return map;
}

const pageBySlug = buildSlugLoaderMap(pageLoaders);
const postBySlug = buildSlugLoaderMap(postLoaders);

export interface WordPressPostSummary {
  slug: string;
  title: string;
  date: string;
  modified?: string;
}

function postSummarySortTime(post: WordPressPostSummary): number {
  const iso = post.modified ?? post.date;
  const t = new Date(iso).getTime();
  return Number.isNaN(t) ? 0 : t;
}

export function slugFromPathname(pathname: string): string | null {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  if (normalized === "/") {
    return null;
  }
  const segments = normalized.split("/").filter(Boolean);
  const slug = segments[segments.length - 1];
  return slug ? decodeURIComponent(slug) : null;
}

export function hasWordPressSlug(slug: string): boolean {
  return pageBySlug.has(slug) || postBySlug.has(slug);
}

/** Legacy WP URLs duplicated by React game/state routes — skip SSG. */
export function isLegacyMirrorWordPressSlug(slug: string): boolean {
  if (slug.startsWith("https-lottery-comparakeet-com-")) {
    return true;
  }
  if (/results-winning-numbers/i.test(slug)) {
    return true;
  }
  if (/winning-numbers-for/i.test(slug)) {
    return true;
  }
  if (/last-year-results/i.test(slug)) {
    return true;
  }
  if (/-latest-results/i.test(slug)) {
    return true;
  }
  return false;
}

export async function loadWordPressOptional(
  slug: string,
): Promise<WordPressContentView | null> {
  const cached = contentCache.get(slug);
  if (cached) {
    return cached;
  }

  const loader = pageBySlug.get(slug) ?? postBySlug.get(slug);
  if (!loader) {
    return null;
  }

  const mod = await loader();
  const view = mod.default;
  contentCache.set(slug, view);
  return view;
}

export async function loadWordPressIntlGameOptional(
  regionSlug: string,
  gameSlug: string,
): Promise<WordPressContentView | null> {
  for (const candidate of intlGameWordPressSlugCandidates(
    regionSlug,
    gameSlug,
  )) {
    const content = await loadWordPressOptional(candidate);
    if (content) {
      return content;
    }
  }
  return null;
}

export async function loadWordPressByPath(
  pathname: string,
): Promise<WordPressContentView | null> {
  const slug = slugFromPathname(pathname);
  if (!slug) {
    return null;
  }
  return loadWordPressOptional(slug);
}

export function getRecentPostSummaries(perPage = 6): WordPressPostSummary[] {
  const posts = [...(wpManifest.posts ?? [])] as WordPressPostSummary[];
  return posts
    .sort((a, b) => postSummarySortTime(b) - postSummarySortTime(a))
    .slice(0, perPage);
}

/** Display date for guides list (prefers last updated). */
export function postSummaryDisplayDate(post: WordPressPostSummary): string {
  return post.modified ?? post.date;
}

export function getAllWordPressSlugs(): string[] {
  return [...new Set([...pageBySlug.keys(), ...postBySlug.keys()])].sort();
}

/** Single-segment routes to pre-render (posts + marketing/reserved only). */
export function getWordPressSingleSegmentStaticSlugs(): string[] {
  const stateSlugs = new Set(getUsaStatePrerenderSlugs());
  const slugs = new Set<string>();

  for (const slug of postBySlug.keys()) {
    if (!stateSlugs.has(slug)) {
      slugs.add(slug);
    }
  }

  for (const slug of RESERVED_SLUGS) {
    if (stateSlugs.has(slug) || DEDICATED_APP_SLUGS.has(slug)) {
      continue;
    }
    if (hasWordPressSlug(slug)) {
      slugs.add(slug);
    }
  }

  for (const slug of STATIC_WORDPRESS_PAGE_SLUGS) {
    if (!stateSlugs.has(slug) && hasWordPressSlug(slug)) {
      slugs.add(slug);
    }
  }

  return [...slugs].sort();
}
