"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { Locale } from "@/lib/i18n";
import {
  FEEDBACK_APPS,
  MESSAGE_MAX,
  isFeedbackApp,
  type FeedbackKind,
} from "@/lib/feedback";

type State = "idle" | "sending" | "sent" | "error";

// この窓だけで使う文言なので messages ではなくここで持つ (privacy ページと同じ)
const COPY: Record<
  Locale,
  {
    title: string;
    lead: string;
    kinds: Record<FeedbackKind, string>;
    placeholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    note: string;
    send: string;
    sending: string;
    error: string;
    tooMany: string;
    sentTitle: string;
    sentBody: string;
    again: string;
  }
> = {
  ja: {
    title: "Feedback を送る",
    lead: "気づいたこと、困ったこと、ほしい機能。ひとことで大丈夫です。",
    kinds: { bug: "困った", idea: "ほしい", love: "よかった" },
    placeholder: "例: ボタンが小さくて押しにくい",
    emailLabel: "返事がほしいときだけ、メールアドレス",
    emailPlaceholder: "you@example.com",
    note: "アプリの版と端末の情報も一緒に届きます。",
    send: "Feedback を送る",
    sending: "送っています…",
    error: "送れませんでした。少しあとでもう一度お試しください。",
    tooMany: "続けて送られたので、少し時間をおいてからお試しください。",
    sentTitle: "Feedback を受け取りました！",
    sentBody: "ありがとうございます。いただいた声はアプリの改善に使わせていただき、検討のうえ実装していきます。",
    again: "もう1つ送る",
  },
  mn: {
    title: "Санал хүсэлт илгээх",
    lead: "Анзаарсан зүйл, хүндрэл, хүсэж буй боломжоо бичээрэй. Ганц үг ч болно.",
    kinds: { bug: "Хүндрэл", idea: "Хүсэлт", love: "Таалагдсан" },
    placeholder: "Жишээ: Товч жижиг, дарахад хэцүү байна",
    emailLabel: "Хариу авахыг хүсвэл цахим шуудангийн хаяг",
    emailPlaceholder: "you@example.com",
    note: "Хэрэглүүрийн хувилбар, төхөөрөмжийн мэдээлэл хамт очно.",
    send: "Санал хүсэлт илгээх",
    sending: "Илгээж байна…",
    error: "Илгээж чадсангүй. Түр хүлээгээд дахин оролдоно уу.",
    tooMany: "Дараалан илгээсэн тул түр хүлээгээд дахин оролдоно уу.",
    sentTitle: "Санал хүсэлтийг хүлээн авлаа!",
    sentBody: "Баярлалаа. Таны саналыг хэрэглүүрээ сайжруулахад ашиглаж, судалж үзээд хэрэгжүүлнэ.",
    again: "Дахин илгээх",
  },
  en: {
    title: "Send feedback",
    lead: "Something you noticed, something that got in the way, or a feature you want. One line is enough.",
    kinds: { bug: "Problem", idea: "Idea", love: "Love it" },
    placeholder: "e.g. The button is too small to tap",
    emailLabel: "Email, only if you'd like a reply",
    emailPlaceholder: "you@example.com",
    note: "The app version and device info are sent along with it.",
    send: "Send feedback",
    sending: "Sending…",
    error: "Couldn't send. Please try again in a moment.",
    tooMany: "You've sent several in a row. Please wait a bit and try again.",
    sentTitle: "Feedback received!",
    sentBody: "Thank you. We'll use it to improve the app and build what fits after reviewing it.",
    again: "Send another",
  },
};

const KINDS: FeedbackKind[] = ["bug", "idea", "love"];

const fieldClass =
  "w-full rounded-md border border-border bg-card px-4 py-3 text-base text-foreground outline-none transition-[border-color,box-shadow] focus:border-[var(--accent-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]";

export type FeedbackFormProps = {
  locale: Locale;
  /** ?app= で Mac 版などから開かれたとき。無ければ ezaya.dev 自身 */
  app?: string;
  version?: string;
  os?: string;
  page?: string;
};

export default function FeedbackForm({
  locale,
  app,
  version = "",
  os = "",
  page = "",
}: FeedbackFormProps) {
  const t = COPY[locale];
  const appId = app && isFeedbackApp(app) ? app : "portfolio";
  const [state, setState] = useState<State>("idle");
  const [errorText, setErrorText] = useState("");
  const [kind, setKind] = useState<FeedbackKind | null>(null);
  const [message, setMessage] = useState("");
  const openedAt = useRef(0);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [fromPage, setFromPage] = useState(page);

  useEffect(() => {
    openedAt.current = Date.now();
    // ezaya.dev 内のリンクから来たときは、どのページから来たかを添える
    if (!page && appId === "portfolio" && document.referrer) {
      try {
        const ref = new URL(document.referrer);
        if (ref.host === location.host) setFromPage(ref.pathname);
      } catch {}
    }
  }, [page, appId]);

  async function submit(formData: FormData) {
    setState("sending");
    setErrorText("");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          app: appId,
          kind,
          message,
          email: String(formData.get("email") || ""),
          website: String(formData.get("website") || ""),
          version,
          os: os || navigator.userAgent,
          page: fromPage,
          locale,
          elapsedMs: Date.now() - openedAt.current,
        }),
      });
      if (res.status === 429) {
        setErrorText(t.tooMany);
        setState("error");
        return;
      }
      const data = (await res.json()) as { ok?: boolean };
      if (!res.ok || !data.ok) throw new Error();
      setState("sent");
    } catch {
      setErrorText(t.error);
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <Card gradientBorder className="rounded-lg p-6 text-center sm:p-9">
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", duration: 0.35, bounce: 0.2 }}
        >
          <p className="text-xl font-bold text-foreground">{t.sentTitle}</p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-soft">{t.sentBody}</p>
          <Button
            type="button"
            className="mt-6"
            onClick={() => {
              setMessage("");
              setKind(null);
              setState("idle");
              openedAt.current = Date.now();
              requestAnimationFrame(() => textRef.current?.focus());
            }}
          >
            {t.again}
          </Button>
        </motion.div>
      </Card>
    );
  }

  const appName = appId === "portfolio" ? "" : FEEDBACK_APPS[appId];

  return (
    <Card gradientBorder className="rounded-lg p-5 sm:p-8">
      <h1 className="text-xl font-semibold text-foreground sm:text-2xl">
        {t.title}
        {appName && <span className="ml-2 text-base font-normal text-soft">{appName}</span>}
      </h1>
      <p className="mt-3 text-base text-soft">{t.lead}</p>

      <form
        className="mt-6 space-y-4"
        action={async (fd) => {
          await submit(fd);
        }}
      >
        {/* 罠の欄 — 人には見えない */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
          defaultValue=""
        />

        <div className="flex flex-wrap gap-2" role="group" aria-label={t.title}>
          {KINDS.map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={kind === k}
              onClick={() => setKind(kind === k ? null : k)}
              className={`min-h-11 rounded-full border px-4 text-sm transition-[background-color,border-color,color] duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-2)] ${
                kind === k
                  ? "border-[var(--accent-2)] bg-[color:color-mix(in_srgb,var(--accent-2)_14%,transparent)] text-foreground"
                  : "border-border bg-card text-soft hover:text-foreground"
              }`}
            >
              {t.kinds[k]}
            </button>
          ))}
        </div>

        <textarea
          ref={textRef}
          name="message"
          rows={5}
          required
          autoFocus
          maxLength={MESSAGE_MAX}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-label={t.title}
          placeholder={t.placeholder}
          className={fieldClass}
        />

        <label className="block">
          <span className="mb-2 block text-sm text-soft">{t.emailLabel}</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            className={fieldClass}
          />
        </label>

        <Button
          type="submit"
          variant="primary"
          className="w-full px-7 font-bold sm:w-auto"
          disabled={state === "sending" || !message.trim()}
        >
          {state === "sending" ? t.sending : t.send}
        </Button>

        <p className="text-xs leading-relaxed text-muted">{t.note}</p>

        <div aria-live="polite" className="min-h-6 text-sm">
          {state === "error" && <p className="text-[var(--color-error)]">{errorText}</p>}
        </div>
      </form>
    </Card>
  );
}
