import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "default" | "lg" | "compact";

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
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.985] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const variants: Record<Variant, string> = {
  // primary はサービスの「お問い合わせ」ボタンと同じソリッドな accent-2。
  // services-primary-button (components.css) を再利用 → ライト/ダーク自動対応。
  primary:
    "services-primary-button border border-transparent hover:opacity-90 focus-visible:ring-[color:var(--accent-2)]",
  secondary: "border border-border bg-card text-foreground shadow-theme hover:bg-card/80 focus-visible:ring-[color:var(--accent-2)]",
  ghost: "border border-transparent bg-transparent text-soft hover:text-foreground hover:bg-card/50 focus-visible:ring-[color:var(--accent-2)]",
  outline:
    "border-2 border-border bg-transparent text-foreground hover:bg-card/60 hover:border-white/25 focus-visible:ring-[color:var(--accent-2)]",
};

const sizes: Record<Size, string> = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  // モバイルで2つ横並びにする用。sm:以上はclassNameで上書き拡大できる
  compact: "px-3 py-3.5 text-[13px]",
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