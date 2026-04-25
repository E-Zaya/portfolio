import { FaReact, FaFigma } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiPostgresql, SiPrisma, SiVercel } from "react-icons/si";

export type SkillItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
};

export const skillItems: SkillItem[] = [
  {
    name: "Vercel",
    icon: SiVercel,
    url: "https://vercel.com/",
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    url: "https://nextjs.org/",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    url: "https://tailwindcss.com/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    url: "https://www.postgresql.org/",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    url: "https://www.prisma.io/",
  },
];
