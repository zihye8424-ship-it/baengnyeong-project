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
            <div className="space-y-6">

  {children}

  {/* 사진 촬영 포인트 */}
  <div className="rounded-3xl border border-sky-100 bg-sky-50 p-6">
    <h2 className="text-2xl font-bold">📸 사진 촬영 포인트</h2>
    <p className="mt-3 leading-8 text-gray-700">
      오전에는 맑은 하늘과 푸른 바다를, 일몰 시간에는 아름다운 노을을
      함께 담을 수 있습니다. 넓은 풍경을 촬영하려면 광각 촬영을 추천합니다.
    </p>
  </div>

  {/* 추천 방문 시간 */}
  <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
    <h2 className="text-2xl font-bold">🕒 추천 방문 시간</h2>
    <p className="mt-3 leading-8 text-gray-700">
      오전 9시부터 오후 5시까지가 가장 쾌적합니다.
      일몰 1시간 전에는 가장 아름다운 풍경을 감상할 수 있습니다.
    </p>
  </div>

  {/* 편의시설 */}
  <div className="rounded-3xl border border-green-100 bg-green-50 p-6">
    <h2 className="text-2xl font-bold">🚗 주차 및 편의시설</h2>

    <ul className="mt-4 space-y-2 text-gray-700">
      <li>✅ 무료 주차장</li>
      <li>✅ 화장실</li>
      <li>✅ 산책 가능</li>
      <li>✅ 가족 여행 추천</li>
    </ul>
  </div>

  {/* 현지인 팁 */}
  <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
    <h2 className="text-2xl font-bold">💡 현지인이 알려주는 팁</h2>

    <ul className="mt-4 list-disc space-y-2 pl-5 leading-8 text-gray-700">
      <li>바람이 강한 날이 많으니 얇은 바람막이를 준비하세요.</li>
      <li>운동화를 신으면 걷기 편합니다.</li>
      <li>사진은 오전이나 일몰 무렵이 가장 예쁘게 나옵니다.</li>
    </ul>
  </div>

  {/* FAQ */}
  <div className="rounded-3xl border border-gray-200 bg-white p-6">
    <h2 className="text-2xl font-bold">❓ 자주 묻는 질문</h2>

    <div className="mt-5 space-y-5">
      <div>
        <h3 className="font-bold">Q. 아이들과 가기 좋은가요?</h3>
        <p className="mt-2 text-gray-700">
          네. 대부분의 관광지는 가족 단위 여행객도 편하게 둘러볼 수 있습니다.
        </p>
      </div>

      <div>
        <h3 className="font-bold">Q. 주차장은 무료인가요?</h3>
        <p className="mt-2 text-gray-700">
          대부분 무료로 이용 가능합니다.
        </p>
      </div>

      <div>
        <h3 className="font-bold">Q. 겨울에도 방문 가능한가요?</h3>
        <p className="mt-2 text-gray-700">
          가능합니다. 다만 바람이 강할 수 있으므로 방한 준비를 권장합니다.
        </p>
      </div>
    </div>
  </div>

  {/* 다른 관광지 */}
  <div className="rounded-3xl bg-slate-100 p-6">
    <h2 className="text-2xl font-bold">📍 함께 둘러보면 좋은 관광지</h2>

    <div className="mt-5 flex flex-wrap gap-3">
      <Link href="/place/dumujin" className="rounded-full bg-sky-600 px-5 py-2 font-bold text-white">
        두무진
      </Link>

      <Link href="/place/kkeutseom" className="rounded-full bg-sky-600 px-5 py-2 font-bold text-white">
        끝섬전망대
      </Link>

      <Link href="/place/kongdol" className="rounded-full bg-sky-600 px-5 py-2 font-bold text-white">
        콩돌해안
      </Link>
    </div>
  </div>

</div>
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