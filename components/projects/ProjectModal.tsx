"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import type { ProjectItem } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import type { ProjectMessageItem, ProjectsContent } from "@/lib/messages/types";

type Props = {
  locale: Locale;
  project: ProjectItem;
  itemText: ProjectMessageItem;
  t: Pick<
    ProjectsContent,
    | "status"
    | "featuredBadge"
    | "kindLabels"
    | "liveDemo"
    | "viewCode"
    | "caseStudy"
    | "scopeLabel"
    | "focusLabel"
    | "behindLabel"
  >;
  onClose: () => void;
};

export function ProjectModal({ locale, project, itemText, t, onClose }: Props) {
  const status = t.status[project.status];
  const caseStudyHref = itemText.caseStudy
    ? `/${locale}/blog/${itemText.caseStudy}`
    : null;
  const gallery = project.gallery?.length ? project.gallery : [project.image];
  const hasGalleryControls = gallery.length > 1;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const scrollYRef = useRef(0);

  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((current) =>
      current === 0 ? gallery.length - 1 : current - 1,
    );
  }, [gallery.length]);

  const showNextImage = useCallback(() => {
    setActiveImageIndex((current) =>
      current === gallery.length - 1 ? 0 : current + 1,
    );
  }, [gallery.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!hasGalleryControls) return;
      if (e.key === "ArrowLeft") showPreviousImage();
      if (e.key === "ArrowRight") showNextImage();
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
  }, [hasGalleryControls, onClose, showNextImage, showPreviousImage]);

  const modal = (
    <div
      className="project-modal-backdrop fixed inset-0 z-9000 flex items-start justify-center p-3 sm:items-center sm:p-6"
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

        {/* Preview slider */}
        <div className="relative overflow-hidden rounded-t-3xl bg-card-strong sm:rounded-t-4xl">
          <div className="project-modal-slider relative h-56 w-full overflow-hidden sm:h-72">
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
            >
              {gallery.map((src, index) => (
                <div
                  key={src}
                  className="relative h-full min-w-full bg-card-strong"
                >
                  <Image
                    src={src}
                    alt={`${itemText.title} preview ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            <div className="project-modal-slider-shade pointer-events-none absolute inset-0" />

            {hasGalleryControls && (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  className="project-modal-slider-button absolute left-3 top-1/2 z-10 -translate-y-1/2"
                  aria-label="前の画像"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  className="project-modal-slider-button absolute right-3 top-1/2 z-10 -translate-y-1/2"
                  aria-label="次の画像"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/20 bg-black/35 px-2.5 py-1.5 backdrop-blur-md">
                  {gallery.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === activeImageIndex
                          ? "w-5 bg-white"
                          : "w-1.5 bg-white/45 hover:bg-white/80"
                      }`}
                      aria-label={`画像 ${index + 1} を表示`}
                      aria-current={index === activeImageIndex ? "true" : undefined}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {hasGalleryControls && (
            <div className="project-modal-thumbnails flex gap-2 overflow-x-auto border-t border-border bg-card px-3 py-3">
              {gallery.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`project-modal-thumbnail relative h-14 w-24 shrink-0 overflow-hidden rounded-xl border ${
                    index === activeImageIndex
                      ? "project-modal-thumbnail-active"
                      : "border-border"
                  }`}
                  aria-label={`画像 ${index + 1} を表示`}
                  aria-current={index === activeImageIndex ? "true" : undefined}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="88px"
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">
          {/* Badges */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span
              className="rounded-full px-3 py-1 text-xs font-bold"
              style={{
                color: "var(--accent-2)",
                background:
                  "color-mix(in srgb, var(--accent-2) 10%, transparent)",
                border:
                  "1px solid color-mix(in srgb, var(--accent-2) 30%, transparent)",
              }}
            >
              {t.kindLabels[project.kind]}
            </span>
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

          {/* クライアント・期間(実案件用) */}
          {(itemText.client || itemText.duration) && (
            <p className="mb-3 text-xs font-semibold tracking-wide text-muted">
              {[itemText.client, itemText.duration]
                .filter(Boolean)
                .join(" ・ ")}
            </p>
          )}

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

          {/* 制作の裏側 — 一番悩んだところ。人間味とプロ味の同時出し */}
          {itemText.behind && (
            <div
              className="mb-6 rounded-2xl border p-4"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--marker-ink) 28%, var(--border))",
                background:
                  "color-mix(in srgb, var(--marker-ink) 6%, transparent)",
              }}
            >
              <p
                className="mb-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--marker-ink)" }}
              >
                {t.behindLabel}
              </p>
              <p className="text-sm italic leading-6 text-soft">
                {itemText.behind}
              </p>
            </div>
          )}

          {/* 使用技術 — 興味のある人向けの控えめな1行(技術語はメイン導線から排除する方針) */}
          <p className="mb-6 font-mono text-[11px] tracking-wide text-muted">
            {project.tech.join(" · ")}
          </p>

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
            {project.links?.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                variant="primary"
              >
                {link.label}
              </Button>
            ))}
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
            {caseStudyHref && (
              <Button href={caseStudyHref} variant="secondary">
                {t.caseStudy}
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
