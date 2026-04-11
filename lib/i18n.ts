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
      { label: "私について", href: "/about" },
      { label: "プロジェクト", href: "/projects" },
      { label: "ブログ", href: "/blog" },
      { label: "連絡先", href: "/contact" },
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
        title: "新天地での挑戦",
        description: "日本へ留学。異文化の中で多様な価値観に触れ、自分の枠を広げる土台を築いた10年間。",
      },
      {
        year: "2026",
        title: "創造への転換点",
        description: "変化のない日々に危機感を抱き、「消費する側」から「創造する側」へ。エンジニアとして生きる道を選択",
      },
      {
        year: "現在",
        title: "IO Institute",
        description: "昨日できなかったことを今日可能にする。毎日が成長に直結する環境で、フルスタックのスキルを研鑽中。",
      },
      {
        year: "目指す先",
        title: "Global Developer",
        description: "言葉の壁も、\n デバイスの境界も超えて、 誰かの日常を「革新」するプロダクトを。世界水準の「創る人」になる。",
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
        "一つひとつのプロジェクトと深く向き合い、最適な設計とコードで価値を生み出します。小規模な実装からウェブアプリ開発まで、依頼をお待ちしてます。",
      primaryLabel: "連絡先",
      primaryTitle: "メールで連絡する",
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
