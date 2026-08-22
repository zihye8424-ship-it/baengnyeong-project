import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 사진찍기 좋은 명소 | 백령도의 모든 정보",
  description:
    "백령도 여행에서 아름다운 풍경과 추억을 사진으로 남기기 좋은 명소와 방문 팁을 소개합니다.",
};

export default function PhotozonePage() {
  return (
    <PlaceTemplate
      title="사진찍기 좋은 명소"
      subtitle="백령도의 바다와 자연을 배경으로 여행의 특별한 순간을 남겨보세요"
      image="/images/photozone.jpg"
      badges={["포토존", "사진 여행", "자연경관"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 친구 · 사진 여행"],
        ["추천 시간", "오전 또는 해 질 무렵"],
        ["관람 방법", "도보 · 자유 촬영"],
        ["준비물", "카메라 · 휴대폰 · 바람막이"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">
          📷 백령도에서 사진찍기 좋은 명소
        </h2>

        <div className="mt-6 space-y-5 leading-8 text-gray-700">
          <p>
            백령도는 바다와 해안 절벽, 넓은 해변과 독특한 자연경관이
            어우러져 여행 사진을 남기기 좋은 섬입니다. 같은 장소라도
            시간과 날씨에 따라 전혀 다른 분위기의 풍경을 만날 수 있습니다.
          </p>

          <p>
            특히 맑은 날의 푸른 바다와 늦은 오후의 부드러운 햇빛,
            해 질 무렵 붉게 물드는 서해 풍경은 백령도 여행에서
            놓치기 아까운 장면입니다.
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">✨ 사진을 예쁘게 남기는 방법</h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            [
              "🌅 해 질 무렵",
              "일몰 전후에는 빛이 부드러워 바다와 인물 사진을 함께 담기 좋습니다.",
            ],
            [
              "🌊 바다와 함께",
              "인물만 가까이 찍기보다 백령도의 바다와 해안선을 넓게 담아보세요.",
            ],
            [
              "🪨 자연을 배경으로",
              "기암괴석과 해변 등 백령도만의 자연환경을 배경으로 활용하면 특별한 여행 사진이 됩니다.",
            ],
            [
              "📱 휴대폰 촬영",
              "휴대폰으로도 수평선을 맞추고 밝기를 조절하면 깔끔한 풍경 사진을 남길 수 있습니다.",
            ],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">{title}</h3>
              <p className="mt-3 leading-7 text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">📍 함께 둘러보기 좋은 포토 명소</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["두무진", "기암절벽과 서해가 어우러진 백령도 대표 풍경"],
            ["콩돌해안", "둥근 콩돌과 바다를 함께 담을 수 있는 특별한 해안"],
            ["끝섬전망대", "서해의 넓은 풍경과 일몰을 감상하기 좋은 전망 명소"],
            ["사곶해변", "넓게 펼쳐진 해변을 배경으로 사진을 남기기 좋은 곳"],
            ["사자바위", "독특한 바위와 해안 풍경을 함께 감상할 수 있는 명소"],
            ["서해최북단 백령도비", "백령도 방문을 기념하는 인증사진을 남기기 좋은 곳"],
          ].map(([name, description]) => (
            <div
              key={name}
              className="rounded-2xl border border-gray-200 p-5 transition hover:shadow-lg"
            >
              <h3 className="text-lg font-extrabold">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">🧭 주민 여행 팁</h2>

        <div className="mt-6 space-y-4 leading-8 text-gray-700">
          <p>✅ 백령도는 바람이 강한 날이 많아 촬영할 때 바람막이를 준비하면 좋습니다.</p>
          <p>✅ 해안이나 바위 주변에서는 사진 촬영 때문에 위험한 곳으로 무리하게 이동하지 마세요.</p>
          <p>✅ 오전과 늦은 오후에는 한낮보다 빛이 부드러워 사진을 남기기 좋습니다.</p>
          <p>✅ 날씨에 따라 바다 색과 분위기가 크게 달라지므로 흐린 날에도 백령도만의 색다른 풍경을 만날 수 있습니다.</p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">🍀 계절별 사진 여행</h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["🌸 봄", "선선한 날씨와 맑은 하늘을 배경으로 자연스러운 여행 사진을 남기기 좋습니다."],
            ["☀️ 여름", "푸른 바다의 색이 돋보이는 시기로 시원한 백령도 풍경을 담아보세요."],
            ["🍁 가을", "선명한 하늘과 아름다운 노을을 만날 수 있어 풍경 사진을 찍기 좋습니다."],
            ["❄️ 겨울", "강한 바람과 겨울 바다가 만들어내는 백령도 특유의 웅장한 분위기를 담을 수 있습니다."],
          ].map(([season, description]) => (
            <div key={season} className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-xl font-bold">{season}</h3>
              <p className="mt-3 leading-7 text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">❓ 사진 여행 FAQ</h2>

        <div className="mt-6 space-y-6 text-gray-700">
          <div>
            <h3 className="text-lg font-bold">Q. 사진 찍기 가장 좋은 시간은 언제인가요?</h3>
            <p className="mt-2 leading-7">
              한낮보다 오전이나 해 질 무렵처럼 햇빛이 부드러운 시간대를 추천합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Q. 휴대폰으로도 예쁘게 찍을 수 있나요?</h3>
            <p className="mt-2 leading-7">
              네. 수평선을 맞추고 바다와 하늘이 충분히 들어가도록 촬영하면 휴대폰으로도 멋진 여행 사진을 남길 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Q. 어디를 함께 둘러보면 좋나요?</h3>
            <p className="mt-2 leading-7">
              두무진, 콩돌해안, 사곶해변, 끝섬전망대처럼 서로 다른 풍경을 가진 관광지를 함께 둘러보면 다양한 사진을 남길 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      <PlaceReviews
        placeSlug="photozone"
        placeName="사진찍기 좋은 명소"
      />
    </PlaceTemplate>
  );
}
