"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { track } from "@vercel/analytics";
import type { ProjectItem } from "@/data/projects";
import type { ProjectMessageItem, ProjectsContent } from "@/lib/messages/types";

type Props = {
  project: ProjectItem;
  itemText: ProjectMessageItem;
  t: Pick<
    ProjectsContent,
    "kindLabels" | "liveLabel" | "openLive" | "detailHint"
  >;
  onClick: () => void;
};

export function ProjectCard({ project, itemText, t, onClick }: Props) {
  const primaryHref = project.demo ?? project.links?.[0]?.href;
  const isLive = Boolean(primaryHref) && project.status === "Completed";
  const kindLabel = t.kindLabels[project.kind];

  return (
    <article className="project-card group relative overflow-hidden rounded-lg border border-border bg-card-strong">
      <button
        type="button"
        className="block w-full cursor-pointer text-left"
        onClick={onClick}
        aria-label={`${itemText.title} - ${t.detailHint}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-card">
          <Image
            src={project.image}
            alt={itemText.title}
            fill
            sizes="(max-width: 1023px) 100vw, 42vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
          />
          <div className="project-image-overlay" />

          {isLive && (
            <span className="project-live-badge absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold backdrop-blur-md">
              <span className="project-live-dot h-1.5 w-1.5 rounded-full" />
              {t.liveLabel}
            </span>
          )}
        </div>
      </button>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase text-muted">
              {kindLabel}
            </p>
            <h2 className="mt-1.5 text-xl font-bold text-foreground sm:text-2xl">
              {itemText.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClick}
            aria-label={`${itemText.title} - ${t.detailHint}`}
            className="project-card-arrow project-accent-text grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border border-border"
          >
            <ArrowRight aria-hidden size={18} strokeWidth={1.8} />
          </button>
        </div>

        {(itemText.client || itemText.duration) && (
          <p className="mt-1.5 text-xs font-semibold text-muted">
            {[itemText.client, itemText.duration]
              .filter(Boolean)
              .join(" ・ ")}
          </p>
        )}

        <p className="mt-3 line-clamp-2 text-sm leading-7 text-soft">
          {itemText.description}
        </p>

        {itemText.tags && itemText.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {itemText.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold text-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-4 sm:px-6">
        <button
          type="button"
          onClick={onClick}
          className="project-detail-link inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-foreground"
        >
          {t.detailHint}
          <ArrowRight aria-hidden size={15} strokeWidth={1.8} />
        </button>

        {primaryHref && (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track("Project Live Click", {
                project: project.slug,
                kind: project.kind,
              })
            }
            className="project-accent-text inline-flex items-center gap-1.5 text-xs font-bold underline-offset-4 hover:underline"
          >
            {t.openLive}
            <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
          </a>
        )}
      </div>
    </article>
  );
}
