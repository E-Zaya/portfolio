type HeroAvailabilityStatusProps = {
  status: string;
};

// 以前は「案件受付中 · 2026.08」と年月を毎時更新で付けていたが、
// メタ装飾の間引き(脱テンプレ)の一環で年月は廃止しステータスのみ表示する
export default function HeroAvailabilityStatus({
  status,
}: HeroAvailabilityStatusProps) {
  return (
    <span className="min-w-0 break-words" style={{ color: "var(--foreground)" }}>
      {status}
    </span>
  );
}
