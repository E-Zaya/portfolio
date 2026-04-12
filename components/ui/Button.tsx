import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "default" | "lg";   // ← ここを追加

type SharedProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;                 // ← 追加
};

type ButtonProps = SharedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = SharedProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.985] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const variants: Record<Variant, string> = {
  primary:
    "border border-transparent bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3))] text-[var(--button-foreground)] shadow-theme hover:shadow-xl",
  secondary: "border border-border bg-card text-foreground shadow-theme hover:bg-card/80",
  ghost: "border border-transparent bg-transparent text-soft hover:text-foreground hover:bg-card/50",
  outline:
    "border-2 border-border bg-transparent text-foreground hover:bg-card/60 hover:border-white/25",
};

const sizes: Record<Size, string> = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",     // ← Heroで使いたい大きめサイズ
};

export default function Button(props: ButtonProps | LinkProps) {
  const { 
    children, 
    className, 
    variant = "secondary", 
    size = "default",     // ← デフォルトは今まで通り
    ...rest 
  } = props;

  const classes = cn(
    baseClass,
    variants[variant],
    sizes[size],           // ← sizeを適用
    className
  );

  if ("href" in props && props.href) {
    const linkProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={props.href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}