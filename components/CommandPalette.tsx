"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";

const navItems = [
  {
    group: "Navigation",
    items: [
      {
        label: "Start Journey",
        description: "환경 설정 및 여정 시작",
        href: "/start",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        ),
      },
      {
        label: "Guides",
        description: "AI 워크플로우 가이드",
        href: "/guides",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
        ),
      },
      {
        label: "Tutorials",
        description: "단계별 실전 튜토리얼",
        href: "/tutorials",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        ),
      },
      {
        label: "Troubleshooting",
        description: "에러 해결 및 디버깅",
        href: "/troubleshooting",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
        ),
      },
      {
        label: "About Journey",
        description: "이 여정에 대하여",
        href: "/about",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        ),
      },
    ],
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  // Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggle]);

  const navigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  if (!open) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4"
      onClick={() => setOpen(false)}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/40"
        onClick={(e) => e.stopPropagation()}
      >
        <Command loop>
          {/* Search input row */}
          <div className="flex items-center gap-3 border-b border-zinc-700/60 px-4 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <Command.Input
              autoFocus
              placeholder="페이지 검색..."
              className="flex-1 bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none"
            />
            <kbd className="hidden rounded border border-zinc-600 bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400 sm:block">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <Command.List className="max-h-72 overflow-y-auto p-2">
            <Command.Empty className="py-10 text-center text-sm text-zinc-500">
              검색 결과가 없습니다.
            </Command.Empty>

            {navItems.map((group) => (
              <Command.Group
                key={group.group}
                heading={group.group}
                className="[&_[cmdk-group-heading]]:mb-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-zinc-500"
              >
                {group.items.map((item) => (
                  <Command.Item
                    key={item.href}
                    value={item.label}
                    onSelect={() => navigate(item.href)}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 outline-none transition-colors data-[selected=true]:bg-zinc-800 data-[selected=true]:text-zinc-100"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 text-zinc-400">
                      {item.icon}
                    </span>
                    <span className="flex-1">
                      <span className="block font-medium leading-tight">{item.label}</span>
                      <span className="block text-xs text-zinc-500">{item.description}</span>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0 text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.List>

          {/* Footer hint */}
          <div className="flex items-center gap-4 border-t border-zinc-700/60 px-4 py-2.5">
            <span className="flex items-center gap-1 text-[11px] text-zinc-500">
              <kbd className="rounded border border-zinc-600 bg-zinc-800 px-1 py-0.5 text-[10px] text-zinc-400">↑↓</kbd>
              이동
            </span>
            <span className="flex items-center gap-1 text-[11px] text-zinc-500">
              <kbd className="rounded border border-zinc-600 bg-zinc-800 px-1 py-0.5 text-[10px] text-zinc-400">↵</kbd>
              선택
            </span>
            <span className="flex items-center gap-1 text-[11px] text-zinc-500">
              <kbd className="rounded border border-zinc-600 bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400">esc</kbd>
              닫기
            </span>
          </div>
        </Command>
      </div>
    </div>
  );
}
