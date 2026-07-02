"use client";

import { useParams } from "next/navigation";
import Button from "@/components/ui/Button";
import { isLocale, type Locale } from "@/lib/i18n";

const messages: Record<Locale, { eyebrow: string; title: string; description: string; cta: string }> = {
  ja: {
    eyebrow: "404 · ページが見つかりません",
    title: "お探しのページは\n見つかりませんでした",
    description:
      "URLが間違っているか、ページが移動・削除された可能性があります。",
    cta: "ホームに戻る",
  },
  en: {
    eyebrow: "404 · Page Not Found",
    title: "The page you're looking\nfor doesn't exist",
    description:
      "The URL may be incorrect, or the page may have been moved or deleted.",
    cta: "Back to Home",
  },
  mn: {
    eyebrow: "404 · Хуудас олдсонгүй",
    title: "Таны хайж буй хуудас\nолдсонгүй",
    description:
      "URL буруу байж болох юм, эсвэл хуудас зөөгдсөн эсвэл устгагдсан байж болно.",
    cta: "Нүүр хуудас руу буцах",
  },
};

export default function LocaleNotFound() {
  const params = useParams<{ locale?: string }>();
  const rawLocale = params?.locale ?? "";
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const t = messages[locale];

  return (
    <main className="flex min-h-[70dvh] flex-col items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="eyebrow mb-6">{t.eyebrow}</p>

        <h1 className="whitespace-pre-line text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl">
          {t.title}
        </h1>

        <p className="mt-6 text-base leading-7 text-soft">{t.description}</p>

        <Button
          href={`/${locale}`}
          variant="primary"
          className="mt-10 font-bold"
        >
          ← {t.cta}
        </Button>
      </div>
    </main>
  );
}
