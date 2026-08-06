import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 콩돌해안 여행 가이드 | 백령도의 모든 정보",
  description:
    "파도가 굴려 만든 콩돌이 아름다운 백령도 콩돌해안의 여행 정보를 확인하세요.",
};

export default function KongdolPage() {
  return (
    <PlaceTemplate
      title="콩돌해안"
      subtitle="파도가 수천 년 동안 다듬어 만든 콩돌과 푸른 바다가 어우러진 백령도의 특별한 해안"
      image="/images/kongdol.jpg"
      badges={["천연 해안", "사진 명소", "산책 코스"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 사진 여행"],
        ["추천 시간", "오전 ~ 일몰"],
        ["관람 방법", "도보 산책"],
        ["준비물", "운동화 · 카메라"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          🪨 콩돌해안은 어떤 곳인가요?
        </h2>

        <p className="mt-5 leading-8 text-gray-700">
          콩돌해안은 모래 대신 둥글게 다듬어진 자갈이 해안을 가득 메우고 있는
          백령도의 대표 자연 명소입니다.
          파도가 밀려왔다 빠질 때마다 콩돌이 부딪히며 만들어내는 아름다운 소리가
          이곳만의 특별한 매력입니다.
        </p>

        <p className="mt-5 leading-8 text-gray-700">
          해안을 따라 산책하며 서해의 풍경을 감상할 수 있고,
          일몰 시간에는 붉게 물든 하늘과 콩돌이 어우러져
          많은 사진작가들이 찾는 명소로도 유명합니다.
        </p>
      </div>

      <PlaceReviews />
    </PlaceTemplate>
  );
}