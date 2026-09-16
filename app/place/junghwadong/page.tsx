import Link from "next/link";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 중화동 여행 가이드 | 백령도의 모든 정보",
  description:
    "백령도 중화동을 찾는 여행자를 위한 마을 풍경, 여행 포인트, 방문 전 확인사항과 함께 둘러볼 백령도 여행지를 정리한 안내입니다.",
};

const quickFacts = [
  ["추천 대상", "마을 · 산책 · 문화여행"],
  ["섬", "백령도"],
  ["여행 방법", "천천히 걷기 · 풍경 감상"],
  ["준비", "편한 신발 · 바람막이 · 생수"],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-extrabold">백령도의 모든 정보</Link>
          <Link href="/#place-section" className="rounded-full bg-gray-900 px-5 py-2 text-sm font-bold text-white">
            ← 관광지로 돌아가기
          </Link>
        </div>
      </header>

      <section className="relative h-[62vh] min-h-[480px] w-full overflow-hidden">
        <img src="/images/junghwadong.jpg" alt="백령도 중화동" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-12 text-white">
          <div className="mb-4 flex flex-wrap gap-2 text-sm font-bold">
            <span className="rounded-full bg-emerald-600 px-4 py-2">백령도</span>
            <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur">마을 · 산책 · 문화</span>
          </div>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">중화동</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            백령도의 마을 풍경을 천천히 살펴보는 여행
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-4 md:grid-cols-4">
          {quickFacts.map(([title, value]) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-emerald-700">{title}</p>
              <p className="mt-2 font-extrabold leading-7">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6 pb-16">
        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <p className="font-bold text-emerald-700">백령도의 생활 풍경을 만나는 곳</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">🏘️ 중화동은 어떤 곳인가요?</h2>
          <div className="mt-6 space-y-5 text-[17px] leading-8 text-gray-700">
            <p>
              중화동은 백령도 여행에서 유명 관광지만 빠르게 둘러보는 일정과는
              조금 다른 분위기로 마을과 주변 풍경을 살펴볼 수 있는 곳입니다.
            </p>
            <p>
              섬 여행에서는 해변과 전망대뿐 아니라 사람들이 살아가는 마을의
              모습도 여행의 한 부분이 됩니다. 이동하면서 마을길과 주변 풍경을
              천천히 살펴보면 백령도의 또 다른 모습을 만날 수 있습니다.
            </p>
            <p>
              마을은 주민들의 생활 공간이기도 합니다. 여행 중에는 사유지나
              주거 공간에 무단으로 들어가지 않고 조용히 둘러보는 것이 중요합니다.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">여행자가 살펴볼 포인트</p>
          <h2 className="mt-2 text-3xl font-black">👀 중화동을 이렇게 둘러보세요</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">🚶 마을길</h3>
              <p className="mt-3 leading-7 text-gray-700">
                차량으로 지나가기만 하기보다 안전한 곳에서 주변을 천천히
                살펴보면 마을의 분위기를 좀 더 자세히 볼 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">🌿 주변 풍경</h3>
              <p className="mt-3 leading-7 text-gray-700">
                마을과 주변 자연이 함께 보이는 풍경을 살펴보세요.
                계절과 날씨에 따라 섬마을의 인상이 달라질 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">📷 여행 기록</h3>
              <p className="mt-3 leading-7 text-gray-700">
                건물이나 사람을 가까이 촬영하기보다 마을과 주변 풍경을
                넓게 담으면 여행지의 분위기를 자연스럽게 기록할 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">🤝 주민 생활 존중</h3>
              <p className="mt-3 leading-7 text-gray-700">
                큰 소음을 내거나 주택·밭·사유지에 들어가지 말고 주민들의
                일상생활을 방해하지 않는 여행을 해주세요.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">🧭 방문 전에 알아두면 좋은 점</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>✅ 백령도 방문 전 여객선 운항과 기상 상황을 확인하세요.</li>
            <li>✅ 마을 안에서는 주민 차량과 보행에 방해되지 않도록 이동해 주세요.</li>
            <li>✅ 주택, 밭, 작업 공간 등 사유지에는 허락 없이 들어가지 마세요.</li>
            <li>✅ 인물이나 주거 공간을 가까이 촬영할 때는 사생활을 배려해 주세요.</li>
            <li>✅ 현장에 출입 제한이나 안전 안내가 있다면 해당 안내를 우선해 주세요.</li>
          </ul>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">📸 마을 여행 사진 팁</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">풍경을 넓게</h3>
              <p className="mt-3 leading-7 text-gray-700">
                특정 주택을 크게 촬영하기보다 마을과 주변 자연을 함께 담아
                백령도의 전체적인 분위기를 기록해 보세요.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">사생활 배려</h3>
              <p className="mt-3 leading-7 text-gray-700">
                주민의 얼굴이나 생활 공간이 사진의 중심이 되는 경우에는
                촬영에 앞서 상대방을 배려하는 것이 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">안전한 위치</h3>
              <p className="mt-3 leading-7 text-gray-700">
                사진을 찍기 위해 도로 한가운데 서거나 차량 통행을 막지 말고
                안전한 장소에서 촬영하세요.
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
                아이와 함께라면 차량이 오가는 길을 주의하고 마을이 실제
                생활 공간이라는 점을 알려주며 둘러보세요.
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">부모님과 여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                긴 도보 이동보다는 다른 관광지로 이동하는 일정 사이에
                여유 있게 마을 풍경을 살펴보는 방식이 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">사진여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                주민의 일상보다 마을길과 주변 자연, 섬의 전체 풍경을 중심으로
                기록하면 여행 사진으로 활용하기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">🗺️ 백령도에서 함께 둘러보기</h2>
          <p className="mt-4 leading-7 text-gray-600">
            중화동을 둘러본 뒤 백령도의 자연·문화 명소를 함께 방문하면
            섬의 여러 모습을 한 일정에서 비교해 볼 수 있습니다.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/place/christianity" className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md">
              <h3 className="text-lg font-extrabold">한국기독교의 섬 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 역사·문화 이야기를 살펴보는 여행</p>
            </Link>
            <Link href="/place/simcheonggak" className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md">
              <h3 className="text-lg font-extrabold">심청각 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 이야기와 풍경을 함께 만나는 곳</p>
            </Link>
            <Link href="/place/sagot" className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-md">
              <h3 className="text-lg font-extrabold">사곶해변 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 대표적인 해변 풍경을 만나는 여행지</p>
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">❓ 중화동 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold">Q. 중화동은 어떤 방식으로 둘러보면 좋나요?</h3>
              <p className="mt-2 leading-7">
                주민 생활에 방해가 되지 않는 범위에서 마을과 주변 풍경을
                천천히 살펴보는 방식이 좋습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 사진을 찍어도 되나요?</h3>
              <p className="mt-2 leading-7">
                풍경 촬영은 가능하더라도 주민의 얼굴이나 사적인 생활 공간을
                가까이 촬영할 때는 사생활을 배려해 주세요.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 방문 전에 무엇을 확인해야 하나요?</h3>
              <p className="mt-2 leading-7">
                백령도 여객선 운항과 날씨를 확인하고 현장에 별도 출입 또는
                안전 안내가 있다면 최신 현장 안내를 우선하세요.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 다른 관광지와 함께 볼 수 있나요?</h3>
              <p className="mt-2 leading-7">
                백령도 안의 자연·문화 관광지와 일정 및 이동 동선에 맞춰
                함께 구성할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">⚠️ 마을은 주민의 생활 공간입니다</h2>
          <p className="mt-4 leading-7 text-amber-950">
            여행지이기 전에 주민들이 생활하는 공간입니다. 사유지 출입,
            소음, 쓰레기, 주차와 촬영 등으로 주민에게 불편을 주지 않도록
            배려해 주세요. 현장의 출입·안전 안내가 있다면 해당 안내를 우선합니다.
          </p>
        </section>
      </section>

      <PlaceReviews placeSlug="junghwadong" placeName="중화동" />
    </main>
  );
}
