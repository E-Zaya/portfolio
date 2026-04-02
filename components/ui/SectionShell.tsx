import { cn } from "@/lib/cn";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export default function SectionShell({
  children,
  className,
  innerClassName,
}: SectionShellProps) {
  return (
    <section className={cn("section-space", className)}>
      <div className={cn("container-custom", innerClassName)}>{children}</div>
    </section>
  );
}
