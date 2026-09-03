import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 용틀임바위 여행 가이드 | 기암절벽·사진 명소",
  description:
    "용이 승천하는 모습을 닮은 백령도 용틀임바위 여행 가이드. 독특한 바위 풍경과 사진 포인트, 방문 팁, 안전수칙과 주변 관광지를 확인하세요.",
};

export default function YongteulimPage() {
  return (
    <PlaceTemplate
      title="용틀임바위"
      subtitle="용이 몸을 틀며 하늘로 오르는 듯한 독특한 모습이 인상적인 백령도의 기암 풍경"
      image="/images/dragon.jpg"
      badges={["백령도", "기암풍경", "사진명소", "자연여행"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 사진여행"],
        ["관람 포인트", "독특한 바위 형태"],
        ["즐길거리", "풍경 감상 · 사진촬영"],
        ["준비", "운동화 · 바람막이"],
      ]}
    >
      <div className="space-y-8">

        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🪨 용틀임바위는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              용틀임바위는 용이 몸을 비틀며 하늘로 오르는 듯한
              독특한 모습을 떠올리게 하는 백령도의 바위 명소입니다.
            </p>

            <p>
              바위만 따로 보는 것보다 주변 해안과 바다 풍경을
              함께 바라보면 용틀임바위의 독특한 형태가 더욱
              인상적으로 다가옵니다.
            </p>

            <p>
              보는 위치와 각도에 따라 바위의 모습이 조금씩
              다르게 느껴지기 때문에 자신만의 시선으로
              용의 모습을 찾아보는 재미도 있습니다.
            </p>
          </div>
        </section>

        {/* 특징 */}
        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-8 md:p-10">
          <p className="font-bold text-sky-700">
            백령도에서 만나는 독특한 바위 풍경
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🐉 왜 용틀임바위라고 부를까요?
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            바위의 굴곡과 솟아오른 형태가 마치 용이 몸을 틀어
            움직이는 모습을 연상시킨다고 해서 용틀임바위라는
            이름으로 불립니다. 어느 방향에서 바라보느냐에 따라
            형태가 달리 보이므로 여러 각도에서 천천히 살펴보세요.
          </p>
        </section>

        {/* 관람 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            👀 용틀임바위에서 볼거리
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                🐉 독특한 바위 형태
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위의 굴곡을 따라 시선을 옮기며 용이 몸을
                틀어 오르는 듯한 모습을 찾아보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다와 바위
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위와 주변 바다가 한 화면에 들어오는 풍경은
                백령도 해안 특유의 분위기를 느끼게 합니다.
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-extrabold">
                📸 사진 구도
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위를 너무 크게 확대하기보다 주변 풍경을
                함께 넣으면 장소의 규모와 분위기가 잘 살아납니다.
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-6">
              <h3 className="text-xl font-extrabold">
                👀 보는 각도의 재미
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                조금씩 위치를 바꿔가며 바라보면 같은 바위도
                서로 다른 모습처럼 느껴질 수 있습니다.
              </p>
            </div>

          </div>
        </section>

        {/* 사진 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📷 용틀임바위 사진 잘 찍는 법
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ① 전체 형태 담기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위 전체가 보이도록 조금 거리를 두고 촬영해 보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ② 바다 함께 넣기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 하늘을 함께 담으면 백령도 해안의
                분위기가 더욱 잘 표현됩니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ③ 여러 각도에서 보기
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                안전한 범위에서 위치를 바꿔보며 용의 모습이
                가장 잘 느껴지는 구도를 찾아보세요.
              </p>
            </div>

          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 용틀임바위 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 바위와 해안 주변에서는 미끄러지지 않도록
              편한 운동화를 신는 것이 좋습니다.
            </li>

            <li>
              ✅ 바람이 강한 날에는 모자나 소지품이 날리지
              않도록 주의하세요.
            </li>

            <li>
              ✅ 사진을 찍기 위해 위험한 바위나 해안 가장자리로
              이동하지 마세요.
            </li>

            <li>
              ✅ 비가 오거나 파도가 높은 날에는 안전을 우선하고
              현장 통제와 안내를 따라주세요.
            </li>
          </ul>
        </section>

        {/* 여행 조합 */}
        <section className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">
            백령도 자연여행 코스
          </p>

          <h2 className="mt-2 text-3xl font-black">
            🪨 바위와 해안을 함께 보는 여행
          </h2>

          <p className="mt-5 leading-8 text-gray-700">
            용틀임바위를 둘러본 뒤 다른 해안과 바위 명소를
            함께 방문하면 백령도의 서로 다른 자연 풍경을
            비교해 보는 재미가 있습니다. 사진여행을 좋아한다면
            장소마다 바위의 형태와 바다 풍경이 어떻게 달라지는지
            살펴보세요.
          </p>
        </section>

        {/* 내부 링크 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 함께 가기 좋은 코스
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            아래 관광지를 누르면 해당 관광지 상세 페이지로 이동합니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <Link
              href="/place/kongdol"
              className="block cursor-pointer rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                콩돌해안 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                둥근 자갈과 바다가 어우러진 백령도의 대표 해안 명소
              </p>
            </Link>

            <Link
              href="/place/sajabawi"
              className="block cursor-pointer rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                사자바위 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                독특한 형태의 바위를 찾아보는 또 다른 자연 명소
              </p>
            </Link>

            <Link
              href="/place/hani"
              className="block cursor-pointer rounded-2xl border border-gray-200 p-5 transition hover:border-sky-400 hover:bg-sky-50 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                하늬해안 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                바다와 해안 풍경을 여유롭게 감상하기 좋은 곳
              </p>
            </Link>

          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 용틀임바위 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6 text-gray-700">

            <div>
              <h3 className="font-bold">
                Q. 왜 용틀임바위라는 이름이 붙었나요?
              </h3>
              <p className="mt-2 leading-7">
                바위의 모습이 용이 몸을 틀며 움직이는 모습을
                연상시킨다고 해서 용틀임바위라고 불립니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 사진은 어떻게 찍으면 좋은가요?
              </h3>
              <p className="mt-2 leading-7">
                바위만 확대하기보다 바다와 주변 해안 풍경을
                함께 담으면 장소의 분위기를 표현하기 좋습니다.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 아이와 함께 방문해도 괜찮나요?
              </h3>
              <p className="mt-2 leading-7">
                자연 풍경을 함께 관찰하기 좋지만 해안과 바위
                주변에서는 아이가 위험한 곳으로 이동하지 않도록
                보호자가 가까이에서 살펴주세요.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Q. 비바람이 강한 날에도 볼 수 있나요?
              </h3>
              <p className="mt-2 leading-7">
                강풍이나 높은 파도가 있는 날에는 안전을 우선해야
                합니다. 현장 출입 통제나 안전 안내가 있다면
                반드시 따라주세요.
              </p>
            </div>

          </div>
        </section>

        {/* 안전 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            ⚠️ 해안 안전 주의
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            바위와 해안 주변은 날씨와 파도에 따라 지면 상태가
            달라질 수 있습니다. 사진 촬영을 위해 위험한 곳으로
            접근하지 말고, 강풍·높은 파도·우천 시에는 현장
            안전 안내와 출입 통제를 우선해 주세요.
          </p>
        </section>

      </div>

      <PlaceReviews
        placeSlug="yongteulim"
        placeName="용틀임바위"
      />
    </PlaceTemplate>
  );
}