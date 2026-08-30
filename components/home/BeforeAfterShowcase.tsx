import Image from "next/image";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import SectionShell from "@/components/ui/SectionShell";
import { getMessages, type Locale } from "@/lib/i18n";
import type { ServicesBeforeAfter } from "@/lib/messages/types";

/**
 * ホームの「今 vs これから」デモセクション。
 * servicesの今/これからの行を両面で同じ高さに重ね、仕切りのドラッグで
 * 悩みがその場で解決後の姿に変身する。左＝困っているZaya、右＝笑顔のZaya。
 */
export default function BeforeAfterShowcase({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const t = messages.baDemo;

  // 行データはservicesと共通(重複管理を避ける)。
  // 「選ばれる」から3行 + 「楽になる」から2行のいいとこ取り
  const pillars = messages.services.pillars;
  const rows: ServicesBeforeAfter[] = [
    ...(pillars[0]?.beforeAfter.slice(0, 3) ?? []),
    ...(pillars[1]?.beforeAfter.slice(0, 2) ?? []),
  ];

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

        <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-theme">
          <div className="relative h-[470px] sm:h-[470px] md:h-[490px]">
            <BeforeAfterSlider
              initial={50}
              labels={{ before: t.now, after: t.future, hint: t.hint }}
              before={<NowFace label={t.now} rows={rows} />}
              after={<FutureFace label={t.future} rows={rows} />}
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ── 左面: いまの毎日(困っている) ── */
function NowFace({
  label,
  rows,
}: {
  label: string;
  rows: ServicesBeforeAfter[];
}) {
  return (
    <div className="ba-now flex h-full flex-col px-5 py-5 sm:px-7 sm:py-6">
      {/* ヘッダー高さは右面と完全に揃える(行の変身を成立させるため) */}
      <div className="flex h-16 items-center gap-3 sm:h-20">
        <Image
          src="/Zaza/mascot/zaza-oops.png"
          alt=""
          aria-hidden
          width={96}
          height={96}
          className="w-14 shrink-0 -rotate-3 sm:w-[4.5rem]"
        />
        <p className="ba-now-label text-2xl font-black tracking-wide sm:text-3xl">
          {label}
        </p>
      </div>

      <div className="mt-4 flex flex-1 flex-col justify-evenly gap-2">
        {rows.map((row) => (
          <div key={row.before} className="ba-row ba-row-now">
            <span className="ba-row-icon ba-row-icon-now" aria-hidden>
              ✕
            </span>
            <span className="line-clamp-2 text-xs leading-snug sm:text-sm">
              {row.before}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 右面: これからの毎日(楽になって笑顔) ── */
function FutureFace({
  label,
  rows,
}: {
  label: string;
  rows: ServicesBeforeAfter[];
}) {
  return (
    <div className="ba-future flex h-full flex-col px-5 py-5 sm:px-7 sm:py-6">
      <div className="flex h-16 items-center justify-end gap-3 sm:h-20">
        <p className="ba-future-label text-2xl font-black tracking-wide sm:text-3xl">
          {label}
        </p>
        <Image
          src="/Zaza/mascot/zaza-celebrate.png"
          alt=""
          aria-hidden
          width={96}
          height={96}
          className="w-14 shrink-0 rotate-3 sm:w-[4.5rem]"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col justify-evenly gap-2">
        {rows.map((row) => (
          <div key={row.after} className="ba-row ba-row-future">
            <span className="line-clamp-2 text-right text-xs font-semibold leading-snug sm:text-sm">
              {row.after}
            </span>
            <span className="ba-row-icon ba-row-icon-future" aria-hidden>
              ✓
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
