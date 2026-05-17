import type { ProjectStatus } from "@/lib/messages/types";

export type ProjectItem = {
  slug: string;
  image: string;
  tech: readonly string[];
  github?: string;
  demo?: string;
  status: ProjectStatus;
  featured?: boolean;
};

export type WipItem = {
  slug: string;
  tech: readonly string[];
};

export const projectItems = [

  {
    slug: "soul-skin-brand-lookbook",
    image: "/soul-skin-brand-lookbook.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/E-Zaya/SoulSkin-Website",
    demo: "https://soul-skin-website.vercel.app/",
    status: "In Progress",
    featured: true,
  },
    {
    slug: "workout-log",
    image: "/projects/workout-log.png",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/E-Zaya/workout_log",
    demo: "https://workout-log-smoky.vercel.app/",
    status: "Completed",
    featured: true,
  },
  {
    slug: "type-mon",
    image: "/images/blog/type-mon-case-study.png",
    tech: ["Next.js", "TypeScript", "Gemini API", "Upstash Redis", "Tailwind CSS"],
    github: "https://github.com/E-Zaya/type-mon",
    demo: "https://type-mon.vercel.app/",
    status: "Completed",
    featured: true,
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
