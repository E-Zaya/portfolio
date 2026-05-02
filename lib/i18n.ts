import { en } from "./messages/en";
import { ja } from "./messages/ja";
import { mn } from "./messages/mn";
import type { Messages } from "./messages/types";

const dictionaries = {
  ja,
  mn,
  en,
};

// Expose the supported locales in order of priority. Japanese is the primary
// language, followed by Mongolian, with English as a decorative option.
export const locales = ["ja", "mn", "en"] as const;
export type Locale = (typeof locales)[number];

export type { Messages };

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0) {
    const [first, ...rest] = segments;

    if (isLocale(first)) {
      return rest.length > 0 ? `/${rest.join("/")}` : "/";
    }
  }

  return pathname || "/";
}

export function withLocale(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}