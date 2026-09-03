import Link from "next/link";
import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export const metadata = {
  title: "소청도 탑동포구·인사하는 바위 여행 가이드 | 백령도의 모든 정보",
  description:
    "소청도 탑동포구와 인사하는 바위 여행 가이드. 포구와 바위가 어우러진 풍경, 사진 포인트, 방문 팁과 소청도에서 함께 둘러보기 좋은 장소를 확인하세요.",
};

export default function Page() {
  return (
    <PlaceTemplate
      title="탑동포구·인사하는 바위"
      subtitle="포구 풍경과 독특한 바위 지형을 함께 만나는 소청도의 경관 포인트"
      image="/images/tapdong-port-greeting-rock.png"
      badges={["소청도", "포구풍경", "바위경관", "사진여행"]}
      quickFacts={[
        ["추천 대상", "섬여행 · 자연 · 사진"],
        ["추천 시간", "날씨가 좋은 낮 시간"],
        ["관람 방법", "포구와 주변 풍경 천천히 둘러보기"],
        ["준비물", "운동화 · 바람막이 · 생수"],
      ]}
    >
      <div className="space-y-8">
        {/* 소개 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ⚓ 탑동포구·인사하는 바위는 어떤 곳인가요?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-700">
            <p>
              탑동포구·인사하는 바위는 소청도 여행 중 포구의 풍경과
              독특한 바위 모습을 함께 살펴볼 수 있는 경관 포인트입니다.
            </p>

            <p>
              포구만 빠르게 둘러보고 이동하기보다 주변의 바다와
              해안, 마을 풍경까지 함께 바라보면 소청도 특유의
              조용한 섬 분위기를 느끼기 좋습니다.
            </p>

            <p>
              소청도에는 자연 지형과 작은 포구, 등대 등 서로 다른
              분위기의 여행지가 있어 여러 장소를 함께 묶어
              둘러보는 여행에 잘 어울립니다.
            </p>
          </div>
        </section>

        {/* 여행 포인트 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📸 탑동포구에서 살펴볼 포인트
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-xl font-extrabold">
                ⚓ 포구 풍경
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바다와 포구가 이어지는 풍경을 바라보며 작은 섬의
                정취를 천천히 느껴보세요.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-extrabold">
                🪨 인사하는 바위
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                주변 자연 풍경과 함께 독특한 바위의 모습을
                살펴보는 것도 이곳을 둘러보는 재미입니다.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-xl font-extrabold">
                🌊 바다와 해안
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                포구와 바위만 보기보다 주변 바다와 해안선을 함께
                바라보면 풍경을 더욱 넓게 감상할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-6">
              <h3 className="text-xl font-extrabold">
                📷 여행 사진
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                바위와 바다, 포구를 한 화면에 담아 소청도 특유의
                섬 풍경을 사진으로 남겨보세요.
              </p>
            </div>
          </div>
        </section>

        {/* 방문 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🧭 탑동포구 방문 팁
          </h2>

          <ul className="mt-6 space-y-4 leading-8 text-gray-700">
            <li>
              ✅ 소청도 방문 전 선박 운항과 기상 상황을 확인하세요.
            </li>

            <li>
              ✅ 포구는 주민들의 생활 및 작업 공간이기도 하므로
              통행을 방해하지 않도록 주의해 주세요.
            </li>

            <li>
              ✅ 바위와 해안 주변에서는 미끄러질 수 있으므로
              걷기 편한 운동화를 추천합니다.
            </li>

            <li>
              ✅ 해안은 바람이 강할 수 있으므로 바람막이나
              겉옷을 준비하면 좋습니다.
            </li>

            <li>
              ✅ 사진을 찍기 위해 위험한 암반이나 방파제 끝으로
              무리하게 이동하지 마세요.
            </li>
          </ul>
        </section>

        {/* 사진 팁 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            📷 사진으로 남겨보기
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🪨 바위 중심
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                인사하는 바위의 형태가 잘 보이도록 주변 풍경과
                함께 구도를 잡아보세요.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                🌊 바다까지 넓게
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                포구와 바다를 넓게 담으면 소청도의 작은 섬마을
                분위기를 표현하기 좋습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-extrabold">
                ⚠️ 안전 우선
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                좋은 사진보다 안전이 우선입니다. 위험한 해안이나
                암반에는 접근하지 마세요.
              </p>
            </div>
          </div>
        </section>

        {/* 함께 둘러보기 */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            🗺️ 소청도에서 함께 둘러보기
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            탑동포구와 함께 소청도의 다른 여행지도 둘러보세요.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/place/socheong-lighthouse"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                소청도등대 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                소청도의 바다 풍경을 감상하는 여행지
              </p>
            </Link>

            <Link
              href="/place/nohwa-port"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                노화동포구 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                바다와 섬마을 생활이 만나는 작은 포구
              </p>
            </Link>

            <Link
              href="/place/socheong-catholic"
              className="rounded-2xl border border-gray-200 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold">
                천주교회·김대건 신부상 →
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                소청도의 역사와 종교문화를 살펴보는 곳
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black">
            ❓ 탑동포구·인사하는 바위 자주 묻는 질문
          </h2>

          <div className="mt-7 space-y-6">
            <div>
              <h3 className="text-lg font-bold">
                Q. 어떤 여행자에게 추천하나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                포구와 바다, 바위가 어우러진 소청도의 자연스러운
                섬 풍경을 보고 싶은 여행자에게 잘 어울립니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 사진 찍기 좋은 곳인가요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                포구와 바위, 바다를 함께 담아 소청도의 여행
                풍경을 기록하기 좋습니다. 촬영할 때는 안전한
                위치를 이용해 주세요.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">
                Q. 방문 전에 무엇을 확인해야 하나요?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                소청도 선박 운항과 날씨를 확인하고 현장의 접근
                및 안전 안내가 있다면 해당 안내를 우선해 주세요.
              </p>
            </div>
          </div>
        </section>

        {/* 안전 안내 */}
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-black text-amber-950">
            ⚠️ 방문 전 확인
          </h2>

          <p className="mt-4 leading-7 text-amber-950">
            포구와 해안은 기상과 파도에 따라 이용 여건이 달라질
            수 있습니다. 주민들의 작업 공간을 배려하고 현장의
            출입 및 안전 안내를 우선해 주세요. 파도가 높거나
            바람이 강한 날에는 위험한 해안과 방파제에 무리하게
            접근하지 마세요.
          </p>
        </section>
      </div>

      <PlaceReviews
        placeSlug="tapdong-port"
        placeName="탑동포구·인사하는 바위"
      />
    </PlaceTemplate>
  );
}