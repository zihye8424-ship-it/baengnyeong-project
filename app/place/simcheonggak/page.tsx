import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 심청각 여행 가이드 | 백령도의 모든 정보",
  description: "효녀 심청 설화와 연결해 소개되는 백령도 심청각의 전시, 전망, 가족여행 팁과 주변 코스를 확인하세요.",
};

export default function SimcheonggakPage() {
  return (
    <PlaceTemplate
      title="심청각"
      subtitle="효녀 심청 설화와 백령도의 바다가 함께하는 역사·문화 관광지"
      image="/images/simcheonggak.jpg"
      badges={["심청전", "역사문화", "가족여행"]}
      quickFacts={[["추천 대상", "가족 · 역사여행"], ["추천 시간", "30~60분"], ["관람 방법", "전시 · 전망 관람"], ["준비물", "카메라 · 바람막이"]]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🌸 심청각은(는) 어떤 곳인가요?</h2>
        <p className="mt-5 leading-8 text-gray-700">심청각은 우리나라 대표 고전소설인 심청전의 이야기를 백령도 여행과 함께 접할 수 있도록 조성된 문화관광지입니다. 효녀 심청의 이야기를 전시와 조형물 등을 통해 만나볼 수 있습니다.</p>
        <p className="mt-5 leading-8 text-gray-700">건물 안팎을 둘러보며 심청 설화와 지역의 문화 이야기를 접하고, 주변에서는 백령도의 바다 풍경도 함께 감상할 수 있습니다.</p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 꼭 보고 느껴볼 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">심청 이야기</h3>
            <p className="mt-3 leading-7 text-gray-700">익숙한 고전소설의 내용을 여행지에서 다시 접해보는 재미가 있습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">전시 관람</h3>
            <p className="mt-3 leading-7 text-gray-700">가족과 함께 전시 설명을 읽으며 문화여행을 즐기기 좋습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">전망과 풍경</h3>
            <p className="mt-3 leading-7 text-gray-700">날씨가 좋은 날에는 주변의 바다와 섬 풍경도 함께 감상해보세요.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">아이와 이야기하기</h3>
            <p className="mt-3 leading-7 text-gray-700">효와 가족에 관한 이야기를 자연스럽게 나눌 수 있는 교육여행 코스입니다.</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🧭 백령도 여행 팁</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
          <li>✅ 실내 전시와 야외 풍경을 함께 보려면 30분보다 조금 넉넉하게 시간을 잡는 것이 좋습니다.</li>
          <li>✅ 바다를 바라보는 장소는 바람이 강할 수 있으니 겉옷을 챙겨주세요.</li>
          <li>✅ 전시 운영시간이나 휴관 여부는 방문 당일 최신 안내를 확인하는 것을 권합니다.</li>
          <li>✅ 아이와 방문한다면 심청전 이야기를 미리 간단히 들려주면 관람이 더 재미있습니다.</li>
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
            <h3 className="text-lg font-extrabold">사곶해변</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">넓은 해변과 독특한 지형을 볼 수 있는 대표 명소</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">서해최북단 백령도비</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도 방문 인증사진을 남기기 좋은 곳</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">천안함 46용사 위령탑</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 안보 역사를 돌아볼 수 있는 추모 공간</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold">Q. 아이와 함께 가기 좋은가요?</h3>
            <p className="mt-2 leading-7 text-gray-700">네. 심청전 이야기를 알고 가면 전시를 이해하기 쉽고 가족 대화 소재도 많습니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 비 오는 날에도 볼 수 있나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">실내 관람이 가능한 부분이 있어 날씨가 좋지 않은 날 일정에도 활용할 수 있습니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 운영시간은 항상 같은가요?</h3>
            <p className="mt-2 leading-7 text-gray-700">시설 운영시간과 휴관일은 변경될 수 있으므로 방문 전 최신 안내를 확인해 주세요.</p>
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

      <PlaceReviews placeSlug="simcheonggak" placeName="심청각" />
    </PlaceTemplate>
  );
}
