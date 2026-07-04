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

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [questions, setQuestions] = useState<QnaQuestion[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeContent, setNoticeContent] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAdmin(true);
    } else {
      alert("비밀번호가 틀렸어요.");
    }
  };

  useEffect(() => {
    if (isAdmin) {
      loadQuestions();
      loadNotices();
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

  async function handleCreateNotice(e: React.FormEvent) {
    e.preventDefault();

    if (!noticeTitle.trim() || !noticeContent.trim()) {
      alert("공지 제목과 내용을 입력해주세요.");
      return;
    }

    const { error } = await supabase.from("notices").insert([
      {
        title: noticeTitle,
        content: noticeContent,
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

    const { error } = await supabase.from("notices").delete().eq("id", id);

    if (error) {
      alert("공지 삭제 실패");
      console.error(error);
      return;
    }

    alert("공지사항이 삭제되었습니다.");
    loadNotices();
  }

  async function handleAnswer(id: number) {
    const answer = prompt("답변을 입력하세요.");
    if (!answer) return;

    const { error } = await supabase
      .from("qna_questions")
      .update({ answer, is_answered: true })
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
      <main className="max-w-md mx-auto px-6 py-24">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            관리자 로그인
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="관리자 비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
            />

            <button
              type="submit"
              className="w-full bg-sky-500 text-white rounded-xl py-3 font-bold"
            >
              로그인
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-8">관리자 페이지</h1>

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">공지사항 작성</h2>

          <form onSubmit={handleCreateNotice} className="space-y-4">
            <input
              type="text"
              placeholder="공지 제목"
              value={noticeTitle}
              onChange={(e) => setNoticeTitle(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
            />

            <textarea
              placeholder="공지 내용"
              value={noticeContent}
              onChange={(e) => setNoticeContent(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 min-h-32"
            />

            <button
              type="submit"
              className="bg-orange-500 text-white px-5 py-3 rounded-xl font-bold"
            >
              공지 등록
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">공지사항 목록</h2>

          {notices.map((notice) => (
            <div key={notice.id} className="bg-white rounded-3xl shadow p-6">
              <h3 className="text-xl font-bold mb-2">{notice.title}</h3>
              <p className="text-gray-700 whitespace-pre-line mb-4">
                {notice.content}
              </p>

              <button
                onClick={() => handleDeleteNotice(notice.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold"
              >
                공지 삭제
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Q&A 관리자</h2>

        <div className="space-y-5">
          {questions.map((q) => (
            <div key={q.id} className="bg-white rounded-3xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-bold">
                  {q.category}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-bold ${
                    q.is_answered
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {q.is_answered ? "답변완료" : "답변대기"}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">{q.title}</h3>

              <p className="text-sm text-gray-500 mb-4">
                작성자: {q.nickname || "익명"}
              </p>

              <p className="text-gray-700 whitespace-pre-line mb-4">
                {q.content}
              </p>

              {q.answer && (
                <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                  <p className="font-bold mb-2">쩨쩨 답변</p>
                  <p className="whitespace-pre-line">{q.answer}</p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => handleAnswer(q.id)}
                  className="bg-sky-500 text-white px-5 py-3 rounded-xl font-bold"
                >
                  {q.is_answered ? "답변 수정" : "답변하기"}
                </button>

                <button
                  onClick={() => handleDelete(q.id)}
                  className="bg-red-500 text-white px-5 py-3 rounded-xl font-bold"
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