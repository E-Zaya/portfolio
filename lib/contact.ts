import type { Locale } from "@/lib/i18n";

export const MESSENGER_URL = "https://m.me/61578100397690";

// フッター等に表示する電話番号(表示用と tel: リンク用)
export const PHONE_DISPLAY = "+976 5055 3540";
export const PHONE_HREF = "tel:+97650553540";

export function getConsultHref(locale: Locale): string {
  return locale === "mn" ? MESSENGER_URL : `/${locale}/contact`;
}

export function getConsultLinkProps(locale: Locale) {
  return locale === "mn"
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}
