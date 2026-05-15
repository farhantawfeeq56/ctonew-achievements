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
      className={`group relative w-full rounded-2xl border border-transparent px-4 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84a0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1324] sm:px-5 ${
        isSelected ? "bg-[#111c36]" : "bg-[#0d162c] hover:bg-[#111a31]"
      }`}
      data-selected={isSelected}
    >
      <div
        className={`flex items-start gap-4 rounded-xl ${
          isSelected ? "text-white" : "text-[#d8e0f7]"
        }`}
      >
        <div
          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
            isSelected
              ? "border-[#7f96ff] bg-[#101b38] text-[#adc0ff]"
              : "border-[#2f3958] bg-[#111a31] text-[#90a0cc]"
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
          <p className="truncate text-sm font-semibold sm:text-base">{name}</p>
          <p className="mt-1 text-sm leading-5 text-[#9cabcf]">{description}</p>
          <p className="mt-2 text-xs text-[#7988af]">
            {language} · {updatedAt}
          </p>
        </div>

        <div
          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
            isSelected
              ? "border-[#7f96ff] bg-[#7f96ff] text-[#0a1123]"
              : "border-[#3b4668] bg-transparent text-transparent group-hover:border-[#6074b1]"
          }`}
          aria-hidden
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
          >
            <path
              d="M5.5 10.5L8.5 13.5L14.5 6.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl border transition-colors ${
          isSelected
            ? "border-[#6d86f7] shadow-[0_0_0_1px_rgba(109,134,247,0.2)]"
            : "border-[#2c3553] group-hover:border-[#44507a]"
        }`}
        aria-hidden
      />
    </button>
  );
}
