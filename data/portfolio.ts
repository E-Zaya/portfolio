import {
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiVercel } from "react-icons/si";

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

export const heroBadges = [ "Frontend", "Backend", "UI / UX", "Responsive","Database", ];

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