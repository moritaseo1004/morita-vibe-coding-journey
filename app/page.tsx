import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import WhySection from "@/components/WhySection";
import LearningPath from "@/components/LearningPath";
import { getArticlesByType } from "@/lib/docs";

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
      <WhySection />

      {/* ── 3. Learning path ─────────────────────────────────────────────── */}
      <LearningPath />

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
