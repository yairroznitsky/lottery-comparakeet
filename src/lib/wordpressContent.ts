import { intlGameWordPressSlugCandidates } from "@/lib/intlWpSlugs";
import { getUsaStatePrerenderSlugs } from "@/lib/prerenderRoutes";
import type { WordPressContentView } from "@/types/wordpress";

const pageFiles = import.meta.glob("../../content/wordpress/pages/*.json", {
  eager: true,
  import: "default",
}) as Record<string, WordPressContentView>;

const postFiles = import.meta.glob("../../content/wordpress/posts/*.json", {
  eager: true,
  import: "default",
}) as Record<string, WordPressContentView>;

const pagesBySlug = new Map<string, WordPressContentView>();
const postsBySlug = new Map<string, WordPressContentView>();

for (const payload of Object.values(pageFiles)) {
  if (payload?.slug) {
    pagesBySlug.set(payload.slug, payload);
  }
}

for (const payload of Object.values(postFiles)) {
  if (payload?.slug) {
    postsBySlug.set(payload.slug, payload);
  }
}

const postsByDateDesc = [...postsBySlug.values()].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function slugFromPathname(pathname: string): string | null {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  if (normalized === "/") {
    return null;
  }
  const segments = normalized.split("/").filter(Boolean);
  const slug = segments[segments.length - 1];
  return slug ? decodeURIComponent(slug) : null;
}

export function getWordPressBySlug(slug: string): WordPressContentView {
  const page = pagesBySlug.get(slug);
  if (page) {
    return page;
  }
  const post = postsBySlug.get(slug);
  if (post) {
    return post;
  }
  throw new Error(`No local content found for slug "${slug}".`);
}

export function getWordPressOptional(slug: string): WordPressContentView | null {
  try {
    return getWordPressBySlug(slug);
  } catch {
    return null;
  }
}

export function getWordPressIntlGameOptional(
  regionSlug: string,
  gameSlug: string,
): WordPressContentView | null {
  for (const candidate of intlGameWordPressSlugCandidates(
    regionSlug,
    gameSlug,
  )) {
    const content = getWordPressOptional(candidate);
    if (content) {
      return content;
    }
  }
  return null;
}

export function getWordPressByPath(pathname: string): WordPressContentView | null {
  const slug = slugFromPathname(pathname);
  if (!slug) {
    return null;
  }
  return getWordPressOptional(slug);
}

export function getRecentPosts(perPage = 6): WordPressContentView[] {
  return postsByDateDesc.slice(0, perPage);
}

export function getAllWordPressSlugs(): string[] {
  const slugs = new Set([...pagesBySlug.keys(), ...postsBySlug.keys()]);
  return [...slugs].sort();
}

/** Single-segment routes to pre-render as WordPress pages (excludes US state landings). */
export function getWordPressSingleSegmentStaticSlugs(): string[] {
  const stateSlugs = new Set(getUsaStatePrerenderSlugs());
  return getAllWordPressSlugs().filter((slug) => !stateSlugs.has(slug));
}
