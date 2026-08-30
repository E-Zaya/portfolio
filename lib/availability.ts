const ULAANBAATAR_TIME_ZONE = "Asia/Ulaanbaatar";

export function formatUlaanbaatarYearMonth(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    timeZone: ULAANBAATAR_TIME_ZONE,
    year: "numeric",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;

  if (!year || !month) {
    throw new Error("Could not format availability month.");
  }

  return `${year}.${month}`;
}
