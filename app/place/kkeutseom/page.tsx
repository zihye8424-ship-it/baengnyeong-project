import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 끝섬전망대 여행 가이드 | 일몰·전망·전시",
  description:
    "백령도 끝섬전망대에서 만나는 서해 일몰과 전망, 백령도 옛 사진 전시와 체험 공간, 방문 팁과 주변 관광지 코스를 소개합니다.",
};

export default function KkeutseomPage() {
  return (
    <PlaceTemplate
      title="끝섬전망대"
      subtitle="백령도 서쪽 끝에서 드넓은 서해와 아름다운 노을을 만나는 대표 전망 명소"
      image="/images/kkutseom.jpg"
      badges={["일몰 명소", "대표 전망대", "사진 명소", "전시"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 사진여행"],
        ["추천 시간", "일몰 전 여유 있게"],
        ["관람 방법", "전망 · 전시 · 산책"],
        ["준비물", "바람막이 · 카메라"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🌅 끝섬전망대는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              끝섬전망대는 백령도의 서쪽 끝에서 드넓은 서해와
              해안 풍경을 바라볼 수 있는 전망 명소입니다.
              특히 해가 지는 시간에는 바다와 하늘이 함께 물드는
              백령도의 노을을 감상하기 좋습니다.
            </p>

            <p>
              날씨가 좋은 날에는 수평선까지 시야가 넓게 펼쳐져
              백령도의 바다 풍경을 여유롭게 바라볼 수 있습니다.
              사진여행이나 연인 여행뿐 아니라 가족과 함께
              둘러보기에도 좋은 장소입니다.
            </p>

            <p>
              바깥 전망만 보는 곳이 아니라 백령도의 옛 모습과
              역사·문화 등을 살펴볼 수 있는 전시 공간도 있어
              전망과 전시를 함께 즐길 수 있습니다.
            </p>
          </div>
        </section>

        {/* 전시 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🏛️ 전시 공간도 함께 둘러보세요
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold">
                🖼️ 백령도 옛 사진
              </h3>
              <p className="mt-4 leading-7 text-gray-700">
                과거 백령도의 마을 모습과 주민들의 생활상을
                사진으로 살펴보며 지금의 모습과 비교해 보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold">
                🖥️ 체험 콘텐츠
              </h3>
              <p className="mt-4 leading-7 text-gray-700">
                백령도의 관광지와 자연환경을 소개하는 콘텐츠가
                운영된다면 아이와 함께 천천히 둘러보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold">
                📖 역사·안보 이야기
              </h3>
              <p className="mt-4 leading-7 text-gray-700">
                서해5도와 백령도가 지닌 역사와 지역의 이야기를
                살펴볼 수 있습니다. 실제 전시 내용은 현장 안내를
                기준으로 확인해 주세요.
              </p>
            </div>
          </div>
        </section>

        {/* 핵심 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 끝섬전망대에서 놓치지 말아야 할 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold text-orange-800">
                🌅 서해 일몰
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                하늘과 바다가 천천히 물드는 시간을 여유 있게
                바라보는 것이 끝섬전망대의 가장 큰 매력입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-bold text-sky-900">
                🌊 넓게 펼쳐진 전망
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                날씨가 좋은 날에는 서해와 백령도의 해안 풍경을
                넓게 바라보며 섬 여행의 분위기를 느껴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-bold text-amber-900">
                🖼️ 백령도의 옛 모습
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                현재의 관광지만 보는 것과 달리 과거 백령도의
                모습과 생활 이야기를 함께 살펴볼 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-blue-900">
                📷 사진 여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 하늘이 넓게 보이는 장소인 만큼 풍경 사진과
                백령도 여행 인증사진을 남기기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 일몰 */}
        <section className="rounded-3xl border border-orange-100 bg-orange-50 p-8 md:p-10">
          <h2 className="text-3xl font-black">
            🌇 노을을 보고 싶다면
          </h2>

          <div className="mt-6 space-y-4 leading-8 text-gray-700">
            <p>
              일몰을 목적으로 방문한다면 해가 지는 시각에 맞춰
              도착하기보다 조금 여유 있게 도착하는 것이 좋습니다.
              전망대를 먼저 둘러보고 원하는 촬영 위치를 찾아두면
              노을이 시작될 때 더욱 편하게 감상할 수 있습니다.
            </p>

            <p>
              일몰 시각은 계절에 따라 달라지므로 방문하는 날짜의
              일몰 시간을 미리 확인하세요. 구름이나 해무 등
              당일 기상 상태에 따라 보이는 풍경도 달라질 수 있습니다.
            </p>
          </div>
        </section>

        {/* 사진 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 끝섬전망대 사진 팁
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                수평선 넓게 담기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 하늘이 넓게 보이도록 촬영하면 전망대의
                시원한 풍경을 표현하기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                노을 전부터 촬영
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                해가 완전히 지기 전부터 변화하는 하늘빛을
                순서대로 담아보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                사람과 풍경 함께
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                인물을 너무 크게 담기보다 바다와 하늘이 함께
                보이도록 촬영하면 여행 분위기가 살아납니다.
              </p>
            </div>
          </div>
        </section>

        {/* 주민 여행 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 끝섬전망대 여행 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 일몰을 보려면 해 지는 시각에 딱 맞춰 가기보다
              여유 있게 도착하는 편이 좋습니다.
            </li>

            <li>
              ✅ 전망대는 바닷바람이 강할 수 있으므로
              계절에 맞는 겉옷이나 바람막이를 준비하세요.
            </li>

            <li>
              ✅ 전망과 전시를 모두 보려면 여행 일정에
              충분한 여유를 두는 것이 좋습니다.
            </li>

            <li>
              ✅ 흐린 날이나 강풍이 심한 날에는 전망과
              일몰 감상 조건이 달라질 수 있습니다.
            </li>

            <li>
              ✅ 방문 날짜의 일몰 시각과 당일 기상을
              미리 확인하고 움직이면 여행 계획을 세우기 편합니다.
            </li>
          </ul>
        </section>

        {/* 계절 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🍀 계절별 끝섬전망대 여행
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold">🌸 봄</h3>
              <p className="mt-3 leading-7 text-gray-700">
                맑고 선선한 날에는 전망과 주변 산책을
                함께 즐기기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-bold">☀️ 여름</h3>
              <p className="mt-3 leading-7 text-gray-700">
                해가 늦게 지는 시기에는 일정을 여유 있게
                구성할 수 있습니다. 햇볕에도 대비하세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold">🍁 가을</h3>
              <p className="mt-3 leading-7 text-gray-700">
                선선한 공기 속에서 전망과 노을을 함께
                감상하기 좋은 시기입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold">❄️ 겨울</h3>
              <p className="mt-3 leading-7 text-gray-700">
                겨울 바다의 풍경을 볼 수 있지만 강풍과
                체감온도에 대비한 방한 준비가 필요합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 내부 링크 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 함께 가기 좋은 백령도 명소
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            아래 관광지를 누르면 해당 상세 페이지로 이동합니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/dumujin"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                두무진 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                기암과 서해가 어우러진 백령도의 대표 자연 명소
              </p>
            </Link>

            <Link
              href="/place/sagot"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                사곶해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                넓게 펼쳐진 해변 풍경을 만나는 백령도 대표 관광지
              </p>
            </Link>

            <Link
              href="/place/kongdol"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                콩돌해안 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                둥근 콩돌과 파도 소리가 인상적인 특별한 해안
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 끝섬전망대 자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                Q. 언제 방문하는 것이 좋은가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                노을을 보고 싶다면 방문 날짜의 일몰 시간을 확인하고
                조금 여유 있게 도착하는 것을 추천합니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 전시 공간도 함께 볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                전망과 함께 백령도 관련 전시 공간을 둘러볼 수 있습니다.
                실제 운영되는 전시와 체험 콘텐츠는 방문 당일
                현장 안내를 확인해 주세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 아이와 함께 가기 좋은가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                바다 전망뿐 아니라 백령도의 옛 모습과 지역 이야기도
                살펴볼 수 있어 가족여행 일정에 넣기 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 운영시간은 어떻게 확인하나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                운영시간과 관람 가능 여부는 변경될 수 있으므로
                방문 전에 최신 공식·현장 안내를 확인해 주세요.
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
            백령도는 기상 변화가 여행 일정에 영향을 줄 수 있습니다.
            끝섬전망대 방문 전 당일 날씨와 시설 운영 여부를 확인하고,
            강풍이 부는 날에는 전망대 주변 안전수칙을 따라주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="kkeutseom"
        placeName="끝섬전망대"
      />
    </PlaceTemplate>
  );
}