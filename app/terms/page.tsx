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

        <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-10">
          <p className="text-sm font-bold text-sky-600">백령도의 모든 정보</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">이용약관</h1>
          <p className="mt-4 leading-7 text-gray-600">
            본 약관은 &quot;백령도의 모든 정보&quot; 웹사이트 이용과 관련하여
            필요한 기본 사항을 안내합니다.
          </p>

          <div className="mt-10 space-y-9 leading-7 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900">제1조 목적</h2>
              <p className="mt-3">
                본 약관은 백령도의 모든 정보가 제공하는 여행·관광·지역 정보 및
                관련 서비스의 이용 조건과 기본적인 사항을 정하는 것을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">제2조 제공 정보</h2>
              <p className="mt-3">
                사이트는 백령도 관광지, 교통, 숙소, 음식점, 여행 팁, 지역 소식 등
                여행에 도움이 되는 정보를 제공합니다. 현지 사정, 기상, 운영 상황 등에
                따라 실제 정보가 달라질 수 있으므로 중요한 일정은 해당 기관이나
                업체에 다시 확인하시기 바랍니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">제3조 이용자의 책임</h2>
              <p className="mt-3">
                이용자는 사이트의 정보를 참고 자료로 활용하며, 여행·예약·구매 등
                최종 결정에 대한 책임은 이용자에게 있습니다. 다른 이용자에게 피해를
                주거나 사이트 운영을 방해하는 행위를 해서는 안 됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">제4조 게시물 및 Q&amp;A</h2>
              <p className="mt-3">
                이용자가 작성한 질문이나 게시물 중 욕설, 광고, 개인정보 노출,
                타인의 권리를 침해하는 내용 또는 사이트 운영 목적과 관계없는 내용은
                별도의 안내 없이 삭제될 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">제5조 외부 사이트 및 업체 정보</h2>
              <p className="mt-3">
                사이트에 포함된 외부 링크와 업체 정보는 이용 편의를 위한 것입니다.
                외부 사이트의 서비스, 예약, 결제, 상품 및 정책은 해당 운영 주체의
                책임과 기준에 따릅니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">제6조 저작권</h2>
              <p className="mt-3">
                사이트에서 직접 제작한 글, 구성 및 콘텐츠의 권리는 관련 법령에 따라
                보호됩니다. 별도의 허락 없이 영리 목적으로 무단 복제·배포하는 행위를
                금합니다. 출처가 별도로 표시된 자료의 권리는 해당 권리자에게 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">제7조 서비스 변경 및 중단</h2>
              <p className="mt-3">
                사이트 운영상 필요한 경우 콘텐츠나 기능이 변경될 수 있으며,
                시스템 점검이나 기타 사유로 서비스가 일시적으로 중단될 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900">제8조 약관 변경</h2>
              <p className="mt-3">
                본 약관은 서비스 운영 및 관련 법령의 변경에 따라 수정될 수 있으며,
                변경된 내용은 사이트를 통해 안내할 수 있습니다.
              </p>
            </section>
          </div>

          <p className="mt-12 border-t pt-6 text-sm text-gray-500">
            시행일: 2026년 8월 22일
          </p>
        </div>
      </div>
    </main>
  );
}
