import type { HeroVisualContent, Messages } from "./types";

export const en = {
  meta: {
    title: "Zaya | Web & App Development — Get chosen, work lighter",
    description:
      "Bookings, payments, multilingual support and more. I design, build, and stay with small businesses past launch — a trustworthy face and systems that make the daily busywork disappear. Japanese, Mongolian, English.",
    pages: {
      about: {
        title: "About — Background & Skills",
        description:
          "AI-Native Product Engineer based in Ulaanbaatar. My background, tech stack (Next.js / TypeScript), and how I approach building for small businesses. Japanese, Mongolian, English.",
      },
      projects: {
        title: "Projects — Websites & Web Apps",
        description:
          "Selected websites and web apps — designed, built, and supported past launch, end to end, with the tech stack behind each.",
      },
      services: {
        title: "Services & Pricing",
        description:
          "Web and app development services: process, pricing, and timelines. Bookings, payments, multilingual support — systems that make daily busywork disappear.",
      },
      contact: {
        title: "Contact",
        description:
          "Tell me about your project — quotes and consultations in Japanese, Mongolian, or English. I usually reply within 1–2 business days.",
      },
      blog: {
        title: "Blog — Notes on Web Development",
        description:
          "Notes on building useful websites, product decisions, and running multilingual sites.",
      },
    },
  },
  header: {
    subtitle: "AI-Native Product Engineer",
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
    eyebrow: "/ Get chosen / Work lighter /",
    title: "A business\npeople choose.\n",
    highlight: "A workday that\nruns itself.",
    description:
      "A trustworthy face for your business, and systems that make the daily grind disappear.\nBookings, payments, customers in other languages — the hard parts are my job.",
    badges: ["Custom Design", "Fast Delivery", "Practical Features"],
    primaryCta: "Free consultation",
    secondaryCta: "See projects",
    meta: {
      status: "Available for Projects · 2026.07",
      focus: "Websites & Web Apps",
      location: "Ulaanbaatar",
    },
    techLine: "Free consultation · Timeline from 2 weeks · JP/MN support",
    visualHint: "I build all of this",
    showcase: {
      liveBadge: "Live right now",
      open: "Open the real site",
      laptopLabel: "Getting chosen — a real example",
      laptopCaption:
        "A travel site where overseas guests read in their own language and apply on the spot",
      phoneLabel: "Working lighter — a real example",
      phoneCaption: "Logging a workday takes 3 seconds. On the app stores",
      phoneTimerLabel: "Today",
      phoneRows: [
        { name: "Design", value: "3.2h" },
        { name: "Build", value: "4.5h" },
      ],
      handNote: "go on, try it!",
    },
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
    title: "Hi, I'm Zaya.",
    paragraphs: [
      "I lived in Japan for ten years, then came home to Mongolia because I wanted to become someone who truly builds things.",
      "The people I help run small shops and small businesses. Days eaten up by booking calls, good work that somehow doesn't come across — untangling that kind of \"stuck\", with websites and apps, is my job.",
      "I won't promise fireworks. What I can promise: I'll listen properly, think it through with you, and stay beside you past launch. In Japanese, Mongolian, or English.",
    ],
    signature: "— from my desk in Ulaanbaatar, Zaya",
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
    zaza: {
      name: "Zaza",
      role: "Chief cheerleader (sidekick)",
      description:
        "The pup peeking out from corners of this site. His job is to gently cheer you on. He barks when I slack off.",
    },
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
    kindLabels: {
      client: "Client work",
      product: "Own product",
      sample: "Concept work",
    },
    liveLabel: "Live",
    openLive: "Open the real site",
    detailHint: "See details",
    liveDemo: "View Demo",
    viewCode: "View Code",
    caseStudy: "Read Case Study",
    scopeLabel: "Scope",
    focusLabel: "Focus",
    behindLabel: "Behind the scenes",
    wipTitle: "Projects in Progress",
    wipStatus: "In Progress",
    status: {
      Completed: "Completed",
      "In Progress": "In Progress",
    },
    items: {
      "odootech-time": {
        title: "OdooTech Time",
        description:
          "An enterprise time-attendance mobile app with GPS geofencing, device binding, and audit logs to prevent false punches.",
        tags: ["Live mobile product", "GPS geofence punches", "iOS / Android release"],
        client: "OdooTech",
        summary:
          "A production full-stack product built with a Flutter mobile client and a custom Odoo 17 backend. It covers check-in/out, work-area validation, leave requests, salary slips, work reports, team features, reminders, and admin notifications, and is distributed on both iOS and Android.",
        scope:
          "Handled Flutter app architecture, Riverpod state management, Odoo JSON-RPC integration, custom Odoo 17 backend module, geofencing, device binding, audit logs, and store-release support.",
        focus:
          "The core design goal was making each attendance punch happen from the right place, the right device, and the intended action. GPS, device IDs, work schedules, server-side intent validation, and audit logs work together to prevent buddy punching and accidental toggles.",
        behind:
          "A store review DNS issue on a .mn domain became a deep networking problem; I solved it with a custom DNS-over-HTTPS HTTP client and correct TLS/SNI handling.",
      },
      "overland-beyond": {
        title: "Overland Beyond",
        description:
          "A travel site that turns Mongolia's landscapes and multilingual trip pages into a clear application flow.",
        tags: ["Multilingual application flow", "Travel story made clear", "Odoo to Next.js rebuild"],
        client: "Overland Beyond",
        summary:
          "I rebuilt an Odoo-based travel site in Next.js, preserving the expedition content while improving page structure, static pages, detail pages, and the application path. The goal was to keep the cinematic feeling of the original site while making it easier to maintain and navigate.",
        scope:
          "Parsed the existing Odoo site, converted content, rebuilt pages in Next.js, structured routes, and prepared the deployment.",
        focus:
          "Helping overseas travelers understand the trips without confusion and move straight into applying, while keeping the photography large and the pages practical to update.",
        behind:
          "The hard part was untangling the Odoo templates without losing the energy of the original travel site.",
      },
      futari: {
        title: "Futari",
        description:
          "A private web app for couples to keep diaries, photos, wishes, and anniversaries in a space that belongs only to them.",
        tags: ["Private couple space", "Photos and memories organized", "Invite partner by link"],
        summary:
          "A multi-tenant app for couples. It includes sign-up, partner invites, daily diaries, wish lists, memory calendar, gallery, slideshow-style lookbacks, PWA support, and a local demo mode when Supabase is not configured.",
        scope:
          "Handled product planning, UI design, frontend, Supabase Auth / DB / Storage, RLS policies, PWA behavior, and demo-mode data storage.",
        focus:
          "Because the app handles personal memories, I focused on both warmth and trust: clear data separation, private storage paths, and mobile flows that feel easy enough to use every day.",
        behind:
          "I wanted it to feel less like 'logging data' and more like coming back home, so I kept tuning spacing, words, and small moments.",
      },
      "zaza-lab": {
        title: "Zaza Lab",
        description:
          "A JLPT N1/N2 study app that helps learners practice kanji, vocabulary, reading, listening, and weak points.",
        tags: ["Review weak points", "PWA learning flow", "Audio questions"],
        summary:
          "A PWA for Japanese learners with N1/N2 kanji, four-character idioms, onomatopoeia, grammar, reading, listening, dictionary, progress, review, achievements, session restore, and backup. The app handles local learning data and audio assets with a fast mobile-first flow.",
        scope:
          "Designed the study flow, quiz engine, dictionary, progress storage, PWA setup, audio integration, and full UI.",
        focus:
          "Learning apps only matter if people return to them, so I kept the path short: today's word, review due items, weak-point practice, and small celebrations.",
        behind:
          "As the question set grew, the challenge became keeping the app dense but never tiring to open.",
      },
      "workout-log": {
        title: "Workout Log App",
        description:
          "Logging takes a few taps, progress shows in one glance — a workout log built to keep you coming back.",
        tags: ["Log in a few taps", "Progress at a glance"],
        summary:
          "A full-stack build I carried alone, from design and development to database and launch. A logging flow that ends in a few taps, graphs that show weekly progress at a glance — polished by using it myself every day, aiming for “sticks even for serial quitters.”",
        scope:
          "Handled planning, design, frontend, backend, database design, and deployment independently.",
        focus:
          "Making workout logging simple and weekly progress easy to understand at a glance.",
        behind:
          "I kept rebuilding the UI with myself as the test subject — what would make even a serial quitter come back?",
        caseStudy: "workout-log-case-study",
      },
      "soul-skin-brand-lookbook": {
        title: "Soul Skin Brand Lookbook",
        description:
          "Pulls visitors into the brand's world before selling anything, then leads them naturally to socials and contact.",
        tags: ["Sells with atmosphere", "Leads to socials"],
        summary:
          "Built not as an e-commerce site, but as a visual brand presentation with a clear path toward Instagram and contact links.",
        scope:
          "Handled design, frontend implementation, content structure, and deployment independently.",
        focus:
          "Communicating the brand’s atmosphere through visuals and creating a natural flow toward social media and contact.",
        behind:
          "I adjusted the whitespace around every single photo, hunting for the framing that wouldn't break the brand's air.",
        caseStudy: "soul-skin-project",
      },
      "type-mon": {
        title: "TypeMon",
        description:
          "Type in Latin letters, get proper Cyrillic Mongolian — a free tool that makes typing faster.",
        tags: ["Converts as you type", "Free to use"],
        summary:
          "Built with Next.js and TypeScript. It supports Latin-to-Cyrillic conversion, local history, URL text loading, dark mode, and an AI polish feature with request limits.",
        scope:
          "Handled product planning, UI design, frontend implementation, API integration, rate limiting, and deployment independently.",
        focus:
          "Making Mongolian Cyrillic typing faster for people who are used to writing in Latin letters, while keeping the interface minimal and practical.",
        behind:
          "Late nights staring down the conversion table, one character at a time. It's my mother tongue — no compromises.",
        caseStudy: "type-mon-case-study",
      },
      "sui-salon": {
        title: "Sui Salon LP",
        description:
          "One page that carries visitors from mood to booking, designed mobile-first.",
        tags: ["Mood to booking in one page", "Mobile-first"],
        summary:
          "Designed from scratch with Next.js and Tailwind CSS, sized and scoped to match the kind of project I deliver in the 30,000–40,000 JPY range. Framer Motion adds light entry animations, and the page brings the salon's mood, menu, access, and booking flow together into one focused layout.",
        scope:
          "Handled structure, design, frontend implementation, and responsive layout independently.",
        focus:
          "Built around a clear flow — show the vibe, communicate the offer, lead to a booking. Mobile readability and tap-friendly CTAs were the top priorities.",
        behind:
          "I imagined the exact spot a thumb would rest at the moment of booking, and moved the button there.",
      },
      suijaku: {
        title: "Suijaku",
        description:
          "A memory card game built around satisfying flips, quick rounds, and saved personal records.",
        tags: ["Quick to play", "Saved records", "Mobile-ready"],
        summary:
          "A Next.js memory game with a start screen, play state, clear result, leaderboard, and localStorage-backed records. It is intentionally light so players can replay short rounds without friction.",
        scope:
          "Handled game UI, card state, scoring, leaderboard, persistence, and responsive layout.",
        focus:
          "The moment a card flips, the feedback for match/miss, and the result screen all needed to feel clear enough to make 'one more round' natural.",
        behind:
          "With simple rules, the feeling lives in timing and whitespace. That was the fun part.",
      },
      minesweeper: {
        title: "Minesweeper",
        description:
          "A classic Minesweeper web game with names, difficulty, themes, language switching, and local rankings.",
        tags: ["Difficulty selection", "Saved rankings", "English/Japanese"],
        summary:
          "A Next.js implementation of Minesweeper with safe first click, flag mode, difficulty selection, timer, leaderboard, how-to-play modal, English/Japanese UI, and light/dark themes. The board is tuned to stay playable on both desktop and mobile.",
        scope:
          "Handled game logic, state management, board UI, leaderboard storage, language switching, themes, and responsive behavior.",
        focus:
          "Keeping the board readable and tap-friendly on phones, and letting players inspect the board after the result instead of immediately losing context.",
        behind:
          "Classic games do not need much decoration. They need clicks, cells, and feedback to feel exactly right.",
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
    title: "Not what I can build.\nWhat gets easier.",
    intro: [
      "What I sell isn't tech jargon like \"websites\" or \"apps\". It's a face for your business that gets you chosen, and systems that make the daily grind disappear.",
      "No difficult talk. Just look at what would change for your business.",
    ],
    ctaLabel: "Free consultation",
    labels: {
      before: "Now",
      after: "After",
      forms: "What this can look like",
      proofs: "See the real thing",
      price: "From",
    },
    pillars: [
      {
        name: "Get chosen",
        tagline: "A face for your business",
        lead: "When customers find you online, they decide in about 3 seconds whether you look trustworthy.",
        beforeAfter: [
          {
            before: "Your only storefront is a social media profile",
            after:
              "People who search for you find a face that says: this place is legit",
          },
          {
            before:
              "Your atmosphere doesn't come through, so people compare on price",
            after: "Your vibe comes through, and people choose you for it",
          },
          {
            before: "You can't get your story across to foreign customers",
            after: "Customers read about you in their own language",
          },
          {
            before:
              "You answer the same questions about hours and location every day",
            after: "The answers are already there before anyone asks",
          },
        ],
        forms: [
          "A business website",
          "A one-page introduction",
          "A brand showcase site",
          "Foreign-language versions",
        ],
        proofs: [
          {
            name: "Overland Beyond",
            description:
              "A travel site where overseas guests read in their own language and apply on the spot",
            href: "https://overlandbeyond.com",
          },
          {
            name: "Soul Skin",
            description: "A brand site that sells with atmosphere",
            href: "https://soul-skin-website.vercel.app/",
          },
          {
            name: "Sui Salon",
            description:
              "A one-page salon site that carries you from mood to booking",
            href: "https://sui-salon.vercel.app/",
          },
        ],
        price: "¥30,000–88,000",
        timeline: "1–4 weeks",
      },
      {
        name: "Work lighter",
        tagline: "Let systems handle the busywork",
        lead: "Thirty minutes of daily hassle is about 180 hours a year. Systems can take that off your hands.",
        beforeAfter: [
          {
            before: "Every phone call interrupts your work",
            after: "Bookings pile up on their own, even while you sleep",
          },
          {
            before:
              "Customer info is scattered across notebooks, chat apps, and spreadsheets",
            after: "Everything collects in one place, automatically",
          },
          {
            before: "Month-end tallying eats half a day",
            after: "You open it, and it's already done",
          },
          {
            before: "You answer the same questions again and again",
            after: "Customers find the answers themselves",
          },
        ],
        forms: [
          "Booking and application forms",
          "Customer lists",
          "Records and tallies",
          "Your own mobile app",
        ],
        proofs: [
          {
            name: "Time-tracking app",
            description:
              "Logging a workday takes 3 seconds. On the App Store and Google Play",
          },
          {
            name: "Overland Beyond application form",
            description: "Answer four questions and the application is done",
            href: "https://overlandbeyond.com/apply",
          },
        ],
        price: "¥130,000– (depends on scope)",
        timeline: "From 3 weeks",
      },
    ],
    care: {
      title: "Ongoing peace of mind",
      description:
        "Launch isn't the end. Small fixes, content updates, \"how do I do this?\" — I stay with you, month to month.",
      price: "From ¥5,000/month",
    },
    process: {
      title: "How it works",
      steps: [
        {
          title: "Talk (free)",
          description:
            "Tell me what's bothering you. \"I just want to know what's possible\" is fine.",
        },
        {
          title: "Proposal and quote",
          description:
            "I map out what to build, and what it will make easier for you.",
        },
        {
          title: "Build",
          description:
            "Once a week, we look at the working version together and adjust.",
        },
        {
          title: "Launch and support",
          description:
            "I handle the launch. After that, monthly support is there if you want it.",
        },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "What do I need to prepare?",
          answer:
            "Photos, and what you want to say. We can sort out the wording together.",
        },
        {
          question: "I'm not good with computers. Is that OK?",
          answer:
            "Yes. Anything you need to update is handed over in a form you can actually use.",
        },
        {
          question: "When do I pay?",
          answer:
            "Part at the start, the rest before delivery. Flexible depending on the project.",
        },
        {
          question: "What if my needs change midway?",
          answer:
            "We adjust course at the weekly check-ins. Bigger changes get a fresh quote first.",
        },
        {
          question: "Can I hire you from far away or overseas?",
          answer:
            "Yes. Everything can be done online, in Japanese, English, or Mongolian.",
        },
      ],
    },
    bottomCtaTitle: "Starting with just a chat is fine",
    bottomCtaText:
      "Ask me: \"What would get easier for my business?\" We'll sort out what you need, around your goals and budget.",
  },

  contact: {
    eyebrow: "Contact",
    titleA: "Start with one question:",
    titleB: "“what would get easier?”",
    description:
      "A face for your business, and systems that make the busywork disappear. Consultation is free — I reply within 24 hours.",

    primaryLabel: "Free Consultation",
    primaryTitle: "Start with an email",
    primaryDescription:
      "“I want to take bookings online”, “I need a proper face for my business”, “I just want to know what's possible” — one line like that is enough. I reply within 24 hours.",

    emailLabel: "Email Address",
    copy: "Copy Address",
    copied: "Copied",
    send: "Send Email",
    viewProjects: "View Projects",

    socialTitle: "SNS",
    connectVia: "",

    availabilityLabel: "Available for New Projects",
    availability:
      "From the face of your business to booking and admin systems — helping small businesses get chosen, and work lighter.",

    form: {
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email Address",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder:
        "Example: Taking bookings by phone is getting overwhelming — I'd like to take them online. My budget is around ¥100,000.",
      sending: "Zaza is running it over…",
      submit: "Send it over",
      success: "Your message has been sent.",
      error: "Failed to send your message. Please try again later.",
      note: "Nothing needs to be decided yet. I write every reply myself.",
    },
  },

  footer: {
    title: "Zaya — AI-Native Product Engineer",
    subtitle: "A face that gets chosen. Systems that lighten the work.",
    copyright: "© 2026 Designed & Built by Zaya",
  },
  langToggle: {
    en: "EN",
    ja: "JP",
    mn: "MN",
  },
  zaza: {
    pillBubble: "Asking costs nothing!",
    formSuccess: "Delivered! Thank you!",
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
