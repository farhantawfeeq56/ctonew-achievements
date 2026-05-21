"use client";

import { useEffect, useState } from "react";

export function CalmLoadingScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure the entry animation triggers after mount
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F3F1ED] transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-[24px] bg-[#2C6E48]">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#F3ECCD]/30 border-t-[#F3ECCD]"></div>
        </div>
        <p className="font-display text-2xl text-[#2C6E48]">
          Loading the prototype of the next problem...
        </p>
      </div>
    </div>
  );
}
