import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 사진찍기 좋은 곳 BEST 6 | 포토존·일몰·바다 명소",
  description:
    "백령도에서 사진찍기 좋은 두무진, 콩돌해안, 끝섬전망대, 사곶해변, 사자바위, 서해최북단 백령도비와 사진 촬영 팁을 소개합니다.",
};

export default function PhotozonePage() {
  return (
    <PlaceTemplate
      title="사진찍기 좋은 명소"
      subtitle="백령도의 바다와 기암, 해변과 노을을 배경으로 여행의 특별한 순간을 남겨보세요"
      image="/images/photozone.jpg"
      badges={["포토존", "사진여행", "자연경관", "일몰"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 친구 · 사진여행"],
        ["추천 시간", "오전 · 늦은 오후"],
        ["추천 장소", "두무진 · 콩돌해안 · 끝섬전망대"],
        ["준비물", "휴대폰 · 카메라 · 바람막이"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📷 백령도에서 사진찍기 좋은 곳
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              백령도는 바다와 기암, 넓은 해변과 독특한 해안 풍경이
              어우러져 여행 사진을 남기기 좋은 섬입니다.
              같은 장소라도 시간과 날씨에 따라 전혀 다른 분위기의
              풍경을 만날 수 있습니다.
            </p>

            <p>
              웅장한 자연 풍경을 담고 싶다면 두무진,
              독특한 해안을 담고 싶다면 콩돌해안과 사곶해변,
              서해의 노을을 찍고 싶다면 끝섬전망대를 여행 일정에
              넣어보세요.
            </p>

            <p>
              백령도 방문 자체를 기록하고 싶다면
              서해최북단 백령도비에서 인증사진을 남기는 것도 좋습니다.
              장소마다 풍경의 특징이 달라 여러 곳을 둘러보면
              다양한 분위기의 여행 사진을 남길 수 있습니다.
            </p>
          </div>
        </section>

        {/* BEST 6 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📍 백령도 사진 명소 BEST 6
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            원하는 장소를 누르면 관광지 상세 페이지에서
            여행 정보와 방문 팁을 확인할 수 있습니다.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <Link
              href="/place/dumujin"
              className="block rounded-2xl border-2 border-gray-200 p-6 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-lg"
            >
              <p className="text-sm font-bold text-sky-600">
                웅장한 자연 풍경
              </p>
              <h3 className="mt-2 text-xl font-extrabold">
                ① 두무진 →
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                기암과 서해가 어우러지는 백령도의 대표적인 자연 풍경을
                사진으로 남겨보세요.
              </p>
            </Link>

            <Link
              href="/place/kongdol"
              className="block rounded-2xl border-2 border-gray-200 p-6 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-lg"
            >
              <p className="text-sm font-bold text-sky-600">
                특별한 해안 풍경
              </p>
              <h3 className="mt-2 text-xl font-extrabold">
                ② 콩돌해안 →
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                둥근 콩돌과 바다가 어우러진 백령도만의 독특한
                해안 풍경을 담기 좋은 곳입니다.
              </p>
            </Link>

            <Link
              href="/place/kkeutseom"
              className="block rounded-2xl border-2 border-gray-200 p-6 transition hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 hover:shadow-lg"
            >
              <p className="text-sm font-bold text-orange-600">
                노을 사진
              </p>
              <h3 className="mt-2 text-xl font-extrabold">
                ③ 끝섬전망대 →
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                넓게 펼쳐진 서해와 해 질 무렵의 노을을
                함께 담기 좋은 전망 명소입니다.
              </p>
            </Link>

            <Link
              href="/place/sagot"
              className="block rounded-2xl border-2 border-gray-200 p-6 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-lg"
            >
              <p className="text-sm font-bold text-sky-600">
                넓은 해변
              </p>
              <h3 className="mt-2 text-xl font-extrabold">
                ④ 사곶해변 →
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                넓게 펼쳐진 해변과 바다를 배경으로 시원한 느낌의
                여행 사진을 남겨보세요.
              </p>
            </Link>

            <Link
              href="/place/sajabawi"
              className="block rounded-2xl border-2 border-gray-200 p-6 transition hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-50 hover:shadow-lg"
            >
              <p className="text-sm font-bold text-amber-700">
                기암 포토존
              </p>
              <h3 className="mt-2 text-xl font-extrabold">
                ⑤ 사자바위 →
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                독특한 바위와 백령도의 바다를 한 화면에 담아
                자연스러운 여행 사진을 남길 수 있습니다.
              </p>
            </Link>

            <Link
              href="/place/baengnyeong-bi"
              className="block rounded-2xl border-2 border-gray-200 p-6 transition hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-50 hover:shadow-lg"
            >
              <p className="text-sm font-bold text-sky-600">
                백령도 인증사진
              </p>
              <h3 className="mt-2 text-xl font-extrabold">
                ⑥ 서해최북단 백령도비 →
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                백령도에 다녀왔다는 여행 기록을 남기기 좋은
                대표적인 인증사진 장소입니다.
              </p>
            </Link>

          </div>
        </section>

        {/* 목적별 추천 */}
        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-8 md:p-10">
          <h2 className="text-3xl font-black">
            🎯 어떤 사진을 찍고 싶나요?
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">
                🌅 노을 사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                서해로 지는 해와 하늘빛을 담고 싶다면
                끝섬전망대를 일정에 넣어보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다 사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                넓고 시원한 바다 풍경을 담고 싶다면
                사곶해변과 두무진을 추천합니다.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">
                🪨 백령도만의 자연
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                독특한 자연경관을 남기고 싶다면 콩돌해안과
                사자바위처럼 특징이 뚜렷한 장소를 둘러보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">
                📍 여행 인증사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                백령도 여행 자체를 기록하고 싶다면
                서해최북단 백령도비에서 사진을 남겨보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 촬영 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ✨ 백령도 여행사진 잘 찍는 방법
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌅 빛이 부드러운 시간 활용
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                한낮보다 오전이나 늦은 오후에는 빛이 비교적 부드러워
                풍경과 인물을 함께 촬영하기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다를 넓게 담기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                인물만 크게 찍기보다 백령도의 바다와 해안선이
                충분히 보이도록 구도를 잡아보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🪨 장소의 특징 살리기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                기암이나 콩돌, 넓은 해변처럼 각 관광지만의
                특징이 보이도록 배경을 활용하면 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-extrabold">
                📱 휴대폰 수평선 맞추기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                휴대폰 카메라의 격자 기능을 활용해 수평선을
                맞추는 것만으로도 사진이 훨씬 안정적으로 보입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 여행 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 사진여행 전 알아두면 좋은 점
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 백령도는 바람이 강하게 부는 날이 있으므로
              촬영할 때 사용할 겉옷이나 바람막이를 준비하세요.
            </li>

            <li>
              ✅ 해안이나 바위 주변에서는 좋은 사진을 찍기 위해
              위험한 장소로 무리하게 이동하지 마세요.
            </li>

            <li>
              ✅ 일몰 사진을 계획한다면 방문 날짜의 일몰 시각과
              당일 날씨를 미리 확인하는 것이 좋습니다.
            </li>

            <li>
              ✅ 흐린 날에도 바다와 기암이 만들어내는 분위기가
              달라지므로 날씨에 맞는 풍경을 즐겨보세요.
            </li>

            <li>
              ✅ 여러 관광지를 촬영한다면 이동 시간을 고려해
              하루 일정을 너무 빡빡하게 잡지 않는 것이 좋습니다.
            </li>
          </ul>
        </section>

        {/* 계절 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🍀 계절별 백령도 사진여행
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold">🌸 봄</h3>
              <p className="mt-3 leading-7 text-gray-700">
                선선한 날씨에는 여러 관광지를 이동하며
                자연스러운 여행 사진을 남기기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-bold">☀️ 여름</h3>
              <p className="mt-3 leading-7 text-gray-700">
                푸른 바다의 색이 돋보이는 시기입니다.
                햇볕과 자외선에 대비해 촬영하세요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold">🍁 가을</h3>
              <p className="mt-3 leading-7 text-gray-700">
                선선한 날씨 속에서 바다 풍경과 노을을
                함께 촬영하기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold">❄️ 겨울</h3>
              <p className="mt-3 leading-7 text-gray-700">
                겨울 바다 특유의 분위기를 담을 수 있지만
                강풍과 낮은 체감온도에 대비하세요.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 백령도 사진여행 FAQ
          </h2>

          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold">
                Q. 백령도에서 사진찍기 좋은 곳은 어디인가요?
              </h3>
              <p className="mt-2 leading-7">
                두무진, 콩돌해안, 사곶해변, 끝섬전망대,
                사자바위와 서해최북단 백령도비 등 장소마다
                서로 다른 분위기의 사진을 남길 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 노을 사진은 어디에서 찍으면 좋나요?
              </h3>
              <p className="mt-2 leading-7">
                서해의 일몰을 감상하고 싶다면 끝섬전망대를
                일정에 넣어보세요. 날씨와 계절에 따라
                일몰 시각과 풍경은 달라질 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 휴대폰으로도 예쁘게 찍을 수 있나요?
              </h3>
              <p className="mt-2 leading-7">
                네. 수평선을 맞추고 바다와 하늘이 충분히
                들어가도록 촬영하면 휴대폰으로도 백령도의
                넓은 풍경을 잘 담을 수 있습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 사진 명소를 하루에 모두 볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7">
                이동 시간과 각 장소에서 머무는 시간에 따라 달라집니다.
                사진 촬영이 목적이라면 장소 수를 무리하게 늘리기보다
                여행 일정에 맞춰 여유 있게 둘러보는 것을 추천합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 안전 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            ⚠️ 사진보다 안전이 먼저예요
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            해안과 바위 주변은 기상과 파도에 따라 위험할 수 있습니다.
            좋은 사진을 찍기 위해 출입이 제한된 장소나 위험한 위치로
            이동하지 말고 현장의 안전 안내를 따라주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="photozone"
        placeName="사진찍기 좋은 명소"
      />
    </PlaceTemplate>
  );
}