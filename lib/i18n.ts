export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0) {
    const [first, ...rest] = segments;

    if (isLocale(first)) {
      return rest.length > 0 ? `/${rest.join("/")}` : "/";
    }
  }

  return pathname || "/";
}

export function withLocale(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

export const messages = {
  en: {
    meta: {
      title: "Zaya Portfolio",
      description: "High quality Next.js portfolio website",
    },
    header: {
      subtitle: "Frontend Portfolio",
      logoAria: "Go to top page",
      menuAria: "Open menu",
    },
    nav: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    hero: {
      eyebrow: "/Web Developer / Multilingual Engineer / ",
      title: "Hello, I'm Zaya.",
      highlight: "Engineering seamless web experiences across borders.",
      description:
        "A developer bridging the gap between Japanese, English, and Mongolian tech landscapes.I focus on building clean UIs and high-performance applications with a global perspective.",
      badges: ["UI / UX", "Frontend", "Responsive", "Animation"],
    },
    skills: {
      eyebrow: "Tech Stack",
    },
    about: {
      eyebrow: "About Me",
      title: "From Tokyo to Ulaanbaatar",
      paragraphs: [
        "After spending a decade in Japan, I returned to Mongolia to pursue my goal of becoming a Web Developer. To fully focus on my growth, I enrolled in IO Institute's intensive program and committed myself to learning modern web development in a dedicated environment.",
        "Living in Japan for 10 years made me more fluent in Japanese than my native Mongolian. This gives me a unique advantage: I can learn from Japan's rich technical ecosystem through documentation, articles, and educational resources, while also expanding my perspective through English.",
        "My goal is to become a world-class developer who bridges cultures through code — combining multilingual learning, global thinking, and thoughtful design to build clean and meaningful digital experiences.",
      ],
      strengthsEyebrow: "Strengths",
      strengthsTitle: "What I Bring",
      strengths: [
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
      ],
      journeyEyebrow: "Journey",
      journeyTitle: "My Path",
      journey: [
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
      ],
    },
    projects: {
      eyebrow: "Projects",
      titleA: "Selected",
      titleB: "Work",
      description:
        "A collection of projects focused on real-world usability, performance, and clean UI design. Each project reflects my approach to building scalable and maintainable applications.",
      featuredEyebrow: "Featured",
      featuredTitle: "Main Project",
      otherEyebrow: "More Projects",
      otherTitle: "Other Work",
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
            "A full-stack workout tracking app with volume analysis and exercise management.",
          summary:
            "Built with Next.js, Prisma, and PostgreSQL. The app allows users to log workouts, manage exercises, and visualize weekly training volume. Designed with a focus on usability and clean UI.",
        },
      },
    },
    blog: {
      eyebrow: "Blog",
      title: "Notes, progress, and lessons from my development journey",
      description:
        "Development logs, lessons from bugs, UI design thinking, and small weekly progress. This space is where I document the path from learning to building.",
      filterLabel: "Filter by tag",
      browseTitle: "Browse posts",
      backToBlog: "Back to blog",
      postCount: (count: number) => `${count} post${count !== 1 ? "s" : ""}`,
      notFoundTitle: "Post not found | Zaya Portfolio",
    },
    contact: {
      eyebrow: "Contact",
      titleA: "Let’s build something",
      titleB: "clean & memorable",
      description:
        "Contact me for portfolio development, front-end implementation, or UI improvements. Let’s work together to create simple, beautiful, and user-friendly experiences.",
      primaryLabel: "Primary Contact",
      primaryTitle: "Email me directly",
      primaryDescription:
        "Feel free to reach out for work inquiries, projects, collaborations, or questions.",
      emailLabel: "Email Address",
      copy: "Copy email",
      copied: "Copied",
      send: "Send Email",
      viewProjects: "View Projects",
      socialTitle: "Social Links",
      connectVia: "Connect via",
      availabilityLabel: "Availability",
      availability:
        "Focused on front-end development, UI improvements, and building portfolios. I welcome new projects and collaboration inquiries.",
    },
    footer: {
      title: "Zaya Portfolio",
      subtitle: "Next.js / Tailwind CSS / Framer Motion",
    },
    langToggle: {
      en: "EN",
      ja: "JP",
    },
  },
  ja: {
    meta: {
      title: "Zaya Portfolio",
      description: "高品質な Next.js ポートフォリオサイト",
    },
    header: {
      subtitle: "フロントエンド ポートフォリオ",
      logoAria: "トップページへ移動",
      menuAria: "メニューを開く",
    },
    nav: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    hero: {
      eyebrow: "/Web Developer / Multilingual Engineer / ",
      title: "こんにちは、Zayaです。",
      highlight: "国境を越えて、なめらかなWeb体験を設計します。",
      description:
        "日本語・英語・モンゴル語の技術圏をつなぐ開発者です。グローバルな視点を持ちながら、クリーンなUIと高性能なアプリケーションを作ることに取り組んでいます。",
      badges: ["UI / UX", "Frontend", "Responsive", "Animation"],
    },
    skills: {
      eyebrow: "Tech Stack",
    },

    
    about: {
    eyebrow: "私について",
    title: "東京からウランバートルへ",
    paragraphs: [
      "日本で10年間過ごしたあと、Web Developer になる目標を本気で追うためにモンゴルへ戻りました。成長に集中するため、IO Institute の集中プログラムに参加し、現代的なWeb開発を学ぶ環境に身を置いています。",
      "日本での10年間の生活を通して、母語のモンゴル語以上に日本語に慣れました。これは大きな強みで、日本の豊富な技術ドキュメント、記事、教材から深く学びつつ、英語を通して視野をさらに広げることができます。",
      "私の目標は、コードで文化をつなぐ世界水準の開発者になることです。多言語で学ぶ力、グローバルな視点、そして丁寧なデザインを組み合わせ、クリーンで意味のあるデジタル体験をつくりたいと考えています。",
    ],
    strengthsEyebrow: "強み",
    strengthsTitle: "私が提供できること",
    strengths: [
      {
        title: "多言語での学習力",
        description:
          "主に日本語の技術資料やドキュメントから学び、英語でも補強しています。そのため、より広く深い知識へアクセスできます。",
      },
      {
        title: "フロントエンド志向",
        description:
          "Next.js と React を中心に、クリーンでモダン、そして使い心地のよいインターフェースを作ることに集中しています。",
      },
      {
        title: "グローバルな視点",
        description:
          "言語と文化をまたいだ経験が、開発者としての考え方を形づくっています。ローカルな熱量とグローバル基準を両立したプロダクトを作りたいです。",
      },
    ],
    journeyEyebrow: "歩み",
    journeyTitle: "これまでの道のり",
    journey: [
      {
        year: "2014",
        title: "日本へ移住",
        description: "海外で新しい章を始め、異文化的な視点の土台を築きました。",
      },
      {
        year: "2024",
        title: "モンゴルへ帰国",
        description: "Web開発の将来に本気で向き合うため、モンゴルへ戻りました。",
      },
      {
        year: "Now",
        title: "IO Institute",
        description: "集中できる環境で学びながら、フロントエンド開発力を高めています。",
      },
      {
        year: "Future",
        title: "Global Developer",
        description: "コードで文化をつなぐ世界水準の開発者を目指しています。",
      },
    ],
  },
    projects: {
      eyebrow: "Projects",
      titleA: "Selected",
      titleB: "Work",
      description:
        "実用性、パフォーマンス、クリーンなUIを意識して制作したプロジェクトです。それぞれに、スケーラブルで保守しやすいアプリを作るための考え方が反映されています。",
      featuredEyebrow: "Featured",
      featuredTitle: "Main Project",
      otherEyebrow: "More Projects",
      otherTitle: "Other Work",
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
            "負荷分析と種目管理を備えたフルスタックの筋トレ記録アプリです。",
          summary:
            "Next.js、Prisma、PostgreSQL で構築。ワークアウト記録、種目管理、週ごとの負荷可視化ができ、使いやすさとクリーンなUIを意識して設計しました。",
        },
      },
    },
    blog: {
      eyebrow: "Blog",
      title: "ゼロから開発者へ。その道のりの学びと挑戦を綴るブログ",
      description:
        "日々の開発ログやバグから得た知見、UIデザインの思考プロセス、そして毎週の小さな進捗。完成までの道のり、現状の試行錯誤を記録しています。よかったら覗いてみてください。質問やフィードバックも大歓迎です！",
      filterLabel: "Filter by tag",
      browseTitle: "Browse posts",
      backToBlog: "Back to blog",
      postCount: (count: number) => `${count} post${count !== 1 ? "s" : ""}`,
      notFoundTitle: "記事が見つかりません | Zaya Portfolio",
    },
    contact: {
      eyebrow: "Contact",
      titleA: "一緒に作ろう、",
      titleB: "シンプルで印象に残る体験を",
      description:
        "ポートフォリオ制作、フロントエンド実装、UI改善などのご相談はこちらから。シンプルで美しく、使いやすい体験を一緒に作れます。",
      primaryLabel: "Primary Contact",
      primaryTitle: "メールで直接連絡する",
      primaryDescription:
        "お仕事の相談、制作依頼、コラボ、質問など気軽にお問い合わせください。",
      emailLabel: "Email Address",
      copy: "Copy email",
      copied: "Copied",
      send: "Send Email",
      viewProjects: "View Projects",
      socialTitle: "Social Links",
      connectVia: "Connect via",
      availabilityLabel: "Availability",
      availability:
        "フロントエンド制作、UI改善、ポートフォリオ構築などに興味があります。学習中の案件やコラボ相談も歓迎です。",
    },
    footer: {
      title: "Zaya Portfolio",
      subtitle: "Next.js / Tailwind CSS / Framer Motion",
    },
    langToggle: {
      en: "EN",
      ja: "JP",
    },
  },
} as const;

export function getMessages(locale: Locale) {
  return messages[locale];
}
