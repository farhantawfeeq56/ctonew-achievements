"use client";

import { useState, useEffect } from "react";
import { MainScreenNew } from "./main-screen-new";
import type { AchievementsSidebarState } from "./achievements-sidebar";
import { ToastDailyLimit } from "./toast-daily-limit";
import { ToastSpeedLimit } from "./toast-speed-limit";
import { Snackbar } from "./snackbar";

type MainScreenProps = {
  repositoryLabel: string;
};

type ToastType = null | "daily" | "speed";

export function MainScreen({ repositoryLabel }: MainScreenProps) {
  const [sidebarState, setSidebarState] = useState<AchievementsSidebarState>("attention-neglecting");
  const [achievementsCount, setAchievementsCount] = useState(1);
  const [isShowingAchievements, setIsShowingAchievements] = useState(false);
  const [toastType, setToastType] = useState<ToastType>(null);
  const [clickCount, setClickCount] = useState(0);
  const [snackbarMessage, setSnackbarMessage] = useState(
    "Simulate hitting the daily usage limit."
  );
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isSidebarAnimated, setIsSidebarAnimated] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isIntermediate, setIsIntermediate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSnackbar(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAchievementsClick = () => {
    setIsShowingAchievements(true);
    setToastType(null);
  };

  const handleReturn = () => {
    setIsShowingAchievements(false);
    if (achievementsCount === 2) {
      setIsCompleted(true);
      setSnackbarMessage("You have completed the prototype of the solution of the two problems. Click the button to view the full case study");
      setSidebarState("attention-neglecting");
      setShowSnackbar(true);
    } else {
      setSidebarState("attention-neglecting");
      setAchievementsCount(1);
    }
  };

  const handleSnackbarAction = () => {
    if (isCompleted) {
      window.location.href = "/hidden-secrets/preview";
      return;
    }

    if (isIntermediate) {
      setIsSidebarAnimated(true);
      setTimeout(() => {
        setIsSidebarAnimated(false);
      }, 2000);
      setShowSnackbar(false);
      setIsIntermediate(false);
      return;
    }

    setShowSnackbar(false);

    setTimeout(() => {
      if (clickCount === 0) {
        setToastType("daily");
      } else {
        setToastType("speed");
      }
    }, 500);
  };

  if (isShowingAchievements) {
    return (
      <div className="[font-synthesis:none] flex min-h-screen flex-col items-center justify-center bg-[#0F1118] text-[#ECEEF4] antialiased px-4">
        <p className="mb-8 font-['Instrument_Sans',system-ui,sans-serif] text-xl text-[#F1F2F6] max-w-2xl text-center">
          This is a dummy preview of the achievements screen. Secret achievement &quot;Speed limit&quot; will be unlocked for the user.
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
      {toastType && (
        <div className="pointer-events-none absolute right-4 top-4 z-50 sm:right-6 sm:top-6">
          <div className="pointer-events-auto">
            {toastType === "daily" ? (
              <ToastDailyLimit 
                onExitComplete={() => {
                  setToastType(null);
                  setSnackbarMessage("Hit the limit again to trigger a secret achievement!");
                  setClickCount(1);
                  setTimeout(() => {
                    setShowSnackbar(true);
                  }, 500);
                }} 
              />
            ) : (
              <ToastSpeedLimit 
                onExitComplete={() => {
                  setToastType(null);
                  setSidebarState("attention-seeking");
                  setAchievementsCount(2);
                  
                  setTimeout(() => {
                    setSnackbarMessage("Secret achievement unlocked!");
                    setIsIntermediate(true);
                    setShowSnackbar(true);
                  }, 500);
                }} 
              />
            )}
          </div>
        </div>
      )}
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
            message={snackbarMessage} 
            onAction={handleSnackbarAction} 
            isVisible={showSnackbar}
            actionLabel={
              isCompleted 
                ? "view the full case study" 
                : isIntermediate 
                  ? "Show where it is" 
                  : "Click here"
            }
          />
        </div>
      </div>
    </div>
  );
}
