import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "서해최북단 백령도비 | 백령도의 모든 정보",
  description:
    "대한민국 서해 최북단을 상징하는 백령도비 여행 정보를 확인하세요.",
};

export default function BaengnyeongbiPage() {
  return (
    <PlaceTemplate
      title="서해최북단 백령도비"
      subtitle="대한민국 서해 최북단을 알리는 백령도의 대표 인증 명소"
      image="/images/baengnyeong-bi.jpg"
      badges={["인증샷 명소", "랜드마크", "대표 관광지"]}
      quickFacts={[
        ["추천 대상", "모든 여행객"],
        ["추천 시간", "20~30분"],
        ["관람 방법", "도보"],
        ["준비물", "카메라"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          📍 서해최북단 백령도비는 어떤 곳인가요?
        </h2>

        <p className="mt-5 leading-8 text-gray-700">
          서해최북단 백령도비는 대한민국 서해 최북단에 위치한 백령도를
          상징하는 대표 기념비입니다. 많은 여행객들이 백령도 방문을
          기념하며 사진을 남기는 인기 인증 명소입니다.
        </p>

        <p className="mt-5 leading-8 text-gray-700">
          주변에는 탁 트인 서해 풍경이 펼쳐져 있으며,
          백령도의 아름다운 자연과 함께 특별한 추억을 남길 수 있는
          장소입니다.
        </p>
      </div>

      <PlaceReviews />
    </PlaceTemplate>
  );
}