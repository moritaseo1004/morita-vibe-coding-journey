type TocItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav className="w-48 shrink-0">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        이 페이지
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
            <a
              href={`#${item.id}`}
              className="block text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
