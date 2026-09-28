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
// dark の #131519 = --background, light の #f6f5f1 = --background(tokens.css)。
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#131519" },
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
