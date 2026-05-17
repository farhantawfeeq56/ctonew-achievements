"use client";

import { useEffect, useState } from "react";
import { MainScreenNew } from "./main-screen-new";
import { ToastAchievement } from "./toast-achievement";

const TOAST_ENTRY_DELAY_MS = 500;

type MainScreenProps = {
  repositoryLabel: string;
  isVisible: boolean;
};

export function MainScreen({ repositoryLabel, isVisible }: MainScreenProps) {
  const [isToastMounted, setIsToastMounted] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const entryTimerId = window.setTimeout(() => {
      setIsToastMounted(true);
    }, TOAST_ENTRY_DELAY_MS);

    return () => {
      window.clearTimeout(entryTimerId);
    };
  }, [isVisible]);

  return (
    <div className="relative">
      {isToastMounted ? (
        <div className="pointer-events-none absolute right-4 top-4 z-30 sm:right-6 sm:top-6">
          <div className="pointer-events-auto">
            <ToastAchievement onExitComplete={() => setIsToastMounted(false)} />
          </div>
        </div>
      ) : null}

      <MainScreenNew repositoryLabel={repositoryLabel} />
    </div>
  );
}
