import Image from "next/image";
import { projectItems } from "@/data/projects";
import Button from "@/components/ui/Button";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";

export function ProjectsContent({ locale }: { locale: Locale }) {
  // i18n text
  const t = getMessages(locale).projects;

  // projects that have translated text in the current locale
  const translatedProjects = projectItems.filter((project) => {
    return Boolean(t.items[project.slug]);
  });

  if (translatedProjects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="section-space">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">{t.eyebrow}</p>
<h1 className="mt-3 text-center text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
  {t.titleA && <span>{t.titleA} </span>}
  <span>{t.titleB}</span>
</h1>

          <p className="mt-4 text-base leading-8 text-soft">
            {t.description}
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-10">
          {translatedProjects.map((project) => {
            // localized content
            const itemText = t.items[project.slug];

            // safety guard
            if (!itemText) {
              return null;
            }

            const status = t.status[project.status];

            return (
              <article
                key={project.slug}
                className="group relative overflow-hidden rounded-4xl glass-strong"
              >
                {/* Background glow */}
                <div className="hero-bg pointer-events-none absolute inset-0 opacity-20" />

                {/* Main layout */}
                <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                  {/* Image area */}
                  <div className="relative min-h-70 border-b border-border lg:min-h-full lg:border-b-0 lg:border-r">
                    <div className="relative h-full w-full p-5 md:p-6">
                      <div className="relative h-full min-h-65 overflow-hidden rounded-3xl border border-border bg-card-strong shadow-theme">
                        {/* Project image */}
                        <Image
                          src={project.image}
                          alt={itemText.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                        />

                        {/* Image overlay */}
                        <div className="project-image-overlay" />
                      </div>
                    </div>
                  </div>

                  {/* Text content area */}
                  <div className="relative p-7 md:p-10">
                    {/* Status badges */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">
                        {status}
                      </span>

                      {project.featured && (
                        <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
                          {t.featuredBadge}
                        </span>
                      )}
                    </div>

                    {/* Project title */}
                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                      {itemText.title}
                    </h2>

                    {/* Main description */}
                    <p className="mt-4 text-base leading-8 text-soft">
                      {itemText.description}
                    </p>

                    {/* Summary */}
                    <p className="mt-4 text-sm leading-7 text-muted">
                      {itemText.summary}
                    </p>

                    {/* Tech tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-theme"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.demo && (
                        <Button
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          variant="primary"
                        >
                          {t.liveDemo}
                        </Button>
                      )}

                      {project.github && (
                        <Button
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          variant="secondary"
                        >
                          {t.viewCode}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // locale resolution
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  return <ProjectsContent locale={locale} />;
}