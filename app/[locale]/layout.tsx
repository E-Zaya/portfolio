import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import MouseGlow from "@/components/Effects/MouseGlow";
import ScrollProgress from "@/components/Effects/ScrollProgress";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { getMessages, isLocale, locales, type Locale } from "@/lib/i18n";

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
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      // List all supported languages with Japanese first; this order hints
      // search engines that Japanese is the preferred default.
      languages: {
        ja: "/ja",
        mn: "/mn",
        en: "/en",
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      url: `/${locale}`,
      locale: locale === "ja" ? "ja_JP" : locale === "mn" ? "mn_MN" : "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Zaya-dev OGP image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/og-image.png"],
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

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!localStorage.getItem('zaya-loading-seen')){document.documentElement.setAttribute('data-loading','true');}`,
          }}
        />
        <ThemeProvider>
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
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}