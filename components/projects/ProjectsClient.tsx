"use client";

import { useState } from "react";
import { Globe2, PanelsTopLeft } from "lucide-react";
import { track } from "@vercel/analytics";
import MarkerHighlight from "@/components/ui/MarkerHighlight";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import type { ProjectCategory, ProjectItem } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import type { ProjectMessageItem, ProjectsContent } from "@/lib/messages/types";

type ProjectEntry = {
  item: ProjectItem;
  text: ProjectMessageItem;
};

type Props = {
  locale: Locale;
  projects: ProjectEntry[];
  t: ProjectsContent;
};

const lanes = [
  { category: "website", icon: Globe2 },
  { category: "app", icon: PanelsTopLeft },
] as const satisfies readonly {
  category: ProjectCategory;
  icon: typeof Globe2;
}[];

export function ProjectsClient({ locale, projects, t }: Props) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("website");

  const activeProject = projects.find((p) => p.item.slug === activeSlug) ?? null;

  return (
    <>
      {/* Section header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {t.titleA ? (
            <>
              <span>{t.titleA} </span>
              <MarkerHighlight delay={0.25}>{t.titleB}</MarkerHighlight>
            </>
          ) : (
            <MarkerHighlight delay={0.25}>{t.titleB}</MarkerHighlight>
          )}
        </h1>
        {t.description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-soft">
            {t.description}
          </p>
        )}
      </div>

      {/* カテゴリタブ: 全ブレークポイント共通。
          旧: デスクトップは左右2レーン常時表示 → 件数差(3 vs 7)で
          片側に巨大な空白ができていたため、タブ切替に統一 */}
      <div
        className="project-board-tabs mb-6 grid grid-cols-2 rounded-lg border border-border p-1 lg:mx-auto lg:mb-10 lg:max-w-xl"
        role="tablist"
        aria-label={t.titleB}
      >
        {lanes.map(({ category, icon: LaneIcon }) => {
          const label = t.laneLabels[category];
          const count = projects.filter(
            ({ item }) => item.category === category,
          ).length;
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              id={`project-tab-${category}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`project-lane-${category}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveCategory(category)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
                  return;
                }

                event.preventDefault();
                const nextCategory =
                  category === "website" ? "app" : "website";
                setActiveCategory(nextCategory);
                document.getElementById(`project-tab-${nextCategory}`)?.focus();
              }}
              className={`project-board-tab flex cursor-pointer items-center justify-center gap-2 rounded-md border px-3 py-3.5 text-sm font-bold ${
                isActive ? "project-board-tab-active" : "text-muted"
              }`}
            >
              <LaneIcon
                aria-hidden
                className="project-board-tab-icon"
                size={16}
                strokeWidth={1.8}
              />
              <span>{label}</span>
              <span className="ml-2 font-mono text-xs">
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <div className="project-board">
        {lanes.map(({ category }) => {
          const laneProjects = projects.filter(
            ({ item }) => item.category === category,
          );
          const isActive = activeCategory === category;

          return (
            <section
              key={category}
              id={`project-lane-${category}`}
              role="tabpanel"
              aria-labelledby={`project-tab-${category}`}
              className={isActive ? "block" : "hidden"}
            >
              <div className="grid gap-6 lg:grid-cols-2">
                {laneProjects.map(({ item, text }) => (
                  <ProjectCard
                    key={item.slug}
                    project={item}
                    itemText={text}
                    t={t}
                    onClick={() => {
                      setActiveSlug(item.slug);
                      track("Project Detail Open", {
                        locale,
                        project: item.slug,
                        kind: item.kind,
                      });
                    }}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          locale={locale}
          project={activeProject.item}
          itemText={activeProject.text}
          t={t}
          onClose={() => setActiveSlug(null)}
        />
      )}
    </>
  );
}
