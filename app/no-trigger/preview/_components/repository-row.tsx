import React from "react";

interface RepositoryRowProps {
  id: string;
  name: string;
  description: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function RepositoryRow({
  id,
  name,
  description,
  isSelected,
  onSelect,
}: RepositoryRowProps) {
  return (
    <button
      onClick={() => onSelect(id)}
      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center gap-4 group ${
        isSelected
          ? "bg-white border-[#0f0f0f] shadow-[0px_4px_12px_rgba(0,0,0,0.04)]"
          : "bg-white/50 border-[#e5e5e5] hover:border-[#6b6b6b]/30 hover:bg-white"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
          isSelected ? "bg-[#0f0f0f] text-white" : "bg-white border border-[#e5e5e5] text-[#6b6b6b]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-sans font-semibold text-[#0f0f0f] text-base">
          {name}
        </h3>
        <p className="font-sans text-sm text-[#6b6b6b] truncate mt-0.5">
          {description}
        </p>
      </div>

      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          isSelected
            ? "border-[#0f0f0f]"
            : "border-[#e5e5e5] group-hover:border-[#6b6b6b]/30"
        }`}
      >
        {isSelected && (
          <div className="w-3 h-3 rounded-full bg-[#0f0f0f] animate-in zoom-in-50 duration-200" />
        )}
      </div>
    </button>
  );
}
