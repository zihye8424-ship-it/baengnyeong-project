import Image from "next/image";
import Link from "next/link";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "대청도 옥죽동 해안사구 여행 가이드 | 백령도의 모든 정보",
  description:
    "대청도 옥죽동 해안사구의 형성과정, 지질적 특징, 볼거리, 방문 팁과 여행 정보를 한눈에 확인하세요.",
};

const quickFacts = [
  ["추천 대상", "가족 · 자연 · 지질 · 사진 여행"],
  ["핵심 풍경", "해안사구 · 모래언덕 · 바람이 만든 지형"],
  ["관람 방법", "산책 · 지질관찰 · 사진촬영"],
  ["준비물", "편한 신발 · 모자 · 바람막이 · 생수"],
];

export default function OkjukSandDunePage() {
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

<section className="relative w-full">
  <img
    src="/images/okjuk-sand-dune.png"
    alt="대청도 옥죽동 해안사구"
    className="block w-full h-[520px] object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

  <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-12 text-white">
    <div className="mb-4 flex flex-wrap gap-2 text-sm font-bold">
      <span className="rounded-full bg-amber-500 px-4 py-2">
        대청도 대표 자연명소
      </span>
      <span className="rounded-full bg-emerald-500 px-4 py-2">
        백령·대청 국가지질공원
      </span>
      <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur">
        해안사구
      </span>
    </div>

    <h1 className="text-5xl font-black tracking-tight md:text-7xl">
      옥죽동 해안사구
    </h1>

    <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
      바닷바람이 모래를 육지 쪽으로 옮겨 쌓으며 만들어진 대청도의 독특한 해안사구입니다.
    </p>
  </div>
</section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-4 md:grid-cols-4">
          {quickFacts.map(([title, value]) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-amber-600">{title}</p>
              <p className="mt-2 font-extrabold leading-7">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6 pb-16">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <p className="font-bold text-amber-600">대청도의 모래가 만든 풍경</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">🏜️ 옥죽동 해안사구는 어떤 곳인가요?</h2>
          <div className="mt-6 space-y-5 text-[17px] leading-8 text-gray-700">
            <p>
              옥죽동 해안사구는 대청도 북쪽 해안에 발달한 모래언덕입니다.
              관광안내책자는 이곳을 대청도의 대표 지질명소 가운데 하나로 소개하고 있습니다.
            </p>
            <p>
              해변의 모래가 바람을 타고 육지 쪽으로 이동해 쌓이면서 사구가 형성되었고,
              바닷가와는 또 다른 넓은 모래지형을 볼 수 있다는 점이 특징입니다.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8 md:p-10">
          <p className="font-bold text-emerald-700">백과사전식으로 알아보기</p>
          <h2 className="mt-2 text-3xl font-black text-gray-900">🌍 해안사구는 어떻게 만들어질까요?</h2>
          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              해안사구는 해변의 모래가 강한 바람에 의해 내륙 방향으로 이동하고,
              식생이나 지형에 가로막혀 오랜 시간 쌓이면서 만들어지는 모래언덕입니다.
            </p>
            <p>
              옥죽동 해안사구는 바다·모래·바람이 함께 만들어낸 대청도의 자연지형을
              직접 관찰할 수 있는 장소로, 섬의 지질환경을 이해하는 데 좋은 곳입니다.
            </p>
            <p className="rounded-2xl bg-white p-5 text-sm text-gray-600">
              ※ 이 페이지의 기본 관광·지질정보는 사용자가 제공한 백령·대청 국가지질공원
              관광안내책자의 ‘옥죽동 해안사구’ 소개 내용을 바탕으로 정리했습니다.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">📸 여기서 꼭 볼 것</h2>
            <ul className="mt-5 space-y-4 leading-7 text-gray-700">
              <li>• 넓게 이어지는 모래언덕의 곡선</li>
              <li>• 바람이 만든 모래 표면의 무늬</li>
              <li>• 사구와 주변 산지·해안이 이어지는 풍경</li>
              <li>• 계절에 따라 달라지는 사구 식생</li>
            </ul>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">🥾 방문 팁</h2>
            <ul className="mt-5 space-y-4 leading-7 text-gray-700">
              <li>• 바람이 강한 날은 모래가 날릴 수 있어 모자와 안경이 유용합니다.</li>
              <li>• 정해진 탐방 동선과 현장 안내를 따라주세요.</li>
              <li>• 사구 식생은 훼손되기 쉬우므로 보호구역에는 들어가지 않는 것이 좋습니다.</li>
              <li>• 햇빛이 강한 계절에는 생수와 자외선 차단용품을 준비하세요.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-sky-100 bg-sky-50 p-8 md:p-10">
          <p className="font-bold text-sky-700">관광안내책자 속 대청도 여행</p>
          <h2 className="mt-2 text-3xl font-black text-gray-900">🗺️ 주변 명소와 함께 둘러보기</h2>
          <p className="mt-5 leading-8 text-gray-700">
            옥죽동 해안사구는 대청도 북쪽 여행 동선에 넣기 좋은 장소입니다.
            농여해변·미아해변 등 북부 해안 명소와 함께 연결하면 대청도의 모래지형과
            해안 풍경을 비교하며 여행할 수 있습니다.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold">Q. 옥죽동 해안사구는 그냥 모래사장인가요?</h3>
              <p className="mt-2 leading-7">
                해변 자체와는 다릅니다. 바람에 의해 이동한 모래가 육지에 쌓여 만들어진
                모래언덕 지형이라는 점이 핵심입니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 아이와 함께 가도 좋은가요?</h3>
              <p className="mt-2 leading-7">
                자연지형을 관찰하기 좋아 가족여행에도 잘 맞습니다.
                다만 보호가 필요한 지형이므로 현장 탐방 안내를 지켜주세요.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 사진 찍기 좋은 곳인가요?</h3>
              <p className="mt-2 leading-7">
                넓은 모래언덕과 능선이 함께 보이는 풍경이 독특해 자연·지질 사진을 남기기 좋습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <p className="leading-7 text-amber-950">
            <strong>방문 시 주의:</strong> 해안사구는 바람과 식생의 균형으로 유지되는 자연지형입니다.
            현장 출입 안내와 보호 규정을 지키고 식생을 밟거나 모래지형을 훼손하지 않도록 해주세요.
          </p>
        </div>
      </section>

      <PlaceReviews placeSlug="okjuk-sanddune" placeName="옥죽동 해안사구" />
    </main>
  );
}
