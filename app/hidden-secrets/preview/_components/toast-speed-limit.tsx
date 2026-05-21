"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TOAST_PROGRESS_DURATION_MS = 5000;
const ENTRY_DURATION_MS = 300;
const EXIT_DURATION_MS = 250;

type ToastSpeedLimitProps = {
  onExitComplete?: () => void;
  onClick?: () => void;
};

type ToastPhase = "hidden" | "visible" | "exiting";

export function ToastSpeedLimit({ onExitComplete, onClick }: ToastSpeedLimitProps) {
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
      role="button"
      onClick={onClick}
      className={`[font-synthesis:none] flex w-fit cursor-pointer flex-col gap-[10px] rounded-[8px] border border-[#303F44] bg-[linear-gradient(252.01deg,#252E37_2.54%,#2D3940_94.13%)] p-3 antialiased transition-all duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity] ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } ${isExiting ? "duration-[250ms] ease-in" : ""}`}
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
                Speed limit
              </p>
              <p className="font-['Instrument_Sans',system-ui,sans-serif] text-[12px] leading-[16px] text-[#2BD666]">
                +100
              </p>
            </div>
            <p className="w-fit font-['Instrument_Sans',system-ui,sans-serif] text-[12px] leading-[16px] text-[#A7ACB1]">
              You hit your daily limit
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              startExit();
            }}
            aria-label="Dismiss toast"
            className="flex h-3 w-3 shrink-0 cursor-pointer items-center justify-center"
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

      <div className="flex h-[5px] w-full shrink-0 overflow-hidden rounded-[2px] bg-[#222732]">
        <div
          className={`h-[5px] w-full shrink-0 origin-left rounded-[2px] bg-[#2AE06A] transition-transform duration-[5000ms] ease-linear will-change-transform ${
            progressScale === 0 ? "scale-x-0" : "scale-x-100"
          }`}
        />
      </div>
    </aside>
  );
}
