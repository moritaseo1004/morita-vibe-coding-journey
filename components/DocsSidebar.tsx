"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/types";

type DocsSidebarProps = {
  items: NavItem[];
  title: string;
};

export default function DocsSidebar({ items, title }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={title}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
        {title}
      </p>
      <ul className="space-y-0.5">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-zinc-100 font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
