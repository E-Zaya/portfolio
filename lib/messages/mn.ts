import type { HeroVisualContent, Messages } from "./types";

export const mn = {
  meta: {
    title: "Zaya | AI-Driven Full-Stack Developer (Next.js, Олон хэлтэй)",
    description:
      "Монгол, Япон, Англи хэлтэй AI-driven full-stack хөгжүүлэгч. Next.js ашиглан олон улсад зориулагдсан, хурдан бөгөөд чанартай web application бүтээнэ.",
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

    techLine: "Үнэгүй зөвлөгөө · Хамгийн хурдтай 7 хоногийн дотор · JP/MN",
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
    title: "Хэрэглэгчээс Бүтээгч рүү",
    paragraphs: [
      "Хөгжүүлэгчийн хувьд миний зорилго бол технологийн түгээмэл хэлээр дамжуулан соёл, хэлний хязгаарыг арилгах явдал юм. Өөрийн олон хэлний мэдлэгтээ тулгуурлан, аль ч соёлын хэрэглэгчдэд ойлгомжтой, тасралтгүй digital experience бүтээхийг зорьдог.",
      "Японд 10 жил амьдарсны дараа Web Developer болох замаа тууштай хөөхөөр Монголдоо буцаж ирсэн. Одоогоор IO Institute-ийн эрчимжүүлсэн хөтөлбөрт хамрагдаж, modern web development чадвараа өдөр бүр сайжруулж байна.",
      "Японд өнгөрүүлсэн хугацаа маань надад төрөлх хэл шиг түвшний мэдлэг олгосон. Энэ нь Японы баялаг техникийн documentation болон community-д гүнзгий нэвтрэх, мөн Англи хэлээр дамжуулан дэлхийн чиг хандлагатай хөл нийлүүлэн алхах онцгой давуу талыг надад өгдөг. Би энэхүү хос өнцгөө ашиглан аливаа асуудалд хамгийн шилдэг шийдлийг олохыг хичээдэг.",
    ],
    strengthsEyebrow: "Давуу тал",
    strengthsTitle: "Миний санал болгох үнэ цэнэ",
    strengths: [
      {
        title: "Олон хэлээрх техникийн судалгаа",
        description:
          "Япон болон Англи хэл дээрх техникийн documentation-ийг чөлөөтэй уншиж, хэлний хязгаарлалтгүйгээр гүнзгий судалгаа хийн, хамгийн үр дүнтэй шийдлийг хэрэгжүүлж чадна.",
      },
      {
        title: "Frontend хөгжүүлэлт",
        description:
          "Next.js болон React дээр төвлөрч, зөвхөн цэвэрхэн, modern төдийгүй ашиглахад маш хялбар interface бүтээхийг зорьдог.",
      },
      {
        title: "Нарийвчлал ба Хариуцлага",
        description:
          "Японд өнгөрүүлсэн 10 жил маань надад нарийвчлал болон мэргэжлийн хариуцлагын үнэ цэнийг гүн суулгасан. Зөвхөн код бичихээс гадна, багийн амжилтыг баталгаажуулахын тулд ойлгомжтой харилцаа, нарийвчилсан documentation-ийг чухалчилдаг.",
      },
    ],
    journeyEyebrow: "Замнал",
    journeyTitle: "Миний туулсан зам",
    journey: [
      {
        year: "2016",
        title: "Япон дахь эхлэл",
        description:
          "Япон руу нүүж, дараагийн 10 жилийн турш соёл хоорондын ойлголцол, глобал сэтгэлгээний сууриа тавьсан.",
      },
      {
        year: "2026",
        title: "Бүтээгч болох шийдвэр",
        description:
          "Зүгээр л 'хэрэглэгч' байхаас 'бүтээгч' болохыг сонгосон. Инженерийн замналдаа өөрийгөө зориулахаар Монголдоо буцаж ирсэн.",
      },
      {
        year: "Одоо",
        title: "IO Institute",
        description:
          "Эрчимтэй орчинд өдөр бүр хөгжиж, full-stack чадварыг эзэмшин, өчигдрийн сорилтыг өнөөдрийн чадвар болгон хувиргаж байна.",
      },
      {
        year: "Ирээдүй",
        title: "Global Developer",
        description:
          "Хил хязгаар, төхөөрөмжөөс үл хамааран өдөр тутмын амьдралыг шинэчлэх бүтээгдэхүүн бүтээхийг зорьж байна. Дэлхийн хэмжээний бүтээгч болох нь миний эрхэм зорилго.",
      },
    ],
  },

  projects: {
    eyebrow: "Projects",
    titleA: "Онцлох",
    titleB: "Төслүүд",
    description:
      "Бодит хэрэглээ, хурд, цэвэр UI design-д төвлөрсөн төслүүдийн түүвэр. Төсөл бүр нь засварлахад хялбар, өргөтгөх боломжтой код бичих миний тууштай байдлыг илтгэнэ.",
    featuredEyebrow: "Featured",
    featuredTitle: "Гол төсөл",
    otherEyebrow: "Archive",
    otherTitle: "Бусад төслүүд",
    featuredBadge: "Онцлох",
    liveDemo: "Live Demo",
    viewCode: "View Code",
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
      },
      "soul-skin-brand-lookbook": {
        title: "Soul Skin Brand Lookbook",
        description:
          "Soul Skin брэндийн өнгө төрх, уур амьсгал, visual identity-г харуулах зориулалттай lookbook вебсайт.",
        summary:
          "Шууд худалдааны сайт биш, харин брэндийн дүр төрхийг танилцуулж, Instagram болон холбоо барих хэсэг рүү чиглүүлэх урсгалыг бодож хийсэн lookbook төрлийн сайт.",
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
      diary: "Тэмдэглэл",
    },
  },

  services: {
    title: "Үйлчилгээ ба Үнэ",
    subtitle:
      "Freelancer, жижиг бизнес болон бүтээгчдэд зориулан — бодит үр дүнд хүргэх вэбсайтыг эхнээс нь загварчилж бүтээнэ.",
    intro:
      "Landing page, компанийн танилцуулга сайтаас эхлээд admin dashboard, login систем, олон хэлний дэмжлэг зэрэг — танд зөвхөн юу хэрэгтэй байна, түүнийг л хэрэгжүүлнэ.",
    ctaLabel: "Холбоо барих",
    bottomCtaTitle: "Зөвхөн зөвлөгөө авахаас эхэлсэн ч болно",
    bottomCtaText:
      "Шаардлага тань бүрэн тодорхой болоогүй байсан ч санаа зоволтгүй. Таны зорилго, төсөвт тулгуурлан бүтцийг хамтдаа тодорхойлох болно.",
    introNote: "Зөвхөн эхний 5 төсөлд зориулсан урамшууллын үнэ.",
    plans: {
      simple: {
        name: "Simple LP",
        price: "600,000₮〜720,000₮ (НӨАТ орсон)",
        description:
          "Хамгийн энгийн бүтэц. Хурдан бөгөөд энгийн Landing page хэрэгтэй хүмүүст зориулав.",
        details: [
          "1 хуудас (LP)",
          "Custom design",
          "SNS холбоос",
          "Responsive загвар",
          "Үндсэн SEO",
          "Сард 1 удаа жижиг засвар",
        ],
        timeline: "Ойролцоогоор 7–14 хоног",
        note: "Зөвхөн эхний 5 төсөлд зориулсан урамшууллын үнэ.",
      },
      starter: {
        name: "Starter Website",
        badge: "Санал болгох",
        price: "1,500,000₮〜2,000,000₮ (НӨАТ орсон)",
        description:
          "Бизнесээ зөв боловсон танилцуулахад хамгийн тохиромжтой багц.",
        details: [
          "3–4 хуудас",
          "Custom design",
          "Мэдээний удирдлага",
          "SNS холбоос",
          "Responsive загвар",
          "Үндсэн SEO тохиргоо",
          "Сард 2 удаа жижиг засвар",
        ],
        timeline: "Ойролцоогоор 3–4 долоо хоног",
        note: "Бизнесийн мэдээлэл, portfolio, холбоо барих хуудсуудыг багтаасан практик сайт. Мэдээллээ өөрөө хялбархан шинэчлэх боломжтой.",
      },
      custom: {
        name: "Custom Development",
        price: "2,500,000₮ эхлэн (Зөвшилцөнө)",
        description:
          "Олон үйлдэлт вэбсайт эсвэл web app хэрэгтэй хүмүүст зориулав.",
        details: [
          "Login систем",
          "Admin dashboard",
          "Database интеграци",
          "Төлбөрийн интеграци",
          "Нарийвчилсан animation",
          "Олон хэлний дэмжлэг",
          "API интеграци",
        ],
        note: "Таны шаардлагын дагуу загварчилж, хөгжүүлнэ. Login, төлбөр тооцоо, database-тэй холбох зэрэг цогц үйлдлүүдийг гүйцэтгэнэ.",
      },
    },
    targetAudience: {
      title: "Хэнд илүү тохиромжтой вэ?",
      items: [
        "Зөвхөн social media ашиглан харилцагч татах нь хангалтгүй санагдаж байгаа хүмүүст",
        "Бизнес, үйлчилгээнийхээ үнэ цэнийг зөв, бүрэн дүүрэн таниулахыг хүсч буй хүмүүст",
        "Бэлэн template биш, яг өөрийн бизнест тохирсон сайттай болохыг хүссэн хүмүүст",
        "Зардлаа аль болох хэмнэхийн сацуу өндөр чанартай сайт хийлгэхийг хүссэн хүмүүст",
        "Сайтаа нээсний дараа ч зөвлөлдөж, тасралтгүй сайжруулалт хийхийг хүсдэг хүмүүст",
      ],
    },
    reasons: {
      title: "Яагаад намайг сонгох хэрэгтэй вэ?",
      items: [
        {
          title: "Эхнээс нь тусгайлан загварчилна",
          description:
            "Бэлэн template-ийг шууд ашиглахын оронд таны бизнес, зорилтот хэрэглэгч, зорилгод тулгуурлан бүтцийг төлөвлөдөг.",
        },
        {
          title: "Үр дүнд чиглэсэн дизайн",
          description:
            "Зөвхөн өнгө үзэмж бус, бодит үр дүнд чиглэж — захиалга, холбоо барих сэдлийг төрүүлэх CTA, copy текст болон хуудасны урсгалыг зохиодог.",
        },
        {
          title: "Бага зардлаар өндөр чанар",
          description:
            "Эхний хэдэн төсөлд зориулсан урамшууллын үнээр, агентлагийн түвшний чанартай ажлыг хамгийн боломжит бага үнээр гүйцэтгэнэ.",
        },
        {
          title: "Тогтмол харилцаа",
          description:
            "Хөгжүүлэлтийн явцад тогтмол холбоотой байх тул эцсийн үр дүн таны хүлээлтэд бүрэн нийцэх болно.",
        },
      ],
    },
    philosophy: {
      title: "Миний баримталдаг зарчим",
      items: [
        {
          title: "Таны бизнесийг ойлгох",
          description:
            "Таны үйлчилгээ, давуу тал, зорилтот хэрэглэгч болон өрсөлдөгчдийг судалсны үндсэн дээр вэбсайт юуг өгүүлэх ёстойг тодорхойлно.",
        },
        {
          title: "Захиалгад хөтлөх бүтэц",
          description:
            "Мэдээллийн дараалал, товчны байршил, хэрэглэгчийн урсгалыг нарийн тооцоолж, хэрэглэгч хэзээ ч төөрөхгүй байх нөхцөлийг бүрдүүлнэ.",
        },
        {
          title: "Дизайн ба Хэрэглээний тэнцвэр",
          description:
            "Гоо зүйн үзэмжээс гадна гар утас дээрх уншигдах байдал, текстийн тод байдал, ашиглахад хялбар байдлыг нэн тэргүүнд тавьдаг.",
        },
      ],
    },
    process: {
      title: "Хэрхэн ажиллах вэ?",
      steps: [
        {
          title: "Холбогдох",
          description:
            "Ямар зорилготой, ямархуу сайт хийлгэх хүсэлтэй байгаагаа болон төсвийн хамт товч мэдээлнэ үү.",
        },
        {
          title: "Судалгаа & Шаардлага",
          description:
            "Таны бизнес, зорилтот хэрэглэгчид, шаардлагатай хуудас болон функцүүдийг хамтдаа тодорхойлно.",
        },
        {
          title: "Үнийн санал",
          description:
            "Ажлын цар хүрээ, үнэ, хуваарийг нэгтгэн тооцоолж санал илгээнэ.",
        },
        {
          title: "Хөгжүүлэлт",
          description:
            "Сайтын бүтэц, дизайн, хөгжүүлэлтийг гүйцэтгэнэ. Шаардлагатай үед явцыг танилцуулна.",
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
      title: "Зардлын задаргаа",
      description:
        "Таны төслийн онцлогоос хамаарч үндсэн багцын үнээс гадна дараах зардлууд гарч болно.",
      production: {
        title: "Үйлдвэрлэлийн зардал",
        description:
          "Вэбсайтыг бүтээх үндсэн зардал. Дээрх багцын үнүүд нь үйлдвэрлэлийн зардал юм.",
      },
      maintenance: {
        title: "Арчилгааны зардал",
        description:
          "Сайтын аюулгүй байдлыг хангах, тогтмол шинэчлэхэд гарах сарын эсвэл жилийн зардал.",
      },
      external: {
        title: "Гадны зардал",
        description:
          "Domain, hosting болон бусад 3-дагч талын үйлчилгээний төлбөрүүд.",
      },
      delivery: {
        title: "Хүлээлгэн өгөх талаар",
        description:
          "Үйлдвэрлэл дууссаны дараа таны дизайн, контентыг бүрэн суулгасан кодыг хүлээлгэн өгнө. Нээлтийн дараах засвар, арчилгаа болон нэмэлт дэмжлэгт тусдаа арчилгааны зардал тооцогдоно.",
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
          question: "Domain болон Hosting хэрхэх вэ?",
          answer:
            "Domain, hosting нь үйлдвэрлэлийн зардлаас тусдаа гадны зардал болно. Хэрэв танд хэрэгтэй бол тохируулахад нь туслах бүрэн боломжтой.",
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
      "Жижиг бизнес, хувиараа ажилладаг хүмүүс болон бүтээлч хүмүүст зориулж, ойлгомжтой, үр дүнтэй, боломжийн үнэтэй вебсайт хийж өгнө.",

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
