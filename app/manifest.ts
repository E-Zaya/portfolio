import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zaya Dev — Portfolio",
    short_name: "Zaya Dev",
    description:
      "Zaya's portfolio — AI-Native Product Engineer building useful digital products and business systems.",
    start_url: "/ja",
    display: "standalone",
    background_color: "#081120",
    theme_color: "#081120",
    icons: [
      // 正方形のブランドアイコン（PWAインストール用）。
      // OG画像(1200x630)はアイコンとして不正だったため置き換え。
      {
        src: "/icons/app-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
