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