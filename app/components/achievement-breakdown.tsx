import { problems } from "./achievement-data";
import { ProblemCard } from "./problem-card";

export function AchievementBreakdown() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-achievement-page">
      <div className="flex h-fit w-full max-w-[768px] flex-col items-center bg-achievement-page px-6 pb-12 pt-14 sm:px-12">
        <header className="mb-10 mt-0 flex h-[87px] shrink-0 flex-col items-center gap-x-4 gap-y-3 text-center">
          <h1 className="font-display text-[40px] leading-[1.1] tracking-[-1.1px] text-ink sm:text-[44px]">
            Achievements system in cto.new
          </h1>
          <p className="font-sans text-lg leading-normal text-muted">
            Pick a problem to explore.
          </p>
        </header>

        <div className="flex h-auto w-full shrink-0 flex-col gap-5 sm:h-[388px]">
          {problems.map((problem) => (
            <ProblemCard key={problem.number} problem={problem} />
          ))}
        </div>
      </div>
    </main>
  );
}
