import brandVisitPaths from "../../content/brand-visit-urls.json";
import { theLotterHomeUrl } from "@/lib/theLotterLinks";

const PATH_MAP = new Map<string, string>(
  Object.entries(brandVisitPaths).map(([path, url]) => [
    normalizeVisitPath(path),
    url,
  ]),
);

function normalizeVisitPath(path: string): string {
  try {
    if (/^https?:/i.test(path)) {
      return new URL(path).pathname.replace(/\/+$/, "").toLowerCase();
    }
  } catch {
    /* relative */
  }
  const base = path.split(/[?#]/)[0]?.trim() ?? path;
  return base.replace(/\/+$/, "").toLowerCase() || "/";
}

/** Resolve legacy /visit-* shortcuts to outbound operator URLs. */
export function resolveBrandVisitHref(href: string): string {
  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("mailto:")) {
    return href;
  }

  const pathKey = normalizeVisitPath(trimmed);
  if (pathKey === "/visit-thelotter") {
    return theLotterHomeUrl();
  }

  const mapped = PATH_MAP.get(pathKey);
  if (mapped) {
    return mapped;
  }

  return href;
}

const VISIT_CTA_ANCHOR =
  /<a(\s+[^>]*class="[^"]*bg-brand-600[^"]*"[^>]*)>/gi;

/** External visit CTAs: resolved href + new tab + sponsored rel. */
export function rewriteBrandVisitLinksInHtml(html: string): string {
  let out = html.replace(
    /href=(["'])([^"']*)\1/gi,
    (match, quote: string, href: string) => {
      const resolved = resolveBrandVisitHref(href);
      return resolved !== href
        ? `href=${quote}${resolved}${quote}`
        : match;
    },
  );

  out = out.replace(VISIT_CTA_ANCHOR, (full, attrs: string) => {
    if (/target=/i.test(attrs)) {
      return full;
    }
    return `<a${attrs} target="_blank" rel="noopener noreferrer sponsored">`;
  });

  return out;
}

export function brandVisitVercelRedirects(): {
  source: string;
  destination: string;
  permanent: true;
}[] {
  const rules: { source: string; destination: string; permanent: true }[] = [
    {
      source: "/visit-thelotter",
      destination: theLotterHomeUrl(),
      permanent: true,
    },
  ];
  for (const [path, url] of PATH_MAP.entries()) {
    rules.push({ source: path, destination: url, permanent: true });
    rules.push({ source: `${path}/`, destination: url, permanent: true });
  }
  rules.push({
    source: "/Visit-MultiLotto",
    destination: brandVisitPaths["/visit-multilotto"],
    permanent: true,
  });
  rules.push({
    source: "/Visit-MultiLotto/",
    destination: brandVisitPaths["/visit-multilotto"],
    permanent: true,
  });
  return rules;
}
