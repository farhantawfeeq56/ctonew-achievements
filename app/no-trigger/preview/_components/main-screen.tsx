"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MainScreenNew } from "./main-screen-new";
import { ToastAchievement } from "./toast-achievement";
import { Snackbar } from "./snackbar";
import type { AchievementsSidebarState } from "./achievements-sidebar";

const TOAST_ENTRY_DELAY_MS = 500;
const SNACKBAR_ENTRY_DELAY_MS = 1000;

type MainScreenProps = {
  repositoryLabel: string;
  isVisible: boolean;
};

export function MainScreen({ repositoryLabel, isVisible }: MainScreenProps) {
  const router = useRouter();
  const [isToastMounted, setIsToastMounted] = useState(false);
  const [sidebarState, setSidebarState] = useState<AchievementsSidebarState>("default");
  const [achievementsCount, setAchievementsCount] = useState(0);
  const [isShowingAchievements, setIsShowingAchievements] = useState(false);
  const [toastEverExited, setToastEverExited] = useState(false);
  
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isSidebarAnimated, setIsSidebarAnimated] = useState(false);
  const [hasVisitedAchievements, setHasVisitedAchievements] = useState(false);

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
    setAchievementsCount(1);
    setToastEverExited(true);
    
    // Trigger Snackbar appearance after a delay
    setTimeout(() => {
      setShowSnackbar(true);
    }, SNACKBAR_ENTRY_DELAY_MS);
  }, []);

  const handleAchievementsClick = () => {
    setIsShowingAchievements(true);
    setIsToastMounted(false);
    setShowSnackbar(false);
  };

  const handleReturn = () => {
    setIsShowingAchievements(false);
    setSidebarState("attention-neglecting");
    setAchievementsCount(1);
    setToastEverExited(true);
    setIsToastMounted(false);
    setHasVisitedAchievements(true);
    setShowSnackbar(true);
  };

  const handleShowWhereItIs = () => {
    setIsSidebarAnimated(true);
    setTimeout(() => {
      setIsSidebarAnimated(false);
    }, 1000);
  };

  const handleNextProblem = () => {
    router.push("/hidden-secrets/preview");
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
        achievementsCount={achievementsCount}
        onAchievementsClick={handleAchievementsClick}
        isAchievementsSidebarAnimated={isSidebarAnimated}
      />

      <div className="pointer-events-none fixed bottom-10 left-1/2 z-50 w-full max-w-[802px] -translate-x-1/2 px-4">
        <div className="flex justify-center pointer-events-auto">
          <Snackbar 
            isVisible={showSnackbar}
            message={
              hasVisitedAchievements 
                ? "After the user visits the achievements view, the sidebar returns to its default state"
                : "A newly unlocked achievement updates the sidebar state to encourage users to explore achievements in the app. Try clicking on it"
            } 
            actionLabel={hasVisitedAchievements ? "Go to the next problem" : "Show where it is"}
            onAction={hasVisitedAchievements ? handleNextProblem : handleShowWhereItIs} 
          />
        </div>
      </div>
    </div>
  );
}
