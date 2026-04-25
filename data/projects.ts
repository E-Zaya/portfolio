import type { en } from "../lib/messages/en";

export type ProjectItem = {
  slug: keyof typeof en.projects.items;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: "Completed" | "In Progress";
  featured?: boolean;
};

export const projectItems: ProjectItem[] = [
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
    slug: "workout-log",
    image: "/projects/workout-log.png",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/E-Zaya/workout_log",
    demo: "https://workout-log-smoky.vercel.app/",
    status: "Completed",
    featured: true,
  },
];
