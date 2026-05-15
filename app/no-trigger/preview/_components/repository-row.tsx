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
      className={`group relative w-full rounded-xl border px-4 py-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#84a0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1427] sm:px-5 ${
        isSelected
          ? "border-[#5f78db] bg-[#111b35]"
          : "border-[#2a3452] bg-[#0d152a] hover:border-[#3f4f7a] hover:bg-[#101931]"
      }`}
      data-selected={isSelected}
    >
      <div className={`flex items-start gap-3.5 ${isSelected ? "text-white" : "text-[#d8dff5]"}`}>
        <div
          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
            isSelected
              ? "border-[#6d85eb] bg-[#122144] text-[#afc0ff]"
              : "border-[#2f3a5c] bg-[#121c34] text-[#8d9ecb]"
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
          <p className="truncate text-sm font-semibold sm:text-[15px]">{name}</p>
          <p className="mt-1 text-sm leading-5 text-[#9ea9cb]">{description}</p>
          <p className="mt-2 text-xs text-[#7a89b0]">
            {language} · {updatedAt}
          </p>
        </div>

        <div
          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all ${
            isSelected
              ? "border-[#6f86ee] bg-[#6f86ee] text-[#0a1123]"
              : "border-[#3a4567] bg-transparent text-transparent group-hover:border-[#5f6f9f]"
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
        className={`pointer-events-none absolute inset-0 rounded-xl transition-colors ${
          isSelected
            ? "shadow-[0_0_0_1px_rgba(95,120,219,0.25)]"
            : "shadow-[0_0_0_1px_rgba(22,32,56,0.2)]"
        }`}
        aria-hidden
      />
    </button>
  );
}
