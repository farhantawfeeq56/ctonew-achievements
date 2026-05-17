import Image from "next/image";

type AchievementsSidebarState = "default" | "attention-seeking";

type AchievementsSidebarProps = {
  state?: AchievementsSidebarState;
};

export function AchievementsSidebar({ state = "default" }: AchievementsSidebarProps) {
  return (
    <button
      type="button"
      className="flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-2.5 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.985]"
    >
      {state === "attention-seeking" ? (
        <div className="[font-synthesis:none] flex items-center gap-15 justify-center antialiased p-0">
          <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[#ECEEF4] text-base/5">
            Achievements
          </div>
          <div className="flex items-start gap-2 p-0">
            <div className="text-center font-['Instrument_Sans',system-ui,sans-serif] font-semibold text-[#6ECA78] text-xs/4">
              •
            </div>
            <div className="w-6.25 text-center shrink-0 font-['Instrument_Sans',system-ui,sans-serif] font-semibold text-[#6ECA78] text-xs/4">
              1/28
            </div>
          </div>
        </div>
      ) : (
        <>
          <Image src="/icons/achievements.svg" alt="" width={12} height={12} />
          <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base leading-5">Achievements</span>
        </>
      )}
    </button>
  );
}
