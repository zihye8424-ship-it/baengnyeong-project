import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "한국기독교역사관 여행 가이드 | 백령도의 모든 정보",
  description:
    "백령도의 기독교 역사와 신앙문화를 살펴볼 수 있는 한국기독교역사관의 관람 정보와 주변 여행 코스를 확인하세요.",
};

export default function ChristianHistoryMuseumPage() {
  return (
    <PlaceTemplate
      title="한국기독교역사관"
      subtitle="한국 기독교의 역사와 백령도의 신앙문화를 살펴볼 수 있는 역사문화 공간"
      image="/images/christian-history-museum.png"
      badges={["역사문화", "실내 관람", "교육여행"]}
      quickFacts={[
        ["추천 대상", "가족 · 학생 · 역사여행"],
        ["추천 시간", "40~60분"],
        ["관람 방법", "실내 전시 관람"],
        ["방문 전 확인", "운영시간 · 휴관 여부"],
      ]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">✝️ 한국기독교역사관은 어떤 곳인가요?</h2>
          <p className="mt-5 leading-8 text-gray-700">
            한국기독교역사관은 백령도가 한국 기독교 역사에서 차지하는 의미와
            섬에 이어져 온 신앙문화를 살펴볼 수 있는 전시 공간입니다. 관련
            자료와 설명을 통해 지역 교회의 역사와 백령도 주민들의 생활 속에
            자리 잡은 신앙문화를 이해할 수 있습니다.
          </p>
          <p className="mt-5 leading-8 text-gray-700">
            자연 명소 중심의 여행에 역사문화 일정을 더하고 싶은 분이나
            학생·가족 단위 방문객이 천천히 둘러보기 좋은 장소입니다.
          </p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📖 꼭 살펴볼 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              ["백령도의 기독교 역사", "백령도에 기독교 신앙문화가 자리 잡고 이어져 온 과정을 살펴보세요."],
              ["역사 자료와 설명", "전시 자료와 설명문을 천천히 읽으면 백령도의 역사문화에 대한 이해가 깊어집니다."],
              ["지역 교회의 발자취", "교회가 섬 주민들의 생활과 마을 공동체에 어떤 의미를 가졌는지 알아볼 수 있습니다."],
              ["가족 교육여행", "아이와 함께 지역의 역사와 문화를 이야기하며 둘러보기 좋은 실내 관람지입니다."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl bg-sky-50 p-6">
                <h3 className="text-xl font-extrabold text-sky-900">{title}</h3>
                <p className="mt-3 leading-7 text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
          <h2 className="text-3xl font-black">🧭 방문 전 확인하세요</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>✅ 운영시간과 휴관 여부는 방문 당일 최신 안내를 확인해 주세요.</li>
            <li>✅ 실내 전시물의 사진 촬영 가능 여부는 현장 안내를 따라주세요.</li>
            <li>✅ 전시 설명문을 읽으며 천천히 관람할 수 있도록 시간을 넉넉히 잡아주세요.</li>
            <li>✅ 단체 방문을 계획한다면 사전에 관람 가능 여부를 확인하는 것이 좋습니다.</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🗺️ 함께 둘러보기 좋은 코스</h2>
          <p className="mt-4 leading-7 text-gray-600">
            역사관과 함께 백령도의 기독교 역사와 지역문화를 살펴보세요.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/place/christianity" className="block rounded-2xl border-2 border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50 hover:shadow-lg">
              <h3 className="text-lg font-extrabold">한국기독교의 섬 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 교회와 신앙문화 전체를 살펴보는 역사문화 여행</p>
            </Link>
            <Link href="/place/christianity#junghwadong" className="block rounded-2xl border-2 border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50 hover:shadow-lg">
              <h3 className="text-lg font-extrabold">중화동교회 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 교회 역사와 마을 신앙문화를 함께 살펴보기 좋은 장소</p>
            </Link>
            <Link href="/place/simcheonggak" className="block rounded-2xl border-2 border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50 hover:shadow-lg">
              <h3 className="text-lg font-extrabold">심청각 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">심청 설화와 백령도의 지역문화를 함께 접할 수 있는 관광지</p>
            </Link>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold">Q. 한국기독교의 섬과 같은 곳인가요?</h3>
              <p className="mt-2 leading-7 text-gray-700">
                아니요. 한국기독교의 섬은 백령도의 교회와 신앙문화 전반을
                소개하는 여행 주제이고, 한국기독교역사관은 관련 자료를 관람할
                수 있는 개별 역사문화 공간입니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 비 오는 날에도 방문하기 좋은가요?</h3>
              <p className="mt-2 leading-7 text-gray-700">
                실내 관람 중심이어서 야외 관광이 어려운 날 일정에 넣기 좋지만,
                당일 운영 여부를 먼저 확인해 주세요.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 아이와 함께 관람할 수 있나요?</h3>
              <p className="mt-2 leading-7 text-gray-700">
                네. 역사와 지역문화를 함께 접할 수 있어 가족·학생 여행에 잘 어울립니다.
              </p>
            </div>
          </div>
        </section>

        <PlaceReviews placeSlug="christian-island" placeName="한국기독교역사관" />
      </div>
    </PlaceTemplate>
  );
}
