import PlaceTemplate from "../../components/PlaceTemplate";
import PlaceReviews from "../../components/PlaceReviews";

export default function KkeutseomPage() {
  return (
    <PlaceTemplate
      title="끝섬전망대"
      subtitle="백령도 서쪽 끝에서 서해와 아름다운 노을을 가장 가까이 만날 수 있는 최고의 전망 명소"
      image="/images/kkutseom.jpg"
      badges={["일몰 명소", "대표 전망대", "사진 명소"]}
      quickFacts={[
        ["추천 대상", "가족 · 연인 · 사진 여행"],
        ["추천 시간", "오후 4시 ~ 일몰"],
        ["관람 방법", "도보 산책"],
        ["준비물", "운동화 · 바람막이 · 카메라"],
      ]}
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
  <h2 className="text-3xl font-black">
    📖 끝섬전망대 이야기
  </h2>

  <div className="mt-6 space-y-5 leading-8 text-gray-700">
    <p>
      끝섬전망대는 백령도 서쪽 끝에 위치한 대표 전망 명소로,
      드넓은 서해와 아름다운 노을을 감상할 수 있는 곳입니다.
      날씨가 좋은 날에는 끝없이 펼쳐진 수평선과 백령도의 해안 절경을
      한눈에 바라볼 수 있어 많은 여행객들이 찾는 명소입니다.
    </p>

    <p>
      전망대 내부에는 백령도의 옛 모습을 담은 사진 전시관이 마련되어
      있습니다. 과거 백령도 주민들의 생활상과 마을의 변화를 사진으로
      살펴볼 수 있어 백령도의 역사를 자연스럽게 이해할 수 있습니다.
    </p>

    <p>
      또한 <strong>3D 스마트 체험존</strong>에서는 디지털 콘텐츠를
      활용해 백령도의 주요 관광지와 자연환경을 입체적으로 체험할 수
      있어 아이들과 함께 방문하기에도 좋은 공간입니다.
    </p>

    <p>
      전시관 한편에는
      <strong> 연평도 포격 당시 실제 사용되었던 포 잔해</strong>와
      관련 자료가 전시되어 있습니다.
      백령도가 지닌 역사와 안보의 의미를 되새겨 볼 수 있는 뜻깊은
      공간으로 많은 관광객들이 함께 둘러보는 전시입니다.
    </p>

    <p>
      아름다운 자연경관과 함께 역사, 문화, 체험, 안보 교육까지
      모두 경험할 수 있는 곳이 바로 끝섬전망대의 가장 큰 매력입니다.
    </p>
  </div>
</div>

<div className="rounded-3xl bg-white p-8 shadow-sm">
  <h2 className="text-3xl font-black">
    📸 꼭 봐야 할 포인트
  </h2>
<div className="rounded-3xl bg-white p-8 shadow-sm">
  <h2 className="text-3xl font-black">
    🧭 주민 여행 팁
  </h2>

  <div className="mt-6 space-y-4 leading-8 text-gray-700">
    <p>
      ✅ 일몰 시간보다 30~40분 먼저 도착하면 가장 아름다운 노을을 감상할 수 있습니다.
    </p>

    <p>
      ✅ 바닷바람이 강한 날이 많으므로 계절에 관계없이 얇은 바람막이를 준비하는 것이 좋습니다.
    </p>

    <p>
      ✅ 전망대와 전시관, 3D 스마트 체험존까지 함께 둘러보면 약 40~60분 정도 소요됩니다.
    </p>

    <p>
      ✅ 전망대 난간에서는 서해와 백령도의 해안선을 한눈에 담을 수 있어 사진 촬영 명소로 유명합니다.
    </p>

    <p>
      ✅ 끝섬전망대 방문 후 두무진이나 사곶해변까지 함께 둘러보면 백령도의 대표 관광지를 하루에 여행할 수 있습니다.
    </p>
  </div>
</div>

<div className="rounded-3xl bg-white p-8 shadow-sm">
  <h2 className="text-3xl font-black">
    🍀 계절별 끝섬전망대 여행 추천
  </h2>
  <div className="rounded-3xl bg-white p-8 shadow-sm">
  <h2 className="text-3xl font-black">
    🗺️ 함께 가기 좋은 코스
  </h2>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    {[
      ["두무진", "백령도를 대표하는 기암절벽과 유람선 명소"],
      ["사곶해변", "천연비행장으로 유명한 백사장"],
      ["콩돌해안", "파도와 콩돌이 만들어내는 아름다운 해안"],
    ].map(([name, description]) => (
      <div
        key={name}
        className="rounded-2xl border border-gray-200 p-5 hover:shadow-lg transition"
      >
        <h3 className="font-extrabold text-lg">{name}</h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
    ))}
  </div>
</div>

<div className="rounded-3xl bg-white p-8 shadow-sm">
  <h2 className="text-3xl font-black">
    ❓ 자주 묻는 질문
  </h2>

  <div className="mt-8 space-y-6">
    <div>
      <h3 className="font-bold text-lg">
        Q. 입장료가 있나요?
      </h3>

      <p className="mt-2 text-gray-700">
        입장료는 없으며 누구나 자유롭게 관람할 수 있습니다.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-lg">
        Q. 언제 방문하는 것이 가장 좋나요?
      </h3>

      <p className="mt-2 text-gray-700">
        일몰 30~40분 전에 방문하면 가장 아름다운 노을과 서해 풍경을 감상할 수 있습니다.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-lg">
        Q. 전시관도 함께 볼 수 있나요?
      </h3>

      <p className="mt-2 text-gray-700">
        네. 백령도 옛 사진 전시, 3D 스마트 체험존, 연평도 포격 당시 포 잔해 전시를 함께 관람할 수 있습니다.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-lg">
        Q. 관람 시간은 얼마나 걸리나요?
      </h3>

      <p className="mt-2 text-gray-700">
        전망대와 전시관을 함께 둘러보면 약 40~60분 정도 소요됩니다.
      </p>
    </div>
  </div>
</div>

<PlaceReviews />

  <div className="mt-6 grid gap-5 md:grid-cols-2">
    <div className="rounded-2xl bg-green-50 p-6">
      <h3 className="text-xl font-bold text-green-700">🌸 봄</h3>
      <p className="mt-3 leading-7 text-gray-700">
        맑은 하늘과 선선한 날씨 덕분에 전망을 감상하기 가장 좋은 계절입니다.
      </p>
    </div>

    <div className="rounded-2xl bg-sky-50 p-6">
      <h3 className="text-xl font-bold text-sky-700">☀️ 여름</h3>
      <p className="mt-3 leading-7 text-gray-700">
        푸른 서해와 시원한 바다 풍경이 어우러져 사진 촬영하기 좋은 시기입니다.
      </p>
    </div>

    <div className="rounded-2xl bg-orange-50 p-6">
      <h3 className="text-xl font-bold text-orange-700">🍁 가을</h3>
      <p className="mt-3 leading-7 text-gray-700">
        붉게 물드는 노을을 감상하기 가장 좋은 계절로 많은 여행객들이 찾습니다.
      </p>
    </div>

    <div className="rounded-2xl bg-slate-100 p-6">
      <h3 className="text-xl font-bold text-slate-700">❄️ 겨울</h3>
      <p className="mt-3 leading-7 text-gray-700">
        겨울 서해의 웅장한 풍경과 맑은 하늘을 함께 감상할 수 있지만 방한 준비를 추천합니다.
      </p>
    </div>
  </div>
</div>

  <div className="mt-6 grid gap-5 md:grid-cols-2">
    {[
      ["🌅 서해 일몰", "백령도 최고의 노을을 감상할 수 있는 대표 명소"],
      ["🖼️ 백령도 옛 사진", "백령도의 역사와 생활상을 담은 사진 전시"],
      ["🖥️ 3D 스마트 체험존", "백령도를 디지털로 체험하는 공간"],
      ["💥 연평도 포격 전시", "실제 포 잔해와 안보 전시를 관람할 수 있는 공간"],
    ].map(([title, description]) => (
      <div
        key={title}
        className="rounded-2xl bg-orange-50 p-6"
      >
        <h3 className="text-xl font-bold text-orange-700">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-gray-700">
          {description}
        </p>
      </div>
    ))}
  </div>
</div>
        <h2 className="text-3xl font-black">
          🌅 끝섬전망대는 어떤 곳인가요?
        </h2>

        <p className="mt-5 leading-8 text-gray-700">
          끝섬전망대는 백령도 서쪽 끝에 위치한 대표 전망 명소입니다.
          탁 트인 서해와 아름다운 일몰을 감상할 수 있으며,
          백령도를 찾는 여행객들이 가장 많이 찾는 노을 명소입니다.
        </p>

        <p className="mt-5 leading-8 text-gray-700">
          전망대 내부에는 백령도의 옛 사진 전시관과
          3D 스마트 체험존,
          연평도 포격 당시 포 잔해 전시까지 함께 마련되어 있어
          자연과 역사, 안보를 동시에 체험할 수 있습니다.
        </p>
      </div>
    </PlaceTemplate>
  );
}