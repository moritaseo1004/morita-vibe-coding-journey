import { getArticlesByType } from "./docs";
import type { ContentType } from "./types";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  type: ContentType;
  tag?: string;
};

const TYPES: ContentType[] = ["guides", "tutorials", "troubleshooting"];

export function getSearchIndex(): SearchItem[] {
  return TYPES.flatMap((type) =>
    getArticlesByType(type).map((article) => ({
      title: article.frontmatter.title,
      description: article.frontmatter.description ?? "",
      href: article.href,
      type,
      tag: article.frontmatter.tag,
    }))
  );
}
