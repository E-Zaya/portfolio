"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Button from "@/components/ui/Button";
import type { ProjectItem } from "@/data/projects";
import type { ProjectMessageItem, ProjectsContent } from "@/lib/messages/types";

type Props = {
  project: ProjectItem;
  itemText: ProjectMessageItem;
  t: Pick<
    ProjectsContent,
    "status" | "featuredBadge" | "liveDemo" | "viewCode" | "scopeLabel" | "focusLabel"
  >;
  onClose: () => void;
};

export function ProjectModal({ project, itemText, t, onClose }: Props) {
  const status = t.status[project.status];
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);

    // iOS Safari は overflow:hidden が効かないので position:fixed で対応
    // それ以外（PC・Android）は overflow:hidden のみ → 閉じてもトップに飛ばない
    const isIOS =
      typeof navigator !== "undefined" &&
      /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handler);
      if (isIOS) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollYRef.current);
      } else {
        document.documentElement.style.overflow = "";
      }
    };
  }, [onClose]);

  const modal = (
    <div
      className="project-modal-backdrop fixed inset-0 z-[9000] flex items-start justify-center p-3 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="project-modal-panel relative w-full max-w-3xl overflow-y-auto rounded-3xl sm:rounded-4xl"
        style={{
          maxHeight: "90dvh",
          background: "var(--background-2)",
          border: "1px solid var(--border)",
          boxShadow: "0 32px 80px rgba(0, 0, 0, 0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="project-modal-close sticky top-3 right-3 z-10 float-right ml-3"
          aria-label="閉じる"
        >
          ✕
        </button>

        {/* Hero image */}
        <div className="relative h-44 w-full overflow-hidden rounded-t-3xl sm:h-60 sm:rounded-t-4xl">
          <Image
            src={project.image}
            alt={itemText.title}
            fill
            className="object-cover object-top"
          />
          <div className="project-image-overlay" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">
          {/* Badges */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
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
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {itemText.title}
          </h2>

          {/* Description */}
          <p className="mb-2 text-sm leading-7 text-soft sm:text-base sm:leading-8">
            {itemText.description}
          </p>
          <p className="mb-6 text-sm leading-6 text-muted">{itemText.summary}</p>

          {/* Scope + Focus */}
          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="project-info-block rounded-2xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted">
                {t.scopeLabel}
              </p>
              <p className="text-sm leading-6 text-soft">{itemText.scope}</p>
            </div>
            <div className="project-info-block rounded-2xl border border-border p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted">
                {t.focusLabel}
              </p>
              <p className="text-sm leading-6 text-soft">{itemText.focus}</p>
            </div>
          </div>

          {/* Tech tags */}
          <div className="mb-6 flex flex-wrap gap-2">
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
          <div className="flex flex-wrap gap-3">
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
    </div>
  );

  // createPortal で body 直下に描画 → stacking context の罠を回避してヘッダーも隠せる
  return createPortal(modal, document.body);
}
