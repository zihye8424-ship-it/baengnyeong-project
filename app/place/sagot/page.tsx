import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";
import Link from "next/link";

export const metadata = {
  title: "백령도 사곶해변 여행 가이드 | 백령도의 모든 정보",
  description: "천연비행장으로 알려진 백령도 사곶해변의 특징, 산책·사진 포인트, 방문 팁과 주변 코스를 확인하세요.",
};

export default function SagotPage() {
  return (
    <PlaceTemplate
      title="사곶해변"
      subtitle="단단한 모래층과 넓은 해변 풍경으로 유명한 백령도의 대표 해안"
      image="/images/sagot.jpg"
      badges={["천연기념물", "천연비행장", "가족여행"]}
      quickFacts={[["추천 대상", "가족 · 연인 · 아이"], ["추천 시간", "오전 ~ 일몰 전"], ["관람 방법", "도보 산책"], ["준비물", "운동화 · 카메라 · 바람막이"]]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🏖️ 사곶해변은(는) 어떤 곳인가요?</h2>
        <p className="mt-5 leading-8 text-gray-700">사곶해변은 단단한 모래층과 넓게 펼쳐진 해변으로 잘 알려진 백령도의 대표 자연 명소입니다. 과거 항공기 이착륙과 관련된 '천연비행장' 이야기로도 널리 소개되어 왔습니다.</p>
        <p className="mt-5 leading-8 text-gray-700">넓은 해변과 서해 풍경이 어우러져 산책과 사진 촬영을 즐기기 좋으며, 백령도를 처음 방문한 여행객들이 많이 찾는 대표 코스 중 하나입니다.</p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 꼭 보고 느껴볼 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">넓은 해변 풍경</h3>
            <p className="mt-3 leading-7 text-gray-700">시야가 탁 트여 백령도의 바다와 하늘을 시원하게 감상할 수 있습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">단단한 모래층</h3>
            <p className="mt-3 leading-7 text-gray-700">사곶해변을 특별하게 만든 지형적 특징을 직접 걸으며 느껴볼 수 있습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">가족 산책</h3>
            <p className="mt-3 leading-7 text-gray-700">일정에 여유를 두고 해변을 천천히 걷기 좋습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">사진 포인트</h3>
            <p className="mt-3 leading-7 text-gray-700">사람을 작게 두고 넓은 해변과 하늘을 함께 담으면 규모감이 살아납니다.</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🧭 백령도 여행 팁</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
          <li>✅ 해변의 차량 통행 가능 여부와 출입 범위는 현장 안내를 반드시 우선해 주세요.</li>
          <li>✅ 바람이 강한 날에는 모래와 체감온도에 대비해 바람막이를 준비하면 좋습니다.</li>
          <li>✅ 해안은 조수와 기상에 따라 분위기와 안전 조건이 달라질 수 있습니다.</li>
          <li>✅ 사곶해변만 보기보다 주변 관광지를 묶어 반나절 코스로 계획하면 이동이 효율적입니다.</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🍀 계절별 방문 체크</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6"><h3 className="text-xl font-bold">🌸 봄</h3><p className="mt-3 leading-7 text-gray-700">선선한 날을 골라 산책과 주변 관광지를 함께 둘러보기 좋습니다.</p></div>
            <div className="rounded-2xl bg-sky-50 p-6"><h3 className="text-xl font-bold">☀️ 여름</h3><p className="mt-3 leading-7 text-gray-700">햇볕과 자외선에 대비하고 생수와 모자를 준비하면 좋습니다.</p></div>
            <div className="rounded-2xl bg-orange-50 p-6"><h3 className="text-xl font-bold">🍁 가을</h3><p className="mt-3 leading-7 text-gray-700">선선한 날씨와 부드러운 빛 덕분에 산책과 사진 여행에 잘 맞습니다.</p></div>
            <div className="rounded-2xl bg-slate-100 p-6"><h3 className="text-xl font-bold">❄️ 겨울</h3><p className="mt-3 leading-7 text-gray-700">강풍과 체감온도에 대비하고 여객선 운항과 현지 기상을 먼저 확인하세요.</p></div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
  <h2 className="text-3xl font-black">🗺️ 함께 가기 좋은 코스</h2>

  <p className="mt-3 leading-7 text-gray-600">
    사곶해변과 함께 백령도의 대표 관광지를 묶어 둘러보세요.
    각 장소를 눌러 자세한 여행 정보를 확인할 수 있습니다.
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <Link
      href="/place/kongdol"
      className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
    >
      <h3 className="text-lg font-extrabold">콩돌해안 →</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        둥근 자갈과 파도 소리가 특별한 백령도 대표 해안
      </p>
    </Link>

    <Link
      href="/place/simcheonggak"
      className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
    >
      <h3 className="text-lg font-extrabold">심청각 →</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        백령도의 설화와 서해 풍경을 함께 만나는 관광지
      </p>
    </Link>

    <Link
      href="/place/cheonan"
      className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
    >
      <h3 className="text-lg font-extrabold">천안함 46용사 위령탑 →</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        백령도의 안보 역사를 돌아볼 수 있는 추모 공간
      </p>
    </Link>
  </div>
</section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold">Q. 차량으로 해변에 들어갈 수 있나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">출입 가능 구간과 통제는 시기와 현장 상황에 따라 달라질 수 있으므로 현장 표지와 안내를 확인해 주세요.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 아이와 방문하기 좋은가요?</h3>
            <p className="mt-2 leading-7 text-gray-700">넓은 해변을 볼 수 있어 가족여행에 좋지만 바람·파도·차량 이동 구간에서는 보호자가 안전을 살펴주세요.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 관람 시간은 얼마나 잡으면 좋나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">사진 촬영과 산책을 포함해 약 40분~1시간 정도를 잡으면 여유롭습니다.</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <p className="leading-7 text-amber-950">
            <strong>방문 전 확인:</strong> 섬 지역은 기상, 도로, 시설 운영 상황이 달라질 수 있습니다.
            운영시간·출입 가능 여부·현장 안전 안내는 방문 당일 최신 정보를 우선해 주세요.
          </p>
        </section>
      </div>

      <PlaceReviews placeSlug="sagot" placeName="사곶해변" />
    </PlaceTemplate>
  );
}
