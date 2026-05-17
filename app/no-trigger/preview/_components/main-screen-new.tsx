"use client";

import Image from "next/image";
import { AchievementsSidebar } from "./achievements-sidebar";

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
            <AchievementsSidebar state="attention-neglecting-0" />
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
                <div className="[font-synthesis:none] flex items-center gap-2 antialiased">
                  <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "14px", height: "14px", flexShrink: "0" }}>
                    <path d="M5.701 0C7.334 0.075 9.226 -0.281 10.588 0.824C11.371 1.46 11.986 3.07 12.801 3.375L19.088 3.334C20.333 3.335 22.578 3.282 23.711 3.597C25.104 4.186 26.124 5.672 26.182 7.184C26.307 10.88 26.287 14.617 26.219 18.314C26.13 23.152 22.783 22.607 19.23 22.606L13.587 22.605L7.337 22.605C6.138 22.606 4.953 22.613 3.748 22.582C2.475 22.593 1.047 21.926 0.499 20.71C-0.112 19.352 0.011 17.317 0.011 15.828L0.013 11.385L0.012 6.521C0.012 5.26 -0.08 3.486 0.243 2.266C0.407 1.647 1.375 0.658 1.974 0.406C3.08 -0.059 4.513 0.031 5.701 0ZM8.714 2.474C8.196 2.264 4.496 2.287 3.876 2.354C3.357 2.395 3.115 2.438 2.612 2.587C2.232 3.565 2.329 5.573 2.328 6.662L2.33 11.05L2.328 15.668C2.329 16.805 2.231 18.49 2.551 19.587C2.719 20.164 3.9 20.288 4.383 20.277C5.729 20.302 7.074 20.292 8.418 20.291L15.534 20.292L19.94 20.293C20.572 20.293 21.789 20.323 22.377 20.252C22.983 20.179 23.167 20.111 23.641 19.726C23.948 18.754 23.858 17.514 23.857 16.491L23.853 12.837L23.858 9.378C23.86 8.185 23.936 7.25 23.591 6.093C22.366 5.812 21.575 5.876 20.337 5.877L15.926 5.882C14.599 5.883 13.435 5.95 12.121 5.71C10.314 5.38 9.915 2.961 8.714 2.474ZM10.676 8.856C11.403 8.968 11.708 9.247 11.911 9.921C11.657 11.021 10.552 12.26 9.828 13.158C10.36 13.623 11.683 15.407 11.946 16.057C11.64 16.79 11.351 17.213 10.505 17.311C9.679 16.958 7.44 13.972 7.14 13.087C7.466 12.307 8.162 11.383 8.691 10.706C9.18 10.079 9.901 9.05 10.676 8.856ZM15.666 8.853C16.464 9.021 18.244 11.577 18.709 12.322C18.88 12.596 19.088 12.934 19.009 13.268C18.805 14.129 16.571 16.81 15.805 17.277C15.654 17.296 15.495 17.303 15.349 17.242C13.146 16.325 15.489 14.328 16.381 13.138C15.784 12.366 14.787 11.184 14.446 10.283C14.303 9.905 14.402 9.648 14.585 9.313C14.978 9.039 15.19 8.963 15.643 8.849C15.65 8.85 15.659 8.851 15.666 8.853Z" fill="#6ECA78" />
                  </svg>
                  <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[#D3D7E2] text-sm/4.5">1 repo</div>
                  <svg width="38" height="21" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "8px", height: "12px", flexShrink: "0" }}>
                    <path d="M2 2L19 19L36 2" stroke="#CDCCCD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="[font-synthesis:none] flex items-center gap-2 antialiased">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "21px", height: "15px", flexShrink: "0" }}>
                    <path d="M13.959 27.807C14.303 27.606 16.471 27.673 16.974 27.706L16.959 27.8C16.821 27.819 16.688 27.836 16.558 27.851C16.429 27.866 16.304 27.878 16.181 27.889C15.934 27.91 15.696 27.923 15.459 27.925C15.103 27.928 14.747 27.909 14.359 27.863C14.23 27.847 14.097 27.829 13.959 27.807ZM13.776 27.555V27.554V27.555ZM16.597 27.526H16.596H16.597ZM6.487 2.962C8.104 0.795 10.767 -0.299 13.444 0.071C14.679 0.241 15.547 0.707 16.462 1.316L17.408 1.966C17.461 2.188 17.442 2.293 17.596 2.412C18.4 2.523 20.187 2.391 21.092 2.376C23.027 2.964 24.356 3.94 25.343 5.748C26.384 7.658 26.274 9.25 25.966 11.319C27.294 13.467 28.099 14.988 27.481 17.686C27.088 19.403 26.13 20.888 24.665 21.896C23.925 22.378 22.92 22.453 22.233 23.002C21.811 23.34 21.623 24.132 21.305 24.552C20.029 26.234 18.84 27.293 16.8 27.494L16.381 27.523C15.568 27.537 14.851 27.541 14.04 27.508L13.627 27.469C11.684 27.233 11.535 26.411 10.05 25.564C9.417 25.532 8.644 25.592 8.032 25.547C6.246 25.415 4.606 24.734 3.397 23.405C1.676 21.512 1.383 19.735 1.463 17.349C1.622 17.486 1.552 17.46 1.756 17.491C1.841 17.163 2.015 16.267 1.665 16.075L1.443 16.011C1.46 16.16 1.473 16.281 1.481 16.388C1.473 16.281 1.46 16.159 1.443 16.01C1.23 15.681 1.014 15.339 0.812 15.003C-0.09 13.507 -0.186 11.187 0.257 9.523C0.644 8.068 2.151 6.284 3.511 5.632C4.14 5.33 4.896 5.129 5.516 4.777C5.857 4.218 6.096 3.487 6.487 2.962ZM18.135 17.851C18.137 18.859 18.173 20.073 18.087 21.058C17.451 21.742 13.01 24.258 12.048 24.71C13.16 25.452 13.361 25.619 14.72 25.815C16.55 26.032 18.197 25.482 19.369 24.017C20.857 22.157 20.547 20.32 20.539 18.127C20.534 16.819 20.564 15.474 20.568 14.15C19.779 13.805 19.043 13.325 18.127 12.917L18.135 17.851ZM16.767 17.003C16.724 17.089 16.621 17.248 16.533 17.295C14.447 18.417 12.437 19.674 10.333 20.762C10.066 20.9 9.799 21.035 9.515 21.13C8.213 20.533 6.699 19.569 5.413 18.88C4.677 18.487 4.128 18.095 3.329 17.765C3.234 18.606 3.318 19.511 3.601 20.312C4.247 21.789 5.071 22.77 6.619 23.395C9.104 24.398 11.228 23.108 13.297 21.865C14.481 21.158 15.717 20.48 16.936 19.846C16.94 19.351 17.02 17.269 16.767 17.003ZM17.589 8.407C16.6 8.797 16.035 8.996 15.208 9.698C15.606 9.832 16.463 10.295 16.802 10.544C18.379 11.702 21.099 12.692 22.41 14.065C22.474 15.527 22.424 17 22.441 18.461C22.448 19.045 22.403 20.328 22.54 20.856L22.691 20.942L22.774 20.894C22.769 20.76 22.749 20.654 22.815 20.543L22.948 20.532C25.35 19.69 26.363 16.444 25.56 14.186C25.28 13.416 24.816 12.726 24.211 12.173C23.38 11.419 18.773 8.946 17.692 8.403L17.589 8.407ZM5.118 6.834C2.601 7.817 1.481 10.257 1.927 12.87C2.456 15.973 6.671 17.205 8.933 18.801C9.135 18.942 9.449 19.11 9.661 19.207C10.619 19.591 11.635 18.571 12.6 18.204C11.917 17.742 11.304 17.374 10.639 16.967C9.366 16.189 6.13 14.721 5.336 13.672C5.173 11.935 5.263 8.722 5.285 6.88C5.224 6.854 5.183 6.826 5.118 6.834ZM13.722 10.39C12.418 11.261 12.696 11.082 11.36 11.619C11.477 11.693 11.507 11.707 11.591 11.824C11.409 11.97 11.23 11.932 10.957 11.954V11.956C10.94 13.002 10.885 14.687 10.971 15.699C11.881 16.239 12.883 16.773 13.813 17.302C14.896 16.774 15.872 16.134 16.949 15.615C16.995 14.496 16.961 13.229 16.948 12.106C16.233 11.667 14.427 10.61 13.722 10.39ZM9.596 14.707L9.402 14.823L9.597 14.707C9.608 14.679 9.616 14.648 9.623 14.614L9.596 14.707ZM15.672 2.735C13.07 1.09 9.619 1.397 7.905 4.205C7.604 4.698 7.34 5.244 7.214 5.818C6.866 8.134 7.023 10.957 7.034 13.286C7.768 13.885 8.852 14.336 9.296 14.725C9.504 14.476 9.435 7.959 9.523 7.004C9.549 7.057 9.574 7.111 9.597 7.166C9.619 7.221 9.641 7.277 9.661 7.334C9.906 8.023 9.982 8.874 9.994 9.761L9.982 9.321C9.946 8.449 9.829 7.636 9.524 7.004C10.495 5.146 14.511 4.39 15.672 2.735ZM9.664 14.263L9.665 14.262L9.664 14.263ZM9.824 13.848C9.808 13.865 9.793 13.883 9.78 13.902C9.793 13.883 9.808 13.865 9.824 13.848ZM9.949 11.995C9.938 12.423 9.934 12.834 9.948 13.214C9.934 12.834 9.938 12.423 9.949 11.995ZM19.232 4.039C16.614 3.923 14.605 5.833 12.42 6.968C12.053 7.159 11.433 7.537 11.069 7.662L11.025 7.676C10.918 8.122 10.854 10.059 11.021 10.446L11.148 10.535L15.254 8.106C16.099 7.611 17.155 6.942 18.066 6.624C19.206 6.891 21.423 8.442 22.515 9.034C23.197 9.403 23.681 9.637 24.409 9.964C24.481 7.538 23.742 5.802 21.499 4.489C20.864 4.117 19.958 4.071 19.232 4.039ZM19.352 1.916C19.699 1.928 20.037 1.962 20.337 2.033C19.887 1.926 19.351 1.905 18.83 1.913L19.352 1.916Z" fill="#6EC978" />
                  </svg>
                  <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[#D3D7E2] text-sm/4.5">GPT 5.3 Codex</div>
                  <svg width="38" height="21" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "8px", height: "12px", flexShrink: "0" }}>
                    <path d="M2 2L19 19L36 2" stroke="#CDCCCD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
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
