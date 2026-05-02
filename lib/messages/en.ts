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
    eyebrow: "About Me",
    title: "From Consumer to Creator",
    paragraphs: [
      "I'm a full-stack developer fluent in Mongolian, Japanese, and English — three languages, three perspectives. After 10 years in Japan, I returned to Mongolia to fully pivot into web development. I now build multilingual websites and apps for clients who need to reach across cultures.",
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
        // 以前入れてたけど、あまりに個人的な内容だったので削除した経歴セクションの内容。必要なら復活させる。

    // journeyEyebrow: "Journey",
    // journeyTitle: "My Path So Far",
    // journey: [
    //   {
    //     year: "2016",
    //     title: "The Japan Chapter",
    //     description:
    //       "Relocated to Japan, building a foundation of cross-cultural understanding and a global mindset over the next decade.",
    //   },
    //   {
    //     year: "2026",
    //     title: "The Creative Pivot",
    //     description:
    //       "Chose to move from 'consuming' to 'creating.' Returned to Mongolia to dedicate myself to a future in engineering.",
    //   },
    //   {
    //     year: "Now",
    //     title: "IO Institute",
    //     description:
    //       "Evolving daily in an intensive environment, mastering full-stack skills and turning yesterday's challenges into today's capabilities.",
    //   },
    //   {
    //     year: "Future",
    //     title: "Global Developer",
    //     description:
    //       "Aiming to build products that innovate daily life across borders and devices. On a mission to become a world-class creator.",
    //   },
    // ],
  },
  projects: {
    eyebrow: "Projects",
    titleA: "Featured",
    titleB: "Work",
    description:
      "Handling everything from design to deployment solo — built with a focus on both usability and visual polish.",
    featuredEyebrow: "Featured",
    featuredTitle: "Main Project",
    otherEyebrow: "Archive",
    otherTitle: "Other Projects",
    featuredBadge: "Featured",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    scopeLabel: "My Role",
    focusLabel: "What I Focused On",
    wipTitle: "Work in Progress",
    wipStatus: "In Progress",
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
        scope:
          "Sole developer — handled design, frontend, backend, DB schema, and deployment end to end.",
        focus:
          "Making logging feel effortless and weekly volume charts easy to read at a glance.",
      },
      "soul-skin-brand-lookbook": {
        title: "Soul Skin Brand Lookbook",
        description:
          "A brand lookbook website designed to communicate the visual identity and atmosphere of Soul Skin.",
        summary:
          "Built as a lookbook-style website focused on brand presentation, visual flow, and clear navigation toward Instagram and contact links rather than direct e-commerce.",
        scope:
          "Sole developer — handled design, frontend implementation, content structure, and deployment.",
        focus:
          "Conveying the brand's atmosphere through visuals and creating a natural flow toward SNS and contact.",
      },
    },

    wip: {
      items: {
        lookbook: {
          title: "Lookbook Site",
          description:
            "A visual-first lookbook site to communicate an apparel brand's world.",
        },
        portfolio: {
          title: "Portfolio Redesign",
          description:
            "Refining this site's design, UX, and performance — ongoing.",
        },
        "local-business": {
          title: "Local Business Site",
          description:
            "A clean, easy-to-use website for small businesses and independent shops.",
        },
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

  // Services & Pricing page content
  services: {
    title: "Services & Pricing",
    subtitle:
      "For freelancers, small businesses, and creators — we design and build websites that drive results from scratch.",
    intro:
      "From landing pages and corporate sites to admin dashboards, login systems, and multilingual support — we implement only what you need, nothing more.",
    ctaLabel: "Contact Us",
    bottomCtaTitle: "Feel free to start with just a consultation",
    bottomCtaText:
      "Even if you haven't finalized your requirements, that's perfectly fine. We'll work together to define the structure based on your goals and budget.",
    introNote:
      "Introductory pricing is available for the first 5 projects only.",
    plans: {
      simple: {
        name: "Simple LP",
        price: "200$ (incl. tax)",
        description:
          "Minimal structure. For those who need a quick, simple landing page.",
        details: [
          "1-page layout (LP)",
          "Custom design",
          "SNS links",
          "Responsive design",
          "Basic SEO",
          "1 minor revision per month",
        ],
        timeline: "≈7～14 days",
        note: "Introductory pricing is available for the first 5 projects only.",
      },
      starter: {
        name: "Starter Website",
        badge: "Recommended",
        price: "800$～900$ (incl. tax)",
        description: "Recommended plan for showcasing your business properly.",
        details: [
          "3–4 pages",
          "Custom design",
          "News management",
          "SNS links",
          "Responsive design",
          "Basic SEO settings",
          "2 minor revisions per month",
        ],
        timeline: "≈3～4 weeks",
        note: "A practical website with pages for your business info, portfolio and contact. Easily update announcements yourself.",
      },
      custom: {
        name: "Custom Development",
        price: "From 1,500$ (consultation)",
        description: "For feature-rich websites or web apps.",
        details: [
          "Login functionality",
          "Admin dashboard",
          "Database integration",
          "Payment integration",
          "Advanced animations",
          "Multilingual support",
          "API integrations",
        ],
        note: "Designed and developed based on your requirements. We can handle login, payment, database integrations and more.",
      },
    },
    targetAudience: {
      title: "Who This Service Is For",
      items: [
        "Those who feel limited by social media alone for customer acquisition",
        "Those who want to properly communicate the value of their business or service",
        "Those who want a website tailored to their business, not a generic template",
        "Those who want a high-quality website while keeping costs as low as possible",
        "Those who want to keep improving their site through ongoing consultation after launch",
      ],
    },
    reasons: {
      title: "Why Choose Us",
      items: [
        {
          title: "Designed from Scratch",
          description:
            "Rather than using templates as-is, we plan the structure based on your business, target audience, and goals.",
        },
        {
          title: "Conversion-Focused Design",
          description:
            "We design not just for looks, but for results — crafting CTAs, copy structure, and page flow that lead to inquiries and bookings.",
        },
        {
          title: "High Quality at Low Cost",
          description:
            "As introductory pricing, we deliver agency-quality work at the lowest possible price.",
        },
        {
          title: "Regular Communication",
          description:
            "We check in throughout the process so the final result matches your expectations.",
        },
      ],
    },
    philosophy: {
      title: "Our Approach to Building",
      items: [
        {
          title: "Understanding Your Business",
          description:
            "We review your services, strengths, target audience, and competition to clarify what your website needs to communicate.",
        },
        {
          title: "Structure That Drives Inquiries",
          description:
            "We think through the order of information, button placement, and user flow so visitors never feel lost.",
        },
        {
          title: "Balancing Design and Usability",
          description:
            "Beyond aesthetics, we prioritize readability on mobile, clarity of text, and ease of use.",
        },
      ],
    },
    process: {
      title: "How It Works",
      steps: [
        {
          title: "Contact",
          description:
            "Tell us briefly about what you want to build, your goals, and your budget.",
        },
        {
          title: "Discovery",
          description:
            "We review your business, target audience, required pages, and features.",
        },
        {
          title: "Estimate",
          description:
            "We organize the scope, pricing, and timeline and send you a proposal.",
        },
        {
          title: "Development",
          description:
            "We work through structure, design, and implementation — with check-ins as needed.",
        },
        {
          title: "Review & Revision",
          description:
            "You review the work before launch and we incorporate any needed changes.",
        },
        {
          title: "Launch & Support",
          description:
            "We handle the launch and can assist with maintenance and minor updates afterward.",
        },
      ],
    },
    fees: {
      title: "Cost Breakdown",
      description:
        "Depending on your project, the following costs may apply in addition to the plan price.",
      production: {
        title: "Production Cost",
        description:
          "The cost to build your website. The plan prices above are production costs.",
      },
      maintenance: {
        title: "Maintenance Cost",
        description:
          "Ongoing cost to ensure your site stays secure and up to date.",
      },
      external: {
        title: "External Cost",
        description: "Domain, hosting, and other third-party fees.",
      },
      delivery: {
        title: "About Deliverables",
        description:
          "After production, we deliver a complete set of code reflecting your design and content. For post-launch updates, maintenance, and ongoing support, a separate maintenance fee applies.",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How many revisions are included?",
          answer:
            "It depends on the plan. Minor revisions are covered within the scope of each plan. Major structural changes or feature additions will be quoted separately.",
        },
        {
          question: "When is payment required?",
          answer:
            "Generally, a partial payment is required before development begins, with the remainder due before delivery. We can discuss this based on your project.",
        },
        {
          question: "What about domain and hosting?",
          answer:
            "Domain and hosting are external costs, separate from the production fee. If needed, we can assist with setup.",
        },
        {
          question: "Can I update the site myself after launch?",
          answer:
            "With a news management feature, you can update some content yourself. Standard static page edits fall under maintenance.",
        },
        {
          question: "What are the deliverables?",
          answer:
            "You receive a complete set of website code with your design and content applied. We can also assist with publishing and ongoing support.",
        },
        {
          question: "Why is the price this low?",
          answer:
            "This is an introductory price for the first 5 clients. Prices will be revised once we have more projects completed.",
        },
      ],
    },
  },
  contact: {
    eyebrow: "Contact",
    titleA: "I build websites",
    titleB: "that fit your business",
    description:
      "I design and build websites with a clear focus on customer acquisition, trust, and smooth inquiry flows. From landing pages and corporate websites to portfolios and small web applications, I can support the full process from design to implementation.",

    primaryLabel: "Free Consultation",
    primaryTitle: "Start with an email",
    primaryDescription:
      "It is completely fine if you are still unsure what you need or want to know what can be done within your budget.",

    emailLabel: "Email Address",
    copy: "Copy Address",
    copied: "Copied",
    send: "Send Email",
    viewProjects: "View Projects",

    socialTitle: "SNS",
    connectVia: "",

    availabilityLabel: "Available for New Projects",
    availability:
      "I create clear, effective, and affordable websites for small businesses, independent professionals, and creators.",

    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project or idea.",
      sending: "Sending...",
      submit: "Send Message",
      success: "Your message has been sent successfully.",
      error: "Something went wrong. Please try again.",
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
    title: "Website preview",
    browserUrl: "ezaya.dev / preview",
    items: ["Website", "Dashboard", "Content DB", "JP / MN / EN"],
    captions: [
      "Business website with clear CTA",
      "Simple dashboard-style preview",
      "Structured content database",
      "Japanese / Mongolian / English support",
    ],
    scenes: {
      landing: {
        brand: "Zaya Studio",
        nav: ["Service", "Works", "Contact"],
        ctaSmall: "Contact",
        eyebrow: "WEB PRODUCTION",
        titleBefore: "Clear websites for ",
        titleHighlight: "small businesses",
        titleAfter: "",
        description:
          "Design, content structure, and implementation\nbuilt to help visitors take action.",
        primaryCta: "Start Project",
        secondaryCta: "View Works",
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
          { code: "JA", line: "日本語で相談できるWeb制作" },
          { code: "EN", line: "English-ready website structure" },
          { code: "MN", line: "Монгол хэлээр ойлгомжтой вебсайт" },
        ],
        footer: "i18n · clear structure · local support",
      },
    },
  } satisfies HeroVisualContent,
} satisfies Messages;
