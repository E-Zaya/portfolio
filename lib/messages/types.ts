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
    delivery: {
      title: string;
      description: string;
    };
  };

  faq: {
    title: string;
    items: ServicesFaqItem[];
  };
};

// project status
export type ProjectStatus = "Completed" | "In Progress";

// project text item
export type ProjectMessageItem = {
  title: string;
  description: string;
  summary: string;
};

// projects section content
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
  status: Record<ProjectStatus, string>;

  // projectItems の slug を key として使う
  // 新しい project を追加しても、types.ts の修正は不要
  items: Record<string, ProjectMessageItem>;
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