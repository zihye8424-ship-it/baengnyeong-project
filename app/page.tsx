import Link from "next/link";

export const metadata = {
  title: "이용약관 | 백령도의 모든 정보",
  description: "백령도의 모든 정보 서비스 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-sky-700 shadow-sm"
        >
          ← 홈으로 돌아가기
        </Link>

        <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-10">
          <p className="font-bold text-sky-700">백령도의 모든 정보</p>
          <h1 className="mt-2 text-3xl font-black md:text-4xl">이용약관</h1>
          <p className="mt-4 leading-7 text-gray-600">
            본 약관은 ‘백령도의 모든 정보’ 웹사이트에서 제공하는 여행정보 및
            관련 서비스 이용에 필요한 기본 사항을 안내합니다.
          </p>

          <div className="mt-10 space-y-9 leading-7 text-gray-700">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">제1조 목적</h2>
              <p className="mt-3">
                본 약관은 사이트가 제공하는 백령도 관광, 교통, 숙박, 음식점,
                여행 팁 등의 정보 서비스 이용과 관련한 기본적인 사항을 정하는
                것을 목적으로 합니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-gray-900">제2조 제공 정보</h2>
              <p className="mt-3">
                사이트의 여행정보는 운영자의 경험, 공개된 자료 및 확인 가능한
                정보를 바탕으로 제공됩니다. 운영시간, 요금, 교통편, 업체 정보
                등은 현지 사정에 따라 변경될 수 있으므로 실제 방문이나 예약
                전 해당 기관 또는 업체에 다시 확인하는 것을 권장합니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-gray-900">제3조 이용자의 책임</h2>
              <p className="mt-3">
                이용자는 게시판 및 Q&amp;A 등을 이용할 때 타인의 개인정보,
                불법적인 내용, 광고성·도배성 내용 또는 타인의 권리를 침해하는
                내용을 작성해서는 안 됩니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-gray-900">제4조 게시물 관리</h2>
              <p className="mt-3">
                사이트 운영에 방해가 되거나 법령 및 이용 목적에 맞지 않는
                게시물은 사전 통지 없이 숨김 또는 삭제될 수 있습니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-gray-900">제5조 외부 서비스</h2>
              <p className="mt-3">
                사이트에서 외부 지도, 예약 사이트, 기관 홈페이지 등으로
                연결되는 경우 해당 외부 서비스의 이용 조건과 정보는 각
                서비스 제공자의 정책을 따릅니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-gray-900">제6조 서비스 변경</h2>
              <p className="mt-3">
                사이트는 더 정확하고 편리한 정보 제공을 위해 콘텐츠와 기능을
                수정·추가하거나 일부 서비스를 변경할 수 있습니다.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-gray-900">제7조 문의</h2>
              <p className="mt-3">
                사이트 이용과 관련한 문의는 사이트의 문의 페이지를 통해
                접수할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-100 pt-6 text-sm text-gray-500">
            시행일: 2026년 8월 22일
          </div>
        </section>
      </div>
    </main>
  );
}
