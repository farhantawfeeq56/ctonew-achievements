import Link from "next/link";
import type { Problem } from "./achievement-data";

type ProblemCardProps = {
  problem: Problem;
};

export function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <Link
      href={problem.href}
      className="group flex w-full items-center gap-4 rounded-[18px] bg-card px-4 py-5 shadow-card outline-none transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-achievement-page sm:gap-6 sm:px-6"
    >
      <div
        className={`flex size-16 shrink-0 items-center justify-center rounded-[14px] ${problem.tileClassName}`}
      >
        <span className="content-center font-display text-[32px] leading-normal text-number">
          {problem.number}
        </span>
      </div>

      <div className="hidden h-14 w-px flex-col bg-divider sm:flex" />

      <div className="flex flex-1 flex-col gap-1.5">
        <span className="content-center font-sans text-[25px] font-semibold leading-none text-black">
          {problem.title}
        </span>
        <span className="font-sans text-[15px] leading-normal text-muted">
          {problem.description}
        </span>
      </div>

      <div className="flex size-11 shrink-0 items-center justify-center rounded-full text-accent transition duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1">
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
