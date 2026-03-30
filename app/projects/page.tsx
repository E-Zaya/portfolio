"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectItems } from "@/data/portfolio";

function getStatusClasses(status?: "Completed" | "In Progress") {
  if (status === "Completed") {
    return "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300";
  }

  if (status === "In Progress") {
    return "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300";
  }

  return "border-border bg-card text-muted";
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
};

function ActionLink({ href, children, primary = false }: ActionLinkProps) {
  if (primary) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] shadow-theme"
        style={{
          background:
            "linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3))",
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition duration-300 hover:scale-[1.02]"
    >
      {children}
    </Link>
  );
}

function StatusBadge({
  status,
}: {
  status?: "Completed" | "In Progress";
}) {
  if (!status) return null;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap ${getStatusClasses(
        status
      )}`}
    >
      {status}
    </span>
  );
}

export default function ProjectsPage() {
  const featuredProject = projectItems.find((project) => project.featured);
  const otherProjects = projectItems.filter((project) => !project.featured);

  return (
    <section className="section-space">
      <div className="container-custom">
        <motion.div
          {...fadeUp}
          className="apple-panel gradient-border relative overflow-hidden rounded-[32px] px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12"
        >
          <div
            className="absolute left-[-44px] top-[-44px] h-40 w-40 rounded-full blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--accent-1) 14%, transparent)",
            }}
          />
          <div
            className="absolute bottom-[-56px] right-[-34px] h-48 w-48 rounded-full blur-3xl"
            style={{
              background:
                "color-mix(in srgb, var(--accent-4) 14%, transparent)",
            }}
          />

          <div className="relative z-10 space-y-14 md:space-y-16">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] hero-gradient">
                Projects
              </p>

              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Selected work and ongoing builds
              </h1>

              <div className="gradient-line mt-4 h-px w-28" />

              <div className="mt-6 space-y-5 text-soft">
                <p className="leading-8">
                  Next.js、TypeScript、認証、CRUD、ダッシュボード設計、
                  データ表示まで含めて作ってきたプロジェクトをまとめています。
                </p>
                <p className="leading-8">
                  見た目だけではなく、構成、使いやすさ、実装の整理まで意識して
                  仕上げたものを中心に掲載しています。
                </p>
              </div>
            </motion.div>

            {featuredProject && (
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="space-y-6"
              >
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.25em] hero-gradient">
                    Featured
                  </p>
                  <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                    Main Project
                  </h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                  <motion.div
                    initial={{ opacity: 0, x: -18, y: 18 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: 0.12 }}
                    className="apple-panel-strong rounded-[32px] p-3"
                  >
                    <div className="overflow-hidden rounded-[24px] border border-border bg-card shadow-theme">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={featuredProject.image}
                          alt={featuredProject.title}
                          fill
                          priority
                          className="object-cover transition duration-700 ease-out hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 18, y: 18 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: 0.16 }}
                    className="apple-panel-strong rounded-[32px] p-6 sm:p-7"
                  >
                    <div className="flex h-full flex-col">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
                          {featuredProject.title}
                        </h3>
                        <StatusBadge status={featuredProject.status} />
                      </div>

                      <p className="mt-5 text-sm leading-7 text-soft sm:text-base">
                        {featuredProject.description}
                      </p>

                      <p className="mt-4 text-sm leading-7 text-foreground/85 sm:text-base">
                        {featuredProject.summary}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {featuredProject.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground shadow-theme"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {featuredProject.demo && (
                          <ActionLink href={featuredProject.demo} primary>
                            Live Demo
                          </ActionLink>
                        )}

                        {featuredProject.github && (
                          <ActionLink href={featuredProject.github}>
                            GitHub
                            <ArrowUpRight className="h-4 w-4" />
                          </ActionLink>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="space-y-6"
            >
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.25em] hero-gradient">
                  More Projects
                </p>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Other Builds
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
                {otherProjects.map((project, index) => (
                  <motion.article
                    key={project.slug}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.65, delay: index * 0.12 }}
                    className="group apple-panel relative flex h-full flex-col overflow-hidden rounded-3xl p-3 transition duration-300 hover:-translate-y-1"
                  >
                    <div
                      className="pointer-events-none absolute -right-4 -top-3 h-16 w-16 rounded-full blur-2xl"
                      style={{
                        background:
                          "color-mix(in srgb, var(--accent-4) 12%, transparent)",
                      }}
                    />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="overflow-hidden rounded-[22px] border border-border bg-card shadow-theme">
                        <div className="relative aspect-[16/10] w-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                          />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <h3 className="text-xl font-semibold leading-tight text-foreground">
                            {project.title}
                          </h3>
                          <StatusBadge status={project.status} />
                        </div>

                        <p className="mt-4 text-sm leading-7 text-soft">
                          {project.description}
                        </p>

                        <p className="mt-3 text-sm leading-7 text-foreground/80">
                          {project.summary}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tech.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground shadow-theme"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {project.demo ? (
                            <ActionLink href={project.demo} primary>
                              Live Demo
                            </ActionLink>
                          ) : (
                            <span className="inline-flex items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm text-muted">
                              Demo Soon
                            </span>
                          )}

                          {project.github ? (
                            <ActionLink href={project.github}>
                              GitHub
                              <ArrowUpRight className="h-4 w-4" />
                            </ActionLink>
                          ) : (
                            <span className="inline-flex items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm text-muted">
                              Private Code
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}