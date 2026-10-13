import { forwardRef } from "react";
import {
  Link,
  NavLink,
  type LinkProps,
  type NavLinkProps,
} from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { localizePath } from "@/i18n/paths";

function localizeToProp(to: LinkProps["to"], locale: ReturnType<typeof useLocale>) {
  if (typeof to === "string") {
    if (
      to.startsWith("http://") ||
      to.startsWith("https://") ||
      to.startsWith("mailto:") ||
      to.startsWith("#")
    ) {
      return to;
    }
    return localizePath(to, locale);
  }
  if (typeof to === "object" && to !== null && "pathname" in to && to.pathname) {
    return { ...to, pathname: localizePath(to.pathname, locale) };
  }
  return to;
}

export function LocalizedLink({ to, ...rest }: LinkProps) {
  const locale = useLocale();
  return <Link to={localizeToProp(to, locale)} {...rest} />;
}

export const LocalizedNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function LocalizedNavLink({ to, ...rest }, ref) {
    const locale = useLocale();
    return <NavLink ref={ref} to={localizeToProp(to, locale)} {...rest} />;
  },
);
