"use client";

import { useMemo, useState } from "react";
import { RepositoryRow } from "./repository-row";

type RepositoryOption = {
  id: string;
  name: string;
  description: string;
  language: string;
  updatedAt: string;
};

const REPOSITORY_OPTIONS: RepositoryOption[] = [
  {
    id: "repo-1",
    name: "cto-new/achievements-engine",
    description: "Core events pipeline and achievement progression logic.",
    language: "TypeScript",
    updatedAt: "Updated 2 hours ago",
  },
  {
    id: "repo-2",
    name: "cto-new/product-web",
    description: "Main app shell, workspace UX, and authenticated dashboard flows.",
    language: "TypeScript",
    updatedAt: "Updated yesterday",
  },
  {
    id: "repo-3",
    name: "cto-new/design-system",
    description: "Shared tokens, primitives, and accessible component contracts.",
    language: "CSS",
    updatedAt: "Updated 3 days ago",
  },
  {
    id: "repo-4",
    name: "cto-new/data-platform",
    description: "Ingestion jobs, analytics models, and warehouse transformations.",
    language: "Python",
    updatedAt: "Updated 5 days ago",
  },
  {
    id: "repo-5",
    name: "cto-new/developer-docs",
    description: "Product docs, API guides, and onboarding references.",
    language: "MDX",
    updatedAt: "Updated 1 week ago",
  },
];

export function LinkRepositoryExperience() {
  const [selectedRepositoryId, setSelectedRepositoryId] = useState<string | null>(null);

  const selectedRepository = useMemo(
    () => REPOSITORY_OPTIONS.find((repository) => repository.id === selectedRepositoryId) ?? null,
    [selectedRepositoryId],
  );

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050914] px-4 py-8 text-[#e7ebf6] sm:px-6 sm:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#22336d]/30 blur-[120px]" />
        <div className="absolute right-[-140px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#1a2a5e]/25 blur-[140px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[920px]">
        <div className="overflow-hidden rounded-[28px] border border-[#202841] bg-[linear-gradient(180deg,#0d1427_0%,#0a1121_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.58)]">
          <header className="border-b border-[#1b2340] px-5 py-6 sm:px-8 sm:py-8">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8c9ac2]">
              Repository settings
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-[30px]">
              Link repository
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#a7b1cd] sm:text-base">
              Choose which GitHub repository should power achievement tracking. Selection
              stays local in this preview.
            </p>
          </header>

          <div className="grid gap-6 px-5 py-6 sm:px-7 sm:py-7 md:grid-cols-[minmax(0,1.22fr)_minmax(0,0.95fr)] md:gap-5">
            <section aria-label="Repository list">
              <div role="radiogroup" aria-label="Available repositories" className="space-y-2.5">
                {REPOSITORY_OPTIONS.map((repository) => (
                  <RepositoryRow
                    key={repository.id}
                    id={repository.id}
                    name={repository.name}
                    description={repository.description}
                    language={repository.language}
                    updatedAt={repository.updatedAt}
                    isSelected={selectedRepositoryId === repository.id}
                    onSelect={setSelectedRepositoryId}
                  />
                ))}
              </div>
            </section>

            <aside className="flex h-full flex-col rounded-2xl border border-[#232d4a] bg-[#0f172d]/85 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">Ready to link</h2>

              <div className="mt-5">
                <label htmlFor="repository-name" className="text-sm font-medium text-[#bcc7e4]">
                  Repository name
                </label>
                <input
                  id="repository-name"
                  type="text"
                  value={selectedRepository?.name ?? ""}
                  placeholder="Select a repository"
                  readOnly
                  className="mt-2 w-full rounded-xl border border-[#2d3858] bg-[#0a1123] px-4 py-3 text-sm text-[#e7ebf6] placeholder:text-[#60709c] focus-visible:outline-none"
                />
              </div>

              <p className="mt-4 min-h-6 text-sm text-[#8d9ac0]">
                {selectedRepository
                  ? `Selected: ${selectedRepository.language} · ${selectedRepository.updatedAt}`
                  : "Choose a repository from the list to continue."}
              </p>

              <button
                type="button"
                disabled={!selectedRepository}
                className="mt-auto inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#829cf9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172d] disabled:cursor-not-allowed disabled:bg-[#2b3551] disabled:text-[#8d97b7] enabled:bg-[#6c85f6] enabled:text-white enabled:hover:bg-[#7c93ff]"
              >
                Link
              </button>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
