import Image from "next/image";
import Link from "next/link";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 서풍받이 여행 가이드 | 백령도의 모든 정보",
  description:
    "대청도 서풍받이의 지질경관, 절벽 풍경, 추천 관람 포인트, 방문 팁과 여행 정보를 한눈에 확인하세요.",
};

const quickFacts = [
  ["추천 대상", "자연 · 지질 · 사진 · 트레킹 여행"],
  ["핵심 풍경", "해안 절벽 · 서해 바다 · 기암괴석"],
  ["관람 방법", "전망 · 산책 · 지오트레일 연계"],
  ["준비물", "운동화 · 바람막이 · 생수"],
];

export default function SeopungbajiPage() {
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
        <Image
          src="/images/seopungbaji.png"
          alt="대청도 서풍받이 해안 절벽과 바다"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-12 text-white">
          <div className="mb-4 flex flex-wrap gap-2 text-sm font-bold">
            <span className="rounded-full bg-sky-500 px-4 py-2">대청도 대표 명소</span>
            <span className="rounded-full bg-emerald-500 px-4 py-2">백령·대청 국가지질공원</span>
            <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur">사진 명소</span>
          </div>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">서풍받이</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            대청도 남동쪽 해안에서 거대한 절벽과 서해의 탁 트인 풍경을 만나는
            대청도의 대표 지질명소입니다.
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
        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <p className="font-bold text-sky-600">대청도 대표 절경</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">🌊 서풍받이는 어떤 곳인가요?</h2>
          <div className="mt-6 space-y-5 text-[17px] leading-8 text-gray-700">
            <p>
              서풍받이는 대청도 남동쪽 해안을 따라 이어지는 웅장한 해안 절벽을 감상할 수 있는 곳입니다.
              관광안내책자에서는 약 1.5km에 이르는 절벽 경관을 대청도의 대표 지질명소로 소개하고 있습니다.
            </p>
            <p>
              바다 쪽으로 시야가 크게 열려 있어 절벽의 규모와 서해 풍경을 한눈에 보기 좋고,
              대청도 지오트레일과 함께 둘러보기 좋은 장소입니다.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">백과사전식으로 알아보기</p>
          <h2 className="mt-2 text-3xl font-black">🌍 서풍받이의 지질·지형 이야기</h2>
          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              서풍받이의 가장 큰 특징은 해안선을 따라 드러난 높은 절벽과 암석 경관입니다.
              안내책자에는 절벽 높이가 약 100m에 이르는 구간이 소개되어 있으며,
              오랜 시간 바람과 파도에 노출된 해안 지형의 모습을 가까이에서 살펴볼 수 있습니다.
            </p>
            <p>
              대청도는 백령도·소청도와 함께 백령·대청 국가지질공원에 포함되어 있습니다.
              서풍받이는 대청도의 지질과 해안 지형을 이해하기 좋은 대표적인 관찰 지점 가운데 하나입니다.
            </p>
            <p className="rounded-2xl bg-white p-5 text-sm text-gray-600">
              ※ 이 페이지의 지질·관광 기본정보는 사용자가 제공한 옹진군 대청면 관광안내책자의
              서풍받이 및 백령·대청 국가지질공원 소개 내용을 바탕으로 정리했습니다.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">📸 여기서 꼭 볼 것</h2>
            <ul className="mt-5 space-y-4 leading-7 text-gray-700">
              <li>• 바다를 향해 이어지는 웅장한 해안 절벽</li>
              <li>• 절벽과 푸른 바다가 함께 들어오는 파노라마 풍경</li>
              <li>• 대청도의 암석과 해안 지형</li>
              <li>• 지오트레일과 연결해 걷는 자연 풍경</li>
            </ul>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">🥾 방문 팁</h2>
            <ul className="mt-5 space-y-4 leading-7 text-gray-700">
              <li>• 절벽과 산책 구간에서는 운동화를 권장합니다.</li>
              <li>• 해안은 바람이 강할 수 있어 바람막이를 준비하면 좋습니다.</li>
              <li>• 사진 촬영 시 절벽 가장자리보다 안전한 전망 지점을 이용하세요.</li>
              <li>• 날씨가 좋은 날에는 시야가 넓어 풍경 감상에 특히 좋습니다.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-sky-100 bg-sky-50 p-8 md:p-10">
          <p className="font-bold text-sky-700">관광안내책자 속 지오트레일</p>
          <h2 className="mt-2 text-3xl font-black text-gray-900">🗺️ 서풍받이와 함께 보는 대청도</h2>
          <p className="mt-5 leading-8 text-gray-700">
            관광안내책자는 서풍받이 구간을 대청도 지오트레일의 주요 구간으로 소개합니다.
            서풍받이만 보고 돌아오기보다 대청도의 해안과 지질명소를 연결해 둘러보면
            섬의 지형을 훨씬 입체적으로 이해할 수 있습니다.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold">Q. 서풍받이는 어떤 여행자에게 추천하나요?</h3>
              <p className="mt-2 leading-7">
                대청도의 대표 자연경관을 보고 싶은 여행자, 지질여행이나 트레킹을 좋아하는 분,
                절벽과 바다를 함께 담는 사진 여행을 원하는 분에게 잘 어울립니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 지오트레일과 같이 볼 수 있나요?</h3>
              <p className="mt-2 leading-7">
                네. 관광안내책자에서 서풍받이는 대청도 지오트레일의 주요 구간으로 소개되어 있어
                주변 자연·지질명소와 연결해 둘러보기 좋습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 방문할 때 가장 중요한 점은 무엇인가요?</h3>
              <p className="mt-2 leading-7">
                해안 절벽 지역이므로 바람과 날씨를 확인하고, 안전한 탐방로와 전망 구간을 이용하는 것이 중요합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <p className="leading-7 text-amber-950">
            <strong>방문 전 확인:</strong> 섬과 해안 지역은 기상 상황에 따라 체감 환경이 크게 달라질 수 있습니다.
            당일 날씨와 현장 안내를 확인하고 안전한 탐방로를 이용해 주세요.
          </p>
        </div>
      </section>

      <PlaceReviews placeSlug="seopungbaji" placeName="서풍받이" />
    </main>
  );
}
