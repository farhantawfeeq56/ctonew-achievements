"use client";

import React, { useState } from "react";
import { RepositoryRow } from "../_components/repository-row";

const MOCK_REPOSITORIES = [
  {
    id: "cto-new/achievements",
    name: "cto-new/achievements",
    description: "The core achievements engine and game mechanics.",
  },
  {
    id: "cto-new/website",
    name: "cto-new/website",
    description: "Main marketing site and documentation.",
  },
  {
    id: "cto-new/cli",
    name: "cto-new/cli",
    description: "Developer tools for the command line interface.",
  },
  {
    id: "cto-new/docs",
    name: "cto-new/docs",
    description: "Technical documentation and API references.",
  },
];

export function SceneLinkRepository() {
  const [selectedRepoId, setSelectedRepoId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedRepoId(id);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="font-display text-4xl text-[#0f0f0f] mb-3">
          Link repository
        </h2>
        <p className="text-[#6b6b6b] leading-relaxed text-lg">
          Select a GitHub repository to track your achievements and contributions.
        </p>
      </div>

      <div className="space-y-3">
        {MOCK_REPOSITORIES.map((repo) => (
          <RepositoryRow
            key={repo.id}
            id={repo.id}
            name={repo.name}
            description={repo.description}
            isSelected={selectedRepoId === repo.id}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <div className="mt-10">
        <button
          disabled={!selectedRepoId}
          className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer ${
            selectedRepoId
              ? "bg-[#0f0f0f] text-white shadow-[0px_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 active:translate-y-0"
              : "bg-[#e5e5e5] text-[#9b9b9b] cursor-not-allowed"
          }`}
        >
          Link repository
        </button>
        <p className="text-center text-sm text-[#6b6b6b] mt-4">
          You can change this later in your settings.
        </p>
      </div>
    </div>
  );
}
