// ── Types ─────────────────────────────────────────────────────────────────────

export type Answer = {
  id: string;
  questionId: string;
  author: string;
  body: string;
  createdAt: string;
};

export type Question = {
  id: string;
  slug: string; // document slug (e.g. "getting-started-claude-code")
  author: string;
  body: string;
  createdAt: string;
  answers: Answer[];
};

// ── In-memory store (swap these functions for Supabase later) ─────────────────
//
// When migrating to Supabase:
//   1. Replace the arrays below with Supabase table queries
//   2. Keep function signatures identical — components won't need to change
//   3. Add `await` to all calls and mark callers as async

const questions: Question[] = [
  // Seed data for demo
  {
    id: "q-seed-1",
    slug: "getting-started-claude-code",
    author: "개발 초보",
    body: "claude 명령어가 not found 라고 나오는데 어떻게 해결하나요?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    answers: [
      {
        id: "a-seed-1",
        questionId: "q-seed-1",
        author: "Morita",
        body: "npm install -g @anthropic-ai/claude-code 명령어로 전역 설치 후, 터미널을 재시작해 보세요. PATH 문제라면 which claude 로 경로를 확인해보세요.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      },
    ],
  },
  {
    id: "q-seed-2",
    slug: "tailwind-styles-not-applying",
    author: "tailwind_user",
    body: "v4로 업그레이드했는데 기존 tailwind.config.js 설정이 먹히지 않습니다.",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    answers: [],
  },
];

// ── Store API ─────────────────────────────────────────────────────────────────

export function getQuestions(slug: string): Question[] {
  // Supabase: return supabase.from("questions").select("*, answers(*)").eq("slug", slug)
  return questions.filter((q) => q.slug === slug);
}

export function addQuestion(slug: string, author: string, body: string): Question {
  // Supabase: return supabase.from("questions").insert({ slug, author, body }).select().single()
  const q: Question = {
    id: `q-${Date.now()}`,
    slug,
    author: author.trim() || "Anonymous",
    body,
    createdAt: new Date().toISOString(),
    answers: [],
  };
  questions.push(q);
  return q;
}

export function addAnswer(questionId: string, author: string, body: string): Answer {
  // Supabase: return supabase.from("answers").insert({ questionId, author, body }).select().single()
  const a: Answer = {
    id: `a-${Date.now()}`,
    questionId,
    author: author.trim() || "Anonymous",
    body,
    createdAt: new Date().toISOString(),
  };
  const q = questions.find((q) => q.id === questionId);
  if (q) q.answers.push(a);
  return a;
}
