export type HeroKpi = {
  label: string;
  value: string;
  change: string;
  up: boolean;
};

export type HeroDatabaseRow = {
  id: string;
  name: string;
  email: string;
  status: "active" | "draft";
};

export type HeroLanguageLine = {
  code: "JA" | "EN" | "MN";
  line: string;
};

export type ServicesPlan = {
  name: string;
  badge?: string;
  price: string;
  description: string;
  details: string[];
  timeline?: string;
  note?: string;
};

export type ServicesFeeItem = {
  title: string;
  description: string;
};

export type ServicesStep = {
  title: string;
  description: string;
};

export type ServicesReasonItem = {
  title: string;
  description: string;
};

export type ServicesFaqItem = {
  question: string;
  answer: string;
};

export type ServicesContent = {
  title: string;
  subtitle: string;
  intro: string;
  introNote: string;
  ctaLabel: string;
  bottomCtaTitle: string;
  bottomCtaText: string;

  plans: {
    simple: ServicesPlan;
    starter: ServicesPlan;
    custom: ServicesPlan;
  };

  targetAudience: {
    title: string;
    items: string[];
  };

  reasons: {
    title: string;
    items: ServicesReasonItem[];
  };

  philosophy: {
    title: string;
    items: ServicesReasonItem[];
  };

  process: {
    title: string;
    steps: ServicesStep[];
  };

  fees: {
    title: string;
    description: string;
    production: ServicesFeeItem;
    maintenance: ServicesFeeItem;
    external: ServicesFeeItem;
    delivery: ServicesFeeItem;
  };

  faq: {
    title: string;
    items: ServicesFaqItem[];
  };
};

export type ProjectStatus = "Completed" | "In Progress";

export type ProjectMessageItem = {
  title: string;
  description: string;
  summary: string;
  scope: string;
  focus: string;
};

export type WipMessageItem = {
  title: string;
  description: string;
};

export type ProjectsContent = {
  eyebrow: string;
  titleA: string;
  titleB: string;
  description: string;
  featuredEyebrow: string;
  featuredTitle: string;
  otherEyebrow: string;
  otherTitle: string;
  featuredBadge: string;
  liveDemo: string;
  viewCode: string;
  scopeLabel: string;
  focusLabel: string;
  wipTitle: string;
  wipStatus: string;
  status: Record<ProjectStatus, string>;

  // projectItems の slug を key として使う
  // 新しい project を追加しても、types.ts の修正は不要
  items: Record<string, ProjectMessageItem>;

  wip: {
    items: Record<string, WipMessageItem>;
  };
};

export type HeroVisualContent = {
  label: string;
  title: string;
  browserUrl: string;
  items: string[];
  captions: string[];
  scenes: {
    landing: {
      brand: string;
      nav: string[];
      ctaSmall: string;
      eyebrow: string;
      titleBefore: string;
      titleHighlight: string;
      titleAfter: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      stat: string;
      live: string;
      features: string[];
      socialProofNumber: string;
      socialProofText: string;
    };

    admin: {
      logo: string;
      menu: string[];
      userName: string;
      loginStatus: string;
      kpis: HeroKpi[];
      months: string[];
    };

    database: {
      queryTable: string;
      columns: ["id", "name", "email", "status"];
      rows: HeroDatabaseRow[];
    };

    multilingual: {
      langs: HeroLanguageLine[];
      footer: string;
    };
  };
};

// Contact form text
export type ContactFormContent = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  sending: string;
  submit: string;
  success: string;
  error: string;
};

export type ContactContent = {
  eyebrow: string;
  titleA: string;
  titleB: string;
  description: string;

  primaryLabel: string;
  primaryTitle: string;
  primaryDescription: string;

  emailLabel: string;
  copy: string;
  copied: string;
  send: string;
  viewProjects: string;

  socialTitle: string;
  connectVia: string;

  availabilityLabel: string;
  availability: string;

  form: ContactFormContent;
};

export type BlogContent = {
  filterLabel: string;
  browseTitle: string;
  backToAllPosts: string;
  breadcrumbHome: string;
  breadcrumbBlog: string;
  breadcrumbAria: string;
  toc: string;
  tocItemAria: string;
  related: string;
  readMore: string;
  allTags: string;
  noPostsTitle: string;
  noPostsDescription: string;
  copyCode: string;
  copiedCode: string;
  copyCodeAria: string;
  untitled: string;
  uncategorized: string;
  noSummary: string;
  noDate: string;
  minRead: (minutes: number) => string;
  notFoundTitle: string;
  categoryLabels: {
    cloud: string;
    frontend: string;
    engineering: string;
    diary: string;
  };
};

export type Messages = {
  meta: {
    title: string;
    description: string;
  };

  header: {
    subtitle: string;
    logoAria: string;
    menuAria: string;
  };

  nav: {
    label: string;
    href: string;
  }[];

  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    badges: string[];
    primaryCta: string;
    secondaryCta: string;

    meta: {
      status: string;
      focus: string;
      location: string;
    };

    techLine: string;
    visualHint: string;

    features: {
      title: string;
      description: string;
    }[];

    visual: {
      label: string;
      title: string;
      items: string[];
      captions: string[];
    };
  };

  skills: {
    eyebrow: string;
  };

  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    strengthsEyebrow: string;
    strengthsTitle: string;

    strengths: {
      title: string;
      description: string;
    }[];
  };

  projects: ProjectsContent;
  blog: BlogContent;
  services: ServicesContent;
  contact: ContactContent;

  footer: {
    title: string;
    subtitle: string;
    copyright: string;
  };

  langToggle: {
    en: string;
    ja: string;
    mn: string;
  };

  visual: HeroVisualContent;
};
