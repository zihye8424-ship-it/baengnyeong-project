import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 하늬해변·점박이물범 여행 가이드 | 백령도의 모든 정보",
  description: "백령도 하늬해변의 생태 풍경과 점박이물범 관찰 시 유의사항, 여행 팁과 주변 코스를 확인하세요.",
};

export default function HaniPage() {
  return (
    <PlaceTemplate
      title="하늬해변 · 점박이물범"
      subtitle="점박이물범과 백령도의 해안 생태를 만날 수 있는 대표 생태 관광지"
      image="/images/hani.jpg"
      badges={["점박이물범", "생태관광", "사진 명소"]}
      quickFacts={[["추천 대상", "가족 · 자연여행"], ["추천 시간", "약 1시간"], ["관람 방법", "전망·해안 관찰"], ["준비물", "망원경 · 카메라 · 바람막이"]]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🦭 하늬해변 · 점박이물범은(는) 어떤 곳인가요?</h2>
        <p className="mt-5 leading-8 text-gray-700">하늬해변은 백령도의 해안 생태와 점박이물범 이야기를 함께 만날 수 있는 대표 생태관광지입니다.</p>
        <p className="mt-5 leading-8 text-gray-700">야생동물은 날씨와 계절, 조수와 개체 이동에 따라 보이지 않을 수 있으므로 '반드시 볼 수 있는 관광'보다는 자연을 조용히 관찰하는 일정으로 생각하는 것이 좋습니다.</p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 꼭 보고 느껴볼 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">점박이물범 관찰</h3>
            <p className="mt-3 leading-7 text-gray-700">야생동물이므로 먼 거리에서 망원경이나 줌 기능을 활용해 관찰하는 것이 좋습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">해안 생태</h3>
            <p className="mt-3 leading-7 text-gray-700">물범뿐 아니라 백령도의 바다와 해안 생태 자체를 함께 살펴보세요.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">조용한 관찰</h3>
            <p className="mt-3 leading-7 text-gray-700">큰 소리나 무리한 접근을 피하면 자연과 동물을 보호하는 여행이 됩니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">사진 촬영</h3>
            <p className="mt-3 leading-7 text-gray-700">멀리 있는 야생동물을 촬영할 때는 줌 렌즈나 망원 기능이 도움이 됩니다.</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🧭 백령도 여행 팁</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
          <li>✅ 점박이물범은 야생동물이므로 방문한다고 항상 볼 수 있는 것은 아닙니다.</li>
          <li>✅ 관찰을 위해 바위나 위험한 해안으로 무리하게 접근하지 마세요.</li>
          <li>✅ 망원경이 있다면 챙겨가면 좋고, 아이에게도 생태보호 원칙을 함께 알려주세요.</li>
          <li>✅ 강풍과 기온 변화가 큰 날이 있으므로 얇은 겉옷을 준비하는 편이 좋습니다.</li>
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
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 독특한 해안 지형을 볼 수 있는 명소</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">콩돌해안</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">파도와 둥근 자갈이 만드는 특별한 해안</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">사자바위</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">자연이 만든 바위 형상을 찾아보는 코스</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold">Q. 가면 점박이물범을 꼭 볼 수 있나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">아니요. 야생동물이기 때문에 계절·날씨·조수·개체 이동에 따라 관찰되지 않을 수 있습니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 망원경이 필요한가요?</h3>
            <p className="mt-2 leading-7 text-gray-700">필수는 아니지만 야생동물을 안전한 거리에서 관찰하는 데 큰 도움이 됩니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 아이와 가기 좋은가요?</h3>
            <p className="mt-2 leading-7 text-gray-700">네. 생태관광과 자연보호를 함께 이야기할 수 있어 가족여행에 잘 맞습니다.</p>
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

      <PlaceReviews placeSlug="hani" placeName="하늬해변 · 점박이물범" />
    </PlaceTemplate>
  );
}
