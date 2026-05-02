"use client";
import { useEffect, useState } from "react";
import Logo from "@/components/layout/header/Logo";

/* =========================
   Settings
========================= */
const LOADING_DURATION_MS = 1800;
const PROGRESS_INTERVAL_MS = 45;
const FADE_DURATION_MS = 500;
const STORAGE_KEY = "zaya-loading-seen";

type Phase = "hidden" | "visible" | "exiting";

type LoadingScreenProps = {
  showOnce?: boolean;
};

export default function LoadingScreen({ showOnce = true }: LoadingScreenProps) {
  const [phase, setPhase] = useState<Phase>("hidden");
  const [progress, setProgress] = useState(1);

  /* =========================
     Show / hide control
  ========================= */
  useEffect(() => {
    if (showOnce && localStorage.getItem(STORAGE_KEY) === "true") {
      document.documentElement.removeAttribute("data-loading");
      return;
    }
    if (showOnce) localStorage.setItem(STORAGE_KEY, "true");

    setPhase("visible");

    let fadeTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const loadTimer = setTimeout(() => {
      setProgress(100);
      fadeTimer = setTimeout(() => {
        setPhase("exiting");
        hideTimer = setTimeout(() => {
          document.documentElement.removeAttribute("data-loading");
          setPhase("hidden");
        }, FADE_DURATION_MS);
      }, 200);
    }, LOADING_DURATION_MS);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [showOnce]);

  /* =========================
     Progress animation (caps at 99 until explicit 100)
  ========================= */
  useEffect(() => {
    if (phase !== "visible") return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const step = Math.max(1, Math.ceil((100 - prev) * 0.07));
        return Math.min(99, prev + step);
      });
    }, PROGRESS_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [phase]);

  /* =========================
     Inert on site-content while loading screen is active
  ========================= */
  useEffect(() => {
    if (phase === "hidden") return;
    const el = document.querySelector<HTMLElement>(".site-content");
    if (!el) return;
    el.setAttribute("inert", "");
    return () => el.removeAttribute("inert");
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      role="status"
      aria-label="Loading"
      className="loader-overlay"
      style={{
        opacity: phase === "exiting" ? 0 : 1,
        transition:
          phase === "exiting" ? `opacity ${FADE_DURATION_MS}ms ease` : undefined,
      }}
    >
      {/* background */}
      <div className="loader-bg" />
      {/* ambient glow */}
      <div className="loader-ambient" />
      {/* content */}
      <div className="loader-content">
        {/* logo */}
        <div className="loader-logo-wrap">
          <div className="loader-logo-glow" />
          <Logo size={88} />
        </div>
        {/* progress */}
        <div className="loader-progress-area">
          <div className="loader-progress-labels">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="loader-progress-track">
            <div
              className="loader-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
