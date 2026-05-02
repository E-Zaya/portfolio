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
    slug: "workout-log",
    image: "/projects/workout-log.png",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/E-Zaya/workout_log",
    demo: "https://workout-log-smoky.vercel.app/",
    status: "Completed",
    featured: true,
  },
  // {
  //   slug: "soul-skin-brand-lookbook",
  //   image: "/projects/soul-skin-brand-lookbook.png",
  //   tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   github: "https://github.com/E-Zaya/soul-skin-brand-lookbook",
  //   demo: "https://soul-skin-brand-lookbook.vercel.app/",
  //   status: "In Progress",
  //   featured: true,
  // },
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