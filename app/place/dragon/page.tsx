import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 용틀임바위 여행 가이드 | 백령도의 모든 정보",
  description: "용이 승천하는 모습을 닮은 백령도 용틀임바위의 자연경관, 사진 포인트, 방문 팁과 주변 코스를 확인하세요.",
};

export default function YongteulimPage() {
  return (
    <PlaceTemplate
      title="용틀임바위"
      subtitle="용이 하늘로 승천하는 모습을 닮은 백령도의 대표 기암절벽"
      image="/images/dragon.jpg"
      badges={["기암절벽", "포토존", "자연경관"]}
      quickFacts={[["추천 대상", "가족 · 연인 · 사진 여행"], ["추천 시간", "30~40분"], ["관람 방법", "도보 관람"], ["준비물", "운동화 · 카메라"]]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🪨 용틀임바위은(는) 어떤 곳인가요?</h2>
        <p className="mt-5 leading-8 text-gray-700">용틀임바위는 용이 몸을 비틀며 하늘로 오르는 모습을 닮았다고 하여 이름 붙여진 백령도의 대표 기암절벽입니다.</p>
        <p className="mt-5 leading-8 text-gray-700">오랜 세월 파도와 바람이 만들어 낸 독특한 암석 지형은 백령도의 자연이 만든 조형물처럼 보이며, 보는 위치와 빛에 따라 분위기가 달라집니다.</p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 꼭 보고 느껴볼 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">독특한 바위 형태</h3>
            <p className="mt-3 leading-7 text-gray-700">용이 몸을 틀어 오르는 듯한 형상을 찾아보는 재미가 있습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">해안 지형</h3>
            <p className="mt-3 leading-7 text-gray-700">바위뿐 아니라 주변 해안과 바다를 함께 바라보면 풍경이 더 입체적입니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">사진 포인트</h3>
            <p className="mt-3 leading-7 text-gray-700">바위 전체 형태가 드러나는 위치에서 주변 풍경까지 함께 담아보세요.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">자연 관찰</h3>
            <p className="mt-3 leading-7 text-gray-700">파도와 바람이 만든 백령도 해안 지형을 가까이에서 느낄 수 있습니다.</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🧭 백령도 여행 팁</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
          <li>✅ 바위 주변은 지면 상태가 고르지 않을 수 있으니 미끄럼 방지 운동화를 추천합니다.</li>
          <li>✅ 파도와 바람이 강한 날에는 해안 가까이 접근하지 말고 안전거리를 지켜주세요.</li>
          <li>✅ 사진은 바위만 확대하기보다 주변 해안선과 함께 담으면 장소의 분위기가 잘 살아납니다.</li>
          <li>✅ 일출·일몰 여부는 계절과 관람 위치에 따라 달라질 수 있으므로 당일 일조 시간을 확인해 주세요.</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🍀 계절별 방문 체크</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6"><h3 className="text-xl font-bold">🌸 봄</h3><p className="mt-3 leading-7 text-gray-700">선선한 날을 골라 산책과 주변 관광지를 함께 둘러보기 좋습니다.</p></div>
            <div className="rounded-2xl bg-sky-50 p-6"><h3 className="text-xl font-bold">☀️ 여름</h3><p className="mt-3 leading-7 text-gray-700">햇볕과 자외선에 대비하고 생수와 모자를 준비하면 좋습니다.</p></div>
            <div className="rounded-2xl bg-orange-50 p-6"><h3 className="text-xl font-bold">🍁 가을</h3><p className="mt-3 leading-7 text-gray-700">선선한 날씨와 부드러운 빛 덕분에 산책과 사진 여행에 잘 맞습니다.</p></div>
            <div className="rounded-2xl bg-slate-100 p-6"><h3 className="text-xl font-bold">❄️ 겨울</h3><p className="mt-3 leading-7 text-gray-700">강풍과 체감온도에 대비하고 여객선 운항과 현지 기상을 먼저 확인하세요.</p></div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🗺️ 함께 가기 좋은 코스</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">콩돌해안</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">둥근 자갈과 파도 소리가 인상적인 자연 명소</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">사자바위</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">독특한 바위 형태를 함께 찾아보는 자연 코스</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">하늬해변</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 해안 생태와 풍경을 만날 수 있는 곳</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold">Q. 운동화가 필요한가요?</h3>
            <p className="mt-2 leading-7 text-gray-700">네. 해안 주변은 미끄럽거나 지면이 고르지 않을 수 있어 편한 운동화가 좋습니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 사진 촬영은 언제가 좋은가요?</h3>
            <p className="mt-2 leading-7 text-gray-700">강한 한낮빛보다 오전이나 늦은 오후가 바위의 굴곡을 표현하기 좋습니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 비바람이 강해도 관람할 수 있나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">안전을 우선해야 합니다. 강풍·높은 파도·우천 시에는 현장 통제와 안전 안내를 따라주세요.</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <p className="leading-7 text-amber-950">
            <strong>방문 전 확인:</strong> 섬 지역은 기상, 도로, 시설 운영 상황이 달라질 수 있습니다.
            운영시간·출입 가능 여부·현장 안전 안내는 방문 당일 최신 정보를 우선해 주세요.
          </p>
        </section>
      </div>

      <PlaceReviews placeSlug="yongteulim" placeName="용틀임바위" />
    </PlaceTemplate>
  );
}
