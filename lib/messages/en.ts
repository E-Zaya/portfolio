import type { HeroVisualContent } from "./types";
export const en = {
  meta: {
    title: "Zaya | AI-Driven Full-Stack Developer (Next.js, Multilingual)",
    description:
      "AI-driven full-stack developer fluent in Mongolian, Japanese, and English. Builds fast, high-quality web applications with Next.js for globally minded products.",
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
    eyebrow: "/ Custom Web Design / Fast Delivery / Practical Features /",
    title: "Websites that show your business value,",
    highlight: "designed from scratch.",
    description:
      "No generic templates. I design and build custom websites around your goals — from landing pages and company sites to small web apps with login, admin screens, and simple databases.",
    badges: ["Custom Design", "Fast Delivery", "Practical Features"],
    primaryCta: "Free Consultation",
    secondaryCta: "View Work",
    meta: {
      status: "Available for Projects · 2026.04",
      focus: "Web Development / Landing Pages / Small-scale Web Apps",
      location: "Ulaanbaatar",
    },
    techLine: "Next.js · TypeScript · Tailwind · Postgres · Figma",
    visualHint: "I build all of this",
    features: [
      {
        title: "Custom Design",
        description:
          "Designed from scratch for each business, not based on generic templates.",
      },
      {
        title: "Fast Delivery",
        description:
          "A focused process from request to delivery, built for speed and clarity.",
      },
      {
        title: "Practical Features",
        description:
          "Supports login, admin screens, and small database-backed features.",
      },
    ],
    visual: {
      label: "Service Preview",
      title: "Custom website system",
      items: ["Landing Page", "Admin Login", "Database", "JP / MN / EN"],
      captions: [
        "Marketing landing page",
        "Admin dashboard with login",
        "Small database UI",
        "Bilingual / trilingual sites",
      ],
    },
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
    filterLabel: "Filter by tag",
    browseTitle: "Browse posts",
    backToAllPosts: "Back to all posts",
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
    breadcrumbAria: "Breadcrumb",
    toc: "Table of Contents",
    tocItemAria: "Jump to section",
    related: "Related Posts",
    readMore: "Read more",
    allTags: "All",
    noPostsTitle: "No posts found.",
    noPostsDescription: "Try a different tag.",
    copyCode: "Copy",
    copiedCode: "Copied",
    copyCodeAria: "Copy code to clipboard",

    // [FIX] BlogPostCTA の mailto を messages から取得
    untitled: "Untitled post",
    uncategorized: "Uncategorized",
    noSummary: "Summary will be added soon.",
    noDate: "Date not set",
    minRead: (minutes: number) => `${minutes} min read`,
    notFoundTitle: "Article not found | Zaya Portfolio",
    categoryLabels: {
      cloud: "Cloud",
      frontend: "Frontend",
      engineering: "Engineering",
      diary: "Diary",
    },
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
    mn: "MN",
  },
  visual: {
    label: "Service Preview",
    title: "Custom website system",
    browserUrl: "zaya.dev / preview",
    items: ["Landing Page", "Admin Login", "Database", "JP / MN / EN"],
    captions: [
      "Marketing landing page",
      "Admin dashboard with login",
      "Small database UI",
      "Bilingual / trilingual sites",
    ],
    scenes: {
      landing: {
        brand: "Brand",
        nav: ["Features", "Pricing", "Works"],
        ctaSmall: "Start Free",
        eyebrow: "✦ NEW RELEASE",
        titleBefore: "Maximize ",
        titleHighlight: "growth",
        titleAfter: " with a clear site",
        description:
          "From customer acquisition to checkout,\neverything works in one flow.",
        primaryCta: "Try Free →",
        secondaryCta: "View Demo",
        stat: "↑ 312%",
        live: "LIVE",
        features: ["✓ SEO Ready", "✓ A/B Testing", "✓ Analytics Dashboard"],
        socialProofNumber: "1,200+",
        socialProofText: "teams use it",
      },
      admin: {
        logo: "Admin",
        menu: ["Dashboard", "Users", "Revenue", "Settings"],
        userName: "admin",
        loginStatus: "● Logged in",
        kpis: [
          {
            label: "Monthly Revenue",
            value: "$8.4K",
            change: "+12.4%",
            up: true,
          },
          { label: "Users", value: "847", change: "+5.2%", up: true },
          { label: "Conversion", value: "3.2%", change: "-0.4%", up: false },
        ],
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      database: {
        queryTable: "users",
        columns: ["id", "name", "email", "status"],
        rows: [
          {
            id: "001",
            name: "Alex Carter",
            email: "alex@ex.co",
            status: "active",
          },
          {
            id: "002",
            name: "Mia Tanaka",
            email: "mia@ex.co",
            status: "active",
          },
          {
            id: "003",
            name: "Б. Мөнхбат",
            email: "munkh@ex.co",
            status: "draft",
          },
          {
            id: "004",
            name: "James Kim",
            email: "james@ex.co",
            status: "active",
          },
        ],
      },
      multilingual: {
        langs: [
          { code: "JA", line: "Careful Japanese copy that builds trust." },
          { code: "EN", line: "Clear, considered English copy." },
          { code: "MN", line: "Илэрхий, цэвэрхэн монгол текст." },
        ],
        footer: "i18n · seamless switch",
      },
    },
  } satisfies HeroVisualContent,
};
