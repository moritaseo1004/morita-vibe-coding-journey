import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByType } from "@/lib/docs";

export const metadata: Metadata = {
  title: "가이드",
  description: "바이브 코딩을 위한 도구, 워크플로우, 베스트 프랙티스 가이드.",
};

export default function GuidesPage() {
  const guides = getArticlesByType("guides");

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">문서</p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">가이드</h1>
      <p className="mb-12 text-lg text-zinc-500 dark:text-zinc-400">
        바이브 코딩을 위한 도구, 워크플로우, 베스트 프랙티스 가이드.
      </p>

      {guides.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">아직 가이드가 없습니다. 곧 추가될 예정입니다.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <ArticleCard
              key={guide.slug}
              title={guide.frontmatter.title}
              description={guide.frontmatter.description}
              href={guide.href}
              tag={guide.frontmatter.tag}
            />
          ))}
        </div>
      )}
    </div>
  );
}
