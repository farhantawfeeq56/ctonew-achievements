import type { Metadata } from "next";
import Link from "next/link";
import { Snackbar } from "./preview/_components/snackbar";

export const metadata: Metadata = {
  title: "Hidden Secrets",
  description: "Achievement route for uncovering deeper patterns behind consistent progress.",
};

export default function HiddenSecretsPage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm dark:border-white/15 dark:bg-zinc-950/70">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60 dark:text-white/60">
          Achievement Track
        </p>
        <h1 className="font-display text-4xl text-black dark:text-white">Hidden Secrets</h1>
        <p className="text-base leading-7 text-black/70 dark:text-white/70">
          This route helps you reveal habits and systems that quietly drive progress.
          Document one insight and turn it into a strategy you can reuse.
        </p>
        <Snackbar />
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
