import type { BreadcrumbItem } from "@/types/seo";

export function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string | undefined,
) {
  if (content === undefined || content === "") {
    return;
  }
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function upsertLink(rel: string, href: string | undefined) {
  if (!href) {
    return;
  }
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  );
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

const JSON_LD_ID = "site-json-ld";

export function upsertJsonLd(payload: object | object[] | undefined) {
  const existing = document.getElementById(JSON_LD_ID);
  if (!payload) {
    existing?.remove();
    return;
  }
  const script =
    existing ?? document.createElement("script");
  script.id = JSON_LD_ID;
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(
    Array.isArray(payload) && payload.length === 1 ? payload[0] : payload,
  );
  if (!existing) {
    document.head.appendChild(script);
  }
}

export function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[],
  siteUrl: string,
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path ? `${siteUrl}${item.path.startsWith("/") ? item.path : `/${item.path}`}` : undefined,
    })),
  };
}

export function buildWebSiteJsonLd(siteUrl: string, siteName: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description:
      "Lottery results, jackpot trackers, and reviews of online lottery services worldwide.",
  };
}

export function buildOrganizationJsonLd(
  siteUrl: string,
  siteName: string,
): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
  };
}

export function buildItemListJsonLd(
  items: { name: string; url: string }[],
): object | undefined {
  if (items.length === 0) {
    return undefined;
  }
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function buildFaqPageJsonLd(
  items: { question: string; answer: string }[],
): object | undefined {
  if (items.length === 0) {
    return undefined;
  }
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
