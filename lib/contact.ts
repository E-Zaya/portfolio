import type { Locale } from "@/lib/i18n";

export const MESSENGER_URL = "https://m.me/61578100397690";

export function getConsultHref(locale: Locale): string {
  return locale === "mn" ? MESSENGER_URL : `/${locale}/contact`;
}

export function getConsultLinkProps(locale: Locale) {
  return locale === "mn"
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}
