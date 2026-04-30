import Link from "next/link";

type AchievementCardData = {
  badge: string;
  title: string;
  description: string;
  href: string;
};

const achievementCards: AchievementCardData[] = [
  {
    badge: "01",
    title: "No Trigger",
    description:
      "Build consistency by showing up before motivation appears. Start with one deliberate action.",
    href: "/no-trigger",
  },
  {
    badge: "02",
    title: "Hidden Secrets",
    description:
      "Unlock the patterns behind momentum. Explore insights that make progress easier to repeat.",
    href: "/hidden-secrets",
  },
  {
    badge: "03",
    title: "No Direction",
    description:
      "When the next step is unclear, use this path to create structure and choose a meaningful direction.",
    href: "/no-direction",
  },
];

function AchievementCard({ badge, title, description, href }: AchievementCardData) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/80 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-zinc-950/70 dark:hover:border-white/30 dark:focus-visible:ring-white"
    >
      <div className="flex h-full flex-col gap-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-black/[0.03] text-xs font-semibold tracking-[0.2em] text-black/75 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
          {badge}
        </span>
        <h2 className="font-display text-2xl leading-tight text-black transition group-hover:text-black/80 dark:text-white dark:group-hover:text-white/90">
          {title}
        </h2>
        <p className="text-sm leading-6 text-black/65 dark:text-white/65">{description}</p>
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-black/85 dark:text-white/85">
          Explore <span aria-hidden>↗</span>
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.96),_rgba(244,244,245,0.8)_42%,_rgba(244,244,245,0.4)_100%)] px-4 py-10 dark:bg-[radial-gradient(circle_at_top,_rgba(24,24,27,1),_rgba(10,10,10,1)_55%,_rgba(0,0,0,1)_100%)] sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60 uppercase dark:text-white/50">
            Achievements
          </p>
          <h1 className="font-display text-4xl leading-tight text-black sm:text-5xl dark:text-white">
            Choose your next challenge.
          </h1>
          <p className="text-base leading-7 text-black/70 dark:text-white/70">
            Pick one path to continue your progress. Each card opens a dedicated space
            for that achievement track.
          </p>
        </header>

        <section aria-label="Achievement paths">
          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {achievementCards.map((card) => (
              <li key={card.href}>
                <AchievementCard {...card} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
