import Link from "next/link";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "백령도 한국기독교역사관 여행 가이드 | 백령도의 모든 정보",
  description:
    "백령도 한국기독교역사관을 방문하는 여행자를 위한 관람 포인트, 방문 전 확인사항, 함께 둘러볼 백령도 여행지를 정리한 안내입니다.",
};

const quickFacts = [
  ["추천 대상", "역사 · 문화 · 조용한 관람"],
  ["섬", "백령도"],
  ["관람 방법", "전시 · 기록 살펴보기"],
  ["방문 전", "운영·출입 안내 확인"],
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
        <img src="/images/christian-history-museum.png" alt="백령도 한국기독교역사관" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-12 text-white">
          <div className="mb-4 flex flex-wrap gap-2 text-sm font-bold">
            <span className="rounded-full bg-indigo-500 px-4 py-2">백령도 관광지</span>
            <span className="rounded-full bg-white/20 px-4 py-2 backdrop-blur">역사 · 문화</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight md:text-7xl">한국기독교역사관</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            백령도의 기독교 관련 역사와 기록을 살펴보는 문화 공간
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-4 md:grid-cols-4">
          {quickFacts.map(([title, value]) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-indigo-600">{title}</p>
              <p className="mt-2 font-extrabold leading-7">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6 pb-16">
        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <p className="font-bold text-indigo-600">백령도의 역사·문화 여행</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">📖 한국기독교역사관은 어떤 곳인가요?</h2>
          <div className="mt-6 space-y-5 text-[17px] leading-8 text-gray-700">
            <p>
              한국기독교역사관은 백령도 여행에서 자연경관뿐 아니라 섬에 남아 있는
              기독교 관련 역사와 기록을 살펴보고 싶은 여행자가 함께 둘러볼 수 있는 곳입니다.
            </p>
            <p>
              빠르게 사진만 찍고 이동하기보다 전시와 안내 내용을 천천히 읽어보면
              백령도의 문화와 역사를 이해하는 데 도움이 됩니다.
            </p>
            <p>
              이 페이지는 별도의 관광지인 <strong>‘한국기독교의 섬’</strong> 페이지와
              구분해 안내합니다. 두 장소의 이름이 비슷하므로 여행 동선을 정할 때
              페이지 제목과 위치 정보를 다시 확인해 주세요.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-indigo-100 bg-indigo-50 p-8 md:p-10">
          <p className="font-bold text-indigo-700">관람할 때 살펴볼 것</p>
          <h2 className="mt-2 text-3xl font-black">👀 역사관을 이렇게 둘러보세요</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">📜 기록과 설명</h3>
              <p className="mt-3 leading-7 text-gray-700">
                전시된 기록과 설명문이 있다면 제목만 보기보다 내용을 함께 읽으며
                백령도와 관련된 역사적 맥락을 살펴보세요.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">🏛️ 공간의 구성</h3>
              <p className="mt-3 leading-7 text-gray-700">
                전시 공간의 순서와 현장 안내에 따라 이동하면 자료를 보다 차분하게
                살펴볼 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">🧭 백령도 문화여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                해변이나 전망지와는 다른 성격의 장소이므로 자연 명소 사이에
                역사·문화 관람을 넣어 여행의 구성을 다양하게 할 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-extrabold">📷 관람 예절</h3>
              <p className="mt-3 leading-7 text-gray-700">
                사진 촬영 가능 여부와 제한 구역은 현장 안내를 먼저 확인하고,
                다른 관람객에게 방해가 되지 않도록 이용해 주세요.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">🧭 방문 전에 확인하세요</h2>
          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>✅ 방문 당일 운영 여부와 관람·출입 안내를 확인하세요.</li>
            <li>✅ 전시물이나 시설에 별도 촬영 안내가 있다면 해당 기준을 따라주세요.</li>
            <li>✅ 백령도 여객선 운항은 기상 영향을 받을 수 있으므로 출발 전 최신 운항 정보를 확인하세요.</li>
            <li>✅ 여러 관광지를 함께 방문한다면 이동 시간을 고려해 일정을 여유 있게 잡으세요.</li>
            <li>✅ 전시 자료와 시설물을 만지거나 훼손하지 말고 관람 예절을 지켜주세요.</li>
          </ul>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">👨‍👩‍👧 여행 유형별 관람 팁</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">가족여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                아이와 함께라면 모든 설명을 한 번에 읽기보다 눈에 띄는 자료를 중심으로
                이야기하며 천천히 관람해 보세요.
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">부모님과 여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                자연 관광지 사이에 실내·문화 관람 일정을 넣고 일행의 체력과
                이동 시간을 고려해 여행 순서를 정하는 것이 좋습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-6">
              <h3 className="text-xl font-extrabold">역사·문화 여행</h3>
              <p className="mt-3 leading-7 text-gray-700">
                전시 설명과 현장 안내를 중심으로 살펴보고 궁금한 내용은 기록해 두면
                백령도 여행의 다른 장소와 연결해 이해하기 좋습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">🗺️ 백령도에서 함께 둘러보기</h2>
          <p className="mt-4 leading-7 text-gray-600">
            역사관 관람 전후에 백령도의 자연·역사 명소를 함께 구성하면
            한 가지 주제에 치우치지 않는 여행 일정을 만들 수 있습니다.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/place/christianity" className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md">
              <h3 className="text-lg font-extrabold">한국기독교의 섬 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">역사관과 구분된 별도 관광 페이지</p>
            </Link>
            <Link href="/place/simcheonggak" className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md">
              <h3 className="text-lg font-extrabold">심청각 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 이야기를 함께 살펴보는 여행지</p>
            </Link>
            <Link href="/place/dumujin" className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md">
              <h3 className="text-lg font-extrabold">두무진 →</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">백령도의 대표적인 해안 경관을 만나는 곳</p>
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">❓ 자주 묻는 질문</h2>
          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-bold">Q. 한국기독교역사관과 ‘한국기독교의 섬’은 같은 페이지인가요?</h3>
              <p className="mt-2 leading-7">
                아니요. 이 플랫폼에서는 서로 다른 관광 정보로 구분해 안내하고 있습니다.
                이동 전 각 페이지의 제목과 안내 내용을 확인해 주세요.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 어떤 여행자에게 잘 맞나요?</h3>
              <p className="mt-2 leading-7">
                백령도의 자연경관뿐 아니라 역사와 문화 관련 기록을 함께 살펴보고 싶은
                여행자에게 잘 맞습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 방문 전에 무엇을 확인해야 하나요?</h3>
              <p className="mt-2 leading-7">
                당일 운영·출입 안내와 백령도 여객선 운항 정보를 확인하세요.
                현장 안내가 온라인 정보와 다를 경우 현장 기준을 우선해 주세요.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Q. 사진 촬영은 가능한가요?</h3>
              <p className="mt-2 leading-7">
                촬영 가능 여부나 제한은 전시와 시설 운영에 따라 달라질 수 있으므로
                현장의 촬영 안내를 먼저 확인하는 것이 좋습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">⚠️ 최신 현장 안내 우선</h2>
          <p className="mt-4 leading-7 text-amber-950">
            운영시간, 출입 가능 여부, 촬영 기준 등은 변경될 수 있습니다.
            방문 당일 현장 또는 공식 안내를 확인하고, 안내 내용이 다를 경우
            최신 현장 정보를 우선해 주세요.
          </p>
        </section>
      </section>

      <PlaceReviews placeSlug="christian-island" placeName="한국기독교역사관" />
    </main>
  );
}

