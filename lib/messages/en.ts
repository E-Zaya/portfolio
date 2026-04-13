export const en = {
  meta: {
    title: "Zaya Portfolio",
    description: "High-quality Next.js portfolio website",
  },
  header: {
    subtitle: "Portfolio",
    logoAria: "Back to home",
    menuAria: "Open menu",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    eyebrow: "/ Web Developer / Multilingual Engineer /",
    title: "Hello, I'm Zaya.",
    highlight: "Crafting universal designs that \ntranscend language barriers.",
    description:
      "Bridging the tech ecosystems of Japan, Mongolia, and the English-speaking world. I focus on building clean UIs and high-performance applications with a global perspective.",
    badges: ["Frontend Development", "Full-stack Solutions", "UI / UX Design", "Database Management"],
  },
  skills: {
    eyebrow: "Tech Stack",
  },
  about: {
    eyebrow: "About Me",
    title: "From Consumer to Creator",
    paragraphs: [
      "My mission as a developer is to bridge cultures and languages through the universal language of technology. Drawing from my multilingual background, I strive to create seamless digital experiences that feel intuitive regardless of cultural borders.",
      "After a decade in Japan, I returned to Mongolia to fully commit to my journey as a Web Developer. Currently, I am immersed in an intensive program at the IO Institute, refining my skills in modern web development every day.",
      "Living in Japan for 10 years allowed me to reach native-level fluency. This gives me a unique edge: the ability to dive deep into Japan's rich technical documentation and community, while staying connected to global trends through English. I leverage this dual-perspective to find the best solutions for every challenge.",
    ],
    strengthsEyebrow: "Strengths",
    strengthsTitle: "What I Bring to the Table",
    strengths: [
      {
        title: "Multilingual Tech Research",
        description:
          "I navigate technical documentation in both Japanese and English with ease, allowing me to research deeply and implement the most effective solutions without being limited by language.",
      },
      {
        title: "Frontend Craftsmanship",
        description:
          "Specializing in Next.js and React, I am dedicated to building interfaces that are not only clean and modern but also feel effortless to use.",
      },
      {
        title: "Precision & Ownership",
        description:
          "My 10 years in Japan instilled in me a deep appreciation for detail and professional responsibility. Beyond just coding, I prioritize clear communication and thorough documentation to ensure team success.",
      },
    ],
    journeyEyebrow: "Journey",
    journeyTitle: "My Path So Far",
    journey: [
      {
        year: "2016",
        title: "The Japan Chapter",
        description:
          "Relocated to Japan, building a foundation of cross-cultural understanding and a global mindset over the next decade.",
      },
      {
        year: "2026",
        title: "The Creative Pivot",
        description:
          "Chose to move from 'consuming' to 'creating.' Returned to Mongolia to dedicate myself to a future in engineering.",
      },
      {
        year: "Now",
        title: "IO Institute",
        description:
          "Evolving daily in an intensive environment, mastering full-stack skills and turning yesterday's challenges into today's capabilities.",
      },
      {
        year: "Future",
        title: "Global Developer",
        description:
          "Aiming to build products that innovate daily life across borders and devices. On a mission to become a world-class creator.",
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    titleA: "Featured",
    titleB: "Work",
    description:
      "A selection of projects focused on real-world usability, performance, and clean UI design. Each one reflects my commitment to maintainable and scalable code.",
    featuredEyebrow: "Featured",
    featuredTitle: "Main Project",
    otherEyebrow: "Archive",
    otherTitle: "Other Projects",
    featuredBadge: "Featured",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    status: {
      Completed: "Completed",
      "In Progress": "In Progress",
    },
    items: {
      "workout-log": {
        title: "Workout Log",
        description:
          "A full-stack tracking app with volume analysis and exercise management.",
        summary:
          "Built with Next.js, Prisma, and PostgreSQL. Features exercise management and weekly volume visualization, designed with a focus on intuitive UX and clean UI.",
      },
    },
  },
  blog: {
    eyebrow: "Blog",
    title: "Logs of a Developer in the Making",
    description:
      "Documenting my technical insights, UI design thinking, and the small wins of a coding journey. A space where trial and error meets progress.",
    filterLabel: "Filter by tag",
    browseTitle: "Browse posts",
    backToBlog: "Back to blog",
    postCount: (count: number) => `${count} post${count !== 1 ? "s" : ""}`,
    notFoundTitle: "Post Not Found | Zaya Portfolio",
  },
  contact: {
    eyebrow: "Contact",
    titleA: "Transforming ideas into",
    titleB: "seamless digital experiences",
    description:
      "Whether it's building a portfolio from scratch, implementing a sleek frontend, or improving UI, I'm ready to dive in. Let's create something simple, beautiful, and user-friendly.",
    primaryLabel: "Direct Contact",
    primaryTitle: "Send me an email",
    primaryDescription:
      "Feel free to reach out for project inquiries, collaborations, or just to say hello.",
    emailLabel: "Email Address",
    copy: "Copy email",
    copied: "Copied!",
    send: "Send Email",
    viewProjects: "View Projects",
    socialTitle: "Social",
    connectVia: "Connect via",
    availabilityLabel: "Availability",
    availability:
      "Open to new projects and frontend collaborations. Let's build something meaningful together.",
  },
  footer: {
    title: "Zaya Portfolio",
    subtitle: "Next.js / Tailwind CSS / Framer Motion",
    copyright: "© 2026 Designed & Built by Zaya",
  },
  langToggle: {
    en: "EN",
    ja: "JP",
  },
};