import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zaya Dev — Portfolio",
    short_name: "Zaya Dev",
    description:
      "Zaya's portfolio — Web developer specializing in Next.js, TypeScript, and design.",
    start_url: "/ja",
    display: "standalone",
    background_color: "#081120",
    theme_color: "#081120",
    icons: [
      {
        src: "/og-image.png",
        sizes: "1200x630",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
