"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { WipSection } from "./WipSection";
import type { ProjectItem, WipItem } from "@/data/projects";
import type { ProjectMessageItem, WipMessageItem, ProjectsContent } from "@/lib/messages/types";

type ProjectEntry = {
  item: ProjectItem;
  text: ProjectMessageItem;
};

type WipEntry = {
  item: WipItem;
  text: WipMessageItem;
};

type Props = {
  projects: ProjectEntry[];
  wipProjects: WipEntry[];
  t: ProjectsContent;
};

export function ProjectsClient({ projects, wipProjects, t }: Props) {
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
              <span>{t.titleB}</span>
            </>
          ) : (
            <span>{t.titleB}</span>
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

      {/* WIP section */}
      {wipProjects.length > 0 && (
        <WipSection projects={wipProjects} t={t} />
      )}

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject.item}
          itemText={activeProject.text}
          t={t}
          onClose={() => setActiveSlug(null)}
        />
      )}
    </>
  );
}
