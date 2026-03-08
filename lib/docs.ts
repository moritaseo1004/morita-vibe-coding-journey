import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article, ContentType, Frontmatter } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getArticlesByType(type: ContentType): Article[] {
  const dir = path.join(CONTENT_DIR, type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);
      const frontmatter = data as Frontmatter;

      return {
        slug,
        type,
        frontmatter,
        href: `/${type}/${slug}`,
      };
    })
    .filter((a) => !a.frontmatter.draft)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getArticle(
  type: ContentType,
  slug: string
): { frontmatter: Frontmatter; content: string } | null {
  const filePath = path.join(CONTENT_DIR, type, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return { frontmatter: data as Frontmatter, content };
}

export function getAllSlugs(type: ContentType): string[] {
  const dir = path.join(CONTENT_DIR, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
