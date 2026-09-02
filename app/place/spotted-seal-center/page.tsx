import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령 점박이물범 생태관광체험센터 여행 가이드 | 백령도의 모든 정보",
  description:
    "백령 점박이물범 생태관광체험센터의 전시·생태 체험과 점박이물범 관찰 정보, 방문 팁을 확인하세요.",
};

export default function SpottedSealCenterPage() {
  return (
    <PlaceTemplate
      title="백령 점박이물범 생태관광체험센터"
      subtitle="백령도의 점박이물범과 해양 생태를 배우고 체험하는 생태관광 공간"
      image="/images/spotted-seal-center.jpg"
      badges={["점박이물범", "생태관광", "가족여행"]}
      quickFacts={[
        ["추천 대상", "가족 · 아이와 함께 · 자연여행"],
        ["추천 시간", "약 1시간"],
        ["관람 방법", "전시 · 체험 · 생태 관찰"],
        ["준비물", "카메라 · 편한 신발"],
      ]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">
            🦭 백령 점박이물범 생태관광체험센터는 어떤 곳인가요?
          </h2>
          <p className="mt-5 leading-8 text-gray-700">
            백령도의 대표 해양생물인 점박이물범과 해양 생태를 보다 가까이에서
            이해할 수 있도록 조성된 생태관광 공간입니다.
          </p>
          <p className="mt-5 leading-8 text-gray-700">
            전시와 체험을 통해 점박이물범의 생태와 백령도 자연환경을 함께
            알아볼 수 있어 가족여행 코스로도 잘 어울립니다.
          </p>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 꼭 보고 느껴볼 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">점박이물범 이야기</h3>
              <p className="mt-3 leading-7 text-gray-700">
                백령도 주변 바다에 찾아오는 점박이물범의 생태와 서식 환경을 알아보세요.
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">생태 전시·체험</h3>
              <p className="mt-3 leading-7 text-gray-700">
                아이들과 함께 백령도의 해양생태와 자연보호의 중요성을 배워보기 좋은 공간입니다.
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">하늬해안과 함께</h3>
              <p className="mt-3 leading-7 text-gray-700">
                인근 하늬해안과 연계하면 점박이물범의 실제 서식 환경과 백령도의 해안 풍경까지 함께 둘러볼 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">가족 생태여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                자연과 야생동물을 보호하는 여행의 의미를 아이들과 이야기하기 좋은 장소입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🧭 백령도 여행 팁</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>✅ 하늬해안과 함께 방문하면 생태관광 코스로 구성하기 좋아요.</li>
            <li>✅ 시설 운영시간과 휴관 여부는 방문 전에 최신 안내를 확인해 주세요.</li>
            <li>✅ 점박이물범은 야생동물이므로 실제 바다에서는 항상 볼 수 있는 것은 아닙니다.</li>
            <li>✅ 어린이와 함께라면 전시 내용을 천천히 살펴보며 생태보호 이야기를 나눠보세요.</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🗺️ 함께 가기 좋은 코스</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold">하늬해안</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                점박이물범의 서식 환경과 백령도 해안 생태를 함께 만나는 곳
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold">용틀임바위</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                독특한 해안 지형을 가까이에서 살펴볼 수 있는 지질명소
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-lg font-extrabold">사자바위</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                자연이 만든 독특한 바위와 해안 풍경을 함께 즐기는 코스
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <p className="leading-7 text-amber-950">
            <strong>방문 전 확인:</strong> 섬 지역은 기상과 시설 운영 상황이
            달라질 수 있습니다. 운영시간·휴관일·현장 안내는 방문 당일 최신
            정보를 우선해 주세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="spotted-seal-center"
        placeName="백령 점박이물범 생태관광체험센터"
      />
    </PlaceTemplate>
  );
}
