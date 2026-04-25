"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { getMessages, type Locale } from "@/lib/i18n";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = getMessages(locale).contact;
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message.",
      );
    }
  }

  return (
    <Card
      gradientBorder
      className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 md:p-9"
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
          className="mt-8 space-y-4"
          action={async (formData) => {
            await handleSubmit(formData);
          }}
        >
          <input
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-soft">Name</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-white/35"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-soft">Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-white/35"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm text-soft">Message</span>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-white/35"
              placeholder="Tell me about your project or idea."
            />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit" variant="primary" className="px-5 py-3">
              {state === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </div>

          <div aria-live="polite" className="min-h-6 text-sm">
            {state === "success" && (
              <p className="text-soft">
                Your message has been sent successfully.
              </p>
            )}
            {state === "error" && (
              <p className="text-red-300">
                {errorMessage || "Something went wrong. Please try again."}
              </p>
            )}
          </div>
        </form>
      </div>
    </Card>
  );
}