import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No Trigger Preview",
  description: "Prototype preview screen under no-trigger.",
};

const sidebarItems = [
  { id: "overview", label: "Overview", active: true },
  { id: "rules", label: "Trigger Rules", active: false },
  { id: "events", label: "Event Logs", active: false },
  { id: "settings", label: "Settings", active: false },
];

export default function NoTriggerPreviewPage() {
  return (
    <main className="min-h-screen bg-[#ede9df]">
      <div className="flex min-h-screen">
        <aside className="w-full max-w-[272px] border-r border-white/10 bg-[#0f1217] px-5 py-6 text-white">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                <path
                  d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path d="M8.5 11.5L11 14L15.5 9.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-white/55">Achievement</p>
              <p className="text-base font-medium">No Trigger</p>
            </div>
          </div>

          <nav aria-label="No Trigger preview sections" className="mt-6 space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                  item.active
                    ? "bg-white/12 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                  <path
                    d="M7 5L12 10L7 15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </nav>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs tracking-[0.2em] uppercase text-white/45">Signal</p>
            <p className="mt-2 text-sm text-white/80">
              Waiting for user action to become a curiosity trigger.
            </p>
          </div>
        </aside>

        <section className="flex flex-1 items-center justify-center px-5 py-8 sm:px-8 lg:px-12">
          <div className="w-full max-w-[640px] rounded-3xl border border-black/10 bg-[#f8f6ef] p-6 shadow-[0px_1px_2px_rgba(0,0,0,0.06),0px_24px_40px_rgba(17,24,39,0.12)] sm:p-8">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6f6a5f]">
              Prototype Preview
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-[#13110f] sm:text-[44px]">
              No Trigger
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#4f4a42] sm:text-lg">
              The user completed a meaningful action, but the achievement system stayed
              silent. This prototype shows the intended feedback surface before we wire in
              trigger logic.
            </p>

            <div className="mt-8 rounded-2xl border border-[#d8d1c1] bg-white/80 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2c6e48] text-[#f3eccd]">
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                    <path
                      d="M10 3.5V16.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 10H3.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-[#201d18]">Prompt moment detected</h2>
                  <p className="mt-1 text-sm leading-6 text-[#5a554b]">
                    Surface one short prompt when the user finishes a task to convert momentum
                    into curiosity.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-[#111827] px-4 py-2.5 text-sm font-medium text-white"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                  <path
                    d="M4 10H16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 4L16 10L10 16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Continue prototype
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-xl border border-[#c5beae] bg-transparent px-4 py-2.5 text-sm font-medium text-[#3b372f]"
              >
                Back to no-trigger
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
