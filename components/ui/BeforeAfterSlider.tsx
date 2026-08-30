"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { animate, useReducedMotion } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

const MIN = 8;
const MAX = 92;

type Labels = {
  before: string;
  after: string;
  hint: string;
};

/**
 * 汎用Before/Afterスライダー。
 * before/after を全面重ねて clip-path で分割し、仕切りのドラッグ/矢印キーで
 * 見比べられる。ホームの「よくあるページ vs Zayaがつくる顔」デモで使用。
 */
export default function BeforeAfterSlider({
  before,
  after,
  labels,
  initial = 50,
}: {
  before: ReactNode;
  after: ReactNode;
  labels: Labels;
  initial?: number;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(initial);
  const draggingRef = useRef(false);
  const [interacted, setInteracted] = useState(false);
  const reduce = useReducedMotion();

  const setX = useCallback((value: number) => {
    const clamped = Math.min(MAX, Math.max(MIN, value));
    xRef.current = clamped;
    const root = rootRef.current;
    if (root) {
      root.style.setProperty("--ba-x", `${clamped}%`);
      const divider = root.querySelector<HTMLElement>("[role='slider']");
      divider?.setAttribute("aria-valuenow", String(Math.round(clamped)));
    }
  }, []);

  // 初回だけ仕切りをふわっと往復させて「動かせる」ことを伝える
  useEffect(() => {
    if (reduce) return;
    const timer = setTimeout(() => {
      if (draggingRef.current) return;
      const controls = animate(initial, initial + 14, {
        duration: 0.8,
        ease: "easeInOut",
        onUpdate: setX,
        onComplete: () => {
          if (draggingRef.current) return;
          animate(initial + 14, initial, {
            duration: 0.8,
            ease: "easeInOut",
            onUpdate: setX,
          });
        },
      });
      return () => controls.stop();
    }, 1400);
    return () => clearTimeout(timer);
  }, [initial, reduce, setX]);

  const moveTo = useCallback(
    (clientX: number) => {
      const rect = rootRef.current?.getBoundingClientRect();
      if (!rect || rect.width === 0) return;
      setX(((clientX - rect.left) / rect.width) * 100);
    },
    [setX],
  );

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    setInteracted(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    moveTo(event.clientX);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    moveTo(event.clientX);
  }

  function handlePointerUp() {
    draggingRef.current = false;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    setInteracted(true);
    setX(xRef.current + (event.key === "ArrowLeft" ? -5 : 5));
  }

  return (
    <div
      ref={rootRef}
      className="ba-root relative h-full"
      style={{ "--ba-x": `${initial}%` } as CSSProperties}
    >
      {/* Before: 見比べ用の複製面。支援技術と操作からは切り離す */}
      <div className="ba-before absolute inset-0 z-0 overflow-hidden" aria-hidden inert>
        {before}
      </div>

      <div className="ba-after relative z-10 h-full">{after}</div>

      {/* ドラッグ可能な仕切り */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={`${labels.before} / ${labels.after}`}
        aria-orientation="horizontal"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={initial}
        className="ba-divider"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        <span className="ba-line" aria-hidden />
        <span className="ba-handle" aria-hidden>
          <ChevronsLeftRight size={18} strokeWidth={2.2} />
        </span>
        {!interacted && (
          <span className="ba-hint" aria-hidden>
            {labels.hint}
          </span>
        )}
      </div>
    </div>
  );
}
