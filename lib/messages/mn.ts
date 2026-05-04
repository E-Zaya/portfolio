import type { HeroVisualContent, Messages } from "./types";

export const mn = {
  meta: {
    title: "Zaya | Япон, Монгол, Англи хэл дээрх вэб бүтээх үйлчилгээ",
    description:
      "Япон болон Монгол дахь хувиараа бизнес эрхлэгчид, жижиг дэлгүүрүүдэд зориулан хэрэглэгчдийг татах, итгэл төрүүлэхүйц вэбсайт бүтээж байна. Танилцуулга хуудас (LP), байгууллагын вэбсайт болон олон хэл дээрх вэбсайт хийлгэхээр бол холбогдоорой.",
  },

  header: {
    subtitle: "Web Developer",
    logoAria: "Нүүр хуудас",
    menuAria: "Цэс нээх",
  },

  nav: [
    { label: "Үйлчилгээ", href: "/services" },
    { label: "Төслүүд", href: "/projects" },
    { label: "Блог", href: "/blog" },
    { label: "Миний тухай", href: "/about" },
    { label: "Холбоо барих", href: "/contact" },
  ],

  hero: {
    eyebrow: "/ Custom Web Design / Fast Delivery / Practical Features /",
    title: "Таний бизнесийн үнэ цэнийг харуулах вэбсайтыг,",
    highlight: "эхнээс нь тусгайлан загварчилна.",
    description:
      "Бэлэн template ашиглахгүй. Таны зорилгод нийцүүлэн Landing page, компанийн сайт болон login, admin дэлгэц, энгийн database бүхий жижиг web app-уудыг эхнээс нь тусгайлан хөгжүүлнэ.",
    badges: ["Custom Design", "Fast Delivery", "Practical Features"],
    primaryCta: "Үнэгүй зөвлөгөө авах",
    secondaryCta: "Төслүүд үзэх",

    meta: {
      status: "Шинэ төсөл дээр ажиллахад бэлэн · 2026.05",
      focus: "Websites & Web Apps",
      location: "Улаанбаатар",
    },

    techLine: "Үнэгүй зөвлөгөө · 7 хоногийн дотор · JP/MN",
    visualHint: "Би эдгээрийг бүгдийг нь хийж чадна",

    features: [
      {
        title: "Custom Design",
        description:
          "Бэлэн template биш, бизнес бүрийн онцлогт тохируулан эхнээс нь загварчилна.",
      },
      {
        title: "Fast Delivery",
        description:
          "Захиалгаас хүлээлгэн өгөх хүртэлх үйл явцыг хурдан бөгөөд ойлгомжтой байдлаар гүйцэтгэнэ.",
      },
      {
        title: "Practical Features",
        description:
          "Login, admin дэлгэц болон жижиг database зэрэг бодит хэрэгцээт функцүүдийг дэмжинэ.",
      },
    ],

    visual: {
      label: "Service Preview",
      title: "Custom website систем",
      items: ["Landing Page", "Admin Login", "Database", "JP / MN / EN"],
      captions: [
        "Маркетингийн Landing page",
        "Login-тэй Admin dashboard",
        "Жижиг database UI",
        "Хос болон гурван хэлтэй сайт",
      ],
    },
  },

  skills: {
    eyebrow: "Tech Stack",
  },

  about: {
    eyebrow: "Миний тухай",
    title: "Япон, Англи хэлтэй Web Developer",
    paragraphs: [
      "Монгол, Япон, Англи хэл дээр ажилладаг вэб хөгжүүлэгчийн хувьд хэл болон соёлын онцлог, ялгааг нарийн тооцоолсны үндсэн дээр хэнд ч ойлгомжтой, ашиглахад хялбар вэбсайт бүтээж байна.",
      "Японд 10 жил амьдарсныхаа дараа инженерийн мэргэжилээр тууштай явахаар Монголдоо буцаж ирсэн. Одоогоор IO Institute-д full-stack хөгжүүлэлтээр эрчимтэй суралцахын зэрэгцээ, хувиараа бизнес эрхлэгчид болон жижиг дэлгүүрүүдэд зориулсан вэбсайт бүтээх ажлыг давхар хийж байна.",
      "Байдаг л нэг энгийн template ашиглахгүйгээр, зорилтот хэрэглэгч болон үндсэн зорилгыг нь тооцоолсон бүтцээр, үзэж буй хүмүүстээ яг хэрэгтэй мэдээллээ хүргэж чадах вэбсайт хийхийг зорьдог.",
    ],
    strengthsEyebrow: "Давуу тал",
    strengthsTitle: "Миний санал болгож чадах зүйлс",
    strengths: [
      {
        title: "Олон хэл дээрх вэб хөгжүүлэлт",
        description:
          "Япон, Монгол, Англи хэл дээр ажиллах бөгөөд тухайн хэл, соёлын онцлогт бүрэн нийцсэн вэбсайт бүтээнэ. Япон эсвэл Монголын зах зээлд чиглэсэн аль ч хэрэгцээнд тохируулан ажиллах боломжтой.",
      },
      {
        title: "Ойлгомжтой UI дизайн",
        description:
          "Next.js болон React дээр төвлөрч, зөвхөн цэвэрхэн, modern төдийгүй ашиглахад маш хялбар interface бүтээхийг зорьдог.",
      },
      {
        title: "Нээлттэй, ойлгомжтой харилцаа",
        description:
          "Зорилго, төсөв, шаардлагатай функцүүдийг хамтдаа тодорхойлж, ямар нэгэн илүүдэл зүйлгүйгээр хөгжүүлэлтийг явуулна. Анх удаа вэбсайт хийлгэж байгаа хүмүүст ч ойлгомжтой, энгийнээр тайлбарлаж, нягт хамтран ажиллана.",
      },
    ],
    // 以前入れてたけど、あまりに個人的な内容だったので削除した経歴セクションの内容。必要なら復活させる。
    // journeyEyebrow: "Замнал",
    // journeyTitle: "Миний туулсан зам",
    // journey: [
    //   {
    //     year: "2016",
    //     title: "Япон дахь эхлэл",
    //     description:
    //       "Япон руу нүүж, дараагийн 10 жилийн турш соёл хоорондын ойлголцол, глобал сэтгэлгээний сууриа тавьсан.",
    //   },
    //   {
    //     year: "2026",
    //     title: "Бүтээгч болох шийдвэр",
    //     description:
    //       "Зүгээр л 'хэрэглэгч' байхаас 'бүтээгч' болохыг сонгосон. Инженерийн замналдаа өөрийгөө зориулахаар Монголдоо буцаж ирсэн.",
    //   },
    //   {
    //     year: "Одоо",
    //     title: "IO Institute",
    //     description:
    //       "Эрчимтэй орчинд өдөр бүр хөгжиж, full-stack чадварыг эзэмшин, өчигдрийн сорилтыг өнөөдрийн чадвар болгон хувиргаж байна.",
    //   },
    //   {
    //     year: "Ирээдүй",
    //     title: "Global Developer",
    //     description:
    //       "Хил хязгаар, төхөөрөмжөөс үл хамааран өдөр тутмын амьдралыг шинэчлэх бүтээгдэхүүн бүтээхийг зорьж байна. Дэлхийн хэмжээний бүтээгч болох нь миний эрхэм зорилго.",
    //   },
    // ],
  },

  projects: {
    eyebrow: "",
    titleA: "",
    titleB: "Төслүүд",
    description:
      "Бүтэц, дизайн болон хөгжүүлэлт хүртэл бүгдийг ганцаараа хариуцан ажилласан. Ашиглахад хялбар байдал болон өнгө үзэмжийн аль алинд нь анхаарч бүтээдэг.",
    featuredEyebrow: "Featured",
    featuredTitle: "Гол төсөл",
    otherEyebrow: "Archive",
    otherTitle: "Бусад төслүүд",
    featuredBadge: "Онцлох",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    scopeLabel: "Хариуцсан хэсэг",
    focusLabel: "Анхаарсан зүйл",
    wipTitle: "Хийж байгаа төслүүд",
    wipStatus: "Хөгжүүлж байна",
    status: {
      Completed: "Дууссан",
      "In Progress": "Хөгжүүлж байна",
    },
    items: {
      "workout-log": {
        title: "Workout Log",
        description:
          "Ачааллын анализ болон дасгалын удирдлага бүхий full-stack tracking app.",
        summary:
          "Next.js, Prisma, болон PostgreSQL ашиглан бүтээсэн. Ойлгомжтой UX, цэвэр UI-д төвлөрч, дасгалын удирдлага болон долоо хоногийн ачааллыг графикаар харуулах боломжтой.",
        scope:
          "Бүтэц, дизайн, frontend, backend, DB загвар, deploy хүртэл бүгдийг ганцаараа хариуцсан.",
        focus:
          "Бүртгэхэд хялбар байдал болон 7 хоногийн графикийн ойлгомжтой байдал. Үргэлжлүүлэн ашиглах сэдэл төрүүлэх UI бүтээхийг зорьсон",
      },
      "soul-skin-brand-lookbook": {
        title: "Soul Skin Brand Lookbook",
        description:
          "Брэндийн өнгө төрхийг визуал хэлбэрээр илэрхийлэх Lookbook сайт.",
        summary:
          "Шууд худалдааны сайт биш, харин брэндийн дүр төрхийг танилцуулж, Instagram болон холбоо барих хэсэг рүү чиглүүлэх урсгалыг бодож хийсэн lookbook төрлийн сайт.",
        scope:
          "Дизайн, frontend хэрэгжүүлэлт, контент бүтэц, deploy хүртэл ганцаараа хариуцсан.",
        focus:
          "Брэндийн уур амьсгалыг visual-аар  дамжуулах, мөн SNS болон холбоо барих хэсэг рүү чиглэх энгийн бөгөөд ойлгомжтой урсгал гаргах.",
      },
    },

    wip: {
      items: {
        lookbook: {
          title: "Lookbook сайт",
          description:
            "Хувцасны брэндийн ертөнцийг visual-аар илэрхийлэх lookbook сайт.",
        },
        portfolio: {
          title: "Portfolio сайжруулалт",
          description:
            "Энэ сайтыг дизайн, UX, гүйцэтгэлийн талаас сайжруулж байна.",
        },
        "local-business": {
          title: "Жижиг бизнесийн сайт",
          description:
            "Жижиг дэлгүүр, бизнесүүдэд зориулсан энгийн, хялбар вебсайт.",
        },
      },
    },
  },

  blog: {
    filterLabel: "Tag-аар шүүх",
    browseTitle: "Нийтлэлүүд",
    backToAllPosts: "Бүх нийтлэл рүү буцах",
    breadcrumbHome: "Нүүр",
    breadcrumbBlog: "Блог",
    breadcrumbAria: "Breadcrumb",
    toc: "Гарчиг",
    tocItemAria: "Гарчиг руу очих",
    related: "Төстэй нийтлэлүүд",
    readMore: "Цааш унших",
    allTags: "Бүгд",
    noPostsTitle: "Нийтлэл олдсонгүй.",
    noPostsDescription: "Өөр tag сонгоод үзээрэй.",
    copyCode: "Хуулах",
    copiedCode: "Хуулсан",
    copyCodeAria: "Code хуулах",
    untitled: "Гарчиггүй нийтлэл",
    uncategorized: "Ангилагдаагүй",
    noSummary: "Товч тайлбар удахгүй нэмэгдэнэ.",
    noDate: "Огноо тохируулагдаагүй",
    minRead: (minutes: number) => `${minutes} минут уншина`,
    notFoundTitle: "Нийтлэл олдсонгүй | Zaya-dev",
    categoryLabels: {
      cloud: "Cloud",
      frontend: "Frontend",
      engineering: "Engineering",
      diary: "",
    },
  },

  services: {
    title: "Үйлчилгээ ба Үнэ",
    subtitle:
      "Хувиараа бизнес эрхлэгчид, жижиг дэлгүүр болон бүтээгчдэд зориулан — хэрэглэгчдийг татах вэбсайтыг эхнээс нь загварчилж бүтээнэ.",
    intro:
      "Landing page, компанийн танилцуулга сайтаас эхлээд admin dashboard, login систем, олон хэлний тохиргоо зэрэг — танд зөвхөн юу хэрэгтэй байна, түүнийг л хэрэгжүүлнэ.",
    ctaLabel: "Холбоо барих",
    bottomCtaTitle: "Зөвхөн зөвлөгөө авсан ч болно",
    bottomCtaText:
      "Ямар сайт хийлгэхээ бүрэн шийдээгүй байсан ч санаа зоволтгүй. Таны зорилго болон төсөвт тань тохируулан ямар бүтэцтэй байхыг хамтдаа тодорхойлно.",
    introNote: "Зөвхөн эхний 5 төсөлд зориулсан урамшууллын үнэ.",
    plans: {
      simple: {
        name: "Simple LP",
        price: "400,000₮〜520,000₮",
        description:
          "Хамгийн энгийн бүтэц. 1 хуудсанд үйлчилгээ болон дэлгүүрийнхээ давуу талыг багтаасан, энгийн LP багц.",
        details: [
          "1 хуудас (LP)",
          "Custom design",
          "SNS холбоос",
          "Responsive загвар",
          "Үндсэн SEO",
          "Сард 1 удаа жижиг засвар",
        ],
        timeline: "Ойролцоогоор 7–14 хоног",
        note: "Текст болон зургийн материалыг урьдчилан бэлдсэн тохиолдолд ажил илүү хурдан явагдана.",
      },
      starter: {
        name: "Starter Website",
        badge: "Онцлох",
        price: "1,200,000₮〜2,000,000₮ ",
        description: "Бизнесээ бүрэн танилцуулах боломжтой, онцлох багц.",
        details: [
          "3–4 хуудас",
          "Оригинал дизайн",
          "Мэдээ оруулах функц",
          "SNS холбоос",
          "Responsive загвар",
          "Үндсэн SEO тохиргоо",
          "Сард 2 удаа жижиг засвар",
        ],
        timeline: "Ойролцоогоор 3–4 долоо хоног",
        note: "Мэдээлэл шинэчлэх хэсгийг багтаасан тул сайт нээгдсэний дараа ч ашиглахад хялбар үндсэн бүтэцтэй байна.",
      },
      custom: {
        name: "Custom Development",
        price: "2,500,000₮〜 эхлэн (Зөвшилцөнө)",
        description:
          "Тусгай функц шаардлагатай вэбсайт болон Web app хэрэгтэй хүмүүст зориулав.",
        details: [
          "Login систем",
          "Admin дэлгэц",
          "Database холболт",
          "Төлбөрийн систе",
          "Нарийвчилсан animation",
          "Олон хэлний тохиргоо",
          "API холболт гэх мэт",
        ],
        note: "Таны шаардлагын дагуу тусгайлан загварчилна.",
      },
    },
    targetAudience: {
      title: "Ийм хүмүүст санал болгож байна",
      items: [
        "Зөвхөн social media ашиглан харилцагч татах нь хангалтгүй санагдаж байгаа хүмүүст",
        "Бизнес, үйлчилгээнийхээ үнэ цэнийг зөв, бүрэн дүүрэн таниулахыг хүсч буй хүмүүст",
        "Бэлэн template биш, яг өөрийн бизнест тохирсон сайттай болохыг хүссэн хүмүүст",
        "Зардлаа аль болох хэмнэнгээ өндөр чанартай сайт хийлгэхийг хүссэн хүмүүст",
        "Сайтаа нээсний дараа ч зөвлөлдөж, тасралтгүй сайжруулалт хийхийг хүсдэг хүмүүст",
      ],
    },
    reasons: {
      title: "Яагаад намайг сонгох хэрэгтэй вэ?",
      items: [
        {
          title: "100% Custom дизайн",
          description:
            "Бэлэн template ашиглахгүй! Таны бизнес, зорилтот хэрэглэгчдэд зориулсан custom шийдлийг тэгээс төлөвлөж бүтээнэ.",
        },
        {
          title: "Үр дүнд чиглэсэн дизайн",
          description:
            "Зөвхөн өнгө үзэмж бус, бодит үр дүнд чиглэж — захиалга, холбоо барих сэдлийг төрүүлэх CTA, copy текст болон хуудасны урсгалыг зохиодог.",
        },
        {
          title: "Бага зардлаар өндөр чанар",
          description:
            "Cost-effective & High-quality эхний төслүүддээ зах зээлийн хамгийн боломжит үнийг санал болгох байна",
        },
        {
          title: "Тогтмол харилцаа",
          description:
            "Хөгжүүлэлтийн явцад тогтмол feedback авч, таны санааг эцсийн бүтээгдэхүүнд бүрэн дүүрэн тусгана.",
        },
      ],
    },
    philosophy: {
      title: "Миний баримталдаг зарчим",
      items: [
        {
          title: "Таны бизнесийг ойлгох",
          description:
            "Таны бизнесийн зорилго, өрсөлдөгчдийн судалгаанд үндэслэн дээр вэбсайтынхаа стратегийг нарийн тодорхойлно.",
        },
        {
          title: "Conversion-focused architecture",
          description:
            "Мэдээллийн дараалал, товчны байршил, хэрэглэгчийн урсгалыг нарийн тооцоолж, хэрэглэгч хэзээ ч төөрөхгүй байх нөхцөлийг бүрдүүлнэ.",
        },
        {
          title: "Дизайн ба Хэрэглээ ",
          description:
            "Том дэлгэц дээр гоё харагдхаас гадна гар утас дээрх уншигдах байдал, текстийн тод байдал, ашиглахад хялбар байдлыг нэн тэргүүнд тавьдаг.",
        },
      ],
    },
    process: {
      title: "Үйлчилгээний явагдах дараалал",
      steps: [
        {
          title: "Холбоо барих",
          description:
            "Эхлээд таны хийлгэхийг хүсэж буй website-ийн агуулга, зорилго, төсвийн талаар товч асууна.",
        },
        {
          title: "Hearing",
          description:
            "Бизнесийн чиглэл, target audience, шаардлагатай хуудас болон function-уудыг тодруулна.",
        },
        {
          title: "Үнийн санал",
          description:
            "Агуулгад тохируулан production scope, үнэ, хугацааг тооцон танилцуулна.",
        },
        {
          title: "Хөгжүүлэлт",
          description:
            "Сайтын бүтэц, дизайн, хөгжүүлэлтийг гүйцэтгэнэ. Шаардлагатай бол явцыг танилцуулна.",
        },
        {
          title: "Хяналт & Засвар",
          description:
            "Сайтыг нээхийн өмнө та хянаж үзэх бөгөөд шаардлагатай өөрчлөлтүүдийг хийнэ.",
        },
        {
          title: "Нээлт & Дэмжлэг",
          description:
            "Сайтыг амжилттай нийтэлж хүлээлгэн өгөх ба цаашдын засвар, шинэчлэлт дээр туслах боломжтой.",
        },
      ],
    },
    fees: {
      title: "Төлбөрийн бүтэц",
      description:
        "Таны төслийн онцлогоос хамаарч үндсэн багцын үнээс гадна дараах зардлууд гарч болно.",
      production: {
        title: " Production fee",
        description: "Website бүтээх зардал. Дээрх үнэ нь production fee юм.",
      },
      maintenance: {
        title: "Арчилгааны зардал",
        description:
          "Сайтыг нийтэлсэний дараа жижиг засвар оруулах,шинэчлэхэд гарах сарын эсвэл жилийн зардал.",
      },
      external: {
        title: "Гадны зардал",
        description:
          "Domain, hosting болон бусад 3-дагч талын үйлчилгээний төлбөрүүд.",
      },
      delivery: {
        title: "Хүлээлгэн өгөх талаар",
        description:
          "Production дууссаны дараа таны дизайн, контентыг бүрэн суулгасан кодыг хүлээлгэн өгнө. Нээлтийн дараах засвар, арчилгаа болон нэмэлт дэмжлэгт тусдаа арчилгааны зардал тооцогдоно.",
      },
    },
    faq: {
      title: "Түгээмэл асуултууд",
      items: [
        {
          question: "Хэдэн удаа засвар хийлгэж болох вэ?",
          answer:
            "Сонгосон багцаас хамаарна. Жижиг хэмжээний засварууд багцын хүрээнд хийгдэнэ. Харин сайтын үндсэн бүтцийг өөрчлөх, цоо шинэ функц нэмэх тохиолдолд тусдаа тооцогдоно.",
        },
        {
          question: "Төлбөрөө хэзээ төлөх вэ?",
          answer:
            "Ерөнхийдөө хөгжүүлэлт эхлэхийн өмнө урьдчилгаа, ажлыг хүлээлгэн өгөхөөс өмнө үлдэгдэл төлбөрийг төлнө. Таны төслийн онцлогт тохируулан харилцан тохиролцож болно.",
        },
        {
          question: "Domain болон server-ийг яах вэ?",
          answer:
            "Domain, server зэрэг гадаад зардал нь production fee-гээс тусдаа байна. Шаардлагатай бол олж авах, тохиргоо хийхэд тусалж чадна.",
        },
        {
          question: "Сайт нээгдсэний дараа контентоо өөрөө шинэчилж болох уу?",
          answer:
            "Мэдээллийн удирдлагын функцтэй (CMS) бол зарим контентыг өөрөө шинэчлэх боломжтой. Харин үндсэн статик хуудсуудын өөрчлөлт нь арчилгааны хүрээнд хийгдэнэ.",
        },
        {
          question: "Эцсийн үр дүнд юу хүлээлгэн өгөх вэ?",
          answer:
            "Таны дизайн болон контентыг суулгасан бүрэн хэмжээний эх кодыг хүлээлгэн өгнө. Мөн сайтыг нийтлэх болон цаашдын дэмжлэг дээр хамтран ажиллаж болно.",
        },
        {
          question: "Яагаад ийм хямд байна вэ?",
          answer:
            "Энэ нь зөвхөн эхний 5 харилцагчид зориулагдсан урамшууллын үнэ юм. Цаашид төслийн тоо нэмэгдэхийн хэрээр үнэнд өөрчлөлт орох болно.",
        },
        {
          question: "Сайтад орох зураг, текстийг өөрөө бэлдэх хэрэгтэй юу?",
          answer:
            "Үндсэн бичвэр болон зургийг харилцагч та өөрөө бэлдэхийг хүсэж байна. Гэхдээ юу бичихээ мэдэхгүй байгаа тохиолдолд, анхны ярилцлагаар дамжуулан хамтдаа агуулгыг боловсруулах боломжтой.",
        },
      ],
    },
  },

  contact: {
    eyebrow: "Холбоо барих",
    titleA: "Таны бизнест тохирсон",
    titleB: "вебсайт бүтээнэ",
    description:
      "Хэрэглэгч татах, итгэл төрүүлэх, холбоо барих урсгалыг ойлгомжтой болгоход чиглэсэн вебсайтыг дизайн болон хөгжүүлэлтээр нь бүрэн гүйцэтгэнэ. Landing page, байгууллагын сайт, портфолио, жижиг хэмжээний веб апп хүртэл хийх боломжтой.",

    primaryLabel: "Үнэгүй зөвлөгөө",
    primaryTitle: "Эхлээд имэйлээр зөвлөлдөх",
    primaryDescription: `"Яг ямар вэб хуудас хийхээ сайн ойлгохгүй байна" ,  "Төсөвтөө багтаан юу хийж болохыг мэдэхийг хүсэж байна" гэх мэт асуултууд байвал нэрэлхэлгүй шууд холбогдоод асуугаарай!`,

    emailLabel: "Имэйл хаяг",
    copy: "Хаягийг хуулах",
    copied: "Хууллаа",
    send: "Имэйл илгээх",
    viewProjects: "Хийсэн ажлуудыг үзэх",

    socialTitle: "SNS",
    connectVia: "",

    availabilityLabel: "Шинэ захиалга авч байна",
    availability:
      "Жижиг бизнес, хувиараа ажилладаг хүмүүс болон бүтээлч хүмүүст зориулж, ойлгомжтой, үр дүнтэй, боломжийн үнэтэй вебсайт хийж байна.",

    form: {
      nameLabel: "Нэр",
      namePlaceholder: "Таны нэр",
      emailLabel: "Имэйл",
      emailPlaceholder: "you@example.com",
      messageLabel: "Мессеж",
      messagePlaceholder: "Төслийн тухай товч мэдээлнэ үү.",
      sending: "Илгээж байна...",
      submit: "Илгээх",
      success: "Таны мессеж амжилттай илгээгдлээ.",
      error: "Илгээхэд алдаа гарлаа. Дахин оролдоно уу.",
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
    title: "Website preview system",
    browserUrl: "ezaya.dev / preview",
    items: ["Website", "Dashboard", "Content DB", "JP / MN / EN"],
    captions: [
      "Clear business website with CTA",
      "Simple admin-style dashboard",
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
        titleHighlight: "small brands",
        titleAfter: "",
        description:
          "Design, content structure, and implementation\nbuilt to help visitors take action.",
        primaryCta: "Start Project",
        secondaryCta: "View Works",
        stat: "+42%",
        live: "PREVIEW",
        features: ["CTA Design", "Responsive UI", "Basic SEO"],
        socialProofNumber: "3 LANG",
        socialProofText: "JA / MN / EN ready",
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
