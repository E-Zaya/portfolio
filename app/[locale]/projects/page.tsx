import { projectItems, wipItems } from "@/data/projects";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

// ホームページからも直接 import して使えるようにする named export
export async function ProjectsContent({ locale }: { locale: Locale }) {
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
        <ProjectsClient projects={projects} wipProjects={wipProjects} t={t} />
      </div>
    </section>
  );
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  return <ProjectsContent locale={locale} />;
}
