"use client";

import { useState } from "react";
import MarkerHighlight from "@/components/ui/MarkerHighlight";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import type { ProjectItem } from "@/data/projects";
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

export function ProjectsClient({ locale, projects, t }: Props) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

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

      {/* Projects list */}
      <div className="space-y-10">
        {projects.map(({ item, text }) => (
          <ProjectCard
            key={item.slug}
            project={item}
            itemText={text}
            t={t}
            onClick={() => setActiveSlug(item.slug)}
          />
        ))}
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
