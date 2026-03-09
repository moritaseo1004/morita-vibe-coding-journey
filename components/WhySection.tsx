import Link from "next/link";

const features = [
  {
    tag: "Start Here",
    href: "/start",
    cta: "여정 시작하기 →",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    title: "막힘 없는 시작",
    description:
      "환경 설정부터 첫 배포까지, 직접 겪으며 정리한 순서대로 안내합니다. 어디서 시작해야 할지 모를 때, 여기서 시작하면 됩니다.",
    accentLight: "rgba(16,185,129,0.08)",
    accentDark: "rgba(16,185,129,0.06)",
    iconBg: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    tagColor: "text-emerald-600 dark:text-emerald-400",
    glowColor: "hover:shadow-[0_0_0_1px_rgba(16,185,129,0.25),0_8px_32px_rgba(16,185,129,0.06)]",
  },
  {
    tag: "Troubleshooting",
    href: "/troubleshooting",
    cta: "트러블슈팅 보기 →",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: "에러를 두려워하지 마세요",
    description:
      "직접 마주한 에러들과 원인, 해결 과정을 트러블슈팅 문서로 정리했습니다. 막히는 순간마다 다시 흐름을 찾을 수 있습니다.",
    accentLight: "rgba(239,68,68,0.06)",
    accentDark: "rgba(239,68,68,0.05)",
    iconBg: "bg-red-50 text-red-500 dark:bg-red-900/30 dark:text-red-400",
    tagColor: "text-red-500 dark:text-red-400",
    glowColor: "hover:shadow-[0_0_0_1px_rgba(239,68,68,0.2),0_8px_32px_rgba(239,68,68,0.05)]",
  },
  {
    tag: "AI Workflow",
    href: "/guides",
    cta: "워크플로우 보기 →",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "AI와 함께 더 빠르게",
    description:
      "Claude, Cursor 등 AI 도구를 실전 워크플로우로 익힙니다. 도구를 아는 것과 잘 쓰는 것은 다릅니다. 실제 사용 패턴을 공유합니다.",
    accentLight: "rgba(139,92,246,0.07)",
    accentDark: "rgba(139,92,246,0.06)",
    iconBg: "bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
    tagColor: "text-violet-600 dark:text-violet-400",
    glowColor: "hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),0_8px_32px_rgba(139,92,246,0.07)]",
  },
];

export default function WhySection() {
  return (
    <section className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6 py-24">

        {/* ── Philosophy block ── */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Why this exists
          </p>
          <h2 className="mb-5 text-3xl font-bold leading-[1.6] tracking-tight sm:text-4xl sm:leading-[1.6]">
            개발은 김문규
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            AI 도구가 넘쳐나는 시대에도, 처음 마주치는 에러 앞에서는 누구나 막막합니다.
            이 사이트는 그 순간들을 기록하고, 다음 사람이 같은 벽에 부딪히지 않도록 만들었습니다.
          </p>
        </div>

        {/* ── Feature cards ── */}
        <div className="grid gap-5 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.tag}
              className={`group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900/60 ${f.glowColor}`}
            >
              {/* Top row: icon + tag */}
              <div className="mb-5 flex items-center justify-between">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${f.iconBg}`}>
                  {f.icon}
                </div>
                <span className={`text-xs font-semibold uppercase tracking-wider ${f.tagColor}`}>
                  {f.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {f.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {f.description}
              </p>

              {/* CTA */}
              <Link
                href={f.href}
                className="text-xs font-semibold text-zinc-400 transition-colors group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-zinc-100"
              >
                {f.cta}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
