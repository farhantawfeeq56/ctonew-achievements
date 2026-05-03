import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No Trigger Preview",
  description: "Prototype preview screen under no-trigger.",
};

export default function NoTriggerPreviewPage() {
  return (
    <main className="min-h-screen bg-[#0b0d12] text-[#e8ecf1]">
      <div className="flex min-h-screen">
        <aside className="flex w-full max-w-[280px] flex-col border-r border-white/10 bg-[#0f131b] px-4 py-4">
          <div className="flex items-center justify-between px-2 py-1">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#1a2230] text-[#a8c1ff]">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
                  <path
                    d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M8.5 11.5L11 14L15.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm font-semibold tracking-wide text-white">cto</span>
            </div>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#9ba7ba] transition hover:bg-white/10 hover:text-white"
              aria-label="Open menu"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                <path
                  d="M4 6H16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M4 10H16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M4 14H12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-[#111826] p-2">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#d8e8ff] px-3 py-2 text-sm font-medium text-[#0f1728]"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                <path
                  d="M10 4V16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M4 10H16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              New Session
            </button>
          </div>

          <div className="mt-6 flex items-center justify-between px-2">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#8190a7]">
              Repositories
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-[11px] font-medium text-[#c6d1e3] transition hover:bg-white/10"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden>
                <path
                  d="M8.5 10.5L11.5 7.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M6.25 6.75L5.5 7.5C4.67 8.33 4.67 9.67 5.5 10.5C6.33 11.33 7.67 11.33 8.5 10.5L9.25 9.75"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.75 13.25L14.5 12.5C15.33 11.67 15.33 10.33 14.5 9.5C13.67 8.67 12.33 8.67 11.5 9.5L10.75 10.25"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Link repository
            </button>
          </div>

          <div className="mt-3 space-y-1 px-1">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-left"
            >
              <span className="text-sm text-white">cto/achievement-system</span>
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-[#8fa3c8]" aria-hidden>
                <path
                  d="M8 5L13 10L8 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[#c5cfde] transition hover:bg-white/10"
            >
              <span className="text-sm">sentina/web</span>
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                <path
                  d="M8 5L13 10L8 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[#c5cfde] transition hover:bg-white/10"
            >
              <span className="text-sm">sentina/api</span>
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                <path
                  d="M8 5L13 10L8 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-auto rounded-xl border border-white/10 bg-[#111826] p-3">
            <p className="text-xs font-medium text-[#d7e1f1]">sentina</p>
            <p className="mt-1 text-xs text-[#9aa7bd]">Connected workspace</p>
          </div>
        </aside>

        <section className="flex flex-1 flex-col">
          <header className="flex h-16 items-center justify-between border-b border-white/10 px-6">
            <div className="inline-flex items-center gap-2 text-sm text-[#c9d5ea]">
              <span className="font-medium text-white">sentina</span>
              <span className="text-[#6f7e95]">/</span>
              <span>cto/achievement-system</span>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-[#cdd8ea]"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                <path
                  d="M10 3V11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M6.5 7.5L10 11L13.5 7.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 15.5H16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              Export
            </button>
          </header>

          <div className="flex flex-1 items-center justify-center p-8">
            <div className="w-full max-w-[760px] rounded-2xl border border-white/10 bg-[#111826] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#8ea1be]">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-[#182338]">
                  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden>
                    <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.7" />
                    <path
                      d="M10 7V10L12 12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                No Trigger Preview
              </div>

              <h1 className="mt-4 text-3xl font-semibold text-white">No Trigger</h1>
              <p className="mt-3 text-sm leading-7 text-[#a6b4cb]">
                This is a static prototype for route /no-trigger/preview.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-xl border border-white/10 bg-[#0f1522] p-4">
                  <p className="text-sm text-[#d3def0]">cto</p>
                  <p className="mt-1 text-sm text-[#97a6be]">
                    Choose a repository and start a new sentina session.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0f1522] p-4">
                  <p className="text-sm text-[#d3def0]">New Session</p>
                  <p className="mt-1 text-sm text-[#97a6be]">
                    Link repository to enable contextual suggestions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
