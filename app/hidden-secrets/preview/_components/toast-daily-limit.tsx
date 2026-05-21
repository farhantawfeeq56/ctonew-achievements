"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TOAST_PROGRESS_DURATION_MS = 5000;
const ENTRY_DURATION_MS = 300;
const EXIT_DURATION_MS = 250;

type ToastDailyLimitProps = {
  onExitComplete?: () => void;
};

type ToastPhase = "hidden" | "visible" | "exiting";

export function ToastDailyLimit({ onExitComplete }: ToastDailyLimitProps) {
  const [phase, setPhase] = useState<ToastPhase>("hidden");
  const [isUnmounted, setIsUnmounted] = useState(false);
  const [progressScale, setProgressScale] = useState(1);

  const entryTimerRef = useRef<number | null>(null);
  const progressTimerRef = useRef<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);

  const onExitCompleteRef = useRef(onExitComplete);
  useEffect(() => {
    onExitCompleteRef.current = onExitComplete;
  }, [onExitComplete]);

  const startExit = useCallback(() => {
    if (exitTimerRef.current !== null) {
      return;
    }

    if (entryTimerRef.current !== null) {
      window.clearTimeout(entryTimerRef.current);
      entryTimerRef.current = null;
    }

    if (progressTimerRef.current !== null) {
      window.clearTimeout(progressTimerRef.current);
      progressTimerRef.current = null;
    }

    setPhase("exiting");

    exitTimerRef.current = window.setTimeout(() => {
      setIsUnmounted(true);
      onExitCompleteRef.current?.();
    }, EXIT_DURATION_MS);
  }, []);

  const startProgress = useCallback(() => {
    if (exitTimerRef.current !== null) {
      return;
    }

    setProgressScale(0);

    progressTimerRef.current = window.setTimeout(() => {
      startExit();
    }, TOAST_PROGRESS_DURATION_MS);
  }, [startExit]);

  useEffect(() => {
    let secondFrameId: number | null = null;

    const entryFrameId = window.requestAnimationFrame(() => {
      secondFrameId = window.requestAnimationFrame(() => {
        setPhase("visible");

        entryTimerRef.current = window.setTimeout(() => {
          startProgress();
        }, ENTRY_DURATION_MS);
      });
    });

    return () => {
      window.cancelAnimationFrame(entryFrameId);
      if (secondFrameId !== null) {
        window.cancelAnimationFrame(secondFrameId);
      }

      if (entryTimerRef.current !== null) {
        window.clearTimeout(entryTimerRef.current);
      }

      if (progressTimerRef.current !== null) {
        window.clearTimeout(progressTimerRef.current);
      }

      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }
    };
  }, [startProgress]);

  if (isUnmounted) {
    return null;
  }

  const isVisible = phase === "visible";
  const isExiting = phase === "exiting";

  return (
    <aside
      aria-live="polite"
      className={`[font-synthesis:none] flex w-fit flex-col gap-[10px] rounded-[8px] border border-[#303F44] bg-[linear-gradient(252.01deg,#252E37_2.54%,#2D3940_94.13%)] p-3 antialiased transition-all duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity] ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } ${
        isExiting
          ? "duration-[250ms] ease-in"
          : ""
      }`}
    >
      <div className="flex items-start gap-[9px]">
        <p className="font-['Instrument_Sans',system-ui,sans-serif] text-[14px] font-medium leading-[18px] text-[#ECEEF4]">
          You just hit your daily limit again!
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            startExit();
          }}
          aria-label="Dismiss notification"
          className="flex h-3 w-3 shrink-0 items-center justify-center cursor-pointer mt-[1px]"
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

      <div className="flex h-[5px] w-full shrink-0 overflow-hidden rounded-[2px] bg-[#222732]">
        <div
          className={`h-[5px] w-full shrink-0 rounded-[2px] bg-[#2AE06A] transition-transform duration-[5000ms] ease-linear will-change-transform origin-left ${
            progressScale === 0 ? "scale-x-0" : "scale-x-100"
          }`}
        />
      </div>
    </aside>
  );
}
