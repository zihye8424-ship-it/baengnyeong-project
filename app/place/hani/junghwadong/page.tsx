import Image from "next/image";
import Link from "next/link";

export default function JunghwadongPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-gray-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-black text-gray-900 hover:text-emerald-700">
            ← 백령도의 모든 정보
          </Link>
          <span className="text-sm font-bold text-gray-500">백령도 역사 · 신앙 여행</span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-black tracking-[0.18em] text-emerald-700">HISTORY & PILGRIMAGE</p>
            <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              중화동교회와 400년 노송
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              백령도의 오랜 신앙 역사와 마을의 시간을 함께 느껴볼 수 있는 곳입니다.
              중화동교회와 400년 노송을 둘러보고, 백령도에서 새롭게 만날 수 있는
              순교신심순례 이야기도 함께 살펴보세요.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm font-bold">
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-emerald-800">⛪ 역사·종교</span>
              <span className="rounded-full bg-amber-100 px-4 py-2 text-amber-800">🌲 400년 노송</span>
              <span className="rounded-full bg-sky-100 px-4 py-2 text-sky-800">🙏 순례 코스</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200">
            <Image
              src="/images/junghwadong.jpg"
              alt="백령도 중화동교회"
              width={1200}
              height={800}
              className="h-72 w-full object-cover md:h-80"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-10">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200">
            <p className="text-3xl">⛪</p>
            <h2 className="mt-4 text-2xl font-black">중화동교회</h2>
            <p className="mt-3 leading-7 text-gray-600">
              백령도의 신앙 역사와 함께 살펴보기 좋은 장소입니다. 단순히 건물을 보고
              지나가기보다 주변의 오래된 마을 풍경과 함께 천천히 둘러보면 좋습니다.
            </p>
          </article>

          <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200">
            <Image
              src="/images/nosong.jpg"
              alt="백령도 400년 노송"
              width={1200}
              height={800}
              className="h-52 w-full object-cover"
            />
            <div className="p-7">
              <p className="text-3xl">🌲</p>
              <h2 className="mt-3 text-2xl font-black">400년 노송</h2>
              <p className="mt-3 leading-7 text-gray-600">
                오랜 세월 백령도의 마을을 지켜온 노송입니다. 중화동교회와 함께 둘러보며
                이 지역이 품고 있는 시간과 이야기를 느껴보세요.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200">
          <div className="border-b border-stone-100 p-7 md:p-9">
            <p className="text-sm font-black tracking-[0.18em] text-sky-700">PILGRIMAGE</p>
            <h2 className="mt-2 text-3xl font-black">🙏 백령도 순교신심순례</h2>
            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              백령도 곳곳의 신앙 흔적을 따라 이동하는 순례 코스입니다. 아래 현장 안내도를
              참고해 순례 동선을 살펴볼 수 있습니다. 섬 여행 일정에 맞춰 중화동교회와
              400년 노송을 함께 둘러보는 코스로 묶어보세요.
            </p>
          </div>

          <div className="bg-stone-100 p-4 md:p-8">
            <Image
              src="/images/baengnyeong-pilgrimage-map.jpg"
              alt="백령도 순교신심순례 현장 안내도"
              width={1536}
              height={2048}
              className="mx-auto h-auto w-full max-w-3xl rounded-2xl object-contain shadow"
            />
            <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-5 text-gray-500">
              백령도 순교신심순례 현장 안내도
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-emerald-50 p-6">
            <p className="text-xl">🚗</p>
            <h3 className="mt-3 font-black">이동 방법</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              순례지는 섬 곳곳에 있어 전체 코스를 둘러볼 때는 차량 이동을 함께 고려하는 것이 편리합니다.
            </p>
          </div>
          <div className="rounded-3xl bg-amber-50 p-6">
            <p className="text-xl">🤫</p>
            <h3 className="mt-3 font-black">방문 예절</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              교회와 신앙 공간은 실제 예배와 기도가 이루어지는 곳이므로 조용히 둘러보고 방문 예절을 지켜주세요.
            </p>
          </div>
          <div className="rounded-3xl bg-sky-50 p-6">
            <p className="text-xl">📍</p>
            <h3 className="mt-3 font-black">여행 팁</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              현장 사정이나 개방 여부가 달라질 수 있으므로 방문 당일 안내 표지와 현장 정보를 확인하세요.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 text-center">
          <Link href="/" className="inline-flex rounded-2xl bg-gray-950 px-6 py-3 font-black text-white hover:bg-emerald-700">
            홈으로 돌아가기
          </Link>
        </div>
      </footer>
    </main>
  );
}
