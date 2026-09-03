import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "소청도 노화동포구 여행 가이드 | 볼거리·풍경·방문 팁",
  description:
    "소청도 노화동포구 여행 가이드. 바다와 마을이 맞닿은 작은 포구의 풍경, 사진 포인트, 방문 팁과 소청도에서 함께 둘러보기 좋은 장소를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="노화동포구"
      subtitle="바다와 주민의 생활이 맞닿아 있는 소청도의 작은 포구"
      image="/images/nohwa-port.png"
      badges={["소청도", "포구풍경", "해안풍경", "섬마을"]}
      quickFacts={[
        ["추천 대상", "섬여행 · 풍경여행 · 사진"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 방법", "포구와 주변 풍경 천천히 둘러보기"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ⚓ 노화동포구는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              노화동포구는 소청도에서 바다와 섬마을의 생활 풍경을
              함께 바라볼 수 있는 작은 포구입니다. 규모가 큰 관광지를
              둘러보는 것과는 다른, 조용한 섬마을의 분위기를 느껴볼 수
              있습니다.
            </p>

            <p>
              포구 주변에서는 바다와 선착장, 마을 풍경이 자연스럽게
              이어지는 모습을 볼 수 있습니다. 빠르게 사진만 찍고
              이동하기보다 잠시 머물며 소청도의 분위기를 느껴보세요.
            </p>

            <p>
              소청도 여행에서는 관광 명소뿐 아니라 주민들이 실제로
              생활하는 공간도 만나게 됩니다. 주민 생활과 작업에
              방해가 되지 않도록 배려하며 둘러보는 것이 중요합니다.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 노화동포구에서 볼 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 포구와 바다
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                작은 포구 너머로 펼쳐지는 바다를 바라보며 소청도의
                조용한 해안 풍경을 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🏘️ 섬마을 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                관광지로 꾸며진 모습뿐 아니라 바다와 마을이 이어지는
                실제 섬 생활의 풍경을 함께 볼 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 포구 사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                포구만 가까이 촬영하기보다 바다와 마을을 함께 담으면
                소청도의 분위기가 잘 드러나는 사진을 남길 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-extrabold">
                🍃 조용한 섬 분위기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                잠시 걸음을 늦추고 바람과 파도 소리를 들으며
                작은 섬 특유의 여유를 느껴보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 여행 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 노화동포구 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 소청도 여행 전에는 선박 운항과 기상 상황을 확인하세요.
            </li>
            <li>
              ✅ 포구 주변은 주민들의 생활 및 작업 공간이므로 통행에
              방해가 되지 않도록 주의해 주세요.
            </li>
            <li>
              ✅ 해안은 바람이 강해질 수 있으므로 바람막이나 겉옷을
              준비하면 좋습니다.
            </li>
            <li>
              ✅ 젖은 바닥이나 방파제 주변은 미끄러울 수 있으므로
              편한 신발을 준비하세요.
            </li>
            <li>
              ✅ 기상이 좋지 않거나 파도가 높은 날에는 바다 가까이
              무리하게 접근하지 마세요.
            </li>
          </ul>
        </section>

        {/* 이런 여행자에게 추천 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            💙 이런 여행이라면 들러보세요
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                📷 섬 사진 여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                화려한 관광지보다 자연스러운 포구와 섬마을 풍경을
                사진으로 남기고 싶은 여행자
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🚶 천천히 걷는 여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                일정을 빽빽하게 채우기보다 소청도의 분위기를
                천천히 느끼고 싶은 여행자
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🌊 섬마을 여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다뿐 아니라 섬에서 살아가는 마을의 풍경도
                함께 보고 싶은 여행자
              </p>
            </div>
          </div>
        </section>

        {/* 함께 둘러보기 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 소청도에서 함께 둘러보기
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            노화동포구와 함께 소청도의 다른 여행지도 살펴보세요.
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
                소청도의 바다 풍경을 만나는 대표 여행지
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
                소청도의 독특한 해안 지형을 살펴보는 여행지
              </p>
            </Link>

            <Link
              href="/place/socheong-catholic"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                소청도 천주교 역사 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                소청도의 역사와 이야기를 함께 살펴보는 곳
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 노화동포구 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                Q. 노화동포구는 어떤 곳인가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                소청도의 작은 포구로 바다와 섬마을이 이어지는
                풍경을 천천히 감상하기 좋은 곳입니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 사진 찍기 좋은가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                포구와 바다, 주변 마을을 함께 담으면 소청도 특유의
                섬 풍경을 사진으로 남길 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 방문할 때 주의할 점이 있나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                주민들이 실제로 생활하고 작업하는 공간인 만큼
                통행을 방해하지 않도록 배려하고, 해안에서는 파도와
                미끄러운 바닥에 주의해 주세요.
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
            소청도는 기상과 선박 운항 상황에 따라 여행 일정이
            달라질 수 있습니다. 포구는 관광지이면서 주민들의
            생활공간이기도 하므로 현장 통행 및 안전 안내를 우선하고,
            파도가 높거나 바람이 강한 날에는 해안과 방파제 주변에
            무리하게 접근하지 마세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="nohwa-port"
        placeName="노화동포구"
      />
    </PlaceTemplate>
  );
}