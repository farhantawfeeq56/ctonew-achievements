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
            <button
              type="button"
              className="[font-synthesis:none] flex items-center gap-2 antialiased"
            >
              <span className="flex size-4 shrink-0 items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M10 6H2M2 6L5.5 2.5M2 6L5.5 9.5"
                    stroke="#938DA9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-xs/5 font-medium text-[#938DA9]">
                Back
              </span>
            </button>
            <h1 className="mt-3 text-[34px] leading-none font-semibold tracking-[-0.02em] text-[#f6f8ff]">
              Link repository
            </h1>
            <div className="mt-4 [font-synthesis:none] flex items-center gap-4.5 antialiased">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M11.6667 7.00001C11.6667 9.57734 9.57734 11.6667 7.00001 11.6667C4.79584 11.6667 2.94834 10.1383 2.46001 8.08334"
                    stroke="#B3AFC2"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.33331 7.00001C2.33331 4.42268 4.42265 2.33334 6.99998 2.33334C9.20415 2.33334 11.0516 3.86168 11.54 5.91668"
                    stroke="#B3AFC2"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.33331 9.33334V7.00001H4.66665"
                    stroke="#B3AFC2"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6667 4.66667V7.00001H9.33331"
                    stroke="#B3AFC2"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-['Instrument_Sans',system-ui,sans-serif] font-medium text-[#B3AFC2] text-xs/5">
                  Refetch
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M7.58333 2.33334C7.58333 2.01118 7.32217 1.75001 7 1.75001C6.67783 1.75001 6.41667 2.01118 6.41667 2.33334V3.00451C5.94561 3.11025 5.50867 3.30576 5.12549 3.57279L4.65084 3.09814C4.42303 2.87034 4.05368 2.87034 3.82587 3.09814C3.59807 3.32595 3.59807 3.69531 3.82587 3.92311L4.30054 4.39778C4.0335 4.78096 3.838 5.2179 3.73226 5.68895H3.06109C2.73892 5.68895 2.47776 5.95012 2.47776 6.27229C2.47776 6.59446 2.73892 6.85562 3.06109 6.85562H3.73226C3.838 7.32668 4.0335 7.76362 4.30054 8.1468L3.82587 8.62147C3.59807 8.84927 3.59807 9.21863 3.82587 9.44644C4.05368 9.67424 4.42303 9.67424 4.65084 9.44644L5.12549 8.97179C5.50867 9.23882 5.94561 9.43433 6.41667 9.54007V10.2112C6.41667 10.5334 6.67783 10.7946 7 10.7946C7.32217 10.7946 7.58333 10.5334 7.58333 10.2112V9.54007C8.05439 9.43433 8.49133 9.23882 8.87451 8.97179L9.34916 9.44644C9.57697 9.67424 9.94632 9.67424 10.1741 9.44644C10.4019 9.21863 10.4019 8.84927 10.1741 8.62147L9.69946 8.1468C9.9665 7.76362 10.162 7.32668 10.2677 6.85562H10.9389C11.2611 6.85562 11.5222 6.59446 11.5222 6.27229C11.5222 5.95012 11.2611 5.68895 10.9389 5.68895H10.2677C10.162 5.2179 9.9665 4.78096 9.69946 4.39778L10.1741 3.92311C10.4019 3.69531 10.4019 3.32595 10.1741 3.09814C9.94632 2.87034 9.57697 2.87034 9.34916 3.09814L8.87451 3.57279C8.49133 3.30576 8.05439 3.11025 7.58333 3.00451V2.33334ZM7 8.16668C5.95546 8.16668 5.10833 7.31955 5.10833 6.27501C5.10833 5.23047 5.95546 4.38334 7 4.38334C8.04454 4.38334 8.89167 5.23047 8.89167 6.27501C8.89167 7.31955 8.04454 8.16668 7 8.16668Z"
                    fill="#B3AFC2"
                  />
                </svg>
                <span className="font-['Instrument_Sans',system-ui,sans-serif] font-medium text-[#B3AFC2] text-xs/5">
                  Configure app
                </span>
              </div>
            </div>
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
