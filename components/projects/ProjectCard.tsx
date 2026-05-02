"use client";

import Image from "next/image";
import type { ProjectItem } from "@/data/projects";
import type { ProjectMessageItem, ProjectsContent } from "@/lib/messages/types";

type Props = {
  project: ProjectItem;
  itemText: ProjectMessageItem;
  t: Pick<ProjectsContent, "status" | "featuredBadge">;
  onClick: () => void;
};

export function ProjectCard({ project, itemText, t, onClick }: Props) {
  const status = t.status[project.status];

  return (
    <article
      className="project-card group relative overflow-hidden rounded-4xl glass-strong"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {/* Background glow */}
      <div className="hero-bg pointer-events-none absolute inset-0 opacity-20" />

      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Image area */}
        <div className="relative min-h-70 border-b border-border lg:min-h-full lg:border-b-0 lg:border-r">
          <div className="relative h-full w-full p-5 md:p-6">
            <div className="relative h-full min-h-65 overflow-hidden rounded-3xl border border-border bg-card-strong shadow-theme">
              <Image
                src={project.image}
                alt={itemText.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="project-image-overlay" />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="relative flex flex-col p-7 md:p-10">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-medium ${
                project.status === "Completed" ? "badge-completed" : "badge-in-progress"
              }`}
            >
              {status}
            </span>
            {project.featured && (
              <span className="badge-featured rounded-full border px-3 py-1 text-xs font-medium">
                {t.featuredBadge}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {itemText.title}
          </h2>

          {/* Description */}
          <p className="mt-4 text-base leading-8 text-soft">
            {itemText.description}
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

          {/* Click hint */}
          <div className="mt-auto pt-8">
            <span className="project-detail-hint inline-flex items-center gap-2 text-sm text-muted">
              詳細を見る
              <span className="project-detail-arrow">→</span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
