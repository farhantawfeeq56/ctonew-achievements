"use client";

const primaryNav = ["Agent Sessions", "Repositories", "Tasks"];
const secondaryNav = ["MCPs", "Achievements", "Settings", "Help"];

type MainScreenNewProps = {
  repositoryLabel: string;
};

function DotIcon({ active = false }: { active?: boolean }) {
  return (
    <span
      className={`inline-block size-2 rounded-sm ${active ? "bg-[#6ECA78]" : "bg-[#CDCCCD]"}`}
      aria-hidden="true"
    />
  );
}

export function MainScreenNew({ repositoryLabel }: MainScreenNewProps) {
  const readableRepositoryLabel = repositoryLabel.trim() || "project";

  return (
    <main className="[font-synthesis:none] flex min-h-screen overflow-hidden bg-[#0F1118] text-[#ECEEF4] antialiased">
      <aside className="flex w-[260px] shrink-0 flex-col border-r border-[#1A1D27] bg-[linear-gradient(180deg,#11141C_0%,#0F1118_100%)]">
        <div className="flex flex-col gap-2 px-1.5 pt-3.5">
          <div className="flex items-center justify-between px-1.5">
            <h1 className="font-['Instrument_Sans',system-ui,sans-serif] text-xl font-bold leading-7 tracking-[-0.07em] text-white">
              cto
            </h1>
            <button
              type="button"
              className="flex size-5 cursor-pointer items-center justify-center rounded-sm border border-[#3A3F4F] text-[11px] text-[#D7D9E1] transition-all duration-150 hover:border-[#4A5062] hover:bg-white/[0.05] active:scale-95 active:bg-white/[0.08]"
            >
              ◧
            </button>
          </div>
          <button
            type="button"
            className="flex h-11 cursor-pointer items-center justify-between rounded-lg border border-[#232634] bg-[#111218] px-2.5 text-left transition-all duration-150 hover:border-[#313648] hover:bg-[#171a24] active:scale-[0.99] active:bg-[#1B1E2A]"
          >
            <span className="flex items-center gap-2">
              <DotIcon active />
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-sm font-semibold tracking-[-0.03em] text-[#F1F2F6]">
                {readableRepositoryLabel}
              </span>
            </span>
            <span className="text-[11px] text-[#CDCCCD]">⌄</span>
          </button>
          <button
            type="button"
            className="flex h-8 cursor-pointer items-center gap-2 rounded-md border border-[#2A2D37] bg-[#1B1B21] px-2 transition-all duration-150 hover:border-[#3a3f4e] hover:bg-[#22232b] active:scale-[0.99] active:bg-[#262832]"
          >
            <DotIcon />
            <span className="font-['Instrument_Sans',system-ui,sans-serif] text-sm text-[#E8E9EF]">New Session</span>
          </button>
        </div>

        <div className="mt-0.5 flex flex-col gap-0.5 px-1.5">
          {primaryNav.map((item) => (
            <button
              key={item}
              type="button"
              className="flex h-9 cursor-pointer items-center gap-2.5 rounded-md px-2 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.99] active:bg-white/[0.07]"
            >
              <DotIcon />
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-sm leading-4">{item}</span>
            </button>
          ))}
        </div>

        <div className="mt-1.5 h-px bg-[#181B25]" />

        <div className="flex flex-1 flex-col justify-between px-1.5 pb-3.5">
          <div className="mt-2 space-y-0.5">
            {secondaryNav.map((item) => (
              <button
                key={item}
                type="button"
                className="flex h-9 cursor-pointer items-center gap-2.5 rounded-md px-2 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.99] active:bg-white/[0.07]"
              >
                <DotIcon />
                <span className="font-['Instrument_Sans',system-ui,sans-serif] text-sm leading-4">{item}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="w-full cursor-pointer rounded-xl border border-[#20232E] bg-[#11141B] text-left transition-all duration-150 hover:border-[#2A2E3B] hover:bg-[#151923] active:scale-[0.99]"
          >
            <span className="flex items-center justify-between px-4 py-3.5">
              <span>
                <span className="font-['Instrument_Sans',system-ui,sans-serif] block text-base font-semibold tracking-[-0.03em] text-[#EEF1F8]">
                  Farhan
                </span>
                <span className="w-36 font-['Instrument_Sans',system-ui,sans-serif] block text-[10px] leading-[14px] text-[#CFD3DD]">
                  webdesignbyft@gmail.com
                </span>
              </span>
              <span className="text-[11px] text-[#CDCCCD]">⌄</span>
            </span>
          </button>
        </div>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col bg-[linear-gradient(180deg,#1B1D27_0%,#171922_100%)]">
        <header className="flex h-10 items-center justify-between border-b border-white/[0.04] bg-[#12141CDB] px-5">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2">
              <span className="flex size-3 items-center justify-center rounded-sm bg-[#1E2D20]">
                <DotIcon active />
              </span>
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-xl font-semibold tracking-[-0.04em] text-[#EEF1F8]">
                {readableRepositoryLabel}
              </span>
            </div>
            <button
              type="button"
              className="cursor-pointer rounded-full bg-white/[0.06] px-2 py-0.5 font-['Instrument_Sans',system-ui,sans-serif] text-xs leading-4 text-[#8D93A4] transition-colors duration-150 hover:bg-white/[0.1] active:bg-white/[0.14]"
            >
              Project
            </button>
          </div>
          <div className="flex items-center gap-2 text-base text-[#63697A]">
            <button
              type="button"
              className="flex size-6 cursor-pointer items-center justify-center rounded-sm transition-all duration-150 hover:bg-white/[0.08] hover:text-[#8B92A7] active:scale-95 active:bg-white/[0.12]"
            >
              ⇄
            </button>
            <button
              type="button"
              className="flex size-6 cursor-pointer items-center justify-center rounded-sm transition-all duration-150 hover:bg-white/[0.08] hover:text-[#8B92A7] active:scale-95 active:bg-white/[0.12]"
            >
              ＋
            </button>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-[960px] flex-col gap-4 px-7 pt-3">
          <div className="flex h-[188px] flex-col rounded-[18px] border border-[#6E768C73] bg-[linear-gradient(180deg,#2A2D38_0%,#252832_100%)] p-3.5">
            <p className="font-['Instrument_Sans',system-ui,sans-serif] text-sm leading-4 tracking-[-0.02em] text-[#A5AAB8]">
              How can I help you?
            </p>
            <div className="grow" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#D3D7E2]">
                <button
                  type="button"
                  className="cursor-pointer rounded-md px-1.5 py-0.5 transition-colors duration-150 hover:bg-white/[0.08] active:bg-white/[0.12]"
                >
                  1 repo ⌄
                </button>
                <button
                  type="button"
                  className="cursor-pointer rounded-md px-1.5 py-0.5 transition-colors duration-150 hover:bg-white/[0.08] active:bg-white/[0.12]"
                >
                  GPT 5.3 Codex ⌄
                </button>
              </div>
              <button
                type="button"
                className="h-9 cursor-pointer rounded-lg bg-[linear-gradient(180deg,#5A46F1_0%,#4D39E8_100%)] px-3 font-['Instrument_Sans',system-ui,sans-serif] text-sm font-semibold text-[#E9E4FF] transition-all duration-150 hover:brightness-110 active:scale-[0.98]"
              >
                Start session ↑
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              ["Agent Sessions", "0"],
              ["Repositories", "1"],
              ["Tasks", "0"],
            ].map(([label, value]) => (
              <button
                type="button"
                key={label}
                className="flex h-12 cursor-pointer items-center justify-between rounded-lg border border-[#48545F73] bg-[linear-gradient(90deg,#272A33_0%,#252933_100%)] px-3.5 text-left transition-all duration-150 hover:border-[#5D6975A6] hover:bg-[linear-gradient(90deg,#2B2F39_0%,#292D38_100%)] active:scale-[0.99]"
              >
                <span className="font-['Instrument_Sans',system-ui,sans-serif] text-xs text-[#D3D8E4]">{label}</span>
                <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base font-bold text-[#F4F5F9]">{value}</span>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-[#2D3240] bg-[#1A1D27] p-3.5">
            <p className="font-['Instrument_Sans',system-ui,sans-serif] text-xs leading-4 text-[#D1D6E0]">
              Agent Sessions
            </p>
            <p className="mt-0.5 font-['Instrument_Sans',system-ui,sans-serif] text-[11px] leading-4 text-[#99A0AF]">
              Work with the agent to run tasks on your repositories
            </p>
            <div className="mt-3.5 flex flex-col items-center gap-2 pb-0.5">
              <span className="flex size-9 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.08]">
                <DotIcon />
              </span>
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-xs font-semibold text-[#E3E6EE]">
                No recent sessions
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
