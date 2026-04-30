import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "No Trigger",
  description: "Achievement route for building consistency without waiting for a trigger.",
};

export default function NoTriggerPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950/70">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60 dark:text-white/60">
          Achievement Track
        </p>
        <h1 className="font-display text-4xl text-black dark:text-white">No Trigger</h1>
        <p className="text-base leading-7 text-black/70 dark:text-white/70">
          This page is your space to begin action before motivation appears. Use it to
          define a small, repeatable step you can commit to today.
        </p>
        <Link
          href="/"
          className="inline-flex w-fit rounded-lg border border-black/20 px-4 py-2 text-sm font-medium text-black transition hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:border-white/30 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-white"
        >
          ← Back to achievements
        </Link>
      </div>
    </main>
  );
}
