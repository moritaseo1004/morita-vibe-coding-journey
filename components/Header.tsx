"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Start Journey",   href: "/start" },
  { label: "Guides",          href: "/guides" },
  { label: "Tutorials",       href: "/tutorials" },
  { label: "Troubleshooting", href: "/troubleshooting" },
  { label: "About Journey",   href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        {/* Site title */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Morita&apos;s Vibe Coding Journey
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm sm:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? "font-medium text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ⌘K trigger — desktop only */}
        <button
          onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }))}
          className="hidden sm:flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/50 dark:hover:border-zinc-600 dark:hover:text-zinc-300"
          aria-label="커맨드 팔레트 열기"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span>Search</span>
          <kbd className="ml-1 rounded border border-zinc-300 bg-white px-1 py-0.5 text-[10px] font-medium text-zinc-400 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
            ⌘K
          </kbd>
        </button>

        {/* Hamburger button — mobile only */}
        <button
          className="sm:hidden rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
        >
          {open ? (
            /* X icon */
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="sm:hidden border-t border-zinc-200 dark:border-zinc-800">
          <ul className="flex flex-col px-6 py-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "font-medium text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800"
                        : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
