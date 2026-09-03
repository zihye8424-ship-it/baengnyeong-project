import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 두무진 여행 가이드 | 유람선·기암절벽·트레킹",
  description:
    "백령도 대표 관광지 두무진의 기암절벽과 해안 풍경, 산책 코스, 유람선 여행, 사진 포인트, 방문 팁과 주변 관광지를 소개합니다.",
};

export default function DumujinPage() {
  return (
    <PlaceTemplate
      title="두무진"
      subtitle="기암절벽과 서해가 어우러진 백령도의 대표적인 해안 절경"
      image="/images/dumujin.jpg"
      badges={["백령도 대표 명소", "해안 절경", "유람선", "사진 명소"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 부모님 · 사진여행"],
        ["핵심 풍경", "기암절벽 · 서해 · 해안"],
        ["관람 방법", "해안 산책 · 유람선"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <p className="font-bold text-sky-600">
            백령도를 대표하는 해안 절경
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🌊 두무진은 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              두무진은 백령도 북서쪽 해안에서 웅장한 기암절벽과
              서해 풍경을 함께 만날 수 있는 백령도의 대표 관광지입니다.
              바다를 따라 독특한 모양의 바위와 절벽이 이어져
              백령도 여행에서 빼놓기 아까운 자연 명소입니다.
            </p>

            <p>
              두무진의 매력은 바라보는 위치에 따라 풍경이
              달라진다는 점입니다. 육지에서는 산책로를 따라
              절벽과 바다를 가까이에서 볼 수 있고,
              유람선을 이용할 수 있는 날에는 바다 쪽에서
              절벽의 규모와 해안선을 바라볼 수 있습니다.
            </p>

            <p>
              자연 풍경을 좋아하는 여행자부터 부모님과 함께하는 여행,
              가족여행, 사진여행까지 다양한 일정에 넣기 좋은 곳으로
              백령도를 처음 방문한다면 우선적으로 둘러볼 만한 장소입니다.
            </p>
          </div>
        </section>

        {/* 이름과 이야기 */}
        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-8 md:p-10">
          <p className="font-bold text-sky-700">
            백과사전식으로 알아보기
          </p>

          <h2 className="mt-2 text-3xl font-black">
            📖 두무진이라는 이름의 이야기
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              두무진이라는 이름은 여러 장군이 머리를 맞대고
              회의를 하는 모습처럼 바위들이 모여 있는 모습에서
              유래했다는 이야기가 전해집니다.
            </p>

            <p>
              두무진 일대에는 보는 위치와 형태에 따라
              여러 이름으로 불리는 바위들이 있으며,
              거대한 암벽과 바다가 어우러진 풍경 자체가
              두무진을 상징하는 모습이 되었습니다.
            </p>

            <p>
              단순히 하나의 바위를 보고 돌아오는 곳이라기보다
              산책하면서 시시각각 달라지는 해안 풍경을 감상하는 것이
              두무진을 제대로 즐기는 방법입니다.
            </p>
          </div>
        </section>

        {/* 핵심 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 두무진에서 꼭 봐야 할 풍경
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">
                🪨 기암절벽
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다를 따라 이어지는 거대한 바위와 절벽은
                두무진을 대표하는 풍경입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold text-emerald-900">
                🚶 해안 산책
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                산책로를 따라 이동하며 위치에 따라 달라지는
                바위와 바다 풍경을 천천히 감상해 보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-xl font-extrabold text-blue-900">
                🚢 바다에서 보는 두무진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                유람선이 운항하는 날에는 육지와는 다른 각도에서
                두무진의 절벽과 해안 풍경을 바라볼 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold text-orange-900">
                📸 바위와 서해 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위만 가까이 찍기보다 바다와 하늘을 함께 담으면
                두무진의 웅장한 분위기를 표현하기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 걷기 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🥾 두무진은 걸어서도 즐길 수 있어요
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              두무진은 전망만 보고 바로 돌아오기보다
              해안 산책 구간을 천천히 걸어보는 것을 추천합니다.
              걸음을 옮길 때마다 바위의 모양과 바다 풍경이 달라져
              사진을 남기기에도 좋습니다.
            </p>

            <p>
              일부 구간에는 계단이나 경사가 있을 수 있으므로
              편한 운동화를 준비하고, 비가 오거나 바람이 강한 날에는
              미끄러지지 않도록 주의하세요.
            </p>

            <p>
              부모님이나 아이와 함께 방문한다면 일행의 체력에 맞춰
              무리하지 않는 범위에서 둘러보는 것이 좋습니다.
            </p>
          </div>
        </section>

        {/* 유람선 */}
        <section className="rounded-3xl border border-blue-100 bg-blue-50 p-8 md:p-10">
          <p className="font-bold text-blue-700">
            육지와는 다른 두무진 풍경
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🚢 두무진 유람선
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              유람선을 이용할 수 있다면 바다 쪽에서 두무진을
              바라보는 것도 특별한 경험입니다. 육지에서 바라볼 때와
              달리 절벽의 높이와 해안선의 규모를 다른 각도에서
              느낄 수 있습니다.
            </p>

            <p>
              다만 섬 지역의 유람선은 기상과 파도,
              현장 상황에 따라 운항 여부가 달라질 수 있습니다.
              여행 일정에 유람선을 포함한다면 당일 운항 여부를
              반드시 확인하는 것이 좋습니다.
            </p>

            <p>
              유람선을 타지 못하는 날에도 두무진의 산책과
              육상 전망만으로 충분히 풍경을 즐길 수 있으므로
              기상 상황에 맞춰 일정을 조정하세요.
            </p>
          </div>
        </section>

        {/* 사진 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 두무진 사진 촬영 팁
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                절벽을 넓게 담기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위를 너무 가까이 촬영하기보다 주변 바다와
                함께 담으면 절벽의 규모가 잘 표현됩니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                인물과 자연 함께
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                인물을 작게 배치하고 두무진의 바위와 바다를
                넓게 넣으면 여행지의 분위기가 살아납니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                안전한 장소에서 촬영
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                좋은 사진을 위해 바위 가장자리나 위험한 곳으로
                이동하지 말고 안전한 구간에서 촬영하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 여행 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 두무진 여행 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 해안 지역은 바람이 강할 수 있으므로
              계절에 맞는 겉옷이나 바람막이를 준비하세요.
            </li>

            <li>
              ✅ 산책을 계획한다면 계단과 경사진 구간을 고려해
              편한 운동화를 신는 것이 좋습니다.
            </li>

            <li>
              ✅ 유람선은 기상과 파도에 따라 운항이 달라질 수 있으므로
              방문 당일 운항 여부를 확인하세요.
            </li>

            <li>
              ✅ 풍경을 천천히 보고 사진도 남기려면
              일정에 충분한 시간을 확보하는 것이 좋습니다.
            </li>

            <li>
              ✅ 강풍이나 비가 내리는 날에는 해안 산책 시
              현장 안전 안내를 우선해 주세요.
            </li>
          </ul>
        </section>

        {/* 계절 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🍀 계절별 두무진 여행
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold text-green-800">
                🌸 봄
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                날씨가 좋은 날에는 산책하면서 절벽과 바다를
                천천히 둘러보기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-bold text-sky-800">
                ☀️ 여름
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                푸른 바다와 절벽 풍경을 만날 수 있지만
                햇볕에 대비해 모자와 생수를 준비하세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold text-orange-800">
                🍁 가을
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                선선한 날씨 속에서 산책과 사진여행을
                함께 즐기기 좋은 시기입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold text-slate-800">
                ❄️ 겨울
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                겨울 바다의 분위기를 느낄 수 있지만
                강풍과 낮은 체감온도에 대비하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 내부링크 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 두무진과 함께 둘러볼 백령도 명소
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            아래 관광지를 누르면 각 관광지의 상세 정보와
            여행 팁을 확인할 수 있습니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/sagot"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                사곶해변 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                넓게 펼쳐진 해변 풍경을 만나는
                백령도의 대표 자연 명소
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
                둥근 콩돌과 파도가 만들어내는
                백령도의 독특한 해안 풍경
              </p>
            </Link>

            <Link
              href="/place/kkeutseom"
              className="block rounded-2xl border-2 border-gray-200 p-5 transition hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                끝섬전망대 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                서해의 넓은 풍경과 노을을
                감상하기 좋은 전망 명소
              </p>
            </Link>
          </div>
        </section>

        {/* 추천 코스 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <h2 className="text-3xl font-black">
            🚗 백령도 대표 자연명소 코스
          </h2>

          <div className="mt-6 rounded-2xl bg-white p-6">
            <p className="text-lg font-extrabold">
              두무진 → 콩돌해안 → 사곶해변 → 끝섬전망대
            </p>

            <p className="mt-3 leading-7 text-gray-700">
              기암절벽부터 콩돌해안의 독특한 해안,
              사곶해변의 넓은 풍경과 끝섬전망대의 전망까지
              서로 다른 백령도의 자연을 둘러볼 수 있는 코스입니다.
              실제 이동 순서는 숙소 위치와 당일 날씨,
              관광지 운영 상황에 맞춰 조정하세요.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 두무진 자주 묻는 질문
          </h2>

          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold">
                Q. 두무진은 백령도에서 꼭 가볼 만한 곳인가요?
              </h3>
              <p className="mt-2 leading-7">
                두무진은 기암절벽과 서해 풍경을 함께 볼 수 있는
                백령도의 대표 자연 관광지입니다. 백령도를 처음
                방문한다면 일정에 넣어볼 만한 곳입니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 유람선을 꼭 타야 하나요?
              </h3>
              <p className="mt-2 leading-7">
                꼭 그렇지는 않습니다. 산책과 육상 전망만으로도
                두무진의 풍경을 즐길 수 있으며, 유람선이 운항하는
                날에는 바다에서 다른 각도의 풍경을 볼 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 유람선은 항상 운항하나요?
              </h3>
              <p className="mt-2 leading-7">
                기상과 파도, 현장 상황에 따라 운항 여부가
                달라질 수 있으므로 방문 당일 확인하는 것이 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 부모님이나 아이와 함께 가도 괜찮나요?
              </h3>
              <p className="mt-2 leading-7">
                함께 방문할 수 있지만 계단이나 걷는 구간이 있을 수 있어
                일행의 체력과 현장 상태에 맞춰 관람 범위를 조절하세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 두무진과 어디를 함께 둘러보면 좋나요?
              </h3>
              <p className="mt-2 leading-7">
                콩돌해안과 사곶해변처럼 서로 다른 해안 풍경을
                함께 둘러보고, 일정 마지막에 끝섬전망대를
                연결하면 백령도의 다양한 자연을 경험할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 안전 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            ⚠️ 두무진 방문 전 확인
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            두무진은 해안과 산책 구간이 포함된 자연 관광지입니다.
            날씨와 바람, 파도에 따라 산책이나 유람선 이용 여건이
            달라질 수 있으므로 방문 당일 현장 안내를 확인하고
            안전수칙을 따라주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="dumujin"
        placeName="두무진"
      />
    </PlaceTemplate>
  );
}