import { cn } from "@/lib/cn";

export default function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <span className={cn("badge", className)}>{children}</span>;
}
