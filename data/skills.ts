import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export type SkillItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
};

export const skillItems: SkillItem[] = [
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
