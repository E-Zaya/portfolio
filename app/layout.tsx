import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaya Portfolio",
  description: "High quality Next.js portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
