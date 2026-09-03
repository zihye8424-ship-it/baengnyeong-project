import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 삼각산 여행 가이드 | 해발 343m 산행·전망·등산 팁",
  description:
    "대청도 삼각산 여행 가이드. 해발 343m 정상과 대청도 산행 풍경, 등산 준비물, 사진 포인트, 방문 팁과 주변 관광지를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="삼각산"
      subtitle="해발 343m 정상에서 대청도의 산과 섬 풍경을 만나는 대표 산행 명소"
      image="/images/samgaksan.png"
      badges={["대청도", "산행", "전망", "자연여행"]}
      quickFacts={[
        ["추천 대상", "산행 · 전망 · 자연여행"],
        ["높이", "해발 343m"],
        ["관람 포인트", "정상석 · 능선 · 섬 풍경"],
        ["준비물", "등산화 · 생수 · 바람막이"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ⛰️ 삼각산은 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              삼각산은 해발 343m의 대청도 산으로,
              섬에서 산행과 자연 풍경을 함께 즐길 수 있는 곳입니다.
            </p>

            <p>
              해변 중심의 대청도 여행과는 또 다른 분위기를
              느낄 수 있으며, 산을 오르면서 주변의 자연과
              대청도의 지형을 바라보는 재미가 있습니다.
            </p>

            <p>
              정상에 도착하면 정상석과 함께 산행의 기록을
              남길 수 있어 등산을 좋아하는 여행자라면
              대청도 일정에 넣어볼 만한 장소입니다.
            </p>
          </div>
        </section>

        {/* 산행 특징 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">
            섬에서 즐기는 산행
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🌿 삼각산에서 만나는 대청도의 자연
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              대청도는 해변과 해안 풍경뿐 아니라 산지까지
              함께 둘러볼 수 있어 작은 섬 안에서도 다양한
              자연환경을 경험할 수 있습니다.
            </p>

            <p>
              삼각산에서는 산길과 능선의 풍경을 따라 이동하며
              해변에서는 보기 어려운 시선으로 대청도의
              자연을 바라볼 수 있습니다.
            </p>

            <p>
              날씨와 계절에 따라 산의 분위기가 달라지고
              바람과 시야에도 차이가 있으므로 산행 전
              기상 상황을 확인하는 것이 중요합니다.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 삼각산에서 놓치지 말 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                ⛰️ 해발 343m 정상
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                삼각산 산행의 목적지인 정상에 올라
                대청도에서의 산행을 완성해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                🪨 정상석
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                정상석은 삼각산에 올랐다는 기록을 남길 수 있는
                대표적인 기념사진 포인트입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 섬의 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                산행 중 시야가 열리는 곳에서는 대청도의
                산과 주변 자연 풍경도 함께 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-yellow-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌿 산길의 자연
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                정상만 바라보고 걷기보다 산행 중 만나는
                식생과 계절의 변화도 천천히 살펴보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 산행 준비 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🎒 삼각산 산행 준비
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                👟 신발
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                일반 관광지와 달리 산행이 필요한 만큼
                미끄럼을 줄일 수 있는 등산화나 걷기 편한
                운동화를 준비하세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                💧 생수
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                산행 중 마실 물을 미리 준비하고 더운 계절에는
                평소보다 여유 있게 챙기는 것이 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🧥 바람막이
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                섬의 산은 바람과 기온 변화에 대비할 수 있도록
                가벼운 겉옷을 준비하면 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                📱 휴대전화
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                산행 전 휴대전화 배터리를 확인하고
                이동 경로와 현장 안내를 확인하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🥾 삼각산 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 산행을 시작하기 전에 날씨와 현지 상황을 확인하세요.
            </li>

            <li>
              ✅ 일몰 시간을 고려해 충분한 여유를 두고
              산행을 시작하는 것이 좋습니다.
            </li>

            <li>
              ✅ 비가 내렸거나 길이 젖어 있을 때는
              미끄럼에 특히 주의하세요.
            </li>

            <li>
              ✅ 정해진 이동 동선과 현장 안내를 따르고
              위험한 장소로 무리하게 접근하지 마세요.
            </li>

            <li>
              ✅ 산에서 발생한 쓰레기는 반드시 되가져가 주세요.
            </li>
          </ul>
        </section>

        {/* 사진 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 삼각산 사진 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🪨 정상석 인증사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                정상석과 함께 촬영하면 대청도 삼각산
                등산 기록을 남길 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ⛰️ 능선 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                안전한 위치에서 산 능선이 이어지는 모습을
                넓게 담아보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🌿 계절의 자연
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                산행 중 만나는 식생과 하늘을 함께 담으면
                계절에 따른 삼각산의 모습을 기록할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 주변 관광지 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 대청도에서 함께 둘러보기
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            삼각산 산행 전후로 대청도의 전망 명소와
            해변을 함께 둘러보세요.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/maebawi-observatory"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                매바위전망대 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 산과 바다를 바라보는 전망 포인트
              </p>
            </Link>

            <Link
              href="/place/okjuk-sanddune"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                옥죽동 모래사막 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                산과는 전혀 다른 대청도의 독특한 모래 풍경
              </p>
            </Link>

            <Link
              href="/place/moraeul-beach"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                모래울해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                산행 후 여유롭게 둘러보기 좋은 대청도 해변
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 삼각산 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold">
                Q. 대청도 삼각산의 높이는 얼마인가요?
              </h3>
              <p className="mt-2 leading-7">
                삼각산은 해발 343m이며 정상에는 정상석이 있습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 어떤 신발을 준비하는 것이 좋나요?
              </h3>
              <p className="mt-2 leading-7">
                산행이므로 걷기 편하고 미끄럼을 줄일 수 있는
                등산화나 운동화를 준비하는 것이 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 산행 전에 무엇을 확인해야 하나요?
              </h3>
              <p className="mt-2 leading-7">
                날씨와 현지 산행 여건을 확인하고 생수와
                바람막이 등 필요한 준비물을 챙겨주세요.
              </p>
            </div>
          </div>
        </section>

        {/* 안전 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            ⚠️ 산행 안전 안내
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            산행 여건은 날씨와 계절, 현지 상황에 따라 달라질 수
            있습니다. 기상이 좋지 않거나 바람이 강한 날에는
            무리한 산행을 피하고 현장의 출입 및 안전 안내를
            우선해 주세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="samgaksan"
        placeName="삼각산"
      />
    </PlaceTemplate>
  );
}