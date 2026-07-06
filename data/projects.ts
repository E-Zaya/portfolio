import type { ProjectStatus } from "@/lib/messages/types";

// 実案件 / 自社プロダクト / 制作例 — バッジ表示に使う(表示名は messages の kindLabels)
export type ProjectKind = "client" | "product" | "sample";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  slug: string;
  image: string;
  tech: readonly string[];
  github?: string;
  demo?: string;
  links?: readonly ProjectLink[];
  status: ProjectStatus;
  featured?: boolean;
  kind: ProjectKind;
};

export type WipItem = {
  slug: string;
  tech: readonly string[];
};

export const projectItems = [

  {
    slug: "odootech-time",
    image: "/project-images/odootech-time-map.png",
    tech: ["Flutter", "Dart", "Riverpod", "Odoo 17", "Python", "OpenStreetMap"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=mn.odootech.timeattendance",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/mn/app/odootech-time/id6767230193",
      },
    ],
    status: "Completed",
    featured: true,
    kind: "client",
  },
  {
    slug: "overland-beyond",
    image: "/project-images/overland-hero.png",
    tech: ["Next.js", "TypeScript", "Odoo", "Python", "Sass"],
    demo: "https://overlandbeyond.com/",
    status: "Completed",
    featured: true,
    kind: "client",
  },
  {
    slug: "futari",
    image: "/project-images/futari-home-desktop.png",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "MapLibre GL"],
    demo: "https://futari.ezaya.dev/",
    status: "Completed",
    featured: true,
    kind: "product",
  },
  {
    slug: "zaza-lab",
    image: "/project-images/zaza-lab-home.png",
    tech: ["Next.js", "TypeScript", "PWA", "Tailwind CSS", "LocalStorage"],
    demo: "https://zaza-lab.ezaya.dev/",
    status: "Completed",
    featured: true,
    kind: "product",
  },
  {
    slug: "soul-skin-brand-lookbook",
    image: "/soul-skin-brand-lookbook.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/E-Zaya/SoulSkin-Website",
    demo: "https://soul-skin-website.vercel.app/",
    status: "Completed",
    featured: true,
    kind: "sample",
  },
  {
    // sui-salon: サロン紹介シングルページ。3-4万円帯の案件想定の制作例。
    slug: "sui-salon",
    image: "/image.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/E-Zaya/sui-salon",
    demo: "https://sui-salon.vercel.app/",
    status: "Completed",
    kind: "sample",
  },
  {
    slug: "type-mon",
    image: "/images/blog/type-mon-case-study.png",
    tech: ["Next.js", "TypeScript", "Gemini API", "Upstash Redis", "Tailwind CSS"],
    github: "https://github.com/E-Zaya/type-mon",
    demo: "https://type-mon.vercel.app/",
    status: "Completed",
    featured: true,
    kind: "product",
  },
  {
    slug: "workout-log",
    image: "/projects/workout-log.png",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/E-Zaya/workout_log",
    demo: "https://workout-log-smoky.vercel.app/",
    status: "Completed",
    featured: true,
    kind: "product",
  },
  {
    slug: "suijaku",
    image: "/project-images/suijaku-playing.png",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "localStorage"],
    demo: "https://suijaku-minigame.vercel.app/",
    status: "Completed",
    kind: "product",
  },
  {
    slug: "minesweeper",
    image: "/project-images/ms-playing.png",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    demo: "https://mine-sweeper-orpin.vercel.app/minesweeper",
    status: "Completed",
    kind: "sample",
  },
] as const satisfies readonly ProjectItem[];

// 制作中のプロジェクト — slug を追加するだけで WipSection に表示される
export const wipItems: readonly WipItem[] = [
  {
    slug: "lookbook",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "portfolio",
    tech: ["Next.js", "TypeScript"],
  },
  {
    slug: "local-business",
    tech: ["Next.js", "Tailwind CSS"],
  },
];

export type ProjectSlug = (typeof projectItems)[number]["slug"];
