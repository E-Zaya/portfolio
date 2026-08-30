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

const MIN = 10;
const MAX = 90;
/** 初期位置: Before(左)が3割ちょい見えて、本命のAfterが主役でいられる位置 */
const INITIAL = 32;

type Labels = {
  before: string;
  after: string;
  hint: string;
};

/**
 * Hero全体のBefore/Afterスライダー。
 * 同じHeroコンテンツを2回描画し、左を「よくある古いページ風」(.hero-before)、
 * 右を通常デザインとして clip-path で分割。仕切りをドラッグすると
 * 「Zayaに頼むと何が変わるか」をページ自身が実演する。
 */
export default function HeroBeforeAfter({
  before,
  after,
  labels,
}: {
  before: ReactNode;
  after: ReactNode;
  labels: Labels;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(INITIAL);
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
      const controls = animate(INITIAL, 46, {
        duration: 0.8,
        ease: "easeInOut",
        onUpdate: setX,
        onComplete: () => {
          if (draggingRef.current) return;
          animate(46, INITIAL, {
            duration: 0.8,
            ease: "easeInOut",
            onUpdate: setX,
          });
        },
      });
      return () => controls.stop();
    }, 1400);
    return () => clearTimeout(timer);
  }, [reduce, setX]);

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
      className="hero-ba relative"
      style={{ "--ba-x": `${INITIAL}%` } as CSSProperties}
    >
      {/* Before: 装飾用の複製なので支援技術と操作からは切り離す */}
      <div className="hero-before absolute inset-0 z-0" aria-hidden inert>
        {before}
      </div>

      <div className="hero-after relative z-10">{after}</div>

      {/* 仕切り上部の新旧ラベル */}
      <span className="hero-ba-label hero-ba-label-before" aria-hidden>
        {labels.before}
      </span>
      <span className="hero-ba-label hero-ba-label-after" aria-hidden>
        {labels.after}
      </span>

      {/* ドラッグ可能な仕切り */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={`${labels.before} / ${labels.after}`}
        aria-orientation="horizontal"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={INITIAL}
        className="hero-ba-divider"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        <span className="hero-ba-line" aria-hidden />
        <span className="hero-ba-handle" aria-hidden>
          <ChevronsLeftRight size={18} strokeWidth={2.2} />
        </span>
        {!interacted && (
          <span className="hero-ba-hint" aria-hidden>
            {labels.hint}
          </span>
        )}
      </div>
    </div>
  );
}
