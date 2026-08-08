"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Review = {
  id: number;
  place_slug: string;
  nickname: string;
  rating: number;
  content: string;
  created_at?: string;
};
<div className="rounded-3xl bg-white p-8 shadow-sm">
  <h2 className="text-3xl font-black">
    🏛️ 전시관에서 꼭 봐야 할 공간
  </h2>

  <div className="mt-8 grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl border p-6">
      <h3 className="text-xl font-bold">
        🖼️ 백령도 옛 사진 전시
      </h3>

      <p className="mt-4 leading-7 text-gray-700">
        과거 백령도 마을의 모습과 주민들의 생활상을 담은 사진들이 전시되어 있습니다.
        현재와 비교하며 백령도의 변화를 한눈에 살펴볼 수 있는 공간입니다.
      </p>
    </div>

    <div className="rounded-2xl border p-6">
      <h3 className="text-xl font-bold">
        🖥️ 3D 스마트 체험존
      </h3>

      <p className="mt-4 leading-7 text-gray-700">
        디지털 콘텐츠를 통해 백령도의 주요 관광지와 자연환경을 입체적으로
        체험할 수 있는 공간으로 아이들과 함께 방문하기 좋습니다.
      </p>
    </div>

    <div className="rounded-2xl border p-6">
      <h3 className="text-xl font-bold">
        💥 연평도 포격 포 잔해
      </h3>

      <p className="mt-4 leading-7 text-gray-700">
        연평도 포격 당시 실제 사용되었던 포 잔해와 관련 자료가 전시되어 있으며,
        백령도의 역사와 안보의 의미를 되새길 수 있습니다.
      </p>
    </div>

  </div>
</div>
export default function PlaceReviews() {
  const [nickname, setNickname] = useState("");
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [message, setMessage] = useState("");

  const placeSlug = "dumujin";

  useEffect(() => {
    loadReviews();
  }, []);

  async function loadReviews() {
    setIsFetching(true);
    setMessage("");

    const { data, error } = await supabase
      .from("place_reviews")
      .select("*")
      .eq("place_slug", placeSlug)
      .order("id", { ascending: false });

    if (error) {
      console.error("리뷰 불러오기 오류:", error.message, error.details);
      setMessage(`리뷰 불러오기 실패: ${error.message}`);
      setReviews([]);
      setIsFetching(false);
      return;
    }

    setReviews((data as Review[]) || []);
    setIsFetching(false);
  }

  async function handleSubmitReview() {
    const trimmedNickname = nickname.trim();
    const trimmedContent = content.trim();

    if (!trimmedNickname) {
      alert("닉네임을 입력해 주세요.");
      return;
    }

    if (!trimmedContent) {
      alert("방문 후기를 입력해 주세요.");
      return;
    }

    if (trimmedContent.length < 5) {
      alert("방문 후기를 5자 이상 입력해 주세요.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    const { error } = await supabase.from("place_reviews").insert([
      {
        place_slug: placeSlug,
        nickname: trimmedNickname,
        rating,
        content: trimmedContent,
      },
    ]);

    if (error) {
      console.error("리뷰 등록 오류:", error.message, error.details);
      setMessage(`리뷰 등록 실패: ${error.message}`);
      setIsLoading(false);
      return;
    }

    setNickname("");
    setRating(5);
    setContent("");
    setMessage("리뷰가 정상적으로 등록되었습니다. 😊");

    await loadReviews();
    setIsLoading(false);
  }

  function renderStars(value: number) {
    return "★".repeat(value) + "☆".repeat(5 - value);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">
        <div className="mb-8">
          <p className="font-bold text-sky-600">방문자 이야기</p>

          <h2 className="mt-2 text-3xl font-black">
            ⭐ 방문 리뷰
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            여행을 다녀온 경험과 여행 팁을 자유롭게 남겨주세요.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-50 p-5 md:p-7">
          <label className="block">
            <span className="mb-2 block font-bold text-gray-800">
              닉네임
            </span>

            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력하세요"
              maxLength={20}
              className="w-full rounded-2xl border border-gray-200 bg-white p-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            />
          </label>

          <div className="mt-5">
            <span className="mb-2 block font-bold text-gray-800">
              만족도
            </span>

            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`rounded-xl px-4 py-3 text-2xl transition ${
                    rating >= star
                      ? "bg-amber-100 text-amber-500"
                      : "bg-white text-gray-300"
                  }`}
                  aria-label={`${star}점`}
                >
                  ★
                </button>
              ))}
            </div>

            <p className="mt-2 text-sm font-bold text-amber-600">
              {rating}점
            </p>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block font-bold text-gray-800">
              방문 후기
            </span>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="두무진에서 좋았던 점, 방문 시간, 준비물 등의 후기를 적어주세요."
              rows={5}
              maxLength={500}
              className="w-full resize-none rounded-2xl border border-gray-200 bg-white p-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            />

            <p className="mt-2 text-right text-sm text-gray-400">
              {content.length} / 500
            </p>
          </label>

          <button
            type="button"
            onClick={handleSubmitReview}
            disabled={isLoading}
            className="mt-4 w-full rounded-2xl bg-sky-600 p-4 font-bold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {isLoading ? "등록 중..." : "리뷰 등록"}
          </button>

          {message && (
            <p className="mt-4 rounded-2xl bg-white p-4 text-center font-semibold text-gray-700">
              {message}
            </p>
          )}
        </div>

        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-2xl font-black">방문 후기</h3>

            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
              {reviews.length}개
            </span>
          </div>

          {isFetching ? (
            <div className="rounded-2xl bg-gray-50 p-8 text-center text-gray-500">
              리뷰를 불러오는 중입니다...
            </div>
          ) : reviews.length === 0 ? (
            <div className="rounded-2xl bg-gray-50 p-8 text-center">
              <div className="mb-3 text-4xl">✍️</div>

              <p className="font-bold text-gray-700">
                아직 등록된 리뷰가 없습니다.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                첫 번째 두무진 방문 후기를 남겨주세요.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-extrabold text-gray-900">
                        😊 {review.nickname}
                      </p>

                      <p className="mt-1 text-lg text-amber-500">
                        {renderStars(review.rating)}
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                      두무진 방문 후기
                    </span>
                  </div>

                  <p className="mt-5 whitespace-pre-wrap leading-8 text-gray-700">
                    {review.content}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}