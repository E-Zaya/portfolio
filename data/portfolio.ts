import {
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const skillItems = [
  {
    name: "JavaScript",
    icon: FaJs,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: FaReact,
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    url: "https://nextjs.org/",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    url: "https://tailwindcss.com/",
  },
];

export const heroBadges = [
  "Frontend",
  "Backend",
  "UI / UX",
  "Responsive",
  "Database",
];

export const contactEmail = "eitgelzaya@hotmail.com";

export const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/E-Zaya",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/itgelzaya-enkh-amgalan-800a833b7",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: `mailto:${contactEmail}`,
  },
];

export type ProjectItem = {
  title: string;
  slug: string;
  description: string;
  summary: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: "Completed" | "In Progress";
};

export const projectItems: ProjectItem[] = [
  {
    title: "Workout Log",
    slug: "workout-log",
    description:
      "A training log app for recording workouts, tracking volume, and visualizing progress with a clean dashboard.",
    summary:
      "Built with Next.js, TypeScript, Prisma, and PostgreSQL. Focused on CRUD flows, dashboard UI, auth flow, and deployment.",
  image: "/projects/workout-log.png",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/E-Zaya/workout_log",
    demo: "https://workout-log-smoky.vercel.app",
    featured: true,
    status: "In Progress",
  },

  {
    title: "Country Explorer",
    slug: "country-explorer",
    description:
      "A country information web app for browsing nations, searching by name, and learning key facts in an engaging UI.",
    summary:
      "Focused on card-based layouts, search/filter UX, and making data-heavy content feel approachable.",
    image: "/projects/country-explorer.jpg",
    tech: ["Next.js", "TypeScript", "REST API", "Tailwind CSS"],
    github: "",
    demo: "",
    status: "In Progress",
  },
];