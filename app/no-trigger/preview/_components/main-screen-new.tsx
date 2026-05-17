"use client";

import Image from "next/image";

type MainScreenNewProps = {
  repositoryLabel: string;
};

export function MainScreenNew({ repositoryLabel }: MainScreenNewProps) {
  return (
    <main className="[font-synthesis:none] flex min-h-screen overflow-hidden bg-[#0F1118] text-[#ECEEF4] antialiased">
      <aside className="flex w-[270px] shrink-0 flex-col border-r border-[#1A1D27] bg-[linear-gradient(180deg,#11141C_0%,#0F1118_100%)]">
        <div className="flex flex-col gap-2.5 px-2 pt-4">
          <div className="flex items-center justify-between px-2">
            <h1 className="font-['Instrument_Sans',system-ui,sans-serif] text-2xl font-bold leading-[30px] tracking-[-0.07em] text-white">
              cto
            </h1>
            <button
              type="button"
              className="flex size-6 cursor-pointer items-center justify-center rounded-md border border-[#3A3F4F] text-xs text-[#D7D9E1] transition-all duration-150 hover:border-[#4B5368] hover:bg-white/[0.04] active:scale-[0.96]"
            >
              ◧
            </button>
          </div>

          <button
            type="button"
            className="flex h-[46px] cursor-pointer items-center justify-between rounded-[10px] border border-[#232634] bg-[#111218] px-3 text-left transition-all duration-150 hover:border-[#2F3443] hover:bg-[#14171F] active:scale-[0.995]"
          >
            <div className="flex items-center gap-2.5">
              <Image src="/icons/menu-bar.svg" alt="" width={12} height={12} />
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base font-semibold tracking-[-0.03em] text-[#F1F2F6]">
                {repositoryLabel}
              </span>
            </div>
            <span className="text-xs text-[#CDCCCD]">
              <Image src="/icons/below-arrow.svg" alt="" width={12} height={12} />
            </span>
          </button>

          <button
            type="button"
            className="flex h-[34px] cursor-pointer items-center gap-2.5 rounded-lg border border-[#2A2D37] bg-[#1B1B21] px-2.5 transition-all duration-150 hover:border-[#383D4A] hover:bg-[#242530] active:scale-[0.985]"
          >
            <Image src="/icons/new-session.svg" alt="" width={12} height={12} />
            <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base text-[#E8E9EF]">New Session</span>
          </button>
        </div>

        <div className="mt-1 flex flex-col gap-0.5 px-2">
          <button
            type="button"
            className="flex h-10 cursor-pointer items-center gap-3 rounded-lg px-2.5 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.985]"
          >
            <Image src="/icons/agent-session.svg" alt="" width={12} height={12} />
            <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base leading-5">Agent Sessions</span>
          </button>
          <button
            type="button"
            className="flex h-10 cursor-pointer items-center gap-3 rounded-lg px-2.5 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.985]"
          >
            <Image src="/icons/repo.svg" alt="" width={12} height={12} />
            <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base leading-5">Repositories</span>
          </button>
          <button
            type="button"
            className="flex h-10 cursor-pointer items-center gap-3 rounded-lg px-2.5 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.985]"
          >
            <Image src="/icons/tasks.svg" alt="" width={12} height={12} />
            <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base leading-5">Tasks</span>
          </button>
        </div>

        <div className="mt-2 h-px bg-[#181B25]" />

        <div className="flex flex-1 flex-col justify-between px-2 pb-4">
          <div className="mt-2.5 space-y-0.5">
            <button
              type="button"
              className="flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-2.5 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.985]"
            >
              <Image src="/icons/mcps.svg" alt="" width={12} height={12} />
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base leading-5">MCPs</span>
            </button>
            <button
              type="button"
              className="flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-2.5 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.985]"
            >
              <Image src="/icons/achievements.svg" alt="" width={12} height={12} />
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base leading-5">Achievements</span>
            </button>
            <button
              type="button"
              className="flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-2.5 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.985]"
            >
              <Image src="/icons/settings.svg" alt="" width={12} height={12} />
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base leading-5">Settings</span>
            </button>
            <button
              type="button"
              className="flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-2.5 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.985]"
            >
              <Image src="/icons/support.svg" alt="" width={12} height={12} />
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base leading-5">Support</span>
            </button>
          </div>

          <button
            type="button"
            className="rounded-2xl border border-[#20232E] bg-[#11141B] text-left transition-all duration-200 hover:border-[#2A2F3D] hover:bg-[#161A24] active:scale-[0.995]"
          >
            <div className="flex items-center justify-between px-[18px] py-4">
              <div>
                <div className="font-['Instrument_Sans',system-ui,sans-serif] text-lg font-semibold tracking-[-0.03em] text-[#EEF1F8]">
                  Farhan
                </div>
                <div className="w-40 font-['Instrument_Sans',system-ui,sans-serif] text-[11px] leading-[15px] text-[#CFD3DD]">
                  webdesignbyft@gmail.com
                </div>
              </div>
              <span className="text-xs text-[#CDCCCD]">
                <Image src="/icons/below-arrow.svg" alt="" width={12} height={12} />
              </span>
            </div>
          </button>
        </div>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col bg-[linear-gradient(180deg,#1B1D27_0%,#171922_100%)]">
        <header className="flex h-11 items-center justify-between border-b border-white/[0.04] bg-[#12141CDB] px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex cursor-pointer items-center gap-2.5 rounded-lg px-1.5 py-1 transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.98]"
            >
              <span className="flex size-3.5 items-center justify-center rounded-sm bg-[#1E2D20]">
                <Image src="/icons/menu-bar.svg" alt="" width={12} height={12} />
              </span>
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-[21px] font-semibold tracking-[-0.04em] text-[#EEF1F8]">
                {repositoryLabel}
              </span>
            </button>

            <button
              type="button"
              className="cursor-pointer rounded-full bg-white/[0.06] px-2.5 py-1 font-['Instrument_Sans',system-ui,sans-serif] text-[13px] leading-4 text-[#8D93A4] transition-all duration-150 hover:bg-white/[0.11] active:scale-[0.97]"
            >
              Project
            </button>
          </div>

          <div className="flex items-center gap-[10px] text-lg text-[#63697A]">
            <button
              type="button"
              className="flex size-7 cursor-pointer items-center justify-center rounded-md transition-all duration-150 hover:bg-white/[0.08] hover:text-[#939AAF] active:scale-[0.94]"
            >
              ⇄
            </button>
            <button
              type="button"
              className="flex size-7 cursor-pointer items-center justify-center rounded-md transition-all duration-150 hover:bg-white/[0.08] hover:text-[#939AAF] active:scale-[0.94]"
            >
              ＋
            </button>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-[970px] flex-col gap-[18px] px-[30px] pt-[14px]">
          <div className="flex h-[195px] flex-col rounded-[20px] border border-[#6E768C73] bg-[linear-gradient(180deg,#2A2D38_0%,#252832_100%)] p-4">
            <p className="font-['Instrument_Sans',system-ui,sans-serif] text-[15px] leading-[18px] tracking-[-0.02em] text-[#A5AAB8]">
              How can I help you?
            </p>
            <div className="grow" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px] text-sm text-[#D3D7E2]">
                <button
                  type="button"
                  className="cursor-pointer rounded-lg px-2 py-1 transition-all duration-150 hover:bg-white/[0.07] active:scale-[0.97]"
                >
                  1 repo <Image src="/icons/below-arrow.svg" alt="" width={12} height={12} />
                </button>
                <button
                  type="button"
                  className="cursor-pointer rounded-lg px-2 py-1 transition-all duration-150 hover:bg-white/[0.07] active:scale-[0.97]"
                >
                  GPT 5.3 Codex <Image src="/icons/below-arrow.svg" alt="" width={12} height={12} />
                </button>
              </div>
              <button
                type="button"
                className="h-[38px] cursor-pointer rounded-xl bg-[linear-gradient(180deg,#5A46F1_0%,#4D39E8_100%)] px-[14px] font-['Instrument_Sans',system-ui,sans-serif] text-[15px] font-semibold text-[#E9E4FF] transition-all duration-150 hover:brightness-110 active:scale-[0.97]"
              >
                Start session ↑
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[18px]">
            {[
              ["Agent Sessions", "0"],
              ["Repositories", "1"],
              ["Tasks", "0"],
            ].map(([label, value]) => (
              <button
                key={label}
                type="button"
                className="flex h-[52px] cursor-pointer items-center justify-between rounded-xl border border-[#48545F73] bg-[linear-gradient(90deg,#272A33_0%,#252933_100%)] px-4 text-left transition-all duration-150 hover:border-[#6A7488A3] hover:bg-[linear-gradient(90deg,#2E323D_0%,#2A2E39_100%)] active:scale-[0.985]"
              >
                <span className="font-['Instrument_Sans',system-ui,sans-serif] text-sm text-[#D3D8E4]">{label}</span>
                <span className="font-['Instrument_Sans',system-ui,sans-serif] text-lg font-bold text-[#F4F5F9]">
                  {value}
                </span>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-[#2D3240] bg-[#1A1D27] p-4">
            <p className="font-['Instrument_Sans',system-ui,sans-serif] text-[13px] leading-4 text-[#D1D6E0]">
              Agent Sessions
            </p>
            <p className="mt-1 font-['Instrument_Sans',system-ui,sans-serif] text-xs leading-4 text-[#99A0AF]">
              Work with the agent to run tasks on your repositories
            </p>
            <div className="mt-4 flex flex-col items-center gap-2.5 pb-1">
              <span className="flex size-[38px] items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.08]">
                <Image src="/icons/agent-session.svg" alt="" width={12} height={12} />
              </span>
              <span className="font-['Instrument_Sans',system-ui,sans-serif] text-sm font-semibold text-[#E3E6EE]">
                No recent sessions
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
