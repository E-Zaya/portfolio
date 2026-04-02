import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
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
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const variants: Record<Variant, string> = {
  primary:
    "border border-transparent bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3))] text-[var(--button-foreground)] shadow-theme",
  secondary: "border border-border bg-card text-foreground shadow-theme",
  ghost: "border border-border/0 bg-transparent text-soft hover:text-foreground",
};

export default function Button(props: ButtonProps | LinkProps) {
  const { children, className, variant = "secondary", ...rest } = props;
  const classes = cn(baseClass, variants[variant], className);

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
