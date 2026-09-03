import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "소청도 예동포구 여행 가이드 | 섬마을·포구 풍경",
  description:
    "소청도 예동포구 여행 가이드. 작은 포구와 섬마을 풍경, 방문 팁, 사진 포인트와 함께 둘러보기 좋은 소청도 관광지를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="예동포구"
      subtitle="작은 포구와 섬마을의 일상을 천천히 만나는 소청도의 생활 풍경"
      image="/images/yedong-port.png"
      badges={["소청도", "포구", "섬마을", "사진여행"]}
      quickFacts={[
        ["추천 대상", "섬여행 · 사진 · 여유로운 여행"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 방법", "포구와 주변 마을 풍경 천천히 둘러보기"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ⚓ 예동포구는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              예동포구는 소청도의 작은 포구와 섬마을 풍경을
              가까이에서 만날 수 있는 곳입니다.
            </p>

            <p>
              유명 관광지를 빠르게 둘러보는 여행과는 조금 다르게,
              바다와 포구 그리고 주변 마을이 어우러지는 모습을
              천천히 바라보며 소청도의 분위기를 느껴보기 좋습니다.
            </p>

            <p>
              소청도를 여행한다면 등대와 해안 경관뿐 아니라
              이런 작은 포구도 함께 둘러보세요. 실제 섬마을의
              생활 풍경을 여행 중 자연스럽게 만날 수 있습니다.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 예동포구에서 살펴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                ⚓ 작은 포구 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 맞닿아 있는 작은 포구를 바라보며
                소청도의 한적한 분위기를 느껴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🏘️ 섬마을 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                포구 주변의 마을과 바다가 어우러지는 모습을
                함께 바라보면 소청도의 생활 풍경을 만날 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                날씨가 좋은 날에는 포구 주변에서 펼쳐지는
                섬과 바다의 풍경도 함께 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 여행 기록
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                화려한 관광지와는 다른 소청도의 소박한 모습을
                여행 사진으로 남겨보기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 예동포구 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 소청도 방문 전 기상과 선박 운항 상황을 확인하세요.
            </li>

            <li>
              ✅ 포구는 주민들의 생활 및 작업 공간이므로
              통행이나 작업에 방해가 되지 않도록 배려해 주세요.
            </li>

            <li>
              ✅ 포구 주변은 바람이 강할 수 있어 가벼운
              바람막이를 준비하면 좋습니다.
            </li>

            <li>
              ✅ 물에 젖은 바닥이나 암반은 미끄러울 수 있으므로
              걷기 편한 신발을 추천합니다.
            </li>

            <li>
              ✅ 방파제 끝이나 위험한 해안으로 사진 촬영을 위해
              무리하게 이동하지 마세요.
            </li>
          </ul>
        </section>

        {/* 추천 여행자 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            💙 이런 여행자에게 추천해요
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🏝️ 섬 여행을 좋아한다면
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                관광지뿐 아니라 작은 포구와 마을까지 둘러보며
                섬 자체의 분위기를 느끼고 싶은 여행자에게 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                📷 사진을 좋아한다면
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                포구와 바다, 마을이 함께 보이는 소청도의
                자연스러운 모습을 사진으로 남겨보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🚶 천천히 여행한다면
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                정해진 관광지만 빠르게 이동하기보다 소청도를
                여유 있게 둘러보는 일정에 잘 어울립니다.
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
            예동포구를 방문한다면 소청도의 다른 여행지도
            함께 연결해서 둘러보세요.
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
                소청도의 바다 풍경과 함께 둘러보는 대표 여행지
              </p>
            </Link>

            <Link
              href="/place/tapdong-port"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                탑동포구·인사하는 바위 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                포구와 독특한 바위 풍경을 함께 만나는 곳
              </p>
            </Link>

            <Link
              href="/place/socheong-catholic"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                천주교회·김대건 신부상 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                소청도의 역사와 종교문화를 살펴보는 여행지
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 예동포구 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                Q. 예동포구는 어떤 곳인가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                소청도의 작은 포구와 주변 섬마을 풍경을
                함께 둘러볼 수 있는 곳입니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 다른 관광지와 함께 둘러볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                소청도등대와 탑동포구 등 소청도의 다른 장소와
                함께 여행 동선을 구성해 볼 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 방문할 때 주의할 점은 무엇인가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                포구는 주민들의 생활 공간이기도 합니다.
                현장 작업을 방해하지 않도록 배려하고
                해안과 방파제에서는 안전에 주의해 주세요.
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
            포구의 이용 여건은 날씨와 파도, 현지 상황에 따라
            달라질 수 있습니다. 주민 생활공간과 작업구역을
            배려하고 현장의 출입 및 안전 안내를 우선해 주세요.
            파도가 높거나 바람이 강한 날에는 방파제와 해안에
            무리하게 접근하지 마세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="yedong-port"
        placeName="예동포구"
      />
    </PlaceTemplate>
  );
}