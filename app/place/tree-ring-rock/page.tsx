import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 나이테바위 여행 가이드 | 농여해변과 함께 보는 해안 바위",
  description:
    "대청도 나이테바위 여행 가이드. 농여해변과 함께 둘러보기 좋은 독특한 해안 바위의 풍경, 사진 포인트, 방문 팁과 주변 관광지를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="나이테바위"
      subtitle="농여해변과 함께 만나는 독특한 무늬의 대청도 해안 바위"
      image="/images/nongyeo-beach.png"
      badges={["대청도", "지질여행", "해안풍경", "사진명소"]}
      quickFacts={[
        ["추천 대상", "자연여행 · 사진 · 가족"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 방법", "농여해변과 함께 천천히 둘러보기"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🪨 나이테바위는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              나이테바위는 대청도 농여해변과 함께 둘러보기 좋은
              독특한 모습의 해안 바위입니다. 바위 표면에 보이는
              여러 겹의 무늬가 나무의 나이테를 떠올리게 해
              나이테바위라는 이름으로 불립니다.
            </p>

            <p>
              바위만 가까이에서 살펴보기보다 농여해변의 넓은
              해안 풍경과 함께 바라보면 대청도 자연경관의
              분위기를 더욱 잘 느낄 수 있습니다.
            </p>

            <p>
              대청도 여행 중 농여해변을 방문한다면 주변 해안
              풍경과 함께 천천히 살펴보세요. 자연과 지질 풍경을
              좋아하는 여행자라면 사진으로 기록하기에도 좋습니다.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 나이테바위에서 살펴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-100 p-6">
              <h3 className="text-xl font-extrabold">
                🪨 독특한 바위 무늬
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위에 나타난 여러 겹의 무늬를 가까이에서
                살펴보는 것이 나이테바위 관람의 핵심입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 농여해변 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                나이테바위뿐 아니라 주변에 펼쳐진 농여해변과
                바다 풍경을 함께 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🔍 자연 관찰
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                대청도의 해안 풍경을 가까이에서 살펴보며
                섬이 가진 다양한 자연 모습을 관찰할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 사진 여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위의 무늬를 가까이 담거나 바다와 해변을
                함께 넣어 대청도의 자연 풍경을 기록해 보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 나이테바위 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 농여해변을 방문할 때 함께 둘러보는 동선으로
              계획하면 좋습니다.
            </li>

            <li>
              ✅ 해안과 바위 주변은 미끄러울 수 있으므로
              걷기 편한 운동화를 준비하세요.
            </li>

            <li>
              ✅ 바람이 강한 날에는 체감온도가 낮아질 수 있어
              가벼운 바람막이를 챙기는 것이 좋습니다.
            </li>

            <li>
              ✅ 파도가 높거나 기상이 좋지 않은 날에는
              바위와 해안 가까이 무리하게 접근하지 마세요.
            </li>

            <li>
              ✅ 자연 지형을 훼손하거나 바위에 글씨를 쓰는
              행동은 하지 말아 주세요.
            </li>
          </ul>
        </section>

        {/* 사진 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 이렇게 사진을 남겨보세요
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🔎 무늬 가까이
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                나이테처럼 보이는 바위의 무늬가 잘 드러나도록
                가까운 거리에서 사진을 남겨보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🌊 해변과 함께
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                농여해변과 바다를 함께 담으면 대청도의
                넓은 해안 풍경을 표현하기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ⚠️ 안전한 위치에서
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                사진을 위해 젖은 암반이나 파도가 닿는 곳으로
                무리하게 이동하지 마세요.
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
            나이테바위와 함께 대청도의 해변과 전망 명소를
            연결해서 둘러보세요.
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
                나이테바위와 함께 둘러보기 좋은 대청도 해변
              </p>
            </Link>

            <Link
              href="/place/jiduri-beach"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                지두리해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 또 다른 해변 풍경을 만나는 여행지
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
                대청도 여행에서 전망과 해넘이를 즐기는 장소
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 나이테바위 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                Q. 농여해변과 같이 볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                나이테바위는 농여해변과 함께 둘러보는 여행
                동선으로 계획하기 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 어떤 여행자에게 추천하나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                대청도의 해안 풍경과 독특한 자연 지형,
                사진 촬영을 좋아하는 여행자에게 잘 어울립니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 방문할 때 무엇을 주의해야 하나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                해안의 바위는 젖으면 미끄러울 수 있습니다.
                날씨와 파도 상태를 확인하고 안전한 곳에서
                관람해 주세요.
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
            해안의 접근 여건은 날씨와 파도 등에 따라 달라질 수
            있습니다. 현장 안내를 우선하고 파도가 높거나 바람이
            강한 날에는 위험한 암반이나 해안에 무리하게 접근하지
            마세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="tree-ring-rock"
        placeName="나이테바위"
      />
    </PlaceTemplate>
  );
}