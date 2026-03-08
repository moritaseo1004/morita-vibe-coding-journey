import Link from "next/link";

type SidebarItem = {
  label: string;
  href: string;
};

type SidebarSection = {
  title: string;
  items: SidebarItem[];
};

type SidebarProps = {
  sections: SidebarSection[];
};

export default function Sidebar({ sections }: SidebarProps) {
  return (
    <aside className="w-56 shrink-0">
      <nav className="space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
