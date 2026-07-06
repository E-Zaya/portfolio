import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const BASE_URL = "https://ezaya.dev";

type PageConfig = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticPages: PageConfig[] = [
  { path: "",          changeFrequency: "weekly",  priority: 1.0 },
  { path: "/about",    changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact",  changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog",     changeFrequency: "weekly",  priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            ...Object.fromEntries(
              locales.map((l) => [l, `${BASE_URL}/${l}${page.path}`])
            ),
            // 日本語が主言語 = 言語不明の訪問者にも /ja を既定として提示
            "x-default": `${BASE_URL}/ja${page.path}`,
          },
        },
      });
    }
  }

  return entries;
}
