import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "한국기독교의 섬 백령도 | 백령도의 모든 정보",
  description:
    "백령도에 이어져 온 기독교 역사와 교회 문화, 중화동교회 등 관련 여행 정보를 소개합니다.",
};

export default function ChristianityPage() {
  return (
    <PlaceTemplate
      title="한국기독교의 섬"
      subtitle="섬 곳곳에 이어져 온 교회와 신앙의 흔적을 따라 백령도의 또 다른 역사를 만나는 여행"
      image="/images/christian-island.jpg"
      badges={["기독교 역사", "역사문화", "테마여행"]}
      quickFacts={[
        ["추천 대상", "가족 · 역사문화 여행 · 교회 단체"],
        ["추천 시간", "1~2시간 이상"],
        ["관람 방법", "관련 명소 함께 둘러보기"],
        ["준비물", "카메라 · 편한 신발"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">✝️ 왜 ‘한국기독교의 섬’인가요?</h2>
        <div className="mt-6 space-y-5 leading-8 text-gray-700">
          <p>
            백령도에는 오랜 시간 이어져 온 교회와 신앙 문화의 흔적이 남아 있습니다.
            자연경관만 둘러보는 여행과는 또 다른 시선으로 백령도의 역사와
            주민들의 생활문화를 살펴볼 수 있습니다.
          </p>
          <p>
            한국기독교역사관 한 곳만을 소개하는 페이지가 아니라,
            중화동교회와 역사관 등 백령도에 남아 있는 기독교 관련 장소를
            함께 살펴보는 테마 여행으로 이해하면 좋습니다.
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">📖 함께 살펴볼 기독교 역사 공간</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            [
              "중화동교회",
              "백령도의 기독교 역사와 지역 신앙 문화를 살펴볼 때 함께 둘러보기 좋은 장소입니다.",
            ],
            [
              "한국기독교역사관",
              "백령도의 기독교 역사와 관련 자료를 전시를 통해 살펴볼 수 있는 역사문화 공간입니다.",
            ],
            [
              "마을 속 교회 문화",
              "백령도 곳곳의 교회와 마을 풍경을 통해 섬 주민들의 생활 속에 이어져 온 문화를 느껴볼 수 있습니다.",
            ],
            [
              "역사문화 여행",
              "자연 관광지와 함께 역사·문화 장소를 일정에 넣으면 백령도를 더 입체적으로 이해할 수 있습니다.",
            ],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">{title}</h3>
              <p className="mt-3 leading-7 text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">🧭 여행할 때 알아두면 좋은 점</h2>
        <div className="mt-6 space-y-4 leading-8 text-gray-700">
          <p>✅ 예배나 종교 행사가 진행 중인 교회에서는 방문객도 조용히 관람해 주세요.</p>
          <p>✅ 교회 내부 촬영 가능 여부와 출입 가능 공간은 현장 안내를 먼저 확인하는 것이 좋습니다.</p>
          <p>✅ 한국기독교역사관과 중화동교회를 함께 둘러보면 백령도의 기독교 역사를 이해하는 데 도움이 됩니다.</p>
          <p>✅ 시설 운영시간과 휴관 여부는 방문 당일 최신 안내를 확인해 주세요.</p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">🗺️ 함께 가기 좋은 역사문화 코스</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["중화동교회", "백령도의 기독교 역사와 함께 살펴보기 좋은 장소"],
            ["한국기독교역사관", "관련 역사와 자료를 전시로 만나볼 수 있는 공간"],
            ["심청각", "백령도의 설화와 지역 문화를 함께 접할 수 있는 관광지"],
          ].map(([name, description]) => (
            <div key={name} className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">🍀 계절별 방문 체크</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["🌸 봄", "선선한 날씨에 역사문화 명소와 주변 마을을 함께 둘러보기 좋습니다."],
            ["☀️ 여름", "실내 전시 공간을 야외 관광과 적절히 섞어 일정을 구성하면 좋습니다."],
            ["🍁 가을", "선선한 날씨에 마을과 역사문화 장소를 천천히 둘러보기 좋은 계절입니다."],
            ["❄️ 겨울", "강풍과 추위에 대비하고 시설 운영 여부와 교통 상황을 미리 확인하세요."],
          ].map(([season, description]) => (
            <div key={season} className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-xl font-bold">{season}</h3>
              <p className="mt-3 leading-7 text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
        <div className="mt-8 space-y-6 text-gray-700">
          <div>
            <h3 className="text-lg font-bold">
              Q. 한국기독교역사관과 ‘한국기독교의 섬’은 같은 곳인가요?
            </h3>
            <p className="mt-2 leading-7">
              이 페이지에서는 한국기독교역사관 한 곳만이 아니라 백령도의 교회와
              기독교 관련 역사문화 장소를 함께 소개합니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 아이와 함께 둘러봐도 좋은가요?</h3>
            <p className="mt-2 leading-7">
              네. 백령도의 자연관광과 함께 지역의 역사와 문화를 살펴보는
              교육 여행 코스로 구성하기 좋습니다.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 방문 전에 무엇을 확인해야 하나요?</h3>
            <p className="mt-2 leading-7">
              교회와 전시시설의 출입 가능 여부, 운영시간, 촬영 안내 등은
              방문 당일 현장 또는 최신 안내를 확인하는 것이 좋습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
        <p className="leading-7 text-amber-950">
          <strong>방문 전 확인:</strong> 종교시설은 예배와 행사가 우선되는 공간입니다.
          방문 시 현장 안내와 예절을 지켜 주세요.
        </p>
      </div>

      <PlaceReviews
        placeSlug="christianity"
        placeName="한국기독교의 섬"
      />
    </PlaceTemplate>
  );
}
