import type { en } from "./en";
import type { HeroVisualContent } from "./types";

export const mn: typeof en = {
  meta: {
    title: "Zaya | AI-д суурилсан Full-Stack хөгжүүлэгч",
    description:
      "Монгол, япон, англи хэлтэй AI-д суурилсан full-stack хөгжүүлэгч. Next.js ашиглан хурдан, чанартай вэб бүтээгдэхүүн бүтээнэ.",
  },

  header: {
    subtitle: "Portfolio",
    logoAria: "Нүүр хуудас руу буцах",
    menuAria: "Цэс нээх",
  },

  nav: [
    { label: "Миний тухай", href: "/about" },
    { label: "Төслүүд", href: "/projects" },
    { label: "Блог", href: "/blog" },
    { label: "Холбоо барих", href: "/contact" },
  ],

  hero: {
    eyebrow: "/ Custom Web Design / Fast Delivery / Practical Features /",
    title: "Таны бизнесийн вэбсайтыг\n",
    highlight: "Зөвхөн танд зориулж эхнээс нь тусгайлан\nзагварчилна.",
    description:
      "Бэлэн загвар биш, зорилгод тань тааруулсан тусгай дизайн. LP, компанийн сайт, жижиг Web app хүртэл хэрэгтэй функцуудыг цэвэрхэн бүтээнэ.",
    badges: ["Custom Design", "Fast Delivery", "Practical Features"],
    primaryCta: "Үнэгүй зөвлөгөө авах",
    secondaryCta: "Төслүүд үзэх",

    meta: {
      status: "Шинэ төсөл дээр ажиллахад бэлэн байна. · 2026.04",
      focus: "Websites & Web Apps",
      location: "Ulaanbaatar",
    },

    techLine: "Үнэгүй зөвлөгөө · 2 долоо хоногоос · JP/MN дэмжлэг",
    visualHint: "Эдгээрийг бүгдийг нь хийж чадна",

    features: [
      {
        title: "Custom Design",
        description:
          "Бэлэн template биш, бизнес бүрт зориулж эхнээс нь төлөвлөж дизайн хийнэ",
      },
      {
        title: "Fast Delivery",
        description:
          "Захиалгаас хүлээлгэн өгөх хүртэл хурдан, цэгцтэй ажиллана",
      },
      {
        title: "Practical Features",
        description:
          "Login, admin dashboard, жижиг database зэрэг бодит функцууд хийж чадна",
      },
    ],

    visual: {
      label: "Service Preview",
      title: "Юу хийж чадах нь шууд ойлгогдох бүтэц",
      items: ["Landing Page", "Admin Login", "Database", "JP / MN / EN"],
      captions: [
        "Маркетингийн LP",
        "Login-той admin dashboard",
        "Жижиг database UI",
        "Олон хэлтэй website",
      ],
    },
  },

  skills: {
    eyebrow: "Tech Stack",
  },

  about: {
    eyebrow: "Миний тухай",
    title: "Тэгээс хөгжүүлэгч болох зам",
    paragraphs: [
      "Олон хэлний туршлага, олон өнцгөөс харж чаддаг давуу талаа ашиглан цэвэр, ойлгомжтой digital experience бүтээхийг хичээдэг.",
      "Японд 10 жил амьдарсны дараа инженер болох зорилгоо биелүүлэхийн тулд Монголдоо буцаж ирсэн. Одоо IO Institute-ийн эрчимжүүлсэн хөтөлбөрт суралцаж, modern web development чадвараа өдөр бүр хөгжүүлж байна.",
      "Японд амьдарсан хугацаанд эзэмшсэн япон хэлний чадвар бол миний том давуу тал. Япон болон англи эх сурвалжаас техникийн мэдлэг судалж, илүү өргөн өнцгөөс асуудал шийдэхийг зорьдог.",
    ],
    strengthsEyebrow: "Давуу тал",
    strengthsTitle: "Миний санал болгож чадах үнэ цэнэ",
    strengths: [
      {
        title: "Олон хэлээр техникийн судалгаа хийх чадвар",
        description:
          "Япон болон англи хэл дээрх техникийн document уншиж, тохиромжтой шийдлийг хурдан олох чадвартай.",
      },
      {
        title: "Frontend хөгжүүлэлт",
        description:
          "Next.js, React дээр төвлөрч, цэвэрхэн, modern, ашиглахад таатай interface бүтээхэд анхаардаг.",
      },
      {
        title: "Хариуцлагатай ажиллах хандлага",
        description:
          "Японд өнгөрүүлсэн 10 жилийн туршлагаар дамжуулан нарийн ажиллагаа, цаг баримтлах, хариуцлагатай communication-ийн үнэ цэнийг сайн ойлгосон.",
      },
    ],
    journeyEyebrow: "Замнал",
    journeyTitle: "Миний туулсан зам",
    journey: [
      {
        year: "2016",
        title: "Шинэ орчин дахь эхлэл",
        description:
          "Японд суралцахаар очиж, өөр соёл, өөр сэтгэлгээтэй орчинд өөрийгөө хөгжүүлсэн 10 жил.",
      },
      {
        year: "2026",
        title: "Бүтээгч болох шийдвэр",
        description:
          "Зүгээр хэрэглэгч байх биш, өөрөө бүтээдэг хүн болохоор шийдэж инженерийн замыг сонгосон.",
      },
      {
        year: "Одоо",
        title: "IO Institute",
        description:
          "Өчигдөр хийж чадаагүй зүйлээ өнөөдөр хийж сурах орчинд full-stack чадвараа хөгжүүлж байна.",
      },
      {
        year: "Зорилго",
        title: "Global Developer",
        description:
          "Хэлний хязгаарыг давж, хүмүүсийн өдөр тутмын амьдралд үнэ цэнэ нэмэх product бүтээх.",
      },
    ],
  },

  projects: {
    eyebrow: "Projects",
    titleA: "",
    titleB: "Онцлох төслүүд",
    description:
      "Практик хэрэглээ болон цэвэр UI design-д төвлөрсөн төслүүд. Уншихад ойлгомжтой, засварлахад амар кодоор бүтээхийг зорьдог.",
    featuredEyebrow: "",
    featuredTitle: "Гол төсөл",
    otherEyebrow: "Бусад төслүүд",
    otherTitle: "Бусад ажлууд",
    featuredBadge: "Онцлох",
    liveDemo: "Demo үзэх",
    viewCode: "Code үзэх",
    status: {
      Completed: "Дууссан",
      "In Progress": "Хөгжүүлж байна",
    },
    items: {
      "workout-log": {
        title: "Дасгалын бүртгэлийн app",
        description:
          "Ачааллын анализ, дасгалын удирдлагатай full-stack workout tracking app.",
        summary:
          "Next.js, Prisma, PostgreSQL ашиглан бүтээсэн. Дасгал бүртгэх, exercise management, долоо хоногийн ачааллыг харах боломжтой.",
      },
    },
  },

  blog: {
    filterLabel: "Тагаар шүүх",
    browseTitle: "Нийтлэлүүд",
    backToAllPosts: "Бүх нийтлэл рүү буцах",
    breadcrumbHome: "Нүүр",
    breadcrumbBlog: "Блог",
    breadcrumbAria: "Breadcrumb",
    toc: "Гарчиг",
    tocItemAria: "Гарчиг руу очих",
    related: "Төстэй нийтлэлүүд",
    readMore: "Дэлгэрэнгүй",
    allTags: "Бүгд",
    noPostsTitle: "Нийтлэл олдсонгүй.",
    noPostsDescription: "Өөр tag сонгоод үзээрэй.",
    copyCode: "Хуулах",
    copiedCode: "Хуулсан",
    copyCodeAria: "Code хуулах",
    untitled: "Гарчиггүй нийтлэл",
    uncategorized: "Ангилагдаагүй",
    noSummary: "Товч тайлбар дараа нэмэгдэнэ.",
    noDate: "Огноо байхгүй",
    minRead: (minutes: number) => `${minutes} мин уншина`,
    notFoundTitle: "Нийтлэл олдсонгүй | Zaya Portfolio",
    categoryLabels: {
      cloud: "Cloud",
      frontend: "Frontend",
      engineering: "Engineering",
      diary: "Өдрийн тэмдэглэл",
    },
  },

  contact: {
    eyebrow: "Холбоо барих",
    titleA: "Санааг",
    titleB: "цэвэрхэн дижитал туршлага болгоё",
    description:
      "Төсөл бүрийн зорилгыг ойлгож, тохирох дизайн ба кодоор үнэ цэнэ бүтээнэ. Жижиг website-аас web app хүртэл захиалга авах боломжтой.",
    primaryLabel: "Шууд холбоо",
    primaryTitle: "Имэйл илгээх",
    primaryDescription:
      "Ажлын санал, website захиалга, хамтын ажиллагаа, асуулт байвал чөлөөтэй холбогдоорой.",
    emailLabel: "Имэйл хаяг",
    copy: "Имэйл хуулах",
    copied: "Хууллаа!",
    send: "Имэйл илгээх",
    viewProjects: "Төслүүд үзэх",
    socialTitle: "Сошиал",
    connectVia: "Холбогдох суваг",
    availabilityLabel: "Захиалга авч байна",
    availability:
      "UI design-аас implementation хүртэл нэг урсгалаар цэвэрхэн бүтээнэ.",
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
    title: "Юу хийж чадах нь шууд ойлгогдох бүтэц",
    browserUrl: "zaya.dev / preview",
    items: ["Landing Page", "Admin Login", "Database", "JP / MN / EN"],
    captions: [
      "Маркетингийн LP",
      "Login-той admin dashboard",
      "Жижиг database UI",
      "Олон хэлтэй website",
    ],
    scenes: {
      landing: {
        brand: "Brand",
        nav: ["Функц", "Үнэ", "Жишээ"],
        ctaSmall: "Үнэгүй эхлэх",
        eyebrow: "✦ NEW RELEASE",
        titleBefore: "Өсөлтийг",
        titleHighlight: "нэмэгдүүлэх",
        titleAfter: "цэвэр сайт",
        description:
          "Хэрэглэгч татахаас төлбөр төлүүлэх хүртэл\nнэг урсгалаар ажиллана.",
        primaryCta: "Үнэгүй турших →",
        secondaryCta: "Demo үзэх",
        stat: "↑ 312%",
        live: "LIVE",
        features: ["✓ SEO бэлэн", "✓ A/B тест", "✓ Analytics dashboard"],
        socialProofNumber: "",
        socialProofText: "",
      },

      admin: {
        logo: "Admin",
        menu: ["Dashboard", "Users", "Sales", "Settings"],
        userName: "admin",
        loginStatus: "● Нэвтэрсэн",
        kpis: [
          {
            label: "Сарын орлого",
            value: "₮12.4M",
            change: "+12.4%",
            up: true,
          },
          { label: "Хэрэглэгч", value: "847", change: "+5.2%", up: true },
          { label: "Conversion", value: "3.2%", change: "-0.4%", up: false },
        ],
        months: ["1 сар", "2 сар", "3 сар", "4 сар", "5 сар", "6 сар", "7 сар"],
      },

      database: {
        queryTable: "users",
        columns: ["id", "name", "email", "status"],
        rows: [
          {
            id: "001",
            name: "Б. Мөнхбат",
            email: "munkh@ex.co",
            status: "active",
          },
          {
            id: "002",
            name: "С. Энхжин",
            email: "enkhjin@ex.co",
            status: "active",
          },
          {
            id: "003",
            name: "田中 浩一",
            email: "tanaka@ex.co",
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
          { code: "JA", line: "多言語対応サイト" },
          { code: "EN", line: "Multilingual website" },
          { code: "MN", line: "Олон хэлтэй вебсайт" },
        ],
        footer: "i18n · seamless switch",
      },
    },
  } satisfies HeroVisualContent,
} as const;
