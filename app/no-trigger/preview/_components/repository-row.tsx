type RepositoryRowProps = {
  id: string;
  name: string;
  description: string;
  language: string;
  updatedAt: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export function RepositoryRow({
  id,
  name,
  description,
  language,
  updatedAt,
  isSelected,
  onSelect,
}: RepositoryRowProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={() => onSelect(id)}
      className={`group relative w-full rounded-[14px] border px-4 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84a0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#091125] sm:px-5 ${
        isSelected
          ? "border-[#38518a] bg-[#101a34]"
          : "border-[#26355c] bg-[#0c1630] hover:border-[#334978] hover:bg-[#0f1a36]"
      }`}
      data-selected={isSelected}
    >
      <div className="flex items-start gap-3.5">
        <div
          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border ${
            isSelected
              ? "border-[#4662a3] bg-[#122145] text-[#b5c5f6]"
              : "border-[#31456f] bg-[#12203f] text-[#8ea2d1]"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            aria-hidden
          >
            <path
              d="M4 7.5V6.2C4 5.08 4 4.52 4.218 4.092C4.41 3.715 4.715 3.41 5.092 3.218C5.52 3 6.08 3 7.2 3H16.8C17.92 3 18.48 3 18.908 3.218C19.285 3.41 19.59 3.715 19.782 4.092C20 4.52 20 5.08 20 6.2V7.5M4 7.5H20M4 7.5V16.8C4 17.92 4 18.48 4.218 18.908C4.41 19.285 4.715 19.59 5.092 19.782C5.52 20 6.08 20 7.2 20H16.8C17.92 20 18.48 20 18.908 19.782C19.285 19.59 19.59 19.285 19.782 18.908C20 18.48 20 17.92 20 16.8V7.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-semibold tracking-[-0.01em] text-[#eef2ff]">
            {name}
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#9aa8cd]">{description}</p>
          <p className="mt-2 text-[14px] text-[#7f8fb7]">
            {language} · {updatedAt}
          </p>
        </div>

        <div
          className={`mt-1 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border transition-colors ${
            isSelected
              ? "border-[#5e77b9] bg-[#111d3a]"
              : "border-[#364b78] bg-transparent group-hover:border-[#50679c]"
          }`}
          aria-hidden
        >
          <span
            className={`h-[7px] w-[7px] rounded-full transition-colors ${
              isSelected ? "bg-[#7e95d8]" : "bg-transparent"
            }`}
          />
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 rounded-[14px] ${
          isSelected
            ? "shadow-[0_0_0_1px_rgba(116,141,201,0.22)]"
            : "shadow-[0_0_0_1px_rgba(25,37,66,0.3)]"
        }`}
        aria-hidden
      />
    </button>
  );
}
