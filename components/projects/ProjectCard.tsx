"use client";

import Image from "next/image";
import type { ProjectItem } from "@/data/projects";
import type { ProjectMessageItem, ProjectsContent } from "@/lib/messages/types";

type Props = {
  project: ProjectItem;
  itemText: ProjectMessageItem;
  t: Pick<
    ProjectsContent,
    | "status"
    | "featuredBadge"
    | "kindLabels"
    | "liveLabel"
    | "openLive"
    | "detailHint"
  >;
  onClick: () => void;
};

export function ProjectCard({ project, itemText, t, onClick }: Props) {
  // 「公開中」= デモが実在して稼働している証拠。完了ステータスより強い訴求。
  const primaryHref = project.demo ?? project.links?.[0]?.href;
  const isLive = Boolean(primaryHref) && project.status === "Completed";
  const kindLabel = t.kindLabels[project.kind];

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
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="project-image-overlay" />

              {/* LIVE バッジ — 画像の上に「動いている」証拠 */}
              {isLive && (
                <span
                  className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold backdrop-blur-md"
                  style={{
                    color: "var(--color-success)",
                    borderColor:
                      "color-mix(in srgb, var(--color-success) 45%, transparent)",
                    background:
                      "color-mix(in srgb, var(--background) 65%, transparent)",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: "var(--color-success)",
                      boxShadow:
                        "0 0 0 3px color-mix(in srgb, var(--color-success) 22%, transparent)",
                    }}
                  />
                  {t.liveLabel}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="relative flex flex-col p-7 md:p-10">
          {/* Badges: 実案件/自社プロダクト/制作例 + 状態 */}
          <div className="flex flex-wrap items-center gap-2">
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
              {kindLabel}
            </span>
            {project.status === "In Progress" && (
              <span className="badge-in-progress rounded-full border px-3 py-1 text-xs font-medium">
                {t.status["In Progress"]}
              </span>
            )}
            {project.featured && (
              <span className="badge-featured rounded-full border px-3 py-1 text-xs font-medium">
                {t.featuredBadge}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {itemText.title}
          </h2>

          {/* クライアント・期間(実案件用 — データがあれば表示) */}
          {(itemText.client || itemText.duration) && (
            <p className="mt-2 text-xs font-semibold tracking-wide text-muted">
              {[itemText.client, itemText.duration]
                .filter(Boolean)
                .join(" ・ ")}
            </p>
          )}

          {/* Description(ベネフィット語) */}
          <p className="mt-4 text-[15px] leading-8 text-soft">
            {itemText.description}
          </p>

          {/* 成果タグ — 技術名ではなく「何が良くなるか」 */}
          {itemText.tags && itemText.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {itemText.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-soft"
                  style={{
                    background:
                      "color-mix(in srgb, var(--accent-2) 8%, transparent)",
                    border:
                      "1px solid color-mix(in srgb, var(--accent-2) 22%, transparent)",
                  }}
                >
                  <span
                    aria-hidden
                    className="h-1 w-1 rounded-full"
                    style={{ background: "var(--accent-2)" }}
                  />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer: 詳細ヒント + 実物への直リンク */}
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
            <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-foreground">
              <span
                aria-hidden
                className="grid h-8 w-8 place-items-center rounded-full border transition-all duration-200 group-hover:border-transparent group-hover:bg-[var(--accent-2)] group-hover:text-[var(--button-foreground)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--accent-2)",
                }}
              >
                →
              </span>
              {t.detailHint}
            </span>

            {primaryHref && (
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-bold underline-offset-4 hover:underline"
                style={{ color: "var(--accent-2)" }}
              >
                {t.openLive} ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
