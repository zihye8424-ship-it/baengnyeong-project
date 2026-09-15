import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";
import Link from "next/link";

export const metadata = {
  title: "백령도 사곶해변 여행 가이드 | 백령도의 모든 정보",
  description:
    "천연비행장으로 알려진 백령도 사곶해변의 특징과 산책 방법, 사진 포인트, 가족여행 팁, 주변 연계 코스를 한눈에 확인하세요.",
};

export default function SagotPage() {
  return (
    <PlaceTemplate
      title="사곶해변"
      subtitle="단단한 모래층과 넓은 해변 풍경으로 유명한 백령도의 대표 해안"
      image="/images/sagot.jpg"
      badges={["천연기념물", "천연비행장", "가족여행"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 아이"],
        ["추천 시간", "오전 ~ 일몰 전"],
        ["관람 방법", "도보 산책"],
        ["준비물", "운동화 · 카메라 · 바람막이"],
      ]}
    >
      <div className="space-y-8">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🏖️ 사곶해변은 어떤 곳인가요?</h2>
          <p className="mt-5 leading-8 text-gray-700">
            사곶해변은 넓고 평탄한 해변과 단단한 모래층으로 잘 알려진 백령도의 대표 자연 명소입니다.
            일반적인 모래사장과는 다른 단단한 지면이 특징이며, 과거 항공기 이착륙과 관련된
            &apos;천연비행장&apos; 이야기로도 널리 소개되어 왔습니다.
          </p>
          <p className="mt-5 leading-8 text-gray-700">
            해변에 서면 시야를 가리는 요소가 적어 바다와 하늘이 한눈에 들어옵니다.
            짧게 사진만 찍고 이동하기보다 해변 가장자리를 천천히 걸으면서 사곶해변 특유의 넓은 공간감과
            지면의 느낌을 직접 확인해 보는 편이 좋습니다.
          </p>
          <p className="mt-5 leading-8 text-gray-700">
            백령도를 처음 방문한 여행객이라면 두무진이나 콩돌해안처럼 경관이 강한 장소와는 또 다른 분위기를
            느낄 수 있는 곳입니다. 이동 일정에 여유를 두고 산책과 사진 촬영을 함께 계획하면 만족도가 높습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-8">
          <h2 className="text-3xl font-black text-sky-950">💡 현지 여행자가 놓치기 쉬운 체크포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold">해변 전체를 한 번에 보려 하지 않기</h3>
              <p className="mt-3 leading-7 text-gray-700">
                사곶해변은 규모가 넓기 때문에 한 지점에서 보는 것보다 조금씩 걸어보는 편이 좋습니다.
                걷는 위치에 따라 바다와 하늘이 보이는 비율이 달라져 사진 분위기도 달라집니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold">바람을 일정에 포함하기</h3>
              <p className="mt-3 leading-7 text-gray-700">
                섬 여행에서는 바람이 체감온도와 이동 편의에 큰 영향을 줄 수 있습니다.
                기온만 보고 옷을 준비하기보다 바람막이처럼 겉에 걸칠 옷을 챙기는 것이 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold">아이와 함께라면 이동 구간 확인</h3>
              <p className="mt-3 leading-7 text-gray-700">
                가족여행이라면 넓은 해변 자체는 매력적이지만, 파도와 차량 이동 가능 구간이 있는지
                현장 안내를 먼저 확인하고 아이가 해변 쪽으로 너무 멀리 이동하지 않도록 살펴주세요.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold">다음 관광지까지 함께 생각하기</h3>
              <p className="mt-3 leading-7 text-gray-700">
                사곶해변 한 곳만 따로 보기보다 주변 관광지와 묶어 움직이면 백령도 여행 동선이 훨씬 효율적입니다.
                아래 연계 코스를 참고해 반나절 일정으로 구성해 보세요.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">📸 꼭 보고 느껴볼 포인트</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">넓은 해변 풍경</h3>
              <p className="mt-3 leading-7 text-gray-700">
                시야가 넓게 열려 있어 백령도의 바다와 하늘을 한 화면에 담기 좋습니다.
                사람이 적은 순간에는 해변의 규모감이 더욱 잘 드러납니다.
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">단단한 모래층</h3>
              <p className="mt-3 leading-7 text-gray-700">
                사곶해변을 특별하게 만든 지형적 특징 가운데 하나입니다.
                눈으로만 보기보다 직접 걸어보면 일반적인 모래사장과 다른 느낌을 체감하기 쉽습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">가족 산책</h3>
              <p className="mt-3 leading-7 text-gray-700">
                일정에 40분 이상 여유를 두면 서둘러 이동하지 않고 해변을 둘러볼 수 있습니다.
                아이와 함께라면 짧은 산책 위주로 계획하는 것도 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold text-sky-900">사진 포인트</h3>
              <p className="mt-3 leading-7 text-gray-700">
                인물을 화면 한쪽에 작게 배치하고 해변과 하늘의 비중을 크게 잡으면
                사곶해변의 넓은 공간감을 표현하기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🧭 방문 전에 알아두면 좋은 점</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>✅ 해변 차량 통행 가능 여부와 출입 범위는 방문 당일 현장 안내를 우선해 주세요.</li>
            <li>✅ 바람이 강한 날에는 모래가 날릴 수 있어 모자나 가벼운 소지품 관리가 필요합니다.</li>
            <li>✅ 해안은 조수와 기상에 따라 분위기와 안전 조건이 달라질 수 있습니다.</li>
            <li>✅ 사진 촬영만 한다면 짧게 둘러볼 수 있지만 산책까지 한다면 40분~1시간 정도를 권장합니다.</li>
            <li>✅ 백령도에서는 기상에 따라 여객선과 현지 이동 일정이 달라질 수 있으니 전체 일정에 여유를 두는 것이 좋습니다.</li>
          </ul>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">👨‍👩‍👧 여행 유형별 추천 방법</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-extrabold">가족여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                아이와 함께라면 긴 산책보다 해변 입구와 안전한 구간을 중심으로 둘러보고,
                이동 중 바람과 파도 상태를 계속 확인해 주세요.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-extrabold">부모님과 여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                걷는 거리를 무리하게 잡지 않고 사진 촬영과 휴식을 섞어 둘러보면 좋습니다.
                바람이 강한 날에는 체감온도가 낮을 수 있으니 겉옷을 챙겨주세요.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-extrabold">사진여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                해변과 하늘의 넓이를 살리는 구도가 잘 어울립니다.
                한 장소에서만 촬영하기보다 조금씩 위치를 옮겨 배경의 변화를 살펴보세요.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🍀 계절별 방문 체크</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold">🌸 봄</h3>
              <p className="mt-3 leading-7 text-gray-700">
                바람이 차게 느껴질 수 있어 겉옷을 준비하고, 해변 산책과 주변 관광지를 함께 묶어 둘러보기 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-bold">☀️ 여름</h3>
              <p className="mt-3 leading-7 text-gray-700">
                넓게 트인 공간이라 햇볕을 피하기 어려울 수 있습니다.
                모자, 생수, 자외선 차단 준비를 하고 한낮에는 무리한 장시간 산책을 피하는 편이 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold">🍁 가을</h3>
              <p className="mt-3 leading-7 text-gray-700">
                선선한 날에는 산책과 사진 촬영을 함께 즐기기 좋습니다.
                해가 짧아지는 시기에는 다음 관광지 이동 시간을 미리 계산해 주세요.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold">❄️ 겨울</h3>
              <p className="mt-3 leading-7 text-gray-700">
                바람과 낮은 체감온도에 대비해 방풍·보온 준비가 중요합니다.
                방문 전 여객선 운항과 현지 기상 상황을 먼저 확인하세요.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">🗺️ 함께 가기 좋은 코스</h2>

          <p className="mt-3 leading-7 text-gray-600">
            사곶해변과 함께 백령도의 대표 관광지를 묶어 둘러보세요.
            각 장소를 눌러 자세한 여행 정보를 확인할 수 있습니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/kongdol"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">콩돌해안 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                둥근 자갈과 파도 소리가 특별한 백령도 대표 해안
              </p>
            </Link>

            <Link
              href="/place/simcheonggak"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">심청각 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                백령도의 설화와 서해 풍경을 함께 만나는 관광지
              </p>
            </Link>

            <Link
              href="/place/cheonan"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">천안함 46용사 위령탑 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                백령도의 안보 역사를 돌아볼 수 있는 추모 공간
              </p>
            </Link>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold">Q. 차량으로 해변에 들어갈 수 있나요?</h3>
              <p className="mt-2 leading-7 text-gray-700">
                출입 가능 구간과 통제는 시기와 현장 상황에 따라 달라질 수 있으므로
                현장 표지와 안내를 확인해 주세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">Q. 아이와 방문하기 좋은가요?</h3>
              <p className="mt-2 leading-7 text-gray-700">
                넓은 해변을 볼 수 있어 가족여행에 좋지만,
                바람·파도·차량 이동 구간에서는 보호자가 안전을 살펴주세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">Q. 관람 시간은 얼마나 잡으면 좋나요?</h3>
              <p className="mt-2 leading-7 text-gray-700">
                사진 촬영과 산책을 포함해 약 40분~1시간 정도를 잡으면 여유롭습니다.
                짧게 둘러보는 일정이라면 이동 시간을 고려해 탄력적으로 조정하세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">Q. 비가 오거나 바람이 강해도 방문할 수 있나요?</h3>
              <p className="mt-2 leading-7 text-gray-700">
                해안은 날씨에 따라 체감 환경이 크게 달라집니다.
                강풍이나 기상 악화가 예상되면 현지 안전 안내를 확인하고 무리한 방문은 피해주세요.
              </p>
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

      <PlaceReviews placeSlug="sagot" placeName="사곶해변" />
    </PlaceTemplate>
  );
}
