"use client";

export default function PlaceReviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="rounded-3xl bg-white p-10 shadow-lg">
        <h2 className="text-3xl font-black">
          ⭐ 두무진 방문 리뷰
        </h2>

        <input
          type="text"
          placeholder="닉네임"
          className="mt-6 w-full rounded-xl border p-4"
        />

        <textarea
          placeholder="방문 후기를 적어주세요"
          rows={5}
          className="mt-4 w-full rounded-xl border p-4"
        />

        <button
          type="button"
          className="mt-4 w-full rounded-xl bg-sky-600 p-4 font-bold text-white"
        >
          리뷰 등록
        </button>
      </div>
    </section>
  );
}