export default function NaengmyeonTour() {
  const shops = [
    {
      id: 1,
      name: "백령면옥",
      image: "/images/naengmyeon1.jpg",
      desc: "담백한 황해도식 물냉면과 수육",
    },
    {
      id: 2,
      name: "시골냉면",
      image: "/images/naengmyeon2.jpg",
      desc: "진한 육수와 쫄깃한 메밀면",
    },
    {
      id: 3,
      name: "신화동평양냉면",
      image: "/images/naengmyeon3.jpg",
      desc: "평양식 냉면의 깊은 맛",
    },
    {
      id: 4,
      name: "사곶냉면",
      image: "/images/naengmyeon4.jpg",
      desc: "현지인들이 자주 찾는 냉면집",
    },
    {
      id: 5,
      name: "가을면옥",
      image: "/images/naengmyeon5.jpg",
      desc: "시원한 육수와 깔끔한 맛",
    },
  ];

  return (
    <main className="min-h-screen bg-sky-50">

      {/* 헤더 */}
      <section className="bg-sky-600 py-16 text-center text-white">

        <h1 className="text-5xl font-black">
          🍜 백령도 황해도식 냉면투어
        </h1>

        <p className="mt-5 text-xl">
          백령도의 대표 냉면집 5곳을 모두 만나보세요.
        </p>

      </section>

      {/* 소개 */}

      <section className="mx-auto max-w-5xl px-6 py-12">

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="text-3xl font-bold">

            냉면투어 소개

          </h2>

          <p className="mt-5 leading-8 text-gray-700">

            백령도는 황해도식 냉면 문화가 이어지는 지역입니다.

            같은 황해도식 냉면이라도

            육수, 면발, 고명, 수육의 맛이 모두 다릅니다.

            다섯 곳을 방문하며

            나만의 최고의 냉면집을 찾아보세요.

          </p>

        </div>

      </section>

      {/* 투어 */}

   <section className="mx-auto max-w-6xl px-6 pb-20">
  <div className="relative space-y-32">

    {shops.map((shop, index) => (
      <div
        key={shop.id}
        className={`relative flex items-center gap-12 ${
          index % 2 === 0 ? "" : "flex-row-reverse"
        }`}
      >
        {/* 점선 */}
        {index !== shops.length - 1 && (
          <div className="absolute left-10 top-24 h-40 border-l-4 border-dashed border-sky-300"></div>
        )}

        {/* 번호 */}
        <div className="z-10 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700 text-5xl font-black text-white shadow-xl">
          {shop.id}
        </div>

        {/* 카드 */}
        <div className="flex-1 overflow-hidden rounded-[30px] bg-white shadow-2xl transition duration-300 hover:-translate-y-3 hover:shadow-sky-300">
          <img
            src={shop.image}
            alt={shop.name}
            className="h-96 w-full object-cover"
          />

          <div className="p-8">
            <span className="rounded-full bg-red-500 px-4 py-2 text-sm font-bold text-white">
              🍜 황해도식 냉면
            </span>

            <h2 className="mt-5 text-4xl font-black">
              {shop.name}
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              {shop.desc}
            </p>

            <div className="mt-8 flex gap-3">
              <span className="rounded-full bg-sky-100 px-4 py-2">
                ⭐ 현지인 추천
              </span>

              <span className="rounded-full bg-orange-100 px-4 py-2">
                🥩 수육 추천
              </span>
            </div>

            <button className="mt-8 rounded-full bg-sky-600 px-8 py-4 font-bold text-white transition hover:bg-sky-700">
              상세보기 →
            </button>
          </div>
        </div>
      </div>
    ))}

  </div>
</section>

      {/* 완료 */}

      <section className="bg-gradient-to-r from-sky-700 via-cyan-600 to-blue-700 py-24 text-center text-white">

        <h2 className="text-5xl font-black">

          🏆 TOUR COMPLETE

        </h2>

        <p className="mt-6 text-2xl">

          5곳을 모두 방문하고

          나만의 최고의 냉면집을 선택해보세요!

        </p>

      </section>

    </main>
  );
}