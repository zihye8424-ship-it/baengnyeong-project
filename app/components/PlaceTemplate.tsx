import Image from "next/image";
import Link from "next/link";

type QuickFact = [string, string];

type Props = {
  title: string;
  subtitle: string;
  image: string;
  badges: string[];
  quickFacts: QuickFact[];
  children: React.ReactNode;
};

export default function PlaceTemplate({
  title,
  subtitle,
  image,
  badges,
  quickFacts,
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      {/* 상단 메뉴 */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-extrabold">
            백령도의 모든 정보
          </Link>

          <Link
            href="/#place-section"
            className="rounded-full bg-gray-900 px-5 py-2 text-sm font-bold text-white transition hover:bg-sky-600"
          >
            ← 관광지로 돌아가기
          </Link>
        </div>
      </header>

      {/* 대표 이미지 */}
      <section className="relative h-[62vh] min-h-[480px] overflow-hidden">
        <Image
          src={image}
          alt={`${title} - 섬 관광지`}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-12 text-white">
          <div className="mb-4 flex flex-wrap gap-2 text-sm font-bold">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-sky-600 px-4 py-2"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="text-5xl font-black md:text-7xl">
            {title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 md:text-2xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* 여행 핵심 정보 */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map(([factTitle, value]) => (
            <div
              key={factTitle}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-bold text-sky-600">
                {factTitle}
              </p>

              <p className="mt-2 font-semibold">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 관광지별 상세 내용 */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="space-y-8">
          {children}

          {/* 위치 안내 */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black">
              📍 방문 전 확인
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              섬 지역은 기상과 현지 상황에 따라
              관광지 이용 여건이 달라질 수 있습니다. 방문 전 날씨와
              현장 안내를 확인하면 더욱 안전하고 편안하게 여행할 수 있습니다.
            </p>
          </div>

          {/* 여행 한눈에 보기 */}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black">
              💡 섬 여행 한눈에 보기
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-sky-50 p-5">
                <h3 className="font-bold">📸 사진 여행</h3>
                <p className="mt-2 leading-7 text-gray-700">
                  서해 섬의 바다와 자연 풍경을 사진으로 남겨보세요.
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-5">
                <h3 className="font-bold">🚶 여유로운 여행</h3>
                <p className="mt-2 leading-7 text-gray-700">
                  이동 시간을 넉넉하게 잡고 관광지를 천천히 둘러보세요.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5">
                <h3 className="font-bold">⭐ 함께 둘러보기</h3>
                <p className="mt-2 leading-7 text-gray-700">
                  가까운 관광지를 함께 둘러보면 여행 동선을 효율적으로
                  구성할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 모든 관광지 상세페이지 공통 내부 이동 */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-slate-100 p-7 md:flex-row">
            <div>
              <h2 className="text-2xl font-black">
                🗺️ 다른 관광지도 둘러보세요
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                백령·대청·소청의 다양한 관광지와 여행 정보를 한눈에 확인해 보세요.
              </p>
            </div>

            <Link
              href="/#place-section"
              className="shrink-0 rounded-full bg-gray-900 px-6 py-3 font-bold text-white transition hover:bg-sky-600"
            >
              다른 관광지 보기 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}