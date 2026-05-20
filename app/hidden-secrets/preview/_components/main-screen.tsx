"use client";

import { useCallback, useEffect, useState } from "react";
import { MainScreenNew } from "./main-screen-new";
import { ToastAchievement } from "./toast-achievement";
import type { AchievementsSidebarState } from "./achievements-sidebar";

const TOAST_ENTRY_DELAY_MS = 500;

type MainScreenProps = {
  repositoryLabel: string;
  isVisible: boolean;
};

export function MainScreen({ repositoryLabel, isVisible }: MainScreenProps) {
  const [isToastMounted, setIsToastMounted] = useState(false);
  const [sidebarState, setSidebarState] = useState<AchievementsSidebarState>("attention-neglecting");
  const [isShowingAchievements, setIsShowingAchievements] = useState(false);
  const [toastEverExited, setToastEverExited] = useState(false);

  useEffect(() => {
    if (!isVisible || toastEverExited) {
      return;
    }

    const entryTimerId = window.setTimeout(() => {
      setIsToastMounted(true);
    }, TOAST_ENTRY_DELAY_MS);

    return () => {
      window.clearTimeout(entryTimerId);
    };
  }, [isVisible, toastEverExited]);

  const handleToastExit = useCallback(() => {
    setIsToastMounted(false);
    setSidebarState("attention-seeking");
    setToastEverExited(true);
  }, []);

  const handleAchievementsClick = () => {
    setIsShowingAchievements(true);
    setIsToastMounted(false);
  };

  const handleReturn = () => {
    setIsShowingAchievements(false);
    setSidebarState("attention-neglecting");
    setToastEverExited(true);
    setIsToastMounted(false);
  };

  if (isShowingAchievements) {
    return (
      <div className="[font-synthesis:none] flex min-h-screen flex-col items-center justify-center bg-[#0F1118] text-[#ECEEF4] antialiased">
        <p className="mb-8 font-['Instrument_Sans',system-ui,sans-serif] text-xl text-[#F1F2F6]">
          This is a dummy preview of the achievements screen.
        </p>
        <button
          type="button"
          onClick={handleReturn}
          className="cursor-pointer rounded-xl bg-[linear-gradient(180deg,#5A46F1_0%,#4D39E8_100%)] px-6 py-3 font-['Instrument_Sans',system-ui,sans-serif] text-base font-semibold text-[#E9E4FF] transition-all duration-150 hover:brightness-110 active:scale-[0.97]"
        >
          Return to main screen
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      {isToastMounted ? (
        <div className="pointer-events-none absolute right-4 top-4 z-30 sm:right-6 sm:top-6">
          <div className="pointer-events-auto">
            <ToastAchievement
              onExitComplete={handleToastExit}
              onClick={handleAchievementsClick}
            />
          </div>
        </div>
      ) : null}

      <MainScreenNew
        repositoryLabel={repositoryLabel}
        achievementsSidebarState={sidebarState}
        onAchievementsClick={handleAchievementsClick}
      />
    </div>
  );
}
