"use client";

import { useState, useRef } from "react";
import { submitAnswer } from "@/app/actions/discussion";

type Props = {
  questionId: string;
  slug: string;
  docType: string;
};

export default function AnswerForm({ questionId, slug, docType }: Props) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    await submitAnswer(formData);
    formRef.current?.reset();
    setOpen(false);
    setPending(false);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="mt-3 text-xs font-medium text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
      >
        + 답변 달기
      </button>
    );
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="mt-4 space-y-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50"
    >
      <input type="hidden" name="questionId" value={questionId} />
      <input type="hidden" name="slug" value={slug} />
      <input type="hidden" name="docType" value={docType} />

      <input
        name="author"
        placeholder="이름 (선택)"
        className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-400"
      />
      <textarea
        name="body"
        required
        rows={3}
        placeholder="답변을 입력하세요..."
        className="w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-400"
      />

      <div className="flex items-center gap-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-zinc-900 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {pending ? "등록 중..." : "답변 등록"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-xs text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
        >
          취소
        </button>
      </div>
    </form>
  );
}
