import Link from "next/link";

type ArticleCardProps = {
  title: string;
  description: string;
  href: string;
  tag?: string;
};

export default function ArticleCard({ title, description, href, tag }: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-2 rounded-xl border border-zinc-200 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-md hover:shadow-zinc-100 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:shadow-zinc-900/50"
    >
      {tag && (
        <span className="w-fit rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          {tag}
        </span>
      )}
      <h3 className="font-semibold text-zinc-900 group-hover:underline group-hover:underline-offset-4 dark:text-zinc-100">
        {title}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
    </Link>
  );
}
