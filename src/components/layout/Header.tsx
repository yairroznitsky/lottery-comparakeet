import { BrandLogo } from "@/components/layout/BrandLogo";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useT } from "@/i18n/LocaleContext";

const Header = () => {
  const t = useT();

  return (
    <LocalizedLink
      to="/"
      className="inline-flex shrink-0 items-center gap-2 text-white transition-opacity hover:opacity-90"
    >
      <BrandLogo
        variant="icon"
        className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
      />
      <span className="sr-only">{t("site.name")}</span>
    </LocalizedLink>
  );
};

export default Header;
