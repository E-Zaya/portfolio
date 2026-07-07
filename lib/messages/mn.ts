import type { HeroVisualContent, Messages } from "./types";

export const mn = {
  meta: {
    title: "Zaya | Сонгогдох нүүр царай, хөнгөвчлөх систем — Вэб＆апп",
    description:
      "Захиалга, тооцоо, олон хэлний дэмжлэг. Жижиг бизнесийн «сонгогдох нүүр царай» ба «ажлыг хөнгөвчлөх систем»-ийг загвараас нь эхлээд нээлтийн дараа ч хамт байж бүтээнэ. Япон, монгол, англи хэлээр.",
    pages: {
      about: {
        title: "Миний тухай — Туршлага, ур чадвар",
        description:
          "Улаанбаатарт төвтэй AI-Native Product Engineer Zaya. Туршлага, техник стек (Next.js / TypeScript), жижиг бизнест зориулж бүтээх арга барил. Япон, монгол, англи хэлээр.",
      },
      projects: {
        title: "Бүтээлүүд — Вэб ба апп төслүүд",
        description:
          "Вэб сайт болон вэб аппын төслүүд — загвараас нь эхлээд нээлтийн дараах дэмжлэг хүртэл, ашигласан технологийн хамт.",
      },
      services: {
        title: "Үйлчилгээ ба үнэ",
        description:
          "Вэб・апп хөгжүүлэлтийн үйлчилгээ: явц, үнэ, хугацааны баримжаа. Захиалга, тооцоо, олон хэлний дэмжлэг — ажлыг хөнгөвчлөх систем.",
      },
      contact: {
        title: "Холбоо барих",
        description:
          "Төслийн зөвлөгөө, үнийн санал энд. Япон, монгол, англи хэлээр. Ихэвчлэн ажлын 1–2 өдөрт хариулна.",
      },
      blog: {
        title: "Блог — Вэб хөгжүүлэлтийн тэмдэглэл",
        description:
          "Вэб ба апп бүтээх, бүтээгдэхүүний шийдвэр, олон хэлт сайт ажиллуулах тухай тэмдэглэлүүд.",
      },
    },
  },

  header: {
    subtitle: "AI-Native Product Engineer",
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
    eyebrow: "/ Илүү сонгогдох / Илүү хөнгөн /",
    title: "Танай бизнес\nилүү сонгогдоно.\n",
    highlight: "Ажил тань\nилүү хөнгөн болно.",
    description:
      "Итгэл төрүүлэх «нүүр царай» ба өдөр тутмын ажлыг хөнгөвчлөх «систем».\nЗахиалга авах, тооцоо бодох, гадаад үйлчлүүлэгчтэй харилцах — хэцүү хэсэг нь бүгд миний ажил.",
    badges: ["Custom Design", "Fast Delivery", "Practical Features"],
    primaryCta: "Үнэгүй зөвлөгөө",
    secondaryCta: "Төслүүд үзэх",

    meta: {
      status: "Шинэ төсөл дээр ажиллахад бэлэн · 2026.07",
      focus: "Websites & Web Apps",
      location: "Улаанбаатар",
    },

    techLine: "Үнэгүй зөвлөгөө · 7 хоногийн дотор · JP/MN",
    visualHint: "Би эдгээрийг бүгдийг нь хийж чадна",
    showcase: {
      liveBadge: "Яг одоо ажиллаж байна",
      open: "Бодит сайтыг үзэх",
      laptopLabel: "«Сонгогдоно» — бодит жишээ",
      laptopCaption:
        "Гадаад зочид өөрийн хэлээр уншиж, шууд захиалга өгдөг аяллын сайт",
      phoneLabel: "«Хөнгөн болно» — бодит жишээ",
      phoneCaption: "Ажлын бүртгэл 3 секунд. App Store / Google Play дээр",
      phoneTimerLabel: "Өнөөдөр",
      phoneRows: [
        { name: "Дизайн", value: "3.2h" },
        { name: "Хөгжүүлэлт", value: "4.5h" },
      ],
      handNote: "дараад үзээрэй!",
    },

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
    title: "Сайн байна уу, би Zaya.",
    paragraphs: [
      "Японд 10 жил амьдарсан. Жинхэнэ «бүтээдэг хүн» болохыг хүссэн учраас Монголдоо буцаж ирсэн.",
      "Одоо миний тусалдаг хүмүүс бол жижиг дэлгүүр, жижиг бизнес эрхлэгчид. Захиалгын утсанд баригдсан өдрүүд, сайн ажиллаж байгаа ч үнэ цэнэ нь харагддаггүй бухимдал — тийм «гацаа»-г вэб болон аппын хэлбэрээр тайлж өгөх нь миний ажил.",
      "Гайхалтай амлалт өгөхгүй. Гэхдээ таны яриаг анхааралтай сонсож, хамт бодож, нээлтийн дараа ч хажууд тань байхаа амлаж чадна. Япон, монгол, англи хэлний алинаар ч.",
    ],
    signature: "— Улаанбаатар дахь ажлын ширээнээсээ, Zaya",
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
    zaza: {
      name: "Zaza",
      role: "Дэмжигч (хамтрагч)",
      description:
        "Энэ сайтын өнцөг булангаас шагайдаг. Намайг ядарсан үед дэмжиж, . Намайг залхуурвал хуцдаг.",
    },
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
    kindLabels: {
      client: "Бодит захиалга",
      product: "Өөрийн бүтээгдэхүүн",
      sample: "Жишээ ажил",
    },
    liveLabel: "Ажиллаж байна",
    openLive: "Бодит сайтыг үзэх",
    detailHint: "Дэлгэрэнгүй",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    caseStudy: "Case study унших",
    scopeLabel: "Хариуцсан хэсэг",
    focusLabel: "Анхаарсан зүйл",
    behindLabel: "Ажлын ард талд",
    wipTitle: "Хийж байгаа төслүүд",
    wipStatus: "Хөгжүүлж байна",
    status: {
      Completed: "Дууссан",
      "In Progress": "Хөгжүүлж байна",
    },
    items: {
      "odootech-time": {
        title: "OdooTech Time",
        description:
          "GPS geofence, device binding, audit log ашиглан буруу болон орлох ирцийг хаадаг байгууллагын цаг бүртгэлийн mobile app.",
        tags: ["Бодит хэрэглээнд ажиллаж байна", "GPS geofence ирц", "iOS / Android release"],
        client: "OdooTech",
        summary:
          "Flutter mobile client болон Odoo 17 custom backend module дээр бүтсэн full-stack бүтээгдэхүүн. Check-in/out, ажлын бүс шалгах, чөлөөний хүсэлт, цалингийн мэдээлэл, ажлын тайлан, team функц, reminder, admin notification зэргийг хамарч, iOS болон Android дээр түгээгдсэн.",
        scope:
          "Flutter app architecture, Riverpod state management, Odoo JSON-RPC integration, Odoo 17 custom module, geofence, device binding, audit log, store release support хүртэл хариуцсан.",
        focus:
          "Ирц бүр зөв байршил, зөв төхөөрөмж, зөв үйлдлийн санаатай хийгдэх ёстой гэсэн зарчим. GPS, device ID, schedule, server-side intent validation, audit log-ийг давхарлуулж орлох ирц болон санамсаргүй toggle алдааг хаасан.",
        behind:
          ".mn домэйны DNS асуудлаас болж store review дээр login тасалдах эрсдэл гарсан. Үүнийг custom DNS-over-HTTPS client болон TLS/SNI зөв handling-аар шийдсэн.",
      },
      "overland-beyond": {
        title: "Overland Beyond",
        description:
          "Монголын аяллын уур амьсгал, олон хэлний мэдээлэл, захиалгын урсгалыг нэг дор цэгцэлсэн аяллын сайт.",
        tags: ["Олон хэлээр захиална", "Аяллын үнэ цэнэ тодорхой", "Odoo-с Next.js рүү"],
        client: "Overland Beyond",
        summary:
          "Odoo дээр байсан аяллын сайтыг Next.js рүү шилжүүлсэн. Expedition-ийн мэдээлэл, static pages, дэлгэрэнгүй хуудсууд болон apply хийх урсгалыг хадгалж, илүү уншихад ойлгомжтой, засварлахад хялбар бүтэц болгосон.",
        scope:
          "Одоо байгаа Odoo сайтын бүтэц унших, контент хөрвүүлэх, Next.js implementation, route/page structure, deploy бэлтгэл хүртэл хариуцсан.",
        focus:
          "Гадаад аялагчид аяллын мэдээллийг төөрөхгүй ойлгоод шууд apply хийх боломжтой байх. Том зурагны хүчийг хадгалж, хуудсуудыг засварлахад хялбар болгосон.",
        behind:
          "Odoo template-үүдийг задлахдаа, эх сайтын аяллын мэдрэмжийг Next.js дээр алдахгүй авчрахыг хамгийн их анхаарсан.",
      },
      futari: {
        title: "Futari",
        description:
          "Хосуудын өдрийн тэмдэглэл, зураг, хүсэл, тэмдэглэлт өдрийг зөвхөн хоёр хүнд зориулсан орчинд хадгалдаг Web app.",
        tags: ["Хосын хувийн орчин", "Зураг ба дурсамж цэгцтэй", "Invite link-ээр нэгдэнэ"],
        summary:
          "Хосуудад зориулсан multi-tenant Web app. Бүртгэл, partner invite, өдөр тутмын diary, wish list, memory calendar, gallery, slideshow lookback, PWA, Supabase тохируулаагүй үед local demo mode хүртэл оруулсан.",
        scope:
          "Product planning, UI дизайн, frontend, Supabase Auth / DB / Storage, RLS, PWA, demo mode storage хүртэл хариуцсан.",
        focus:
          "Хувийн дурсамж хадгалдаг апп учраас дулаахан UI-гаас гадна зөвхөн хоёр хүнд харагдах data separation, mobile дээр өдөр бүр ашиглахад хөнгөн урсгалыг чухалчилсан.",
        behind:
          "Зүгээр нэг мэдээлэл бүртгэх хэрэгсэл биш, буцаад ормоор санагддаг газар болгохын тулд үг, зай, жижиг хөдөлгөөн бүрийг зассан.",
      },
      "zaza-lab": {
        title: "Zaza Lab",
        description:
          "JLPT N1・N2-ийн ханз, үг, унших, сонсох, сул талын давтлагыг нэг дор хийдэг япон хэлний апп.",
        tags: ["Сул талаа давтана", "PWA learning flow", "Audio-той асуулт"],
        summary:
          "Япон хэл сурч буй хүмүүст зориулсан PWA. N1/N2 ханз, дөрвөн ханзтай хэлц, onomatopoeia, grammar, reading, listening, dictionary, progress, review, achievement, session restore, backup зэргийг нэг апп болгон нэгтгэсэн. Learning data болон audio assets-ийг local дээр хурдан ажиллахаар зохион байгуулсан.",
        scope:
          "Learning flow, quiz engine, dictionary, progress storage, PWA, audio integration, UI implementation хүртэл хариуцсан.",
        focus:
          "Сургалтын аппын хамгийн чухал нь дахин нээх хүсэл төрүүлэх. Тиймээс today's word, давтах зүйл, сул талын дасгал, жижиг амжилтын мэдрэмжийг богино урсгалд оруулсан.",
        behind:
          "Асуултын тоо их болох тусам апп хүнд санагдах эрсдэлтэй байсан тул, өдөр бүр нээхэд ядаргаагүй нягтралд тааруулсан.",
      },
      "workout-log": {
        title: "Workout Log",
        description:
          "Бүртгэл хэдхэн товшилт, ахиц нэг харцаар — үргэлжлүүлмээр санагдуулахаар бүтээсэн дасгалын бүртгэлийн апп.",
        tags: ["Хэдхэн товшилтоор бүртгэнэ", "Ахиц нэг харцаар"],
        summary:
          "Загвар, дизайн, хөгжүүлэлт, өгөгдлийн сан, нээлт хүртэл ганцаараа бүрэн хийсэн бүтээл. Хэдхэн товшилтоор дуусдаг бүртгэл, долоо хоногийн ахицыг нэг харцаар харуулдаг график — «гурав хоноод орхидог хүнд ч үргэлжилдэг» байхыг зорьж, өөрөө өдөр бүр хэрэглэж байж өнгөлсөн.",
        scope:
          "Бүтэц, дизайн, frontend, backend, DB загвар, deploy хүртэл бүгдийг ганцаараа хариуцсан.",
        focus:
          "Бүртгэхэд хялбар байдал болон 7 хоногийн графикийн ойлгомжтой байдал. Үргэлжлүүлэн ашиглах сэдэл төрүүлэх UI бүтээхийг зорьсон",
        behind:
          "Гурав хоноод л орхидог өөрийгөө туршилтын хулгана болгоод, UI-гаа дахин дахин шинээр хийсэн.",
        caseStudy: "workout-log-case-study",
      },
      "soul-skin-brand-lookbook": {
        title: "Soul Skin Brand Lookbook",
        description:
          "Юм зарахаасаа өмнө брэндийн ертөнцөд татан оруулж, сошиал болон холбоо барих руу жам ёсоор хөтөлдөг сайт.",
        tags: ["Уур амьсгалаар татдаг", "Сошиал руу хөтөлнө"],
        summary:
          "Шууд худалдааны сайт биш, харин брэндийн дүр төрхийг танилцуулж, Instagram болон холбоо барих хэсэг рүү чиглүүлэх урсгалыг бодож хийсэн lookbook төрлийн сайт.",
        scope:
          "Дизайн, frontend хэрэгжүүлэлт, контент бүтэц, deploy хүртэл ганцаараа хариуцсан.",
        focus:
          "Брэндийн уур амьсгалыг visual-аар  дамжуулах, мөн SNS болон холбоо барих хэсэг рүү чиглэх энгийн бөгөөд ойлгомжтой урсгал гаргах.",
        behind:
          "Зураг бүрийн эргэн тойрны зайг нэг нэгээр нь тааруулж, брэндийн уур амьсгалыг эвдэхгүй өнцгийг хайсаар байсан.",
        caseStudy: "soul-skin-project",
      },
      "type-mon": {
        title: "TypeMon",
        description:
          "Латинаар бичихэд кирилл монгол бичвэр болно — бичихийг хурдасгах үнэгүй хэрэгсэл.",
        tags: ["Бичих зуур хөрвүүлнэ", "Үнэгүй"],
        summary:
          "Next.js болон TypeScript ашиглан бүтээсэн. Latin-to-Cyrillic хөрвүүлэлт, history хадгалах, URL-аас text ачаалах, dark mode, Gemini API ашигласан засварлах функц болон Upstash Redis дээр суурилсан request limit-тэй.",
        scope:
          "Product idea, UI дизайн, frontend хэрэгжүүлэлт, API холболт, rate limit болон deploy хүртэл ганцаараа хариуцсан.",
        focus:
          "Латинаар бичиж дадсан монгол хэрэглэгчид кирилл текстийг хурдан, ойлгомжтой, өдөр тутамдаа ашиглахад хялбар байдлаар бэлтгэх боломж өгөх.",
        behind:
          "Шөнөжингөө хөрвүүлэлтийн хүснэгттэй үсэг үсгээр нь нүүр тулсан. Эх хэл минь учраас буулт хийж чадаагүй.",
        caseStudy: "type-mon-case-study",
      },
      "sui-salon": {
        title: "Sui Salon LP",
        description:
          "Уур амьсгалыг мэдрүүлээд шууд захиалга руу хөтөлдөг нэг хуудас. Гар утсанд эхэлж зориулан загварчилсан.",
        tags: ["Нэг хуудсаар захиалга хүртэл", "Гар утсанд ээлтэй"],
        summary:
          "Хувийн салоныг төсөөлж, Next.js болон Tailwind CSS-ээр эхнээс нь бүтээсэн single-page сайт. 30,000–40,000 JPY үнийн ангилалд бодитоор нийлүүлдэг ажлын хэмжээ, бүтэцтэй тааруулсан. Framer Motion ашиглан хөнгөн entry animation нэмж, салоны уур амьсгал, үнийн санал, хаяг болон захиалгын урсгалыг нэг хуудсанд эмх цэгцтэй цуглуулсан.",
        scope:
          "Бүтэц, дизайн, frontend хэрэгжүүлэлт болон responsive layout-ийг ганцаараа хариуцсан.",
        focus:
          "Үзэгчид уур амьсгалыг мэдэрч → үйлчилгээг ойлгож → захиалга өгөх тодорхой урсгал. Гар утсан дээрх уншихад хялбар байдал болон даралтад тав тухтай CTA-г нэн тэргүүнд авч үзсэн.",
        behind:
          "Захиалга дарах агшинд эрхий хуруу яг хаана байхыг төсөөлөөд, товчлуурыг тийш нь зөөсөн.",
      },
      suijaku: {
        title: "Suijaku",
        description:
          "Картаа эргүүлэх мэдрэмж, богино тоглолт, хувийн рекорд хадгалах боломжтой memory card game.",
        tags: ["Шууд тоглоно", "Рекорд хадгална", "Mobile ready"],
        summary:
          "Next.js дээр хийсэн memory card game. Start screen, play state, clear result, leaderboard, localStorage record зэрэгтэй. Богино хугацаанд олон дахин тоглоход хөнгөн байхаар бүтээсэн.",
        scope:
          "Game UI, card state management, scoring, leaderboard, persistence, responsive layout хүртэл хариуцсан.",
        focus:
          "Картаа эргүүлэх мөч, таарсан/таараагүй feedback, result screen нь “дахиад нэг удаа” гэж бодогдуулахуйц тод байхыг анхаарсан.",
        behind:
          "Дүрэм энгийн байх тусам tempo ба whitespace тоглоомын мэдрэмжийг өөрчилдөг нь сонирхолтой байсан.",
      },
      minesweeper: {
        title: "Minesweeper",
        description:
          "Нэр, difficulty, theme, ranking, хэл солих боломжтой classic Minesweeper Web game.",
        tags: ["Difficulty сонгоно", "Ranking хадгална", "EN/JP дэмжинэ"],
        summary:
          "Next.js дээр хийсэн Minesweeper. Safe first click, flag mode, difficulty selection, timer, leaderboard, how-to-play modal, English/Japanese UI, light/dark theme зэргийг багтаасан. Desktop болон mobile дээр тоглоход тохиромжтой board sizing хийсэн.",
        scope:
          "Game logic, state management, board UI, leaderboard storage, language switching, theme, responsive behavior хүртэл хариуцсан.",
        focus:
          "Гар утсан дээр буруу даралт багатай, board уншихад амар байх. Мөн тоглоом дууссаны дараа шууд алга болгохгүй, board-оо шалгах урсгалыг оруулсан.",
        behind:
          "Classic game-д чимэглэлээс илүү click feel, cell layout, feedback яг зөв байх нь чухал гэдгийг мэдэрсэн.",
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
    title: "Юу хийж чадах вэ гэхээс илүү,\nюу хөнгөн болох вэ.",
    intro: [
      "Миний санал болгодог зүйл бол «вэбсайт», «апп» гэдэг IT нэр томъёо биш. Сонгогдоход тусалдаг «нүүр царай», ажлыг хөнгөвчилдөг «систем» юм.",
      "Хэцүү яриа байхгүй. Танай бизнест юу өөрчлөгдөхийг л хараарай.",
    ],
    ctaLabel: "Үнэгүй зөвлөгөө",
    labels: {
      before: "Одоо",
      after: "Дараа нь",
      forms: "Ямар хэлбэрээр хийх вэ",
      proofs: "Бодит жишээ үзэх",
      price: "Үнийн баримжаа",
    },
    pillars: [
      {
        name: "Сонгогдоно",
        tagline: "Бизнесийн нүүр царайг бүтээх",
        lead: "Таныг хайж олсон хэрэглэгч 3 секундын дотор «итгэж болох газар мөн үү» гэдгийг шийддэг.",
        beforeAfter: [
          {
            before: "Бизнесийн нүүр царай нь зөвхөн сошиал хаяг",
            after:
              "Хайсан хүн «энэ газар найдвартай юм» гэж мэдрэх нүүр царайтай болно",
          },
          {
            before: "Уур амьсгал дамждаггүй тул зөвхөн үнээр харьцуулагддаг",
            after: "Онцлог тань мэдрэгдэж, уур амьсгалаараа сонгогдоно",
          },
          {
            before: "Гадаад үйлчлүүлэгчид давуу талаа хэлж чаддаггүй",
            after: "Үйлчлүүлэгч өөрийн хэлээр уншина",
          },
          {
            before: "Цагийн хуваарь, байршлаа өдөр бүр тайлбарладаг",
            after: "Асуухаас нь өмнө хариулт нь бэлэн байна",
          },
        ],
        forms: [
          "Бизнесийн танилцуулга сайт",
          "Нэг хуудас танилцуулга",
          "Брэндийн имиж сайт",
          "Гадаад хэлний хувилбар",
        ],
        proofs: [
          {
            name: "Overland Beyond",
            description:
              "Гадаад зочид өөрийн хэлээр уншиж, шууд захиалга өгдөг аяллын сайт",
            href: "https://overlandbeyond.com",
          },
          {
            name: "Soul Skin",
            description: "Имижээр илэрхийлэгддэг брэнд сайт",
            href: "https://soul-skin-website.vercel.app/",
          },
          {
            name: "Sui Salon",
            description:
              "Нэг хуудсаар уур амьсгалаас захиалга хүртэл холбодог салоны сайт",
            href: "https://sui-salon.vercel.app/",
          },
        ],
        price: "300k〜 (агуулгаас хамаарна)",
        timeline: "1〜4 долоо хоног",
      },
      {
        name: "Хөнгөн болно",
        tagline: "Өдөр тутмын ажлыг системд даатгах",
        lead: "Өдөрт 30 минутын «төвөг» гэдэг жилдээ ойролцоогоор 180 цаг. Үүнийг системд даатгаж болно.",
        beforeAfter: [
          {
            before: "Утас дуугарах бүрт ажил зогсдог",
            after: "Захиалга таныг унтаж байхад ч өөрөө цугларна",
          },
          {
            before: "Хэрэглэгчийн мэдээлэл дэвтэр, чат, Excel-д тарсан",
            after: "Бүгд нэг дор өөрөө цугларна",
          },
          {
            before: "Сарын эцсийн тооцоо хагас өдөр иддэг",
            after: "Нээхэд аль хэдийн бэлэн болсон байна",
          },
          {
            before: "Ижил асуултад дахин дахин хариулдаг",
            after: "Үйлчлүүлэгч өөрөө хариултаа олно",
          },
        ],
        forms: [
          "Захиалга хүлээн авах форм",
          "Хэрэглэгчийн жагсаалт",
          "Бүртгэл, тооцоо",
          "Танай бизнесийн гар утасны апп",
        ],
        proofs: [
          {
            name: "Цаг бүртгэлийн апп",
            description: "Ажлын бүртгэл 3 секунд. App Store / Google Play дээр",
          },
          {
            name: "Overland Beyond-ийн захиалгын форм",
            description: "4 асуултад хариулахад л захиалга дуусна",
            href: "https://overlandbeyond.com/apply",
          },
        ],
        price: "¥1,000,000〜 (агуулгаас хамаарна)",
        timeline: "3 долоо хоногоос",
      },
    ],
    care: {
      title: "Дараа нь ч санаа амар",
      description:
        "Нээгээд л орхихгүй. Жижиг засвар, шинэчлэл, «үүнийг яаж хийх вэ?» — сар бүр хамт байна.",
      price: "Сард 50k〜",
    },
    process: {
      title: "Хамтран ажиллах дараалал",
      steps: [
        {
          title: "Зөвлөгөө (үнэгүй)",
          description:
            "Юу төвөгтэй байгаагаа ярьж өгөөрэй. «Юу боломжтойг мэдмээр байна» гэхэд л хангалттай.",
        },
        {
          title: "Санал ба үнийн тооцоо",
          description: "Юу хийвэл юу хөнгөн болохыг цэгцлээд хүргэнэ.",
        },
        {
          title: "Бүтээх",
          description:
            "Долоо хоногт нэг удаа ажиллаж байгаа хувилбарыг хамт харж явна.",
        },
        {
          title: "Нээлт ба дэмжлэг",
          description:
            "Нээх ажлыг би хариуцна. Дараа нь ч сарын дэмжлэг авах боломжтой.",
        },
      ],
    },
    faq: {
      title: "Түгээмэл асуултууд",
      items: [
        {
          question: "Би юу бэлдэх ёстой вэ?",
          answer:
            "Зураг болон хэлэхийг хүссэн зүйлээ. Текстийг хамтдаа цэгцэлж болно.",
        },
        {
          question: "Компьютерт сайн биш ч болох уу?",
          answer:
            "Болно. Шинэчлэх шаардлагатай хэсгийг таны ашиглаж чадах хэлбэрээр хүлээлгэн өгнө.",
        },
        {
          question: "Төлбөрөө хэзээ төлөх вэ?",
          answer:
            "Эхлэхэд нэг хэсгийг, хүлээлгэн өгөхийн өмнө үлдсэнийг. Нөхцөлөөс хамааран тохиролцож болно.",
        },
        {
          question: "Явцын дунд хүсэлт өөрчлөгдвөл?",
          answer:
            "Долоо хоног бүрийн уулзалтаар чиглэлээ засаж явна. Том өөрчлөлтийг дахин үнэлгээний дараа.",
        },
        {
          question: "Хол газраас болон гадаадаас захиалж болох уу?",
          answer:
            "Болно. Япон, англи, монгол хэлээр, бүгдийг онлайнаар хийж болно.",
        },
      ],
    },
    bottomCtaTitle: "Зүгээр л ярилцахаас эхэлж болно",
    bottomCtaText:
      "«Манайд юу хөнгөн болох вэ?» гэж асуугаарай. Зорилго, төсөвт тань тааруулан хэрэгтэй зүйлээс нь хамт цэгцэлнэ.",
  },

  contact: {
    eyebrow: "Холбоо барих",
    titleA: "«Манайд юу хөнгөн болох вэ?»",
    titleB: "гэдгээс эхэлье",
    description:
      "Бизнесийн «нүүр царай» ба ажлыг хөнгөвчлөх «систем». Зөвлөгөө үнэгүй, 24 цагийн дотор хариулна.",

    primaryLabel: "Үнэгүй зөвлөгөө",
    primaryTitle: "Эхлээд имэйлээр зөвлөлдөх",
    primaryDescription:
      "«Захиалгаа онлайнаар авмаар байна», «Бизнестээ нүүр царай хэрэгтэй», «Юу боломжтойг мэдмээр байна» — ийм ганц өгүүлбэр хангалттай. 24 цагийн дотор хариулна.",

    emailLabel: "Имэйл хаяг",
    copy: "Хаягийг хуулах",
    copied: "Хууллаа",
    send: "Имэйл илгээх",
    viewProjects: "Хийсэн ажлуудыг үзэх",

    socialTitle: "SNS",
    connectVia: "",

    availabilityLabel: "Шинэ захиалга авч байна",
    availability:
      "Бизнесийн нүүр царайнаас эхлээд захиалга, бүртгэлийн систем хүртэл — жижиг бизнесийг сонгогдоход нь, ажлыг нь хөнгөвчлөхөд нь тусална.",

    form: {
      nameLabel: "Нэр",
      namePlaceholder: "Таны нэр",
      emailLabel: "Имэйл",
      emailPlaceholder: "you@example.com",
      messageLabel: "Мессеж",
      messagePlaceholder:
        "Жишээ: Захиалгыг утсаар авах нь төвөгтэй болсон тул онлайнаар авмаар байна. Төсөв 100,000 иен орчим.",
      sending: "Zaza хүргэж гүйж байна…",
      submit: "Илгээгээд үзье",
      success: "Таны мессеж амжилттай илгээгдлээ.",
      error: "Илгээхэд алдаа гарлаа. Дахин оролдоно уу.",
      note: "Юу ч шийдээгүй байсан зүгээр. Хариуг би (Zaya өөрөө) бичнэ.",
    },
  },

  footer: {
    title: "Zaya — AI-Native Product Engineer",
    subtitle: "Сонгогдох нүүр царай, хөнгөвчлөх систем",
    copyright: "© 2026 Designed & Built by Zaya",
  },

  langToggle: {
    en: "EN",
    ja: "JP",
    mn: "MN",
  },

  zaza: {
    pillBubble: "Асуухад үнэгүй шүү!",
    formSuccess: "Хүргэчихлээ! Баярлалаа!",
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
