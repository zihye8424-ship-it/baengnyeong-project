import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 독바위 여행 가이드 | 볼거리·사진·방문 팁",
  description:
    "대청도 독바위 여행 가이드. 바다와 어우러진 바위 경관, 사진 포인트, 방문 준비사항과 대청도에서 함께 둘러보기 좋은 장소를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="독바위"
      subtitle="대청도의 바다와 독특한 바위 지형을 함께 바라보는 경관 포인트"
      image="/images/dokbawi.png"
      badges={["대청도", "바위경관", "해안풍경", "사진여행"]}
      quickFacts={[
        ["추천 대상", "자연여행 · 사진여행"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 방법", "주변 해안과 함께 천천히 둘러보기"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🏝️ 대청도 독바위는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              독바위는 대청도 여행 중 바다와 바위가 어우러진 섬의
              자연 풍경을 감상할 수 있는 곳입니다. 화려한 시설을
              둘러보기보다는 대청도의 해안 경관과 바위 지형을
              천천히 바라보는 여행에 잘 어울립니다.
            </p>

            <p>
              대청도를 여행할 때는 한 장소만 목적지로 정하기보다
              주변 해안과 전망 포인트를 함께 묶어 이동하면 섬의
              다양한 풍경을 보다 여유롭게 만날 수 있습니다.
            </p>

            <p>
              특히 섬에서는 날씨와 바람에 따라 같은 장소도 분위기가
              크게 달라질 수 있으므로 여행 일정에 여유를 두는 것이
              좋습니다.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 독바위에서 살펴볼 여행 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다와 바위 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 바위 지형을 한 화면에 담아 대청도 특유의
                해안 풍경을 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 사진 여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위만 가까이 촬영하기보다 주변 바다와 하늘을 함께
                담으면 섬의 분위기를 표현하기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                🚶 천천히 둘러보기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                다음 장소로 바로 이동하기보다 주변 풍경까지 살펴보며
                여유 있게 둘러보는 것을 추천합니다.
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-extrabold">
                🍃 날씨에 따라 달라지는 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                섬은 바람과 구름, 햇빛에 따라 풍경의 느낌이 크게
                달라집니다. 방문 당일 기상 상황을 확인해 주세요.
              </p>
            </div>
          </div>
        </section>

        {/* 여행 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 독바위 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 대청도는 섬 지역이므로 선박 운항과 기상 상황을 먼저
              확인하세요.
            </li>
            <li>
              ✅ 해안 주변은 바람이 강할 수 있어 얇은 바람막이를
              준비하면 좋습니다.
            </li>
            <li>
              ✅ 바위와 해안 주변에서는 미끄러질 수 있으므로 편한
              운동화를 추천합니다.
            </li>
            <li>
              ✅ 위험한 암반이나 출입이 제한된 장소에는 무리하게
              접근하지 마세요.
            </li>
            <li>
              ✅ 주민 생활공간과 사유지가 있는 경우 현장 안내와
              통행 질서를 지켜주세요.
            </li>
          </ul>
        </section>

        {/* 계절 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🍀 계절별 여행 체크
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold">🌸 봄</h3>
              <p className="mt-3 leading-7 text-gray-700">
                바람이 차가울 수 있으므로 겉옷을 준비하고 날씨가
                좋은 날 여유롭게 둘러보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-bold">☀️ 여름</h3>
              <p className="mt-3 leading-7 text-gray-700">
                햇볕에 대비해 모자와 생수를 준비하고 한낮에는
                무리한 이동을 피하는 것이 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold">🍁 가을</h3>
              <p className="mt-3 leading-7 text-gray-700">
                선선한 날씨에 해안 풍경을 둘러보기 좋지만 바람이
                강한 날에는 체감온도를 확인하세요.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold">❄️ 겨울</h3>
              <p className="mt-3 leading-7 text-gray-700">
                강풍과 낮은 체감온도에 대비하고 선박 운항 여부와
                현지 기상을 먼저 확인하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 함께 둘러보기 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 대청도에서 함께 둘러보기
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            독바위와 함께 대청도의 다른 여행지도 살펴보세요.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/okjuk-sanddune"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                옥죽동 모래사막 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 독특한 모래 풍경을 만날 수 있는 곳
              </p>
            </Link>

            <Link
              href="/place/nongyeo-beach"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                농여해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 해안 풍경을 즐길 수 있는 여행지
              </p>
            </Link>

            <Link
              href="/place/maebawi-observatory"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                매바위전망대 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 풍경을 바라볼 수 있는 전망 포인트
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 독바위 여행 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                Q. 독바위만 따로 방문하면 되나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                대청도 내 다른 해안과 관광지를 함께 묶어 여행하면
                이동 시간을 활용하기 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 어떤 옷을 준비하면 좋나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                해안 지역은 바람이 강해질 수 있으므로 계절에 따라
                바람막이나 겉옷을 준비하는 것이 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 방문 전에 무엇을 확인해야 하나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                선박 운항과 날씨를 확인하고 현장에 통제 또는 안전
                안내가 있다면 해당 안내를 우선해 주세요.
              </p>
            </div>
          </div>
        </section>

        {/* 안전 안내 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            ⚠️ 방문 전 확인
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            섬 지역은 기상과 선박 운항, 현지 접근 여건이 달라질 수
            있습니다. 현장의 출입 안내와 안전 표지를 우선하고,
            파도가 높거나 바람이 강한 날에는 위험한 해안과 암반에
            접근하지 마세요.
          </p>
        </section>
      </div>

      <PlaceReviews placeSlug="dokbawi" placeName="독바위" />
    </PlaceTemplate>
  );
}