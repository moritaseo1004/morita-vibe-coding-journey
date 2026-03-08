import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByType } from "@/lib/docs";

export const metadata: Metadata = {
  title: "문제 해결",
  description: "바이브 코딩 중 만난 문제들과 명확한 해결 방법.",
};

export default function TroubleshootingPage() {
  const issues = getArticlesByType("troubleshooting");

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">도움말</p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">문제 해결</h1>
      <p className="mb-12 text-lg text-zinc-500 dark:text-zinc-400">
        바이브 코딩 중 만난 문제들과 명확한 해결 방법.
      </p>

      {issues.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">아직 문서화된 이슈가 없습니다. 곧 추가될 예정입니다.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {issues.map((issue) => (
            <ArticleCard
              key={issue.slug}
              title={issue.frontmatter.title}
              description={issue.frontmatter.description}
              href={issue.href}
              tag={issue.frontmatter.tag}
            />
          ))}
        </div>
      )}
    </main>
  );
}
