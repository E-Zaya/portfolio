"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenText,
  Mail,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { getMessages, withLocale, type Locale } from "@/lib/i18n";
import { projectItems } from "@/data/projects";
import { socialLinks } from "@/data/social";

type HeaderNavItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  locale: Locale;
  currentPath: string;
  primaryItems: readonly HeaderNavItem[];
  items: readonly HeaderNavItem[];
  onClose: (options?: { restoreFocus?: boolean }) => void;
};

const closeLabels: Record<Locale, string> = {
  ja: "メニューを閉じる",
  en: "Close menu",
  mn: "Цэс хаах",
};

const menuLabels: Record<Locale, string> = {
  ja: "サイトメニュー",
  en: "Site menu",
  mn: "Сайтын цэс",
};

const menuCopy = {
  ja: {
    projectEyebrow: "Featured Work",
    projectTitle: "制作実績を見る",
    projectDescription:
      "OdooTech Time、Futari、Overland Beyond など、実際に動いているプロジェクトをまとめています。",
    projectAlt: "Futariプロジェクトの画面プレビュー",
    servicesDescription: "選ばれる顔と、楽になる仕組みをどう作るか。",
    blogDescription: "制作の記録、学び、技術メモ。",
    aboutDescription: "Zayaの考え方、強み、作り方。",
    contactDescription: "相談、見積もり、制作の話はこちら。",
    status: "新規案件受付中",
    statusDetail: "小規模事業者・個人事業主・クリエイター向け",
    socials: "SNS",
  },
  en: {
    projectEyebrow: "Featured Work",
    projectTitle: "Explore Projects",
    projectDescription:
      "Live projects including OdooTech Time, Futari, and Overland Beyond.",
    projectAlt: "Futari project screen preview",
    servicesDescription: "What I build, and how it makes work easier.",
    blogDescription: "Build notes, lessons, and engineering writing.",
    aboutDescription: "How Zaya thinks, works, and designs.",
    contactDescription: "Start a project, ask a question, or get an estimate.",
    status: "Open for new work",
    statusDetail: "For small businesses, founders, and creators",
    socials: "SNS",
  },
  mn: {
    projectEyebrow: "Featured Work",
    projectTitle: "Төслүүд үзэх",
    projectDescription:
      "OdooTech Time, Futari, Overland Beyond зэрэг бодитоор ажиллаж буй төслүүд.",
    projectAlt: "Futari төслийн дэлгэцийн урьдчилсан зураг",
    servicesDescription: "Юу бүтээдэг, ажил хэрхэн хялбар болдог тухай.",
    blogDescription: "Хийсэн ажлын тэмдэглэл, сурсан зүйлс.",
    aboutDescription: "Zaya хэрхэн бодож, бүтээдэг тухай.",
    contactDescription: "Төсөл эхлүүлэх, асуулт асуух, үнийн санал авах.",
    status: "Шинэ төсөл дээр ажиллахад бэлэн",
    statusDetail: "",
    socials: "SNS",
  },
} satisfies Record<
  Locale,
  {
    projectEyebrow: string;
    projectTitle: string;
    projectDescription: string;
    projectAlt: string;
    servicesDescription: string;
    blogDescription: string;
    aboutDescription: string;
    contactDescription: string;
    status: string;
    statusDetail: string;
    socials: string;
  }
>;

const fallbackNavLabels = {
  ja: {
    services: "サービス",
    projects: "プロジェクト",
    blog: "ブログ",
    about: "私について",
    contact: "連絡先",
  },
  en: {
    services: "Services",
    projects: "Projects",
    blog: "Blog",
    about: "About",
    contact: "Contact",
  },
  mn: {
    services: "Үйлчилгээ",
    projects: "Төслүүд",
    blog: "Блог",
    about: "Миний тухай",
    contact: "Холбоо барих",
  },
} satisfies Record<
  Locale,
  Record<"services" | "projects" | "blog" | "about" | "contact", string>
>;

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function isActivePath(currentPath: string, href: string) {
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function MobileMenu({
  locale,
  currentPath,
  primaryItems,
  items,
  onClose,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const restoreFocusOnCloseRef = useRef(true);
  const closeLabel = closeLabels[locale];
  const menuLabel = menuLabels[locale];
  const messages = getMessages(locale);
  const copy = menuCopy[locale];
  const fallback = fallbackNavLabels[locale];
  const allNavItems = [...primaryItems, ...items];
  const featuredProjects = projectItems
    .filter((project) => "featured" in project && project.featured)
    .slice(0, 3);
  const showcaseProject = featuredProjects[0] ?? projectItems[0];
  const showcaseMessage = messages.projects.items[showcaseProject.slug];
  const showcaseProjectNames = featuredProjects.map(
    (project) => messages.projects.items[project.slug]?.title ?? project.slug,
  );

  const getNavItem = (href: string, fallbackLabel: string): HeaderNavItem => {
    return allNavItems.find((item) => item.href === href) ?? { href, label: fallbackLabel };
  };

  const projectsItem = getNavItem("/projects", fallback.projects);
  const menuCards = [
    {
      ...getNavItem("/services", fallback.services),
      description: copy.servicesDescription,
      icon: Sparkles,
      className: "md:col-span-2",
    },
    {
      ...getNavItem("/blog", fallback.blog),
      description: copy.blogDescription,
      icon: BookOpenText,
      className: "md:col-span-2",
    },
    {
      ...getNavItem("/about", fallback.about),
      description: copy.aboutDescription,
      icon: UserRound,
      className: "md:col-span-2",
    },
    {
      ...getNavItem("/contact", fallback.contact),
      description: copy.contactDescription,
      icon: Mail,
      className: "md:col-span-2",
    },
  ];

  useEffect(() => {
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    lastFocusedElementRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const getFocusableElements = () =>
      Array.from(panelRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []).filter(
        (element) => element.tabIndex !== -1 && !element.hasAttribute("disabled"),
      );

    const focusTimer = window.setTimeout(() => {
      const firstFocusable = getFocusableElements()[0];
      (firstFocusable ?? panelRef.current)?.focus({ preventScroll: true });
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        restoreFocusOnCloseRef.current = true;
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) {
        event.preventDefault();
        panelRef.current?.focus({ preventScroll: true });
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus({ preventScroll: true });
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus({ preventScroll: true });
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", onKeyDown);
      if (restoreFocusOnCloseRef.current) {
        lastFocusedElementRef.current?.focus({ preventScroll: true });
      }
    };
  }, [onClose]);

  const closeMenu = (options: { restoreFocus?: boolean } = {}) => {
    restoreFocusOnCloseRef.current = options.restoreFocus ?? true;
    onClose(options);
  };

  const renderCard = (card: (typeof menuCards)[number]) => {
    const target = withLocale(locale, card.href);
    const active = isActivePath(currentPath, card.href);
    const Icon = card.icon;

    return (
      <Link
        key={card.href}
        href={target}
        scroll
        onClick={() => closeMenu({ restoreFocus: false })}
        aria-current={active ? "page" : undefined}
        className={cn(
          "spotlight-menu-card group relative flex min-h-36 flex-col justify-between overflow-hidden rounded-3xl p-5",
          card.className,
          active && "spotlight-menu-active",
        )}
      >
        <span className="spotlight-menu-card-sheen pointer-events-none absolute inset-0" />

        <span className="relative z-10 flex items-start justify-between gap-4">
          <span className="spotlight-menu-icon grid h-11 w-11 shrink-0 place-items-center rounded-2xl">
            <Icon className="h-5 w-5" />
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </span>

        <span className="relative z-10 block">
          <span className="block text-lg font-semibold text-foreground">{card.label}</span>
          <span className="mt-2 block text-sm leading-6 text-muted">{card.description}</span>
        </span>
      </Link>
    );
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      id="site-drawer"
      className="site-drawer fixed inset-0 z-[100] grid place-items-center p-3 sm:p-5"
      onPointerDown={(event) => {
        const target = event.target;
        if (target instanceof Node && !panelRef.current?.contains(target)) {
          closeMenu({ restoreFocus: true });
        }
      }}
    >
      <div className="site-drawer-backdrop absolute inset-0" />

      <aside
        ref={panelRef}
        className="spotlight-menu-panel relative flex max-h-[calc(100dvh-1.5rem)] w-[min(62rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[2rem] p-4 sm:p-5 lg:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={menuLabel}
        tabIndex={-1}
        onPointerDown={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 spotlight-menu-frame" />

        <button
          type="button"
          className="spotlight-menu-close absolute right-3 top-3 z-20 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:right-4 sm:top-4"
          onClick={() => closeMenu({ restoreFocus: true })}
          aria-label={closeLabel}
        >
          <X size={18} />
        </button>

        <div className="spotlight-menu-scroll relative z-10 min-h-0 flex-1 overflow-y-auto pt-14">
          <nav className="grid grid-cols-1 gap-3 md:grid-cols-7">
            <Link
              href={withLocale(locale, projectsItem.href)}
              scroll
              onClick={() => closeMenu({ restoreFocus: false })}
              aria-current={isActivePath(currentPath, projectsItem.href) ? "page" : undefined}
              className={cn(
                "spotlight-menu-card spotlight-menu-feature group relative flex min-h-[21rem] overflow-hidden rounded-3xl p-5 md:col-span-3 md:row-span-2",
                isActivePath(currentPath, projectsItem.href) && "spotlight-menu-active",
              )}
            >
              <Image
                src={showcaseProject.image}
                alt={showcaseMessage?.title ?? copy.projectAlt}
                fill
                sizes="(min-width: 768px) 31rem, calc(100vw - 3rem)"
                className="spotlight-menu-feature-image object-cover"
              />
              <span className="absolute inset-0 spotlight-menu-feature-shade" />
              <span className="spotlight-menu-card-sheen pointer-events-none absolute inset-0" />

              <span className="relative z-10 flex h-full w-full flex-col justify-between">
                <span className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/25 bg-black/30 px-3 py-1 text-xs font-semibold uppercase text-white/90 backdrop-blur-md">
                    {copy.projectEyebrow}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </span>

                <span className="block max-w-sm">
                  <span className="block text-3xl font-semibold leading-tight text-white">
                    {copy.projectTitle}
                  </span>
                  <span className="mt-3 block text-sm leading-6 text-white/80">
                    {copy.projectDescription}
                  </span>
                  <span className="mt-4 flex flex-wrap gap-2">
                    {showcaseProjectNames.map((name) => (
                      <span
                        key={name}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md"
                      >
                        {name}
                      </span>
                    ))}
                  </span>
                </span>
              </span>
            </Link>

            {menuCards.map(renderCard)}
          </nav>
        </div>

        <div className="relative z-10 flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="spotlight-menu-status-dot h-2 w-2 rounded-full" />
              {copy.status}
            </p>
            <p className="mt-1 text-xs leading-5 text-muted">{copy.statusDetail}</p>
          </div>

          <div className="flex items-center gap-2" aria-label={copy.socials}>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const external = link.url.startsWith("http");

              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  aria-label={link.name}
                  className="spotlight-menu-social grid h-10 w-10 place-items-center rounded-full border border-border text-soft transition hover:-translate-y-0.5 hover:text-foreground"
                  style={{ color: link.color }}
                  onClick={() => closeMenu({ restoreFocus: false })}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </div>,
    document.body,
  );
}
