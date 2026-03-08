import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
      <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
        홈
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span>/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-zinc-900 dark:hover:text-zinc-100">
              {item.label}
            </Link>
          ) : (
            <span className="text-zinc-900 dark:text-zinc-100">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
