/**
 * 青ペンで引いたマーカー下線(Hero 動画の「青ペンの添削」と同じ印)。
 * 動かさない — 自動で動くのは Hero の動画だけにしている。
 *
 * サイト全体のタイトル強調はこのコンポーネントに統一する。
 * 例: <h2>お店は、<MarkerHighlight>もっと選ばれる</MarkerHighlight>。</h2>
 */
export default function MarkerHighlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  /** 外側spanへの追加クラス(例: "sm:table" で1行1ブロック表示) */
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-[0.08em] z-0 h-[0.35em] rounded-sm sm:-rotate-1"
        style={{ background: "var(--marker)" }}
      />
    </span>
  );
}
