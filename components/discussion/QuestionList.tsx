import type { Question } from "@/lib/discussion";
import AnswerForm from "./AnswerForm";

type Props = {
  questions: Question[];
  slug: string;
  docType: string;
};

function timeAgo(isoString: string): string {
  const diff = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "방금 전";
  if (mins < 60) return `${mins}분 전`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  return `${days}일 전`;
}

export default function QuestionList({ questions, slug, docType }: Props) {
  if (questions.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-200 py-10 text-center dark:border-zinc-700">
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          아직 질문이 없습니다. 첫 번째 질문을 남겨보세요.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {questions.map((q) => (
        <div
          key={q.id}
          className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/60"
        >
          {/* Question */}
          <div className="p-5">
            <div className="mb-3 flex items-center gap-2">
              {/* Avatar */}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                {q.author.charAt(0).toUpperCase()}
              </span>
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {q.author}
              </span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500">
                {timeAgo(q.createdAt)}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {q.body}
            </p>
          </div>

          {/* Answers */}
          {q.answers.length > 0 && (
            <div className="border-t border-zinc-100 dark:border-zinc-800">
              {q.answers.map((a, idx) => (
                <div
                  key={a.id}
                  className={`flex gap-3 px-5 py-4 ${
                    idx !== q.answers.length - 1
                      ? "border-b border-zinc-100 dark:border-zinc-800"
                      : ""
                  }`}
                >
                  {/* Indent indicator */}
                  <div className="mt-1 flex shrink-0 flex-col items-center">
                    <div className="h-2 w-px bg-zinc-200 dark:bg-zinc-700" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-zinc-300 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                        {a.author.charAt(0).toUpperCase()}
                      </span>
                      <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        {a.author}
                      </span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        {timeAgo(a.createdAt)}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {a.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Answer form */}
          <div className="border-t border-zinc-100 px-5 pb-4 dark:border-zinc-800">
            <AnswerForm questionId={q.id} slug={slug} docType={docType} />
          </div>
        </div>
      ))}
    </div>
  );
}
