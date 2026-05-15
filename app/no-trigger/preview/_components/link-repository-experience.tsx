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
    <main className="min-h-screen bg-[#050914] px-4 py-8 text-[#e7ebf6] sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-[#232b43] bg-[#0c1324] shadow-[0_22px_70px_rgba(0,0,0,0.55)]">
          <div className="border-b border-[#1b2136] px-5 py-6 sm:px-8 sm:py-8">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#8d9ac0]">
              Repository settings
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Link repository
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#a8b2ce] sm:text-base">
              Choose which GitHub repository should power achievement tracking. Selection
              stays local in this preview.
            </p>
          </div>

          <div className="grid gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            <section aria-label="Repository list" className="space-y-3">
              <div role="radiogroup" aria-label="Available repositories" className="space-y-3">
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

            <aside className="rounded-2xl border border-[#202842] bg-[#0f172d] p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">Ready to link</h2>

              <div className="mt-5">
                <label
                  htmlFor="repository-name"
                  className="text-sm font-medium text-[#bdc7e4]"
                >
                  Repository name
                </label>
                <input
                  id="repository-name"
                  type="text"
                  value={selectedRepository?.name ?? ""}
                  placeholder="Select a repository"
                  readOnly
                  className="mt-2 w-full rounded-xl border border-[#2b3553] bg-[#0a1123] px-4 py-3 text-sm text-[#e7ebf6] placeholder:text-[#60709c] focus-visible:outline-none"
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
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84a0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172d] disabled:cursor-not-allowed disabled:bg-[#2a324d] disabled:text-[#8893b3] enabled:bg-[#6d86f7] enabled:text-white enabled:hover:bg-[#7f96ff]"
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
