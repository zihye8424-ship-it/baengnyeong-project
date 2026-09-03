import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "서해최북단 백령도비 | 백령도의 모든 정보",
  description:
    "대한민국 서해 최북단을 상징하는 백령도비의 관람 포인트, 사진 팁, 주변 코스와 방문 정보를 확인하세요.",
};

export default function BaengnyeongbiPage() {
  return (
    <PlaceTemplate
      title="서해최북단 백령도비"
      subtitle="대한민국 서해 최북단을 알리는 백령도의 대표 인증 명소"
      image="/images/baengnyeong-bi.jpg"
      badges={["인증샷 명소", "랜드마크", "대표 관광지"]}
      quickFacts={[
        ["추천 대상", "모든 여행객"],
        ["추천 시간", "20~30분"],
        ["관람 방법", "도보"],
        ["준비물", "카메라 · 바람막이"],
      ]}
    >
      <div className="space-y-8">

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            📍 서해최북단 백령도비는 어떤 곳인가요?
          </h2>

          <p className="mt-5 leading-8 text-gray-700">
            서해최북단 백령도비는 대한민국 서해 최북단에 위치한
            백령도를 상징하는 대표 기념비입니다.
            많은 여행객들이 백령도 방문을 기념하며 사진을 남기는
            인증 명소입니다.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            백령도를 처음 방문했다면 기념비와 함께 사진을 남기며
            특별한 섬 여행의 순간을 기록해 보세요.
          </p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            📸 꼭 보고 느껴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">
                백령도 여행 인증샷
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                백령도를 방문했다는 기록을 남기기 좋은
                대표 포토 포인트입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">
                서해 최북단의 상징
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                백령도 여행의 특별함을 상징적으로 느껴볼 수 있는
                장소입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">
                짧게 들르기 좋은 코스
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                다른 백령도 관광지와 함께 일정에 넣어
                둘러보기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">
                가족·단체 사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                가족이나 친구들과 함께 백령도 여행 기념사진을
                남겨보세요.
              </p>
            </div>

          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            🧭 백령도 여행 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 기념비의 글자가 잘 보이도록 사진을 찍어보세요.
            </li>
            <li>
              ✅ 가족이나 단체 여행이라면 모두 함께 인증사진을
              남기기 좋습니다.
            </li>
            <li>
              ✅ 바람이 강한 날에는 겉옷이나 바람막이를 준비하세요.
            </li>
            <li>
              ✅ 주변 관광지와 함께 여행 동선을 구성하면 좋습니다.
            </li>
          </ul>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            📷 인증사진 팁
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-extrabold">
                🪧 기념비 글자
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                백령도비의 글자가 잘 보이도록 촬영하면
                여행지를 한눈에 알아볼 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-extrabold">
                ☁️ 하늘과 함께
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                기념비와 하늘을 함께 담으면 시원한 느낌의
                여행사진을 남길 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-extrabold">
                👨‍👩‍👧‍👦 일행과 함께
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                가족이나 친구들과 함께 방문했다면
                단체 인증사진도 남겨보세요.
              </p>
            </div>

          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            🗺️ 함께 가기 좋은 코스
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            아래 관광지를 누르면 해당 관광지 상세 페이지로 이동합니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <Link
              href="/place/simcheonggak"
              className="block rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                심청각 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                심청 이야기와 백령도의 풍경을 함께 살펴보는 곳
              </p>
            </Link>

            <Link
              href="/place/cheonan"
              className="block rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                천안함 46용사 위령탑 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                희생된 장병들을 기억하고 추모하는 공간
              </p>
            </Link>

            <Link
              href="/place/sagot"
              className="block rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                사곶해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                백령도의 넓은 해안 풍경을 만나는 대표 관광지
              </p>
            </Link>

          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            ❓ 자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-6">

            <div>
              <h3 className="text-lg font-bold">
                Q. 백령도비에서는 무엇을 하면 좋나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                기념비를 살펴보고 백령도 방문을 기념하는
                인증사진을 남겨보세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 가족여행으로 방문해도 괜찮나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                네. 가족이나 일행과 함께 여행 기념사진을
                남기기 좋은 장소입니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 다른 관광지와 함께 볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                심청각, 천안함 46용사 위령탑, 사곶해변 등
                백령도의 다른 관광지와 함께 여행 일정을
                구성해 보세요.
              </p>
            </div>

          </div>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <p className="leading-7 text-amber-950">
            <strong>방문 전 확인:</strong> 섬 지역은 기상과
            현지 상황에 따라 이동 여건이 달라질 수 있습니다.
            방문 당일 날씨와 현장 안전 안내를 확인해 주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="baengnyeong-bi"
        placeName="서해최북단 백령도비"
      />
    </PlaceTemplate>
  );
}