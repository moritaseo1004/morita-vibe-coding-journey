import Link from "next/link";
import DocsSidebar from "@/components/DocsSidebar";
import type { NavItem } from "@/lib/types";

type DocsLayoutProps = {
  items: NavItem[];
  title: string;
  children: React.ReactNode;
};

export default function DocsLayout({ items, title, children }: DocsLayoutProps) {
  return (
    <div className="mx-auto max-w-5xl">

      {/* ── Mobile: native collapsible nav ───────────────────────────── */}
      <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800">
        <details className="group px-6 py-3">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-zinc-700 dark:text-zinc-300 [&::-webkit-details-marker]:hidden">
            <span>{title}</span>
            {/* chevron rotates when open */}
            <svg
              className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
            </svg>
          </summary>

          <nav className="mt-3 flex flex-col gap-0.5 pb-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>

      {/* ── Desktop: two-column layout ───────────────────────────────── */}
      <div className="flex gap-12 px-6 py-12 md:py-16">

        {/* Sticky sidebar — hidden on mobile */}
        <aside className="hidden md:block w-56 shrink-0">
          <div className="sticky top-20">
            <DocsSidebar items={items} title={title} />
          </div>
        </aside>

        {/* Main content — fills remaining space */}
        <main className="min-w-0 flex-1">
          {children}
        </main>

      </div>
    </div>
  );
}
