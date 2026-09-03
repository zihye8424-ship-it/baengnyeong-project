import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "소청도 소청등대 여행 가이드 | 바다 전망·방문 팁",
  description:
    "소청도 소청등대 여행 가이드. 푸른 바다와 섬 풍경을 감상할 수 있는 등대의 볼거리, 사진 포인트, 방문 팁과 함께 둘러보기 좋은 소청도 관광지를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="소청등대"
      subtitle="소청도의 푸른 바다와 섬 풍경을 함께 바라보는 등대 여행"
      image="/images/socheong-lighthouse.png"
      badges={["소청도", "등대", "바다전망", "사진여행"]}
      quickFacts={[
        ["추천 대상", "섬여행 · 사진 · 자연여행"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 포인트", "등대와 주변 바다 풍경"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🌊 소청등대는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              소청등대는 소청도 여행에서 등대와 주변 바다 풍경을
              함께 만날 수 있는 장소입니다.
            </p>

            <p>
              등대 주변에서는 섬과 바다가 어우러지는 소청도의
              풍경을 감상할 수 있어 자연과 사진 여행을 좋아하는
              여행자에게 잘 어울립니다.
            </p>

            <p>
              소청도는 작은 섬이지만 분바위와 포구, 해안 지형 등
              서로 다른 분위기의 장소가 있어 등대와 함께 여러
              관광지를 연결해서 둘러보는 것도 좋습니다.
            </p>
          </div>
        </section>

        {/* 풍경 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">
            소청도의 풍경 살펴보기
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🌍 등대와 바다가 만드는 풍경
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              소청등대를 방문할 때는 등대 건물만 보기보다
              주변으로 펼쳐지는 바다와 섬의 풍경까지 함께
              살펴보세요.
            </p>

            <p>
              날씨와 시간대에 따라 바다의 색과 주변 풍경이
              다르게 느껴질 수 있어 같은 장소에서도 다양한
              분위기를 만날 수 있습니다.
            </p>

            <p>
              특히 섬 여행에서는 바람과 기상 변화가 빠를 수
              있으므로 여유 있는 일정으로 둘러보는 것이 좋습니다.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 소청등대에서 살펴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                💡 등대 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                소청도의 자연 풍경 속에 자리한 등대의 모습을
                천천히 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다 전망
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                등대 주변에서 보이는 바다와 섬 풍경도
                놓치지 말고 함께 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🏝️ 섬의 자연
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 해안, 섬의 지형이 함께 어우러지는
                소청도 특유의 자연환경을 느껴볼 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 여행 사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                등대와 바다를 함께 담으면 소청도 여행을
                대표하는 풍경 사진을 남기기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🥾 소청등대 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 소청도로 이동하기 전 선박 운항과 날씨를
              확인하세요.
            </li>

            <li>
              ✅ 섬에서는 바람이 강할 수 있으므로 계절에 따라
              바람막이나 겉옷을 준비하세요.
            </li>

            <li>
              ✅ 걷기 편한 운동화와 생수를 준비하면
              여행하기 편합니다.
            </li>

            <li>
              ✅ 등대 시설의 출입 가능 범위와 현장 안내를
              확인하고 허용된 공간에서 관람하세요.
            </li>

            <li>
              ✅ 기상이 좋지 않을 때는 무리하게 이동하지 말고
              안전을 우선하세요.
            </li>
          </ul>
        </section>

        {/* 사진 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 소청등대 사진 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                💡 등대를 중심으로
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                등대가 잘 보이는 위치에서 주변 자연 풍경과
                함께 사진을 남겨보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🌊 바다까지 넓게
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                등대와 바다를 한 화면에 담으면 소청도의
                섬 분위기를 더욱 잘 표현할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🏝️ 주변 풍경도 함께
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                등대뿐 아니라 주변 해안과 자연 풍경도
                여행 기록으로 함께 남겨보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 주변 관광지 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 소청도에서 함께 둘러보기
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            소청등대와 함께 소청도의 자연과 포구를 연결해서
            둘러보세요.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/bunbawi"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                분바위 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                밝은 암벽과 바다가 어우러지는 소청도의 해안 풍경
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
              href="/place/yedong-port"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                예동포구 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                작은 포구와 섬마을의 일상을 만나는 곳
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 소청등대 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold">
                Q. 소청등대에서는 무엇을 볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7">
                등대와 함께 주변 바다와 섬 풍경을 감상할 수
                있습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 사진 찍기 좋은 곳인가요?
              </h3>
              <p className="mt-2 leading-7">
                등대와 바다를 함께 담아 소청도 여행의 풍경을
                기록하기 좋습니다. 안전한 장소에서 촬영해 주세요.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 방문 전에 무엇을 확인해야 하나요?
              </h3>
              <p className="mt-2 leading-7">
                선박 운항과 날씨, 현지 이동 여건을 확인하고
                등대 시설의 출입 및 현장 안내를 따라주세요.
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
            섬의 기상과 현지 상황에 따라 이동 및 관람 여건이
            달라질 수 있습니다. 등대 시설의 출입 가능 여부와
            현장 안전 안내를 우선 확인하고, 바람이 강하거나
            날씨가 좋지 않을 때는 무리하게 이동하지 마세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="socheong-lighthouse"
        placeName="소청등대"
      />
    </PlaceTemplate>
  );
}