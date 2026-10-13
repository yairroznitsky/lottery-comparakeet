import { useLocation } from "react-router-dom";
import {
  LOCALE_LABELS,
  LOCALES,
  type Locale,
} from "@/i18n/locales";
import { localizePath, logicalPathFromPathname } from "@/i18n/paths";
import { getAvailableLocalesForPath } from "@/i18n/pageTranslations";
import { useLocale, useT } from "@/i18n/LocaleContext";

const LanguageSwitcher = () => {
  const { pathname } = useLocation();
  const locale = useLocale();
  const t = useT();
  const logicalPath = logicalPathFromPathname(pathname);
  const available = getAvailableLocalesForPath(logicalPath);

  if (available.length <= 1) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-1 text-sm">
      <span className="sr-only">{t("languageSwitcher.label")}</span>
      {LOCALES.filter((l) => available.includes(l)).map((l) => {
        const href = localizePath(`/${logicalPath}`, l);
        const isCurrent = l === locale;
        return (
          <a
            key={l}
            href={href}
            hrefLang={l}
            lang={l}
            aria-current={isCurrent ? "page" : undefined}
            className={
              isCurrent
                ? "rounded px-2 py-1 font-semibold text-white underline underline-offset-2"
                : "rounded px-2 py-1 text-white/85 hover:bg-white/10 hover:text-white"
            }
          >
            {LOCALE_LABELS[l as Locale]}
          </a>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
