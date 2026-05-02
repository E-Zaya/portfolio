import type { ProjectStatus } from "@/lib/messages/types";

export type ProjectItem = {
  slug: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: ProjectStatus;
  featured?: boolean;
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

export type ProjectSlug = (typeof projectItems)[number]["slug"];