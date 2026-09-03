import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 옥죽동 해안사구 여행 가이드 | 모래사막·지질명소",
  description:
    "대청도 옥죽동 해안사구의 형성과정과 모래언덕, 지질적 특징, 사진 포인트, 방문 팁과 함께 둘러보기 좋은 대청도 관광지를 소개합니다.",
};

export default function OkjukSandDunePage() {
  return (
    <PlaceTemplate
      title="옥죽동 해안사구"
      subtitle="바닷바람이 옮긴 모래가 쌓여 만들어진 대청도의 독특한 해안사구"
      image="/images/okjuk-sand-dune.png"
      badges={["대청도 대표 자연명소", "해안사구", "지질명소", "사진 명소"]}
      quickFacts={[
        ["추천 대상", "가족 · 자연 · 지질 · 사진"],
        ["핵심 풍경", "해안사구 · 모래언덕"],
        ["관람 방법", "산책 · 지질관찰 · 사진촬영"],
        ["준비물", "편한 신발 · 모자 · 바람막이"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <p className="font-bold text-amber-600">
            대청도의 모래가 만든 풍경
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🏜️ 옥죽동 해안사구는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              옥죽동 해안사구는 대청도 북쪽 해안에 발달한
              모래언덕으로, 대청도의 독특한 자연환경을
              보여주는 대표적인 지질명소입니다.
            </p>

            <p>
              해변의 모래가 바람을 타고 육지 쪽으로 이동해
              오랜 시간 쌓이면서 사구가 형성되었습니다.
              일반적인 모래해변과는 다른 넓은 모래지형을
              볼 수 있다는 점이 특징입니다.
            </p>

            <p>
              바다와 모래, 바람이 함께 만들어낸 자연지형을
              직접 관찰할 수 있어 가족여행뿐 아니라
              자연·지질여행과 사진여행에도 잘 어울립니다.
            </p>
          </div>
        </section>

        {/* 지질 이야기 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">
            백과사전식으로 알아보기
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🌍 해안사구는 어떻게 만들어질까요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              해안사구는 해변의 모래가 바람에 의해 내륙 방향으로
              이동한 뒤 식생이나 지형 등에 가로막혀 오랜 시간
              쌓이면서 만들어지는 모래언덕입니다.
            </p>

            <p>
              옥죽동 해안사구에서는 모래언덕의 형태와 바람이
              만들어낸 모래 표면의 흔적 등을 살펴보며
              해안사구가 만들어지는 자연 과정을 생각해 볼 수 있습니다.
            </p>

            <p>
              대청도는 백령도·소청도와 함께
              백령·대청 국가지질공원에 포함되어 있으며,
              옥죽동 해안사구는 대청도의 자연과 지질환경을
              이해하는 데 도움이 되는 장소입니다.
            </p>

            <p className="rounded-2xl bg-white p-5 text-sm leading-7 text-gray-600">
              ※ 기본 관광·지질정보는 백령·대청 국가지질공원
              관광안내자료의 옥죽동 해안사구 소개 내용을
              바탕으로 정리했습니다.
            </p>
          </div>
        </section>

        {/* 관람 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 옥죽동 해안사구에서 꼭 볼 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-extrabold">
                🏜️ 넓은 모래언덕
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                해변과는 또 다른 느낌을 주는 넓은 모래언덕의
                형태와 곡선을 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌬️ 바람이 만든 흔적
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                날씨와 현장 상태에 따라 모래 표면에서
                바람이 만들어낸 다양한 무늬를 관찰해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌿 사구의 식생
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                모래지형과 주변 식생이 함께 만들어내는
                대청도의 자연 풍경을 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 주변 자연경관
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                모래언덕뿐 아니라 주변 산지와 해안이
                연결되는 풍경도 함께 감상해 보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 사진 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 옥죽동 해안사구 사진 팁
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                모래 능선 활용
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                모래언덕의 부드러운 곡선이 보이도록
                구도를 잡아 촬영해 보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                넓은 풍경 담기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                모래언덕과 주변 자연환경이 함께 보이도록
                넓게 촬영하면 장소의 특징이 잘 드러납니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                발자국 줄이기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                사진을 위해 보호구역이나 식생 구간으로
                들어가지 말고 지정된 동선에서 촬영하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 옥죽동 해안사구 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 바람이 강한 날에는 모래가 날릴 수 있어
              모자와 안경 등이 도움이 될 수 있습니다.
            </li>

            <li>
              ✅ 편하게 걸을 수 있는 신발을 준비하고
              현장의 탐방 동선을 따라 이동하세요.
            </li>

            <li>
              ✅ 사구 식생은 훼손되기 쉬우므로
              보호구역이나 출입이 제한된 곳에 들어가지 마세요.
            </li>

            <li>
              ✅ 햇빛이 강한 계절에는 생수와 모자,
              자외선 차단용품을 준비하는 것이 좋습니다.
            </li>

            <li>
              ✅ 바람과 날씨에 따라 현장 환경이 달라질 수 있으므로
              방문 당일 기상을 확인하세요.
            </li>
          </ul>
        </section>

        {/* 주변 관광지 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 함께 둘러볼 대청도 명소
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            옥죽동 해안사구와 다른 대청도 자연명소를 함께 둘러보면
            모래지형과 해안, 절벽 풍경을 다양하게 만날 수 있습니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/nongyeo-beach"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                농여해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 바다와 독특한 해안 풍경을
                함께 감상하기 좋은 자연 명소
              </p>
            </Link>

            <Link
              href="/place/miadong-beach"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                미아동해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도 북부의 해안 풍경을 여유롭게
                둘러보기 좋은 장소
              </p>
            </Link>

            <Link
              href="/place/seopungbaji"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                서풍받이 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                웅장한 해안 절벽과 서해 풍경을 만나는
                대청도의 대표 지질명소
              </p>
            </Link>
          </div>
        </section>

        {/* 추천 코스 */}
        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-8 md:p-10">
          <h2 className="text-3xl font-black">
            🚗 대청도 자연여행 코스
          </h2>

          <p className="mt-5 leading-8 text-gray-700">
            옥죽동 해안사구에서 모래지형을 살펴본 뒤
            농여해변과 미아동해변의 해안 풍경을 둘러보고,
            서풍받이에서 웅장한 절벽과 바다를 감상하면
            서로 다른 대청도의 자연환경을 비교하며 여행할 수 있습니다.
          </p>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 옥죽동 해안사구 자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold">
                Q. 옥죽동 해안사구는 그냥 모래사장인가요?
              </h3>
              <p className="mt-2 leading-7">
                해변 자체와는 다릅니다. 해변의 모래가 바람에 의해
                육지 방향으로 이동해 쌓이면서 만들어진
                모래언덕 지형이라는 점이 특징입니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 아이와 함께 가도 좋은가요?
              </h3>
              <p className="mt-2 leading-7">
                자연지형을 관찰할 수 있어 가족여행에도 잘 어울립니다.
                다만 보호가 필요한 지형이므로 현장의 탐방 안내와
                출입 제한을 지켜주세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 사진 찍기 좋은 곳인가요?
              </h3>
              <p className="mt-2 leading-7">
                모래언덕의 곡선과 넓은 자연 풍경이 특징적이어서
                대청도 자연여행 사진을 남기기 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 어디와 함께 둘러보면 좋나요?
              </h3>
              <p className="mt-2 leading-7">
                농여해변과 미아동해변을 함께 둘러보면
                대청도의 모래지형과 해안 풍경을 비교할 수 있고,
                서풍받이까지 연결하면 절벽 경관도 함께 볼 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 안전 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            ⚠️ 해안사구를 보호해 주세요
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            해안사구는 바람과 모래, 식생이 오랜 시간 만들어낸
            자연지형입니다. 현장의 출입 안내와 보호 규정을 지키고
            식생을 밟거나 모래지형을 훼손하지 않도록 주의해 주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="okjuk-sanddune"
        placeName="옥죽동 해안사구"
      />
    </PlaceTemplate>
  );
}