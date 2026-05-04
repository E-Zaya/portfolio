import type { HeroVisualContent, Messages } from "./types";

export const en = {
  meta: {
    title: "Zaya | Web Design & Development in Japanese and Mongolian",
    description:
      "I build clear, trustworthy websites for freelancers, small businesses, and creators in Japan and Mongolia. Japanese and Mongolian support available.",
  },
  header: {
    subtitle: "Web Developer",
    logoAria: "Back to home",
    menuAria: "Open menu",
  },
  nav: [
    { label: "Service", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
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
      status: "Available for Projects · 2026.05",
      focus: "Websites & Web Apps",
      location: "Ulaanbaatar",
    },
    techLine: "Free consultation · Timeline from 2 weeks · JP/MN support",
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
    eyebrow: "About",
    title: "A multilingual web developer",
    paragraphs: [
      "I build websites in Mongolian, Japanese, and English, with attention to both language and cultural context. My goal is to create websites that are easy to understand, easy to use, and clear for the people they are meant to reach.",
      "After spending 10 years in Japan, I returned to Mongolia to seriously pursue a career as an engineer. I am currently studying full-stack development at IO Institute while also building websites for freelancers, small businesses, and independent creators.",
      "Rather than relying on templates, I focus on the audience, purpose, and message behind each project so the final website communicates clearly.",
    ],
    strengthsEyebrow: "Strengths",
    strengthsTitle: "What I can offer",
    strengths: [
      {
        title: "Multilingual web production",
        description:
          "I can create websites in Japanese, Mongolian, and English while considering language, tone, and cultural differences. I can support both Japan-facing and Mongolia-facing projects.",
      },
      {
        title: "Clear and practical UI design",
        description:
          "Using Next.js and React, I build websites that are not only visually clean, but also easy to understand, easy to navigate, and practical for real users.",
      },
      {
        title: "Careful communication",
        description:
          "I help organize your goals, budget, and required features before building. Even if this is your first website, I will explain the process clearly and keep the project moving step by step.",
      },
    ],
  },
  projects: {
    eyebrow: "",
    titleA: "",
    titleB: "Selected Work",
    description:
      "Projects where I handled planning, design, implementation, and deployment myself, with attention to both usability and visual quality.",
    featuredEyebrow: "",
    featuredTitle: "Main Projects",
    otherEyebrow: "Other Projects",
    otherTitle: "Other Work",
    featuredBadge: "Featured",
    liveDemo: "View Demo",
    viewCode: "View Code",
    scopeLabel: "Scope",
    focusLabel: "Focus",
    wipTitle: "Projects in Progress",
    wipStatus: "In Progress",
    status: {
      Completed: "Completed",
      "In Progress": "In Progress",
    },
    items: {
      "workout-log": {
        title: "Workout Log App",
        description:
          "A full-stack workout tracking app with volume analysis and exercise management.",
        summary:
          "Built with Next.js, Prisma, and PostgreSQL. It includes workout logging, exercise management, and weekly training volume visualization, designed with usability in mind.",
        scope:
          "Handled planning, design, frontend, backend, database design, and deployment independently.",
        focus:
          "Making workout logging simple and weekly progress easy to understand at a glance.",
      },
      "soul-skin-brand-lookbook": {
        title: "Soul Skin Brand Lookbook",
        description:
          "A lookbook website designed to communicate the atmosphere and visual identity of a brand.",
        summary:
          "Built not as an e-commerce site, but as a visual brand presentation with a clear path toward Instagram and contact links.",
        scope:
          "Handled design, frontend implementation, content structure, and deployment independently.",
        focus:
          "Communicating the brand’s atmosphere through visuals and creating a natural flow toward social media and contact.",
      },
    },
    wip: {
      items: {
        lookbook: {
          title: "Lookbook Website",
          description:
            "A visual-first lookbook website for presenting an apparel brand’s world and atmosphere.",
        },
        portfolio: {
          title: "Portfolio Improvements",
          description: "Improving this website’s design, UX, and performance.",
        },
        "local-business": {
          title: "Small Business Website",
          description:
            "A simple and practical website for independent shops and small local businesses.",
        },
      },
    },
  },
  blog: {
    filterLabel: "Filter by tag",
    browseTitle: "All Posts",
    backToAllPosts: "Back to all posts",
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
    breadcrumbAria: "Breadcrumb",
    toc: "Table of Contents",
    tocItemAria: "Jump to heading",
    related: "Related Posts",
    readMore: "Read more",
    allTags: "All",
    noPostsTitle: "No posts found.",
    noPostsDescription: "Try another tag.",
    copyCode: "Copy",
    copiedCode: "Copied",
    copyCodeAria: "Copy code",
    untitled: "Untitled post",
    uncategorized: "Uncategorized",
    noSummary: "Summary will be added later.",
    noDate: "Date not set",
    minRead: (minutes: number) => `${minutes} min read`,
    notFoundTitle: "Article not found | Zaya-dev",
    categoryLabels: {
      cloud: "Cloud",
      frontend: "Frontend",
      engineering: "Engineering",
      diary: "",
    },
  },

  // Services page content
  services: {
    title: "Web Design & Development Services",
    subtitle:
      "I design and build websites from scratch for freelancers, small businesses, local shops, and creators who want to attract customers and build trust online.",
    intro:
      "From landing pages and business websites to admin screens, login features, and multilingual support, I build only what your project actually needs.",
    ctaLabel: "Contact",
    bottomCtaTitle: "You can start with a simple consultation",
    bottomCtaText:
      "Your idea does not need to be fully organized yet. I can help you clarify the structure, features, and budget based on your goals.",
    introNote:
      "Introductory pricing is available for the first 5 projects only.",
    plans: {
      simple: {
        name: "Simple LP",
        price: "¥40,000〜¥50,000",
        description:
          "A simple one-page landing page that introduces your service, shop, or offer clearly.",
        details: [
          "1-page layout",
          "Original design",
          "Social media links",
          "Responsive design",
          "Basic SEO",
          "1 minor revision per month",
        ],
        timeline: "From 7 to 14 days",
        note: "The process will be smoother if you can prepare the basic text and images in advance.",
      },
      starter: {
        name: "Starter Website",
        badge: "Recommended",
        price: "¥80,000〜¥98,000",
        description:
          "Recommended for presenting your business properly with the essential pages.",
        details: [
          "3–4 pages",
          "Original design",
          "News update feature",
          "Social media links",
          "Responsive design",
          "Basic SEO setup",
          "2 minor revisions per month",
        ],
        timeline: "3 to 4 weeks",
        note: "A practical structure that includes your business information, key content, contact flow, and an easy way to update announcements.",
      },
      custom: {
        name: "Custom Development",
        price: "From ¥150,000 / consultation required",
        description:
          "For websites and small web apps that need custom features.",
        details: [
          "Login functionality",
          "Admin dashboard",
          "Database integration",
          "Payment integration",
          "Advanced animations",
          "Multilingual support",
          "API integrations",
        ],
        note: "The structure will be planned individually based on your required features, content, and how the site will be operated.",
      },
    },
    targetAudience: {
      title: "Recommended for",
      items: [
        "People who feel limited by using social media alone",
        "People who want to clearly explain their business, service, or offer",
        "People who want a website tailored to their business instead of a generic template",
        "People who want a high-quality website while keeping costs reasonable",
        "People who want to keep improving their website after launch through consultation",
      ],
    },
    reasons: {
      title: "Why work with me",
      items: [
        {
          title: "Designed from scratch",
          description:
            "I do not simply reuse templates. I plan the structure based on your business, target audience, and goals.",
        },
        {
          title: "Built with inquiries in mind",
          description:
            "The design is not only about appearance. I also consider CTAs, page flow, and content structure so visitors can take action more easily.",
        },
        {
          title: "Quality-focused, even at a lower price",
          description:
            "As introductory pricing, I handle planning, design, and implementation carefully from start to finish.",
        },
        {
          title: "Frequent communication",
          description:
            "I keep communication clear during production, which helps reduce misunderstandings and keeps the final result close to your expectations.",
        },
      ],
    },
    philosophy: {
      title: "What I value when building",
      items: [
        {
          title: "Understanding your business",
          description:
            "I review your service, strengths, target audience, and competitors to clarify what the website should communicate.",
        },
        {
          title: "A structure that leads to inquiries",
          description:
            "I think through the order of information, button placement, and user flow so visitors can move through the site without confusion.",
        },
        {
          title: "Design and usability together",
          description:
            "I value visual quality, but also readability on mobile, clear text, and smooth operation.",
        },
      ],
    },
    process: {
      title: "Process",
      steps: [
        {
          title: "Contact",
          description:
            "First, tell me briefly what kind of website you want, your goal, and your rough budget.",
        },
        {
          title: "Discovery",
          description:
            "I ask about your business, target audience, required pages, and necessary features.",
        },
        {
          title: "Estimate",
          description:
            "I organize the production scope, price, and timeline, then send you a proposal.",
        },
        {
          title: "Production",
          description:
            "I work on the structure, design, and implementation. I will also check in with you when needed.",
        },
        {
          title: "Review & Revision",
          description:
            "You review the website before launch, and I apply the necessary revisions.",
        },
        {
          title: "Launch & Support",
          description:
            "I handle the launch process and can also support maintenance or minor updates if needed.",
        },
      ],
    },
    fees: {
      title: "Cost Breakdown",
      description:
        "In addition to the plan price above, the following costs may apply depending on your project.",
      production: {
        title: "Production Fee",
        description:
          "The cost of building the website. The plan prices above are production fees.",
      },
      maintenance: {
        title: "Maintenance Fee",
        description:
          "A fee for safely maintaining and updating the website after launch.",
      },
      external: {
        title: "External Costs",
        description:
          "Actual costs for domain, hosting, and other third-party services.",
      },
      delivery: {
        title: "Deliverables",
        description:
          "After production, I deliver the full codebase reflecting the design and content. If you need post-launch updates, operation support, or ongoing maintenance, a separate maintenance fee will apply.",
      },
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "How many revisions are included?",
          answer:
            "It depends on the plan. Minor revisions are included within each plan. Major layout changes or additional features will require a separate estimate.",
        },
        {
          question: "When do I need to pay?",
          answer:
            "In general, part of the payment is required before production starts, and the remaining balance is paid before delivery. This can be discussed depending on the project.",
        },
        {
          question: "What about domain and hosting?",
          answer:
            "Domain and hosting costs are separate from the production fee. I can also help with setup if needed.",
        },
        {
          question: "Can I update the website myself after launch?",
          answer:
            "If we add a news update feature, you can update some content yourself. Regular static page edits are usually handled through maintenance support.",
        },
        {
          question: "What will I receive after production?",
          answer:
            "You will receive the full website code with the design and content applied. Publishing setup and operation support are also available if needed.",
        },
        {
          question: "Why is the price this low?",
          answer:
            "This is introductory pricing for the first 5 projects only. Prices may be revised after more completed projects are added to my portfolio.",
        },
        {
          question: "Do I need to prepare the photos and text myself?",
          answer:
            "In general, I ask clients to prepare the basic text and photos. If you are not sure what to write, I can help organize the content through the discovery process.",
        },
      ],
    },
  },

  contact: {
    eyebrow: "Contact",
    titleA: "I build websites",
    titleB: "that fit your business",
    description:
      "I design and build websites with customer acquisition, trust, and clear inquiry flow in mind. I can support landing pages, business websites, portfolios, and small web applications from design to implementation.",

    primaryLabel: "Free Consultation",
    primaryTitle: "Start with an email",
    primaryDescription:
      "It is completely fine if you are not sure what to build yet or simply want to know what is possible within your budget.",

    emailLabel: "Email Address",
    copy: "Copy Address",
    copied: "Copied",
    send: "Send Email",
    viewProjects: "View Projects",

    socialTitle: "SNS",
    connectVia: "",

    availabilityLabel: "Available for New Projects",
    availability:
      "I build affordable, clear, and practical websites for small businesses, independent professionals, and creators.",

    form: {
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email Address",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder:
        "Example: I want to create a website for a new cafe. My budget is around ¥100,000.",
      sending: "Sending...",
      submit: "Send Message",
      success: "Your message has been sent.",
      error: "Failed to send your message. Please try again later.",
    },
  },

  footer: {
    title: "Zaya Web Development",
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
    title: "A structure that shows what can be built",
    browserUrl: "ezaya.dev / preview",
    items: ["Website", "Dashboard", "Content DB", "JP / MN / EN"],
    captions: [
      "Business websites that lead to action",
      "Simple admin dashboard UI",
      "Organized content database",
      "Japanese, Mongolian, and English support",
    ],
    scenes: {
      landing: {
        brand: "Zaya Studio",
        nav: ["Services", "Work", "Contact"],
        ctaSmall: "Contact",
        eyebrow: "WEB PRODUCTION",
        titleBefore: "Turn a clear website into ",
        titleHighlight: "inquiries",
        titleAfter: "",
        description:
          "Planning, design, and implementation\nbuilt around your project goals.",
        primaryCta: "Start Project",
        secondaryCta: "View Work",
        stat: "+42%",
        live: "PREVIEW",
        features: ["CTA Design", "Responsive UI", "Basic SEO"],
        socialProofNumber: "3 LANG",
        socialProofText: "Japanese / Mongolian / English",
      },
      admin: {
        logo: "Client Panel",
        menu: ["Overview", "Inquiries", "Pages", "Settings"],
        userName: "client",
        loginStatus: "● Secure access",
        kpis: [
          {
            label: "Inquiries",
            value: "24",
            change: "+8",
            up: true,
          },
          {
            label: "Page Views",
            value: "1.8K",
            change: "+18%",
            up: true,
          },
          {
            label: "Drafts",
            value: "3",
            change: "Review",
            up: false,
          },
        ],
        months: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      database: {
        queryTable: "projects",
        columns: ["id", "name", "email", "status"],
        rows: [
          {
            id: "001",
            name: "Cafe Aomi",
            email: "landing-page",
            status: "active",
          },
          {
            id: "002",
            name: "Studio Nara",
            email: "portfolio",
            status: "active",
          },
          {
            id: "003",
            name: "Брэнд сайт",
            email: "multilingual",
            status: "draft",
          },
          {
            id: "004",
            name: "Local Clinic",
            email: "business-site",
            status: "active",
          },
        ],
      },
      multilingual: {
        langs: [
          { code: "JA", line: "Web production with Japanese support" },
          { code: "EN", line: "English-ready website structure" },
          { code: "MN", line: "Монгол хэлээр ойлгомжтой вебсайт" },
        ],
        footer: "i18n · clear structure · local support",
      },
    },
  } satisfies HeroVisualContent,
} satisfies Messages;
