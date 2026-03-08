import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
} | null;

type PrevNextNavProps = {
  prev: NavLink;
  next: NavLink;
};

export default function PrevNextNav({ prev, next }: PrevNextNavProps) {
  return (
    <div className="mt-16 flex justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
      <div>
        {prev && (
          <Link
            href={prev.href}
            className="flex flex-col gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <span className="text-xs uppercase tracking-wider">이전</span>
            <span className="font-medium">← {prev.label}</span>
          </Link>
        )}
      </div>
      <div className="text-right">
        {next && (
          <Link
            href={next.href}
            className="flex flex-col gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <span className="text-xs uppercase tracking-wider">다음</span>
            <span className="font-medium">{next.label} →</span>
          </Link>
        )}
      </div>
    </div>
  );
}
