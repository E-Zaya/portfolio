import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
  gradientBorder?: boolean;
  /** アンカーリンク用(例: サービスの #pillar-1) */
  id?: string;
};

export default function Card({
  children,
  className,
  strong = false,
  gradientBorder = false,
  id,
}: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        strong ? "apple-panel-strong" : "apple-panel",
        gradientBorder && "gradient-border",
        className,
      )}
    >
      {children}
    </div>
  );
}
