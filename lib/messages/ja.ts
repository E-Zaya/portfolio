import type { en } from "./en";

export const ja: typeof en = {
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
    badges: [
      "Frontend Development",
      "Full-stack Solutions",
      "UI / UX Design",
      "Database Management",
    ],
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
        description:
          "日本へ留学。異文化の中で多様な価値観に触れ、自分の枠を広げる土台を築いた10年間。",
      },
      {
        year: "2026",
        title: "創造への転換点",
        description:
          "変化のない日々に危機感を抱き、「消費する側」から「創造する側」へ。エンジニアとして生きる道を選択",
      },
      {
        year: "現在",
        title: "IO Institute",
        description:
          "昨日できなかったことを今日可能にする。毎日が成長に直結する環境で、フルスタックのスキルを研鑽中。",
      },
      {
        year: "目指す先",
        title: "Global Developer",
        description:
          "言葉の壁も、\n デバイスの境界も超えて、 誰かの日常を「革新」するプロダクトを。世界水準の「創る人」になる。",
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
    eyebrow: "ブログ",
    title: "開発の記録をまとめたブログ",
    description:
      "日々の開発ログ、バグ修正、UI設計の考え方、小さな進捗を記録しています。",
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
    ctaTitle: "相談や質問があれば、気軽にご連絡ください。",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "メール",
    untitled: "無題の記事",
    uncategorized: "未分類",
    noSummary: "要約は後で追加します。",
    noDate: "日付未設定",
    minRead: (minutes: number) => `${minutes}分で読めます`,
    postCount: (count: number) => `${count}件`,
    notFoundTitle: "記事が見つかりません | Zaya Portfolio",
    categoryLabels: {
      cloud: "クラウド",
      frontend: "フロントエンド",
      engineering: "エンジニアリング",
      diary: "日記",
    },
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
} as const;
