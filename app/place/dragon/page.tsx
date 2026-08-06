import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 용틀임바위 여행 가이드 | 백령도의 모든 정보",
  description:
    "용이 승천하는 모습을 닮은 백령도 용틀임바위의 신비로운 절경과 여행 정보를 확인하세요.",
};

export default function YongteulimPage() {
  return (
    <PlaceTemplate
      title="용틀임바위"
      subtitle="용이 하늘로 승천하는 모습을 닮은 백령도의 대표 기암절벽"
      image="/images/dragon.jpg"
      badges={["기암절벽", "포토존", "자연경관"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 사진 여행"],
        ["추천 시간", "30~40분"],
        ["관람 방법", "도보 관람"],
        ["준비물", "운동화 · 카메라"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          🪨 용틀임바위는 어떤 곳인가요?
        </h2>

        <p className="mt-5 leading-8 text-gray-700">
          용틀임바위는 용이 몸을 비틀며 하늘로 오르는 모습을 닮았다고 하여
          이름 붙여진 백령도의 대표 기암절벽입니다.
        </p>

        <p className="mt-5 leading-8 text-gray-700">
          오랜 세월 파도와 바람이 만들어 낸 독특한 암석 지형은
          백령도의 자연이 만든 예술작품이라 불릴 만큼 아름답습니다.
          특히 일출과 일몰 시간에는 더욱 멋진 풍경을 감상할 수 있습니다.
        </p>
      </div>

      <PlaceReviews />
    </PlaceTemplate>
  );
}