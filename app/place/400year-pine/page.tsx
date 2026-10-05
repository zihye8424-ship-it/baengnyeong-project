import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";
import Link from "next/link";

export const metadata = {
  title: "400년 노송 여행 가이드 | 백령도의 모든 정보",
  description: "오랜 세월 자리를 지켜온 노송과 주변 풍경을 차분히 살펴보는 장소. 방문 포인트와 여행 팁, 주변 연계 코스를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="400년 노송"
      subtitle="오랜 세월 백령도의 바람을 견뎌온 노송을 만나는 곳"
      image="/images/400year-pine.png"
      badges={['자연', '노송', '사진여행']}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 자연여행"],
        ["추천 시간", "낮 시간대"],
        ["관람 방법", "도보 관람"],
        ["준비물", "운동화 · 카메라 · 바람막이"],
      ]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📍 400년 노송은 어떤 곳인가요?</h2>
          <p className="mt-5 leading-8 text-gray-700">오랜 세월 자리를 지켜온 노송과 주변 풍경을 차분히 살펴보는 장소입니다. 백령도의 대표 관광지만 빠르게 이동하기보다 이런 장소를 함께 둘러보면 섬의 자연과 마을 풍경을 조금 더 다양하게 만날 수 있습니다.</p>
          <p className="mt-5 leading-8 text-gray-700">현장에서는 한 지점만 보고 이동하기보다 주변 풍경과 안내 표지를 함께 살펴보세요. 계절과 날씨에 따라 보이는 분위기가 달라질 수 있어 여유 있게 둘러보는 편이 좋습니다.</p>
        </section>

        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-8">
          <h2 className="text-3xl font-black text-sky-950">💡 방문할 때 체크할 점</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-xl font-extrabold">천천히 둘러보기</h3><p className="mt-3 leading-7 text-gray-700">사진만 찍고 바로 이동하기보다 주변 풍경과 장소의 특징을 함께 살펴보면 좋습니다.</p></div>
            <div className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-xl font-extrabold">현장 안내 우선</h3><p className="mt-3 leading-7 text-gray-700">출입 범위나 관람 여건이 달라질 수 있으므로 현장 표지와 안내가 있다면 그 내용을 우선해 주세요.</p></div>
            <div className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-xl font-extrabold">바람과 날씨 확인</h3><p className="mt-3 leading-7 text-gray-700">백령도는 바람에 따라 체감온도가 크게 달라질 수 있어 가벼운 바람막이를 준비하면 편합니다.</p></div>
            <div className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="text-xl font-extrabold">주변 관광지와 연계</h3><p className="mt-3 leading-7 text-gray-700">한 곳만 따로 보기보다 이동 방향이 비슷한 관광지와 묶어 둘러보면 여행 동선을 효율적으로 구성할 수 있습니다.</p></div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 관람 포인트</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>✅ 장소 자체뿐 아니라 주변 백령도 풍경도 함께 살펴보세요.</li>
            <li>✅ 안전을 위해 지정된 관람 범위와 현장 안내를 지켜주세요.</li>
            <li>✅ 비나 강풍 등 기상 악화 시에는 무리한 접근을 피해주세요.</li>
            <li>✅ 사진 촬영 시 자연물과 시설물을 훼손하지 않도록 주의해 주세요.</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🗺️ 함께 둘러보기 좋은 곳</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/place/simcheonggak" className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"><h3 className="text-lg font-extrabold">심청각 →</h3><p className="mt-2 text-sm leading-6 text-gray-600">심청 이야기와 서해 풍경을 함께 만나는 관광지</p></Link>
            <Link href="/place/sagot" className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"><h3 className="text-lg font-extrabold">사곶해변 →</h3><p className="mt-2 text-sm leading-6 text-gray-600">넓은 해변과 단단한 모래층으로 유명한 대표 명소</p></Link>
            <Link href="/place/kongdol" className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"><h3 className="text-lg font-extrabold">콩돌해안 →</h3><p className="mt-2 text-sm leading-6 text-gray-600">둥근 자갈과 파도 소리가 인상적인 해안</p></Link>
          </div>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6"><p className="leading-7 text-amber-950"><strong>방문 전 확인:</strong> 섬 지역은 기상과 현장 여건에 따라 출입·관람 조건이 달라질 수 있습니다. 방문 당일 현장 안내를 우선해 주세요.</p></section>
      </div>
      <PlaceReviews placeSlug="400year-pine" placeName="400년 노송" />
    </PlaceTemplate>
  );
}
