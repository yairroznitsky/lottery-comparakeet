import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDismissable } from "@/hooks/useDismissable";
import { useLocale, useT } from "@/i18n/LocaleContext";
import {
  LOCALE_FLAG,
  LOCALE_LABELS,
  LOCALES,
  type Locale,
} from "@/i18n/locales";
import { getAvailableLocalesForPath } from "@/i18n/pageTranslations";
import { localizePath, logicalPathFromPathname } from "@/i18n/paths";

function LocaleFlag({ locale }: { locale: Locale }) {
  return (
    <span
      className={`fi fi-${LOCALE_FLAG[locale]} block h-4 w-6 shrink-0 rounded-sm bg-cover shadow-sm`}
      aria-hidden
    />
  );
}

const LanguageSwitcher = () => {
  const { pathname } = useLocation();
  const locale = useLocale();
  const t = useT();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useDismissable({
    open,
    onDismiss: () => setOpen(false),
    containerRef: rootRef,
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const logicalPath = logicalPathFromPathname(pathname);
  const availableSet = new Set(getAvailableLocalesForPath(logicalPath));
  const available = LOCALES.filter((l) => availableSet.has(l));

  if (available.length <= 1) {
    return null;
  }

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-1.5 rounded-md border border-white/30 px-2.5 text-white transition-colors hover:bg-white/10"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t("languageSwitcher.label")}: ${LOCALE_LABELS[locale]}`}
        onClick={() => setOpen((v) => !v)}
      >
        <LocaleFlag locale={locale} />
        <svg
          className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={t("languageSwitcher.label")}
          className="absolute right-0 top-full z-50 mt-2 min-w-44 overflow-hidden rounded-lg border border-brand-100 bg-white py-1 shadow-xl"
        >
          {available.map((l) => {
            const href = localizePath(`/${logicalPath}`, l);
            const isCurrent = l === locale;
            return (
              <li key={l}>
                <a
                  href={href}
                  hrefLang={l}
                  lang={l}
                  role="option"
                  aria-selected={isCurrent}
                  className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-brand-50 ${
                    isCurrent
                      ? "font-semibold text-brand-800"
                      : "text-neutral-700"
                  }`}
                >
                  <LocaleFlag locale={l} />
                  {LOCALE_LABELS[l]}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default LanguageSwitcher;
