import { describe, expect, it } from "vitest";
import { formatUlaanbaatarYearMonth } from "./availability";

describe("formatUlaanbaatarYearMonth", () => {
  it("formats the year and month with two-digit months", () => {
    expect(formatUlaanbaatarYearMonth(new Date("2026-07-08T00:00:00.000Z"))).toBe(
      "2026.07",
    );
  });

  it("uses the Ulaanbaatar month at UTC month boundaries", () => {
    expect(formatUlaanbaatarYearMonth(new Date("2026-06-30T16:00:00.000Z"))).toBe(
      "2026.07",
    );
  });

  it("rolls over the year in Ulaanbaatar time", () => {
    expect(formatUlaanbaatarYearMonth(new Date("2026-12-31T16:00:00.000Z"))).toBe(
      "2027.01",
    );
  });
});
