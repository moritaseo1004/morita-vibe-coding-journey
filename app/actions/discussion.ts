"use server";

import { revalidatePath } from "next/cache";
import { addQuestion, addAnswer } from "@/lib/discussion";

export async function submitQuestion(formData: FormData) {
  const slug = formData.get("slug") as string;
  const docType = formData.get("docType") as string;
  const author = (formData.get("author") as string) ?? "";
  const body = (formData.get("body") as string) ?? "";

  if (!body.trim() || !slug) return;

  addQuestion(slug, author, body.trim());

  // Supabase migration: replace addQuestion() above with:
  //   await supabase.from("questions").insert({ slug, author, body })
  revalidatePath(`/${docType}/${slug}`);
}

export async function submitAnswer(formData: FormData) {
  const questionId = formData.get("questionId") as string;
  const slug = formData.get("slug") as string;
  const docType = formData.get("docType") as string;
  const author = (formData.get("author") as string) ?? "";
  const body = (formData.get("body") as string) ?? "";

  if (!body.trim() || !questionId) return;

  addAnswer(questionId, author, body.trim());

  // Supabase migration: replace addAnswer() above with:
  //   await supabase.from("answers").insert({ questionId, author, body })
  revalidatePath(`/${docType}/${slug}`);
}
