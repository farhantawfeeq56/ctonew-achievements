import React from "react";

export function SceneOne() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 bg-[#2c6e48]/10 rounded-2xl flex items-center justify-center mb-6">
        <span className="font-display text-4xl text-[#2c6e48]">1</span>
      </div>
      <h2 className="font-display text-3xl text-[#0f0f0f] mb-4">Scene One</h2>
      <p className="text-[#6b6b6b] max-w-md leading-relaxed">
        This is the first prototype scene. It demonstrates the initial state of the achievement system where users take actions but receive no immediate feedback.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-24 bg-white rounded-xl border border-[#e5e5e5] shadow-sm animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
