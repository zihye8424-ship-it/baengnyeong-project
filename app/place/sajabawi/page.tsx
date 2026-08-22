import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 사자바위 여행 가이드 | 백령도의 모든 정보",
  description:
    "백령도 사자바위의 풍경, 관람 포인트, 방문 팁과 주변 여행 코스를 소개합니다.",
};

export default function SajabawiPage() {
  return (
    <PlaceTemplate
      title="사자바위"
      subtitle="바다와 기암이 어우러진 백령도의 독특한 해안 풍경을 만나는 곳"
      image="/images/lionrock.jpg"
      badges={["기암경관", "사진 명소", "해안 풍경"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 사진 여행"],
        ["추천 시간", "30~40분"],
        ["관람 방법", "주변 경관 감상"],
        ["준비물", "운동화 · 바람막이 · 카메라"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">🦁 사자바위는 어떤 곳인가요?</h2>
        <div className="mt-6 space-y-5 leading-8 text-gray-700">
          <p>
            사자바위는 백령도의 해안 풍경과 독특한 바위 지형을 함께 감상할 수 있는 명소입니다.
            바다를 배경으로 자리한 바위와 주변 해안 경관이 어우러져 백령도만의 특별한 풍경을 만날 수 있습니다.
          </p>
          <p>
            사자바위만 빠르게 보고 이동하기보다 주변 바다와 해안선을 함께 바라보면
            백령도의 자연 풍경을 더욱 여유롭게 즐길 수 있습니다.
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">📸 꼭 살펴볼 포인트</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["바위의 형태", "보는 위치와 각도에 따라 달라지는 바위의 모습을 천천히 살펴보세요."],
            ["해안 풍경", "바위뿐 아니라 주변 바다와 해안선까지 함께 감상해 보세요."],
            ["사진 촬영", "바위와 바다가 한 화면에 들어오도록 거리를 두고 촬영하면 현장 분위기를 담기 좋습니다."],
            ["주변 여행", "인근 관광지와 함께 둘러보면 백령도 여행 동선을 효율적으로 구성할 수 있습니다."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">{title}</h3>
              <p className="mt-3 leading-7 text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">🧭 방문할 때 알아두면 좋은 점</h2>
        <div className="mt-6 space-y-4 leading-8 text-gray-700">
          <p>✅ 백령도 해안은 바람이 강하게 부는 날이 있으므로 바람막이를 준비하면 좋습니다.</p>
          <p>✅ 바위와 해안 주변에서는 미끄럽거나 고르지 않은 지면에 주의하세요.</p>
          <p>✅ 파도가 높거나 날씨가 좋지 않은 날에는 무리하게 해안 가까이 접근하지 않는 것이 좋습니다.</p>
          <p>✅ 사진만 찍고 이동하기보다 주변 해안 풍경까지 천천히 둘러보는 것을 추천합니다.</p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">🍀 계절별 방문 체크</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["🌸 봄", "선선한 날에는 해안 풍경을 둘러보기 좋습니다. 바닷바람에 대비해 겉옷을 준비하세요."],
            ["☀️ 여름", "푸른 바다와 바위가 선명하게 어우러집니다. 모자와 생수를 챙기세요."],
            ["🍁 가을", "맑고 선선한 날에는 풍경 감상과 사진 촬영을 함께 즐기기 좋습니다."],
            ["❄️ 겨울", "겨울 바다 특유의 풍경을 볼 수 있지만 강풍과 추위에 대비한 방한 준비가 필요합니다."],
          ].map(([season, description]) => (
            <div key={season} className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-xl font-bold">{season}</h3>
              <p className="mt-3 leading-7 text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">🗺️ 함께 둘러보기 좋은 명소</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["두무진", "기암절벽과 서해 풍경을 감상할 수 있는 백령도 대표 명소"],
            ["사곶해변", "넓은 해변 풍경을 만날 수 있는 백령도 대표 관광지"],
            ["콩돌해안", "둥근 콩돌과 파도 소리가 인상적인 특별한 해안"],
          ].map(([name, description]) => (
            <div key={name} className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-black">❓ 사자바위 방문 FAQ</h2>
        <div className="mt-6 space-y-6 text-gray-700">
          <div>
            <h3 className="text-lg font-bold">Q. 아이와 함께 가도 되나요?</h3>
            <p className="mt-2 leading-7">함께 둘러볼 수 있지만 해안과 바위 주변에서는 미끄러짐과 안전사고에 특히 주의해 주세요.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 비가 오는 날에도 방문할 수 있나요?</h3>
            <p className="mt-2 leading-7">우천이나 강풍 시에는 지면과 해안 상황이 좋지 않을 수 있으므로 날씨와 현장 상황을 먼저 확인하는 것이 좋습니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 얼마나 시간을 잡으면 좋을까요?</h3>
            <p className="mt-2 leading-7">사진 촬영과 주변 풍경 감상을 포함해 약 30~40분 정도를 기준으로 여행 일정에 맞춰 조절해 보세요.</p>
          </div>
        </div>
      </div>

      <PlaceReviews placeSlug="sajabawi" placeName="사자바위" />
    </PlaceTemplate>
  );
}
