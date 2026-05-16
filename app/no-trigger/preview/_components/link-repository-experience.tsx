"use client";

import { useState } from "react";
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
    name: "farhantawfeeq56/unblur-app",
    description: "Internal tools for restoring and validating image clarity workflows.",
    language: "TypeScript",
    updatedAt: "Updated 2 hours ago",
  },
  {
    id: "repo-2",
    name: "farhantawfeeq56/taro-warehouse-simulation",
    description: "Simulation models and operations UI for warehouse planning experiments.",
    language: "TypeScript",
    updatedAt: "Updated yesterday",
  },
  {
    id: "repo-3",
    name: "farhantawfeeq56/sentina",
    description: "Main product surface and analysis workflows for Sentina.",
    language: "TypeScript",
    updatedAt: "Updated 3 days ago",
  },
  {
    id: "repo-4",
    name: "farhantawfeeq56/postmortor",
    description: "Incident reviews, writeups, and operational follow-up tooling.",
    language: "MDX",
    updatedAt: "Updated 5 days ago",
  },
];

export function LinkRepositoryExperience() {
  const [selectedRepositoryId, setSelectedRepositoryId] = useState<string | null>(null);

  const selectedRepository =
    REPOSITORY_OPTIONS.find((repository) => repository.id === selectedRepositoryId) ?? null;

  return (
    <main className="flex min-h-screen bg-[#05050A] text-[#F2F1F7]">
      <div className="flex w-full justify-center bg-[linear-gradient(180deg,#131720_0%,#0D111A_100%)] px-4 py-5 sm:px-6 sm:py-8">
        <section className="w-full max-w-[576px] rounded-[22px] border border-white/8 bg-[#0A0813] px-4 py-5 shadow-[0_24px_90px_rgba(0,0,0,0.38)] sm:px-6 sm:py-6">
          <div className="flex flex-col gap-5">
            <header className="flex flex-col gap-3.5">
              <button
                type="button"
                className="[font-synthesis:none] inline-flex w-fit items-center gap-2 antialiased"
              >
                <span className="flex size-4 shrink-0 items-center justify-center" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M7.5 2.25 3.75 6 7.5 9.75"
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

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0 flex-1">
                  <h1 className="font-['Instrument_Sans',system-ui,sans-serif] text-[24px] leading-[34px] font-semibold tracking-[-0.02em] text-[#F2F1F7]">
                    Link repository
                  </h1>

                  <div className="[font-synthesis:none] mt-2 flex flex-wrap items-center gap-x-[18px] gap-y-2 antialiased">
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                          d="M11.6 7a4.6 4.6 0 1 1-1.35-3.25"
                          stroke="#B3AFC2"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.6 2.4v2.8H8.8"
                          stroke="#B3AFC2"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-['Instrument_Sans',system-ui,sans-serif] text-xs/5 font-medium text-[#B3AFC2]">
                        Refetch
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="#B3AFC2" aria-hidden="true">
                        <path d="M7 1.17A5.83 5.83 0 0 0 5.15 12.7c.29.05.4-.12.4-.28v-.98c-1.64.36-1.99-.7-1.99-.7-.27-.67-.66-.85-.66-.85-.54-.37.04-.37.04-.37.6.04.92.62.92.62.53.9 1.4.64 1.74.49.06-.39.21-.64.39-.79-1.3-.15-2.66-.65-2.66-2.9 0-.64.23-1.16.6-1.57-.06-.15-.26-.76.06-1.58 0 0 .49-.16 1.61.6A5.6 5.6 0 0 1 7 4.76a5.6 5.6 0 0 1 1.47.2c1.12-.76 1.61-.6 1.61-.6.32.82.12 1.43.06 1.58.38.41.6.93.6 1.57 0 2.26-1.37 2.74-2.67 2.89.22.19.41.57.41 1.16v1.72c0 .16.11.34.4.28A5.83 5.83 0 0 0 7 1.17Z" />
                      </svg>
                      <span className="font-['Instrument_Sans',system-ui,sans-serif] text-xs/5 font-medium text-[#B3AFC2]">
                        Configure app
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex h-8 w-full items-center rounded-[9px] border-2 border-white/8 bg-[#2A2732] px-4 sm:w-[201px]">
                  <input
                    type="text"
                    placeholder="Search repos"
                    readOnly
                    aria-label="Search repositories"
                    className="w-full border-0 bg-transparent font-['Instrument_Sans',system-ui,sans-serif] text-xs/6 font-medium text-[#8E8A99] placeholder:text-[#8E8A99] focus:outline-none"
                  />
                </div>
              </div>
            </header>

            <section
              aria-label="Repository list"
              className="overflow-hidden rounded-[8px] bg-[#23202B]"
            >
              <div role="radiogroup" aria-label="Available repositories" className="flex flex-col">
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

            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="repository-name"
                className="font-['Instrument_Sans',system-ui,sans-serif] text-[16px] leading-5 font-semibold text-[#F2F1F7]"
              >
                Repository name
              </label>
              <input
                id="repository-name"
                type="text"
                value={selectedRepository?.name ?? ""}
                placeholder="Select a repository"
                readOnly
                className="h-11 w-full rounded-[9px] border border-white/8 bg-[#2A2732] px-[18px] font-['Instrument_Sans',system-ui,sans-serif] text-[16px] leading-6 font-medium text-[#F2F1F7] placeholder:text-[#8E8A99] focus:outline-none"
              />
            </div>

            <button
              type="button"
              disabled={!selectedRepository}
              className="flex h-14 w-full items-center justify-center rounded-[12px] bg-[#3320D8] font-['Instrument_Sans',system-ui,sans-serif] text-[16px] leading-6 font-medium tracking-[-0.01em] text-white/78 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ca6ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0813] enabled:hover:bg-[#3b27ec] disabled:cursor-not-allowed disabled:bg-[#2A2732] disabled:text-[#8E8A99]"
            >
              Link
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
