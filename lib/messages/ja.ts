import type { HeroVisualContent, Messages } from "./types";

export const ja = {
  // 中身
  meta: {
    title: "Zaya | 選ばれるお店の顔と、楽になる仕組み — Web・アプリ制作",
    description:
      "予約・お会計・多言語対応まで。小さなお店や事業の「選ばれる顔」と「手間が消える仕組み」を、設計から公開後まで一人で伴走してつくります。日本語・モンゴル語・英語対応。",
    pages: {
      about: {
        title: "私について — 経歴・スキル",
        description:
          "ウランバートル拠点のAI-Native Product Engineer、Zayaの経歴、技術スタック（Next.js / TypeScript）、制作に対する考え方を紹介します。日本語・モンゴル語・英語対応。",
      },
      projects: {
        title: "制作実績 — Web・アプリ開発事例",
        description:
          "Webサイト・Webアプリの制作事例一覧。設計から公開後の運用まで一人で伴走した実績を、使用技術とあわせて紹介します。",
      },
      services: {
        title: "サービス内容と料金",
        description:
          "Web制作・アプリ開発のサービス内容、進め方、料金と納期の目安。予約・お会計・多言語対応など、お店の手間が消える仕組みづくりを提供します。",
      },
      contact: {
        title: "お問い合わせ・ご相談",
        description:
          "制作のご相談・お見積もりはこちらから。日本語・モンゴル語・英語で対応、通常1〜2営業日以内に返信します。",
      },
      blog: {
        title: "ブログ — Web制作の記録",
        description:
          "Web制作・プロダクトづくり・多言語サイト運用についての記事。開発の記録と学びを発信しています。",
      },
    },
  },
  header: {
    subtitle: "AI-Native Product Engineer",
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
    eyebrow: "/ 選ばれる / 楽になる /",
    title: "お店は、もっと\n選ばれる。\n",
    highlight: "仕事は、もっと\n楽になる。",
    description:
      "信頼される「お店の顔」づくりと、手間が消える「仕組み」づくり。\n予約の受付も、お会計も、外国人のお客様への案内も——難しいことは、全部こちらの仕事です。",
    badges: ["Custom Design", "Fast Delivery", "Practical Features"],
    primaryCta: "無料相談",
    secondaryCta: "プロジェクトを見る",
    meta: {
      status: "案件受付中 · 2026.07",
      focus: "Websites & Web Apps",
      location: "Ulaanbaatar",
    },
    techLine: "無料相談受付中 ・ 最短1週間〜 ・ JP / MN対応",
    visualHint: "全部つくれます",
    showcase: {
      liveBadge: "実際に動いています",
      open: "実物を見る",
      laptopLabel: "「選ばれる」の実例",
      laptopCaption: "海外のお客様が自分の言葉で読み、その場で申し込む旅行サイト",
      phoneLabel: "「楽になる」の実例",
      phoneCaption: "仕事の記録が3秒で終わるアプリ。ストアで配信中",
      phoneTimerLabel: "本日の稼働",
      phoneRows: [
        { name: "設計", value: "3.2h" },
        { name: "開発", value: "4.5h" },
      ],
      handNote: "さわってみて！",
    },
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
    title: "はじめまして、Zayaです。",
    // 経歴の説明ではなく「手紙」。読んだ人の心の距離を縮めるためのセクション。
    paragraphs: [
      "日本で10年暮らして、本気で「つくる人」になりたくて、モンゴルに帰ってきました。",
      "いま手伝っているのは、小さなお店や事業を営む人たちです。予約の電話に追われる毎日や、いいものを作っているのに伝わらないもどかしさ——そういう「困った」を、Webやアプリのかたちでほどいていくのが私の仕事です。",
      "派手なことは言えません。でも、あなたの話をちゃんと聞いて、一緒に考えて、完成のその先まで並走することは約束できます。日本語でも、モンゴル語でも、英語でも。",
    ],
    signature: "— ウランバートルの作業机から　Zaya",
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
    zaza: {
      name: "Zaza",
      role: "応援係(相棒)",
      description:
        "このサイトのあちこちからひょっこり覗いている犬。仕事は、あなたの背中をそっと押すこと。私がサボっていると鳴きます。",
    },

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
    kindLabels: {
      client: "実案件",
      product: "自社プロダクト",
      sample: "制作例",
    },
    liveLabel: "公開中",
    openLive: "実物を見る",
    detailHint: "詳しく見る",
    liveDemo: "デモを見る",
    viewCode: "コードを見る",
    caseStudy: "Case-Studyを読む",
    scopeLabel: "担当範囲",
    focusLabel: "こだわり",
    behindLabel: "制作の裏側",
    wipTitle: "制作中のプロジェクト",
    wipStatus: "開発中",
    status: {
      Completed: "完了",
      "In Progress": "開発中",
    },
    items: {
      "odootech-time": {
        title: "OdooTech Time",
        description:
          "GPSジオフェンス、端末バインディング、監査ログで不正打刻を防ぐ、企業向け勤怠管理モバイルアプリ。",
        tags: ["実運用中のモバイルアプリ", "GPSジオフェンス打刻", "iOS / Android配信"],
        client: "OdooTech",
        summary:
          "Flutter製モバイルアプリとOdoo 17カスタムバックエンドで構成した勤怠管理プロダクト。出退勤、勤務エリア判定、休暇申請、給与明細、業務報告、チーム機能、通知までを扱い、iOS / Androidの両方で配信しています。",
        scope:
          "Flutterアプリ、Riverpod状態管理、Odoo JSON-RPC連携、Odoo 17カスタムモジュール、ジオフェンス、端末バインディング、監査ログ、ストア配信対応まで担当。",
        focus:
          "「正しい場所に、正しい端末で、正しい意図で打刻する」ことを保証する設計。GPS、端末ID、勤務スケジュール、サーバー側の意図検証を重ね、不正打刻と打刻事故を防ぎました。",
        behind:
          "ストア審査で.mnドメインのDNS解決が不安定になった問題は、自作DNS-over-HTTPSクライアントとTLS/SNI制御で乗り越えました。",
      },
      "overland-beyond": {
        title: "Overland Beyond",
        description:
          "モンゴルの旅を、写真と多言語の導線でその場の申込までつなげる旅行サイト。",
        tags: ["多言語で申し込める", "旅の魅力が伝わる", "既存サイトをNext.js化"],
        client: "Overland Beyond",
        summary:
          "Odooで運用されていたサイトの構成を読み解き、Next.jsへ移植。ツアー紹介、申込導線、静的ページ、遠征詳細ページを、読みやすさと保守性を意識して再構成しました。",
        scope:
          "既存Odooサイトの解析、コンテンツ変換、Next.js実装、ページ構成、デプロイ対応まで担当。",
        focus:
          "海外の旅行者が迷わず内容を理解し、そのまま申込へ進める情報設計。写真の迫力を残しながら、ページ表示と更新のしやすさを整えました。",
        behind:
          "Odooのテンプレート構造をほどきながら、元のサイトの熱量をNext.jsでも崩さないように移植しました。",
      },
      futari: {
        title: "Futari",
        description:
          "日記、写真、願いごと、記念日を、ふたりだけの空間で育てていくプライベートWebアプリ。",
        tags: ["ふたり専用の空間", "写真と思い出を整理", "招待リンクで参加"],
        summary:
          "カップル向けのマルチテナントWebアプリ。登録、パートナー招待、日記、やりたいことリスト、思い出カレンダー、ギャラリー、PWA対応まで、実際に長く使える体験として設計しました。Supabase未設定時にはローカルデモモードで動くようにしています。",
        scope:
          "企画、UI設計、フロントエンド、Supabase Auth / DB / Storage、RLS、PWA、デモモードまで担当。",
        focus:
          "大切な記録を扱うアプリなので、見た目のかわいさだけでなく、ふたり以外に見えないデータ分離と、スマホで毎日触りたくなる軽さを重視しました。",
        behind:
          "「記録する」より「帰ってきたくなる場所」にしたくて、細かい余白や言葉を何度も見直しました。",
      },
      "zaza-lab": {
        title: "Zaza Lab",
        description:
          "JLPT N1・N2の漢字、語彙、読解、リスニングを、苦手だけ復習しながら進める学習アプリ。",
        tags: ["苦手だけ復習", "PWAで学習を継続", "音声つき問題"],
        summary:
          "日本語学習者向けのPWA。N1/N2の漢字・四字熟語・オノマトペ・文法・読解・リスニングを、クイズ、辞書、進捗、復習、実績解除まで一つのアプリにまとめました。学習データと音声をローカルで扱い、途中再開やバックアップにも対応しています。",
        scope:
          "学習体験の設計、クイズロジック、辞書、進捗保存、PWA、音声データ連携、UI実装まで担当。",
        focus:
          "勉強アプリは続くことが一番大事なので、今日の一問、苦手復習、達成感の出る演出を短い導線で使えるようにしました。",
        behind:
          "問題数が増えるほどUXが重くなりがちなので、毎日開いても疲れない密度に調整しました。",
      },
      "workout-log": {
        title: "筋トレ記録アプリ",
        description:
          "記録は数タップ、伸びはグラフで一目。「続けたくなる」を設計した筋トレ記録アプリ。",
        tags: ["記録が数タップで終わる", "伸びが一目でわかる"],
        summary:
          "設計・デザイン・開発・データベース・公開まで、一人で完結させたフルスタック開発。記録は数タップで終わる入力動線、週ごとの伸びが一目でわかるグラフ——「三日坊主でも続く」を目標に、自分自身で毎日使いながら磨きました。",


        scope:
          "設計・デザイン・フロントエンド・バックエンド・DB設計・デプロイまで一人で担当。",
        focus:
          "記録のしやすさと週次グラフの視認性。継続したくなるUIを意識して設計しました。",
        behind:
          "三日坊主の自分でも続くUIって何だろう、と自分を実験台に何度も作り直しました。",
        caseStudy: "workout-log-case-study",
      },

      "soul-skin-brand-lookbook": {
        title: "Soul Skin Brand Lookbook",
        description:
          "商品を並べる前に、世界観へ引き込む。見た人がSNSと問い合わせに自然と流れるブランドサイト。",
        tags: ["世界観で魅せる", "SNS・問い合わせへ導線"],
        summary:
          "商品販売ではなく、Instagramや問い合わせにつなげる導線を意識して、ビジュアル・ブランドイメージ・連絡先への流れを整理しました。",
        scope:
          "デザイン・フロントエンド実装・コンテンツ構成・デプロイまで一人で担当。",
        focus:
          "ブランドの空気感をビジュアルで伝えることと、SNS・問い合わせへの自然な導線設計。",
        behind:
          "写真の余白を1枚ずつ調整して、「ブランドの空気」が崩れない画角を探し続けました。",
        caseStudy: "soul-skin-project",
      },
      "type-mon": {
        title: "TypeMon",
        description:
          "ラテン文字で打てば、そのままキリル文字の文章に。モンゴル語の入力を速くする無料ツール。",
        tags: ["打つだけで変換", "無料で使える"],
        summary:
          "Next.js と TypeScript で制作。ラテン文字からキリル文字への変換、履歴保存、URLからのテキスト読み込み、ダークモード、Gemini API を使った文章補正機能、Upstash Redis による利用回数制限を実装しました。",
        scope:
          "企画・UI設計・フロントエンド実装・API連携・レート制限・デプロイまで一人で担当。",
        focus:
          "ラテン文字入力に慣れているモンゴル語ユーザーが、より早く自然にキリル文字の文章を作れるように、シンプルで実用的なUIを意識しました。",
        behind:
          "深夜、変換テーブルと1文字ずつにらめっこ。母語のことだから、妥協できませんでした。",
        caseStudy: "type-mon-case-study",
      },
      "sui-salon": {
        title: "Sui Salon LP",
        description:
          "雰囲気が伝わって、そのまま予約に進める1ページ。スマホでの見やすさを最優先に設計。",
        tags: ["雰囲気→予約が1ページ", "スマホ最適"],
        summary:
          "個人経営のサロンを想定し、Next.js と Tailwind CSS でゼロから設計したシングルページサイトです。料金30,000〜40,000円帯の案件で実際にお渡しする想定の構成・分量で作成しています。Framer Motion で読み込み時のアニメーションを軽く付け、店舗の雰囲気・メニュー・アクセス・予約導線までを1ページに整理しました。",
        scope:
          "構成・デザイン・フロントエンド実装・レスポンシブ対応まで一人で担当。",
        focus:
          "「見て、雰囲気が伝わって、すぐ予約に行ける」という流れを意識。スマホで見たときの読みやすさとCTAの押しやすさを最優先に設計しました。",
        behind:
          "予約ボタンを押す瞬間の指の位置まで想像して、親指の届く場所に置き直しました。",
      },
      suijaku: {
        title: "Suijaku",
        description:
          "カードをめくる気持ちよさと、記録を伸ばす楽しさを入れた神経衰弱ゲーム。",
        tags: ["すぐ遊べる", "記録を保存", "スマホ対応"],
        summary:
          "Next.jsで作ったメモリーカードゲーム。スタート画面、プレイ画面、クリア結果、リーダーボード、localStorageによる記録保存を入れ、短い時間で何度も遊べる軽いゲーム体験に仕上げました。",
        scope:
          "ゲームUI、カード状態管理、スコア計算、リーダーボード、レスポンシブ対応まで担当。",
        focus:
          "カードをめくった瞬間の反応、成功・失敗の見え方、もう一回遊びたくなる結果画面を丁寧に作りました。",
        behind:
          "シンプルなルールだからこそ、めくるテンポと画面の余白で気持ちよさが変わるのが面白かったです。",
      },
      minesweeper: {
        title: "Minesweeper",
        description:
          "名前、難易度、テーマ、ランキングまで入れた、クラシックなマインスイーパーのWebゲーム。",
        tags: ["難易度選択", "ランキング保存", "英日対応"],
        summary:
          "Next.jsで実装したマインスイーパー。初回クリック安全、フラグモード、難易度選択、タイマー、ランキング、遊び方、英日切り替え、ライト/ダークテーマまで入れて、PCでもスマホでも遊びやすく整えました。",
        scope:
          "ゲームロジック、状態管理、ボードUI、ランキング保存、言語切り替え、レスポンシブ対応まで担当。",
        focus:
          "盤面が小さくならず、スマホでも誤タップしにくいサイズ調整と、勝敗後に盤面を確認できる流れを重視しました。",
        behind:
          "昔ながらのゲームほど、余計な装飾よりクリック感と盤面の読みやすさが大事だと実感しました。",
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

  // サービスページのテキスト — 「選ばれる × 楽になる」2本柱・ビフォー→アフター形式・技術語ゼロ
  services: {
    title: "何ができるか、より。\n何が楽になるか。",
    intro: [
      "私が売っているのは、WebサイトやアプリというIT用語ではありません。「選ばれるお店の顔」と、「手間が消える仕組み」です。",
      "むずかしい話はしません。あなたのお店で何が変わるかだけ、見てください。",
    ],
    ctaLabel: "無料相談",
    labels: {
      before: "今",
      after: "これから",
      forms: "こんな形でつくります",
      proofs: "実物を見る",
      price: "目安",
    },
    pillars: [
      {
        name: "選ばれる",
        tagline: "お店の顔をつくる",
        lead: "検索したお客様は、3秒で「ちゃんとしてるお店か」を判断しています。",
        beforeAfter: [
          {
            before: "お店の顔が、SNSのプロフィールだけ",
            after: "検索した人が「ここ、ちゃんとしてる」と感じる顔がある",
          },
          {
            before: "雰囲気が伝わらず、価格で比べられる",
            after: "世界観が伝わって、雰囲気で選ばれる",
          },
          {
            before: "外国人のお客様に、魅力を伝えられない",
            after: "お客様が、自分の言葉で読める",
          },
          {
            before: "営業時間・場所・メニューを毎回聞かれる",
            after: "聞かれる前に、答えてある",
          },
        ],
        forms: ["お店の紹介サイト", "1ページの案内", "ブランドの世界観サイト", "外国語版"],
        proofs: [
          {
            name: "Overland Beyond",
            description: "海外のお客様が自分の言葉で読んで、その場で申し込む旅行サイト",
            href: "https://overlandbeyond.com",
          },
          {
            name: "Soul Skin",
            description: "世界観で見せるブランドサイト",
            href: "https://soul-skin-website.vercel.app/",
          },
          {
            name: "Sui Salon",
            description: "1ページで雰囲気から予約までつながるサロン案内",
            href: "https://sui-salon.vercel.app/",
          },
        ],
        price: "¥30,000〜88,000",
        timeline: "1〜4週間",
      },
      {
        name: "楽になる",
        tagline: "毎日の手間を、仕組みに任せる",
        lead: "1日30分の「面倒」は、1年で約180時間。それ、仕組みに任せられます。",
        beforeAfter: [
          {
            before: "電話が鳴るたび、作業が止まる",
            after: "予約は、寝ている間にたまっていく",
          },
          {
            before: "顧客情報がノートとLINEとExcelに散らばる",
            after: "1か所に、勝手にたまっていく",
          },
          {
            before: "月末の集計に半日つぶれる",
            after: "開いたら、もう終わっている",
          },
          {
            before: "同じ質問に、何度も答えている",
            after: "お客様が、自分で確認できる",
          },
        ],
        forms: ["予約・申込の受付", "顧客リスト", "記録・集計", "お店のスマホアプリ"],
        proofs: [
          {
            name: "タイムアプリ",
            description: "仕事の記録が3秒で終わる。App Store / Google Playで配信中",
          },
          {
            name: "Overland Beyondの申込フォーム",
            description: "4つの質問に答えるだけで、申込が完了する",
            href: "https://overlandbeyond.com/apply",
          },
        ],
        price: "¥130,000〜(内容によります)",
        timeline: "3週間〜",
      },
    ],
    care: {
      title: "続けて、安心",
      description:
        "公開して終わりにしません。ちょっとした修正、内容の更新、「これどうやるの?」——月額で伴走します。",
      price: "月額 ¥5,000〜",
    },
    process: {
      title: "ご利用の流れ",
      steps: [
        {
          title: "相談(無料)",
          description: "悩みを聞かせてください。「何ができるか知りたい」だけでOKです。",
        },
        {
          title: "ご提案と見積もり",
          description: "何をつくると、何が楽になるかを整理してお渡しします。",
        },
        {
          title: "制作",
          description: "週に1回、動いているものを見ながら一緒に進めます。",
        },
        {
          title: "公開・伴走",
          description: "公開作業までこちらで。その後も月額で相談できます。",
        },
      ],
    },
    faq: {
      title: "よくある質問",
      items: [
        {
          question: "何を用意すればいいですか?",
          answer: "写真と、伝えたいこと。文章は一緒に整理できます。",
        },
        {
          question: "パソコンが苦手でも大丈夫?",
          answer:
            "大丈夫です。更新が必要な部分は「あなたが使える形」でお渡しします。",
        },
        {
          question: "支払いはいつ?",
          answer: "開始時に一部、納品前に残り。内容に応じて相談できます。",
        },
        {
          question: "途中で要望が変わったら?",
          answer:
            "週1回の確認で軌道修正しながら進めます。大きな変更は見積もりし直してから。",
        },
        {
          question: "遠方・海外からでも頼めますか?",
          answer: "はい。日本語・英語・モンゴル語で、オンラインで完結します。",
        },
      ],
    },
    bottomCtaTitle: "まずは相談だけでも大丈夫です",
    bottomCtaText:
      "「うちの場合、何が楽になる?」と聞いてください。目的や予算に合わせて、必要なものから一緒に整理します。",
  },

  contact: {
    eyebrow: "連絡先",
    titleA: "「うちの場合、何が楽になる？」",
    titleB: "から、始めましょう",
    description:
      "「お店の顔」づくりと、「手間が消える仕組み」づくり。相談は無料、返信は24時間以内です。",

    primaryLabel: "無料相談",
    primaryTitle: "まずはメールで相談する",
    primaryDescription:
      "「予約をネットで受けたい」「お店の顔になるサイトがほしい」「何ができるか知りたい」——その一言だけで大丈夫です。24時間以内に返信します。",

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
        "例：新しくオープンするカフェのホームページを作りたいです。予算は5万円程度で考えています。",
      sending: "Zazaが届けに走ってます…",
      submit: "送ってみる",
      success: "メッセージを送信しました。",
      error: "送信に失敗しました。時間をおいてもう一度お試しください。",
      note: "まだ何も決まってなくて大丈夫。一緒に考えましょう！",
    },
  },

  footer: {
    title: "Zaya — AI-Native Product Engineer",
    subtitle: "",
    copyright: "© 2026 Designed & Built by Zaya",
  },
  langToggle: {
    en: "EN",
    ja: "JP",
    mn: "MN",
  },
  zaza: {
    pillBubble: "聞くだけタダだよ！",
    formSuccess: "ちゃんと届いたよ！ありがとう！",
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
          { code: "JA", line: "多言語対応Webサイト" },
          { code: "EN", line: "Multi-lang Website" },
          { code: "MN", line: "Монгол хэлээр ойлгомжтой вебсайт" },
        ],
        footer: "i18n · clear structure · local support",
      },
    },
  } satisfies HeroVisualContent,
} satisfies Messages;
