import Image from "next/image";
import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 농여해변 여행 가이드 | 바위 풍경·산책·사진 포인트",
  description:
    "대청도 농여해변 여행 가이드. 넓은 해변과 독특한 바위 풍경, 나이테바위, 사진 포인트, 방문 팁과 주변 대청도 관광지를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="농여해변"
      subtitle="넓게 펼쳐진 해변과 독특한 바위 풍경을 함께 만날 수 있는 대청도의 해안 명소"
      image="/images/nongyeo-beach.png"
      badges={["대청도", "해변", "바위풍경", "사진여행"]}
      quickFacts={[
        ["추천 대상", "해변 · 자연 · 사진여행"],
        ["관람 포인트", "해변 · 바위 풍경"],
        ["즐길거리", "산책 · 풍경 감상 · 사진"],
        ["준비물", "편한 신발 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🌊 농여해변은 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              농여해변은 대청도의 넓은 해변 풍경과 독특한
              바위 모습을 함께 감상할 수 있는 해안 여행지입니다.
            </p>

            <p>
              모래사장을 따라 천천히 걸으며 바다를 감상하는
              것뿐 아니라 해안 곳곳에서 만나는 바위 풍경을
              살펴보는 재미도 있습니다.
            </p>

            <p>
              해변과 바위, 바다가 한 화면에 어우러지는
              풍경 덕분에 대청도 자연여행과 사진 촬영을
              함께 즐기고 싶은 여행자에게 잘 어울립니다.
            </p>
          </div>
        </section>

        {/* 특징 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">
            해변과 바위가 만드는 풍경
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🪨 농여해변에서 눈여겨볼 자연 풍경
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              농여해변을 방문했다면 넓은 바다만 바라보기보다
              해안 주변의 바위와 모래사장이 어떻게 어우러지는지도
              천천히 살펴보세요.
            </p>

            <p>
              바다와 하늘, 모래사장에 바위 풍경까지 더해져
              일반적인 모래 해변과는 또 다른 분위기의
              대청도 해안 풍경을 만날 수 있습니다.
            </p>

            <p>
              날씨와 파도, 시간대에 따라 풍경의 인상이
              달라질 수 있어 여행 당시의 모습을 사진으로
              기록해 두는 것도 좋습니다.
            </p>
          </div>
        </section>

        {/* 두 번째 사진 */}
        <section className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/nongyeo-beach-view.png"
              alt="대청도 농여해변의 해변과 바위 풍경"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <p className="text-sm leading-7 text-gray-600">
              농여해변에서는 모래사장과 바다뿐 아니라 주변의
              바위 풍경까지 함께 살펴보면 더욱 다양한 모습을
              발견할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 농여해변에서 놓치지 말 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-yellow-50 p-6">
              <h3 className="text-xl font-extrabold">
                🏖️ 넓은 해변
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                탁 트인 해변을 바라보며 천천히 걸어보세요.
                대청도의 여유로운 바다 풍경을 즐길 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-6">
              <h3 className="text-xl font-extrabold">
                🪨 바위 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                해안 주변에서 만나는 다양한 바위 모습도
                농여해변을 둘러볼 때 눈여겨볼 포인트입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다와 해안선
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                모래사장과 바위, 바다가 이어지는 해안선을
                넓게 바라보며 풍경을 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 사진 여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위를 앞쪽에 두고 바다를 함께 촬영하면
                농여해변의 특징을 살린 사진을 남길 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🥾 농여해변 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 방문 전 날씨와 파도 등 현지 상황을 확인하세요.
            </li>

            <li>
              ✅ 바위 주변은 젖어 있거나 미끄러운 곳이 있을 수
              있으므로 걷기 편한 신발을 준비하세요.
            </li>

            <li>
              ✅ 바닷물이 들어오는 상황을 고려해 해안 깊숙한
              곳으로 무리하게 이동하지 마세요.
            </li>

            <li>
              ✅ 대청도는 바람이 강한 날이 있을 수 있으므로
              가벼운 바람막이를 준비하면 좋습니다.
            </li>

            <li>
              ✅ 자연물과 바위 등을 훼손하지 말고
              쓰레기는 되가져가 주세요.
            </li>
          </ul>
        </section>

        {/* 사진 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 농여해변 사진 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🪨 바위와 바다
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위를 앞쪽에 두고 바다와 하늘을 함께
                담으면 농여해변의 특징이 잘 드러납니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🏖️ 넓은 해변
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                해변을 넓게 촬영하면 모래사장과 바다가
                이어지는 시원한 공간감을 표현할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🚶 여행자와 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                넓은 자연 풍경 속에 인물을 작게 배치하면
                대청도의 광활한 해안 분위기를 담기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 나이테바위 연결 */}
        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-8 md:p-10">
          <p className="font-bold text-sky-700">
            농여해변과 함께 보는 명소
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🪨 나이테바위도 함께 확인하세요
          </h2>

          <p className="mt-5 leading-8 text-gray-700">
            농여해변을 둘러볼 때 독특한 바위 풍경에도
            관심이 있다면 나이테바위 페이지도 함께 확인해 보세요.
            해변 여행과 자연 관찰을 함께 계획하는 데 도움이 됩니다.
          </p>

          <Link
            href="/place/tree-ring-rock"
            className="mt-6 inline-block rounded-full bg-gray-900 px-6 py-3 font-bold text-white transition hover:bg-sky-600"
          >
            나이테바위 자세히 보기 →
          </Link>
        </section>

        {/* 주변 관광지 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 대청도에서 함께 둘러보기
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            농여해변을 중심으로 대청도의 해변과 자연 명소를
            함께 연결해 여행해 보세요.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/tree-ring-rock"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                나이테바위 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                농여해변과 함께 살펴보기 좋은 독특한 바위 풍경
              </p>
            </Link>

            <Link
              href="/place/miadong-beach"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                미아동해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                넓은 모래사장과 바다를 즐기는 대청도 해변
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
                대청도의 독특한 모래 풍경을 만나는 장소
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 농여해변 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold">
                Q. 농여해변은 어떤 점이 볼거리인가요?
              </h3>
              <p className="mt-2 leading-7">
                넓은 해변과 바다 풍경뿐 아니라 해안에서
                만나는 바위 풍경을 함께 살펴볼 수 있다는 점이
                매력입니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 사진 찍기 좋은 곳인가요?
              </h3>
              <p className="mt-2 leading-7">
                해변과 바위, 바다를 한 화면에 담을 수 있어
                대청도의 자연 풍경을 사진으로 기록하기 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 방문할 때 특별히 주의할 점이 있나요?
              </h3>
              <p className="mt-2 leading-7">
                날씨와 파도 등 현지 상황을 확인하고 바위
                주변에서는 미끄럼과 바닷물에 특히 주의하세요.
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
            달라질 수 있습니다. 바위 주변과 해안 가장자리에서는
            미끄럼과 파도에 주의하고 현장의 안전 안내를
            우선해 주세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="nongyeo-beach"
        placeName="농여해변"
      />
    </PlaceTemplate>
  );
}