import ProjectsSection from "@/components/projects/ProjectsSection";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  return <ProjectsSection locale={locale} />;
}
