import { resolveBrandVisitHref } from "@/lib/brandVisitLinks";
import { getSiteUrl } from "@/config/site";
import { isTheLotterBrandName, theLotterHomeUrl } from "@/lib/theLotterLinks";

export interface LotterySiteRow {
  rank: number;
  name: string;
  logoUrl: string;
  logoAlt: string;
  rating: number;
  highlight: string;
  visitUrl: string;
  reviewUrl: string | null;
}

export interface LotterySiteReviewDetail extends LotterySiteRow {
  anchorId: string;
  summary: string;
  pros: string[];
  cons: string[];
}

export interface BestLotterySitesContent {
  intro: string;
  comparison: LotterySiteRow[];
  reviews: LotterySiteReviewDetail[];
}

function toClientPath(url: string): string {
  try {
    const siteOrigin = getSiteUrl();
    const parsed = new URL(url, siteOrigin);
    if (parsed.origin === new URL(siteOrigin).origin) {
      return `${parsed.pathname}${parsed.search}${parsed.hash}`;
    }
  } catch {
    /* ignore */
  }
  return url;
}

function toReviewClientPath(url: string): string {
  const path = toClientPath(url).replace(/\/+$/, "");
  const leaf = path.split("/").filter(Boolean).pop() ?? "";
  return leaf ? `/${leaf}` : path;
}

function findReadFullReviewHref(html: string): string | null {
  const anchorRe = /<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match: RegExpExecArray | null;
  while ((match = anchorRe.exec(html)) !== null) {
    if (/Read Full Review/i.test(match[2])) {
      return match[1];
    }
  }
  return null;
}

function stripTags(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function parseComparisonRows(html: string): LotterySiteRow[] {
  const rows: LotterySiteRow[] = [];
  const sections = html.split(/<section[^>]*id="CT-ID"/i).slice(1);

  for (const section of sections) {
    const rankMatch = section.match(
      /<p class="elementor-heading-title[^"]*">\s*(\d+)\s*<\/p>/i,
    );
    const imgMatch = section.match(
      /<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/i,
    );
    const ratingMatch = section.match(/Rated\s+([0-9.]+)\s+out\s+of\s+5/i);
    const visitMatch = section.match(
      /<a[^>]+href="([^"]+)"[^>]*>\s*<span class="elementor-button-content-wrapper">[\s\S]*?Visit\s+([^<]+)/i,
    );
    const reviewHref = findReadFullReviewHref(section);
    const promoMatch = section.match(
      /elementor-widget-text-editor[\s\S]*?<p>([\s\S]*?)<\/p>/i,
    );

    if (!rankMatch || !imgMatch || !ratingMatch || !visitMatch) {
      continue;
    }

    let highlight = promoMatch ? stripTags(promoMatch[1]) : "";
    highlight = highlight.replace(/Read Full Review/i, "").trim();

    const name = visitMatch[2].trim();
    rows.push({
      rank: Number(rankMatch[1]),
      name,
      logoUrl: imgMatch[1],
      logoAlt: imgMatch[2] || name,
      rating: Number(ratingMatch[1]),
      highlight,
      visitUrl: resolveBrandVisitHref(
        isTheLotterBrandName(name)
          ? theLotterHomeUrl()
          : toClientPath(visitMatch[1]),
      ),
      reviewUrl: reviewHref ? toReviewClientPath(reviewHref) : null,
    });
  }

  return rows.sort((a, b) => a.rank - b.rank);
}

function listItemsAfterHeading(block: string, heading: string): string[] {
  const re = new RegExp(
    `<h3[^>]*>\\s*${heading}\\s*<\\/h3>[\\s\\S]*?<ul[^>]*>([\\s\\S]*?)<\\/ul>`,
    "i",
  );
  const match = block.match(re);
  if (!match) {
    return [];
  }
  return [...match[1].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    .map((m) => stripTags(m[1]))
    .filter(Boolean);
}

function parseReviewSections(
  html: string,
  comparison: LotterySiteRow[],
): LotterySiteReviewDetail[] {
  const byName = new Map(
    comparison.map((row) => [normalizeName(row.name), row]),
  );

  const parts = html.split(/<h2[^>]*>/i).slice(1);
  const reviews: LotterySiteReviewDetail[] = [];

  for (const part of parts) {
    const titleMatch = part.match(/^\s*([^<]+?)\s*<\/h2>/i);
    if (!titleMatch) {
      continue;
    }

    const title = stripTags(titleMatch[1]);
    if (/quick jump/i.test(title)) {
      continue;
    }

    const block = part.slice(titleMatch[0].length);
    const anchorId = slugify(title);

    const ratingMatch = block.match(/Rated\s+([0-9.]+)\s+out\s+of\s+5/i);
    const visitMatch = block.match(
      /<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?Visit\s+([^<]+)/i,
    );
    const imgMatch = block.match(
      /<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/i,
    );
    const reviewHref = findReadFullReviewHref(block);

    const summaryMatch = block.match(
      /<p>([^<]*(?:<(?!\/p>)[^<]*)*)<\/p>/i,
    );

    const matchedRow =
      [...byName.entries()].find(([key]) =>
        normalizeName(title).includes(key) || key.includes(normalizeName(title)),
      )?.[1] ??
      comparison.find(
        (r) =>
          normalizeName(r.name) === normalizeName(title) ||
          title.toLowerCase().includes(r.name.toLowerCase()),
      );

    const name = matchedRow?.name ?? title;
    const rank = matchedRow?.rank ?? reviews.length + 1;

    reviews.push({
      rank,
      name,
      anchorId,
      logoUrl: imgMatch?.[1] ?? matchedRow?.logoUrl ?? "",
      logoAlt: imgMatch?.[2] ?? matchedRow?.logoAlt ?? name,
      rating: ratingMatch ? Number(ratingMatch[1]) : (matchedRow?.rating ?? 0),
      highlight: matchedRow?.highlight ?? "",
      visitUrl: resolveBrandVisitHref(
        isTheLotterBrandName(name)
          ? theLotterHomeUrl()
          : visitMatch
            ? toClientPath(visitMatch[1])
            : (matchedRow?.visitUrl ?? "#"),
      ),
      reviewUrl: reviewHref
        ? toReviewClientPath(reviewHref)
        : (matchedRow?.reviewUrl ?? null),
      summary: summaryMatch ? stripTags(summaryMatch[1]) : "",
      pros: listItemsAfterHeading(block, "What we like"),
      cons: listItemsAfterHeading(block, "What could be better"),
    });
  }

  return reviews;
}

export function parseBestOnlineLotterySitesHtml(
  html: string,
): BestLotterySitesContent | null {
  const introMatch = html.match(
    /Without further ado![^<]*(?:<[^>]+>[^<]*)*?online lottery sites\./i,
  );
  const intro = introMatch
    ? stripTags(introMatch[0])
    : "Our picks for the best genuine online lottery sites.";

  const quickJumpIdx = html.search(/Quick Jump to a Lottery Review/i);
  const comparisonHtml =
    quickJumpIdx > 0 ? html.slice(0, quickJumpIdx) : html.slice(0, 45000);
  const reviewsHtml = quickJumpIdx > 0 ? html.slice(quickJumpIdx) : html;

  const comparison = parseComparisonRows(comparisonHtml);
  if (comparison.length === 0) {
    return null;
  }

  const comparisonNames = new Set(comparison.map((r) => normalizeName(r.name)));
  const reviews = parseReviewSections(reviewsHtml, comparison).filter(
    (review) =>
      comparisonNames.has(normalizeName(review.name)) ||
      [...comparisonNames].some(
        (n) =>
          normalizeName(review.name).includes(n) ||
          n.includes(normalizeName(review.name)),
      ),
  );

  return { intro, comparison, reviews };
}
