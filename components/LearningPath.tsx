import Link from "next/link";

const steps = [
  {
    number: "01",
    featured: true,
    title: "환경 설정",
    description:
      "Node.js, VS Code, Claude Code를 설치하고 개발 환경을 구성합니다. 모든 여정은 여기서 시작됩니다.",
    href: "/start",
    cta: "환경 설정 시작하기 →",
  },
  {
    number: "02",
    featured: false,
    title: "가이드 읽기",
    description:
      "AI 도구 사용법과 효율적인 워크플로우를 핵심 가이드로 익힙니다.",
    href: "/guides",
    cta: "가이드 보기 →",
  },
  {
    number: "03",
    featured: false,
    title: "튜토리얼 따라하기",
    description:
      "실제 프로젝트를 단계별로 만들며 개념을 코드로 연결합니다.",
    href: "/tutorials",
    cta: "튜토리얼 보기 →",
  },
  {
    number: "04",
    featured: false,
    title: "배포하기",
    description:
      "만든 것을 Vercel에 올려 세상에 공개합니다. 배포는 생각보다 쉽습니다.",
    href: "/guides",
    cta: "배포 가이드 →",
  },
];

export default function LearningPath() {
  return (
    <section className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6 py-24">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Onboarding
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            처음부터 배포까지
          </h2>
        </div>

        {/* Step cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) =>
            step.featured ? (
              /* ── Featured first card ── */
              <Link
                key={step.number}
                href={step.href}
                className="group relative flex flex-col rounded-2xl border border-violet-200 bg-violet-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.35),0_8px_32px_rgba(139,92,246,0.1)] dark:border-violet-800/60 dark:bg-violet-950/20 dark:hover:shadow-[0_0_0_1px_rgba(139,92,246,0.3),0_8px_32px_rgba(139,92,246,0.08)]"
              >
                {/* "Start Here" chip */}
                <span className="absolute right-4 top-4 rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-600 dark:bg-violet-900/50 dark:text-violet-300">
                  Start Here
                </span>

                {/* Step badge */}
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-900/60 dark:text-violet-300">
                  {step.number}
                </span>

                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                  {step.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {step.description}
                </p>
                <span className="text-xs font-semibold text-violet-600 transition-opacity group-hover:opacity-80 dark:text-violet-400">
                  {step.cta}
                </span>
              </Link>
            ) : (
              /* ── Regular step card ── */
              <Link
                key={step.number}
                href={step.href}
                className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_0_0_1px_rgba(161,161,170,0.25),0_8px_24px_rgba(0,0,0,0.06)] dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:shadow-[0_0_0_1px_rgba(161,161,170,0.15),0_8px_24px_rgba(0,0,0,0.2)]"
              >
                {/* Step badge */}
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-sm font-bold text-zinc-500 transition-colors group-hover:bg-zinc-200 group-hover:text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-zinc-700 dark:group-hover:text-zinc-200">
                  {step.number}
                </span>

                <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                  {step.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {step.description}
                </p>
                <span className="text-xs font-semibold text-zinc-400 transition-colors group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-200">
                  {step.cta}
                </span>
              </Link>
            )
          )}
        </div>

      </div>
    </section>
  );
}
