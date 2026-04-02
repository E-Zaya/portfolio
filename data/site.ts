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

export const siteMeta = {
  title: "Zaya Portfolio",
  description: "High quality Next.js portfolio website",
};

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroBadges = ["UI / UX", "Frontend", "Responsive", "Animation"];

export const heroContent = {
  eyebrow: "/Web Developer / Multilingual Engineer / ",
  title: "Hello, I'm Zaya.",
  highlight: "Engineering seamless web experiences across borders.",
  description:
    "A developer bridging the gap between Japanese, English, and Mongolian tech landscapes.I focus on building clean UIs and high-performance applications with a global perspective.",
};

export const aboutContent = {
  eyebrow: "About Me",
  title: "From Tokyo to Ulaanbaatar",
  paragraphs: [
    "After spending a decade in Japan, I returned to Mongolia to pursue my goal of becoming a Web Developer. To fully focus on my growth, I enrolled in IO Institute's intensive program and committed myself to learning modern web development in a dedicated environment.",
    "Living in Japan for 10 years made me more fluent in Japanese than my native Mongolian. This gives me a unique advantage: I can learn from Japan's rich technical ecosystem through documentation, articles, and educational resources, while also expanding my perspective through English.",
    "My goal is to become a world-class developer who bridges cultures through code — combining multilingual learning, global thinking, and thoughtful design to build clean and meaningful digital experiences.",
  ],
};

export const strengths = [
  {
    title: "Multilingual Learning",
    description:
      "I learn primarily through Japanese technical resources and documentation, supported by English. This gives me access to a wider and deeper range of knowledge.",
  },
  {
    title: "Frontend Focus",
    description:
      "I am focused on frontend development with Next.js and React, building interfaces that feel clean, modern, and comfortable to use.",
  },
  {
    title: "Global Vision",
    description:
      "My journey across languages and cultures shapes how I think as a developer. I want to create products that combine local passion with global standards.",
  },
] as const;

export const journeyItems = [
  {
    year: "2014",
    title: "Move to Japan",
    description:
      "Started a new chapter abroad and built the foundation for a cross-cultural perspective.",
  },
  {
    year: "2024",
    title: "Return to Mongolia",
    description:
      "Came back to Mongolia to focus seriously on a future in web development.",
  },
  {
    year: "Now",
    title: "IO Institute",
    description:
      "Studying in an intensive environment and strengthening my frontend development skills.",
  },
  {
    year: "Future",
    title: "Global Developer",
    description:
      "Aiming to become a world-class developer who bridges cultures through code.",
  },
] as const;

export const contactEmail = "eitgelzaya@hotmail.com";

export const contactContent = {
  eyebrow: "Contact",
  title: "Let's build something clean & memorable",
  description:
    "Contact me for portfolio development, front-end implementation, or UI improvements. Let’s work together to create simple, beautiful, and user-friendly experiences.",
    // "ポートフォリオ制作、フロントエンド実装、UI改善などのご相談はこちらから。シンプルで美しく、使いやすい体験を一緒に作れます。",
  primaryTitle: "Email me directly",
  primaryDescription:
    "Feel free to reach out for work inquiries, projects, collaborations, or questions.  ", 
    // "お仕事の相談、制作依頼、コラボ、質問など気軽にお問い合わせください。",
  availability:
  "Focused on front-end development, UI improvements, and building portfolios. I welcome new projects and collaboration inquiries."
    // "フロントエンド制作、UI改善、ポートフォリオ構築などに興味があります。学習中の案件やコラボ相談も歓迎です。",
};

export const footerContent = {
  title: "Zaya Portfolio",
  subtitle: "Next.js / Tailwind CSS / Framer Motion",
};

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
] as const;

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
] as const;
