import Image from "next/image";
import Link from "next/link";
import { projectItems } from "@/data/projects";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";

export function ProjectsContent({ locale }: { locale: Locale }) {
  const t = getMessages(locale).projects;
  const featuredProjects = projectItems.filter((p) => p.featured);
  const otherProjects = projectItems.filter((p) => !p.featured);

  return (
    <main className="section-space">
      <div className="container-custom space-y-10">
        <section className="text-center">
          <p className="badge text-muted">{t.eyebrow}</p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {t.titleA} <span className="hero-gradient">{t.titleB}</span>
          </h1>

          <div className="gradient-line mx-auto mt-5 h-px w-28" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-soft">{t.description}</p>
        </section>

        {featuredProjects.length > 0 && (
          <section className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-muted">{t.featuredEyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">{t.featuredTitle}</h2>
            </div>

            {featuredProjects.map((project) => {
              const itemText = t.items[project.slug as keyof typeof t.items];
              const status = t.status[project.status];

              return (
                <article
                  key={project.slug}
                  className="apple-panel-strong gradient-border overflow-hidden rounded-[32px]"
                >
                  <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="p-7 md:p-10">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">
                          {status}
                        </span>

                        <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
                          {t.featuredBadge}
                        </span>
                      </div>

                      <h3 className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl">
                        {itemText?.title ?? project.title}
                      </h3>

                      <p className="mt-4 text-base leading-8 text-soft">
                        {itemText?.description ?? project.description}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-muted">
                        {itemText?.summary ?? project.summary}
                      </p>

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

                      <div className="mt-8 flex flex-wrap gap-3">
                        {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            className="rounded-full px-5 py-3 text-sm font-semibold text-white shadow-theme transition hover:scale-[1.02]"
                            style={{
                              background:
                                "linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3))",
                            }}
                          >
                            {t.liveDemo}
                          </Link>
                        )}

                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            className="rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:scale-[1.02] hover:bg-card-strong"
                          >
                            {t.viewCode}
                          </Link>
                        )}
                      </div>
                    </div>

                    <div className="relative min-h-[280px] border-t border-border lg:min-h-full lg:border-l lg:border-t-0">
                      <div className="relative h-full w-full p-5 md:p-6">
                        <div className="relative h-full min-h-[240px] overflow-hidden rounded-[24px] border border-border bg-card shadow-theme">
                          <Image
                            src={project.image}
                            alt={itemText?.title ?? project.title}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        )}

        {otherProjects.length > 0 && (
          <section className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-muted">{t.otherEyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">{t.otherTitle}</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {otherProjects.map((project) => {
                const itemText = t.items[project.slug as keyof typeof t.items];
                const status = t.status[project.status];

                return (
                  <article key={project.slug} className="apple-panel rounded-[28px] p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {itemText?.title ?? project.title}
                      </h3>
                      <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
                        {status}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-soft">
                      {itemText?.description ?? project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  return <ProjectsContent locale={locale} />;
}
