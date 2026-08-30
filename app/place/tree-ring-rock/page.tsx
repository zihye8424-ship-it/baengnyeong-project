import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "나이테바위 | 백령도의 모든 정보",
  description: "대청도 나이테바위의 볼거리와 방문 팁, 여행 포인트와 방문 리뷰를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="나이테바위"
      subtitle="농여해변과 함께 만나는 독특한 층리 무늬의 해안 바위"
      image="/images/nongyeo-beach.png"
      badges={["지질여행", "해안풍경", "사진명소"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 자연여행"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 방법", "현지 이동 여건을 확인한 뒤 여유 있게 관람"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">🏝️ 나이테바위은 어떤 곳인가요?</h2>
          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>농여해변과 함께 만나는 독특한 층리 무늬의 해안 바위입니다. 유명 관광지만 빠르게 지나가기보다 주변의 바다와 마을 풍경까지 함께 바라보면 섬의 분위기를 더 잘 느낄 수 있습니다.</p>
            <p>섬 지역은 날씨와 선박 운항, 현지 이동 여건에 따라 일정이 달라질 수 있습니다. 방문 당일의 상황을 확인하고 무리하지 않는 동선으로 둘러보세요.</p>
          </div>
        </section>
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">📸 여행 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6"><h3 className="text-xl font-extrabold">섬다운 풍경</h3><p className="mt-3 leading-7 text-gray-700">바다와 해안, 마을이 어우러지는 풍경을 천천히 감상해 보세요.</p></div>
            <div className="rounded-2xl bg-emerald-50 p-6"><h3 className="text-xl font-extrabold">여유 있는 일정</h3><p className="mt-3 leading-7 text-gray-700">배편과 이동시간을 고려해 다음 일정과 충분한 간격을 두는 것이 좋습니다.</p></div>
          </div>
        </section>
        <section className="rounded-3xl bg-amber-50 p-8">
          <h2 className="text-2xl font-black text-amber-950">💡 방문 전 확인</h2>
          <p className="mt-4 leading-7 text-amber-950">기상, 선박 운항, 도로·도보 접근 상태는 달라질 수 있습니다. 사유지와 주민 생활공간을 배려하고 위험한 해안이나 암반에는 무리하게 접근하지 마세요.</p>
        </section>
      </div>
      <PlaceReviews placeSlug="tree-ring-rock" placeName="나이테바위" />
    </PlaceTemplate>
  );
}
