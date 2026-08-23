type QuickFact = [string, string];

type Props = {
  title: string;
  subtitle: string;
  image: string;
  badges: string[];
  quickFacts: QuickFact[];
  children: React.ReactNode;
};

import Image from "next/image";
import Link from "next/link";

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

      <section className="relative h-[62vh] min-h-[480px] overflow-hidden">
        <Image
          src={image}
          alt={title}
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

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map(([title, value]) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-bold text-sky-600">
                {title}
              </p>

              <p className="mt-2 font-semibold">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="space-y-8">
          {children}
          <div className="rounded-3xl bg-white p-8 shadow-sm">
  <h2 className="text-3xl font-black">
    📍 위치 안내
  </h2>

  <p className="mt-5 leading-8 text-gray-700">
    백령도의 모든 관광지는 계절마다 다른 매력을 가지고 있습니다.
    방문 전 운영 여부와 기상 상황을 확인하면 더욱 즐거운 여행을 할 수 있습니다.
  </p>
</div>

<div className="rounded-3xl bg-white p-8 shadow-sm">
  <h2 className="text-3xl font-black">
    💡 여행 한눈에 보기
  </h2>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <div className="rounded-2xl bg-sky-50 p-5">
      <h3 className="font-bold">📸 사진 명소</h3>
      <p className="mt-2 text-gray-700">
        아름다운 풍경을 담기 좋은 추천 포인트입니다.
      </p>
    </div>

    <div className="rounded-2xl bg-green-50 p-5">
      <h3 className="font-bold">🚶 산책 코스</h3>
      <p className="mt-2 text-gray-700">
        천천히 걸으며 자연을 즐기기 좋은 코스입니다.
      </p>
    </div>

    <div className="rounded-2xl bg-orange-50 p-5">
      <h3 className="font-bold">⭐ 추천</h3>
      <p className="mt-2 text-gray-700">
        가족, 연인, 친구 누구와 함께 방문해도 좋은 관광지입니다.
      </p>
    </div>
  </div>
</div>
        </div>
      </section>
    </main>
  );
}