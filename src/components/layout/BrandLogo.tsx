import type { CSSProperties } from "react";

type Props = {
  variant?: "full" | "icon";
  width?: number;
  className?: string;
  style?: CSSProperties;
};

export function BrandLogo({
  variant = "full",
  width = 220,
  className,
  style,
}: Props) {
  const isIcon = variant === "icon";

  return (
    <img
      src={
        isIcon ? "/brand/parakeet-icon.png" : "/brand/logo-transparent.png"
      }
      alt="Lottery Parakeet"
      width={isIcon ? undefined : width}
      height={isIcon ? undefined : undefined}
      className={className}
      style={{
        display: "block",
        ...(isIcon
          ? {}
          : { maxWidth: "100%", height: "auto" }),
        ...style,
      }}
    />
  );
}
