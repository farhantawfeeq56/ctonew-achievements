import React from "react";

export function SceneTwo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 bg-[#7a1f2b]/10 rounded-2xl flex items-center justify-center mb-6">
        <span className="font-display text-4xl text-[#7a1f2b]">2</span>
      </div>
      <h2 className="font-display text-3xl text-[#0f0f0f] mb-4">Scene Two</h2>
      <p className="text-[#6b6b6b] max-w-md leading-relaxed">
        The second scene explores how we might introduce subtle directional tension without overwhelming the user.
      </p>
      <div className="mt-8 space-y-3 w-full max-w-sm">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-12 bg-white rounded-lg border border-[#e5e5e5] shadow-sm flex items-center px-4"
          >
            <div className="w-2 h-2 rounded-full bg-[#7a1f2b]/30 mr-3" />
            <div className="h-2 w-24 bg-black/5 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
