import { useMemo, useState } from "react";
import {
  deriveS3LogoUrlFromBrand,
  isPlaceholderLotteryLogo,
} from "@/lib/lotteryLogos";

interface LotteryLogoProps {
  src: string | null | undefined;
  brand: string;
  className?: string;
}

const LotteryLogo = ({ src, brand, className = "h-8 max-w-[80px] object-contain" }: LotteryLogoProps) => {
  const fallbacks = useMemo(() => {
    const list: string[] = [];
    if (src && !isPlaceholderLotteryLogo(src)) {
      list.push(src);
    }
    const derived = deriveS3LogoUrlFromBrand(brand);
    if (derived && !list.includes(derived)) {
      list.push(derived);
    }
    const lower = brand.toLowerCase();
    if (lower.includes("mega millions")) {
      const u = "https://lottery-comparakeet-media.s3-us-west-2.amazonaws.com/lottery_logos/u.-s.--mega-millions.png";
      if (!list.includes(u)) list.push(u);
    }
    if (lower.includes("powerball")) {
      const u = "https://lottery-comparakeet-media.s3-us-west-2.amazonaws.com/lottery_logos/u.-s.--powerball.png";
      if (!list.includes(u)) list.push(u);
    }
    return list;
  }, [src, brand]);

  const [index, setIndex] = useState(0);

  if (fallbacks.length === 0 || index >= fallbacks.length) {
    return null;
  }

  return (
    <img
      src={fallbacks[index]}
      alt=""
      className={className}
      loading="lazy"
      onError={() => setIndex((i) => i + 1)}
    />
  );
};

export default LotteryLogo;
