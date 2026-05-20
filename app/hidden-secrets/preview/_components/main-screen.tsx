"use client";

import { useState } from "react";
import { MainScreenNew } from "./main-screen-new";
import type { AchievementsSidebarState } from "./achievements-sidebar";

type MainScreenProps = {
  repositoryLabel: string;
};

export function MainScreen({ repositoryLabel }: MainScreenProps) {
  const [sidebarState, setSidebarState] = useState<AchievementsSidebarState>("attention-neglecting");
  const [isShowingAchievements, setIsShowingAchievements] = useState(false);

  const handleAchievementsClick = () => {
    setIsShowingAchievements(true);
  };

  const handleReturn = () => {
    setIsShowingAchievements(false);
    setSidebarState("attention-neglecting");
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
      <MainScreenNew
        repositoryLabel={repositoryLabel}
        achievementsSidebarState={sidebarState}
        onAchievementsClick={handleAchievementsClick}
      />
    </div>
  );
}
