import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 하늬해변·점박이물범 여행 가이드 | 생태관광 명소",
  description:
    "백령도 하늬해변 여행 가이드. 점박이물범 관찰 시 알아둘 점과 해안 생태, 사진 촬영 팁, 자연보호 수칙과 주변 관광지를 확인하세요.",
};

export default function HaniPage() {
  return (
    <PlaceTemplate
      title="하늬해변 · 점박이물범"
      subtitle="백령도의 바다와 해안 생태를 바라보며 야생 점박이물범의 이야기를 만나는 생태여행지"
      image="/images/hani.jpg"
      badges={["백령도", "점박이물범", "생태관광", "자연여행"]}
      quickFacts={[
        ["추천 대상", "가족 · 자연여행 · 생태관찰"],
        ["관람 포인트", "점박이물범 · 해안 생태"],
        ["관람 방법", "안전한 거리에서 관찰"],
        ["준비", "망원경 · 카메라 · 바람막이"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🦭 하늬해변과 점박이물범
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              하늬해변은 백령도의 해안 풍경과 함께
              점박이물범 이야기를 만날 수 있는 생태여행지입니다.
            </p>

            <p>
              이곳을 찾을 때는 점박이물범을 반드시 볼 수 있는
              관광지라고 생각하기보다 백령도의 바다와 야생동물이
              살아가는 자연환경을 관찰하는 여행으로 생각하는 것이 좋습니다.
            </p>

            <p>
              점박이물범은 야생동물이기 때문에 날씨와 바다 상태,
              개체의 이동 등에 따라 보이지 않을 수 있습니다.
              물범이 보이지 않더라도 백령도의 해안 풍경과
              자연 생태를 천천히 살펴보세요.
            </p>
          </div>
        </section>

        {/* 생태여행 */}
        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-8 md:p-10">
          <p className="font-bold text-sky-700">
            백령도의 특별한 생태여행
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🦭 야생 점박이물범을 만난다면
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            야생동물을 관찰할 때 가장 중요한 것은 가까이 가는 것이
            아니라 충분한 거리를 두는 것입니다. 망원경이나 카메라의
            줌 기능을 이용하면 자연을 방해하지 않으면서 관찰하는 데
            도움이 됩니다.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            물범이 보이더라도 더 가까이 보기 위해 위험한 해안이나
            바위 쪽으로 이동하지 말고 안전한 위치에서 관찰하세요.
          </p>
        </section>

        {/* 관찰 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 하늬해변에서 살펴볼 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🦭 점박이물범
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                물범이 관찰된다면 가까이 접근하기보다
                망원경이나 줌 기능을 활용해 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 백령도의 바다
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                점박이물범뿐 아니라 넓게 펼쳐진 바다와
                해안 풍경 자체도 하늬해변의 볼거리입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌿 해안 생태
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                야생동물이 살아가는 자연환경을 함께 바라보며
                생태관광의 의미를 생각해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-extrabold">
                👨‍👩‍👧 가족 생태여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                아이와 함께 방문한다면 야생동물을 대하는 방법과
                자연보호에 대해 이야기해 보기 좋습니다.
              </p>
            </div>

          </div>
        </section>

        {/* 관찰법 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🔭 점박이물범 관찰 팁
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ① 먼저 눈으로 찾기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 주변을 천천히 살펴보고 야생동물의
                움직임이 있는지 관찰해 보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ② 망원경 활용하기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                망원경이 있다면 멀리 있는 동물을
                안전한 거리에서 관찰하는 데 도움이 됩니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ③ 기다림도 여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바로 보이지 않더라도 무리하게 이동하지 말고
                주변 자연 풍경을 함께 즐겨보세요.
              </p>
            </div>

          </div>
        </section>

        {/* 사진 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">
            사진여행 팁
          </p>

          <h2 className="mt-2 text-3xl font-black">
            📷 가까이 가지 않아도 좋은 사진
          </h2>

          <div className="mt-6 space-y-4 leading-8 text-gray-700">
            <p>
              점박이물범을 촬영하기 위해 가까이 접근하기보다는
              카메라의 줌 기능을 활용하세요.
            </p>

            <p>
              물범만 크게 찍는 사진뿐 아니라 바다와 해안 풍경을
              넓게 담으면 백령도의 자연환경 속에서 살아가는
              야생동물의 모습을 표현할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 생태 보호 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-8 md:p-10">
          <p className="font-bold text-amber-800">
            자연을 지키는 여행
          </p>

          <h2 className="mt-2 text-3xl font-black text-amber-950">
            🌿 점박이물범과 해안 생태 보호
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-amber-950">
            <li>
              • 야생동물을 보기 위해 무리하게 가까이 접근하지 마세요.
            </li>

            <li>
              • 큰 소리나 야생동물을 놀라게 할 수 있는 행동을 피해주세요.
            </li>

            <li>
              • 해안에 쓰레기를 남기지 말고 자연환경을 그대로 지켜주세요.
            </li>

            <li>
              • 출입 제한이나 생태보호 안내가 있다면 반드시 따라주세요.
            </li>
          </ul>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 하늬해변 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 점박이물범은 야생동물이므로 항상 볼 수 있는 것은 아닙니다.
            </li>

            <li>
              ✅ 망원경이 있다면 준비해 가는 것을 추천합니다.
            </li>

            <li>
              ✅ 바닷바람에 대비해 계절에 맞는 겉옷을 챙겨주세요.
            </li>

            <li>
              ✅ 바위와 해안 가장자리로 무리하게 접근하지 마세요.
            </li>

            <li>
              ✅ 강풍이나 높은 파도가 있는 날에는 안전을 가장 우선하세요.
            </li>
          </ul>
        </section>

        {/* 내부링크 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 함께 가기 좋은 코스
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            아래 관광지를 누르면 해당 관광지 상세 페이지로 이동합니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <Link
              href="/place/spotted-seal-center"
              className="block cursor-pointer rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                점박이물범 생태관광 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                백령도의 점박이물범과 생태 이야기를 더 알아보기
              </p>
            </Link>

            <Link
              href="/place/dragon"
              className="block cursor-pointer rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                용틀임바위 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                독특한 바위와 해안 풍경을 함께 만나는 자연 명소
              </p>
            </Link>

            <Link
              href="/place/kongdol"
              className="block cursor-pointer rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                콩돌해안 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                둥근 자갈과 파도 풍경이 인상적인 백령도 해안
              </p>
            </Link>

          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 하늬해변·점박이물범 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6 text-gray-700">

            <div>
              <h3 className="font-bold">
                Q. 하늬해변에 가면 점박이물범을 꼭 볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7">
                아니요. 야생동물이기 때문에 방문 시점의 자연환경과
                개체 이동 등에 따라 관찰되지 않을 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 망원경을 가져가는 것이 좋은가요?
              </h3>
              <p className="mt-2 leading-7">
                필수는 아니지만 야생동물을 안전한 거리에서
                관찰하는 데 도움이 됩니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 아이와 함께 가기 좋은가요?
              </h3>
              <p className="mt-2 leading-7">
                자연과 야생동물을 관찰하면서 생태보호의 중요성을
                이야기할 수 있어 가족 생태여행으로 의미가 있습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 물범이 보이지 않으면 볼 것이 없나요?
              </h3>
              <p className="mt-2 leading-7">
                점박이물범 관찰 여부와 관계없이 백령도의 바다와
                해안 풍경을 감상하며 자연환경을 살펴볼 수 있습니다.
              </p>
            </div>

          </div>
        </section>

        {/* 안전 */}
        <section className="rounded-3xl border border-red-200 bg-red-50 p-7">
          <h2 className="text-2xl font-black text-red-950">
            ⚠️ 야생동물 관찰과 해안 안전
          </h2>

          <p className="mt-4 leading-7 text-red-950">
            점박이물범을 보기 위해 위험한 바위나 해안 가장자리로
            접근하지 마세요. 야생동물과 충분한 거리를 유지하고,
            강풍·높은 파도·우천 또는 현장 출입 통제가 있을 때는
            안전 안내를 가장 우선해 주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="hani"
        placeName="하늬해변 · 점박이물범"
      />
    </PlaceTemplate>
  );
}