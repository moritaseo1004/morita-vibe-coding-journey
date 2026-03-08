import { getQuestions } from "@/lib/discussion";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";
import type { ContentType } from "@/lib/types";

type Props = {
  slug: string;
  docType: ContentType;
};

export default function DiscussionSection({ slug, docType }: Props) {
  const questions = getQuestions(slug);

  return (
    <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Discussion
          </h2>
          {questions.length > 0 && (
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {questions.length}
            </span>
          )}
        </div>
        <QuestionForm slug={slug} docType={docType} />
      </div>

      <QuestionList questions={questions} slug={slug} docType={docType} />
    </section>
  );
}
