"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectItems, type ProjectItem } from "@/data/projects";
import { getMessages, type Locale } from "@/lib/i18n";
import { getBriefHref, briefLabels } from "@/lib/contact-brief";
const work: readonly ProjectItem[] = ["odootech-website", "odootech-time"].map(
  (slug) => projectItems.find((item) => item.slug === slug)!,
);
const labels = {
  ja: {
    tabs: "制作実績の種類",
    web: "Webサイト",
    app: "アプリ",
    all: "制作実績を見る",
  },
  en: {
    tabs: "Project type",
    web: "Websites",
    app: "Apps",
    all: "Explore projects",
  },
  mn: {
    tabs: "Төслийн төрөл",
    web: "Вэбсайт",
    app: "Апп",
    all: "Төслүүдийг үзэх",
  },
};
export default function HeroShowcase({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const t = labels[locale],
    messages = getMessages(locale);
  function onKey(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next = e.key === "Home" ? 0 : e.key === "End" ? 1 : 1 - index;
    setActive(next);
    tabs.current[next]?.focus();
  }
  return (
    <div className="real-work-showcase">
      <div className="real-work-tabs" role="tablist" aria-label={t.tabs}>
        {work.map((project, index) => (
          <button
            key={project.slug}
            ref={(el) => {
              tabs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={"work-tab-" + index}
            aria-selected={active === index}
            aria-controls={"work-panel-" + index}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(e) => onKey(e, index)}
          >
            {index === 0 ? t.web : t.app}
          </button>
        ))}
      </div>
      {work.map((project, index) => {
        const content = messages.projects.items[project.slug];
        const src =
          index === 1 ? (project.gallery?.[2] ?? project.image) : project.image;
        return (
          <div
            key={project.slug}
            role="tabpanel"
            id={"work-panel-" + index}
            aria-labelledby={"work-tab-" + index}
            hidden={active !== index}
          >
            <div
              className={
                "real-work-image " +
                (index === 1 ? "real-work-app" : "real-work-web")
              }
            >
              <Image
                src={src}
                alt={content.title}
                fill
                priority={index === 0}
                sizes={
                  index === 0 ? "(min-width: 1024px) 420px, 90vw" : "180px"
                }
              />
            </div>
            <h3 className="real-work-title">{content.title}</h3>
            <div className="real-work-links">
              <Link href={getBriefHref(locale, { project: project.slug })}>
                {briefLabels[locale].consult}
                <ArrowUpRight size={15} aria-hidden />
              </Link>
              <Link href={"/" + locale + "/projects"}>
                {t.all}
                <ArrowUpRight size={15} aria-hidden />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
