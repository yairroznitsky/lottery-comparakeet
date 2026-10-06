import { BRAND_REVIEW_COPY } from "./brandReviewCatalog.mjs";
import { BRAND_REVIEW_BODIES } from "./brandReviewBodies.mjs";

const SITE_ORIGIN = "https://lottery.comparakeet.com";

/**
 * Applies canonical URLs, SEO fields, and rewritten HTML to a brand review snapshot.
 * @param {Record<string, unknown>} view
 * @param {string} slug
 * @param {string} [modifiedIso]
 */
export function applyBrandReviewContent(view, slug, modifiedIso) {
  const copy = BRAND_REVIEW_COPY[slug];
  const body = BRAND_REVIEW_BODIES[slug];
  if (!copy || !body) {
    return view;
  }

  const modified = modifiedIso ?? new Date().toISOString();

  return {
    ...view,
    slug,
    title: copy.pageTitle ?? view.title,
    modified,
    link: `/${slug}`,
    excerptHtml: copy.excerpt,
    contentHtml: body,
    seo: {
      ...view.seo,
      title: copy.title,
      description: copy.description,
      canonical: `/${slug}`,
      ogTitle: copy.title,
      ogDescription: copy.description,
      ogUrl: `${SITE_ORIGIN}/${slug}`,
      robotsIndex: true,
      robotsFollow: true,
    },
  };
}
