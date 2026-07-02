import Hero from "@/components/home/Hero";
import ContactSection from "@/components/home/ContactSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import { isLocale, type Locale } from "@/lib/i18n";
import ServicesContent from "@/components/services/ServicesContent";

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
    <>
      <Hero locale={locale} />
      <ServicesContent locale={locale} />
      <ProjectsSection locale={locale} />
      {/* Tech Stack(Skills)は「技術語はAboutのみ」方針に合わせてAboutページへ移動 */}
      <ContactSection locale={locale} />
    </>
  );
}
