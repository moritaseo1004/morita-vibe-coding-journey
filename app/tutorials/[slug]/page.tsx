import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/Breadcrumb";
import PrevNextNav from "@/components/PrevNextNav";
import { getArticle, getAllSlugs } from "@/lib/docs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs("tutorials").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("tutorials", slug);
  if (!article) return {};
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
  };
}

export default async function TutorialDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle("tutorials", slug);

  if (!article) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Breadcrumb items={[{ label: "Tutorials", href: "/tutorials" }, { label: article.frontmatter.title }]} />

      <article className="mt-6">
        <header className="mb-10">
          {article.frontmatter.tag && (
            <span className="mb-3 inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {article.frontmatter.tag}
            </span>
          )}
          <h1 className="mb-3 text-4xl font-bold tracking-tight">{article.frontmatter.title}</h1>
          <p className="text-zinc-500 dark:text-zinc-400">{article.frontmatter.description}</p>
          {article.frontmatter.date && (
            <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-500">{article.frontmatter.date}</p>
          )}
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXRemote source={article.content} />
        </div>
      </article>

      <PrevNextNav
        prev={{ label: "Back to Tutorials", href: "/tutorials" }}
        next={null}
      />
    </main>
  );
}
