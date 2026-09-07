import { getMessages, type Locale } from "@/lib/i18n";
export type ContactContext = {
  plan?: string | string[];
  project?: string | string[];
};
export const briefLabels = {
  ja: {
    plan: "気になっているプラン：",
    project: "参考にしたい実績：",
    consult: "この内容で相談する",
    note: "選んだ内容を入れました。自由に書き換えてください。",
  },
  en: {
    plan: "I'm interested in: ",
    project: "A project I liked: ",
    consult: "Ask about this",
    note: "Your selection is included. Feel free to edit it.",
  },
  mn: {
    plan: "Сонирхож буй багц: ",
    project: "Сонирхсон төсөл: ",
    consult: "Энэ талаар зөвлөлдөх",
    note: "Таны сонголтыг орууллаа. Чөлөөтэй засаж болно.",
  },
};
export function getBriefHref(
  locale: Locale,
  context: { plan?: string; project?: string },
) {
  return "/" + locale + "/contact?" + new URLSearchParams(context);
}
export function getContactBrief(locale: Locale, context: ContactContext) {
  const messages = getMessages(locale),
    t = briefLabels[locale],
    lines: string[] = [];
  if (typeof context.plan === "string" && /^[0-2]$/.test(context.plan)) {
    const plan = messages.services.packages?.items[Number(context.plan)];
    if (plan) lines.push(t.plan + plan.name + " — " + plan.price);
  }
  if (
    typeof context.project === "string" &&
    Object.hasOwn(messages.projects.items, context.project)
  )
    lines.push(t.project + messages.projects.items[context.project].title);
  return lines.length ? lines.join("\n") + "\n\n" : "";
}
