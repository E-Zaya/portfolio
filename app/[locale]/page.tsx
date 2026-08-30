import Hero from "@/components/home/Hero";
import HomeSalesOverview from "@/components/home/HomeSalesOverview";
import { isLocale, type Locale } from "@/lib/i18n";

// 静的生成を強制 → Vercel Edge Network から配信されて TTFB が劇的に短くなる
export const dynamic = "force-static";
export const revalidate = false; // 完全静的 (再ビルドまで不変)

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";

  return (
    <div className="home-page">
      <Hero locale={locale} />
      <HomeSalesOverview locale={locale} />
    </div>
  );
}
