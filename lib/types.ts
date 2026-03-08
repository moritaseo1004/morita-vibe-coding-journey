export type ContentType = "guides" | "tutorials" | "troubleshooting";

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  tag?: string;
  draft?: boolean;
};

export type Article = {
  slug: string;
  type: ContentType;
  frontmatter: Frontmatter;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SidebarSection = {
  title: string;
  items: NavItem[];
};

export type TocItem = {
  id: string;
  label: string;
  level: 2 | 3;
};
