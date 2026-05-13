import Link from "next/link";
import type { Problem } from "./achievement-data";

type ProblemCardProps = {
  problem: Problem;
};

export function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <Link
      href={problem.href}
      className="group flex w-full items-center gap-4 rounded-[18px] bg-white px-4 py-5 shadow-[0px_1px_2px_rgba(0,0,0,0.04),0px_8px_24px_rgba(0,0,0,0.04)] outline-none transition duration-200 hover:-translate-y-0.5 hover:shadow-[0px_1px_2px_rgba(0,0,0,0.05),0px_12px_30px_rgba(0,0,0,0.08)] focus-visible:ring-2 focus-visible:ring-[#7a1f2b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f3f1ed] sm:gap-6 sm:px-6"
    >
      <div
        className={`flex size-16 shrink-0 items-center justify-center rounded-[14px] ${problem.tileClassName}`}
      >
        <span className="content-center font-display text-[32px] leading-normal text-[#f3eccd]">
          {problem.number}
        </span>
      </div>

      <div className="hidden h-14 w-px flex-col bg-[#e5e5e5] sm:flex" />

      <div className="flex flex-1 flex-col gap-1.5">
        <span className="content-center font-sans text-[25px] font-semibold leading-none text-black">
          {problem.title}
        </span>
        <span className="font-sans text-[15px] leading-normal text-[#6b6b6b]">
          {problem.description}
        </span>
      </div>

      <div className="flex size-11 shrink-0 items-center justify-center rounded-full text-[#7a1f2b] transition duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1">
        <ArrowIcon />
      </div>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="size-[18px]"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
