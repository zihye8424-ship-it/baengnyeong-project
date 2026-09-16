import Link from "next/link";

export const metadata = {
  title: "백령도 여행 가이드 | 백령도 여행 플랫폼",
  description:
    "백령도 여행 전 확인하면 좋은 배편, 교통, 숙소, 관광지와 여행 준비 정보를 안내합니다.",
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold tracking-widest text-blue-200">
            BAENGNYEONG TRAVEL GUIDE
          </p>

          <h1 className="mb-6 text-4xl font-extrabold md:text-5xl">
            백령도 여행 가이드
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
            백령도에서 생활해 온 경험을 바탕으로 처음 방문하는 여행자가
            여행 전에 확인하면 좋은 정보를 한곳에 정리했습니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            여행 전에 확인하세요
          </h2>
          <p className="mt-3 leading-7 text-gray-600">
            섬 여행은 배편과 날씨의 영향을 받을 수 있으므로 출발 전 최신
            운항정보와 현지 상황을 다시 확인하는 것이 좋습니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🚢",
              title: "배편",
              text: "출발 전 여객선 운항 여부와 출항 시간을 다시 확인하세요.",
              href: "/#ship",
            },
            {
              icon: "🚕",
              title: "섬 안의 교통",
              text: "버스와 택시 등 이동수단을 미리 확인하면 여행 동선을 계획하기 편합니다.",
              href: "/#transport",
            },
            {
              icon: "🏠",
              title: "숙소",
              text: "숙소 위치와 연락처를 확인하고 여행 일정에 맞춰 준비하세요.",
              href: "/#stay",
            },
            {
              icon: "📍",
              title: "관광지",
              text: "백령도·대청도·소청도의 주요 장소와 여행 정보를 살펴보세요.",
              href: "/#places",
            },
            {
              icon: "🍜",
              title: "먹거리",
              text: "섬에서 이용할 수 있는 음식점과 지역 먹거리 정보를 확인하세요.",
              href: "/#food",
            },
            {
              icon: "🪖",
              title: "군인 면회",
              text: "면회 일정이 있다면 배편과 이동시간을 고려해 여유 있게 계획하세요.",
              href: "/#military",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="mb-3 text-xl font-extrabold text-gray-900">
                {item.title}
              </h3>
              <p className="leading-7 text-gray-600">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-2xl font-extrabold text-gray-900">
            처음 백령도를 방문한다면
          </h2>

          <div className="mt-6 space-y-4 leading-7 text-gray-700">
            <p>
              여행 날짜를 정한 뒤에는 먼저 배편을 확인하고, 숙소와 섬 안의
              이동수단을 함께 준비하는 것이 좋습니다.
            </p>
            <p>
              바람과 기상 상황에 따라 체감 환경이 달라질 수 있으므로 계절에
              맞는 옷과 편한 신발을 준비하고, 출발 당일에도 운항정보를 다시
              확인해 주세요.
            </p>
            <p>
              관광지별 상세페이지에서는 장소 특징과 여행 팁, 함께 살펴볼
              장소를 확인할 수 있습니다.
            </p>
          </div>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-blue-900 px-7 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            백령도 여행정보 보러가기 →
          </Link>
        </div>
      </section>
    </main>
  );
}
