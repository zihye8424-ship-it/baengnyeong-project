import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "소청도 주상절리 여행 가이드 | 지질·해안 풍경·방문 팁",
  description:
    "소청도 주상절리 여행 가이드. 소청도의 암석과 해안 지형을 살펴보는 지질여행 포인트와 사진 촬영, 방문 준비사항, 함께 둘러보기 좋은 장소를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="소청도 주상절리"
      subtitle="소청도의 암석과 해안 지형을 살펴보는 지질여행 포인트"
      image="/images/stromatolite.png"
      badges={["소청도", "지질여행", "암석관찰", "자연학습"]}
      quickFacts={[
        ["추천 대상", "지질 · 자연 · 사진여행"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 방법", "안전한 위치에서 지형 관찰"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🪨 소청도 주상절리는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              소청도 주상절리는 섬의 암석과 해안 지형을 살펴보며
              자연이 만들어 낸 독특한 경관을 감상할 수 있는
              지질여행 포인트입니다.
            </p>

            <p>
              소청도 여행은 바다 풍경뿐 아니라 다양한 암석과
              해안 지형을 관찰하는 재미도 있습니다. 풍경 전체를
              바라본 뒤 암석의 모양과 배열을 천천히 살펴보세요.
            </p>

            <p>
              자연 지형은 사진으로 보는 것과 현장에서 바라보는
              느낌이 다릅니다. 주변 바다와 암석을 함께 바라보면
              소청도의 자연환경을 보다 입체적으로 느낄 수 있습니다.
            </p>
          </div>
        </section>

        {/* 관찰 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🔎 주상절리에서 살펴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-extrabold">
                🪨 암석의 형태
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                멀리서 전체적인 지형을 바라본 뒤 암석이 만들어
                내는 형태와 표면을 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 암석과 바다
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                암석만 보는 것보다 주변 바다와 해안선을 함께
                바라보면 소청도의 지질 경관을 더 넓게 볼 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌍 자연학습 여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                아이와 함께 방문한다면 암석의 색과 모양을 관찰하며
                자연과 지질에 관심을 가져보는 여행으로 구성해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 지질 풍경 사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                암석을 확대해서 찍는 사진과 바다까지 함께 담는
                풍경 사진을 각각 남겨보는 것도 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 관람 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🥾 주상절리 관람 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 암석 지형은 안전한 위치에서 관찰하는 것이 가장 중요합니다.
            </li>
            <li>
              ✅ 바위나 젖은 지면은 미끄러울 수 있으므로 운동화처럼
              걷기 편한 신발을 준비하세요.
            </li>
            <li>
              ✅ 사진 촬영을 위해 절벽이나 위험한 암반 가까이
              접근하지 마세요.
            </li>
            <li>
              ✅ 해안에서는 바람과 파도 상황을 수시로 확인해 주세요.
            </li>
            <li>
              ✅ 현장에 출입 제한이나 안전 안내가 있다면 반드시
              해당 안내를 따라주세요.
            </li>
          </ul>
        </section>

        {/* 자연 보호 */}
        <section className="rounded-3xl bg-emerald-50 p-8 md:p-10">
          <h2 className="text-3xl font-black text-emerald-950">
            🌿 자연 그대로 감상해 주세요
          </h2>

          <div className="mt-5 space-y-4 leading-8 text-emerald-950">
            <p>
              지질 명소는 오랜 시간 자연이 만들어 낸 풍경입니다.
              암석을 훼손하거나 떼어 가져가기보다 현장에서 눈으로
              관찰하고 사진으로 기록해 주세요.
            </p>

            <p>
              주변에 쓰레기를 남기지 않고 정해진 이동 공간을
              이용하면 소청도의 자연환경을 보호하는 데 도움이 됩니다.
            </p>
          </div>
        </section>

        {/* 함께 둘러보기 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 소청도에서 함께 둘러보기
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            주상절리와 함께 소청도의 자연과 역사문화 명소도
            둘러보세요.
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
                소청도의 바다와 섬 풍경을 바라보는 여행지
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
                소청도의 종교와 생활문화를 살펴보는 곳
              </p>
            </Link>

            <Link
              href="/place/nohwa-port"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                노화동포구 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                바다와 섬마을의 생활 풍경이 만나는 작은 포구
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 소청도 주상절리 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                Q. 아이와 함께 둘러봐도 되나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                자연과 암석을 관찰하는 여행으로 활용할 수 있습니다.
                다만 해안과 암석 주변에서는 아이가 위험한 곳에
                접근하지 않도록 보호자가 각별히 주의해 주세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 사진 찍을 때 주의할 점은 무엇인가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                좋은 촬영 위치를 찾기 위해 위험한 바위나 절벽
                가까이 이동하지 말고 안전한 장소에서 촬영하세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 방문 전에 무엇을 확인해야 하나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                소청도 선박 운항과 기상 상황을 확인하고 현장
                접근 및 출입 안내가 있는 경우 해당 안내를 우선해 주세요.
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
            섬의 해안과 암석 지형은 날씨와 파도에 따라 접근
            여건이 달라질 수 있습니다. 기상이 좋지 않을 때는
            무리하게 접근하지 말고 현장의 출입 통제와 안전 안내를
            가장 우선해 주세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="socheong-columnar-joint"
        placeName="소청도 주상절리"
      />
    </PlaceTemplate>
  );
}