import Link from "next/link";

type AchievementCardData = {
  number: string;
  title: string;
  description: string;
  href: string;
  badgeClassName: string;
};

const achievementCards: AchievementCardData[] = [
  {
    number: "1",
    title: "No Trigger",
    description:
      "Users take meaningful actions, but the system stays silent. The app fails to convert user actions into curiosity moments.",
    href: "/no-trigger",
    badgeClassName: "bg-[#2c6e48]",
  },
  {
    number: "2",
    title: "Hidden Secrets",
    description:
      "\"Secrets\" are designed to create curiosity. Secrets need not be too lost in the dark, they can have some directional tension.",
    href: "/hidden-secrets",
    badgeClassName: "bg-[#4c956c]",
  },
];

function AchievementCard({
  number,
  title,
  description,
  href,
  badgeClassName,
}: AchievementCardData) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-[18px] bg-white px-4 py-4 shadow-[0px_1px_2px_rgba(0,0,0,0.04),0px_8px_24px_rgba(0,0,0,0.04)] transition sm:gap-6 sm:px-6 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a1f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3f1ed]"
    >
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] sm:h-16 sm:w-16 ${badgeClassName}`}
      >
        <span className="font-display text-[30px] leading-none text-[#f3eccd] sm:text-[32px]">
          {number}
        </span>
      </div>

      <div className="h-12 w-px shrink-0 bg-[#e5e5e5] sm:h-14" aria-hidden />

      <div className="min-w-0 flex-1">
        <h2 className="text-[22px] leading-none font-semibold text-[#0f0f0f] sm:text-[25px]">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-[1.45] text-[#6b6b6b] sm:text-[15px]">
          {description}
        </p>
      </div>

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#7a1f2b]">
        <svg
          className="h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3f1ed] px-4 py-10 sm:px-8 sm:py-14">
      <div className="w-full max-w-[768px]">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <h1 className="font-display text-[38px] leading-[1.1] tracking-[-0.02em] text-[#0f0f0f] sm:text-[44px]">
            Achievements system in cto.new
          </h1>
          <p className="mt-3 text-base text-[#6b6b6b] sm:text-lg">
            Pick a problem to explore.
          </p>
        </header>

        <section aria-label="Achievement problems" className="mx-auto w-full max-w-[672px]">
          <ul className="space-y-5">
            {achievementCards.map((card) => (
              <li key={card.href}>
                <AchievementCard {...card} />
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-7 w-full max-w-[672px]" aria-label="Development tools">
          <Link
            href="/lab/components"
            className="inline-flex items-center rounded-lg border border-dashed border-[#7a1f2b]/30 bg-white px-4 py-2.5 text-sm font-medium text-[#7a1f2b] transition hover:bg-[#7a1f2b]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a1f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3f1ed]"
          >
            Component Playground
          </Link>
        </section>
      </div>
    </main>
  );
}
