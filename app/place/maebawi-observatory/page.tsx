import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 매바위전망대 여행 가이드 | 전망·포토존·방문 팁",
  description:
    "대청도 매바위전망대 여행 가이드. 매 조형물과 함께 바라보는 산과 바다 전망, 사진 포인트, 방문 팁과 주변 대청도 관광지를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="매바위전망대"
      subtitle="매 조형물과 함께 대청도의 산과 바다 풍경을 바라보는 전망 포인트"
      image="/images/maebawi-observatory.png"
      badges={["대청도", "전망대", "포토존", "사진여행"]}
      quickFacts={[
        ["추천 대상", "전망 · 사진 · 자연여행"],
        ["추천 시간", "시야가 좋은 낮 시간"],
        ["관람 포인트", "매 조형물 · 산과 바다 전망"],
        ["준비물", "편한 신발 · 바람막이 · 카메라"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🦅 매바위전망대는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              매바위전망대는 대청도의 산과 바다 풍경을
              한자리에서 바라보며 쉬어가기 좋은 전망 포인트입니다.
            </p>

            <p>
              매를 형상화한 조형물이 있어 대청도 여행 중
              기념사진을 남기기 좋고, 주변으로 펼쳐지는 자연
              풍경까지 함께 감상할 수 있습니다.
            </p>

            <p>
              해변과 해안 중심의 대청도 여행 중 잠시 높은
              시선에서 섬의 풍경을 바라보고 싶을 때
              함께 둘러보기 좋은 장소입니다.
            </p>
          </div>
        </section>

        {/* 전망 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">
            대청도를 바라보는 여행
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🌍 매바위전망대에서 바라보는 풍경
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              전망대에서는 한 곳만 바라보기보다 주변의 산과
              바다, 멀리 이어지는 섬 풍경을 천천히 둘러보세요.
            </p>

            <p>
              날씨가 맑고 시야가 좋은 날에는 대청도의 자연을
              보다 시원하게 감상할 수 있습니다. 구름과 바람,
              시간대에 따라서도 풍경의 분위기가 달라집니다.
            </p>

            <p>
              전망을 충분히 감상한 뒤 주변 관광지로 이동하면
              해변과 산지, 전망 명소가 어우러진 대청도의
              다양한 모습을 경험할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 볼거리 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 매바위전망대에서 놓치지 말 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                🦅 매 조형물
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                전망대의 매 조형물과 함께 대청도 여행
                기념사진을 남겨보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다 전망
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                시야가 좋은 날에는 전망대에서 주변 바다와
                섬의 풍경을 넓게 바라보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                ⛰️ 산과 섬 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다뿐 아니라 주변 산지와 자연이 함께
                만들어내는 대청도의 풍경도 살펴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 포토존
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                조형물과 자연 풍경을 함께 활용하면
                전망대의 특징이 잘 드러나는 사진을 남길 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🥾 매바위전망대 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 시야가 좋은 날 방문하면 주변 풍경을
              감상하기 좋습니다.
            </li>

            <li>
              ✅ 대청도는 바람이 강한 날이 있을 수 있으므로
              바람막이나 겉옷을 준비하세요.
            </li>

            <li>
              ✅ 전망대에서는 안전 난간 안쪽에서 관람하고
              현장의 안전 안내를 따라주세요.
            </li>

            <li>
              ✅ 바람이 강할 때는 모자와 휴대전화 등
              가벼운 소지품이 날리지 않도록 주의하세요.
            </li>

            <li>
              ✅ 다른 대청도 관광지와 함께 이동한다면
              날씨와 이동 시간을 고려해 여유 있게 일정을 잡으세요.
            </li>
          </ul>
        </section>

        {/* 사진 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 매바위전망대 사진 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🦅 조형물과 함께
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                매 조형물과 인물을 함께 담아 대청도 여행의
                기념사진을 남겨보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🌊 풍경을 넓게
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 주변 산지가 함께 들어오도록 넓게
                촬영하면 전망대의 시원한 느낌을 살릴 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ☀️ 빛의 방향 확인
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                촬영할 때 햇빛의 방향을 확인하면서 위치를
                조금씩 바꿔보면 다른 분위기의 사진을 남길 수 있습니다.
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
            매바위전망대와 함께 대청도의 산과 독특한 자연,
            전망 명소를 이어서 둘러보세요.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/samgaksan"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                삼각산 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 산과 자연 풍경을 만나는 여행지
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
                대청도에서 만나는 독특한 모래 풍경
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
                대청도의 전망과 해넘이 풍경을 만나는 장소
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 매바위전망대 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold">
                Q. 매바위전망대에서는 무엇을 볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7">
                매 조형물과 함께 주변 산과 바다 등
                대청도의 자연 풍경을 감상할 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 사진 찍기 좋은 곳인가요?
              </h3>
              <p className="mt-2 leading-7">
                매 조형물과 자연 풍경을 함께 활용해
                대청도 여행 기념사진을 남기기 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 방문 전에 무엇을 확인해야 하나요?
              </h3>
              <p className="mt-2 leading-7">
                선박 운항과 날씨, 현지 이동 여건을 확인하고
                전망대의 출입 및 안전 안내를 따라주세요.
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
            전망대 이용 여건은 날씨와 현지 상황에 따라
            달라질 수 있습니다. 바람이 강하거나 기상이 좋지
            않은 날에는 안전에 특히 주의하고 현장의 출입 및
            안전 안내를 우선해 주세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="maebawi-observatory"
        placeName="매바위전망대"
      />
    </PlaceTemplate>
  );
}