import Link from "next/link";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 모래울해변 여행 가이드 | 백령도의 모든 정보",
  description: "산자락 사이로 길게 이어지는 모래사장과 잔잔한 바다가 어우러진 해변. 볼거리, 여행 팁, 백과사전식 정보와 방문 후기를 확인하세요.",
};

const quickFacts = [
  ["추천 대상", "해변 · 휴식 · 자연"],
  ["섬", "대청도"],
  ["즐길거리", "풍경 감상 · 사진촬영 · 산책"],
  ["준비", "편한 신발 · 바람막이 · 생수"],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-extrabold">백령도의 모든 정보</Link>
          <Link href="/#place-section" className="rounded-full bg-gray-900 px-5 py-2 text-sm font-bold text-white">← 관광지로 돌아가기</Link>
        </div>
      </header>

      <section className="relative h-[62vh] min-h-[480px] w-full overflow-hidden">
        <img src="/images/moraeul-beach.png" alt="대청도 모래울해변" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-12 text-white">
          <div className="mb-4 flex flex-wrap gap-2 text-sm font-bold">
            <span className="rounded-full bg-sky-500 px-4 py-2">대청도 관광지</span>
            <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur">해변 · 휴식 · 자연</span>
          </div>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">모래울해변</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">산자락 사이로 길게 이어지는 모래사장과 잔잔한 바다가 어우러진 해변</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-4 md:grid-cols-4">
          {quickFacts.map(([title,value]) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-sky-600">{title}</p>
              <p className="mt-2 font-extrabold leading-7">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6 pb-16">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <p className="font-bold text-sky-600">대청도에서 만나는 풍경</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">🌊 모래울해변은 어떤 곳인가요?</h2>
          <p className="mt-6 text-[17px] leading-8 text-gray-700">산자락 사이로 길게 이어지는 모래사장과 잔잔한 바다가 어우러진 해변.</p>
          <p className="mt-4 leading-8 text-gray-700">
            이 페이지는 사용자가 직접 제공한 현지 사진을 중심으로 여행자가 현장에서 무엇을 볼 수 있는지 쉽게 이해하도록 정리했습니다.
          </p>
        </div>

        <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">백과사전식으로 알아보기</p>
          <h2 className="mt-2 text-3xl font-black">🌍 모래울해변의 자연과 지형</h2>
          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              대청도는 서해의 섬으로 산지와 해안, 모래사장, 암석 해안 등 다양한 자연경관을 가까운 거리에서 만날 수 있습니다.
              모래울해변 역시 대청도의 자연환경을 직접 보고 느낄 수 있는 여행지입니다.
            </p>
            <p>
              현장에서는 바다의 색과 파도, 바람, 주변 산지와 해안선이 만드는 풍경을 함께 살펴보세요.
              같은 장소도 날씨와 계절, 시간대에 따라 분위기가 크게 달라질 수 있습니다.
            </p>
            <p className="rounded-2xl bg-white p-5 text-sm text-gray-600">
              ※ 사진은 사용자가 제공한 현지 자료를 사용했습니다. 운영·출입·안전 정보는 방문 당일 현장 안내를 우선 확인해 주세요.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">📸 여기서 꼭 볼 것</h2>
            <ul className="mt-5 space-y-4 leading-7 text-gray-700">
              <li>• 산과 바다가 맞닿는 풍경</li><li>• 길게 이어지는 모래사장</li><li>• 조용한 해변 산책</li>
            </ul>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">🥾 방문 팁</h2>
            <ul className="mt-5 space-y-4 leading-7 text-gray-700">
              <li>• 기상과 파도 상황을 확인하세요.</li><li>• 해변에서는 쓰레기를 남기지 말아주세요.</li><li>• 여름에는 햇빛 차단용품과 생수를 준비하세요.</li>
            </ul>
          </div>
        </div>

        

        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6 text-gray-700">
            <div><h3 className="text-lg font-bold">Q. 모래울해변은 사진 찍기 좋은가요?</h3><p className="mt-2 leading-7">네. 대청도의 자연 풍경을 배경으로 여행 사진을 남기기 좋습니다. 날씨와 시간대에 따라 풍경이 달라집니다.</p></div>
            <div><h3 className="text-lg font-bold">Q. 방문 전에 무엇을 확인해야 하나요?</h3><p className="mt-2 leading-7">섬 지역은 기상 영향을 크게 받으므로 배편, 날씨와 현장 이동 여건을 확인하는 것이 좋습니다.</p></div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/place/maebawi-observatory" className="rounded-3xl bg-white p-6 font-extrabold shadow-sm hover:shadow-md">← 매바위전망대</Link>
          <Link href="/place/jiduri-beach" className="rounded-3xl bg-gray-900 p-6 text-right font-extrabold text-white shadow-sm hover:shadow-md">지두리해변 →</Link>
        </div>
      </section>

      <PlaceReviews placeSlug="moraeul-beach" placeName="모래울해변" />
    </main>
  );
}
