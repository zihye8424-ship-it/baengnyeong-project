import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 서풍받이 여행 가이드 | 절벽·지질·트레킹 명소",
  description:
    "대청도 서풍받이의 웅장한 해안 절벽과 지질경관, 지오트레일, 사진 포인트와 방문 팁, 함께 둘러보기 좋은 대청도 관광지를 소개합니다.",
};

export default function SeopungbajiPage() {
  return (
    <PlaceTemplate
      title="서풍받이"
      subtitle="대청도 해안에서 웅장한 절벽과 서해의 탁 트인 풍경을 만나는 대표 지질명소"
      image="/images/seopungbaji.png"
      badges={["대청도 대표 명소", "지질경관", "트레킹", "사진 명소"]}
      quickFacts={[
        ["추천 대상", "자연 · 지질 · 사진 · 트레킹"],
        ["핵심 풍경", "해안 절벽 · 서해 바다"],
        ["관람 방법", "전망 · 산책 · 지오트레일"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <p className="font-bold text-sky-600">
            대청도 대표 절경
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🌊 서풍받이는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              서풍받이는 대청도의 해안 절벽과 서해 풍경을
              한눈에 감상할 수 있는 대표적인 자연 명소입니다.
              바다를 향해 시야가 크게 열려 있어 대청도의
              웅장한 해안 경관을 느끼기 좋습니다.
            </p>

            <p>
              관광안내자료에서는 약 1.5km에 이르는 절벽 경관을
              대청도의 대표 지질명소로 소개하고 있습니다.
              서풍받이만 빠르게 보고 이동하기보다 주변 탐방 구간과
              함께 천천히 둘러보면 대청도의 자연을 더욱 깊게
              경험할 수 있습니다.
            </p>

            <p>
              특히 자연경관을 좋아하거나 걷는 여행,
              지질여행과 사진여행을 좋아하는 여행자라면
              대청도 일정에서 빼놓기 아까운 장소입니다.
            </p>
          </div>
        </section>

        {/* 지질 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">
            백과사전식으로 알아보기
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🌍 서풍받이의 지질·지형 이야기
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              서풍받이의 가장 눈에 띄는 특징은 해안선을 따라
              이어지는 높은 절벽과 암석 경관입니다.
              관광안내자료에는 절벽 높이가 약 100m에 이르는
              구간이 소개되어 있습니다.
            </p>

            <p>
              오랜 시간 바람과 파도의 영향을 받은 해안 지형을
              바라보며 대청도의 자연환경을 관찰할 수 있습니다.
              절벽과 바다를 한 화면에서 볼 수 있다는 점도
              서풍받이의 큰 매력입니다.
            </p>

            <p>
              대청도는 백령도·소청도와 함께
              백령·대청 국가지질공원에 포함되어 있으며,
              서풍받이는 대청도의 지질과 해안 지형을
              살펴보기 좋은 대표적인 장소 가운데 하나입니다.
            </p>

            <p className="rounded-2xl bg-white p-5 text-sm leading-7 text-gray-600">
              ※ 지질·관광 기본정보는 옹진군 대청면 관광안내자료의
              서풍받이 및 백령·대청 국가지질공원 소개 내용을
              바탕으로 정리했습니다.
            </p>
          </div>
        </section>

        {/* 관람 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 서풍받이에서 꼭 볼 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🏔️ 웅장한 해안 절벽
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다를 따라 이어지는 절벽의 규모와 형태를
                천천히 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 서해 파노라마
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                절벽 너머로 펼쳐지는 서해와 대청도의
                해안 풍경을 넓게 바라보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🪨 지질경관
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                대청도의 암석과 해안 지형을 직접 바라보며
                섬의 자연환경을 관찰해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 절벽과 바다 사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                절벽만 가까이 담기보다 바다와 함께 촬영하면
                서풍받이의 규모를 표현하기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 지오트레일 */}
        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-8 md:p-10">
          <p className="font-bold text-sky-700">
            대청도 자연을 걸어서 만나기
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🥾 서풍받이와 지오트레일
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              관광안내자료에서는 서풍받이 구간을 대청도
              지오트레일의 주요 구간으로 소개하고 있습니다.
            </p>

            <p>
              서풍받이 한 곳만 보고 돌아오기보다 주변의
              자연과 지질명소를 연결해 걸으면 대청도의
              해안 지형을 더욱 입체적으로 살펴볼 수 있습니다.
            </p>

            <p>
              걷는 일정은 날씨와 바람, 현장 탐방 여건을
              고려해 무리하지 않는 범위에서 계획하세요.
            </p>
          </div>
        </section>

        {/* 사진 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 서풍받이 사진 촬영 팁
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                절벽 전체 담기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                절벽의 규모가 느껴지도록 조금 넓은 구도로
                촬영해 보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                바다와 함께
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                절벽과 서해가 함께 들어오도록 촬영하면
                대청도 특유의 풍경이 잘 드러납니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                안전한 전망 지점
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                좋은 사진을 위해 절벽 가장자리로 이동하지 말고
                안전한 탐방 구간에서 촬영하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 서풍받이 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 걷는 구간을 고려해 편한 운동화를 준비하는 것이 좋습니다.
            </li>

            <li>
              ✅ 해안 지역은 바람이 강할 수 있으므로
              바람막이나 겉옷을 챙기세요.
            </li>

            <li>
              ✅ 걷는 일정이라면 생수를 준비하고
              충분한 시간을 두고 움직이세요.
            </li>

            <li>
              ✅ 절벽 주변에서는 지정된 탐방 구간과
              안전한 전망 지점을 이용하세요.
            </li>

            <li>
              ✅ 강풍이나 비 등 날씨가 좋지 않은 날에는
              무리한 탐방을 피하는 것이 좋습니다.
            </li>
          </ul>
        </section>

        {/* 내부 링크 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 서풍받이와 함께 둘러볼 대청도 명소
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            아래 관광지를 누르면 해당 상세 페이지로 이동합니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/jiduri-beach"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                지두리해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 바다와 해변 풍경을 여유롭게
                감상하기 좋은 자연 명소
              </p>
            </Link>

            <Link
              href="/place/sunset-observatory"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                해넘이전망대 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 바다와 해 질 무렵 풍경을
                바라보기 좋은 전망 명소
              </p>
            </Link>

            <Link
              href="/place/okjuk-sanddune"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                옥죽동 모래사막 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 독특한 모래 지형을 만나볼 수 있는
                대표 자연 명소
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 서풍받이 자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold">
                Q. 서풍받이는 어떤 여행자에게 추천하나요?
              </h3>
              <p className="mt-2 leading-7">
                대청도의 대표 자연경관을 보고 싶은 여행자,
                지질여행이나 트레킹을 좋아하는 분,
                절벽과 바다 풍경을 촬영하고 싶은 분에게 잘 어울립니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 지오트레일과 함께 둘러볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7">
                관광안내자료에서 서풍받이는 대청도 지오트레일의
                주요 구간으로 소개되어 있습니다.
                당일 탐방 여건을 확인해 주변 구간과 연결해 보세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 운동화가 필요한가요?
              </h3>
              <p className="mt-2 leading-7">
                걷는 구간과 지면 상태를 고려하면 편한 운동화를
                준비하는 것이 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 어디와 함께 둘러보면 좋나요?
              </h3>
              <p className="mt-2 leading-7">
                지두리해변, 해넘이전망대, 옥죽동 모래사막 등
                대청도의 서로 다른 자연경관을 함께 둘러보면
                여행 코스를 다양하게 구성할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 안전 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            ⚠️ 서풍받이 방문 전 확인
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            서풍받이는 해안 절벽과 걷는 구간이 포함된 자연 명소입니다.
            기상과 바람에 따라 탐방 여건이 달라질 수 있으므로
            방문 당일 현장 안내를 확인하고 안전한 탐방로를 이용해 주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="seopungbaji"
        placeName="서풍받이"
      />
    </PlaceTemplate>
  );
}