import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "여정 소개",
  description: "Morita의 바이브 코딩 여정이 시작된 이유와 이 사이트의 목적.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">소개</p>
      <h1 className="mb-6 text-4xl font-bold tracking-tight">이 여정에 대하여</h1>

      <div className="space-y-10 text-zinc-600 dark:text-zinc-400">
        {/* Story */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">나의 이야기</h2>
          <p>
            이 사이트는 바이브 코딩 여정을 기록한 공간입니다 — AI의 도움을 받아 직관과 반복으로
            소프트웨어를 만들어가는 과정을 담은 개인 노트가 공개 자료로 성장했습니다.
          </p>
        </section>

        {/* Tools */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">사용 도구</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Claude Code — 터미널에서 사용하는 AI 코딩 어시스턴트</li>
            <li>Cursor — AI 네이티브 코드 에디터</li>
            <li>Next.js + TypeScript — 웹 프레임워크</li>
            <li>Tailwind CSS — 유틸리티 우선 스타일링</li>
            <li>GitHub — 버전 관리 및 배포</li>
          </ul>
        </section>

        {/* Goals */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">목표</h2>
          <p>
            배운 것을 기록하고, 실용적인 지식을 공유하며, 공개적으로 만들어 나가기 위해서입니다.
            이 사이트의 무언가가 단 한 사람에게라도 도움이 된다면 충분합니다.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">연락처</h2>
          <p>
            <a
              href="https://github.com"
              className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            에서 찾을 수 있습니다.
          </p>
        </section>
      </div>
    </main>
  );
}
