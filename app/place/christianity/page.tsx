import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "한국기독교의 섬 백령도 여행 가이드 | 백령도의 모든 정보",
  description:
    "백령도에 이어져 온 기독교 역사와 중화동교회, 섬 곳곳의 교회와 신앙문화를 소개합니다.",
};

export default function ChristianityPage() {
  return (
    <PlaceTemplate
      title="한국기독교의 섬"
      subtitle="섬 곳곳에 이어져 온 교회와 신앙의 흔적을 따라 만나는 백령도의 특별한 역사문화 이야기"
      image="/images/christian-island.jpg"
      badges={["기독교 역사", "중화동교회", "역사문화 여행"]}
      quickFacts={[
        ["추천 대상", "가족 · 역사문화 여행 · 교회 단체"],
        ["추천 시간", "1~2시간 이상"],
        ["관람 방법", "교회와 관련 명소 함께 둘러보기"],
        ["준비물", "편한 신발 · 카메라"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">
          ✝️ 백령도, 한국기독교의 섬
        </h2>

        <div className="mt-6 space-y-5 leading-8 text-gray-700">
          <p>
            백령도 여행에서는 아름다운 자연경관뿐 아니라 섬 곳곳에 남아 있는
            기독교의 흔적도 만나볼 수 있습니다. 오래된 교회와 마을의 이야기를
            따라가다 보면 백령도 주민들의 생활과 함께 이어져 온 신앙문화를
            자연스럽게 살펴볼 수 있습니다.
          </p>

          <p>
            이 페이지는 특정 건물 하나를 소개하는
            <strong> 한국기독교역사관 안내 페이지와는 다릅니다.</strong>
            중화동교회를 비롯해 백령도에 이어져 온 교회와 기독교 문화 전체를
            하나의 역사문화 여행 주제로 소개합니다.
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">
          ⛪ 백령도에서 만나는 교회와 신앙문화
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            [
              "중화동교회",
              "백령도의 기독교 역사를 이야기할 때 빼놓기 어려운 장소로, 마을과 함께 이어져 온 교회 문화를 살펴보기 좋습니다.",
            ],
            [
              "섬 곳곳의 교회",
              "백령도의 여러 마을에서 교회를 만날 수 있어 섬 주민들의 생활 속에 이어져 온 신앙문화를 느껴볼 수 있습니다.",
            ],
            [
              "마을과 함께한 역사",
              "교회는 예배 공간을 넘어 오랜 시간 마을 공동체와 함께해 온 장소라는 점에서 백령도의 생활사를 이해하는 데 의미가 있습니다.",
            ],
            [
              "기독교 역사문화 여행",
              "자연 명소 중심의 여행 일정에 교회와 역사문화 장소를 더하면 백령도를 조금 다른 시선으로 둘러볼 수 있습니다.",
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
        <h2 className="text-3xl font-black">
          📖 중화동교회와 함께 보는 백령도 이야기
        </h2>

        <div className="mt-6 space-y-5 leading-8 text-gray-700">
          <p>
            중화동교회는 백령도의 기독교 역사와 지역 문화를 살펴볼 때
            함께 둘러보기 좋은 대표적인 장소입니다. 교회 자체만 빠르게
            보고 이동하기보다 주변 마을 풍경과 함께 천천히 둘러보면
            백령도의 생활문화를 이해하는 데 도움이 됩니다.
          </p>

          <p>
            종교시설은 현재도 주민들이 이용하는 공간일 수 있으므로
            예배나 행사가 진행되는 시간에는 조용히 관람하고,
            내부 출입과 사진 촬영은 현장 안내를 먼저 확인하는 것이 좋습니다.
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">
          🧭 주민 여행 팁
        </h2>

        <div className="mt-6 space-y-4 leading-8 text-gray-700">
          <p>
            ✅ 중화동교회만 보고 이동하기보다 주변 마을까지 함께 둘러보면
            백령도의 옛 생활 분위기를 느끼기 좋습니다.
          </p>
          <p>
            ✅ 교회는 관광지만이 아니라 실제 종교시설이므로 예배와 행사가
            진행 중일 때는 방문 예절을 지켜 주세요.
          </p>
          <p>
            ✅ 교회 내부를 촬영하고 싶다면 먼저 촬영 가능 여부를 확인하는
            것이 좋습니다.
          </p>
          <p>
            ✅ 백령도의 자연 명소와 역사문화 장소를 함께 구성하면
            여행 일정이 훨씬 다양해집니다.
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">
          🗺️ 함께 둘러보기 좋은 역사문화 코스
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            [
              "중화동교회",
              "백령도의 교회 역사와 마을 신앙문화를 함께 살펴보기 좋은 장소",
            ],
            [
              "한국기독교역사관",
              "백령도의 기독교 관련 역사 자료를 전시를 통해 살펴볼 수 있는 별도의 공간",
            ],
            [
              "심청각",
              "심청 설화와 백령도의 지역 문화를 함께 접할 수 있는 관광지",
            ],
          ].map(([name, description]) => (
            <div
              key={name}
              className="rounded-2xl border border-gray-200 p-5 transition hover:shadow-lg"
            >
              <h3 className="text-lg font-extrabold">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">
          🍀 계절별 방문 체크
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            [
              "🌸 봄",
              "선선한 날씨에 마을과 교회 주변을 천천히 둘러보기 좋습니다.",
            ],
            [
              "☀️ 여름",
              "한낮에는 더울 수 있으므로 실내외 일정을 적절히 나누고 생수를 준비하세요.",
            ],
            [
              "🍁 가을",
              "맑고 선선한 날씨에 역사문화 장소와 마을 풍경을 함께 둘러보기 좋습니다.",
            ],
            [
              "❄️ 겨울",
              "강풍과 추위에 대비하고 이동 전 교통과 시설 운영 상황을 확인하세요.",
            ],
          ].map(([season, description]) => (
            <div key={season} className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-xl font-bold">{season}</h3>
              <p className="mt-3 leading-7 text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">
          ❓ 한국기독교의 섬 FAQ
        </h2>

        <div className="mt-6 space-y-6 text-gray-700">
          <div>
            <h3 className="text-lg font-bold">
              Q. 한국기독교의 섬과 한국기독교역사관은 같은 곳인가요?
            </h3>
            <p className="mt-2 leading-7">
              아니요. 이 페이지는 백령도의 교회와 기독교 신앙문화 전반을
              소개하는 테마 페이지이고, 한국기독교역사관은 관련 역사를
              살펴볼 수 있는 개별 전시시설입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">
              Q. 어디를 먼저 둘러보면 좋나요?
            </h3>
            <p className="mt-2 leading-7">
              중화동교회 등 기독교 관련 장소를 여행 동선에 맞춰 함께
              둘러보는 방식이 좋습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">
              Q. 종교가 달라도 방문할 수 있나요?
            </h3>
            <p className="mt-2 leading-7">
              역사와 지역문화를 살펴보는 여행지로 둘러볼 수 있습니다.
              다만 실제 종교시설을 방문할 때는 현장 안내와 예절을 지켜 주세요.
            </p>
          </div>
        </div>
      </div>

      <PlaceReviews
        placeSlug="christianity"
        placeName="한국기독교의 섬"
      />
    </PlaceTemplate>
  );
}
