"use client";

import { useState } from "react";
import { MainScreenNew } from "./main-screen-new";
import { ToastAchievement } from "./toast-achievement";

type MainScreenProps = {
  repositoryLabel: string;
};

export function MainScreen({ repositoryLabel }: MainScreenProps) {
  const [isToastMounted, setIsToastMounted] = useState(true);

  return (
    <div className="relative">
      {isToastMounted ? (
        <div className="pointer-events-none absolute right-6 top-5 z-30 sm:right-8 sm:top-6">
          <div className="pointer-events-auto">
            <ToastAchievement onExitComplete={() => setIsToastMounted(false)} />
          </div>
        </div>
      ) : null}

      <MainScreenNew repositoryLabel={repositoryLabel} />
    </div>
  );
}
