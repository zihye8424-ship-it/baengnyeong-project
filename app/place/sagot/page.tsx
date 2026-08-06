import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 사곶해변 여행 가이드 | 백령도의 모든 정보",
  description:
    "천연비행장으로 유명한 백령도 사곶해변의 아름다운 풍경과 여행 정보를 확인하세요.",
};

export default function SagotPage() {
  return (
    <PlaceTemplate
      title="사곶해변"
      subtitle="천연기념물로 지정된 천연비행장과 고운 백사장이 어우러진 백령도의 대표 해변"
      image="/images/sagot.jpg"
      badges={["천연기념물", "천연비행장", "가족여행"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 아이"],
        ["추천 시간", "오전 ~ 일몰"],
        ["관람 방법", "도보 산책"],
        ["준비물", "운동화 · 카메라"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          🏖️ 사곶해변은 어떤 곳인가요?
        </h2>

        <p className="mt-5 leading-8 text-gray-700">
          사곶해변은 천연기념물 제391호로 지정된 백령도의 대표 해변입니다.
          모래가 단단하게 다져져 있어 과거에는 실제 항공기가 이착륙했던
          천연비행장으로도 사용되었습니다.
        </p>

        <p className="mt-5 leading-8 text-gray-700">
          약 2km에 이르는 넓은 백사장과 잔잔한 바다가 어우러져
          산책과 사진 촬영을 즐기기에 좋은 백령도의 대표 관광지입니다.
        </p>
      </div>

      <PlaceReviews />
    </PlaceTemplate>
  );
}