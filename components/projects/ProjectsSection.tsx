import { projectItems } from "@/data/projects";
import { getMessages, type Locale } from "@/lib/i18n";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

/**
 * Projects セクション本体。
 * ホーム (`/[locale]`) と Projects ページ (`/[locale]/projects`) の両方から
 * 共通利用する。page.tsx 同士の import を避けるためにここへ切り出している。
 */
export default function ProjectsSection({ locale }: { locale: Locale }) {
  const t = getMessages(locale).projects;

  const projects = projectItems
    .filter((project) => Boolean(t.items[project.slug]))
    .map((project) => ({
      item: project,
      text: t.items[project.slug]!,
    }));

  // 制作中(WIP)セクションは非表示に —
  // 「未完成を抱えている」印象を避けるため。data/projects.ts の wipItems と
  // WipSection.tsx は温存してあるので、復活させる場合はここに再接続するだけ。

  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="section-space">
      <div className="container-custom">
        <ProjectsClient locale={locale} projects={projects} t={t} />
      </div>
    </section>
  );
}
