import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "천안함 46용사 위령탑 | 백령도의 모든 정보",
  description: "백령도 천안함 46용사 위령탑의 의미와 관람 예절, 방문 팁, 주변 코스를 소개합니다.",
};

export default function CheonanPage() {
  return (
    <PlaceTemplate
      title="천안함 46용사 위령탑"
      subtitle="나라를 위해 희생한 46용사를 추모하는 백령도의 대표 안보·역사 명소"
      image="/images/cheonan.jpg"
      badges={["안보관광", "역사교육", "추모공간"]}
      quickFacts={[["추천 대상", "가족 · 학생 · 역사여행"], ["추천 시간", "30~40분"], ["관람 방법", "도보 관람"], ["준비물", "차분한 마음 · 바람막이"]]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🇰🇷 천안함 46용사 위령탑은(는) 어떤 곳인가요?</h2>
        <p className="mt-5 leading-8 text-gray-700">천안함 46용사 위령탑은 2010년 천안함 피격 사건으로 희생된 46명의 용사를 추모하기 위해 조성된 추모 공간입니다.</p>
        <p className="mt-5 leading-8 text-gray-700">위령탑에서는 백령도의 안보 역사와 함께 나라를 위해 헌신한 장병들의 희생을 기억할 수 있으며, 많은 방문객들이 경건한 마음으로 찾는 장소입니다.</p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 꼭 보고 느껴볼 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">추모의 공간</h3>
            <p className="mt-3 leading-7 text-gray-700">관광지라기보다 희생자를 기억하고 추모하는 의미가 큰 장소입니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">안보·역사 교육</h3>
            <p className="mt-3 leading-7 text-gray-700">가족이나 학생과 함께 백령도의 안보적 의미를 생각해볼 수 있습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">조용한 관람</h3>
            <p className="mt-3 leading-7 text-gray-700">다른 방문객의 추모를 방해하지 않도록 차분하게 둘러보는 것이 좋습니다.</p>
          </div>
          <div className="rounded-2xl bg-sky-50 p-6">
            <h3 className="text-xl font-extrabold text-sky-900">주변 풍경</h3>
            <p className="mt-3 leading-7 text-gray-700">백령도의 바다와 지형을 바라보며 사건의 현장성과 지역의 의미를 생각해볼 수 있습니다.</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🧭 백령도 여행 팁</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
          <li>✅ 추모 공간에서는 큰 소리나 장난스러운 촬영을 피하고 관람 예절을 지켜주세요.</li>
          <li>✅ 아이와 방문한다면 사건의 의미를 연령에 맞게 먼저 설명해주면 관람에 도움이 됩니다.</li>
          <li>✅ 강풍이 부는 날이 있으므로 계절과 관계없이 겉옷을 챙기는 편이 좋습니다.</li>
          <li>✅ 현장 관람 안내나 통제 사항이 있다면 반드시 해당 안내를 따라주세요.</li>
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
            <h3 className="text-lg font-extrabold">사곶해변</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 대표 자연경관을 함께 둘러보기 좋은 곳</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">심청각</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">설화와 문화 이야기를 접할 수 있는 관광지</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="text-lg font-extrabold">서해최북단 백령도비</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">백령도 방문 인증사진을 남기기 좋은 명소</p>
          </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold">Q. 아이와 방문해도 되나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">네. 역사·안보 교육의 의미가 있지만 추모 공간인 만큼 관람 예절을 함께 알려주세요.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 사진 촬영이 가능한가요?</h3>
            <p className="mt-2 leading-7 text-gray-700">현장 안내와 추모 예절을 우선해 주세요. 촬영 제한 표시가 있는 곳에서는 안내를 따라야 합니다.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Q. 관람 시간은 얼마나 잡으면 되나요?</h3>
            <p className="mt-2 leading-7 text-gray-700">차분히 둘러보는 기준으로 약 30~40분 정도를 생각하면 좋습니다.</p>
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

      <PlaceReviews placeSlug="cheonan" placeName="천안함 46용사 위령탑" />
    </PlaceTemplate>
  );
}
