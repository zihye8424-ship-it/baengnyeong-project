import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 검은낭 해안 여행 가이드 | 볼거리·사진·방문 팁",
  description:
    "대청도 검은낭 해안 여행 가이드. 바위와 서해가 어우러진 해안 풍경, 사진 포인트, 방문 준비사항과 대청도에서 함께 둘러보기 좋은 장소를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="검은낭 해안"
      subtitle="거친 바위와 서해가 어우러지는 대청도의 해안 경관"
      image="/images/geomeunnang-coast.png"
      badges={["대청도", "해안절경", "바위경관", "자연여행"]}
      quickFacts={[
        ["추천 대상", "자연여행 · 사진여행"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 방법", "해안 풍경을 천천히 감상"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🌊 대청도 검은낭 해안은 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              검은낭 해안은 대청도 여행 중 바위와 서해가 어우러진
              해안 풍경을 감상할 수 있는 곳입니다. 섬 특유의 바다와
              자연 지형을 가까이에서 느끼며 둘러보기 좋은 장소입니다.
            </p>

            <p>
              화려한 관광시설을 둘러보는 여행보다는 바다와 바위,
              하늘이 만들어 내는 자연 풍경을 천천히 감상하는 여행에
              잘 어울립니다.
            </p>

            <p>
              대청도는 이동해야 할 장소가 여러 곳에 나뉘어 있으므로
              검은낭 해안 한 곳만 보기보다 주변 관광지와 함께
              여행 동선을 계획하면 시간을 효율적으로 활용할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 검은낭 해안에서 살펴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 서해 해안 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                탁 트인 바다와 해안 지형을 함께 바라보며 대청도의
                자연 풍경을 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-extrabold">
                🪨 바위 경관
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 맞닿은 바위 지형이 만들어 내는 풍경도
                검은낭 해안을 둘러볼 때 눈여겨볼 부분입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 풍경 사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위만 촬영하기보다 바다와 하늘까지 넓게 담으면
                대청도 해안의 분위기를 표현하기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                🍃 섬의 자연
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                파도와 바람, 햇빛에 따라 해안의 분위기가 달라지는
                것도 섬 여행에서 느낄 수 있는 매력입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 검은낭 해안 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 대청도 방문 전 선박 운항과 기상 상황을 확인하세요.
            </li>
            <li>
              ✅ 해안은 바람이 강할 수 있으므로 바람막이나 겉옷을
              준비하면 좋습니다.
            </li>
            <li>
              ✅ 바위나 젖은 지면은 미끄러울 수 있으므로 걷기 편한
              신발을 추천합니다.
            </li>
            <li>
              ✅ 파도가 높거나 바람이 강한 날에는 해안 가까이
              무리하게 접근하지 마세요.
            </li>
            <li>
              ✅ 현장에 출입 통제나 안전 안내가 있다면 해당 안내를
              가장 먼저 따라주세요.
            </li>
          </ul>
        </section>

        {/* 사진 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📷 검은낭 해안 사진 남기는 방법
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-extrabold">
                바다까지 넓게
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위와 바다를 함께 담으면 해안의 규모와 분위기를
                표현하기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-extrabold">
                하늘도 함께
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                맑은 날에는 하늘을 넓게 포함해 섬 특유의 탁 트인
                풍경을 담아보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-extrabold">
                안전한 위치에서
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                좋은 사진을 위해 위험한 암반이나 파도 가까이
                접근하는 것은 피해주세요.
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
            검은낭 해안과 함께 대청도의 다른 자연 명소도
            둘러보세요.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
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
              href="/place/okjuk-sanddune"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                옥죽동 모래사막 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                섬에서 만나는 독특한 모래 풍경
              </p>
            </Link>

            <Link
              href="/place/dokbawi"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                독바위 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                바다와 바위가 어우러진 대청도의 경관 포인트
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 검은낭 해안 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                Q. 검은낭 해안은 어떤 여행에 어울리나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                대청도의 바다와 바위 등 자연 경관을 감상하거나
                풍경 사진을 남기고 싶은 여행에 잘 어울립니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 방문할 때 어떤 신발이 좋나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                해안 주변은 지면 상태가 일정하지 않을 수 있으므로
                걷기 편하고 미끄럽지 않은 운동화를 추천합니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 날씨가 좋지 않아도 방문할 수 있나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                해안은 바람과 파도의 영향을 크게 받을 수 있습니다.
                기상이 좋지 않을 때는 현장 상황을 확인하고 안전을
                우선해 주세요.
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
            대청도는 기상과 선박 운항 상황에 따라 여행 일정이
            달라질 수 있습니다. 해안에서는 파도와 바람에 주의하고,
            현장의 출입 통제 및 안전 안내가 있을 경우 반드시
            해당 안내를 우선해 주세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="geomeunnang-coast"
        placeName="검은낭 해안"
      />
    </PlaceTemplate>
  );
}