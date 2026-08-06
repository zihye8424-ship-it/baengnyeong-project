import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 하늬해변(점박이물범) 여행 가이드 | 백령도의 모든 정보",
  description:
    "천연기념물 점박이물범을 만날 수 있는 백령도 하늬해변 여행 정보를 확인하세요.",
};

export default function HaniPage() {
  return (
    <PlaceTemplate
      title="하늬해변 · 점박이물범"
      subtitle="천연기념물 점박이물범이 쉬어가는 백령도의 대표 생태 관광지"
      image="/images/hani.jpg"
      badges={["점박이물범", "생태관광", "사진 명소"]}
      quickFacts={[
        ["추천 대상", "가족 · 자연여행"],
        ["추천 시간", "1시간"],
        ["관람 방법", "전망대 관람"],
        ["준비물", "망원경 · 카메라"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          🦭 하늬해변은 어떤 곳인가요?
        </h2>

        <p className="mt-5 leading-8 text-gray-700">
          하늬해변은 천연기념물인 점박이물범을 가까이에서 관찰할 수 있는
          백령도의 대표 생태관광지입니다.
        </p>

        <p className="mt-5 leading-8 text-gray-700">
          봄부터 초여름까지 물범이 바위 위에서 쉬는 모습을 볼 수 있으며,
          전망대에서 자연을 방해하지 않고 관찰할 수 있습니다.
        </p>
      </div>

      <PlaceReviews />
    </PlaceTemplate>
  );
}