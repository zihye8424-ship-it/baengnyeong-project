import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 답동해변 여행 가이드 | 해안 산책·방문 팁",
  description:
    "대청도 답동해변 여행 가이드. 바위 해안과 해안 산책 풍경, 사진 포인트, 방문 팁과 함께 둘러보기 좋은 대청도 관광지를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="답동해변"
      subtitle="바위 해안과 바다 풍경을 따라 천천히 걸어보는 대청도 해안 여행"
      image="/images/dapdong-beach.png"
      badges={["대청도", "해안풍경", "산책", "사진여행"]}
      quickFacts={[
        ["추천 대상", "해안 · 산책 · 사진여행"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["즐길거리", "풍경 감상 · 사진촬영 · 산책"],
        ["준비물", "편한 신발 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🌊 답동해변은 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              답동해변은 대청도의 바다와 해안 풍경을 가까이에서
              바라보며 천천히 둘러보기 좋은 장소입니다.
            </p>

            <p>
              바위가 어우러진 해안과 주변 풍경을 감상하며
              걷는 재미가 있어, 유명 관광지를 빠르게 이동하기보다
              대청도의 자연을 여유 있게 즐기고 싶은 여행자에게
              잘 어울립니다.
            </p>

            <p>
              날씨와 시간대에 따라 바다의 색과 파도,
              주변 해안의 분위기가 달라질 수 있어
              사진으로 여행 풍경을 남겨보기에도 좋습니다.
            </p>
          </div>
        </section>

        {/* 자연 풍경 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">
            대청도의 자연 살펴보기
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🌍 답동해변의 자연과 풍경
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              답동해변에서는 바다만 바라보기보다 해안의 바위와
              주변 지형, 멀리 이어지는 해안선을 함께 살펴보세요.
            </p>

            <p>
              같은 장소도 맑은 날과 흐린 날, 바람과 파도의
              상태에 따라 분위기가 다르게 느껴질 수 있습니다.
              이런 변화도 섬 여행에서 만날 수 있는 매력입니다.
            </p>

            <p>
              해안을 천천히 걸으며 주변 자연을 관찰하면
              대청도의 다양한 해안 풍경을 더욱 가까이에서
              느껴볼 수 있습니다.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 답동해변에서 살펴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                해안에서 바라보는 대청도의 바다와 수평선을
                천천히 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-6">
              <h3 className="text-xl font-extrabold">
                🪨 바위 해안
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위와 바다가 맞닿아 만들어내는 자연스러운
                해안 풍경도 답동해변의 볼거리입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🚶 해안 산책
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                현장의 안전한 이동 동선을 따라 걸으며
                대청도의 해안 풍경을 여유롭게 즐겨보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 여행 사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 바위, 해안선을 함께 담으면 대청도의
                자연스러운 풍경을 사진으로 남길 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🥾 답동해변 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 대청도 방문 전 선박 운항과 날씨를 확인하세요.
            </li>

            <li>
              ✅ 현장에 정비된 이동 동선이나 안내가 있다면
              해당 동선을 따라 이동하세요.
            </li>

            <li>
              ✅ 바위와 젖은 지면은 미끄러울 수 있으므로
              편한 운동화를 추천합니다.
            </li>

            <li>
              ✅ 해안은 바람이 강할 수 있어 바람막이나
              겉옷을 준비하면 좋습니다.
            </li>

            <li>
              ✅ 파도가 높거나 날씨가 좋지 않을 때는
              해안 가까이 무리하게 접근하지 마세요.
            </li>
          </ul>
        </section>

        {/* 사진 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 답동해변 사진 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🌊 바다를 넓게
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                수평선과 해안이 함께 보이도록 넓게 촬영하면
                대청도의 시원한 바다 풍경을 담기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🪨 바위와 함께
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위를 앞쪽에 두고 바다를 함께 담으면
                해안의 입체적인 모습을 기록할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🚶 여행 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                안전한 산책 동선과 바다를 함께 담아
                대청도 여행의 분위기를 남겨보세요.
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
            답동해변과 함께 대청도의 다른 해변과 전망 명소도
            연결해서 둘러보세요.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/jiduri-beach"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                지두리해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 또 다른 해변 풍경을 만나는 곳
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
                넓은 해안 풍경과 나이테바위를 함께 둘러보는 곳
              </p>
            </Link>

            <Link
              href="/place/sunset-observatory"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                해넘이전망대 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 전망과 해넘이 풍경을 만나는 장소
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 답동해변 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold">
                Q. 답동해변은 어떤 여행자에게 추천하나요?
              </h3>
              <p className="mt-2 leading-7">
                바다와 해안 풍경을 바라보며 천천히 걷는 여행이나
                자연 사진 촬영을 좋아하는 여행자에게 잘 어울립니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 사진 찍기 좋은 곳인가요?
              </h3>
              <p className="mt-2 leading-7">
                바다와 바위 해안을 함께 담아 대청도의 자연
                풍경을 기록하기 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 방문 전에 무엇을 확인해야 하나요?
              </h3>
              <p className="mt-2 leading-7">
                대청도 선박 운항과 날씨, 현지 이동 여건을
                확인하고 현장의 안전 안내를 우선해 주세요.
              </p>
            </div>
          </div>
        </section>

        {/* 안전 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            ⚠️ 방문 전 확인
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            해안의 이용 여건은 날씨와 파도, 현지 상황에 따라
            달라질 수 있습니다. 현장의 출입 및 안전 안내를
            우선하고 파도가 높거나 바람이 강한 날에는 위험한
            해안이나 암반에 무리하게 접근하지 마세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="dapdong-beach"
        placeName="답동해변"
      />
    </PlaceTemplate>
  );
}