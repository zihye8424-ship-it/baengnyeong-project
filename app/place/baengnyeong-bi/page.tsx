import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "서해최북단 백령도비 | 백령도의 모든 정보",
  description: "대한민국 서해 최북단을 상징하는 백령도비의 관람 포인트, 사진 팁, 주변 코스와 방문 정보를 확인하세요.",
};

export default function BaengnyeongbiPage() {
  return (
    <PlaceTemplate
      title="서해최북단 백령도비"
      subtitle="대한민국 서해 최북단을 알리는 백령도의 대표 인증 명소"
      image="/images/baengnyeong-bi.jpg"
      badges={["인증샷 명소", "랜드마크", "대표 관광지"]}
      quickFacts={[["추천 대상", "모든 여행객"], ["추천 시간", "20~30분"], ["관람 방법", "도보"], ["준비물", "카메라 · 바람막이"]]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📍 서해최북단 백령도비은(는) 어떤 곳인가요?</h2>
        <p className="mt-5 leading-8 text-gray-700">서해최북단 백령도비는 대한민국 서해 최북단에 위치한 백령도를 상징하는 대표 기념비입니다. 많은 여행객들이 백령도 방문을 기념하며 사진을 남기는 인기 인증 명소입니다.</p>
        <p className="mt-5 leading-8 text-gray-700">주변에는 탁 트인 서해 풍경이 펼쳐져 있으며, 백령도의 아름다운 자연과 함께 특별한 추억을 남길 수 있는 장소입니다.</p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 꼭 보고 느껴볼 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">백령도 여행 인증샷</h3>
            <p className="mt-3 leading-7 text-gray-700">백령도를 방문했다는 기록을 남기기 좋은 대표 포토 포인트입니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">탁 트인 풍경</h3>
            <p className="mt-3 leading-7 text-gray-700">기념비 주변에서 섬과 서해의 분위기를 함께 느껴볼 수 있습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">짧게 들르기 좋은 코스</h3>
            <p className="mt-3 leading-7 text-gray-700">체류 시간이 길지 않아 다른 관광지와 묶어 일정에 넣기 좋습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">바람 대비</h3>
            <p className="mt-3 leading-7 text-gray-700">해안 지역 특성상 바람이 강할 수 있어 겉옷을 준비하면 좋습니다.</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🧭 백령도 여행 팁</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
          <li>✅ 날씨가 맑은 날에는 기념비와 하늘을 함께 담아 사진을 찍어보세요.</li>
          <li>✅ 단체·가족 여행이라면 모두가 함께 들어오는 인증사진을 남기기 좋습니다.</li>
          <li>✅ 백령도는 이동 거리가 있으므로 가까운 관광지와 묶어 동선을 잡는 것이 편합니다.</li>
          <li>✅ 시설·도로 상황은 현장에서 달라질 수 있으니 안전 안내를 우선해 주세요.</li>
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
          <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">심청각</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 설화와 문화 이야기를 함께 살펴보기 좋은 곳</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">천안함 46용사 위령탑</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 안보 역사를 돌아보는 추모 공간</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">사곶해변</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">넓은 해변 풍경을 만날 수 있는 대표 자연 명소</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold">Q. 얼마나 머물면 좋나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">사진 촬영과 주변 풍경 감상을 포함해 약 20~30분 정도를 일정에 잡으면 여유롭습니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 아이와 함께 가도 되나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">네. 다만 바람이 강하거나 이동 구간이 미끄러운 날에는 안전에 유의해 주세요.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 사진은 언제 찍기 좋나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">빛이 너무 강하지 않은 오전이나 늦은 오후가 사진을 남기기 편합니다.</p>
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

      <PlaceReviews placeSlug="baengnyeong-bi" placeName="서해최북단 백령도비" />
    </PlaceTemplate>
  );
}
