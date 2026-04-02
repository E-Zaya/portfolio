import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
  gradientBorder?: boolean;
};

export default function Card({
  children,
  className,
  strong = false,
  gradientBorder = false,
}: CardProps) {
  return (
    <div
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
