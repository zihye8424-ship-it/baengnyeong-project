import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 콩돌해안 여행 가이드 | 백령도의 모든 정보",
  description:
    "파도가 다듬은 둥근 자갈로 유명한 백령도 콩돌해안의 산책, 사진 포인트, 방문 주의사항과 주변 코스를 확인하세요.",
};

export default function KongdolPage() {
  return (
    <PlaceTemplate
      title="콩돌해안"
      subtitle="파도가 오랜 시간 다듬어 만든 콩돌과 푸른 바다가 어우러진 백령도의 특별한 해안"
      image="/images/kongdol.jpg"
      badges={["천연 해안", "사진 명소", "산책 코스"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 사진 여행"],
        ["추천 시간", "오전 ~ 일몰 전"],
        ["관람 방법", "도보 산책"],
        ["준비물", "운동화 · 카메라"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            🪨 콩돌해안은 어떤 곳인가요?
          </h2>

          <p className="mt-5 leading-8 text-gray-700">
            콩돌해안은 모래 대신 둥글게 다듬어진 자갈이 해안을
            가득 메우고 있는 백령도의 대표 자연 명소입니다.
            파도가 밀려왔다 빠질 때마다 콩돌이 부딪히며
            만들어내는 소리가 이곳만의 특별한 매력입니다.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            해안을 따라 천천히 걸으며 서해의 풍경을 감상하기 좋고,
            둥근 콩돌과 바다가 어우러진 백령도만의 특별한
            해안 풍경을 만날 수 있습니다.
          </p>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            📸 꼭 보고 느껴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">
                🪨 둥근 콩돌
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                크기와 색이 조금씩 다른 둥근 자갈이
                해안을 이루는 독특한 모습을 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">
                🌊 파도 소리
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                파도가 들어오고 빠져나갈 때 콩돌이 움직이며
                만들어내는 소리도 콩돌해안의 매력입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">
                🚶 해안 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                콩돌만 바라보기보다 바다와 하늘까지 함께
                바라보며 백령도의 해안 풍경을 즐겨보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">
                🌿 자연 그대로 보기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                콩돌과 해안의 자연물은 가져가지 않고
                현장에서 그대로 감상해 주세요.
              </p>
            </div>

          </div>
        </section>

        {/* 사진 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            📷 콩돌해안 사진 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ① 콩돌 가까이 담기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                둥근 모양과 서로 다른 질감이 보이도록
                콩돌을 가까이 촬영해 보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ② 바다와 함께 담기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                앞쪽에는 콩돌을 두고 뒤쪽에는 바다를 넣으면
                콩돌해안의 특징을 한 장에 담기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ③ 파도와 콩돌
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                안전한 거리에서 파도가 콩돌 사이로 들어오는
                모습을 함께 담아보세요.
              </p>
            </div>

          </div>
        </section>

        {/* 자연보호 */}
        <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
          <h2 className="text-3xl font-black">
            🌿 콩돌은 그대로 두고 오세요
          </h2>

          <p className="mt-5 leading-8 text-gray-700">
            콩돌은 콩돌해안의 특별한 풍경을 이루는 자연자원입니다.
            예쁜 돌을 발견하더라도 가져가기보다는 눈으로 감상하고
            사진으로 남겨주세요.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            여행자가 자연을 그대로 두고 돌아가는 작은 실천이
            콩돌해안의 풍경을 오래 지키는 데 도움이 됩니다.
          </p>
        </section>

        {/* 여행 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            🧭 콩돌해안 여행 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 콩돌 위는 모래사장보다 걷기 불편할 수 있으므로
              발을 잘 잡아주는 운동화를 추천합니다.
            </li>

            <li>
              ✅ 자갈 위에서는 뛰지 말고 천천히 이동하세요.
            </li>

            <li>
              ✅ 파도가 강한 날에는 물가 가까이 가지 말고
              충분한 안전거리를 유지하세요.
            </li>

            <li>
              ✅ 콩돌은 가져가지 말고 눈과 사진으로만 담아주세요.
            </li>

            <li>
              ✅ 아이와 함께 방문한다면 자갈 위에서 넘어지지 않도록
              보호자가 가까이에서 살펴주세요.
            </li>
          </ul>
        </section>

        {/* 내부 링크 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            🗺️ 함께 가기 좋은 코스
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            아래 관광지를 누르면 해당 관광지 상세 페이지로 이동합니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <Link
              href="/place/dragon"
              className="block rounded-2xl border-2 border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50 hover:shadow-lg"
            >
              <h3 className="text-lg font-extrabold">
                용틀임바위 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                독특한 기암과 해안 풍경을 함께 만나는 자연 명소
              </p>
            </Link>

            <Link
              href="/place/hani"
              className="block rounded-2xl border-2 border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50 hover:shadow-lg"
            >
              <h3 className="text-lg font-extrabold">
                하늬해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                점박이물범과 백령도의 해안 생태를 만나는 여행지
              </p>
            </Link>

            <Link
              href="/place/sagot"
              className="block rounded-2xl border-2 border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-50 hover:shadow-lg"
            >
              <h3 className="text-lg font-extrabold">
                사곶해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                넓은 해변 풍경을 만날 수 있는 백령도의 대표 관광지
              </p>
            </Link>

          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            ❓ 콩돌해안 자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-6">

            <div>
              <h3 className="text-lg font-bold">
                Q. 콩돌을 가져가도 되나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                콩돌은 해안의 자연경관을 이루는 자연자원이므로
                가져가지 말고 현장에서 그대로 감상해 주세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 아이와 함께 가기 좋은가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                함께 자연을 관찰하기 좋지만 자갈 위에서는
                넘어지지 않도록 천천히 이동하는 것이 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 콩돌해안에서는 무엇을 꼭 봐야 하나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                둥근 콩돌의 모습뿐 아니라 파도가 움직일 때
                들리는 자갈 소리도 함께 느껴보세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 비 오는 날에도 갈 수 있나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                젖은 자갈은 미끄러울 수 있고 파도가 강해질 수 있으므로
                날씨가 좋지 않을 때는 안전을 우선해 주세요.
              </p>
            </div>

          </div>
        </section>

        {/* 안전 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <p className="leading-7 text-amber-950">
            <strong>방문 전 확인:</strong> 섬 지역은 기상과 현장 상황에
            따라 이용 여건이 달라질 수 있습니다. 강풍이나 높은 파도가
            있는 날에는 현장 안전 안내를 우선해 주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="kongdol"
        placeName="콩돌해안"
      />
    </PlaceTemplate>
  );
}