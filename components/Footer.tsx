import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Morita&apos;s Vibe Coding Journey</p>
        <div className="flex gap-6">
          <Link href="/guides" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Guides
          </Link>
          <Link href="/tutorials" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Tutorials
          </Link>
          <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            About Journey
          </Link>
        </div>
      </div>
    </footer>
  );
}
