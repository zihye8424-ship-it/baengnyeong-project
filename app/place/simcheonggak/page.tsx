import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 심청각 여행 가이드 | 심청전·전망·가족여행",
  description:
    "효녀 심청 설화와 연결해 소개되는 백령도 심청각의 전시와 전망, 가족여행 팁, 함께 둘러보기 좋은 관광지를 소개합니다.",
};

export default function SimcheonggakPage() {
  return (
    <PlaceTemplate
      title="심청각"
      subtitle="효녀 심청의 이야기를 만나고 백령도의 바다 풍경까지 함께 바라보는 역사·문화 관광지"
      image="/images/simcheonggak.jpg"
      badges={["심청전", "역사문화", "가족여행", "전망"]}
      quickFacts={[
        ["추천 대상", "가족 · 역사문화 여행"],
        ["추천 시간", "30~60분"],
        ["관람 방법", "전시 · 전망 함께 보기"],
        ["준비물", "카메라 · 바람막이"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🌸 심청각은 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              심청각은 우리나라 대표 고전소설인 심청전의 이야기를
              백령도 여행과 함께 접할 수 있는 역사·문화 관광지입니다.
              효녀 심청의 이야기를 떠올리며 관련 전시와 공간을
              둘러볼 수 있습니다.
            </p>

            <p>
              자연경관 중심의 백령도 여행 중에 역사와 이야기를
              함께 접할 수 있다는 점이 심청각의 특징입니다.
              아이와 함께 방문한다면 심청전을 여행지에서 다시
              이야기해 보는 시간으로 활용하기 좋습니다.
            </p>

            <p>
              건물 안팎을 둘러본 뒤에는 주변의 바다 풍경도 함께
              바라보며 여유 있게 관람해 보세요.
            </p>
          </div>
        </section>

        {/* 관람 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 심청각에서 살펴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-rose-50 p-6">
              <h3 className="text-xl font-extrabold">
                📖 심청 이야기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                책으로 접했던 심청전의 이야기를 실제 여행지에서
                다시 떠올려 보는 재미가 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🏛️ 전시 관람
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                전시와 설명을 천천히 살펴보며 심청 이야기를
                문화여행의 관점에서 만나보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                날씨가 좋은 날에는 심청각 주변에서 백령도의
                바다 풍경도 함께 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-extrabold">
                👨‍👩‍👧 가족 문화여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                아이와 함께 심청전과 효에 관한 이야기를 나누며
                둘러보기 좋은 가족 여행 코스입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 관람 순서 */}
        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-8 md:p-10">
          <h2 className="text-3xl font-black">
            🚶 이렇게 둘러보세요
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-sky-600">STEP 1</p>
              <h3 className="mt-2 text-xl font-extrabold">
                심청 이야기 살펴보기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                먼저 심청전과 관련된 이야기와 전시 내용을
                천천히 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-sky-600">STEP 2</p>
              <h3 className="mt-2 text-xl font-extrabold">
                공간 둘러보기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                전시뿐 아니라 건물 안팎의 공간도 함께
                둘러보며 여유 있게 관람해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-sky-600">STEP 3</p>
              <h3 className="mt-2 text-xl font-extrabold">
                바다 풍경 보기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                관람 후 주변 풍경을 바라보며 심청각 여행을
                마무리해 보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 여행 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 심청각 여행 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 실내 전시와 주변 풍경을 함께 보려면
              시간을 조금 여유 있게 잡는 것이 좋습니다.
            </li>

            <li>
              ✅ 아이와 방문한다면 심청전 이야기를 미리 간단하게
              들려주면 관람 내용을 이해하기 좋습니다.
            </li>

            <li>
              ✅ 바다를 바라보는 곳은 바람이 강할 수 있으므로
              계절에 따라 바람막이나 겉옷을 준비하세요.
            </li>

            <li>
              ✅ 시설 운영시간이나 휴관 여부는 변경될 수 있으므로
              방문 전에 최신 안내를 확인해 주세요.
            </li>
          </ul>
        </section>

        {/* 사진 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📷 심청각 사진 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                심청각과 함께
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                심청각 건물과 주변 풍경이 함께 보이도록
                여행 인증사진을 남겨보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                바다를 배경으로
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                날씨가 좋은 날에는 백령도의 바다와 하늘을
                함께 담아보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                가족여행 기록
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                아이와 함께 방문했다면 심청 이야기를 나눈
                가족여행의 추억도 사진으로 남겨보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 실제 클릭되는 내부링크 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 함께 가기 좋은 코스
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            아래 관광지를 누르면 해당 상세 페이지로 이동합니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/sagot"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                사곶해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                넓게 펼쳐진 해변 풍경을 만날 수 있는 백령도 대표 명소
              </p>
            </Link>

            <Link
              href="/place/baengnyeong-bi"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                서해최북단 백령도비 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                백령도 여행의 상징성을 사진으로 남기기 좋은 장소
              </p>
            </Link>

            <Link
              href="/place/cheonan"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                천안함 46용사 위령탑 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                추모와 안보의 의미를 되새겨볼 수 있는 역사 공간
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 심청각 자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                Q. 아이와 함께 가기 좋은가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                심청전 이야기를 함께 나누며 둘러볼 수 있어
                가족의 역사·문화 여행 코스로 활용하기 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 비 오는 날에도 관람할 수 있나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                실내에서 둘러볼 수 있는 공간이 있지만,
                실제 운영 여부와 관람 가능 범위는 방문 당일
                현장 안내를 확인해 주세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 심청각에서는 무엇을 보면 좋나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                심청전과 관련된 이야기와 전시를 살펴보고,
                주변의 바다 풍경까지 함께 감상해 보세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 운영시간은 항상 같은가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                운영시간과 휴관 여부는 변경될 수 있으므로
                방문 전에 최신 안내를 확인하는 것이 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 안내 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            ⚠️ 방문 전 확인
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            시설 운영시간과 휴관 여부, 관람 가능 범위는 현장 상황에
            따라 달라질 수 있습니다. 방문 전 최신 안내를 확인하고
            현장의 관람 및 안전수칙을 따라주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="simcheonggak"
        placeName="심청각"
      />
    </PlaceTemplate>
  );
}