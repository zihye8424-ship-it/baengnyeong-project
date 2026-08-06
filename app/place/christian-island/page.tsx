import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "한국기독교역사관 | 백령도의 모든 정보",
  description:
    "백령도 한국기독교역사관에서 한국 기독교의 역사와 백령도의 신앙 문화를 만나보세요.",
};

export default function ChristianPage() {
  return (
    <PlaceTemplate
      title="한국기독교역사관"
      subtitle="한국 기독교의 역사와 백령도의 신앙 문화를 살펴볼 수 있는 역사 문화 공간"
      image="/images/christian-island.jpg"
      badges={["역사문화", "실내관람", "교육여행"]}
      quickFacts={[
        ["추천 대상", "가족 · 학생 · 역사여행"],
        ["추천 시간", "40~60분"],
        ["관람 방법", "실내 관람"],
        ["준비물", "카메라"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          ✝️ 한국기독교역사관은 어떤 곳인가요?
        </h2>

        <p className="mt-5 leading-8 text-gray-700">
          한국기독교역사관은 백령도가 한국 기독교 역사에서 차지하는 의미를
          소개하는 전시 공간입니다. 초기 선교 역사와 지역 교회의 발전,
          당시 사용된 자료와 유물을 살펴볼 수 있습니다.
        </p>

        <p className="mt-5 leading-8 text-gray-700">
          다양한 전시물을 통해 역사와 문화를 함께 배울 수 있어
          학생, 가족 단위 여행객에게도 추천되는 장소입니다.
        </p>
      </div>

      <PlaceReviews />
    </PlaceTemplate>
  );
}