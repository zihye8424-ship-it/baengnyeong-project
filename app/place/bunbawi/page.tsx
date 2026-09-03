import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "소청도 분바위 여행 가이드 | 해안 절경·방문 팁",
  description:
    "소청도 분바위 여행 가이드. 바다와 맞닿은 밝은 암벽 풍경, 사진 포인트, 방문 시 주의사항과 함께 둘러보기 좋은 소청도 관광지를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="분바위"
      subtitle="바다와 맞닿은 밝은 암벽이 인상적인 소청도의 해안 절경"
      image="/images/bunbawi.png"
      badges={["소청도", "해안절경", "자연여행", "사진명소"]}
      quickFacts={[
        ["추천 대상", "자연여행 · 사진 · 섬여행"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 포인트", "밝은 암벽과 바다 풍경"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🌊 분바위는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              분바위는 소청도에서 만날 수 있는 독특한 해안
              경관으로, 바다와 맞닿아 있는 밝은 암벽의 모습이
              인상적인 곳입니다.
            </p>

            <p>
              푸른 바다와 밝은 암벽이 함께 보이는 풍경은
              소청도의 다른 해안과 또 다른 분위기를 보여줍니다.
              자연 풍경과 사진 촬영을 좋아하는 여행자라면
              소청도 여행 중 눈여겨볼 만한 장소입니다.
            </p>

            <p>
              한 장소만 빠르게 보고 이동하기보다 주변 바다와
              해안선을 함께 바라보면 소청도의 자연환경과
              섬 특유의 풍경을 더욱 잘 느낄 수 있습니다.
            </p>
          </div>
        </section>

        {/* 자연 풍경 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">
            자연경관 살펴보기
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🌍 분바위의 자연과 풍경
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              분바위를 둘러볼 때는 바위 자체뿐 아니라 주변
              바다와 해안이 함께 만들어내는 풍경을 살펴보세요.
            </p>

            <p>
              날씨와 시간대에 따라 바다와 암벽이 보이는 느낌도
              달라질 수 있습니다. 맑은 날에는 바다와 암벽의
              대비가 더욱 선명하게 느껴질 수 있습니다.
            </p>

            <p>
              자연 그대로의 해안 지형이므로 관람할 때는
              바위를 훼손하거나 자연물을 가져가지 않고
              그대로 보존하는 것이 중요합니다.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 분바위에서 꼭 살펴볼 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-100 p-6">
              <h3 className="text-xl font-extrabold">
                🪨 밝은 암벽
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                주변 해안과는 다른 느낌을 주는 밝은 암벽의
                모습과 형태를 천천히 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다와 암벽의 대비
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 밝은 바위가 한눈에 들어오는 풍경은
                분바위를 감상하는 중요한 포인트입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🏝️ 소청도 해안 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                분바위 주변까지 넓게 바라보며 소청도의
                자연스러운 해안선을 함께 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 사진 포인트
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                암벽만 가까이 담는 사진과 바다까지 넓게
                담는 사진을 각각 남겨보는 것도 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🥾 분바위 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 소청도 방문 전 날씨와 선박 운항 상황을
              확인하세요.
            </li>

            <li>
              ✅ 해안이나 바위 주변을 이동할 때는 젖은 지면과
              미끄러운 구간에 주의하세요.
            </li>

            <li>
              ✅ 바람이 강할 수 있으므로 계절에 따라
              바람막이나 겉옷을 준비하는 것이 좋습니다.
            </li>

            <li>
              ✅ 파도가 높거나 기상이 좋지 않을 때는
              해안 가까이 무리하게 접근하지 마세요.
            </li>

            <li>
              ✅ 자연 암석을 훼손하거나 채취하지 말고
              있는 그대로 관람해 주세요.
            </li>
          </ul>
        </section>

        {/* 사진 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 분바위 사진 남기는 방법
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🪨 암벽 중심
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                밝은 암벽의 모습이 잘 보이도록 바위 자체를
                중심으로 사진을 남겨보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🌊 바다와 함께
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                암벽과 바다가 함께 들어오도록 넓게 촬영하면
                소청도의 해안 분위기를 담기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ⚠️ 안전한 곳에서
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                사진을 위해 위험한 바위나 파도가 닿는 곳으로
                이동하지 말고 안전한 위치에서 촬영하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 내부 링크 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 소청도에서 함께 둘러보기
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            분바위와 함께 소청도의 자연과 섬 풍경을
            이어서 둘러보세요.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/socheong-lighthouse"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                소청도등대 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                소청도의 바다와 섬 풍경을 바라보는 여행지
              </p>
            </Link>

            <Link
              href="/place/stromatolite"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                스트로마톨라이트 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                소청도의 독특한 지질 경관을 살펴보는 장소
              </p>
            </Link>

            <Link
              href="/place/socheong-columnar-joint"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                소청도 주상절리 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                소청도의 또 다른 자연 지형을 둘러보는 여행지
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 분바위 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold">
                Q. 분바위에서 무엇을 보면 좋나요?
              </h3>
              <p className="mt-2 leading-7">
                밝은 암벽과 주변 바다가 함께 만들어내는
                해안 풍경을 중심으로 살펴보세요.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 사진 촬영하기 좋은 곳인가요?
              </h3>
              <p className="mt-2 leading-7">
                암벽과 바다를 함께 담아 소청도의 자연 풍경을
                기록할 수 있습니다. 안전한 위치에서 촬영해 주세요.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 방문 전에 무엇을 확인해야 하나요?
              </h3>
              <p className="mt-2 leading-7">
                소청도 선박 운항과 날씨를 확인하고,
                현장의 접근 및 안전 안내가 있다면 해당 안내를
                우선해 주세요.
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
            해안의 접근 여건은 날씨와 파도, 현지 상황에 따라
            달라질 수 있습니다. 현장의 출입 및 안전 안내를
            우선하고 파도가 높거나 바람이 강한 날에는 위험한
            해안이나 암반에 무리하게 접근하지 마세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="bunbawi"
        placeName="분바위"
      />
    </PlaceTemplate>
  );
}