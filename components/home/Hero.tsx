import SectionShell from "@/components/ui/SectionShell";
import { type Locale } from "@/lib/i18n";
import HeroContent from "./HeroContent";
import HeroPaperVideo from "./HeroPaperVideo";
// HeroVisual(Zaya Studioプレビュー)と HeroShowcase(OdooTech の切り替え)は温存中。
// 戻す場合: 下の HeroPaperVideo と入れ替える。

export default function Hero({ locale }: { locale: Locale }) {
  return (
    <SectionShell className="pt-3 sm:pt-4">
      {/* トンボ(印刷のコーナーマーク) — 「入稿された原稿」の記号。
          紙がoverflow-hiddenなので外側のラッパーに置く */}
      <div className="relative">
        <span className="crop-mark crop-mark-tl" aria-hidden />
        <span className="crop-mark crop-mark-tr" aria-hidden />
        <span className="crop-mark crop-mark-bl" aria-hidden />
        <span className="crop-mark crop-mark-br" aria-hidden />

        {/* Hero ごと一枚の紙。テーマに関係なく紙の色と墨の文字で組む */}
        <div className="hero-paper relative grid grid-cols-1 items-center overflow-hidden rounded-lg lg:grid-cols-12">
          <div className="relative z-10 min-w-0 px-5 pt-7 sm:px-8 sm:pt-9 md:px-12 md:pt-12 lg:col-span-7 lg:py-12 lg:pr-0">
            <HeroContent locale={locale} />
          </div>
          <div className="min-w-0 lg:col-span-5">
            <HeroPaperVideo />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
