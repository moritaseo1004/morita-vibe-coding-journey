import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "여정 시작",
  description: "바이브 코딩 여정을 시작하는 데 필요한 환경 설정, 마인드셋, 그리고 첫 발걸음.",
};

export default function StartPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">시작하기</p>
      <h1 className="mb-6 text-4xl font-bold tracking-tight">여정을 시작하며</h1>
      <p className="mb-12 text-lg text-zinc-500 dark:text-zinc-400">
        바이브 코딩을 시작하는 데 필요한 모든 것 — 도구, 마인드셋, 그리고 첫 발걸음.
      </p>

      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">바이브 코딩이란?</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            바이브 코딩은 플로우 상태로 소프트웨어를 만드는 방식입니다 — Claude, Cursor 같은
            AI 도구를 활용해 빠르게 실험하고, 자유롭게 구축하며, 배운 것을 기록해나갑니다.
          </p>
        </section>

        {/* Environment Setup */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">환경 설정</h2>
          <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>Node.js (v20+)</li>
            <li>VS Code 또는 Cursor</li>
            <li>Claude Code (Claude CLI)</li>
            <li>Git + GitHub</li>
          </ul>
        </section>

        {/* Mindset */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">마인드셋</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            빠르게 반복하고, 의도적으로 부수고, 배운 것을 기록하세요. 목표는 완벽함이 아니라 진전입니다.
          </p>
        </section>

        {/* First Steps */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">첫 발걸음</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/guides"
              className="rounded-lg border border-zinc-200 px-4 py-3 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              가이드 보기 →
            </Link>
            <Link
              href="/tutorials"
              className="rounded-lg border border-zinc-200 px-4 py-3 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              튜토리얼 해보기 →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
