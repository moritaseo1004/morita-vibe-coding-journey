import DocsLayout from "@/components/DocsLayout";
import { getArticlesByType } from "@/lib/docs";

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  const guides = getArticlesByType("guides");

  const items = guides.map((g) => ({
    label: g.frontmatter.title,
    href: g.href,
  }));

  // Prepend an "Overview" link pointing to the guides index
  const navItems = [{ label: "Overview", href: "/guides" }, ...items];

  return (
    <DocsLayout items={navItems} title="Guides">
      {children}
    </DocsLayout>
  );
}
