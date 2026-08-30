"use client";

import { useEffect, useState } from "react";
import { formatUlaanbaatarYearMonth } from "@/lib/availability";

const REFRESH_INTERVAL_MS = 60 * 60 * 1000;

type HeroAvailabilityStatusProps = {
  status: string;
};

export default function HeroAvailabilityStatus({
  status,
}: HeroAvailabilityStatusProps) {
  const [yearMonth, setYearMonth] = useState<string | null>(null);

  useEffect(() => {
    const updateYearMonth = () => {
      setYearMonth(formatUlaanbaatarYearMonth());
    };

    updateYearMonth();
    const timerId = window.setInterval(updateYearMonth, REFRESH_INTERVAL_MS);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  return (
    <span className="min-w-0 break-words" style={{ color: "var(--foreground)" }}>
      {status}
      {yearMonth ? ` · ${yearMonth}` : null}
    </span>
  );
}
