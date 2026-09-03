import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "천안함 46용사 위령탑 | 백령도 안보·역사 여행",
  description:
    "백령도 천안함 46용사 위령탑의 의미와 추모 예절, 방문 팁, 함께 둘러보기 좋은 백령도 관광지를 안내합니다.",
};

export default function CheonanPage() {
  return (
    <PlaceTemplate
      title="천안함 46용사 위령탑"
      subtitle="천안함 피격 사건으로 희생된 46용사를 기억하고 추모하는 백령도의 안보·역사 공간"
      image="/images/cheonan.jpg"
      badges={["백령도", "안보관광", "역사교육", "추모공간"]}
      quickFacts={[
        ["추천 대상", "가족 · 학생 · 역사여행"],
        ["관람 성격", "추모 · 안보 · 역사"],
        ["관람 방법", "차분한 도보 관람"],
        ["방문 예절", "정숙 · 현장 안내 준수"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🇰🇷 천안함 46용사 위령탑은 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              천안함 46용사 위령탑은 2010년 천안함 피격 사건으로
              희생된 46명의 용사를 기억하고 추모하는 공간입니다.
            </p>

            <p>
              백령도 여행 중 아름다운 자연경관을 둘러보는 것과는
              다른 의미를 가진 장소로, 희생된 장병들을 기억하며
              차분하게 둘러보는 것이 좋습니다.
            </p>

            <p>
              가족이나 학생과 함께 방문한다면 백령도의 지리적
              특성과 안보의 의미를 생각해 보는 역사·안보 여행
              코스로도 의미가 있습니다.
            </p>
          </div>
        </section>

        {/* 의미 */}
        <section className="rounded-3xl border border-slate-200 bg-slate-100 p-8 md:p-10">
          <p className="font-bold text-slate-700">
            기억해야 할 역사
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🕊️ 46용사를 기억하는 추모 공간
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              이곳은 일반적인 사진 명소나 휴식형 관광지가 아니라
              희생된 장병들을 기억하고 추모하기 위해 찾는 공간이라는
              점을 먼저 생각하는 것이 좋습니다.
            </p>

            <p>
              현장을 천천히 둘러보며 천안함 사건과 백령도가 가진
              역사적·안보적 의미를 되새겨 보세요.
            </p>
          </div>
        </section>

        {/* 관람 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 방문하며 생각해 볼 것
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-xl font-extrabold">
                🕊️ 추모의 의미
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                희생된 46용사를 기억하며 경건한 마음으로
                공간을 둘러보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🇰🇷 안보와 역사
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                백령도 여행을 통해 우리나라 서해 최북단 지역이
                가진 안보적 의미도 함께 생각해 볼 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                👨‍👩‍👧 가족·학생 방문
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                아이와 방문한다면 단순 관광보다 사건의 의미를
                연령에 맞게 설명해 주면 관람에 도움이 됩니다.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-extrabold">
                🤫 조용한 관람
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                다른 방문객의 추모를 방해하지 않도록
                차분하게 둘러보는 것이 좋습니다.
              </p>
            </div>

          </div>
        </section>

        {/* 방문 예절 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-8 md:p-10">
          <p className="font-bold text-amber-800">
            방문 전에 꼭 확인하세요
          </p>

          <h2 className="mt-2 text-3xl font-black text-amber-950">
            🙏 추모 공간 방문 예절
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-amber-950">
            <li>
              • 큰 소리로 이야기하거나 장난스러운 행동은 피해주세요.
            </li>

            <li>
              • 추모객이 있을 때는 관람과 이동에 더욱 배려해 주세요.
            </li>

            <li>
              • 사진을 촬영할 때는 현장 안내와 추모 공간의
              분위기를 먼저 고려해 주세요.
            </li>

            <li>
              • 촬영이나 출입 제한 안내가 있는 구역에서는
              반드시 현장 안내를 따라주세요.
            </li>
          </ul>
        </section>

        {/* 여행 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 방문할 때 알아두면 좋은 점
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 충분한 시간을 두고 서두르지 않으며 둘러보세요.
            </li>

            <li>
              ✅ 아이와 함께 방문한다면 천안함 사건과
              추모의 의미를 먼저 이야기해 주면 좋습니다.
            </li>

            <li>
              ✅ 야외 이동이 있다면 날씨와 바람에 맞는
              옷차림을 준비하세요.
            </li>

            <li>
              ✅ 시설 이용과 출입 여부는 현장 상황에 따라
              달라질 수 있으므로 안내를 우선해 주세요.
            </li>
          </ul>
        </section>

        {/* 여행 연결 */}
        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-8 md:p-10">
          <p className="font-bold text-sky-700">
            백령도를 더 깊이 이해하는 여행
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🗺️ 자연 관광과 함께 둘러보세요
          </h2>

          <p className="mt-5 leading-8 text-gray-700">
            백령도에는 천안함 46용사 위령탑과 같은 역사·안보 공간뿐
            아니라 사곶해변과 두무진 등 독특한 자연경관도 있습니다.
            서로 다른 성격의 장소를 함께 둘러보면 백령도를 더욱
            다양한 시선으로 이해할 수 있습니다.
          </p>
        </section>

        {/* 내부 링크 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 함께 가기 좋은 코스
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            아래 관광지를 누르면 해당 관광지 상세 페이지로 이동합니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <Link
              href="/place/sagot"
              className="block rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                사곶해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                넓고 독특한 해안 풍경을 만나는 백령도 대표 자연 명소
              </p>
            </Link>

            <Link
              href="/place/simcheonggak"
              className="block rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                심청각 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                심청 이야기와 백령도의 풍경을 함께 만나는 곳
              </p>
            </Link>

            <Link
              href="/place/baengnyeong-bi"
              className="block rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                서해최북단 백령도비 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                백령도 여행의 상징성을 사진으로 남기는 인증 명소
              </p>
            </Link>

          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 천안함 46용사 위령탑 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6 text-gray-700">

            <div>
              <h3 className="font-bold">
                Q. 아이와 함께 방문해도 되나요?
              </h3>
              <p className="mt-2 leading-7">
                가족이나 학생이 역사와 안보의 의미를 생각해
                볼 수 있는 장소입니다. 다만 추모 공간이라는
                점을 먼저 설명해 주는 것이 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 사진을 찍어도 되나요?
              </h3>
              <p className="mt-2 leading-7">
                현장의 촬영 안내를 우선 확인하고 추모 분위기를
                해치지 않도록 배려해 주세요. 촬영 제한 안내가
                있는 곳에서는 반드시 안내를 따라야 합니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 방문할 때 가장 중요한 것은 무엇인가요?
              </h3>
              <p className="mt-2 leading-7">
                일반 관광지보다는 희생된 장병들을 기억하는
                추모 공간이라는 점을 생각하며 차분하게
                관람하는 것이 중요합니다.
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
            시설 운영과 출입 가능 구역은 현장 상황에 따라
            달라질 수 있습니다. 방문 당일 현장 안내와 안전수칙을
            우선 확인하고, 추모 공간에 맞는 관람 예절을 지켜주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="cheonan"
        placeName="천안함 46용사 위령탑"
      />
    </PlaceTemplate>
  );
}