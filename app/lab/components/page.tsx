import type { Metadata } from "next";
import Link from "next/link";

import { AchievementsSidebar } from "../../no-trigger/preview/_components/achievements-sidebar";

export const metadata: Metadata = {
  title: "Component Playground",
  description: "A local workspace for quickly testing and iterating on UI components.",
};

const achievementsSidebarStates = [
  "default",
  "attention-seeking",
  "attention-neglecting",
  "attention-neglecting-0",
] as const;

export default function ComponentPlaygroundPage() {
  return (
    <main className="min-h-screen bg-[#f3f1ed] px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0px_1px_2px_rgba(0,0,0,0.04),0px_8px_24px_rgba(0,0,0,0.04)] sm:p-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6b6b6b]">
          Local Development
        </p>

        <div>
          <h1 className="font-display text-4xl leading-tight text-[#0f0f0f] sm:text-[42px]">
            Component Playground
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#4f4f4f]">
            Use this page as a dedicated sandbox for quickly building and testing components
            during local development.
          </p>
        </div>

        <div className="rounded-xl border border-dashed border-[#d3d3d3] bg-[#faf9f7] px-4 py-5 text-sm text-[#5f5f5f] sm:px-5">
          Start experimenting here by rendering one component at a time and iterating on
          behavior, layout, and states.
        </div>

        <section className="rounded-xl border border-[#d9d9d9] bg-[#faf9f7] p-4 sm:p-5">
          <h2 className="text-base font-semibold text-[#1c1c1c]">AchievementsSidebar states</h2>
          <p className="mt-1 text-sm text-[#5f5f5f]">
            Side-by-side view of every currently supported AchievementsSidebar variant.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {achievementsSidebarStates.map((state) => (
              <div
                key={state}
                className="rounded-xl border border-[#202432] bg-[linear-gradient(180deg,#11141C_0%,#0F1118_100%)] p-3 text-[#ECEEF4]"
              >
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#8D93A4]">
                  {state}
                </p>
                <div className="mt-2 rounded-lg border border-white/[0.06] bg-[#121622] p-1.5">
                  <AchievementsSidebar state={state} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <Link
          href="/"
          className="inline-flex w-fit rounded-lg border border-[#7a1f2b]/25 px-4 py-2 text-sm font-medium text-[#7a1f2b] transition hover:bg-[#7a1f2b]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a1f2b] focus-visible:ring-offset-2"
        >
          ← Back to achievements
        </Link>
      </div>
    </main>
  );
}
