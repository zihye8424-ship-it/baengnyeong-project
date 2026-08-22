import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "한국기독교역사관 | 백령도의 모든 정보",
  description: "백령도 한국기독교역사관의 전시 관람 포인트, 가족여행 팁과 주변 역사문화 코스를 확인하세요.",
};

export default function ChristianPage() {
  return (
    <PlaceTemplate
      title="한국기독교역사관"
      subtitle="한국 기독교의 역사와 백령도의 신앙 문화를 살펴볼 수 있는 역사 문화 공간"
      image="/images/christian-island.jpg"
      badges={["역사문화", "실내관람", "교육여행"]}
      quickFacts={[["추천 대상", "가족 · 학생 · 역사여행"], ["추천 시간", "40~60분"], ["관람 방법", "실내 관람"], ["준비물", "카메라 · 메모"]]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">✝️ 한국기독교역사관은(는) 어떤 곳인가요?</h2>
        <p className="mt-5 leading-8 text-gray-700">한국기독교역사관은 백령도가 한국 기독교 역사에서 차지하는 의미를 소개하는 전시 공간입니다. 초기 선교 역사와 지역 교회의 발전, 관련 자료를 살펴볼 수 있습니다.</p>
        <p className="mt-5 leading-8 text-gray-700">다양한 전시를 통해 역사와 문화를 함께 배울 수 있어 학생, 가족 단위 여행객에게도 추천되는 장소입니다.</p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 꼭 보고 느껴볼 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">백령도의 기독교 역사</h3>
            <p className="mt-3 leading-7 text-gray-700">섬 지역에 신앙 문화가 자리 잡아 온 과정을 살펴볼 수 있습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">실내 전시</h3>
            <p className="mt-3 leading-7 text-gray-700">날씨가 좋지 않은 날에도 일정에 넣기 좋은 실내형 역사문화 공간입니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">가족 교육여행</h3>
            <p className="mt-3 leading-7 text-gray-700">아이와 함께 지역의 역사와 문화를 이야기하며 둘러보기 좋습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">자료 천천히 보기</h3>
            <p className="mt-3 leading-7 text-gray-700">전시 설명을 읽으며 관람하면 백령도에 대한 이해가 더 깊어집니다.</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🧭 백령도 여행 팁</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
          <li>✅ 전시 관람은 빠르게 지나가기보다 설명문을 읽으며 천천히 보는 것을 추천합니다.</li>
          <li>✅ 실내 전시 공간의 촬영 가능 여부는 현장 안내를 확인해 주세요.</li>
          <li>✅ 비나 강풍으로 야외 관광이 어려운 날의 대체 코스로도 활용하기 좋습니다.</li>
          <li>✅ 주변 역사문화 명소와 함께 묶으면 여행 주제가 더 선명해집니다.</li>
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
            <h3 className="text-lg font-extrabold">중화동교회</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 기독교 역사와 함께 살펴보기 좋은 장소</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">심청각</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 설화와 문화를 접할 수 있는 곳</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">서해최북단 백령도비</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도 여행 인증 코스로 함께 들르기 좋은 명소</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold">Q. 비 오는 날에도 갈 수 있나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">실내 관람 중심이라 야외 관광이 어려운 날 일정에 넣기 좋습니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 아이와 함께 보기 좋은가요?</h3>
            <p className="mt-2 leading-7 text-gray-700">네. 역사와 지역문화를 함께 접할 수 있어 가족·학생 여행에 잘 맞습니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 관람 전 확인할 것이 있나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">운영시간이나 휴관 여부는 방문 당일 최신 안내를 확인하는 것을 권합니다.</p>
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

      <PlaceReviews placeSlug="christian" placeName="한국기독교역사관" />
    </PlaceTemplate>
  );
}
