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
      subtitle: "Portfolio",
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
      badges: ["Frontend Development", "Full-stack Solutions", "UI / UX Design", "Database Management"],
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
          year: "2016",
          title: "Move to Japan",
          description:
            "Started a new chapter abroad and built the foundation for a cross-cultural perspective.",
        },
        {
          year: "2026",
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
      copyright: "© 2026 Designed & Built by Zaya",
    },
    langToggle: {
      en: "EN",
      ja: "JP",
    },
  },
  ja: {
    meta: {
      title: "Zaya Portfolio",
      description: "Next.js ポートフォリオサイト",
    },
    header: {
      subtitle: "ポートフォリオ",
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
      title: "",
      highlight: "言葉の壁を越えた \n ユニバーサルな設計を作ります。",
      description:
        "日本語・英語・モンゴル語の技術圏をつなぐ開発者です。グローバルな視点を持ちながら、クリーンなUIと高性能なアプリケーションを作ることに取り組んでいます。",
      badges: ["Frontend Development", "Full-stack Solutions", "UI / UX Design", "Database Management"],
    },
    skills: {
      eyebrow: "Tech Stack",
    },

    
    about: {
    eyebrow: "私について",
    title: "ゼロから開発者へ",
    paragraphs: [
      "言語や文化の壁を、技術という共通言語でつないでいく。それが私の目指す開発者像です。多言語に触れてきた経験とグローバルな視点を活かし、文化の壁を感じさせない設計を追求することで、クリーンで本質的なデジタル体験を形にします。",
      "日本で10年間を過ごした後、エンジニアとしての目標を本気で追求するためモンゴルへ帰国しました。現在は IO Institute の集中プログラムに身を置き、モダンなWeb開発スキルの習得に邁進しています。",
      "10年間の日本生活で培った母国語レベルの日本語能力は、私の大きな武器です。日本の豊富な技術資産から深く学びつつ、英語によるグローバルな最新知見を組み合わせることで、常に多角的な視点から課題解決に取り組んでいます。",
    ],
    strengthsEyebrow: "強み",
    strengthsTitle: "私が提供できること",
    strengths: [
      {
        title: "多角的な技術リサーチ能力",
        description:
          "日本語と英語の双方で高度な技術ドキュメントを読み解き、最適なソリューションを迅速に導き出します。言語の壁に縛られず、常に広範で最新の知見を設計に反映させることが可能です。",
      },
      {
        title: "フロントエンド志向",
        description:
          "Next.js と React を中心に、クリーンでモダン、そして使い心地のよいインターフェースを作ることに集中しています。",
      },
      {
        title: "誠実さと責任感",
        description:
          "日本での10年間の経験を通じ、細部へのこだわりと責任ある仕事の進め方を深く理解しています。技術的な実装だけでなく、円滑なコミュニケーションと丁寧なドキュメント作成を通じ、チーム開発の質を高めます。",
      },
    ],
    journeyEyebrow: "歩み",
    journeyTitle: "これまでの道のり",
    journey: [
      {
        year: "2016",
        title: "日本へ留学",
        description: "海外で新しい章を始め、異文化的な視点の土台を築きました。",
      },
      {
        year: "2026",
        title: "モンゴルへ帰国",
        description: "ITエンジニアとしてのキャリアを本気で始めるため、モンゴルへ戻りました。",
      },
      {
        year: "現在",
        title: "IO Institute",
        description: "集中できる環境で学びながら、プログラミングスキルを高めています。",
      },
      {
        year: "目指す先",
        title: "Global Developer",
        description: "言語の壁に縛られない世界水準の開発者を目指しています。",
      },
    ],
  },
    projects: {
      eyebrow: "Projects",
      titleA: "",
      titleB: "主な実績",
      description:
        "実用性とクリーンなUIデザインにこだわったプロジェクト集です。それぞれのプロジェクトは、可読性が高く、管理しやすく構築しています。",
      featuredEyebrow: "",
      featuredTitle: "主要プロジェクト",
      otherEyebrow: "その他のプロジェクト",
      otherTitle: "その他の実績",
      featuredBadge: "ピックアップ",
      liveDemo: "デモを見る",
      viewCode: "コードを見る",
      status: {
        Completed: "完了",
        "In Progress": "開発中",
      },
      items: {
        "workout-log": {
          title: "筋トレ記録アプリ",
          description:
            "負荷分析と種目管理を備えたフルスタックの筋トレ記録アプリです。",
          summary:
            "Next.js、Prisma、PostgreSQL で構築。ワークアウト記録、種目管理、週ごとの負荷可視化ができ、使いやすさを意識して設計しました。",
        },
      },
    },
    blog: {
      eyebrow: "Blog",
      title: "ゼロから開発者へ。その道のりの学びと挑戦を綴るブログ",
      description:
        "日々の開発ログやバグから得た知見、UIデザインの思考プロセス、そして毎週の小さな進捗。完成までの道のり、現状の試行錯誤を記録しています。よかったら覗いてみてください",
      filterLabel: "Filter by tag",
      browseTitle: "Browse posts",
      backToBlog: "Back to blog",
      postCount: (count: number) => `${count} post${count !== 1 ? "s" : ""}`,
      notFoundTitle: "記事が見つかりません | Zaya Portfolio",
    },
    contact: {
      eyebrow: "連絡先",
      titleA: "アイデアを、",
      titleB: "濁りのないデジタル体験へ",
      description:
        "一つひとつのプロジェクトと深く向き合い、最適な設計とコードで価値を生み出します。小規模な実装からUIの改善まで、あらゆる挑戦を歓迎します。",
      primaryLabel: "連絡先",
      primaryTitle: "メールで直接連絡する",
      primaryDescription:
        "お仕事の相談、制作依頼、コラボ、質問など気軽にお問い合わせください。",
      emailLabel: "メールアドレス",
      copy: "アドレスをコピー",
      copied: "コピーしました",
      send: "メールを送信",
      viewProjects: "プロジェクトを見",
      socialTitle: "SNS",
      connectVia: "",
      availabilityLabel: "案件受付中",
      availability:
        "UIデザインから実装まで、一貫した体験を。共創のご相談、お待ちしています。",
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
  },
} as const;

export function getMessages(locale: Locale) {
  return messages[locale];
}
