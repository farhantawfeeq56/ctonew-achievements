type RepositoryRowProps = {
  id: string;
  name: string;
  description: string;
  language: string;
  updatedAt: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export function RepositoryRow({ id, name, isSelected, onSelect }: RepositoryRowProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={() => onSelect(id)}
      className={`[font-synthesis:none] flex min-h-[40px] w-full shrink-0 items-center gap-4 rounded-[8px] px-3 py-2.5 text-left antialiased transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84a0ff] focus-visible:ring-inset ${
        isSelected ? "bg-[#1A2133]" : "bg-transparent hover:bg-[#2A2732]"
      }`}
      data-selected={isSelected}
    >
      <div className="flex size-5 shrink-0 items-center justify-center" aria-hidden="true">
        <svg
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="#F2F1F7"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "16px", width: "16px", flexShrink: "0" }}
        >
          <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.52-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 0 1 8 4.77a7.6 7.6 0 0 1 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
        </svg>
      </div>

      <div className="font-['Instrument_Sans',system-ui,sans-serif] grow basis-[0%] content-center text-sm/[21px] font-medium tracking-[-0.01em] text-[#DDD9E6]">
        {name}
      </div>
    </button>
  );
}
