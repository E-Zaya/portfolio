import type { HeroVisualContent, Messages } from "./types";

export const ja = {
  // 中身
  meta: {
    title: "Zaya | 日本語・モンゴル語・英語対応のWeb制作",
    description:
      "日本・モンゴルの個人事業主・小規模店舗向けに、集客と信頼につながるWebサイトを制作します。LP・コーポレートサイト・多言語サイトもご相談ください",
  },
  header: {
    subtitle: "Web Developer",
    logoAria: "トップページへ移動",
    menuAria: "メニューを開く",
  },
  nav: [
    { label: "サービス", href: "/services" },
    { label: "プロジェクト", href: "/projects" },
    { label: "ブログ", href: "/blog" },
    { label: "私について", href: "/about" },
    { label: "連絡先", href: "/contact" },
  ],
  hero: {
    eyebrow: "/ Custom Web Design / Fast Delivery / ",
    title: "事業の魅力が\n伝わるサイトを、\n",
    highlight: "ゼロから設計・\nデザイン。",
    description:
      "テンプレートではなく、目的に合わせて専用設計。LP・コーポレートサイト・小規模Webアプリまで、必要な機能だけを制作します。",
    badges: ["Custom Design", "Fast Delivery", "Practical Features"],
    primaryCta: "無料で相談する",
    secondaryCta: "制作実績を見る",
    meta: {
      status: "案件受付中 · 2026.05",
      focus: "Websites & Web Apps",
      location: "Ulaanbaatar",
    },
    techLine: "無料相談受付中 ・ 最短1週間〜 ・ JP / MN対応",
    visualHint: "全部つくれます",
    features: [
      {
        title: "Custom Design",
        description: "テンプレートではなく、事業ごとにゼロから設計・デザイン",
      },
      {
        title: "Fast Delivery",
        description: "受注から納品までスピーディーに対応",
      },
      {
        title: "Practical Features",
        description: "ログイン・管理画面・小規模データベースにも対応",
      },
    ],
    visual: {
      label: "Service Preview",
      title: "作れるものが伝わる設計",
      items: ["Landing Page", "Admin Login", "Database", "JP / MN / EN"],
      captions: [
        "集客のためのLP",
        "ログイン付き管理画面",
        "小規模データベースUI",
        "多言語対応サイト",
      ],
    },
  },
  skills: {
    eyebrow: "Tech Stack",
  },
  about: {
    eyebrow: "私について",
    title: "多言語対応のWeb開発者",
    paragraphs: [
      "モンゴル語・日本語・英語に対応できるWeb開発者として、言語や文化の違いを考慮した設計で、伝わりやすく使いやすいWebサイトを制作しています。",
      "日本で10年間を過ごした後、本気でエンジニアを目指すためモンゴルへ帰国。現在はIO Instituteでフルスタック開発を集中的に学びながら、個人事業主・小規模店舗向けのWebサイト制作にも取り組んでいます。",
      "テンプレートではなく、伝える相手や目的まで考えた設計で、見る人に届くWebサイトを目指しています。",
    ],
    strengthsEyebrow: "強み",
    strengthsTitle: "私が提供できること",
    strengths: [
      {
        title: "多言語に対応したWeb制作",
        description:
          "日本語・モンゴル語・英語に対応し、言語や文化の違いをふまえたWebサイト制作ができます。日本向け・モンゴル向け、どちらの発信にも対応できます。",
      },
      {
        title: "伝わりやすいUI設計",
        description:
          "Next.js と React を中心に、見た目の美しさだけでなく、情報の伝わりやすさ・使いやすさを意識したWebサイトを制作します。",
      },
      {
        title: "丁寧なコミュニケーション",
        description:
          "目的や予算、必要な機能を一緒に整理しながら、無駄のない形で制作を進めます。初めてWebサイトを作る方にも、わかりやすく丁寧に対応します。",
      },
    ],
    // 以前入れてたけど、あまりに個人的な内容だったので削除した経歴セクションの内容。必要なら復活させる。
    // journeyEyebrow: "歩み",
    // journeyTitle: "これまでの道のり",
    // journey: [
    //   {
    //     year: "2016",
    //     title: "新天地での挑戦",
    //     description:
    //       "日本へ留学。異文化の中で多様な価値観に触れ、自分の枠を広げる土台を築いた10年間。",
    //   },
    //   {
    //     year: "2026",
    //     title: "創造への転換点",
    //     description:
    //       "変化のない日々に危機感を抱き、「消費する側」から「創造する側」へ。エンジニアとして生きる道を選択",
    //   },
    //   {
    //     year: "現在",
    //     title: "IO Institute",
    //     description:
    //       "昨日できなかったことを今日可能にする。毎日が成長に直結する環境で、フルスタックのスキルを研鑽中。",
    //   },
    //   {
    //     year: "目指す先",
    //     title: "Global Developer",
    //     description:
    //       "言葉の壁も、\n デバイスの境界も超えて、 誰かの日常を「革新」するプロダクトを。世界水準の「創る人」になる。",
    //   },
    // ],
  },
  projects: {
    eyebrow: "",
    titleA: "",
    titleB: "主な実績",
    description:
      "設計・デザイン・実装まで一人で担当。使いやすさと見た目の両方にこだわってつくっています。",
    featuredEyebrow: "",
    featuredTitle: "主要プロジェクト",
    otherEyebrow: "その他のプロジェクト",
    otherTitle: "その他の実績",
    featuredBadge: "ピックアップ",
    liveDemo: "デモを見る",
    viewCode: "コードを見る",
    scopeLabel: "担当範囲",
    focusLabel: "こだわり",
    wipTitle: "制作中のプロジェクト",
    wipStatus: "開発中",
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
        scope:
          "設計・デザイン・フロントエンド・バックエンド・DB設計・デプロイまで一人で担当。",
        focus:
          "記録のしやすさと週次グラフの視認性。継続したくなるUIを意識して設計しました。",
      },

      "soul-skin-brand-lookbook": {
        title: "Soul Skin Brand Lookbook",
        description: "ブランドの世界観を伝えるためのLookbookサイトです。",
        summary:
          "商品販売ではなく、Instagramや問い合わせにつなげる導線を意識して、ビジュアル・ブランドイメージ・連絡先への流れを整理しました。",
        scope:
          "デザイン・フロントエンド実装・コンテンツ構成・デプロイまで一人で担当。",
        focus:
          "ブランドの空気感をビジュアルで伝えることと、SNS・問い合わせへの自然な導線設計。",
      },
    },

    wip: {
      items: {
        lookbook: {
          title: "Lookbookサイト",
          description:
            "アパレルブランドの世界観をビジュアルで伝えるLookbookサイト。",
        },
        portfolio: {
          title: "ポートフォリオ改善",
          description:
            "このサイト自体をデザイン・UX・パフォーマンス面からブラッシュアップ中。",
        },
        "local-business": {
          title: "小規模店舗向けWebサイト",
          description:
            "個人店・小規模ビジネス向けのシンプルで使いやすいWebサイト。",
        },
      },
    },
  },

  blog: {
    filterLabel: "タグで絞り込み",
    browseTitle: "記事一覧",
    backToAllPosts: "すべての記事へ戻る",
    breadcrumbHome: "ホーム",
    breadcrumbBlog: "ブログ",
    breadcrumbAria: "パンくず",
    toc: "目次",
    tocItemAria: "見出しへ移動",
    related: "関連記事",
    readMore: "続きを読む",
    allTags: "すべて",
    noPostsTitle: "記事が見つかりません。",
    noPostsDescription: "別のタグを試してください。",
    copyCode: "コピー",
    copiedCode: "コピー済み",
    copyCodeAria: "コードをコピー",
    untitled: "無題の記事",
    uncategorized: "未分類",
    noSummary: "要約は後で追加します。",
    noDate: "日付未設定",
    minRead: (minutes: number) => `${minutes}分で読めます`,
    notFoundTitle: "記事が見つかりません | Zaya-dev",
    categoryLabels: {
      cloud: "クラウド",
      frontend: "フロントエンド",
      engineering: "エンジニアリング",
      diary: "",
    },
  },

  // サービスページのテキスト
  services: {
    title: "Web制作サービス",
    subtitle:
      "個人事業主・小規模店舗・クリエイター向けに、集客につながるWebサイトをゼロから設計・制作します。",
    intro:
      "LP、コーポレートサイト、管理画面、ログイン機能、多言語対応まで、目的に合わせて必要な機能だけを無駄なく実装します。",
    ctaLabel: "お問い合わせ",
    bottomCtaTitle: "まずは相談だけでも大丈夫です",
    bottomCtaText:
      "作りたい内容がまだ固まっていなくても問題ありません。目的や予算に合わせて、必要な構成から一緒に整理します。",
    introNote: "初期実績価格として、先着5件のみこの価格で対応しています。",
    plans: {
      simple: {
        name: "Simple LP",
        price: "¥30,000〜¥40,000（税込）",
        description:
          "1ページでサービスや店舗の魅力を伝える、シンプルなLPプラン。",
        details: [
          "1ページ構成（LP）",
          "オリジナルデザイン",
          "SNSリンク",
          "スマホ対応",
          "基本SEO",
          "月1回の軽微修正",
        ],
        timeline: "最短7〜14日",
        note: "原稿・画像素材をご用意いただける場合、よりスムーズに制作できます。",
      },
      starter: {
        name: "Starter Website",
        badge: "おすすめ",
        price: "¥70,000〜¥88,000（税込）",
        description: "事業をちゃんと見せるおすすめプラン。",
        details: [
          "3〜4ページ構成",
          "オリジナルデザイン",
          "お知らせ管理機能",
          "SNSリンク",
          "スマホ対応",
          "SEO基本設定",
          "月2回の軽微修正",
        ],
        timeline: "3〜4週間",
        note: "お知らせ更新まで含めて、公開後も使いやすい基本構成を整えます。",
      },
      custom: {
        name: "Custom Development",
        price: "¥130,000〜 要相談",
        description: "機能を持つWebサイト・アプリ向け。",
        details: [
          "ログイン機能",
          "管理画面",
          "データベース連携",
          "決済機能",
          "高度なアニメーション",
          "多言語対応",
          "API連携など",
        ],
        note: "内容・機能・運用方法に合わせて、構成から個別に設計します。",
      },
    },
    targetAudience: {
      title: "こんな方におすすめ",
      items: [
        "SNSだけでは集客に限界を感じている方",
        "事業内容やサービスの魅力をきちんと伝えたい方",
        "テンプレートではなく、自分の事業に合ったサイトが欲しい方",
        "できるだけ費用を抑えながら、品質の高いWebサイトを作りたい方",
        "公開後も相談しながら改善していきたい方",
      ],
    },
    reasons: {
      title: "選ばれる理由",
      items: [
        {
          title: "ゼロから設計",
          description:
            "テンプレートをそのまま使うのではなく、事業内容・ターゲット・目的に合わせて構成から考えます。",
        },
        {
          title: "集客を意識した導線設計",
          description:
            "見た目だけでなく、問い合わせや予約につながるCTA、文章構成、ページの流れを設計します。",
        },
        {
          title: "低価格でも品質重視",
          description:
            "初期実績価格として、設計・デザイン・実装まで一貫して対応します。",
        },
        {
          title: "こまめなコミュニケーション",
          description:
            "制作中も相談しながら進めるため、完成イメージのズレを減らせます。",
        },
      ],
    },
    philosophy: {
      title: "制作で大切にしていること",
      items: [
        {
          title: "お客様の事業理解",
          description:
            "サービス内容、強み、ターゲット、競合を確認し、サイトで何を伝えるべきか整理します。",
        },
        {
          title: "問い合わせにつながる構成",
          description:
            "どの順番で情報を見せるか、どこでボタンを置くか、ユーザーが迷わない流れを考えます。",
        },
        {
          title: "見た目と使いやすさの両立",
          description:
            "デザイン性だけでなく、スマホでの見やすさ、読みやすさ、操作のしやすさも重視します。",
        },
      ],
    },
    process: {
      title: "ご利用の流れ",
      steps: [
        {
          title: "お問い合わせ",
          description:
            "まずは作りたいサイトの内容、目的、予算感を簡単にお聞きします。",
        },
        {
          title: "ヒアリング",
          description: "事業内容、ターゲット、必要なページや機能を確認します。",
        },
        {
          title: "お見積もり",
          description:
            "内容に合わせて、制作範囲・料金・納期を整理してご提案します。",
        },
        {
          title: "制作開始",
          description:
            "構成、デザイン、実装を進めます。必要に応じて途中確認も行います。",
        },
        {
          title: "確認・修正",
          description:
            "完成前に内容を確認していただき、必要な修正を反映します。",
        },
        {
          title: "公開・運用サポート",
          description:
            "公開作業を行い、必要に応じて保守や軽微な修正も対応します。",
        },
      ],
    },
    fees: {
      title: "費用の違い",
      description:
        "上記プラン料金とは別に、必要に応じて以下の費用が発生します。",
      production: {
        title: "制作費",
        description: "サイトを作る費用。上記プランの価格は制作費です。",
      },
      maintenance: {
        title: "保守費",
        description: "公開後に安全に運用する費用。",
      },
      external: {
        title: "外部費",
        description: "ドメイン・サーバーなどの実費。",
      },
      delivery: {
        title: "納品について",
        description:
          "制作後は、デザインや内容を反映したコード一式をお渡しします。公開後の修正・更新・運用サポートが必要な場合は、別途保守費が発生します。",
      },
    },
    faq: {
      title: "よくある質問",
      items: [
        {
          question: "修正は何回まで対応できますか?",
          answer:
            "プランにより異なります。軽微な修正は各プランの範囲内で対応します。大きな構成変更や機能追加は別途お見積もりになります。",
        },
        {
          question: "支払いはいつ必要ですか?",
          answer:
            "基本的には制作開始前に一部、納品前に残額のお支払いをお願いしています。内容に応じて相談可能です。",
        },
        {
          question: "ドメインやサーバーはどうなりますか?",
          answer:
            "ドメイン・サーバーなどの外部費は制作費とは別になります。必要な場合は取得や設定もサポートできます。",
        },
        {
          question: "公開後に自分で更新できますか?",
          answer:
            "お知らせ管理機能などを付けることで、一部の内容はご自身で更新できるようにできます。通常の静的ページ修正は保守対応になります。",
        },
        {
          question: "納品物は何ですか?",
          answer:
            "デザインや内容を反映したWebサイトのコード一式です。必要に応じて公開設定や運用サポートも対応します。",
        },
        {
          question: "なぜこの価格なのですか?",
          answer:
            "初期実績価格として、先着5件のみこの価格で対応しています。今後、実績が増え次第、価格を改定する予定です。",
        },
        {
          question: "サイトに載せる写真や文章は自分で用意するのですか?",
          answer:
            "基本的な文章や写真素材はお客様にご用意をお願いしておりますが、何を書けばいいか分からない場合は、ヒアリングを通して一緒に文章を整理していくことも可能です。",
        },
      ],
    },
  },

  contact: {
    eyebrow: "連絡先",
    titleA: "あなたの事業に合う",
    titleB: "Webサイトを作ります",
    description:
      "集客・信頼感・問い合わせ導線を意識したWebサイトを、デザインから実装まで一貫して制作します。LP、コーポレートサイト、ポートフォリオ、小規模なWebアプリまで対応可能です。",

    primaryLabel: "無料相談",
    primaryTitle: "まずはメールで相談する",
    primaryDescription:
      "「何を作ればいいかわからない」「予算内でできることを知りたい」といった段階でも問題ありません。",

    emailLabel: "メールアドレス",
    copy: "アドレスをコピー",
    copied: "コピーしました",
    send: "メールを送信",
    viewProjects: "制作実績を見る",

    socialTitle: "SNS",
    connectVia: "",

    availabilityLabel: "新規案件受付中",
    availability:
      "小規模事業者・個人事業主・クリエイター向けに、低コストでも伝わるWebサイトを制作します。",

    form: {
      nameLabel: "お名前",
      namePlaceholder: "お名前を入力してください",
      emailLabel: "メールアドレス",
      emailPlaceholder: "you@example.com",
      messageLabel: "ご相談内容",
      messagePlaceholder:
        "例：新しくオープンするカフェのホームページを作りたいです。予算は10万円程度で考えています。",
      sending: "送信中...",
      submit: "送信する",
      success: "メッセージを送信しました。",
      error: "送信に失敗しました。時間をおいてもう一度お試しください。",
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
    title: "作れるものが伝わる設計",
    browserUrl: "ezaya.dev / preview",
    items: ["Website", "Dashboard", "Content DB", "JP / MN / EN"],
    captions: [
      "行動につながるビジネスサイト",
      "シンプルな管理画面UI",
      "整理されたコンテンツDB",
      "日本語・モンゴル語・英語対応",
    ],
    scenes: {
      landing: {
        brand: "Zaya Studio",
        nav: ["サービス", "実績", "相談"],
        ctaSmall: "相談する",
        eyebrow: "WEB PRODUCTION",
        titleBefore: "伝わるサイトで、",
        titleHighlight: "相談",
        titleAfter: "につなげる",
        description:
          "構成・デザイン・実装まで、\n目的に合わせてシンプルに設計します。",
        primaryCta: "制作を相談",
        secondaryCta: "実績を見る",
        stat: "+42%",
        live: "PREVIEW",
        features: ["CTA設計", "スマホ対応", "基本SEO"],
        socialProofNumber: "3 LANG",
        socialProofText: "日本語 / モンゴル語 / 英語",
      },
      admin: {
        logo: "Client Panel",
        menu: ["概要", "問い合わせ", "ページ", "設定"],
        userName: "client",
        loginStatus: "● Secure access",
        kpis: [
          {
            label: "問い合わせ",
            value: "24",
            change: "+8",
            up: true,
          },
          {
            label: "表示回数",
            value: "1.8K",
            change: "+18%",
            up: true,
          },
          {
            label: "下書き",
            value: "3",
            change: "確認中",
            up: false,
          },
        ],
        months: ["月", "火", "水", "木", "金", "土", "日"],
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
