import Image from "next/image";

export function AchievementsSidebar() {
  return (
    <button
      type="button"
      className="flex h-10 w-full cursor-pointer items-center gap-3 rounded-lg px-2.5 text-left transition-all duration-150 hover:bg-white/[0.04] active:scale-[0.985]"
    >
      <Image src="/icons/achievements.svg" alt="" width={12} height={12} />
      <span className="font-['Instrument_Sans',system-ui,sans-serif] text-base leading-5">Achievements</span>
    </button>
  );
}
