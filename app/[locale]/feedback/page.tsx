import FeedbackForm from "@/components/feedback/FeedbackForm";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return buildPageMetadata(params, "feedback", "/feedback");
}

type Query = { app?: string; v?: string; os?: string; page?: string };

function one(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value)?.slice(0, 200) ?? "";
}

// 全アプリ共通の Feedback 窓。TypeMon Mac などはここを ?app=…&v=…&os=… 付きで開く
export default async function FeedbackPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Query>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const q = await searchParams;

  return (
    <section className="container-custom py-10 sm:py-16">
      <div className="mx-auto max-w-xl">
        <FeedbackForm
          locale={locale}
          app={one(q.app)}
          version={one(q.v)}
          os={one(q.os)}
          page={one(q.page)}
        />
      </div>
    </section>
  );
}
