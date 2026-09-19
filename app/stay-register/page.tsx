"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

type BusinessType = "숙소" | "음식점";

const initialForm = {
  businessType: "숙소" as BusinessType,
  businessName: "",
  ownerName: "",
  phone: "",
  businessNumber: "",
  address: "",
  openingHours: "",
  priceInfo: "",
  description: "",
};

export default function StayRegisterPage() {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (type === "food") {
      setForm((prev) => ({ ...prev, businessType: "음식점" }));
    } else if (type === "stay") {
      setForm((prev) => ({ ...prev, businessType: "숙소" }));
    }
  }, []);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const update = (key: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    if (!agreed) {
      setErrorMessage("개인정보 수집·이용에 동의해 주세요.");
      return;
    }

    if (images.length > 8) {
      setErrorMessage("업체 사진은 최대 8장까지 등록할 수 있습니다.");
      return;
    }

    setSubmitting(true);

    try {
      const imageUrls: string[] = [];

      for (const file of images) {
        if (!file.type.startsWith("image/")) {
          throw new Error("이미지 파일만 업로드할 수 있습니다.");
        }

        if (file.size > 5 * 1024 * 1024) {
          throw new Error("사진 한 장의 용량은 5MB 이하로 선택해 주세요.");
        }

        const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
        const safeName = `${Date.now()}-${crypto.randomUUID()}.${extension}`;
        const filePath = `business-registrations/${safeName}`;

        const { error: uploadError } = await supabase.storage
          .from("stay-images")
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: false,
            contentType: file.type,
          });

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("stay-images")
          .getPublicUrl(filePath);

        imageUrls.push(data.publicUrl);
      }

      const { error } = await supabase.from("business_registrations").insert({
      business_type: form.businessType,
      business_name: form.businessName.trim(),
      owner_name: form.ownerName.trim(),
      phone: form.phone.trim(),
      business_number: form.businessNumber.trim() || null,
      address: form.address.trim() || null,
      opening_hours: form.openingHours.trim() || null,
      price_info: form.priceInfo.trim() || null,
      description: form.description.trim() || null,
      image_urls: imageUrls,
      is_approved: false,
      });

      if (error) throw error;

      setSubmitted(true);
      setForm(initialForm);
      setImages([]);
      setAgreed(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "등록 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-16 text-slate-900">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 md:p-12">
          <div className="text-6xl">✓</div>
          <h1 className="mt-6 text-3xl font-black">등록 신청이 접수되었습니다</h1>
          <p className="mt-4 leading-7 text-slate-600">
            보내주신 업체정보는 운영자가 확인한 뒤 승인된 정보만 플랫폼에
            공개됩니다. 신청자의 실명·연락처·사업자등록번호는 업체 소개
            화면에 공개하지 않습니다.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="rounded-2xl bg-sky-600 px-6 py-3 font-bold text-white hover:bg-sky-700"
            >
              다른 업체 등록하기
            </button>
            <Link
              href="/"
              className="rounded-2xl border border-slate-300 px-6 py-3 font-bold hover:bg-slate-50"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
          <Link href="/" className="font-black">
            ← 백령도의 모든 정보
          </Link>
          <span className="text-sm font-bold text-sky-700">업체 직접등록</span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <div className="mb-8 text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
            숙소 · 음식점 무료 등록 신청
          </span>
          <h1 className="mt-5 text-3xl font-black md:text-5xl">
            우리 업체 정보를 직접 등록해 주세요
          </h1>
          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-600">
            백령도 여행객에게 정확한 업체정보를 제공하기 위한 등록 페이지입니다.
            신청 내용은 바로 공개되지 않으며 운영자 확인과 승인 후 공개됩니다.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            ["1", "업체 직접 신청", "사업자가 정확한 정보를 직접 입력합니다."],
            ["2", "운영자 확인", "신청 내용을 확인하고 필요한 경우 추가 확인합니다."],
            ["3", "승인 후 공개", "승인된 업체정보만 플랫폼에 노출됩니다."],
          ].map(([n, title, text]) => (
            <div key={n} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 font-black text-white">
                {n}
              </div>
              <h2 className="mt-4 font-black">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-10"
        >
          <h2 className="text-2xl font-black">업체 등록 신청서</h2>
          <p className="mt-2 text-sm text-slate-500">
            * 표시 항목은 필수 입력입니다.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Field label="업체 구분 *">
              <select
                required
                value={form.businessType}
                onChange={(e) => update("businessType", e.target.value)}
                className={inputClass}
              >
                <option value="숙소">🏨 숙소</option>
                <option value="음식점">🍜 음식점</option>
              </select>
            </Field>

            <Field label="업체명 *">
              <input
                required
                maxLength={100}
                value={form.businessName}
                onChange={(e) => update("businessName", e.target.value)}
                placeholder="예: ○○펜션 / ○○식당"
                className={inputClass}
              />
            </Field>

            <Field label="신청자 실명 *" help="관리자 확인용이며 업체 공개 화면에는 표시하지 않습니다.">
              <input
                required
                maxLength={50}
                value={form.ownerName}
                onChange={(e) => update("ownerName", e.target.value)}
                placeholder="실명을 입력해 주세요"
                className={inputClass}
              />
            </Field>

            <Field label="연락처 *" help="등록 확인을 위해 연락드릴 수 있습니다.">
              <input
                required
                type="tel"
                maxLength={30}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="010-0000-0000"
                className={inputClass}
              />
            </Field>

            <Field label="사업자등록번호" help="사업자 확인 기능은 다음 단계에서 강화할 예정입니다.">
              <input
                maxLength={20}
                value={form.businessNumber}
                onChange={(e) => update("businessNumber", e.target.value)}
                placeholder="000-00-00000"
                className={inputClass}
              />
            </Field>

            <Field label="업체 주소">
              <input
                maxLength={200}
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                placeholder="업체 주소를 입력해 주세요"
                className={inputClass}
              />
            </Field>

            <Field label="영업시간 / 입·퇴실시간">
              <input
                maxLength={200}
                value={form.openingHours}
                onChange={(e) => update("openingHours", e.target.value)}
                placeholder={
                  form.businessType === "숙소"
                    ? "예: 입실 15:00 / 퇴실 11:00"
                    : "예: 10:00~20:00 / 매주 화요일 휴무"
                }
                className={inputClass}
              />
            </Field>

            <Field label={form.businessType === "숙소" ? "객실·가격 정보" : "대표메뉴·가격 정보"}>
              <input
                maxLength={500}
                value={form.priceInfo}
                onChange={(e) => update("priceInfo", e.target.value)}
                placeholder={
                  form.businessType === "숙소"
                    ? "예: 2인실 00원부터"
                    : "예: 냉면 00원 / 칼국수 00원"
                }
                className={inputClass}
              />
            </Field>

            <div className="md:col-span-2">
              <Field label="업체 소개">
                <textarea
                  rows={6}
                  maxLength={1500}
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  placeholder="여행객에게 소개하고 싶은 업체 특징, 이용 안내 등을 적어주세요."
                  className={inputClass}
                />
              </Field>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-sky-50 p-5 ring-1 ring-sky-200">
            <p className="font-black text-sky-950">📷 업체 사진 등록</p>
            <p className="mt-2 text-sm leading-6 text-sky-900">
              업체 외관, 객실, 음식, 메뉴 등 실제 업체 사진을 최대 8장까지 등록할 수
              있습니다. 사진 한 장은 5MB 이하의 이미지 파일을 선택해 주세요.
            </p>

            <label className="mt-4 inline-flex cursor-pointer rounded-2xl bg-white px-5 py-3 font-bold text-sky-700 shadow-sm ring-1 ring-sky-300 hover:bg-sky-100">
              사진 선택하기
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => {
                  const selected = Array.from(e.target.files ?? []);
                  if (selected.length > 8) {
                    setErrorMessage("업체 사진은 최대 8장까지 선택할 수 있습니다.");
                    e.target.value = "";
                    return;
                  }
                  setErrorMessage("");
                  setImages(selected);
                }}
              />
            </label>

            {images.length > 0 && (
              <div className="mt-4 rounded-xl bg-white p-4 text-sm text-slate-700">
                <strong>{images.length}장 선택됨</strong>
                <div className="mt-2 space-y-1">
                  {images.map((file) => (
                    <p key={`${file.name}-${file.lastModified}`} className="truncate">
                      · {file.name}
                    </p>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setImages([])}
                  className="mt-3 font-bold text-red-600 hover:underline"
                >
                  선택한 사진 모두 지우기
                </button>
              </div>
            )}
          </div>

          <label className="mt-8 flex cursor-pointer items-start gap-3 rounded-2xl bg-slate-50 p-5">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-5 w-5"
            />
            <span className="text-sm leading-6 text-slate-700">
              <strong>[필수] 개인정보 수집·이용에 동의합니다.</strong>
              <br />
              업체 등록 검토를 위해 신청자 이름, 연락처, 사업자등록번호(입력 시)를
              수집합니다. 해당 정보는 등록 검토 및 연락 목적으로 사용하며 일반
              방문자에게 공개하지 않습니다.
            </span>
          </label>

          {errorMessage && (
            <div className="mt-5 rounded-2xl bg-red-50 p-4 font-bold text-red-700 ring-1 ring-red-200">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-7 w-full rounded-2xl bg-sky-600 px-6 py-5 text-lg font-black text-white shadow-lg transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "등록 신청 중..." : "업체 등록 신청하기"}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            등록 신청은 자동 게시되지 않습니다. 운영자 승인 후 공개됩니다.
          </p>
        </form>
      </section>
    </main>
  );
}

const inputClass =
  "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100";

function Field({
  label,
  help,
  children,
}: {
  label: string;
  help?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-bold">{label}</span>
      {children}
      {help && <span className="mt-2 block text-xs leading-5 text-slate-500">{help}</span>}
    </label>
  );
}
