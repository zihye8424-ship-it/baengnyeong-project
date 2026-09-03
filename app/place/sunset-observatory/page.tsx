import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 해넘이전망대 여행 가이드 | 일몰·전망·사진 명소",
  description:
    "대청도 해넘이전망대 여행 가이드. 서해 방향의 탁 트인 전망과 일몰 풍경, 사진 포인트, 방문 시간 팁과 함께 둘러보기 좋은 대청도 관광지를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="해넘이전망대"
      subtitle="탁 트인 서해와 하늘이 물드는 순간을 바라보는 대청도의 일몰 전망 명소"
      image="/images/sunset-observatory.png"
      badges={["대청도", "해넘이", "전망", "사진명소"]}
      quickFacts={[
        ["추천 대상", "일몰 · 전망 · 사진여행"],
        ["추천 시간", "일몰 전 여유 있게"],
        ["관람 포인트", "서해 전망 · 노을 · 하늘"],
        ["준비물", "바람막이 · 카메라 · 편한 신발"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🌅 해넘이전망대는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              해넘이전망대는 대청도에서 탁 트인 바다와
              해 질 무렵의 풍경을 감상하기 좋은 전망 명소입니다.
            </p>

            <p>
              낮에는 시원하게 펼쳐진 바다와 주변 자연을
              바라볼 수 있고, 해가 기울기 시작하면 하늘과
              바다의 분위기가 조금씩 달라지는 모습을 즐길 수 있습니다.
            </p>

            <p>
              특히 대청도 여행의 하루를 마무리하면서
              조용히 풍경을 감상하거나 노을 사진을 남기고 싶은
              여행자에게 잘 어울리는 장소입니다.
            </p>
          </div>
        </section>

        {/* 시간대 */}
        <section className="rounded-3xl border border-orange-100 bg-orange-50 p-8 md:p-10">
          <p className="font-bold text-orange-700">
            해 질 무렵 만나는 대청도
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🌇 시간에 따라 달라지는 풍경
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">
                ☀️ 해가 지기 전
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                밝은 시간에는 바다와 하늘, 주변 자연 풍경을
                넓게 바라보며 전망대를 천천히 둘러보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">
                🌅 해 질 무렵
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                해가 낮아지면서 하늘과 바다의 색이 변하는
                모습을 감상해 보세요. 날씨에 따라 매번
                다른 분위기를 만날 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">
                🌙 해가 진 뒤
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                일몰 후에는 주변이 빠르게 어두워질 수 있으므로
                풍경 감상 후 이동할 때 특히 주의하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 해넘이전망대에서 놓치지 말 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 탁 트인 바다 전망
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                시야가 좋은 날에는 바다와 하늘이 이어지는
                시원한 전망을 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌅 해넘이 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                해가 기울면서 달라지는 하늘의 색과 바다의
                분위기는 이곳에서 기대해볼 만한 풍경입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-yellow-50 p-6">
              <h3 className="text-xl font-extrabold">
                ☁️ 하늘과 구름
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                노을은 구름과 날씨에 따라 전혀 다른 모습으로
                나타납니다. 하늘 전체의 변화도 함께 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-rose-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 여행 사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 하늘을 배경으로 여행자를 함께 담으면
                대청도의 일몰 여행을 기억하기 좋은 사진을
                남길 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ⏰ 해넘이전망대 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 방문하는 날의 일몰 시각을 미리 확인하세요.
            </li>

            <li>
              ✅ 일몰 직전에 도착하기보다 여유 있게 도착해
              밝을 때 주변과 이동 동선을 확인하는 것이 좋습니다.
            </li>

            <li>
              ✅ 노을은 날씨와 구름 상태에 따라 보이는 모습이
              크게 달라질 수 있습니다.
            </li>

            <li>
              ✅ 전망대 주변은 바람이 강할 수 있으므로
              계절에 맞는 겉옷이나 바람막이를 준비하세요.
            </li>

            <li>
              ✅ 해가 진 뒤에는 주변이 어두워질 수 있으므로
              이동할 때 발밑과 차량 이동에 주의하세요.
            </li>
          </ul>
        </section>

        {/* 사진 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 해넘이전망대 사진 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🌅 하늘을 넓게
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                노을이 아름다운 날에는 하늘이 사진에서
                넓게 보이도록 구도를 잡아보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🌊 바다와 수평선
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 하늘의 경계를 함께 담으면
                전망대의 탁 트인 분위기를 표현하기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🧍 노을과 인물
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                해 질 무렵에는 밝은 하늘을 배경으로 인물을
                배치해 실루엣 느낌의 여행 사진도 시도해 보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 일정 팁 */}
        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-8 md:p-10">
          <p className="font-bold text-sky-700">
            대청도 여행 일정 팁
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🗺️ 하루 일정의 마지막 코스로
          </h2>

          <p className="mt-5 leading-8 text-gray-700">
            해넘이전망대는 일몰 시간에 맞춰 방문하는 것이
            좋은 만큼 낮에는 대청도의 해변과 다른 자연 명소를
            둘러보고 하루 일정의 마지막에 배치하는 방식으로
            여행 동선을 계획해 볼 수 있습니다.
          </p>
        </section>

        {/* 주변 관광지 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 대청도에서 함께 둘러보기
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            낮에는 대청도의 자연 명소를 둘러보고
            해 질 무렵 해넘이전망대로 이동해 보세요.
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
                대청도의 해변 풍경과 산책을 즐기는 곳
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
                대청도의 독특한 모래 풍경을 만나는 자연 명소
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
                대청도의 산과 바다를 바라보는 또 다른 전망 명소
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 해넘이전망대 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold">
                Q. 언제 방문하는 것이 좋은가요?
              </h3>
              <p className="mt-2 leading-7">
                해넘이 풍경을 보고 싶다면 방문하는 날의
                일몰 시각을 확인하고 그보다 여유 있게
                도착하는 것이 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 날씨가 흐리면 노을을 볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7">
                일몰 풍경은 날씨와 구름 상태에 따라 크게
                달라집니다. 흐린 날에는 선명한 해넘이를
                보기 어려울 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 일몰 후에는 무엇을 주의해야 하나요?
              </h3>
              <p className="mt-2 leading-7">
                해가 진 뒤에는 주변이 빠르게 어두워질 수
                있으므로 이동할 때 발밑과 주변 상황을
                확인하며 안전하게 이동하세요.
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
            일몰과 전망은 날씨와 구름, 현지 기상 상황에 따라
            달라질 수 있습니다. 바람이 강하거나 기상이 좋지
            않은 날에는 현장 안전 안내를 우선하고, 해가 진
            뒤에는 어두운 이동 구간을 특히 주의하세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="sunset-observatory"
        placeName="해넘이전망대"
      />
    </PlaceTemplate>
  );
}