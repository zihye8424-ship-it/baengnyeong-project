import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 끝섬전망대 여행 가이드 | 백령도의 모든 정보",
  description:
    "백령도 끝섬전망대의 일몰, 옛 사진 전시, 3D 스마트 체험존, 안보 전시와 여행 팁을 확인하세요.",
};

export default function KkeutseomPage() {
  return (
    <PlaceTemplate
      title="끝섬전망대"
      subtitle="백령도 서쪽 끝에서 서해와 아름다운 노을을 가까이 만날 수 있는 대표 전망 명소"
      image="/images/kkutseom.jpg"
      badges={["일몰 명소", "대표 전망대", "사진 명소"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 사진 여행"],
        ["추천 시간", "일몰 전 여유 있게"],
        ["관람 방법", "전망 · 전시 · 도보 산책"],
        ["준비물", "운동화 · 바람막이 · 카메라"],
      ]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🌅 끝섬전망대는 어떤 곳인가요?</h2>
          <p className="mt-5 leading-8 text-gray-700">
            끝섬전망대는 백령도 서쪽 끝에 위치한 대표 전망 명소로, 드넓은 서해와 아름다운 노을을 감상할 수 있는 곳입니다.
            날씨가 좋은 날에는 수평선과 백령도의 해안 풍경을 한눈에 바라볼 수 있어 많은 여행객들이 찾습니다.
          </p>
          <p className="mt-5 leading-8 text-gray-700">
            전망대는 바깥 풍경만 보는 곳이 아니라 백령도의 옛 모습과 역사·문화·안보 이야기를 함께 접할 수 있는 전시 공간도 있어
            가족이나 아이와 함께 방문하기 좋습니다.
          </p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🏛️ 전시관에서 꼭 봐야 할 공간</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">🖼️ 백령도 옛 사진 전시</h3>
              <p className="mt-4 leading-7 text-gray-700">
                과거 백령도 마을의 모습과 주민들의 생활상을 담은 사진을 통해 현재와 비교하며 섬의 변화를 살펴볼 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">🖥️ 3D 스마트 체험존</h3>
              <p className="mt-4 leading-7 text-gray-700">
                디지털 콘텐츠를 활용해 백령도의 주요 관광지와 자연환경을 입체적으로 접할 수 있어 아이들과 함께 보기 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">💥 안보 관련 전시</h3>
              <p className="mt-4 leading-7 text-gray-700">
                연평도 포격과 관련해 전시된 자료를 통해 서해5도가 지닌 역사와 안보의 의미를 생각해볼 수 있습니다.
                전시물의 정확한 명칭과 설명은 현장 안내문을 기준으로 확인해 주세요.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 꼭 봐야 할 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              ["🌅 서해 일몰", "하늘과 바다가 천천히 물드는 시간을 여유 있게 감상해보세요."],
              ["🖼️ 백령도 옛 사진", "주민 생활과 마을의 변화를 사진으로 비교해볼 수 있습니다."],
              ["🖥️ 3D 스마트 체험존", "아이와 함께 백령도 자연과 관광지를 체험형 콘텐츠로 접하기 좋습니다."],
              ["🌊 전망대 풍경", "난간 주변에서 서해와 백령도의 해안선을 넓게 바라볼 수 있습니다."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl bg-orange-50 p-6">
                <h3 className="text-xl font-bold text-orange-700">{title}</h3>
                <p className="mt-3 leading-7 text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🧭 주민 여행 팁</h2>
          <div className="mt-6 space-y-4 leading-8 text-gray-700">
            <p>✅ 일몰을 보려면 해 지는 시각에 딱 맞춰 가기보다 30~40분 정도 여유 있게 도착하는 편이 좋습니다.</p>
            <p>✅ 바닷바람이 강한 날이 많으므로 계절에 관계없이 얇은 바람막이를 준비하면 좋습니다.</p>
            <p>✅ 전망과 전시를 함께 천천히 둘러보려면 약 40~60분 정도 여유를 두세요.</p>
            <p>✅ 날씨가 흐리거나 강풍이 심하면 일몰 감상 조건이 달라질 수 있으니 당일 기상을 확인하세요.</p>
            <p>✅ 끝섬전망대 방문 후 두무진이나 사곶해변을 함께 묶으면 대표 관광지를 효율적으로 둘러볼 수 있습니다.</p>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🍀 계절별 끝섬전망대 여행 추천</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6"><h3 className="text-xl font-bold">🌸 봄</h3><p className="mt-3 leading-7 text-gray-700">맑고 선선한 날에는 전망과 산책을 함께 즐기기 좋습니다.</p></div>
            <div className="rounded-2xl bg-sky-50 p-6"><h3 className="text-xl font-bold">☀️ 여름</h3><p className="mt-3 leading-7 text-gray-700">긴 해 덕분에 여유 있게 움직일 수 있지만 햇볕과 자외선에 대비하세요.</p></div>
            <div className="rounded-2xl bg-orange-50 p-6"><h3 className="text-xl font-bold">🍁 가을</h3><p className="mt-3 leading-7 text-gray-700">선선한 공기와 노을을 함께 즐기기 좋은 시기입니다.</p></div>
            <div className="rounded-2xl bg-slate-100 p-6"><h3 className="text-xl font-bold">❄️ 겨울</h3><p className="mt-3 leading-7 text-gray-700">겨울 바다 풍경이 인상적이지만 강풍과 체감온도에 대비한 방한 준비가 필요합니다.</p></div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🗺️ 함께 가기 좋은 코스</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["두무진", "백령도를 대표하는 기암절벽과 해안 절경"],
              ["사곶해변", "넓은 해변과 독특한 지형으로 유명한 대표 명소"],
              ["콩돌해안", "파도와 둥근 자갈이 만드는 특별한 해안"],
            ].map(([name, description]) => (
              <div key={name} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="font-extrabold text-lg">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6">
            <div><h3 className="font-bold text-lg">Q. 언제 방문하는 것이 가장 좋나요?</h3><p className="mt-2 text-gray-700">일몰을 보고 싶다면 일몰 시각보다 30~40분 정도 여유 있게 도착하는 것을 추천합니다.</p></div>
            <div><h3 className="font-bold text-lg">Q. 전시관도 함께 볼 수 있나요?</h3><p className="mt-2 text-gray-700">전망과 함께 백령도 관련 전시·체험 공간을 둘러볼 수 있습니다. 세부 운영 여부는 방문 당일 현장 안내를 확인해 주세요.</p></div>
            <div><h3 className="font-bold text-lg">Q. 관람 시간은 얼마나 걸리나요?</h3><p className="mt-2 text-gray-700">전망과 전시를 함께 천천히 보면 약 40~60분 정도를 생각하면 좋습니다.</p></div>
            <div><h3 className="font-bold text-lg">Q. 입장료와 운영시간은 어떻게 확인하나요?</h3><p className="mt-2 text-gray-700">요금과 운영시간은 변경될 수 있으므로 방문 당일 최신 현장·공식 안내를 우선해 주세요.</p></div>
          </div>
        </section>
      </div>

      <PlaceReviews placeSlug="kkeutseom" placeName="끝섬전망대" />
    </PlaceTemplate>
  );
}
