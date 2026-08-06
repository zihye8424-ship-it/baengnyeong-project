import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "천안함 46용사 위령탑 | 백령도의 모든 정보",
  description:
    "백령도 천안함 46용사 위령탑의 역사와 의미를 소개합니다.",
};

export default function CheonanPage() {
  return (
    <PlaceTemplate
      title="천안함 46용사 위령탑"
      subtitle="나라를 위해 희생한 46용사를 추모하는 백령도의 대표 안보·역사 명소"
      image="/images/cheonan.jpg"
      badges={["안보관광", "역사교육", "추모공원"]}
      quickFacts={[
        ["추천 대상", "가족 · 학생 · 역사여행"],
        ["추천 시간", "30~40분"],
        ["관람 방법", "도보 관람"],
        ["준비물", "카메라"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          🇰🇷 천안함 46용사 위령탑은 어떤 곳인가요?
        </h2>

        <p className="mt-5 leading-8 text-gray-700">
          천안함 46용사 위령탑은 2010년 천안함 피격 사건으로 희생된
          46명의 용사를 추모하기 위해 조성된 추모 공간입니다.
        </p>

        <p className="mt-5 leading-8 text-gray-700">
          위령탑에서는 백령도의 안보 역사와 함께 나라를 위해 헌신한
          장병들의 희생을 기억할 수 있으며, 많은 방문객들이
          경건한 마음으로 찾는 장소입니다.
        </p>
      </div>

      <PlaceReviews />
    </PlaceTemplate>
  );
}