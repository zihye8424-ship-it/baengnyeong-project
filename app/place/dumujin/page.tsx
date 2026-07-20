import Image from "next/image";
import Link from "next/link";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 두무진 여행 가이드 | 백령도의 모든 정보",
  description:
    "백령도 두무진의 볼거리, 추천 시간, 트레킹, 유람선, 사진 포인트와 여행 팁을 한눈에 확인하세요.",
};

const quickFacts = [
  ["추천 대상", "가족 · 연인 · 부모님 · 사진 여행"],
  ["추천 시간", "오전 또는 해 질 무렵"],
  ["관람 방법", "해안 트레킹 · 유람선"],
  ["준비물", "운동화 · 바람막이 · 생수"],
];

export default function DumujinPage() {
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
          src="/images/dumujin.jpg"
          alt="백령도 두무진 기암절벽"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-12 text-white">
          <div className="mb-4 flex flex-wrap gap-2 text-sm font-bold">
            <span className="rounded-full bg-sky-500 px-4 py-2">
              백령도 대표 명소
            </span>

            <span className="rounded-full bg-emerald-500 px-4 py-2">
              국가지질명소
            </span>

            <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              사진 명소
            </span>
          </div>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            두무진
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-100 md:text-2xl">
            파도와 바람이 빚어낸 기암절벽을 가까이에서 만나는
            백령도 최고의 해안 절경
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map(([title, value]) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <p className="text-sm font-bold text-sky-600">{title}</p>
              <p className="mt-2 font-semibold leading-6 text-gray-800">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 lg:grid-cols-[1fr_340px]">
        <article className="space-y-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-3xl font-black">
              🌊 두무진은 어떤 곳인가요?
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              두무진은 백령도 북서쪽 해안에 기암괴석과 규암절벽이
              이어지는 대표 명소입니다. 장군들이 머리를 맞대고
              회의하는 모습과 닮았다고 전해지며,
              코끼리바위·장군바위·선대암 등 독특한 바위 풍경을 볼 수
              있습니다. 해안 산책로에서는 절벽을 가까이 감상할 수 있고,
              유람선을 이용하면 바다 쪽에서 더 웅장한 풍경을 만날 수
              있습니다.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-3xl font-black">📸 꼭 봐야 할 포인트</h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {[
                [
                  "기암절벽",
                  "바다 위로 솟아오른 바위들이 만들어내는 두무진의 대표 풍경",
                ],
                [
                  "선대암 산책",
                  "해안 계단과 자갈길을 따라 천천히 풍경을 즐기는 코스",
                ],
                [
                  "유람선 풍경",
                  "육지에서 보이지 않는 절벽의 규모와 바위 형상을 감상",
                ],
                [
                  "노을과 사진",
                  "빛이 부드러운 늦은 오후에 입체적인 절벽 사진 촬영",
                ],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl bg-sky-50 p-6">
                  <h3 className="text-xl font-extrabold text-sky-900">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-700">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
<div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
  <h2 className="text-3xl font-black">
    📖 두무진의 역사와 유래
  </h2>

  <div className="mt-6 space-y-5 leading-8 text-gray-700">
    <p>
      두무진은 백령도를 대표하는 자연경관으로, 오랜 세월 동안 파도와 바람이
      만들어 낸 기암절벽이 이어지는 곳입니다. 독특한 바위들이 해안을 따라
      펼쳐져 있어 백령도를 찾는 여행객이라면 가장 먼저 방문하는 명소로
      손꼽힙니다.
    </p>

    <p>
      '두무진'이라는 이름은 여러 장군이 머리를 맞대고 회의를 하는 모습처럼
      바위들이 모여 있는 모습에서 유래했다는 이야기가 전해집니다. 실제로
      코끼리바위, 장군바위, 촛대바위 등 다양한 이름이 붙은 기암괴석을
      볼 수 있으며, 보는 위치에 따라 전혀 다른 형태로 보이는 것이
      두무진의 큰 매력입니다.
    </p>

    <p>
      두무진 일대는 백령·대청 국가지질공원의 대표 지질 명소로 알려져 있으며,
      수천만 년에 걸친 지질 활동과 침식 작용으로 형성된 암석층을 가까이에서
      관찰할 수 있습니다. 아름다운 풍경뿐 아니라 지질학적 가치도 높아
      자연을 배우고 체험할 수 있는 장소로도 많은 관심을 받고 있습니다.
    </p>

    <p>
      현재 두무진은 백령도를 대표하는 관광지이자 사진 명소로 많은 여행객이
      찾고 있으며, 해안 산책로와 유람선을 통해 서로 다른 각도에서
      웅장한 절벽과 서해의 아름다운 풍경을 감상할 수 있습니다.
    </p>
  </div>
</div>
         
         <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
  <h2 className="text-3xl font-black">🧭 주민 여행 팁</h2>

  <div className="mt-6 space-y-4 leading-8 text-gray-700">
    <p>
      ✅ 두무진은 바닷바람이 강한 날이 많으므로 얇은 바람막이나 겉옷을 준비하면 더욱 편안하게 둘러볼 수 있습니다.
    </p>

    <p>
      ✅ 해안 산책로에는 계단과 경사진 구간이 있어 미끄럼 방지 기능이 있는 운동화를 착용하는 것을 추천합니다.
    </p>

    <p>
      ✅ 유람선은 기상과 파도 상황에 따라 운항이 취소될 수 있으므로 출발 전에 운항 여부를 확인하는 것이 좋습니다.
    </p>

    <p>
      ✅ 사진 촬영은 오전이나 해 질 무렵이 가장 아름답습니다. 특히 노을이 질 때 절벽과 바다가 어우러진 풍경이 인상적입니다.
    </p>

    <p>
      ✅ 성수기에는 관광객이 많아 오전 일찍 방문하면 보다 여유롭게 산책과 사진 촬영을 즐길 수 있습니다.
    </p>
  </div>
</div>   
  <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
  <h2 className="text-3xl font-black">🗺️ 함께 가기 좋은 코스</h2>
  <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
  <h2 className="text-3xl font-black">
    🍀 계절별 두무진 여행 추천
  </h2>

  <div className="mt-6 grid gap-5 md:grid-cols-2">

    <div className="rounded-2xl bg-green-50 p-6">
      <h3 className="text-xl font-bold text-green-700">🌸 봄</h3>
      <p className="mt-3 leading-7 text-gray-700">
        따뜻한 날씨와 맑은 하늘 덕분에 트레킹을 즐기기에 가장 좋은 계절입니다.
        바람이 비교적 잔잔한 날이 많아 유람선 이용도 편안합니다.
      </p>
    </div>

    <div className="rounded-2xl bg-sky-50 p-6">
      <h3 className="text-xl font-bold text-sky-700">☀️ 여름</h3>
      <p className="mt-3 leading-7 text-gray-700">
        푸른 바다와 절벽의 대비가 가장 아름다운 시기입니다.
        햇볕이 강하므로 모자와 생수를 준비하면 더욱 쾌적하게 여행할 수 있습니다.
      </p>
    </div>

    <div className="rounded-2xl bg-orange-50 p-6">
      <h3 className="text-xl font-bold text-orange-700">🍁 가을</h3>
      <p className="mt-3 leading-7 text-gray-700">
        선선한 날씨와 높은 하늘 덕분에 사진 촬영 명소로 가장 인기가 많은 계절입니다.
        노을과 함께 보는 두무진 풍경은 많은 여행객이 추천하는 장면입니다.
      </p>
    </div>

    <div className="rounded-2xl bg-slate-100 p-6">
      <h3 className="text-xl font-bold text-slate-700">❄️ 겨울</h3>
      <p className="mt-3 leading-7 text-gray-700">
        겨울 바다의 웅장한 풍경을 감상할 수 있지만 강풍으로 유람선 운항이 제한될 수 있습니다.
        방문 전 기상 상황과 운항 여부를 확인하는 것이 좋습니다.
      </p>
    </div>

  </div>
</div>

            <div className="mt-6 space-y-4 leading-7 text-gray-700">
              <p>• 바람이 강한 날이 많아 얇은 바람막이를 챙기는 것이 좋아요.</p>
              <p>• 계단과 자갈길이 있어 미끄럽지 않은 운동화를 추천해요.</p>
              <p>
                • 유람선은 날씨와 파도에 따라 운항 여부가 달라질 수
                있으니 현장에서 먼저 확인하세요.
              </p>
              <p>
                • 사진은 오전의 맑은 빛이나 늦은 오후의 부드러운 빛에서
                가장 입체적으로 나와요.
              </p>
              <p>
                • 부모님이나 아이와 함께라면 무리해서 끝까지 걷기보다
                전망이 좋은 구간 위주로 둘러보세요.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-3xl font-black">🗺️ 함께 가기 좋은 코스</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["사곶해변", "천연비행장으로 알려진 넓은 해변"],
                ["콩돌해안", "파도 소리와 둥근 콩돌이 매력적인 해안"],
                ["끝섬전망대", "백령도 서쪽 바다와 노을을 보는 전망 명소"],
              ].map(([name, description]) => (
                <div
                  key={name}
                  className="rounded-2xl border border-gray-200 p-5"
                >
                  <h3 className="font-extrabold">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <aside className="space-y-5">
          <div className="sticky top-24 rounded-3xl bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">방문 전 확인</h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-gray-700">
              <p>
                <strong>위치</strong>
                <br />
                인천광역시 옹진군 백령면 두무진 일대
              </p>

              <p>
                <strong>추천 체류시간</strong>
                <br />
                약 1시간 30분~2시간
              </p>

              <p>
                <strong>추천 계절</strong>
                <br />
                봄 · 여름 · 가을
              </p>

              <p>
                <strong>주의사항</strong>
                <br />
                강풍·우천 시 해안 계단과 자갈길 주의
              </p>
            </div>

            <a
              href="https://map.naver.com/v5/search/백령도%20두무진"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-2xl bg-green-600 py-4 font-bold text-white hover:bg-green-700"
            >
              📍 네이버지도에서 보기
            </a>

            <Link
              href="/#ai-planner"
              className="mt-3 flex w-full items-center justify-center rounded-2xl bg-sky-600 py-4 font-bold text-white hover:bg-sky-700"
            >
              🤖 AI 여행 일정 만들기
            </Link>
          </div>
        </aside>
      </section>
      <PlaceReviews />
    </main>
  );
}