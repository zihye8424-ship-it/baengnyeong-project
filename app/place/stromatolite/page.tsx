import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "소청도 스트로마톨라이트 여행 가이드 | 지질 경관·방문 팁",
  description:
    "소청도 스트로마톨라이트 여행 가이드. 독특한 지질 경관의 관찰 포인트, 자연유산 관람 시 주의사항, 사진 팁과 함께 둘러보기 좋은 소청도 관광지를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="스트로마톨라이트"
      subtitle="소청도의 독특한 지질 경관을 가까이에서 살펴보는 자연 여행"
      image="/images/stromatolite.png"
      badges={["소청도", "지질여행", "자연관찰", "사진여행"]}
      quickFacts={[
        ["추천 대상", "자연 · 지질 · 가족여행"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 포인트", "암석의 형태와 주변 해안 풍경"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🪨 스트로마톨라이트는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              소청도의 스트로마톨라이트는 섬 여행 중 독특한
              지질 경관을 살펴볼 수 있는 자연 관찰 장소입니다.
            </p>

            <p>
              일반적인 해변이나 전망 명소와는 다른 시선으로
              암석의 모습과 주변 해안 환경을 관찰할 수 있어
              자연과 지질에 관심 있는 여행자에게 잘 어울립니다.
            </p>

            <p>
              소청도에는 분바위를 비롯한 다양한 자연경관이 있어
              여러 장소를 함께 둘러보면 섬의 자연을 보다
              다양하게 살펴볼 수 있습니다.
            </p>
          </div>
        </section>

        {/* 관찰 포인트 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">
            자연을 관찰하는 여행
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🔍 스트로마톨라이트 관찰 포인트
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              이곳을 둘러볼 때는 암석의 전체적인 모습뿐 아니라
              표면에 나타나는 형태와 무늬도 천천히 살펴보세요.
            </p>

            <p>
              주변의 바다와 해안까지 함께 바라보면 소청도의
              지질 경관이 자연환경 속에서 어떻게 보이는지
              더욱 쉽게 이해할 수 있습니다.
            </p>

            <p>
              자연 지형은 관찰하는 것 자체가 여행의 중요한
              경험입니다. 만지거나 훼손하기보다 눈으로 살펴보고
              사진으로 기록하는 방식으로 즐겨주세요.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 여기서 살펴볼 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-100 p-6">
              <h3 className="text-xl font-extrabold">
                🪨 암석의 모습
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                평소 쉽게 지나칠 수 있는 암석의 형태와
                표면을 천천히 관찰해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 주변 해안
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                암석만 가까이 보기보다 주변 바다와 해안 풍경까지
                함께 바라보면 더욱 풍부하게 관람할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🔎 자연 관찰
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                아이와 함께 여행한다면 소청도의 자연과 지질을
                직접 관찰하는 여행지로 활용해 볼 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 기록하기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                암석의 세부 모습과 주변 풍경을 각각 사진으로
                남겨보면 여행 기록으로 활용하기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🥾 방문할 때 알아두세요
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 소청도 방문 전 선박 운항과 기상 상황을 확인하세요.
            </li>

            <li>
              ✅ 해안 접근 시 파도와 현장 상황을 먼저 확인하세요.
            </li>

            <li>
              ✅ 바위와 젖은 지면은 미끄러울 수 있으므로
              걷기 편한 운동화를 추천합니다.
            </li>

            <li>
              ✅ 암석을 떼어내거나 훼손하지 말고 눈으로
              관찰해 주세요.
            </li>

            <li>
              ✅ 현장에 출입 제한이나 안전 안내가 있다면
              해당 안내를 우선해 주세요.
            </li>
          </ul>
        </section>

        {/* 자연 보호 */}
        <section className="rounded-3xl bg-green-50 p-8 md:p-10">
          <h2 className="text-3xl font-black">
            🌱 자연 그대로 남겨주세요
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-lg font-extrabold">
                👀 눈으로 관찰
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                자연 지형은 가능한 한 손대지 않고 눈으로
                관찰하는 것이 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-lg font-extrabold">
                🚫 채취하지 않기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                암석이나 자연물을 기념품처럼 가져가지 말고
                현장에 그대로 남겨주세요.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-lg font-extrabold">
                📸 사진으로 기록
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                자연의 모습을 오래 기억하고 싶다면
                훼손 대신 사진으로 기록해 보세요.
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
            스트로마톨라이트와 함께 소청도의 다른 자연경관도
            연결해서 둘러보세요.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/bunbawi"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                분바위 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                밝은 암벽과 바다가 어우러지는 소청도 해안 경관
              </p>
            </Link>

            <Link
              href="/place/socheong-lighthouse"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                소청등대 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                등대와 소청도의 바다 풍경을 함께 보는 여행지
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
                소청도의 또 다른 지질 경관을 둘러보는 장소
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 스트로마톨라이트 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold">
                Q. 어떤 여행자에게 추천하나요?
              </h3>
              <p className="mt-2 leading-7">
                자연과 지질 경관을 좋아하거나 소청도의
                다양한 자연환경을 살펴보고 싶은 여행자에게
                잘 어울립니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 사진을 찍어도 되나요?
              </h3>
              <p className="mt-2 leading-7">
                현장의 출입 및 안전 안내를 지키면서
                자연 풍경을 사진으로 기록해 주세요.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 방문 전에 무엇을 확인해야 하나요?
              </h3>
              <p className="mt-2 leading-7">
                선박 운항과 날씨, 현지 접근 상황을 확인하고
                현장의 출입 및 안전 안내를 우선해 주세요.
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
            해안의 접근 여건은 기상과 파도, 현지 상황에 따라
            달라질 수 있습니다. 현장의 출입 및 안전 안내를
            우선하고, 파도가 높거나 바람이 강한 날에는 위험한
            해안과 암반에 무리하게 접근하지 마세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="stromatolite"
        placeName="스트로마톨라이트"
      />
    </PlaceTemplate>
  );
}