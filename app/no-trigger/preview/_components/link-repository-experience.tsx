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
    description: "Main app shell, workspace UX, and authenticated product flows.",
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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#040816] px-4 py-8 text-[#e5ebff] sm:px-6 sm:py-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[#1e2f64]/35 blur-[160px]" />
        <div className="absolute -bottom-[180px] right-[-220px] h-[560px] w-[560px] rounded-full bg-[#152453]/30 blur-[170px]" />
        <div className="absolute -left-[180px] bottom-[8%] h-[420px] w-[420px] rounded-full bg-[#0f1b3f]/35 blur-[145px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[948px]">
        <div className="overflow-hidden rounded-[30px] border border-[#1c2a4b] bg-[linear-gradient(180deg,#0b1327_0%,#091125_100%)] shadow-[0_35px_90px_rgba(1,4,16,0.72)]">
          <header className="border-b border-[#172341] px-6 py-7 sm:px-9 sm:py-8">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7f8eb8]">
              Repository settings
            </p>
            <h1 className="mt-3 text-[34px] leading-none font-semibold tracking-[-0.02em] text-[#f6f8ff]">
              Link repository
            </h1>
            <p className="mt-4 max-w-[610px] text-[15px] leading-7 text-[#9eabcc]">
              Choose which GitHub repository should power achievement tracking. Selection
              stays local in this preview.
            </p>
          </header>

          <div className="grid gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:gap-6">
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

            <aside className="flex min-h-[430px] flex-col rounded-[20px] border border-[#22345d] bg-[linear-gradient(180deg,rgba(13,23,48,0.82)_0%,rgba(10,18,39,0.72)_100%)] p-5 sm:p-6">
              <h2 className="text-[32px] leading-none font-semibold tracking-[-0.018em] text-[#f6f8ff] lg:text-[30px]">
                Ready to link
              </h2>

              <div className="mt-6">
                <label htmlFor="repository-name" className="text-sm font-medium text-[#b7c2e3]">
                  Repository name
                </label>
                <input
                  id="repository-name"
                  type="text"
                  value={selectedRepository?.name ?? ""}
                  placeholder="Select a repository"
                  readOnly
                  className="mt-2 w-full rounded-[12px] border border-[#2a3a63] bg-[#071027] px-4 py-3 text-[15px] text-[#e7ecff] placeholder:text-[#6071a1] focus-visible:outline-none"
                />
              </div>

              <p className="mt-4 min-h-6 text-sm leading-6 text-[#8d9dc3]">
                {selectedRepository
                  ? `Selected: ${selectedRepository.language} · ${selectedRepository.updatedAt}`
                  : "Choose a repository from the list to continue."}
              </p>

              <button
                type="button"
                disabled={!selectedRepository}
                className="mt-auto inline-flex w-full items-center justify-center rounded-[12px] px-4 py-3 text-sm font-semibold tracking-[0.01em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ca6ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1730] disabled:cursor-not-allowed disabled:border disabled:border-[#2c3a61] disabled:bg-[#34436c] disabled:text-[#95a3c9] enabled:bg-[#617de8] enabled:text-white enabled:hover:bg-[#6d87ec]"
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
