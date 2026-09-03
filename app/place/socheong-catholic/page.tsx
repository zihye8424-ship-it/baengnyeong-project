import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "소청도 천주교회·김대건 신부상 여행 가이드 | 백령도의 모든 정보",
  description:
    "소청도 천주교회와 김대건 신부상을 둘러보는 역사문화 여행. 관람 포인트, 방문 예절, 여행 팁과 소청도에서 함께 둘러보기 좋은 장소를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="소청도 천주교회·김대건 신부상"
      subtitle="소청도의 종교와 생활문화를 조용히 살펴보는 역사문화 방문지"
      image="/images/socheong-catholic.png"
      badges={["소청도", "역사문화", "종교문화", "마을여행"]}
      quickFacts={[
        ["추천 대상", "역사 · 문화 · 섬마을 여행"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 방법", "조용히 둘러보기"],
        ["방문 예절", "종교시설과 주민 생활공간 배려"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ⛪ 소청도 천주교회·김대건 신부상은 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              소청도 천주교회와 김대건 신부상은 소청도 여행 중
              섬의 종교문화와 마을 풍경을 함께 살펴볼 수 있는
              역사문화 방문지입니다.
            </p>

            <p>
              소청도의 자연 명소와는 또 다른 분위기를 느낄 수 있는
              곳으로, 바다와 해안 풍경을 둘러보는 여행 중 잠시
              조용하게 머물며 섬마을의 생활문화를 살펴보기 좋습니다.
            </p>

            <p>
              종교시설은 관광지만을 위한 공간이 아니므로 방문할
              때에는 시설 이용자와 주민을 배려하고 조용히
              둘러보는 것이 좋습니다.
            </p>
          </div>
        </section>

        {/* 관람 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 방문할 때 살펴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                ⛪ 천주교회
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                자연 관광지가 많은 소청도에서 종교와 마을문화를
                함께 살펴볼 수 있는 공간입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-extrabold">
                🕊️ 김대건 신부상
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                김대건 신부상을 살펴보며 자연 풍경과는 다른
                소청도의 역사문화 여행을 경험해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🏘️ 섬마을 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                교회만 보고 이동하기보다 주변 마을의 풍경도
                함께 바라보면 소청도의 분위기를 더 잘 느낄 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 여행 기록
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                사진을 촬영할 때에는 예배나 시설 이용에 방해가
                되지 않도록 현장 분위기를 먼저 확인해 주세요.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 예절 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🙏 종교시설 방문 예절
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 예배나 종교행사가 진행 중이라면 조용히 이동해 주세요.
            </li>
            <li>
              ✅ 내부 촬영은 현장의 촬영 가능 여부를 먼저 확인하는
              것이 좋습니다.
            </li>
            <li>
              ✅ 시설물이나 조형물을 훼손하거나 함부로 만지지 마세요.
            </li>
            <li>
              ✅ 주변은 주민 생활공간일 수 있으므로 큰 소리나
              무단 출입을 삼가 주세요.
            </li>
            <li>
              ✅ 현장에 별도의 안내가 있는 경우 해당 안내를
              우선해 주세요.
            </li>
          </ul>
        </section>

        {/* 여행 구성 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 소청도 여행에 이렇게 넣어보세요
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🌊 자연 + 문화
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                해안과 등대 같은 자연·경관 명소를 둘러본 뒤
                역사문화 장소를 함께 방문해 보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🚶 여유로운 일정
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                소청도에서는 이동 시간을 넉넉하게 잡고 각 장소를
                천천히 둘러보는 일정이 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🏘️ 섬마을 여행
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                유명한 경관뿐 아니라 마을과 생활문화까지 살펴보면
                소청도를 더 다양하게 경험할 수 있습니다.
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
            천주교회와 김대건 신부상을 둘러본 뒤 소청도의 다른
            여행지도 함께 살펴보세요.
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
                소청도의 바다와 섬 풍경을 만나는 여행지
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
                독특한 해안 지형을 살펴볼 수 있는 자연 명소
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
                바다와 주민의 생활이 만나는 작은 포구
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                Q. 종교가 없어도 방문해도 되나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                역사와 종교문화에 관심 있는 여행자라면 둘러볼 수
                있지만, 종교시설인 만큼 현장 이용과 예배에 방해가
                되지 않도록 방문 예절을 지켜주세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 사진을 촬영해도 되나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                외부와 조형물을 촬영할 때도 주변 이용자를 배려하고,
                특히 실내에서는 현장 촬영 안내를 먼저 확인하는 것이
                좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 함께 둘러보기 좋은 곳은 어디인가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                소청도등대, 소청도 주상절리, 노화동포구 등 소청도
                내 다른 여행지와 함께 동선을 구성할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 전 확인 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            💡 방문 전 확인
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            소청도는 기상과 선박 운항 상황에 따라 여행 일정이
            달라질 수 있습니다. 종교시설의 개방 여부와 이용 상황도
            달라질 수 있으므로 현장 안내를 우선해 주세요. 주민과
            시설 이용자를 배려하며 조용히 관람하는 것을 권합니다.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="socheong-catholic"
        placeName="소청도 천주교회·김대건 신부상"
      />
    </PlaceTemplate>
  );
}