import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { useLocation } from "react-router-dom";
import { getMessagesForLocale } from "@/i18n/loadMessages";
import { localeFromPathname } from "@/i18n/paths";
import type { Locale } from "@/i18n/locales";
import {
  createTranslator,
  type MessageKey,
  type MessageVars,
} from "@/i18n/translate";

interface LocaleContextValue {
  locale: Locale;
  t: (key: MessageKey, vars?: MessageVars) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const locale = localeFromPathname(pathname);
  const value = useMemo(() => {
    const messages = getMessagesForLocale(locale);
    return {
      locale,
      t: createTranslator(messages),
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    return localeFromPathname(
      typeof window !== "undefined" ? window.location.pathname : "/",
    );
  }
  return ctx.locale;
}

export function useT(): (key: MessageKey, vars?: MessageVars) => string {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    const messages = getMessagesForLocale("en");
    return createTranslator(messages);
  }
  return ctx.t;
}
