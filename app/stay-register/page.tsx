"use client";

import { useState } from "react";
import Link from "next/link";

export default function StayRegisterPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-extrabold">
            백령도의 모든 정보
          </Link>

          <Link
            href="/#stay"
            className="rounded-full bg-gray-900 px-5 py-2 text-sm font-bold text-white"
          >
            ← 숙소 목록으로
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="mb-10 text-center">
          <p className="font-bold text-sky-600">무료 숙소 등록 신청</p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            🏨 백령도 숙소 등록하기
          </h1>

          <p className="mt-5 leading-8 text-gray-600">
            백령도의 펜션, 민박, 모텔, 호텔 운영자라면 숙소 정보를
            무료로 등록할 수 있습니다. 제출된 정보는 운영자가 확인한 뒤
            플랫폼에 공개됩니다.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block font-bold">숙소명 *</span>
              <input
                type="text"
                placeholder="예: 백령바다펜션"
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-bold">숙소 유형 *</span>
              <select className="w-full rounded-2xl border border-gray-200 bg-white p-4 outline-none focus:border-sky-500">
                <option value="">선택하세요</option>
                <option>펜션</option>
                <option>민박</option>
                <option>모텔</option>
                <option>호텔</option>
                <option>게스트하우스</option>
                <option>캠핑·기타</option>
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block font-bold">숙소 주소 *</span>
              <input
                type="text"
                placeholder="인천광역시 옹진군 백령면..."
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-bold">예약 전화번호 *</span>
              <input
                type="tel"
                placeholder="010-0000-0000"
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-bold">대표 객실 가격</span>
              <input
                type="text"
                placeholder="예: 1박 80,000원부터"
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block font-bold">숙소 소개 *</span>
              <textarea
                rows={5}
                placeholder="객실 특징, 바다 전망, 가족여행·군인 면회 추천 여부 등을 적어주세요."
                className="w-full resize-none rounded-2xl border border-gray-200 p-4 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block font-bold">편의시설</span>
              <input
                type="text"
                placeholder="예: 주차, 와이파이, 취사, 바비큐, 픽업"
                className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block font-bold">숙소 사진</span>

              <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                <div className="text-5xl">📷</div>

                <p className="mt-3 font-bold">사진 업로드는 다음 단계에서 연결합니다.</p>

                <p className="mt-2 text-sm text-gray-500">
                  외관, 객실, 화장실, 전망 사진을 최대 10장까지 받을 예정입니다.
                </p>
              </div>
            </label>
          </div>

          <label className="mt-8 flex items-start gap-3 rounded-2xl bg-sky-50 p-5">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-5 w-5"
            />

            <span className="leading-7 text-gray-700">
              입력한 숙소 정보와 사진을 ‘백령도의 모든 정보’ 플랫폼에
              게시하는 것에 동의합니다. 제출된 내용은 운영자 검토 후 공개됩니다.
            </span>
          </label>

          <button
            type="button"
            disabled={!agreed}
            onClick={() =>
              alert("화면 제작 완료! 다음 단계에서 Supabase 저장 기능을 연결합니다.")
            }
            className="mt-7 w-full rounded-2xl bg-sky-600 p-5 text-xl font-extrabold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            숙소 등록 신청하기
          </button>
        </div>

        <div className="mt-8 rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-200">
          <h2 className="text-xl font-extrabold text-amber-900">
            📌 등록 전 확인해 주세요
          </h2>

          <ul className="mt-4 space-y-2 leading-7 text-amber-950">
            <li>• 숙소 운영자 또는 등록 권한이 있는 분만 신청해 주세요.</li>
            <li>• 사진은 직접 촬영했거나 사용 권한이 있는 사진만 제출해야 합니다.</li>
            <li>• 전화번호와 가격이 변경되면 수정 요청을 보내주세요.</li>
            <li>• 허위·중복 신청은 공개되지 않을 수 있습니다.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}