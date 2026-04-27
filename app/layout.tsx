import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ezaya.dev"),
  robots: {
    index: true,
    follow: true,
  },
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
        <Analytics />;
      </body>
    </html>
  );
}
