import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ezaya.dev"),
  robots: {
    index: true,
    follow: true,
  },
};

// スマホブラウザのアドレスバー色を、ライト/ダーク両方の配色トークンに合わせる。
// ここは CSS 変数を使えないので値を写す。dark の #050d21 / light の #e8edf8 = tokens.css の --background。
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8edf8" },
    { media: "(prefers-color-scheme: dark)", color: "#050d21" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Set the base document language to Japanese.  The [locale] route will
    // override this per-page as needed, but defaulting to Japanese reflects
    // the site's primary audience.
    <html lang="ja" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
