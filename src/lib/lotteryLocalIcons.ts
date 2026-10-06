import { deriveS3LogoUrlFromBrand, isPlaceholderLotteryLogo } from "@/lib/lotteryLogos";

interface LotteryIconsManifest {
  generatedAt?: string | null;
  icons?: Record<string, string>;
}

const manifestModules = import.meta.glob("../../content/lottery-icons/manifest.json", {
  eager: true,
  import: "default",
}) as Record<string, LotteryIconsManifest>;

const manifestData = Object.values(manifestModules)[0] ?? { icons: {} };

export function lotteryIconKey(regionSlug: string, gameSlug: string): string {
  return `${regionSlug}/${gameSlug}`;
}

export function getLocalLotteryIconUrl(
  regionSlug: string,
  gameSlug: string,
): string | null {
  const hit = manifestData.icons?.[lotteryIconKey(regionSlug, gameSlug)];
  return hit?.trim() || null;
}

export function resolveListingLogo(input: {
  name: string;
  logo: string;
  regionSlug: string;
  gameSlug: string;
}): string {
  const local = getLocalLotteryIconUrl(input.regionSlug, input.gameSlug);
  if (local) {
    return local;
  }
  if (input.logo?.trim() && !isPlaceholderLotteryLogo(input.logo)) {
    return input.logo.trim();
  }
  const derived = deriveS3LogoUrlFromBrand(input.name);
  if (derived) {
    return derived;
  }
  return input.logo ?? "";
}
