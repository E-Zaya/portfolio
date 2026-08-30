import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Globe2,
  LayoutPanelTop,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import TrackedLink from "@/components/analytics/TrackedLink";
import SectionShell from "@/components/ui/SectionShell";
import { getConsultHref, getConsultLinkProps } from "@/lib/contact";
import { projectItems, type ProjectItem } from "@/data/projects";
import { getMessages, type Locale } from "@/lib/i18n";

const featuredClientWork: readonly ProjectItem[] = projectItems
  .filter((project) => project.kind === "client")
  .slice(0, 2);

const actionClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]";

const packageIcons = [LayoutPanelTop, Globe2, Smartphone] as const;

export default function HomeSalesOverview({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const t = messages.homeOverview;
  const packages = messages.services.packages?.items;
  const serviceItems = packages ?? messages.services.pillars;
  const consultHref = getConsultHref(locale);
  const consultLinkProps = getConsultLinkProps(locale);
  const statementLines = messages.services.title.split("\n");

  return (
    <div className="home-story">
      <SectionShell className="home-story-intro">
        <div className="mx-auto max-w-5xl text-center">
          <p className="home-story-index font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-muted">
            01 / 03
          </p>
          <h2 className="home-statement-title mt-5 text-4xl font-bold leading-[1.14] text-foreground sm:text-5xl lg:text-6xl">
            {statementLines.map((line, index) => (
              <span
                key={line}
                className={`mx-auto block w-fit max-w-full ${
                  index === statementLines.length - 1
                    ? "home-statement-highlight"
                    : ""
                }`}
              >
                {line}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-soft sm:text-base sm:leading-8">
            {messages.services.intro[0]}
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {messages.services.pillars.slice(0, 2).map((pillar, index) => (
              <a
                key={pillar.name}
                href="#home-services"
                className="home-outcome-link group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-border px-5 text-sm font-bold text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]"
              >
                <span className="font-mono text-[10px] text-[color:var(--accent-2)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{pillar.name}</span>
                <span className="hidden font-medium text-muted md:inline">
                  {pillar.tagline}
                </span>
                <ArrowDown
                  aria-hidden
                  size={14}
                  className="text-[color:var(--accent-2)] transition group-hover:translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="home-story-section home-projects-section">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="home-section-eyebrow text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
                <span className="font-mono text-[10px] text-[color:var(--accent-2)]">
                  02 / 03
                </span>
                {t.projectsEyebrow}
              </p>
              <h2 className="text-balance mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                {t.projectsTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-soft sm:text-base">
                {t.projectsDescription}
              </p>
            </div>

            <TrackedLink
              href={`/${locale}/projects`}
              eventName="Home All Projects Click"
              eventProperties={{ locale }}
              className="home-inline-link inline-flex items-center gap-2 text-sm font-bold text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]"
            >
              {t.projectsLink}
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition"
              >
                <ArrowRight size={16} strokeWidth={1.9} />
              </span>
            </TrackedLink>
          </div>

          <div className="home-projects-board mt-10 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {featuredClientWork.map((project, index) => {
                const content = messages.projects.items[project.slug];
                const href =
                  project.demo ??
                  project.links?.[0]?.href ??
                  `/${locale}/projects`;
                const primaryImage =
                  project.category === "app" && project.gallery?.[2]
                    ? project.gallery[2]
                    : project.image;

                return (
                  <article key={project.slug} className="home-project-billboard group">
                    <TrackedLink
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      eventName="Home Featured Project Click"
                      eventProperties={{ locale, project: project.slug }}
                      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[color:var(--accent-2)]"
                      aria-label={`${content.title}: ${content.description}`}
                    >
                      <div className="home-project-media relative aspect-[16/11] overflow-hidden">
                        {project.category === "app" && (
                          <Image
                            src={project.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover opacity-20 transition duration-700 group-hover:scale-[1.02]"
                          />
                        )}
                        <Image
                          src={primaryImage}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className={
                            project.category === "app"
                              ? "object-contain p-4 transition duration-500 group-hover:scale-[1.02] sm:p-6"
                              : "object-cover transition duration-700 group-hover:scale-[1.02]"
                          }
                        />
                        <div className="home-project-media-shade absolute inset-0" />
                        <p className="absolute left-5 top-5 z-10 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <span aria-hidden className="h-px w-5 bg-white/40" />
                          {messages.projects.laneLabels[project.category]}
                        </p>
                      </div>

                      <div className="flex items-start justify-between gap-5 p-6 sm:p-7">
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold text-[color:var(--accent-2)]">
                            {content.client}
                          </p>
                          <h3 className="mt-1 text-2xl font-bold text-foreground">
                            {content.title}
                          </h3>
                          <p className="mt-3 line-clamp-2 max-w-xl text-sm leading-7 text-soft">
                            {content.description}
                          </p>
                        </div>
                        <span className="home-project-arrow mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted transition">
                          <ArrowUpRight aria-hidden size={18} strokeWidth={1.8} />
                        </span>
                      </div>
                    </TrackedLink>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="home-story-section home-services-section">
        <div className="mx-auto max-w-6xl">
          <div className="relative grid gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(24rem,0.72fr)] xl:items-end xl:gap-16">
            <div>
              <p className="home-section-eyebrow text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
                <span className="font-mono text-[10px] text-[color:var(--accent-2)]">
                  03 / 03
                </span>
                {t.servicesEyebrow}
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-foreground sm:text-4xl xl:max-w-xl">
                {t.servicesTitle}
              </h2>
            </div>
            <div className="lg:pb-1">
              <p className="max-w-2xl text-sm leading-7 text-soft sm:text-base">
                {t.servicesDescription}
              </p>
              <TrackedLink
                href={`/${locale}/services`}
                eventName="Home Services Click"
                eventProperties={{ locale }}
                className="home-services-link mt-5 inline-flex items-center gap-2 text-sm font-bold text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]"
              >
                {t.servicesLink}
                <span
                  aria-hidden
                  className="grid h-8 w-8 place-items-center rounded-full border border-border transition"
                >
                  <ArrowRight size={15} strokeWidth={1.9} />
                </span>
              </TrackedLink>
            </div>
          </div>

          <div
            id="home-services"
            className="home-services-board mt-10 overflow-hidden"
          >
            <div
              className={`relative grid ${
                serviceItems.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {serviceItems.map((item, index) => {
                const PackageIcon = packageIcons[index] ?? LayoutPanelTop;
                const features = (
                  "features" in item ? item.features : item.forms
                ).slice(0, 2);
                const recommended = "recommended" in item && item.recommended;
                const featured =
                  recommended || (serviceItems.length === 2 && index === 1);
                const description =
                  "description" in item ? item.description : item.lead;

                return (
                  <article
                    key={item.name}
                    className={`home-service-tier relative flex min-h-[22rem] flex-col p-6 sm:p-7 ${
                      featured ? "home-service-tier-featured" : ""
                    }`}
                  >
                    {recommended && (
                      <p className="home-service-recommended flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em]">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full" />
                        {messages.services.packages?.recommendedLabel}
                      </p>
                    )}

                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs font-bold text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="home-service-icon grid h-10 w-10 place-items-center rounded-md border border-border text-muted">
                        <PackageIcon aria-hidden size={18} strokeWidth={1.6} />
                      </span>
                    </div>

                    <h3 className="mt-8 text-lg font-bold text-foreground">
                      {item.name}
                    </h3>
                    {/* 3行ぶんの高さを確保 → 説明文の行数が違っても価格行が揃う */}
                    <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-muted">
                      {description}
                    </p>

                    <div className="mt-7">
                      <p className="text-2xl font-black text-foreground sm:text-[1.7rem]">
                        {item.price}
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-muted">
                        <Clock3 aria-hidden size={14} strokeWidth={1.8} />
                        {item.timeline}
                      </p>
                    </div>

                    {features.length > 0 && (
                      <ul className="mt-auto space-y-2 border-t border-border pt-5">
                        {features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-xs font-semibold leading-5 text-soft"
                          >
                            <Check
                              aria-hidden
                              size={14}
                              strokeWidth={2}
                              className="mt-0.5 shrink-0 text-[color:var(--accent-2)]"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="home-story-section home-contact-section">
        <div className="home-contact-panel mx-auto grid max-w-6xl gap-8 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:p-12">
          <div className="max-w-3xl">
            <p className="home-section-eyebrow text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
              {t.contactEyebrow}
            </p>
            <h2 className="text-balance mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {t.contactTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-soft sm:text-base">
              {t.contactDescription}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <TrackedLink
              href={consultHref}
              {...consultLinkProps}
              eventName="Home Contact CTA Click"
              eventProperties={{
                locale,
                destination: locale === "mn" ? "messenger" : "contact",
              }}
              className={`${actionClass} services-primary-button border-transparent px-6`}
            >
              <MessageCircle aria-hidden size={17} strokeWidth={1.9} />
              {locale === "mn" ? t.messengerLink : t.contactLink}
            </TrackedLink>

            {locale === "mn" && (
              <TrackedLink
                href={`/${locale}/contact`}
                eventName="Home Contact Page Click"
                eventProperties={{ locale }}
                className={`${actionClass} border-border bg-card text-foreground`}
              >
                {t.contactLink}
                <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
              </TrackedLink>
            )}
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
