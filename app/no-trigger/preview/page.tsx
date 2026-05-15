"use client";

import React, { useState } from "react";
import { SceneSwitcher } from "./_components/scene-switcher";
import { SceneOne } from "./_scenes/scene-one";
import { SceneTwo } from "./_scenes/scene-two";
import { SceneLinkRepository } from "./_scenes/scene-link-repository";

const SCENES = [
  { id: "one", label: "Scene One" },
  { id: "two", label: "Scene Two" },
  { id: "link-repository", label: "Link Repository" },
];

export default function PreviewPage() {
  const [currentScene, setCurrentScene] = useState("one");

  return (
    <main className="min-h-screen bg-[#f3f1ed] selection:bg-[#7a1f2b]/10">
      <div className="max-w-[768px] mx-auto pt-20 pb-32">
        <header className="mb-12 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e5e5e5] text-[13px] font-medium text-[#6b6b6b] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Interactive Prototype
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-[#0f0f0f] tracking-tight">
            No Trigger Preview
          </h1>
          <p className="mt-4 text-[#6b6b6b] text-lg max-w-xl">
            Exploring silent system responses and user curiosity through isolated prototype scenes.
          </p>
        </header>

        <div className="relative">
          <div className="transition-all duration-300 ease-in-out">
            {currentScene === "one" && <SceneOne />}
            {currentScene === "two" && <SceneTwo />}
            {currentScene === "link-repository" && <SceneLinkRepository />}
          </div>
        </div>
      </div>

      <SceneSwitcher
        currentScene={currentScene}
        onSceneChange={setCurrentScene}
        scenes={SCENES}
      />
    </main>
  );
}
