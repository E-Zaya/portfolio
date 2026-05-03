"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";

const messages: Record<
  Locale,
  { eyebrow: string; title: string; description: string; retry: string; home: string }
> = {
  ja: {
    eyebrow: "エラーが発生しました",
    title: "予期しないエラーが\n発生しました",
    description:
      "申し訳ありません。もう一度お試しいただくか、時間をおいてアクセスしてください。",
    retry: "再試行",
    home: "ホームに戻る",
  },
  en: {
    eyebrow: "Something went wrong",
    title: "An unexpected error\nhas occurred",
    description:
      "We apologize for the inconvenience. Please try again or come back later.",
    retry: "Try Again",
    home: "Back to Home",
  },
  mn: {
    eyebrow: "Алдаа гарлаа",
    title: "Тодорхойгүй алдаа\nгарлаа",
    description:
      "Уучлаарай. Дахин оролдоно уу эсвэл хэсэг хугацааны дараа орж ирнэ үү.",
    retry: "Дахин оролдох",
    home: "Нүүр хуудас руу буцах",
  },
};

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams<{ locale?: string }>();
  const rawLocale = params?.locale ?? "";
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const t = messages[locale];

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70dvh] flex-col items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="eyebrow mb-6">{t.eyebrow}</p>

        <h1 className="whitespace-pre-line text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl">
          {t.title}
        </h1>

        <p className="mt-6 text-base leading-7 text-soft">{t.description}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition duration-200 hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3))",
              color: "var(--button-foreground)",
              boxShadow:
                "0 8px 32px color-mix(in srgb, var(--accent-1) 35%, transparent)",
              border: "none",
              cursor: "pointer",
            }}
          >
            {t.retry}
          </button>

          <a
            href={`/${locale}`}
            className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition duration-200 hover:-translate-y-0.5"
          >
            {t.home}
          </a>
        </div>
      </div>
    </main>
  );
}
