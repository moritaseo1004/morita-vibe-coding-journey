"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import type { SearchItem } from "@/lib/search-index";
import type { ContentType } from "@/lib/types";

// ── Static nav items ──────────────────────────────────────────────────────────

const navItems = [
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
];

// ── Doc type metadata ─────────────────────────────────────────────────────────

const typeConfig: Record<ContentType, { label: string; color: string }> = {
  guides:          { label: "Guide",           color: "text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30" },
  tutorials:       { label: "Tutorial",        color: "text-emerald-500 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30" },
  troubleshooting: { label: "Troubleshooting", color: "text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/30" },
};

// ── Component ─────────────────────────────────────────────────────────────────

type Props = {
  searchItems: SearchItem[];
};

export default function CommandPalette({ searchItems }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  // Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggle]);

  // Reset query on close
  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const navigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  if (!open) return null;

  const hasQuery = query.trim().length > 0;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[20vh]"
      onClick={() => setOpen(false)}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/40"
        onClick={(e) => e.stopPropagation()}
      >
        <Command loop shouldFilter={hasQuery}>
          {/* Search input row */}
          <div className="flex items-center gap-3 border-b border-zinc-700/60 px-4 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <Command.Input
              autoFocus
              value={query}
              onValueChange={setQuery}
              placeholder="페이지 또는 문서 검색..."
              className="flex-1 bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none"
            />
            {hasQuery && (
              <button
                onClick={() => setQuery("")}
                className="text-zinc-500 hover:text-zinc-300"
                aria-label="검색어 지우기"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <kbd className="hidden rounded border border-zinc-600 bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400 sm:block">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-10 text-center text-sm text-zinc-500">
              검색 결과가 없습니다.
            </Command.Empty>

            {/* Navigation group */}
            <Command.Group
              heading="Navigation"
              className="[&_[cmdk-group-heading]]:mb-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-zinc-500"
            >
              {navItems.map((item) => (
                <Command.Item
                  key={item.href}
                  value={`${item.label} ${item.description}`}
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

            {/* Documentation group — visible when query is entered */}
            {searchItems.length > 0 && (
              <Command.Group
                heading="Documentation"
                className="[&_[cmdk-group-heading]]:mb-1 [&_[cmdk-group-heading]]:mt-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-zinc-500"
              >
                {(hasQuery ? searchItems : []).map((item) => {
                  const meta = typeConfig[item.type];
                  return (
                    <Command.Item
                      key={item.href}
                      value={`${item.title} ${item.description} ${item.type} ${item.tag ?? ""}`}
                      onSelect={() => navigate(item.href)}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 outline-none transition-colors data-[selected=true]:bg-zinc-800 data-[selected=true]:text-zinc-100"
                    >
                      {/* Doc icon */}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 text-zinc-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                      </span>

                      {/* Title + description */}
                      <span className="flex-1 overflow-hidden">
                        <span className="block truncate font-medium leading-tight">{item.title}</span>
                        <span className="block truncate text-xs text-zinc-500">{item.description}</span>
                      </span>

                      {/* Type badge */}
                      <span className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold ${meta.color}`}>
                        {meta.label}
                      </span>
                    </Command.Item>
                  );
                })}
              </Command.Group>
            )}

            {/* Hint when no query */}
            {!hasQuery && (
              <p className="px-3 py-2 text-center text-xs text-zinc-600">
                키워드를 입력하면 문서를 검색합니다
              </p>
            )}
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
            <span className="ml-auto text-[11px] text-zinc-600">
              {searchItems.length}개 문서 인덱싱됨
            </span>
          </div>
        </Command>
      </div>
    </div>
  );
}
