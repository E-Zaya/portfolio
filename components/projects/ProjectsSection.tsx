import { projectItems, wipItems } from "@/data/projects";
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

  const wipProjects = wipItems
    .filter((wip) => Boolean(t.wip.items[wip.slug]))
    .map((wip) => ({
      item: wip,
      text: t.wip.items[wip.slug]!,
    }));

  if (projects.length === 0 && wipProjects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="section-space">
      <div className="container-custom">
        <ProjectsClient
          locale={locale}
          projects={projects}
          wipProjects={wipProjects}
          t={t}
        />
      </div>
    </section>
  );
}
