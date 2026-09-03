import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 사자바위 여행 가이드 | 해안 기암·사진 명소",
  description:
    "백령도 사자바위의 독특한 바위 풍경과 관람 포인트, 사진 촬영 팁, 방문 시 주의사항과 함께 둘러보기 좋은 관광지를 소개합니다.",
};

export default function SajabawiPage() {
  return (
    <PlaceTemplate
      title="사자바위"
      subtitle="사자를 닮은 독특한 바위와 서해 바다가 어우러지는 백령도의 해안 풍경"
      image="/images/sajabawi2.jpg"
      badges={["기암경관", "사진 명소", "해안 풍경"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 사진여행"],
        ["추천 시간", "약 30~40분"],
        ["관람 방법", "바위 · 해안 풍경 감상"],
        ["준비물", "운동화 · 바람막이 · 카메라"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🦁 사자바위는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              사자바위는 독특한 형태의 바위와 백령도의 바다 풍경을
              함께 감상할 수 있는 자연 명소입니다.
            </p>

            <p>
              바위를 바라보는 위치와 각도에 따라 모습이 조금씩
              다르게 느껴지기 때문에 한 자리에서만 보기보다
              주변을 천천히 둘러보며 감상해 보세요.
            </p>

            <p>
              사자바위만 보고 바로 이동하기보다 주변의 바다와
              해안선까지 함께 바라보면 백령도의 자연경관을
              더욱 여유롭게 즐길 수 있습니다.
            </p>
          </div>
        </section>

        {/* 관람 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 사자바위에서 살펴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-extrabold">
                🦁 바위의 형태
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                보는 위치와 각도에 따라 달라지는 바위의 모습을
                천천히 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 해안 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위뿐 아니라 주변의 바다와 해안선까지 함께
                바라보면 더욱 풍성한 풍경을 즐길 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 사진 촬영
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위와 바다가 한 화면에 들어오도록 조금 거리를
                두고 촬영하면 현장의 분위기를 담기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🚗 주변 관광지
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                백령도의 다른 해안 관광지와 함께 둘러보면
                자연 중심의 여행 코스를 구성하기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 추천 감상 방법 */}
        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-8 md:p-10">
          <h2 className="text-3xl font-black">
            🚶 사자바위 이렇게 둘러보세요
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-sky-600">STEP 1</p>
              <h3 className="mt-2 text-xl font-extrabold">
                바위 전체 모습 보기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                먼저 조금 떨어진 곳에서 바위의 전체적인 형태를
                바라보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-sky-600">STEP 2</p>
              <h3 className="mt-2 text-xl font-extrabold">
                바다와 함께 감상하기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위에만 집중하기보다 주변의 바다와 해안 풍경도
                함께 둘러보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-sky-600">STEP 3</p>
              <h3 className="mt-2 text-xl font-extrabold">
                사진 남기기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위와 서해 풍경이 함께 보이는 구도로
                여행 사진을 남겨보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 사진 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 사자바위 사진 촬영 팁
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                바위 전체 담기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위에 너무 가까이 가기보다 전체 모습이 보이는
                위치에서 촬영해 보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                바다와 함께 담기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위와 바다, 하늘이 함께 들어오도록 촬영하면
                백령도의 해안 분위기를 표현하기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                여러 각도에서 보기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                안전한 범위에서 위치를 조금씩 바꿔보며
                바위의 특징이 잘 보이는 각도를 찾아보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 방문할 때 알아두면 좋은 점
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 백령도 해안은 바람이 강하게 부는 날이 있으므로
              바람막이나 겉옷을 준비하면 좋습니다.
            </li>

            <li>
              ✅ 바위와 해안 주변에서는 미끄럽거나 고르지 않은
              지면에 주의하세요.
            </li>

            <li>
              ✅ 파도가 높거나 날씨가 좋지 않은 날에는
              해안 가까이 무리하게 접근하지 마세요.
            </li>

            <li>
              ✅ 사진 촬영을 위해 위험한 위치로 이동하기보다
              안전한 장소에서 풍경을 감상해 주세요.
            </li>
          </ul>
        </section>

        {/* 계절 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🍀 계절별 방문 체크
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold">🌸 봄</h3>
              <p className="mt-3 leading-7 text-gray-700">
                선선한 날에는 해안 풍경을 둘러보기 좋습니다.
                바닷바람에 대비해 겉옷을 준비하세요.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-bold">☀️ 여름</h3>
              <p className="mt-3 leading-7 text-gray-700">
                푸른 바다와 바위 풍경을 감상하기 좋습니다.
                햇볕에 대비해 모자와 생수를 챙기세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold">🍁 가을</h3>
              <p className="mt-3 leading-7 text-gray-700">
                선선한 날씨에는 풍경 감상과 사진 촬영을
                함께 즐기기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold">❄️ 겨울</h3>
              <p className="mt-3 leading-7 text-gray-700">
                겨울 바다 특유의 풍경을 볼 수 있지만 강풍과
                낮은 체감온도에 대비한 방한 준비가 필요합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 내부 링크 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 함께 둘러보기 좋은 백령도 명소
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            아래 관광지를 누르면 해당 상세 페이지로 이동합니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/dumujin"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                두무진 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                기암과 바다가 어우러진 백령도의 대표 자연 명소
              </p>
            </Link>

            <Link
              href="/place/sagot"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                사곶해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                넓게 펼쳐진 해변 풍경을 감상할 수 있는 백령도 명소
              </p>
            </Link>

            <Link
              href="/place/kongdol"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                콩돌해안 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                둥근 콩돌과 파도 소리가 인상적인 백령도의 특별한 해안
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 사자바위 방문 FAQ
          </h2>

          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold">
                Q. 아이와 함께 가도 되나요?
              </h3>
              <p className="mt-2 leading-7">
                함께 풍경을 감상할 수 있지만 해안과 바위 주변에서는
                미끄러짐과 안전사고에 특히 주의해 주세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 비가 오는 날에도 방문할 수 있나요?
              </h3>
              <p className="mt-2 leading-7">
                우천이나 강풍 시에는 지면과 해안 상황이 좋지 않을 수
                있으므로 날씨와 현장 상황을 먼저 확인하는 것이 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 얼마나 시간을 잡으면 좋을까요?
              </h3>
              <p className="mt-2 leading-7">
                사진 촬영과 주변 풍경 감상을 포함해 약 30~40분을
                기준으로 여행 일정에 맞춰 조절해 보세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 어디와 함께 둘러보면 좋나요?
              </h3>
              <p className="mt-2 leading-7">
                자연경관 중심으로 여행한다면 두무진, 사곶해변,
                콩돌해안 같은 백령도 대표 명소와 함께 둘러보기 좋습니다.
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
            해안은 날씨와 파도, 바람에 따라 현장 상황이 달라질 수
            있습니다. 방문 당일 기상과 현장 안내를 확인하고,
            바위나 해안 가까이 이동할 때는 안전을 가장 우선해 주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="sajabawi"
        placeName="사자바위"
      />
    </PlaceTemplate>
  );
}