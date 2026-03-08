import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByType } from "@/lib/docs";

export const metadata: Metadata = {
  title: "튜토리얼",
  description: "AI와 바이브 코딩으로 실제 결과물을 만드는 단계별 튜토리얼.",
};

export default function TutorialsPage() {
  const tutorials = getArticlesByType("tutorials");

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">학습</p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">튜토리얼</h1>
      <p className="mb-12 text-lg text-zinc-500 dark:text-zinc-400">
        AI와 바이브 코딩으로 실제 결과물을 만드는 단계별 튜토리얼.
      </p>

      {tutorials.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">아직 튜토리얼이 없습니다. 곧 추가될 예정입니다.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {tutorials.map((tutorial) => (
            <ArticleCard
              key={tutorial.slug}
              title={tutorial.frontmatter.title}
              description={tutorial.frontmatter.description}
              href={tutorial.href}
              tag={tutorial.frontmatter.tag}
            />
          ))}
        </div>
      )}
    </main>
  );
}
