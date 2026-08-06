import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 심청각 여행 가이드 | 백령도의 모든 정보",
  description:
    "효녀 심청 설화의 배경으로 알려진 백령도 심청각의 역사와 여행 정보를 확인하세요.",
};

export default function SimcheonggakPage() {
  return (
    <PlaceTemplate
      title="심청각"
      subtitle="효녀 심청 설화와 백령도의 아름다운 바다가 함께하는 역사·문화 관광지"
      image="/images/simcheonggak.jpg"
      badges={["심청전", "역사문화", "가족여행"]}
      quickFacts={[
        ["추천 대상", "가족 · 역사여행"],
        ["추천 시간", "30~40분"],
        ["관람 방법", "도보 관람"],
        ["준비물", "카메라"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          🌸 심청각은 어떤 곳인가요?
        </h2>

        <p className="mt-5 leading-8 text-gray-700">
          심청각은 우리나라 대표 고전소설인 <strong>심청전</strong>의 배경으로
          알려진 백령도의 대표 문화관광지입니다. 효녀 심청의 이야기를
          다양한 전시와 조형물을 통해 만나볼 수 있습니다.
        </p>

        <p className="mt-5 leading-8 text-gray-700">
          건물 내부에는 심청전 관련 전시와 백령도의 역사·문화 자료가
          마련되어 있으며, 주변에서는 아름다운 서해 풍경도 함께 감상할 수
          있습니다.
        </p>
      </div>

      <PlaceReviews />
    </PlaceTemplate>
  );
}