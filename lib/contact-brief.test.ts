import { describe, expect, it } from "vitest";
import { getBriefHref, getContactBrief } from "./contact-brief";
import { getMessages } from "./i18n";

describe("contact brief", () => {
  it("carries a known plan and its local price", () => {
    for (const locale of ["ja", "en", "mn"] as const) {
      const plan = getMessages(locale).services.packages!.items[0];
      const brief = getContactBrief(locale, { plan: "0" });
      expect(brief).toContain(plan.name);
      expect(brief).toContain(plan.price);
    }
  });
  it("only accepts known selections, including repeated query parameters", () => {
    expect(getContactBrief("ja", { plan: "99", project: "unknown" })).toBe("");
    expect(
      getContactBrief("ja", { plan: ["0", "1"], project: "__proto__" }),
    ).toBe("");
    expect(getContactBrief("ja", { project: "odootech-time" })).toContain(
      "OdooTech Time",
    );
  });
  it("links to an editable local consultation for all locales", () => {
    expect(getBriefHref("mn", { project: "odootech-time" })).toBe(
      "/mn/contact?project=odootech-time",
    );
  });
});
