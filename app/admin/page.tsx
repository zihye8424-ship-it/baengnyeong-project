"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type QnaQuestion = {
  id: number;
  nickname: string;
  category: string;
  title: string;
  content: string;
  answer: string | null;
  is_answered: boolean;
  created_at: string;
};

type Notice = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

type TravelerFootprint = {
  id: number;
  nickname: string;
  island: string;
  place_name: string;
  story: string | null;
  image_url: string;
  is_approved: boolean;
  created_at: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [questions, setQuestions] = useState<QnaQuestion[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");
  const [footprints, setFootprints] = useState<TravelerFootprint[]>([]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!password.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    setLoginLoading(true);

    try {
      const response = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        alert(result.message || "비밀번호가 틀렸어요.");
        return;
      }

      setAdminPassword(password);
      setIsAdmin(true);
      setPassword("");
    } catch (error) {
      console.error(error);
      alert("로그인 확인 중 오류가 발생했어요.");
    } finally {
      setLoginLoading(false);
    }
  }

  useEffect(() => {
    if (isAdmin) {
      loadQuestions();
      loadNotices();
      loadFootprints();
    }
  }, [isAdmin]);

  async function loadQuestions() {
    const { data, error } = await supabase
      .from("qna_questions")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setQuestions(data);
  }

  async function loadNotices() {
    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setNotices(data);
  }

  async function footprintAdminRequest(
    action: "list" | "approve" | "delete",
    item?: TravelerFootprint
  ) {
    const response = await fetch("/api/admin/traveler-footprints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: adminPassword,
        action,
        id: item?.id,
        image_url: item?.image_url,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      throw new Error(result.message || "관리자 요청을 처리하지 못했어요.");
    }

    return result;
  }

  async function loadFootprints() {
    try {
      const result = await footprintAdminRequest("list");
      setFootprints(result.data || []);
    } catch (error) {
      console.error("섬 발자국 불러오기 오류:", error);
    }
  }

  async function handleApproveFootprint(id: number) {
    try {
      const item = footprints.find((footprint) => footprint.id === id);
      if (!item) return;

      await footprintAdminRequest("approve", item);
      alert("섬 발자국을 승인했어요.");
      loadFootprints();
    } catch (error) {
      alert(error instanceof Error ? error.message : "승인 처리에 실패했어요.");
      console.error(error);
    }
  }

  async function handleDeleteFootprint(item: TravelerFootprint) {
    if (!confirm("이 사진과 글을 삭제하시겠습니까?")) return;

    try {
      await footprintAdminRequest("delete", item);
      alert("섬 발자국을 삭제했어요.");
      loadFootprints();
    } catch (error) {
      alert(error instanceof Error ? error.message : "삭제에 실패했어요.");
      console.error(error);
    }
  }

  async function handleCreateNotice(e: React.FormEvent) {
    e.preventDefault();

    if (!noticeTitle.trim() || !noticeContent.trim()) {
      alert("공지 제목과 내용을 입력해주세요.");
      return;
    }

    const { error } = await supabase.from("notices").insert([
      {
        title: noticeTitle.trim(),
        content: noticeContent.trim(),
      },
    ]);

    if (error) {
      alert("공지 등록 실패");
      console.error(error);
      return;
    }

    setNoticeTitle("");
    setNoticeContent("");
    alert("공지사항이 등록되었습니다.");
    loadNotices();
  }

  async function handleDeleteNotice(id: number) {
    if (!confirm("공지사항을 삭제하시겠습니까?")) return;

    const { error } = await supabase
      .from("notices")
      .delete()
      .eq("id", id);

    if (error) {
      alert("공지 삭제 실패");
      console.error(error);
      return;
    }

    alert("공지사항이 삭제되었습니다.");
    loadNotices();
  }

  async function handleAnswer(id: number) {
    const current = questions.find((q) => q.id === id);
    const answer = prompt("답변을 입력하세요.", current?.answer ?? "");

    if (answer === null || !answer.trim()) return;

    const { error } = await supabase
      .from("qna_questions")
      .update({
        answer: answer.trim(),
        is_answered: true,
      })
      .eq("id", id);

    if (error) {
      alert("답변 저장 중 오류가 발생했어요.");
      console.error(error);
      return;
    }

    alert("답변이 저장되었어요.");
    loadQuestions();
  }

  async function handleDelete(id: number) {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    const { error } = await supabase
      .from("qna_questions")
      .delete()
      .eq("id", id);

    if (error) {
      alert("삭제 실패");
      console.error(error);
      return;
    }

    alert("삭제되었습니다.");
    loadQuestions();
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-lg">
          <p className="text-center font-bold text-sky-600">
            백령도의 모든 정보
          </p>

          <h1 className="mt-2 mb-6 text-center text-3xl font-extrabold">
            🔐 관리자 로그인
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="관리자 비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border px-4 py-3"
            />

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full rounded-xl bg-sky-500 py-3 font-bold text-white disabled:opacity-60"
            >
              {loginLoading ? "확인 중..." : "로그인"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl space-y-12 px-6 py-20">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-4xl font-bold">관리자 페이지</h1>

        <button
          onClick={() => { setIsAdmin(false); setAdminPassword(""); setFootprints([]); }}
          className="rounded-xl bg-gray-100 px-4 py-2 font-bold"
        >
          로그아웃
        </button>
      </div>

      <section>
        <div className="mb-8 rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">공지사항 작성</h2>

          <form onSubmit={handleCreateNotice} className="space-y-4">
            <input
              type="text"
              placeholder="공지 제목"
              value={noticeTitle}
              onChange={(e) => setNoticeTitle(e.target.value)}
              className="w-full rounded-xl border px-4 py-3"
            />

            <textarea
              placeholder="공지 내용"
              value={noticeContent}
              onChange={(e) => setNoticeContent(e.target.value)}
              className="min-h-32 w-full rounded-xl border px-4 py-3"
            />

            <button
              type="submit"
              className="rounded-xl bg-orange-500 px-5 py-3 font-bold text-white"
            >
              공지 등록
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">공지사항 목록</h2>

          {notices.map((notice) => (
            <div
              key={notice.id}
              className="rounded-3xl bg-white p-6 shadow"
            >
              <h3 className="mb-2 text-xl font-bold">
                {notice.title}
              </h3>

              <p className="mb-4 whitespace-pre-line text-gray-700">
                {notice.content}
              </p>

              <button
                onClick={() => handleDeleteNotice(notice.id)}
                className="rounded-xl bg-red-500 px-4 py-2 font-bold text-white"
              >
                공지 삭제
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-bold text-amber-600">TRAVELER PHOTO</p>
            <h2 className="text-3xl font-bold">📸 여행자들의 섬 발자국 관리</h2>
          </div>
          <p className="text-sm text-gray-500">
            승인대기 {footprints.filter((item) => !item.is_approved).length}개 · 공개중 {footprints.filter((item) => item.is_approved).length}개
          </p>
        </div>

        {footprints.length === 0 ? (
          <div className="rounded-3xl bg-white p-8 text-center text-gray-500 shadow">
            아직 등록된 섬 발자국이 없어요.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {footprints.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-3xl bg-white shadow-lg">
                <a href={item.image_url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image_url}
                    alt={`${item.island} ${item.place_name}`}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </a>

                <div className="p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
                      {item.island}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        item.is_approved
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.is_approved ? "공개중" : "승인대기"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold">{item.place_name}</h3>
                  <p className="mt-1 text-sm text-gray-500">작성자: {item.nickname}</p>

                  {item.story && (
                    <p className="mt-3 whitespace-pre-line leading-7 text-gray-700">
                      {item.story}
                    </p>
                  )}

                  <div className="mt-5 flex gap-3">
                    {!item.is_approved && (
                      <button
                        onClick={() => handleApproveFootprint(item.id)}
                        className="flex-1 rounded-xl bg-green-500 px-4 py-3 font-bold text-white hover:bg-green-600"
                      >
                        ✓ 승인해서 공개
                      </button>
                    )}

                    <button
                      onClick={() => handleDeleteFootprint(item)}
                      className="rounded-xl bg-red-500 px-4 py-3 font-bold text-white hover:bg-red-600"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold">
          Q&amp;A 관리자
        </h2>

        <div className="space-y-5">
          {questions.map((q) => (
            <div
              key={q.id}
              className="rounded-3xl bg-white p-6 shadow-lg"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-bold text-sky-700">
                  {q.category}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-bold ${
                    q.is_answered
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {q.is_answered ? "답변완료" : "답변대기"}
                </span>
              </div>

              <h3 className="mb-2 text-2xl font-bold">
                {q.title}
              </h3>

              <p className="mb-4 text-sm text-gray-500">
                작성자: {q.nickname || "익명"}
              </p>

              <p className="mb-4 whitespace-pre-line text-gray-700">
                {q.content}
              </p>

              {q.answer && (
                <div className="mb-4 rounded-2xl bg-gray-50 p-4">
                  <p className="mb-2 font-bold">쩨쩨 답변</p>
                  <p className="whitespace-pre-line">
                    {q.answer}
                  </p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => handleAnswer(q.id)}
                  className="rounded-xl bg-sky-500 px-5 py-3 font-bold text-white"
                >
                  {q.is_answered ? "답변 수정" : "답변하기"}
                </button>

                <button
                  onClick={() => handleDelete(q.id)}
                  className="rounded-xl bg-red-500 px-5 py-3 font-bold text-white"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}