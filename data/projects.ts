export type ProjectItem = {
  title: string;
  slug: string;
  description: string;
  summary: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: "Completed" | "In Progress";
  featured?: boolean;
};

export const projectItems: ProjectItem[] = [
  {
    title: "Workout Log",
    slug: "workout-log",
    description:
      "A full-stack workout tracking app with volume analysis and exercise management.",
    summary:
      "Built with Next.js, Prisma, and PostgreSQL. The app allows users to log workouts, manage exercises, and visualize weekly training volume. Designed with a focus on usability and clean UI.",
    image: "/projects/workout-log.png",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/E-Zaya/workout_log",
    demo: "https://workout-log-smoky.vercel.app/",
    status: "Completed",
    featured: true,
  },
];