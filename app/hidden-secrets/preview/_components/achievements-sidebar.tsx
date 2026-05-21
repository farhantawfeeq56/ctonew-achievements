import Image from "next/image";

export type AchievementsSidebarState =
  | "default"
  | "attention-seeking"
  | "attention-neglecting";

type AchievementsSidebarProps = {
  state?: AchievementsSidebarState;
  count?: number;
  onClick?: () => void;
  isAnimated?: boolean;
};

export function AchievementsSidebar({ 
  state = "default", 
  count = 1, 
  onClick,
  isAnimated = false,
}: AchievementsSidebarProps) {
  const isAttentionSeeking = state === "attention-seeking";
  const isAttentionNeglecting = state === "attention-neglecting";
  const isAttentionState = isAttentionSeeking || isAttentionNeglecting;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-2.5 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.985] ${
        isAnimated ? "animate-sidebar-outline" : ""
      }`}
    >
      {isAttentionState ? (
        <div className="[font-synthesis:none] flex w-full items-center antialiased p-0">
          <div className="flex items-center gap-3">
            <Image src="/icons/achievements.svg" alt="" width={12} height={12} />
            <div className="font-['Instrument_Sans',system-ui,sans-serif] text-[#ECEEF4] text-base/5">
              Achievements
            </div>
          </div>
          <div className="ml-auto flex items-start gap-2 p-0">
            {isAttentionSeeking ? (
              <div className="text-center font-['Instrument_Sans',system-ui,sans-serif] font-semibold text-[#6ECA78] text-xs/4">
                •
              </div>
            ) : null}
            <div
              className={`w-6.25 shrink-0 text-center font-['Instrument_Sans',system-ui,sans-serif] font-semibold text-xs/4 ${
                isAttentionSeeking ? "text-[#6ECA78]" : "text-white/50"
              }`}
            >
              {count}/28
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
