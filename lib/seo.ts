import type { Metadata } from "next";
import {
  getMessages,
  isLocale,
  locales,
  type Locale,
  type Messages,
} from "@/lib/i18n";

const OG_LOCALE: Record<Locale, string> = {
  ja: "ja_JP",
  mn: "mn_MN",
  en: "en_US",
};

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Zaya — Web & App Development",
} as const;

/** hreflang一覧（x-default含む）。日本語を既定言語として提示する。 */
export function altLanguages(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
    "x-default": `/ja${path}`,
  };
}

export function resolveLocale(raw: string): Locale {
  return isLocale(raw) ? raw : "ja";
}

/**
 * サブページ用メタデータ。canonical / hreflang / OGP / Twitter を一括生成。
 * title は [locale]/layout.tsx の template（"%s | Zaya"）でブランド名が付く。
 */
export async function buildPageMetadata(
  params: Promise<{ locale: string }>,
  page: keyof Messages["meta"]["pages"],
  path: string
): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = resolveLocale(raw);
  const { title, description } = getMessages(locale).meta.pages[page];
  const url = `/${locale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: altLanguages(path),
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      locale: OG_LOCALE[locale],
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
