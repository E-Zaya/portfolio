import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import SectionShell from "@/components/ui/SectionShell";
import { getMessages, type Locale } from "@/lib/i18n";

/**
 * ホームの「よくあるページ vs Zayaがつくる顔」デモセクション。
 * 架空のカフェ(Cafe Naran)の2つのサイトを1枚のブラウザ枠に重ね、
 * 仕切りのドラッグで見比べさせる — ポートフォリオが自分で実演する営業装置。
 */
export default function BeforeAfterShowcase({ locale }: { locale: Locale }) {
  const t = getMessages(locale).baDemo;

  return (
    <SectionShell className="home-ba-section">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-muted">
            {t.eyebrow}
          </p>
          <h2 className="text-balance mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-soft sm:text-base">
            {t.description}
          </p>
        </div>

        {/* ブラウザ枠 — 「同じ店のサイトが入れ替わる」ことを示す不変のフレーム */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-theme">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="mx-auto rounded-md border border-border bg-card px-4 py-0.5 font-mono text-[11px] tracking-[0.08em] text-muted">
              {t.url}
            </span>
            {/* 中央寄せを保つためのダミー */}
            <span className="w-[52px]" aria-hidden />
          </div>

          <div className="relative h-[430px] sm:h-[470px] md:h-[510px]">
            <BeforeAfterSlider
              initial={54}
              labels={{ before: t.before, after: t.after, hint: t.hint }}
              before={<RetroSite t={t.retro} />}
              after={<ModernSite t={t.modern} />}
            />
          </div>
        </div>

        {/* 凡例 — クリップ領域の外に置いてコンテンツと重ならないようにする */}
        <div className="mt-4 flex items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-[0.14em]">
          <span className="ba-legend-before inline-flex items-center gap-2">
            <span className="ba-legend-dot" aria-hidden />
            {t.before}
          </span>
          <span className="ba-legend-after inline-flex items-center gap-2 text-right">
            {t.after}
            <span className="ba-legend-dot" aria-hidden />
          </span>
        </div>
      </div>
    </SectionShell>
  );
}

/* ── Before面: 2010年代の「よくあるお店のページ」を本気で再現 ── */
function RetroSite({
  t,
}: {
  t: {
    title: string;
    marquee: string;
    photo: string;
    hoursLabel: string;
    hoursValue: string;
    phone: string;
    counter: string;
    updated: string;
  };
}) {
  // 「0012847 人目」のような数字部分だけカウンター風に装飾する
  const counterMatch = t.counter.match(/^(.*?)(\d[\d,]*)(.*)$/);

  return (
    <div className="ba-retro flex h-full flex-col">
      <div className="ba-retro-marquee-wrap" aria-hidden>
        <p className="ba-retro-marquee">{t.marquee}</p>
      </div>

      <div className="flex flex-1 flex-col items-center gap-4 overflow-hidden px-5 py-6 text-center sm:gap-5 sm:py-8">
        <h3 className="ba-retro-title text-lg font-bold leading-snug sm:text-2xl">
          {t.title}
        </h3>
        <hr className="ba-retro-hr w-4/5" />

        <div className="ba-retro-photo grid h-24 w-52 place-items-center text-xs sm:h-28 sm:w-64">
          {t.photo}
        </div>

        <table className="ba-retro-table text-xs sm:text-sm">
          <tbody>
            <tr>
              <th>{t.hoursLabel}</th>
              <td>{t.hoursValue}</td>
            </tr>
          </tbody>
        </table>

        <p className="text-sm font-bold sm:text-base">{t.phone}</p>

        <p className="text-xs sm:text-sm">
          {counterMatch ? (
            <>
              {counterMatch[1]}
              <span className="ba-retro-counter">{counterMatch[2]}</span>
              {counterMatch[3]}
            </>
          ) : (
            t.counter
          )}
        </p>

        <p className="ba-retro-updated mt-auto text-[11px]">{t.updated}</p>
      </div>
    </div>
  );
}

/* ── After面: 同じ店をZayaが作り直した姿 ── */
function ModernSite({
  t,
}: {
  t: {
    name: string;
    tagline: string;
    cta: string;
    rating: string;
    hours: string;
    toast: string;
  };
}) {
  return (
    <div className="ba-modern relative flex h-full flex-col overflow-hidden">
      {/* 仕切りが左〜中央にある間も見えるよう、コンテンツは右寄せで組む */}
      {/* ヘッダー: ロゴ + 言語切替(その場で多言語対応が伝わる) */}
      <div className="relative z-10 flex items-center justify-end gap-4 px-5 py-4 sm:px-8">
        <p className="ba-modern-logo text-sm font-black tracking-[0.18em] sm:text-base">
          {t.name.toUpperCase()}
        </p>
        <div className="flex gap-1.5">
          {["JA", "EN", "MN"].map((lang, index) => (
            <span
              key={lang}
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${
                index === 0 ? "ba-modern-lang-active" : "ba-modern-lang"
              }`}
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* メイン: タグライン + オンライン予約 */}
      <div className="relative z-10 flex flex-1 flex-col items-end justify-center px-5 pb-14 text-right sm:px-8">
        <p className="ba-modern-tagline whitespace-pre-line text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl md:text-[2.8rem]">
          {t.tagline}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
          <span className="ba-modern-meta text-xs font-semibold sm:text-[13px]">
            {t.rating}
          </span>
          <span className="ba-modern-cta inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold">
            {t.cta}
            <span aria-hidden>→</span>
          </span>
        </div>

        <p className="ba-modern-meta mt-3 text-xs font-semibold sm:text-[13px]">
          <span className="ba-modern-open-dot" aria-hidden /> {t.hours}
        </p>
      </div>

      {/* 予約トースト — 「仕組みが勝手に働いている」瞬間 */}
      <div className="ba-modern-toast absolute bottom-4 right-4 z-10 flex items-center gap-2.5 rounded-2xl px-4 py-3 sm:bottom-6 sm:right-6">
        <span className="ba-modern-toast-dot" aria-hidden />
        <span className="text-xs font-bold sm:text-[13px]">{t.toast}</span>
      </div>
    </div>
  );
}
