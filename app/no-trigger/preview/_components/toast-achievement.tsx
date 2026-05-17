"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TOAST_VISIBLE_DURATION_MS = 5000;
const ENTRY_DURATION_MS = 420;
const EXIT_DURATION_MS = 340;

type ToastAchievementProps = {
  onExitComplete?: () => void;
};

export function ToastAchievement({ onExitComplete }: ToastAchievementProps) {
  const [phase, setPhase] = useState<"hidden" | "visible" | "exiting">("hidden");
  const [isUnmounted, setIsUnmounted] = useState(false);
  const [progressScale, setProgressScale] = useState(1);

  const visibleTimerRef = useRef<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);

  const startExit = useCallback(() => {
    if (exitTimerRef.current !== null) {
      return;
    }

    setPhase("exiting");

    exitTimerRef.current = window.setTimeout(() => {
      setIsUnmounted(true);
      onExitComplete?.();
    }, EXIT_DURATION_MS);
  }, [onExitComplete]);

  useEffect(() => {
    const entryFrameId = window.requestAnimationFrame(() => {
      setPhase("visible");
      setProgressScale(0);

      visibleTimerRef.current = window.setTimeout(() => {
        startExit();
      }, TOAST_VISIBLE_DURATION_MS);
    });

    return () => {
      window.cancelAnimationFrame(entryFrameId);

      if (visibleTimerRef.current !== null) {
        window.clearTimeout(visibleTimerRef.current);
      }

      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }
    };
  }, [startExit]);

  const handleDismiss = () => {
    if (visibleTimerRef.current !== null) {
      window.clearTimeout(visibleTimerRef.current);
      visibleTimerRef.current = null;
    }

    startExit();
  };

  if (isUnmounted) {
    return null;
  }

  return (
    <aside
      aria-live="polite"
      className={`[font-synthesis:none] flex w-[225px] flex-col gap-[10px] rounded-[8px] border border-[#303F44] bg-[linear-gradient(252.01deg,#252E37_2.54%,#2D3940_94.13%)] p-3 antialiased transition-[opacity,transform] will-change-transform ${
        phase === "visible" ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
      }`}
      style={{
        transitionDuration: `${phase === "exiting" ? EXIT_DURATION_MS : ENTRY_DURATION_MS}ms`,
        transitionTimingFunction:
          phase === "exiting" ? "cubic-bezier(0.4, 0, 1, 1)" : "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <div className="flex items-center gap-[9px]">
        <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-[6px] bg-[#174032]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="35"
            height="30"
            fill="#32E871"
            aria-hidden="true"
          >
            <path d="M313.85-147.27v-55.96h138.27v-139.5q-50.43-9.92-89.16-42.29t-54.69-81.06q-67.38-8.23-114.19-56.34-46.81-48.12-46.81-115.16v-40q0-22.87 16.54-39.41 16.55-16.55 39.42-16.55h94.69v-79.19h364.16v79.19h94.69q22.87 0 39.42 16.55 16.54 16.54 16.54 39.41v40q0 67.04-46.81 115.16-46.81 48.11-114.04 56.34-15.98 48.69-54.78 81.06-38.79 32.37-89.02 42.29v139.5h138.26v55.96H313.85ZM297.92-526.5v-151.08h-94.69v40q0 41.66 26.89 72.6 26.88 30.94 67.8 38.48Zm270.85 93.77q36.58-36.49 36.58-88.85v-235.19h-250.7v235.19q0 52.36 36.52 88.85 36.52 36.5 88.77 36.5 52.25 0 88.83-36.5Zm93.31-93.77q40.92-7.54 67.8-38.48 26.89-30.94 26.89-72.6v-40h-94.69v151.08ZM480-576.5Z" />
          </svg>
        </div>

        <div className="flex items-start gap-[9px]">
          <div className="flex flex-col justify-center gap-[2px]">
            <div className="flex items-center gap-3">
              <p className="font-['Instrument_Sans',system-ui,sans-serif] text-[14px] font-medium leading-[18px] text-[#ECEEF4]">
                Connected
              </p>
              <p className="font-['Instrument_Sans',system-ui,sans-serif] text-[12px] leading-[16px] text-[#2BD666]">
                +75
              </p>
            </div>
            <p className="w-fit font-['Instrument_Sans',system-ui,sans-serif] text-[12px] leading-[16px] text-[#A7ACB1]">
              You linked your first repo
            </p>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss achievement toast"
            className="flex h-3 w-3 shrink-0 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="12"
              height="12"
              fill="#9EA2AB"
              aria-hidden="true"
            >
              <path d="m258.42-218.69-38.92-39.73L440.27-480 219.5-701.58l38.92-39.73L480-519.73l221.58-221.58 38.92 39.73L519.73-480 740.5-258.42l-38.92 39.73L480-440.27 258.42-218.69Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex h-[5px] w-[198px] shrink-0 overflow-hidden rounded-[2px] bg-[#222732]">
        <div
          className="h-[5px] w-full shrink-0 rounded-[2px] bg-[#2AE06A] will-change-transform"
          style={{
            transform: `scaleX(${progressScale})`,
            transformOrigin: "right center",
            transition: `transform ${TOAST_VISIBLE_DURATION_MS}ms linear`,
          }}
        />
      </div>
    </aside>
  );
}
