import Image from "next/image";
import Link from "next/link";
import { projectItems } from "@/data/projects";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";

export function ProjectsContent({ locale }: { locale: Locale }) {
  // i18n text
  const t = getMessages(locale).projects;

  // featured project
  const featuredProject = projectItems.find((p) => p.featured) ?? projectItems[0];

  if (!featuredProject) {
    return null;
  }

  // localized content
  const itemText = t.items[featuredProject.slug as keyof typeof t.items];
  const status = t.status[featuredProject.status];

  return (
    <section id="projects" className="section-space">
      <div className="container-custom">
        {/* Project card */}
        <article className="group relative overflow-hidden rounded-[32px] glass-strong">
          {/* Background glow */}
          <div className="hero-bg pointer-events-none absolute inset-0 opacity-20" />

          {/* Main layout */}
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Image area */}
            <div className="relative min-h-[280px] border-b border-border lg:min-h-full lg:border-b-0 lg:border-r">
              <div className="relative h-full w-full p-5 md:p-6">
                <div className="relative h-full min-h-[260px] overflow-hidden rounded-[24px] border border-border bg-card-strong shadow-theme">
                  <Image
                    src={featuredProject.image}
                    alt={itemText?.title ?? featuredProject.title}
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

                <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
                  {t.featuredBadge}
                </span>
              </div>

              {/* Project title */}
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {itemText?.title ?? featuredProject.title}
              </h2>

              {/* Main description */}
              <p className="mt-4 text-base leading-8 text-soft">
                {itemText?.description ?? featuredProject.description}
              </p>

              {/* Summary */}
              <p className="mt-4 text-sm leading-7 text-muted">
                {itemText?.summary ?? featuredProject.summary}
              </p>

              {/* Tech tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((tech) => (
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
                {featuredProject.demo && (
                  <Link
                    href={featuredProject.demo}
                    target="_blank"
                    className="rounded-full border border-border bg-card-strong px-5 py-3 text-sm font-semibold text-foreground shadow-theme transition hover:scale-[1.02] hover:bg-card"
                  >
                    {t.liveDemo}
                  </Link>
                )}

                {featuredProject.github && (
                  <Link
                    href={featuredProject.github}
                    target="_blank"
                    className="rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:scale-[1.02] hover:bg-card-strong"
                  >
                    {t.viewCode}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </article>
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