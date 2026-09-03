import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령 점박이물범 생태관광체험센터 | 생태·가족여행 가이드",
  description:
    "백령 점박이물범 생태관광체험센터의 전시와 생태 체험, 점박이물범 이야기, 가족여행 팁과 함께 둘러보기 좋은 관광지를 소개합니다.",
};

export default function SpottedSealCenterPage() {
  return (
    <PlaceTemplate
      title="백령 점박이물범 생태관광체험센터"
      subtitle="백령도의 점박이물범과 해양 생태를 배우고 자연보호의 의미까지 함께 알아보는 생태관광 공간"
      image="/images/spotted-seal-center.jpg"
      badges={["점박이물범", "생태관광", "가족여행", "자연교육"]}
      quickFacts={[
        ["추천 대상", "가족 · 아이와 함께 · 자연여행"],
        ["추천 시간", "약 1시간"],
        ["관람 방법", "전시 · 체험 · 생태 이해"],
        ["함께 보기", "하늬해안"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🦭 점박이물범 생태관광체험센터는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              백령 점박이물범 생태관광체험센터는 백령도의 대표적인
              해양생물인 점박이물범과 주변 해양 생태를 이해해 볼 수 있는
              생태관광 공간입니다.
            </p>

            <p>
              백령도의 바다와 해안만 둘러보는 여행에서 한 걸음 더 나아가
              이곳에 어떤 야생동물이 살아가고 있는지 알아볼 수 있다는
              점에서 의미가 있습니다.
            </p>

            <p>
              특히 아이와 함께하는 가족여행이라면 전시와 생태 이야기를
              살펴본 뒤 실제 백령도의 해안 풍경까지 연결해서 둘러보는
              일정으로 구성하기 좋습니다.
            </p>
          </div>
        </section>

        {/* 관람 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 꼭 살펴볼 생태 이야기
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🦭 점박이물범
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                백령도와 점박이물범이 어떤 관계를 가지고 있는지
                전시와 설명을 통해 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 백령도의 바다
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                점박이물범뿐 아니라 야생동물이 살아가는 백령도의
                바다와 해안 환경에도 관심을 가져보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌿 자연보호
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                야생동물을 관찰할 때 필요한 거리와 자연을 보호하는
                여행 방법에 대해서도 함께 생각해 볼 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-extrabold">
                👨‍👩‍👧 가족 생태여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                아이와 함께라면 단순히 전시를 보는 것에서 끝내지 말고
                백령도의 자연과 야생동물에 대해 이야기를 나눠보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 추천 관람 순서 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <h2 className="text-3xl font-black">
            🚶 이렇게 둘러보세요
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-emerald-600">
                STEP 1
              </p>
              <h3 className="mt-2 text-xl font-extrabold">
                점박이물범 알아보기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                먼저 점박이물범과 백령도의 해양 생태에 관한
                내용을 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-emerald-600">
                STEP 2
              </p>
              <h3 className="mt-2 text-xl font-extrabold">
                전시·체험 둘러보기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                전시 설명을 천천히 읽으며 자연보호와
                생태관광의 의미도 함께 알아보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-emerald-600">
                STEP 3
              </p>
              <h3 className="mt-2 text-xl font-extrabold">
                하늬해안 연결하기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                관람 후 하늬해안까지 둘러보면 백령도의
                실제 해안 생태 풍경과 연결해 볼 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 물범 관찰 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🔭 점박이물범을 만나고 싶다면
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              점박이물범은 야생동물이기 때문에 백령도에 왔다고 해서
              항상 볼 수 있는 것은 아닙니다. 자연환경과 시기,
              현장 상황에 따라 관찰 여부가 달라질 수 있습니다.
            </p>

            <p>
              실제 해안에서 야생동물을 발견했다면 가까이 접근하기보다
              충분한 거리를 두고 조용히 관찰하는 것이 좋습니다.
            </p>

            <p>
              망원경이 있다면 멀리 있는 동물을 관찰할 때 도움이 되며,
              자연을 방해하지 않는 방식으로 바라보는 것이
              백령도 생태여행의 중요한 부분입니다.
            </p>
          </div>
        </section>

        {/* 여행 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 생태관광체험센터 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 하늬해안과 함께 방문하면 생태관광 코스로
              구성하기 좋습니다.
            </li>

            <li>
              ✅ 시설 운영시간과 휴관 여부는 방문 전에
              최신 안내를 확인해 주세요.
            </li>

            <li>
              ✅ 점박이물범은 야생동물이므로 실제 바다에서
              항상 볼 수 있는 것은 아닙니다.
            </li>

            <li>
              ✅ 어린이와 함께라면 전시 내용을 천천히 살펴보며
              생태보호에 대해 이야기해 보세요.
            </li>

            <li>
              ✅ 야외 생태관찰을 함께 계획한다면 망원경과
              바람막이를 준비하면 좋습니다.
            </li>
          </ul>
        </section>

        {/* 내부 링크 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 함께 가기 좋은 생태·자연 코스
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            아래 관광지를 누르면 해당 상세 페이지로 이동합니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/hani"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                하늬해안 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                점박이물범과 백령도의 해안 생태를 함께
                만나볼 수 있는 자연 코스
              </p>
            </Link>

            <Link
              href="/place/dragon"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                용틀임바위 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                독특한 바위와 백령도의 해안 풍경을 함께
                살펴보는 자연 명소
              </p>
            </Link>

            <Link
              href="/place/sajabawi"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                사자바위 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                자연이 만든 독특한 바위와 해안 풍경을
                함께 즐겨보는 코스
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 점박이물범 생태관광체험센터 FAQ
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                Q. 아이와 함께 가기 좋은가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                백령도의 점박이물범과 해양 생태를 알아볼 수 있어
                가족 생태여행 코스로 활용하기 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 센터에 가면 실제 점박이물범을 볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                센터에서는 점박이물범과 생태에 관한 내용을
                알아볼 수 있습니다. 야생 점박이물범의 실제 관찰은
                자연환경과 시기 등에 따라 달라질 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 어디와 함께 둘러보면 좋나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                점박이물범과 백령도의 해안 생태를 연결해서
                살펴보고 싶다면 하늬해안을 함께 둘러보세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 운영시간은 항상 같은가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                운영시간과 휴관 여부는 변경될 수 있으므로
                방문 전에 최신 안내를 확인해 주세요.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 전 확인 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            ⚠️ 방문 전 확인
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            시설 운영시간과 휴관일, 체험 가능 여부는 현장 상황에
            따라 달라질 수 있습니다. 방문 전 최신 안내를 확인하고,
            야외에서 야생동물을 관찰할 때는 충분한 거리를 유지해 주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="spotted-seal-center"
        placeName="백령 점박이물범 생태관광체험센터"
      />
    </PlaceTemplate>
  );
}