import type { ProjectStatus } from "@/lib/messages/types";

// 実案件 / 自社プロダクト / 制作例 — バッジ表示に使う(表示名は messages の kindLabels)
export type ProjectKind = "client" | "product" | "sample";
export type ProjectCategory = "website" | "app";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  slug: string;
  image: string;
  gallery?: readonly string[];
  tech: readonly string[];
  github?: string;
  demo?: string;
  links?: readonly ProjectLink[];
  status: ProjectStatus;
  featured?: boolean;
  kind: ProjectKind;
  category: ProjectCategory;
};

export type WipItem = {
  slug: string;
  tech: readonly string[];
};

export const projectItems = [

  {
    slug: "odootech-time",
    category: "app",
    image: "/project-images/odootech-time-map.png",
    gallery: [
      "/project-images/odootech-time-map.png",
      "/project-images/odootech-time-login.png",
      "/project-images/odootech-time-1.png",
      "/project-images/odootech-time-2.png",
      "/project-images/odootech-time-3.png",
    ],
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
    // ホームのピックアップは kind:"client" の先頭2件 —
    // Overlandより公式サイトを見せたいので、この順序を維持すること
    slug: "odootech-website",
    category: "website",
    image: "/project-images/odootech-web-hero.png",
    gallery: [
      "/project-images/odootech-web-hero.png",
      "/project-images/odootech-web-services.png",
      "/project-images/odootech-web-integration.png",
      "/project-images/odootech-web-mobile.png",
    ],
    tech: ["Next.js", "TypeScript", "React", "Static Export", "Custom Design System"],
    demo: "https://odootech-website.vercel.app/",
    status: "Completed",
    featured: true,
    kind: "client",
  },
  {
    slug: "overland-beyond",
    category: "website",
    image: "/project-images/overland-hero.png",
    gallery: [
      "/project-images/overland-hero.png",
      "/project-images/overland-1.png",
    ],
    tech: ["Next.js", "TypeScript", "Odoo", "Python", "Sass"],
    demo: "https://overlandbeyond.com/",
    status: "Completed",
    featured: true,
    kind: "client",
  },
  {
    slug: "futari",
    category: "app",
    image: "/project-images/futari-home-desktop.png",
    gallery: [
      "/project-images/futari-home-desktop.png",
      "/project-images/futari-home-mobile.png",
      "/project-images/futari-login-mobile.png",
      "/project-images/futari-setting-desktop.png",
      "/project-images/futari-setting-mobile.png",
      "/project-images/01-home-private-space.png",
      "/project-images/02-diary-everyday.png",
      "/project-images/03-wishes-promise.png",
      "/project-images/04-calendar-look-back.png",
      "/project-images/05-gallery-private.png",
      "/project-images/06-memories-become-treasure.png",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "MapLibre GL"],
    demo: "https://futari.ezaya.dev/",
    status: "Completed",
    featured: true,
    kind: "product",
  },
  {
    slug: "zaza-lab",
    category: "app",
    image: "/project-images/zaza-lab-home.png",
    gallery: [
      "/project-images/zaza-lab-home.png",
      "/project-images/zaza-lab-loading.png",
      "/project-images/zaza-lab-menu.png",
      "/project-images/zaza-lab-activity.png",
      "/project-images/zaza-lab-activity-2.png",
      "/project-images/zaza-lab-search.png",
      "/project-images/zaza-lab-wrong-answer.png",
    ],
    tech: ["Next.js", "TypeScript", "PWA", "Tailwind CSS", "LocalStorage"],
    demo: "https://zaza-lab.ezaya.dev/",
    status: "Completed",
    featured: true,
    kind: "product",
  },
  {
    slug: "soul-skin-brand-lookbook",
    category: "website",
    image: "/project-images/soul-skin-hero.png",
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
    category: "website",
    image: "/project-images/sui-salon-hero.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/E-Zaya/sui-salon",
    demo: "https://sui-salon.vercel.app/",
    status: "Completed",
    kind: "sample",
  },
  {
    slug: "type-mon",
    category: "app",
    image: "/images/blog/type-mon-case-study.png",
    tech: ["Next.js", "TypeScript", "Gemini API", "Upstash Redis", "Tailwind CSS"],
    github: "https://github.com/E-Zaya/type-mon",
    demo: "https://type-mon.vercel.app/",
    status: "Completed",
    featured: true,
    kind: "product",
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
