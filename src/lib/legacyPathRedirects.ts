/** Permanent redirects for legacy lottery URLs (mirrored in vercel.json where needed). */

function normalizePath(pathname: string): string {
  const decoded = decodeURIComponent(pathname);
  const trimmed = decoded.replace(/\/+$/, "");
  return trimmed || "/";
}

const EXACT_REDIRECTS = new Map<string, string>([
  ["/us/hot-lotto", "/u-s/hot-lotto"],
  ["/russia/gosloto-749", "/russia/gosloto-7-49"],
]);

export function resolveLegacyPathRedirect(pathname: string): string | null {
  const path = normalizePath(pathname);
  const exact = EXACT_REDIRECTS.get(path);
  if (exact) {
    return exact;
  }
  // Legacy WordPress "GO!" game slugs used a trailing exclamation mark.
  if (path.endsWith("!")) {
    return path.slice(0, -1);
  }
  return null;
}

export function legacyPathVercelRedirects(): {
  source: string;
  destination: string;
  permanent: true;
}[] {
  const rules: { source: string; destination: string; permanent: true }[] = [];

  for (const [from, to] of EXACT_REDIRECTS.entries()) {
    rules.push({ source: from, destination: to, permanent: true });
    rules.push({ source: `${from}/`, destination: to, permanent: true });
  }

  const goBangPaths: { from: string; to: string }[] = [
    {
      from: "/australia/powerball-lotto-go!",
      to: "/australia/powerball-lotto-go",
    },
    { from: "/usa/power-go!", to: "/usa/power-go" },
    { from: "/germany/lotto-go!", to: "/germany/lotto-go" },
    {
      from: "/europe/euromillions-go!",
      to: "/europe/euromillions-go",
    },
    { from: "/spain/el-gordo-go!", to: "/spain/el-gordo-go" },
    { from: "/usa/mega-go!", to: "/usa/mega-go" },
  ];

  for (const { from, to } of goBangPaths) {
    rules.push({ source: from, destination: to, permanent: true });
    rules.push({ source: `${from}/`, destination: to, permanent: true });
  }

  return rules;
}
