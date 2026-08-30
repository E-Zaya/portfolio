"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { getMessages, type Locale } from "@/lib/i18n";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = getMessages(locale).contact;
  const zaza = getMessages(locale).zaza;
  const [state, setState] = useState<FormState>("idle");
  // 送信完了は1行表示だと気づきにくいので、ポップアップで確実に伝える
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const startedRef = useRef(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // ポップアップ表示中: Escで閉じる・背面スクロール停止・ダイアログへフォーカス
  useEffect(() => {
    if (!showSuccess) return;
    dialogRef.current?.focus();
    document.documentElement.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowSuccess(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSuccess]);

  async function handleSubmit(formData: FormData) {
    setState("loading");
    setErrorMessage("");

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      company: String(formData.get("company") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setState("success");
      setShowSuccess(true);
      formRef.current?.reset();
      track("Contact Form Submit", { locale, result: "success" });
    } catch (error) {
      setState("error");
      track("Contact Form Submit", { locale, result: "error" });
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message.",
      );
    }
  }

  return (
    <Card
      gradientBorder
      className="relative overflow-hidden rounded-3xl p-5 sm:p-7 md:p-9"
    >
      <div
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl"
        style={{
          background: "color-mix(in srgb, var(--accent-1) 18%, transparent)",
        }}
      />

      <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.22em] text-muted">
          {t.primaryLabel}
        </p>

        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
          {t.primaryTitle}
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-7 text-soft sm:text-base">
          {t.primaryDescription}
        </p>

        <form
          ref={formRef}
          className="mt-8 space-y-4"
          onFocusCapture={() => {
            if (startedRef.current) return;
            startedRef.current = true;
            track("Contact Form Start", { locale });
          }}
          action={async (formData) => {
            await handleSubmit(formData);
          }}
        >
          {/* Honeypot — 人間には見えない / SR からも無視される */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
            defaultValue=""
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-soft">{t.form.nameLabel}</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-[var(--accent-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
                placeholder={t.form.namePlaceholder}
                autoComplete="name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-soft">{t.form.emailLabel}</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-[var(--accent-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
                placeholder={t.form.emailPlaceholder}
                autoComplete="email"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm text-soft">{t.form.messageLabel}</span>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-[var(--accent-2)] focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]"
              placeholder={t.form.messagePlaceholder}
            />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="submit"
              variant="primary"
              className="w-full px-7 font-bold sm:w-auto"
              disabled={state === "loading"}
            >
              {state === "loading" ? t.form.sending : t.form.submit}
            </Button>
          </div>

          {/* 安心のひとこと — 送るハードルを下げるマイクロコピー */}
          <p className="text-[13px] leading-relaxed text-muted">{t.form.note}</p>

          <div aria-live="polite" className="min-h-6 text-sm">
            {state === "error" && (
              <p className="text-[var(--color-error)]">
                {errorMessage || t.form.error}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* 送信完了ポップアップ — Zazaが喜んで知らせる。
          Cardのbackdrop-filterがfixedの基準を変えてしまうため、
          createPortalでbody直下に描画して画面中央に確実に出す */}
      {showSuccess &&
        createPortal(
        <div
          className="project-modal-backdrop fixed inset-0 z-9000 flex items-center justify-center p-4"
          onClick={() => setShowSuccess(false)}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            aria-labelledby="contact-success-title"
            aria-describedby="contact-success-body"
            className="project-modal-panel relative w-full max-w-sm rounded-3xl p-7 text-center outline-none sm:p-9"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/Zaza/mascot/zaza-celebrate.png"
              alt=""
              aria-hidden
              width={140}
              height={140}
              className="mx-auto w-24 sm:w-28"
            />
            <p
              id="contact-success-title"
              className="mt-4 text-xl font-bold text-foreground sm:text-2xl"
            >
              {zaza.formSuccess}
            </p>
            <p
              id="contact-success-body"
              className="mt-2 text-sm leading-7 text-soft"
            >
              {t.form.success}
            </p>
            <Button
              type="button"
              variant="primary"
              className="mt-6 w-full font-bold"
              onClick={() => setShowSuccess(false)}
            >
              {t.form.close}
            </Button>
          </motion.div>
        </div>,
        document.body,
      )}
    </Card>
  );
}
