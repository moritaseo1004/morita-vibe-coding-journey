import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByType } from "@/lib/docs";

// ── Why this site exists ─────────────────────────────────────────────────────

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: "어디서부터 시작해야 할지 모르겠다",
    description: "환경 설정부터 첫 배포까지, 실제로 작동하는 순서대로 안내합니다.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: "에러가 나면 막막하다",
    description: "직접 겪은 문제들과 원인, 해결 방법을 트러블슈팅 문서로 정리했습니다.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "AI 도구를 어떻게 활용해야 할지 모르겠다",
    description: "Claude, Cursor 등 AI 도구를 실전에서 쓰는 방법을 워크플로우로 공유합니다.",
  },
];

// ── Learning path ────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "환경 설정",
    description: "Node.js, VS Code, Claude Code를 설치하고 개발 환경을 구성합니다.",
    href: "/start",
    label: "시작하기 →",
  },
  {
    number: "02",
    title: "가이드 읽기",
    description: "AI 도구 사용법과 효율적인 워크플로우를 핵심 가이드로 익힙니다.",
    href: "/guides",
    label: "가이드 보기 →",
  },
  {
    number: "03",
    title: "튜토리얼 따라하기",
    description: "실제 프로젝트를 단계별로 만들며 개념을 코드로 연결합니다.",
    href: "/tutorials",
    label: "튜토리얼 보기 →",
  },
  {
    number: "04",
    title: "배포하기",
    description: "만든 것을 Vercel에 배포해 세상에 공개합니다.",
    href: "/guides",
    label: "배포 가이드 →",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const guides = getArticlesByType("guides").slice(0, 2);
  const tutorials = getArticlesByType("tutorials").slice(0, 2);

  return (
    <main>

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        {/* Background: grid pattern + radial gradient */}
        <div className="bg-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(161,161,170,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.07),transparent)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:py-28">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

            {/* Left: text + CTA */}
            <div className="flex-1 text-center lg:text-left">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Morita&apos;s Vibe Coding Journey
              </p>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                만들고, 기록하고,{" "}
                <span className="inline-block text-zinc-400 dark:text-zinc-500">성장하다</span>
              </h1>
              <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 lg:mx-0">
                AI 도구와 함께하는 개발 여정을 기록합니다.
                막히는 순간마다 다시 흐름을 찾을 수 있도록 — 가이드, 튜토리얼, 트러블슈팅을 한 곳에 모았습니다.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/start"
                  className="w-full rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 sm:w-auto dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  여정 시작하기
                </Link>
                <Link
                  href="/guides"
                  className="w-full rounded-full border border-zinc-300 px-7 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 sm:w-auto dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  가이드 보기
                </Link>
              </div>
            </div>

            {/* Right: terminal illustration */}
            <div className="w-full max-w-sm shrink-0 lg:w-96">
              <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
                {/* Terminal title bar */}
                <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-zinc-400 dark:text-zinc-500">claude — bash</span>
                </div>
                {/* Terminal body */}
                <div className="space-y-3 p-5 font-mono text-sm">
                  <div>
                    <span className="text-green-500 dark:text-green-400">❯ </span>
                    <span className="text-zinc-700 dark:text-zinc-300">claude</span>
                  </div>
                  <div className="text-zinc-400 dark:text-zinc-500">
                    ✻ Welcome to Claude Code!
                  </div>
                  <div className="text-zinc-500 dark:text-zinc-400">
                    <span className="text-blue-500 dark:text-blue-400">You: </span>
                    랜딩 페이지 만들어줘
                  </div>
                  <div className="text-zinc-500 dark:text-zinc-400">
                    <span className="text-purple-500 dark:text-purple-400">Claude: </span>
                    네! 바로 시작할게요.
                  </div>
                  <div className="text-zinc-400 dark:text-zinc-500">
                    ⎿ Writing app/page.tsx…
                  </div>
                  <div className="text-zinc-400 dark:text-zinc-500">
                    ⎿ Writing components/Hero.tsx…
                  </div>
                  <div className="text-green-600 dark:text-green-400">
                    ✓ 완료! 로컬에서 확인하세요.
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 dark:text-green-400">❯ </span>
                    <span
                      className="ml-1 inline-block h-4 w-2 bg-zinc-700 dark:bg-zinc-300"
                      style={{ animation: "blink 1.2s step-end infinite" }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Why this site exists ──────────────────────────────────────── */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            왜 이 사이트인가
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight">
            누구나 한 번쯤 겪는 막힘
          </h2>
          <div className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800 sm:divide-x sm:divide-y-0">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4 p-6 sm:flex-col sm:gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {r.icon}
                </div>
                <div>
                  <h3 className="mb-1.5 font-semibold text-zinc-900 dark:text-zinc-100">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Learning path ─────────────────────────────────────────────── */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            추천 학습 순서
          </p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight">
            처음부터 배포까지
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <Link
                  key={step.number}
                  href={step.href}
                  className="group relative flex flex-col items-start gap-3 rounded-xl border border-zinc-200 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-md hover:shadow-zinc-100 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:shadow-zinc-900/50"
                >
                  {/* Circle badge */}
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-200 bg-white text-sm font-bold text-zinc-500 transition-colors group-hover:border-zinc-400 group-hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-400 dark:group-hover:border-zinc-500 dark:group-hover:text-zinc-100">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="mb-1.5 font-semibold text-zinc-900 dark:text-zinc-100">
                      {step.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {step.description}
                    </p>
                    <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-300">
                      {step.label}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── 4. Featured Guides ───────────────────────────────────────────── */}
      {guides.length > 0 && (
        <section className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Guides
                </p>
                <h2 className="text-3xl font-bold tracking-tight">주요 가이드</h2>
              </div>
              <Link
                href="/guides"
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                전체 보기 →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {guides.map((g) => (
                <ArticleCard
                  key={g.slug}
                  title={g.frontmatter.title}
                  description={g.frontmatter.description}
                  href={g.href}
                  tag={g.frontmatter.tag}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Featured Tutorials ────────────────────────────────────────── */}
      {tutorials.length > 0 && (
        <section className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Tutorials
                </p>
                <h2 className="text-3xl font-bold tracking-tight">실전 튜토리얼</h2>
              </div>
              <Link
                href="/tutorials"
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                전체 보기 →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {tutorials.map((t) => (
                <ArticleCard
                  key={t.slug}
                  title={t.frontmatter.title}
                  description={t.frontmatter.description}
                  href={t.href}
                  tag={t.frontmatter.tag}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Final CTA ─────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            지금 바로 시작하세요
          </h2>
          <p className="mx-auto mb-8 max-w-md text-zinc-500 dark:text-zinc-400">
            환경 설정부터 첫 배포까지, 막히는 순간 없이 함께 만들어봅시다.
          </p>
          <Link
            href="/start"
            className="inline-block rounded-full bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            여정 시작하기
          </Link>
        </div>
      </section>

    </main>
  );
}
