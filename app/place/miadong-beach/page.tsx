import Link from "next/link";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 미아동해변 여행 가이드 | 백령도의 모든 정보",
  description:
    "대청도 미아동해변의 모래사장과 해안 풍경, 산책·사진 포인트, 방문 전 확인사항과 주변 연계 여행지를 정리한 여행 가이드입니다.",
};

const quickFacts = [
  ["추천 대상", "해변 · 산책 · 사진여행"],
  ["섬", "대청도"],
  ["관람 방법", "해변 산책 · 풍경 감상"],
  ["준비물", "운동화 · 바람막이 · 생수"],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-extrabold">
            백령도의 모든 정보
          </Link>
          <Link
            href="/#place-section"
            className="rounded-full bg-gray-900 px-5 py-2 text-sm font-bold text-white"
          >
            ← 관광지로 돌아가기
          </Link>
        </div>
      </header>

      <section className="relative h-[62vh] min-h-[480px] w-full overflow-hidden">
        <img
          src="/images/miadong-beach.png"
          alt="대청도 미아동해변"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-12 text-white">
          <div className="mb-4 flex flex-wrap gap-2 text-sm font-bold">
            <span className="rounded-full bg-sky-500 px-4 py-2">대청도 관광지</span>
            <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              해변 · 산책 · 사진
            </span>
          </div>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            미아동해변
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            모래사장과 바다, 섬의 해안 풍경을 천천히 만나는 대청도 여행지
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-4 md:grid-cols-4">
          {quickFacts.map(([title, value]) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-sky-600">{title}</p>
              <p className="mt-2 font-extrabold leading-7">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6 pb-16">
        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <p className="font-bold text-sky-600">대청도에서 만나는 해안 풍경</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">
            🌊 미아동해변은 어떤 곳인가요?
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-8 text-gray-700">
            <p>
              미아동해변은 대청도 여행 중 모래사장과 바다 풍경을 가까이에서
              둘러볼 수 있는 해변입니다. 넓게 열린 바다와 해안선을 바라보며
              잠시 걷거나 여행 사진을 남기기에 잘 어울립니다.
            </p>
            <p>
              대청도는 같은 섬 안에서도 모래해변과 바위 해안, 산지 풍경이
              서로 다른 분위기를 보여줍니다. 미아동해변에서는 관광시설을
              빠르게 둘러보기보다 바람과 파도, 해안의 모습을 천천히 살펴보는
              방식으로 여행하는 것이 좋습니다.
            </p>
            <p>
              날씨와 시간에 따라 바다색과 해변의 분위기가 달라질 수 있으므로
              일정에 여유를 두고 주변 여행지와 함께 묶어 둘러보세요.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">여행자가 살펴볼 포인트</p>
          <h2 className="mt-2 text-3xl font-black">👀 미아동해변에서 무엇을 볼까요?</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">🏖️ 모래사장</h3>
              <p className="mt-3 leading-7 text-gray-700">
                해변을 따라 천천히 걸으며 모래사장과 바다가 이어지는 풍경을
                살펴보세요. 파도와 바람에 따라 해변의 모습도 달라집니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">🌊 바다와 해안선</h3>
              <p className="mt-3 leading-7 text-gray-700">
                한 지점만 보기보다 시선을 넓게 두면 대청도의 바다와 주변
                해안이 만드는 풍경을 함께 감상할 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">🚶 천천히 걷는 여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                짧게 사진만 찍고 이동하기보다 안전한 구간을 천천히 걸으면
                조용한 섬 해변의 분위기를 느끼기 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">📷 넓은 풍경 사진</h3>
              <p className="mt-3 leading-7 text-gray-700">
                인물만 크게 담기보다 모래사장과 바다, 하늘을 함께 넣으면
                미아동해변의 열린 공간감을 사진에 담기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">🧭 방문 전에 알아두면 좋은 점</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>✅ 대청도에 들어가기 전 여객선 운항과 기상 상황을 확인하세요.</li>
            <li>✅ 해안은 바람이 강할 수 있으므로 계절에 맞는 겉옷이나 바람막이를 준비하세요.</li>
            <li>✅ 모래와 해안 지형을 걸을 수 있으므로 걷기 편한 신발이 좋습니다.</li>
            <li>✅ 파도가 높거나 날씨가 좋지 않을 때는 물가나 위험한 해안으로 무리하게 접근하지 마세요.</li>
            <li>✅ 현장에 출입·안전 안내가 있다면 해당 안내를 가장 먼저 따라주세요.</li>
            <li>✅ 자연물을 가져가거나 해안 환경을 훼손하지 말고 방문 흔적을 남기지 않는 여행을 권합니다.</li>
          </ul>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">📸 미아동해변 사진 촬영 팁</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">바다까지 넓게</h3>
              <p className="mt-3 leading-7 text-gray-700">
                모래사장만 찍기보다 바다와 하늘을 함께 담으면 해변의 넓은
                분위기를 표현하기 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">위치를 조금씩 바꿔보기</h3>
              <p className="mt-3 leading-7 text-gray-700">
                안전한 범위에서 위치를 옮겨보면 해안선과 주변 풍경이 달라져
                다양한 구도의 사진을 남길 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">안전한 곳에서 촬영</h3>
              <p className="mt-3 leading-7 text-gray-700">
                좋은 사진을 위해 물가나 미끄러운 곳으로 무리하게 이동하지
                말고 파도와 현장 상태를 먼저 확인하세요.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">👨‍👩‍👧 여행 유형별 둘러보기</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">가족여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                아이와 함께라면 물가에 너무 가까이 가지 않고 안전한 해변
                구간을 중심으로 짧게 산책하는 일정이 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">부모님과 여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                걷는 거리를 길게 잡기보다 풍경 감상과 휴식을 섞어 일행의
                체력에 맞춰 둘러보세요.
              </p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">사진여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                날씨와 시간에 따라 달라지는 바다와 하늘의 분위기를 살펴보고
                넓은 해변 풍경을 중심으로 기록해 보세요.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">🍀 계절별 방문 체크</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-6">
              <h3 className="text-xl font-bold">🌸 봄</h3>
              <p className="mt-3 leading-7 text-gray-700">
                바닷바람이 차게 느껴질 수 있어 겉옷을 준비하고 기상 상황을
                확인한 뒤 해변 산책을 계획하세요.
              </p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-bold">☀️ 여름</h3>
              <p className="mt-3 leading-7 text-gray-700">
                햇볕에 대비해 모자와 생수, 자외선 차단용품을 준비하고
                한낮에는 무리한 장시간 이동을 피하는 편이 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-bold">🍁 가을</h3>
              <p className="mt-3 leading-7 text-gray-700">
                선선한 날에는 해변 산책과 사진 촬영을 함께 즐기기 좋지만,
                일몰이 빨라지는 시기에는 이동 시간을 고려하세요.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold">❄️ 겨울</h3>
              <p className="mt-3 leading-7 text-gray-700">
                강한 바람과 낮은 체감온도에 대비하고, 방문 전 여객선과
                현지 기상 상황을 반드시 확인하세요.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">🗺️ 대청도에서 함께 둘러보기</h2>
          <p className="mt-4 leading-7 text-gray-600">
            미아동해변만 보고 이동하기보다 대청도의 다른 자연 명소와 함께
            둘러보면 서로 다른 섬 풍경을 비교해 볼 수 있습니다.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/nongyeo-beach"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">농여해변 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 또 다른 해변 풍경을 만나는 여행지
              </p>
            </Link>
            <Link
              href="/place/samgaksan"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">삼각산 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 산과 섬 풍경을 함께 살펴보는 자연 명소
              </p>
            </Link>
            <Link
              href="/place/okjuk-sanddune"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">옥죽동 모래사막 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                대청도의 독특한 모래 지형을 살펴볼 수 있는 곳
              </p>
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">❓ 미아동해변 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold">Q. 미아동해변은 어떤 여행에 잘 어울리나요?</h3>
              <p className="mt-2 leading-7">
                해변을 천천히 걷거나 대청도의 바다 풍경을 보고 싶은 여행,
                사진을 남기고 싶은 일정에 함께 넣기 좋습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 사진 찍기 좋은가요?</h3>
              <p className="mt-2 leading-7">
                모래사장과 바다, 하늘을 함께 담을 수 있어 넓은 해변 풍경을
                기록하기 좋습니다. 다만 촬영보다 현장 안전을 우선하세요.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 방문 전에 무엇을 확인해야 하나요?</h3>
              <p className="mt-2 leading-7">
                대청도로 들어가는 여객선 운항과 날씨, 현지 이동 여건을
                확인하고 현장에 별도 출입 안내가 있다면 해당 안내를 따라주세요.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 다른 관광지와 함께 볼 수 있나요?</h3>
              <p className="mt-2 leading-7">
                농여해변, 삼각산, 옥죽동 모래사막 등 대청도의 다른 여행지와
                묶어 일정과 이동 동선에 맞춰 둘러볼 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">⚠️ 방문 전 확인</h2>
          <p className="mt-4 leading-7 text-amber-950">
            섬과 해안은 날씨, 바람, 파도에 따라 이용 여건이 달라질 수
            있습니다. 방문 당일 최신 기상과 여객선 운항 정보를 확인하고,
            현장에 출입 또는 안전 안내가 있을 경우 해당 안내를 우선해 주세요.
          </p>
        </section>
      </section>

      <PlaceReviews placeSlug="miadong-beach" placeName="미아동해변" />
    </main>
  );
}
