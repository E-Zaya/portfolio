import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingConsultPill from "@/components/layout/FloatingConsultPill";
import LoadingScreen from "@/components/layout/LoadingScreen";
import MouseGlow from "@/components/Effects/MouseGlow";
import ScrollProgress from "@/components/Effects/ScrollProgress";
import ThemeProvider from "@/components/providers/ThemeProvider";
import MotionProvider from "@/components/providers/MotionProvider";
import { getMessages, isLocale, locales, type Locale } from "@/lib/i18n";
import { altLanguages, OG_IMAGE } from "@/lib/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-en",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-ja",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// generateStaticParams で返した locale 以外は 404 にする
// → 動的レンダリングを完全に無効化して TTFB を最小化
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  // Fall back to Japanese when no valid locale is provided.  Japanese is
  // treated as the primary language of this site.
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const t = getMessages(locale);

  return {
    title: {
      // Home shows the full brand title; sub-pages set their own title and
      // get "| Zaya" appended via this template.
      default: t.meta.title,
      template: "%s | Zaya",
    },
    description: t.meta.description,
    authors: [{ name: "Zaya E", url: "https://ezaya.dev" }],
    creator: "Zaya E",
    alternates: {
      canonical: `/${locale}`,
      // All supported languages + x-default (Japanese is the primary
      // language, so it doubles as the default variant).
      languages: altLanguages(""),
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      siteName: "Zaya",
      type: "website",
      url: `/${locale}`,
      locale: locale === "ja" ? "ja_JP" : locale === "mn" ? "mn_MN" : "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [OG_IMAGE.url],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  // Use Japanese when no locale is specified or an unsupported value is
  // provided.  This keeps the UI consistent with the primary language.
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zaya E",
    url: "https://ezaya.dev",
    sameAs: [
      "https://github.com/zaya-dev",
      "https://x.com/EZaya0805",
      "https://www.instagram.com/ezaya977/",
      "https://www.facebook.com/profile.php?id=61578100397690",
    ],
    jobTitle: "Web Developer",
    knowsLanguage: ["ja", "mn", "en"],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!localStorage.getItem('zaya-loading-seen')){document.documentElement.setAttribute('data-loading','true');}}catch(e){}`,
          }}
        />
        <ThemeProvider>
          <MotionProvider>
            <div
              className={`${inter.variable} ${notoSansJp.variable}`}
              data-locale={locale}
            >
              <LoadingScreen />
              <ScrollProgress />
              <MouseGlow />
              <div className="site-content">
                <Header locale={locale} />
                <main>{children}</main>
                <Footer locale={locale} />
                <FloatingConsultPill locale={locale} />
              </div>
            </div>
          </MotionProvider>
        </ThemeProvider>
         <SpeedInsights />
      </body>
    </html>
  );
}