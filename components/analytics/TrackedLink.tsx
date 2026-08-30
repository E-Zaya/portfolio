"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

type AnalyticsValue = string | number | boolean | null | undefined;

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  eventName: string;
  eventProperties?: Record<string, AnalyticsValue>;
};

export default function TrackedLink({
  href,
  eventName,
  eventProperties,
  onClick,
  children,
  ...props
}: Props) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        track(eventName, eventProperties);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
