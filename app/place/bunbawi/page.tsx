import Link from "next/link";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "소청도 분바위 여행 가이드 | 백령도의 모든 정보",
  description: "바다와 맞닿은 밝은 암벽이 인상적인 소청도의 대표 해안 절경. 상세정보, 여행 팁과 방문 후기를 확인하세요.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-extrabold">백령도의 모든 정보</Link>
          <Link href="/#place-section" className="rounded-full bg-gray-900 px-5 py-2 text-sm font-bold text-white">← 관광지로 돌아가기</Link>
        </div>
      </header>

      <section className="relative h-[62vh] min-h-[480px] overflow-hidden">
        <img src="/images/bunbawi.png" alt="소청도 분바위" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-12 text-white">
          <span className="rounded-full bg-sky-500 px-4 py-2 text-sm font-bold">소청도 관광지</span>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">분바위</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90">바다와 맞닿은 밝은 암벽이 인상적인 소청도의 대표 해안 절경</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6 py-14">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <p className="font-bold text-sky-600">소청도에서 만나는 풍경</p>
          <h2 className="mt-2 text-3xl font-black">🌊 분바위은 어떤 곳인가요?</h2>
          <p className="mt-6 text-[17px] leading-8 text-gray-700">바다와 맞닿은 밝은 암벽이 인상적인 소청도의 대표 해안 절경.</p>
          <p className="mt-4 leading-8 text-gray-700">
            이 페이지는 사용자가 제공한 현지 사진을 중심으로 여행자가 현장에서 볼 수 있는 풍경과 방문 포인트를 쉽게 확인하도록 구성했습니다.
          </p>
        </div>

        <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">백과사전식으로 알아보기</p>
          <h2 className="mt-2 text-3xl font-black">🌍 분바위의 자연과 풍경</h2>
          <p className="mt-6 leading-8 text-gray-700">
            소청도는 서해5도 가운데 하나로 바다와 산지, 암석 해안이 가까이 어우러지는 섬입니다.
            분바위에서는 소청도의 해안 경관과 자연환경을 직접 관찰할 수 있습니다.
            날씨와 계절, 시간대에 따라 바다와 암석의 색감과 분위기가 달라지는 것도 섬 여행의 매력입니다.
          </p>
          <p className="mt-5 rounded-2xl bg-white p-5 text-sm leading-7 text-gray-600">
            ※ 사진은 사용자가 제공한 현지 자료를 사용했습니다. 출입·운영·안전 정보는 방문 당일 현장 안내를 우선 확인해 주세요.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">📸 여기서 꼭 볼 것</h2>
            <ul className="mt-5 space-y-4 leading-7 text-gray-700"><li>• 바다에서 바라보는 밝은 암벽</li><li>• 푸른 바다와 암석이 만드는 대비</li><li>• 소청도를 대표하는 해안 경관</li></ul>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">🥾 방문 팁</h2>
            <ul className="mt-5 space-y-4 leading-7 text-gray-700"><li>• 해상·해안 접근은 기상과 파도 상황을 확인하세요.</li><li>• 바위 가장자리와 젖은 지면에서는 미끄럼에 주의하세요.</li><li>• 자연 암석을 훼손하거나 채취하지 마세요.</li></ul>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-7 space-y-6 text-gray-700">
            <div><h3 className="font-bold">Q. 방문 전에 무엇을 확인해야 하나요?</h3><p className="mt-2 leading-7">섬 지역은 기상 영향을 크게 받으므로 배편, 날씨와 현지 이동 여건을 확인하는 것이 좋습니다.</p></div>
            <div><h3 className="font-bold">Q. 사진 촬영이 가능한가요?</h3><p className="mt-2 leading-7">현장 출입 안내와 안전수칙을 지키면서 자연 풍경을 촬영해 주세요.</p></div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/place/socheong-lighthouse" className="rounded-3xl bg-white p-6 font-extrabold shadow-sm">← 소청등대</Link>
          <Link href="/place/stromatolite" className="rounded-3xl bg-gray-900 p-6 text-right font-extrabold text-white">스트로마톨라이트 →</Link>
        </div>
      </section>

      <PlaceReviews placeSlug="bunbawi" placeName="분바위" />
    </main>
  );
}
