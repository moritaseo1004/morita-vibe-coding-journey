"use client";

import { useState, useRef } from "react";
import { submitQuestion } from "@/app/actions/discussion";

type Props = {
  slug: string;
  docType: string;
};

export default function QuestionForm({ slug, docType }: Props) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    await submitQuestion(formData);
    formRef.current?.reset();
    setOpen(false);
    setPending(false);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        질문하기
      </button>
    );
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-700 dark:bg-zinc-800/40"
    >
      <h4 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">새 질문</h4>

      <input type="hidden" name="slug" value={slug} />
      <input type="hidden" name="docType" value={docType} />

      <div className="space-y-3">
        <input
          name="author"
          placeholder="이름 (선택 — 미입력 시 Anonymous)"
          className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500"
        />
        <textarea
          name="body"
          required
          rows={4}
          placeholder="이 문서에서 궁금한 점이나 겪고 있는 문제를 알려주세요."
          className="w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500"
        />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {pending ? "등록 중..." : "질문 등록"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-sm text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
        >
          취소
        </button>
      </div>
    </form>
  );
}
