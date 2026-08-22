import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 콩돌해안 여행 가이드 | 백령도의 모든 정보",
  description: "파도가 다듬은 둥근 자갈로 유명한 백령도 콩돌해안의 산책, 사진 포인트, 방문 주의사항과 주변 코스를 확인하세요.",
};

export default function KongdolPage() {
  return (
    <PlaceTemplate
      title="콩돌해안"
      subtitle="파도가 오랜 시간 다듬어 만든 콩돌과 푸른 바다가 어우러진 백령도의 특별한 해안"
      image="/images/kongdol.jpg"
      badges={["천연 해안", "사진 명소", "산책 코스"]}
      quickFacts={[["추천 대상", "가족 · 연인 · 사진 여행"], ["추천 시간", "오전 ~ 일몰 전"], ["관람 방법", "도보 산책"], ["준비물", "운동화 · 카메라"]]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🪨 콩돌해안은(는) 어떤 곳인가요?</h2>
        <p className="mt-5 leading-8 text-gray-700">콩돌해안은 모래 대신 둥글게 다듬어진 자갈이 해안을 가득 메우고 있는 백령도의 대표 자연 명소입니다. 파도가 밀려왔다 빠질 때마다 콩돌이 부딪히며 만들어내는 소리가 이곳만의 특별한 매력입니다.</p>
        <p className="mt-5 leading-8 text-gray-700">해안을 따라 천천히 걸으며 서해의 풍경을 감상하기 좋고, 빛이 부드러운 시간에는 둥근 자갈과 바다가 어우러진 사진을 남기기 좋습니다.</p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 꼭 보고 느껴볼 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">둥근 콩돌</h3>
            <p className="mt-3 leading-7 text-gray-700">크기와 색이 다양한 둥근 자갈을 눈으로 관찰해보세요.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">파도 소리</h3>
            <p className="mt-3 leading-7 text-gray-700">파도가 드나들며 자갈이 움직일 때 들리는 독특한 소리가 인상적입니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">해안 산책</h3>
            <p className="mt-3 leading-7 text-gray-700">빠르게 지나가기보다 천천히 걸으며 풍경과 소리를 함께 즐기기 좋습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">자연 그대로 보기</h3>
            <p className="mt-3 leading-7 text-gray-700">해안의 자갈과 자연물을 가져가지 않고 현장에서 감상하는 여행이 중요합니다.</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🧭 백령도 여행 팁</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
          <li>✅ 자갈 위는 모래사장보다 걷기 불편할 수 있어 발을 잘 잡아주는 운동화를 추천합니다.</li>
          <li>✅ 파도가 강한 날에는 물가 가까이 가지 말고 안전거리를 유지하세요.</li>
          <li>✅ 콩돌은 해안 경관을 이루는 자연자원이므로 가져가지 말고 눈과 사진으로만 담아주세요.</li>
          <li>✅ 늦은 오후에는 빛이 부드러워 자갈의 질감과 바다를 함께 촬영하기 좋습니다.</li>
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
            <h3 className="text-lg font-extrabold">용틀임바위</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">기암과 해안 지형을 함께 볼 수 있는 자연 명소</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">하늬해변</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 생태 풍경을 만나는 코스</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">사곶해변</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">넓은 해변과 독특한 지형으로 유명한 대표 관광지</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold">Q. 콩돌을 가져가도 되나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">해안의 자연경관을 보호하기 위해 현장에서 감상하고 그대로 두는 것을 권합니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 아이와 걸어도 되나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">가능하지만 자갈 위에서 넘어지지 않도록 보호자가 함께 천천히 이동해 주세요.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 비 오는 날에도 갈 수 있나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">젖은 자갈은 미끄러울 수 있고 파도가 강해질 수 있으므로 날씨가 나쁘면 안전을 우선해 주세요.</p>
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

      <PlaceReviews placeSlug="kongdol" placeName="콩돌해안" />
    </PlaceTemplate>
  );
}
