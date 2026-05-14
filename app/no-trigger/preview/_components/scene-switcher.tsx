"use client";

import React from "react";

interface SceneSwitcherProps {
  currentScene: string;
  onSceneChange: (scene: string) => void;
  scenes: { id: string; label: string }[];
}

export function SceneSwitcher({
  currentScene,
  onSceneChange,
  scenes,
}: SceneSwitcherProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-[#e5e5e5] shadow-[0px_1px_2px_rgba(0,0,0,0.04),0px_8px_24px_rgba(0,0,0,0.04)]">
        {scenes.map((scene) => (
          <button
            key={scene.id}
            onClick={() => onSceneChange(scene.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              currentScene === scene.id
                ? "bg-[#0f0f0f] text-white shadow-sm"
                : "text-[#6b6b6b] hover:text-[#0f0f0f] hover:bg-black/5"
            }`}
          >
            {scene.label}
          </button>
        ))}
      </div>
    </div>
  );
}
