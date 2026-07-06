"use client";

import { supabase } from "./lib/supabase";
import Image from "next/image";
import { useState, useEffect } from "react";


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedIsland, setSelectedIsland] = useState("백령도");
  

  // 방문자
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);

  // 펼치기/접기
  const [showStay, setShowStay] = useState(false);
  const [showFood, setShowFood] = useState(false);
  const [showTaxi, setShowTaxi] = useState(false);
  const [showRentcar, setShowRentcar] = useState(false);
  const [showLocal, setShowLocal] = useState(false);
  const [showBus, setShowBus] = useState(false);
  const [showMart, setShowMart] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  // 버스
  const [busDirection, setBusDirection] = useState("북포리");

  // 검색
  const [staySearch, setStaySearch] = useState("");
  const [foodSearch, setFoodSearch] = useState("");

  // Q&A
  const [qnaCategory, setQnaCategory] = useState("전체");
  const [notices, setNotices] = useState<any[]>([]);
const [placeViews, setPlaceViews] = useState<any[]>([]);
const [placeLikes, setPlaceLikes] = useState<any[]>([]);
const [myCourse, setMyCourse] = useState<any[]>([]);
const [popularPlaces, setPopularPlaces] = useState<any[]>([]);

  const categories = [
    { name: "전체", icon: "🏝️" },
    { name: "관광지", icon: "📸" },
    { name: "맛집", icon: "🍜" },
    { name: "숙박", icon: "🏨" },
    { name: "개인택시", icon: "🚕" },
    { name: "렌트카", icon: "🚗" },
    { name: "특산물", icon: "🎁" },
  ];
  const places = [
    {
      name: "두무진",
      island: "백령도",
      image: "/images/dumujin.jpg",
      category: "관광지",
      description:
        "수천만 년 동안 형성된 기암절벽과 푸른서해가 어우러진 백령도 대표 절경",
      location: "백령도 북서쪽",
      link: "https://map.naver.com/",
    },
    {
      name: "끝섬전망대",
      island: "백령도",
      image: "/images/kkutseom.jpg",
      category: "관광지",
      description:
        "북한 장산곶과 사곶해변, 하늬해변까지 조망 가능한 백령도의 대표 전망 명소",
      location: "백령도 서쪽해안",
      link: "https://map.naver.com/v5/search/끝섬전망대",
    },
    {
      name: "사곶해변",
      island: "백령도",
      image: "/images/sagot.jpg",
      category: "관광지",
      description:
        "천연비행장으로 유명한 세계적으로 희귀한 사빈 해변",
      location: "용기포항 인근",
      link: "https://map.naver.com/v5/search/사곶해변",
    },
    {
      name: "콩돌해안",
      island: "백령도",
      image: "/images/kongdol.jpg",
      category: "관광지",
      description: "파도 소리가 아름다운 백령도 명소",
      link: "https://map.naver.com/v5/search/콩돌해안",
    },

    {
      name: "심청각",
      island: "백령도",
      image: "/images/simcheonggak.jpg",
      category: "관광지",
      description: "심청전 설화가 전해지는 문화 명소",
      link: "https://map.naver.com/v5/search/심청각",
    },
    {
      name: "하늬해안",
      island: "백령도",
      image: "/images/hani.jpg",
      category: "관광지",
      description: "북한 장산곶 방향의 바다와 점박이물범 서식지를 함께 볼 수 있는 생태관광 명소",
      location: "북한 장산곶 방향이 보이는 백령도 북서쪽 해안",
      tip: "🦭 물범 관찰 추천",
      link: "https://map.naver.com/v5/search/하늬해안",
    },
    {
  name: "용틀임바위",
  island: "백령도",
  image: "/images/dragon.jpg",
  category: "관광지",
  description: "용이 몸을 비틀며 승천하는 모습을 닮은 백령도의 대표 지질명소",
  link: "https://map.naver.com/v5/search/용틀임바위",
},
    {
      name: "사자바위",
      island: "백령도",
      image: "/images/saja.jpg",
      category: "관광지",
      description: "사자의 형상을 닮은 백령도의 대표 해안 바위",
      link: "https://map.naver.com/v5/search/사자바위",
    },
    {
      name: "천안함 위령탑",
      island: "백령도",
      image: "/images/cheonan.jpg",
      category: "안보역사",
      description: "천안함 46용사를 추모하는 장소",
      location: "백령면 연화리",
      link: "https://map.naver.com/v5/search/천안함위령탑",
    },
    {
      name: "📸 사진찍기 좋은 녹색명소",
      island: "백령도",
      image: "/images/photozone.jpg",
      category: "관광지",
      description:
        "백령도에서 꼭 사진을 남겨야 하는 숨은 포토스팟입니다.",
      location: "인천 옹진군 백령면 남포리 산2",
      tip: "📸 SNS 인기",
      link: "https://map.naver.com/v5/search/인천%20옹진군%20백령면%20남포리%20산2",
    },
    {
      name: "서해최북단 백령도비",
      island: "백령도",
      image: "/images/baengnyeong-bi.jpg",
      category: "관광지",
      description: "서해 최북단 백령도를 상징하는 기념비입니다. 많은 관광객들이 인증사진을 남기는 대표 포토존입니다.",
      location: "인천 옹진군 백령면 진촌리",
      tip: "📸 포토존",
      link: "https://map.naver.com/v5/search/백령도비",
    },
    {
      name: "한국기독교의 섬",
      island: "백령도",
      image: "/images/christian-island.jpg",
      category: "안보역사",
      description: "백령도는 한국 초기 기독교 역사가 깊은 섬으로 여러 역사적인 교회와 유적을 만나볼 수 있습니다.",
      location: "인천 옹진군 백령면",
      tip: "⛪ 역사여행",
      link: "https://map.naver.com/v5/search/중화동교회",
    },
    {
      name: "대청도 옥죽포",
      island: "대청도",
      image: "/images/daechung.jpg",
      category: "관광지",
      description: "대청도의 아름다운 해안 절경",
    },

    {
      name: "소청도 분바위",
      island: "소청도",
      image: "/images/socheong.jpg",
      category: "관광지",
      description: "신비로운 지형의 소청도 명소",
    },
    {
      name: "백령도 감성카페",
      image: "/images/emotioncafe.jpg",
      category: "카페",
      description: "바다뷰와 노을이 아름다운 카페",
    },
    {
      name: "군인 추천 외출코스",
      image: "/images/soldier.jpg",
      category: "군인외출",
      description: "짧은 시간에 즐기는 백령도 코스",
    },

  ];
  const filteredPlaces = places.filter((place) => {

    // 섬 필터
    const islandMatch =
      place.island === selectedIsland;

    // 전체
    if (selectedCategory === "전체") {
      return islandMatch;
    }

    // 관광/안보
    return (
      islandMatch &&
      (
        place.category === selectedCategory ||

        (
          selectedCategory === "관광지" &&
          place.category === "안보역사"
        )
      )
    );
  });

  useEffect(() => {
    loadNotices();
    loadPlaceLikes();
    loadPlaceViews();
    loadPopularPlaces();
    updateVisitorStats();
  
    const savedCourse = localStorage.getItem("myCourse");
    if (savedCourse) {
      setMyCourse(JSON.parse(savedCourse));
    }
  }, []);
 
  async function loadNotices() {
    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3);

    if (!error && data) {
      setNotices(data);
    }
  }

  async function loadPlaceLikes() {
    const { data, error } = await supabase
      .from("place_likes")
      .select("*");

    if (!error && data) {
      setPlaceLikes(data);
    }
  }

  async function handlePlaceLike(placeName: string) {
    function handleAddCourse(place: any) {
      const exists = myCourse.find((item) => item.name === place.name);
    
      if (exists) {
        alert("이미 여행코스에 담겨 있어요 😊");
        return;
      }
    
      const updatedCourse = [...myCourse, place];
      setMyCourse(updatedCourse);
      localStorage.setItem("myCourse", JSON.stringify(updatedCourse));
    
      alert(`${place.name}이 여행코스에 담겼어요!`);
    }
    
    function handleRemoveCourse(placeName: string) {
      const updatedCourse = myCourse.filter((item) => item.name !== placeName);
      setMyCourse(updatedCourse);
      localStorage.setItem("myCourse", JSON.stringify(updatedCourse));
    }
    
    function handleClearCourse() {
      if (!confirm("여행코스를 모두 삭제할까요?")) return;
    
      setMyCourse([]);
      localStorage.removeItem("myCourse");
    }
    const likeKey = `place-like-${placeName}`;

    if (localStorage.getItem(likeKey)) {
      alert("이미 좋아요를 눌렀어요 😊");
      return;
    }

    const { data } = await supabase
      .from("place_likes")
      .select("*")
      .eq("place_name", placeName)
      .single();

    if (data) {
      await supabase
        .from("place_likes")
        .update({
          like_count: data.like_count + 1,
        })
        .eq("place_name", placeName);
    } else {
      await supabase.from("place_likes").insert([
        {
          place_name: placeName,
          like_count: 1,
        },
      ]);
    }

    localStorage.setItem(likeKey, "true");
    loadPlaceLikes();
  }

  async function loadPlaceViews() {
    const { data, error } = await supabase
      .from("place_views")
      .select("*");

    if (!error && data) {
      setPlaceViews(data);
    }
  }

  async function handlePlaceView(placeName: string) {
    function handleAddCourse(place: any) {
      const exists = myCourse.find((item) => item.name === place.name);
    
      if (exists) {
        alert("이미 여행코스에 담겨 있어요 😊");
        return;
      }
    
      const updatedCourse = [...myCourse, place];
      setMyCourse(updatedCourse);
      localStorage.setItem("myCourse", JSON.stringify(updatedCourse));
    
      alert(`${place.name}이 여행코스에 담겼어요!`);
    }
    
    function handleRemoveCourse(placeName: string) {
      const updatedCourse = myCourse.filter((item) => item.name !== placeName);
      setMyCourse(updatedCourse);
      localStorage.setItem("myCourse", JSON.stringify(updatedCourse));
    }
    
    function handleClearCourse() {
      if (!confirm("여행코스를 모두 삭제할까요?")) return;
    
      setMyCourse([]);
      localStorage.removeItem("myCourse");
    }
    const today = new Date().toISOString().slice(0, 10);
    const viewKey = `place-view-${placeName}-${today}`;
  
    if (localStorage.getItem(viewKey)) return;
  
    const { data } = await supabase
      .from("place_views")
      .select("*")
      .eq("place_name", placeName)
      .single();
  
    if (data) {
      await supabase
        .from("place_views")
        .update({
          view_count: data.view_count + 1,
        })
        .eq("place_name", placeName);
    } else {
      await supabase.from("place_views").insert([
        {
          place_name: placeName,
          view_count: 1,
        },
      ]);
    }
  
    localStorage.setItem(viewKey, "true");
  
    await loadPlaceViews();
    await loadPopularPlaces();
  }
  
  async function loadPopularPlaces() {
    const { data: views } = await supabase.from("place_views").select("*");
    const { data: likes } = await supabase.from("place_likes").select("*");
  
    const ranking = places.map((place) => {
      const view =
        views?.find((v) => v.place_name === place.name)?.view_count || 0;
  
      const like =
        likes?.find((l) => l.place_name === place.name)?.like_count || 0;
  
      return {
        ...place,
        view,
        like,
        score: view + like * 2,
      };
    });
  
    ranking.sort((a, b) => b.score - a.score);
  
    setPopularPlaces(ranking.slice(0, 10));
  }
  
  const updateVisitorStats = async () => {
    const today = new Date().toISOString().slice(0, 10);
    const visitedKey = `visited-${today}`;
  
    const { data } = await supabase
      .from("visitor_stats")
      .select("*")
      .eq("id", 1)
      .single();
  
    if (!data) return;
  
    if (localStorage.getItem(visitedKey)) {
      setTodayVisitors(data.today_count);
      setTotalVisitors(data.total_count);
      return;
    }
  
    const isNewDay = data.last_date !== today;
    const newTodayCount = isNewDay ? 1 : data.today_count + 1;
    const newTotalCount = data.total_count + 1;
  
    const { data: updatedData } = await supabase
      .from("visitor_stats")
      .update({
        today_count: newTodayCount,
        total_count: newTotalCount,
        last_date: today,
      })
      .eq("id", 1)
      .select()
      .single();
  
    if (updatedData) {
      localStorage.setItem(visitedKey, "true");
      setTodayVisitors(updatedData.today_count);
      setTotalVisitors(updatedData.total_count);
    }
  };
  
  return (
    <main className="bg-white min-h-screen text-gray-900">
      {/* HEADER */}
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" className="text-xl font-bold text-gray-900">
      백령도의 모든 정보
    </a>

    <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
      <a href="/" className="hover:text-sky-500">홈</a>
      <a href="#place-section" className="hover:text-sky-500">관광지</a>
      <a href="#food" className="hover:text-sky-500">맛집</a>
      <a href="#stay" className="hover:text-sky-500">숙소</a>
      <a href="#qna" className="hover:text-sky-500">Q&A</a>
      <a href="/about" className="hover:text-sky-500">운영자 소개</a>
    </nav>
  </div>
</header>
      {/* HERO */}
      {/* PDF 판매 */}
<section className="max-w-6xl mx-auto px-6 py-12">
  <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-10 text-white shadow-2xl text-center">

    <h2 className="text-4xl font-bold mb-4">
      📘 백령도 현실 여행 가이드
    </h2>

    <p className="text-lg mb-6">
      28년 거주 주민이 직접 만든 백령도 여행 PDF
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto mb-8">      
      <div>✅ 관광지</div>
      <div>✅ 맛집</div>
      <div>✅ 숙소</div>
      <div>✅ 군인면회</div>
      <div>✅ 숨은명소</div>
      <div>✅ 배편</div>
      <div>✅ 여행팁</div>
      <div>✅ 지도</div>
    </div>

    <p className="text-3xl font-bold mb-6">
      💰 6,000원
    </p>

    <a
      href="https://open.kakao.com/o/pUnS91Ai"
      target="_blank"
      className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition"
    >
      📩 오픈채팅으로 구매하기
    </a>

  </div>
</section>
      <section className="relative h-[80vh] w-full">

        <Image
          src="/images/background.jpg"
          alt="백령도 메인"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 flex flex-col justify-center items-center text-center px-6">

          <h2 className="text-xl md:text-3xl text-gray-200 mb-4">
            서해 최북단의 특별한 섬, 백령도
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
            백령도의 모든 정보
          </h1>

          <p className="text-white text-lg md:text-2xl mb-8">
            관광지 · 맛집 · 숙박 · 군인외출 · 여행정보
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <button
              onClick={() => {
                setSelectedCategory("관광지");

                setTimeout(() => {
                  document
                    .getElementById("place-section")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }, 100);
              }}
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              📸 관광지 보기
            </button>

          </div>

        </div>

      </section>
    {/* 방문자 현황 */}
<section className="max-w-6xl mx-auto px-6 py-12">

<div className="grid md:grid-cols-3 gap-6">

  <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

    <div className="text-5xl mb-3">
      👀
    </div>

    <h3 className="text-2xl font-bold mb-2">
      오늘 방문자
    </h3>

    <p className="text-4xl font-extrabold text-sky-500">
  {todayVisitors.toLocaleString()}명
</p>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

    <div className="text-5xl mb-3">
      👥
    </div>

    <h3 className="text-2xl font-bold mb-2">
      누적 방문자
    </h3>

    <p className="text-4xl font-extrabold text-green-500">
  {totalVisitors.toLocaleString()}명
</p>

  </div>

  <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

    <div className="text-5xl mb-3">
      📸
    </div>

    <h3 className="text-2xl font-bold mb-2">
      등록 사진
    </h3>

    <p className="text-4xl font-extrabold text-orange-500">
      60
    </p>

  </div>

</div>

</section>
{/* 제보센터 */}
<section className="max-w-6xl mx-auto px-6 py-16">

  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl shadow-xl p-10 text-white">

    <h2 className="text-4xl font-bold text-center mb-6">
      📢 정보 수정 · 제보센터
    </h2>

    <p className="text-center text-lg mb-10 opacity-90">
      백령도 정보가 변경되었거나 새로운 장소가 있다면 알려주세요 😊
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">

        <div className="text-5xl mb-4">
          🍜
        </div>

        <h3 className="text-xl font-bold mb-2">
          맛집 제보
        </h3>

        <p className="text-sm opacity-90">
          신규 맛집 또는 폐업 정보를 알려주세요.
        </p>

      </div>

      <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">

        <div className="text-5xl mb-4">
          🏨
        </div>

        <h3 className="text-xl font-bold mb-2">
          숙소 제보
        </h3>

        <p className="text-sm opacity-90">
          신규 숙박업소 및 정보 변경 제보
        </p>

      </div>

      <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">

        <div className="text-5xl mb-4">
          📸
        </div>

        <h3 className="text-xl font-bold mb-2">
          관광지 제보
        </h3>

        <p className="text-sm opacity-90">
          숨은 명소와 여행 정보를 알려주세요.
        </p>

      </div>

    </div>

    <div className="text-center mt-10">

      <a
        href="https://open.kakao.com/o/pUnS91Ai"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-green-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
      >
        💬 제보하기
      </a>

    </div>

  </div>

</section>
{/* ✍️ 쩨쩨의 백령도 블로그 */}
<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl shadow-xl p-10 text-center text-white">

    <h2 className="text-4xl font-bold mb-4">
      ✍️ 쩨쩨의 백령도 블로그
    </h2>

    <p className="text-lg opacity-90 mb-8">
      28년 주민이 직접 알려주는<br />
      백령도 여행팁, 맛집, 숙소, 군인면회 이야기
    </p>

    <a
      href="https://blog.naver.com/zihye7"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-white text-sky-600 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition"
    >
      📖 네이버 블로그 바로가기
    </a>

  </div>

</section>
      {/* LIVE INFO */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="https://www.weather.go.kr/w/weather/forecast/short-term.do"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">
              🌤️
            </div>

            <h3 className="text-2xl font-bold mb-3">
              백령도 실시간 날씨
            </h3>

            <p className="text-gray-600">
              현재 기상 상황과 주간 예보 확인하기
            </p>
          </a>

          <a
            href="https://www.komsa.or.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">
              🚢
            </div>

            <h3 className="text-2xl font-bold mb-3">
              여객선 운항 정보
            </h3>

            <p className="text-gray-600">
              오늘 배 운항 여부와 결항 확인
            </p>
          </a>

          <a
            href="https://www.kefship.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">
              🎫
            </div>

            <h3 className="text-2xl font-bold mb-3">
              배편 예약 바로가기
            </h3>

            <p className="text-gray-600">
              고려고속훼리 예약 및 시간표 확인
            </p>
          </a>

        </div>
{/* 백령도 소개 */}
<section className="max-w-6xl mx-auto px-6 py-12">
  <div className="bg-white rounded-3xl shadow-lg p-8 leading-8">
    <h2 className="text-3xl font-bold text-sky-700 mb-6">
      🌊 백령도는 어떤 곳인가요?
    </h2>

    <p className="text-gray-700 mb-5">
      백령도는 대한민국 서해 최북단에 위치한 아름다운 섬으로,
      천혜의 자연경관과 독특한 지질 명소를 간직한 여행지입니다.
      두무진, 사곶해변, 콩돌해안, 하늬해변 등 다양한 관광명소를
      만날 수 있으며 사계절마다 다른 매력을 느낄 수 있습니다.
    </p>

    <p className="text-gray-700 mb-5">
      또한 군인 면회, 가족여행, 낚시여행, 드라이브 여행으로도
      많은 사람들이 찾고 있으며, 배편과 숙소, 렌터카,
      개인택시 등 여행에 필요한 정보를 미리 준비하는 것이
      더욱 편안한 여행의 시작이 됩니다.
    </p>

    <p className="text-gray-700">
      <strong>백령도의 모든 정보</strong>는
      백령도에서 28년 동안 생활한 운영자가
      직접 정리한 여행 플랫폼으로,
      관광지, 맛집, 숙박, 교통, 군인 면회,
      실시간 배편과 여행 팁까지
      한곳에서 쉽게 확인할 수 있도록 만들었습니다.
    </p>
  </div>
</section>
      </section>
      {/* ISLAND MENU */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex justify-center gap-4 flex-wrap">

          {["백령도", "대청도", "소청도"].map((island) => (
            <button
              key={island}
              onClick={() => setSelectedIsland(island)}
              className={`px-6 py-3 rounded-full font-semibold transition ${selectedIsland === island
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
            >
              {island}
            </button>
          ))}

        </div>
      </section>
      {/* QUICK MENU */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-8 text-center">
          어디를 찾고 계신가요?
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category) => (

            <button
              key={category.name}
              onClick={() => {

                setSelectedCategory(category.name);

                // 전체
                if (category.name === "전체") {

                  setShowStay(true);
                  setShowFood(true);
                  setShowTaxi(true);
                  setShowLocal(true);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });

                }

                // 관광지
                else if (
                  category.name === "관광지" ||
                  category.name === "안보역사" ||
                  category.name === "군인면회" ||
                  category.name === "가족여행"
                ) {

                  setSelectedIsland("백령도");

                  setShowStay(false);
                  setShowFood(false);
                  setShowTaxi(false);
                  setShowLocal(false);

                  setTimeout(() => {
                    document
                      .getElementById("place-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }, 100);

                }

                // 숙박
                else if (category.name === "숙박") {

                  setShowStay(true);
                  setShowFood(false);
                  setShowTaxi(false);
                  setShowLocal(false);

                  setTimeout(() => {
                    document
                      .getElementById("stay")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }, 100);

                }

                // 맛집
                else if (category.name === "맛집") {

                  setShowStay(false);
                  setShowFood(true);
                  setShowTaxi(false);
                  setShowLocal(false);

                  setTimeout(() => {
                    document
                      .getElementById("food")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }, 100);

                }

                // 개인택시
                else if (category.name === "개인택시") {

                  setShowStay(false);
                  setShowFood(false);
                  setShowTaxi(true);
                  setShowLocal(false);

                  setTimeout(() => {
                    document
                      .getElementById("taxi")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }, 100);

                }

                // 특산물
                else if (category.name === "특산물") {

                  setShowStay(false);
                  setShowFood(false);
                  setShowTaxi(false);
                  setShowLocal(true);

                  setTimeout(() => {
                    document
                      .getElementById("local")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }, 100);

                }

              }}
              className={`px-5 py-3 rounded-full border transition font-medium flex items-center gap-2 ${selectedCategory === category.name
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
                }`}
            >

              <span>{category.icon}</span>
              <span>{category.name}</span>

            </button>

          ))}

        </div>

      </section>
      {/* 인기 관광지 TOP10 */}
{popularPlaces.length > 0 && (
  <section className="max-w-7xl mx-auto px-6 py-16">
    <h2 className="text-4xl font-bold text-center mb-10">
      🏆 실시간 인기 관광지 TOP 10
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
      {popularPlaces.map((place, index) => (
        <div
          key={place.name}
          className="bg-white rounded-3xl shadow-lg p-5 text-center border hover:shadow-xl transition"
        >
          <div className="text-3xl font-extrabold mb-3">
            {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}위`}
          </div>

          <h3 className="font-bold text-lg mb-2">
            {place.name}
          </h3>

          <p className="text-sm text-gray-500">
            👀 {place.view} · ❤️ {place.like}
          </p>
        </div>
      ))}
    </div>
  </section>
)}
      {/* PLACE CARDS */}
      <div className="text-center mb-14">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🔥 가장 많이 찾는 백령도 명소
        </h2>

        <p className="text-gray-500 text-lg">
          백령도를 처음 방문한다면 꼭 가봐야 할 대표 관광지
        </p>

      </div>
      {(
        selectedCategory === "전체" ||
        selectedCategory === "관광지" ||
        selectedCategory === "안보역사" ||
        selectedCategory === "군인면회" ||
        selectedCategory === "가족여행"
      ) && (

          <section
            id="place-section"
            className="max-w-7xl mx-auto px-6 pb-20"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {filteredPlaces.map((place) => (
                <div
                  key={place.name}
                  className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 flex flex-col h-full"
                >

                  <div className="relative h-72">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">

                    <div className="flex flex-wrap items-center gap-2 mb-4">

                      <span className="bg-blue-500 text-white text-[11px] px-3 py-1 rounded-full font-medium">
                        {place.island}
                      </span>

                      <span className="bg-gray-100 text-gray-700 text-[11px] px-3 py-1 rounded-full font-medium">
                        {place.category}
                      </span>

                      {place.name === "끝섬전망대" && (
                        <span className="bg-pink-100 text-pink-600 text-[11px] px-3 py-1 rounded-full font-medium">
                          🌅 노을명소
                        </span>
                      )}

                      {place.name === "두무진" && (
                        <span className="bg-sky-100 text-sky-700 text-[11px] px-3 py-1 rounded-full font-medium">
                          📸 절경명소
                        </span>
                      )}

                      {place.name === "사곶해변" && (
                        <span className="bg-amber-100 text-amber-700 text-[11px] px-3 py-1 rounded-full font-medium">
                          🏖️ 감성해변
                        </span>
                      )}

                      {[
                        "두무진",
                        "용틀임바위",
                        "사곶해변",
                      ].includes(place.name) && (
                          <span className="bg-emerald-100 text-emerald-700 text-[11px] px-3 py-1 rounded-full font-medium">
                            🌍 지질공원
                          </span>
                        )}

                      {place.name === "끝섬전망대" && (
                        <span className="bg-red-100 text-red-700 text-[11px] px-3 py-1 rounded-full font-medium">
                          🇰🇷 최북단
                        </span>
                      )}

                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {place.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      {place.description}
                    </p>
                    <div className="bg-sky-50 rounded-2xl p-4 text-sm text-gray-700 mb-4 leading-6">
  {place.name === "두무진" && "추천 포인트: 백령도 대표 절경으로 유람선 관광과 사진 촬영에 좋아요."}
  {place.name === "끝섬전망대" && "추천 포인트: 북한 장산곶과 물범들을 함께 볼 수 있는 전망 명소예요."}
  {place.name === "사곶해변" && "추천 포인트: 천연비행장으로 유명한 넓은 해변이라 산책과 사진 촬영에 좋아요."}
  {place.name === "콩돌해안" && "추천 포인트: 동글동글한 콩돌과 파도 소리가 매력적인 해안이에요."}
  {place.name === "심청각" && "추천 포인트: 심청전 설화와 백령도 이야기를 함께 볼 수 있는 문화 명소예요."}
  {place.name === "하늬해안" && "추천 포인트: 점박이물범 관찰과 북쪽 바다 풍경을 함께 즐길 수 있어요."}
  {place.name === "용틀임바위" && "추천 포인트: 백령도의 지질 특징을 가까이에서 볼 수 있는 독특한 바위 명소예요."}
  {place.name === "사자바위" && "추천 포인트: 해안 드라이브 중 들르기 좋은 포토 스팟이에요."}
  {place.name === "천안함 위령탑" && "추천 포인트: 백령도 안보 역사 여행에서 의미 있게 들를 수 있는 장소예요."}
</div>
                    {place.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span>📍</span>
                        <span>{place.location}</span>
                      </div>
                    )}

{place.tip && (
  <div className="flex items-center gap-2 text-sm text-orange-500 font-semibold mb-5">
    <span>{place.tip}</span>
  </div>
)}

<div className="mt-auto pt-5 space-y-3">
  <div className="flex justify-between text-sm text-gray-500">
    <span>
      👀 {placeViews.find((item) => item.place_name === place.name)?.view_count || 0}
    </span>

    <span>
      ❤️ {placeLikes.find((item) => item.place_name === place.name)?.like_count || 0}
    </span>
  </div>

  <button
  onClick={() => handlePlaceLike(place.name)}
  className="w-full bg-rose-500 text-white py-3 rounded-2xl font-semibold hover:bg-rose-600 transition"
>
  ❤️ 좋아요
</button>

<a
  href={place.link}
  onClick={() => handlePlaceView(place.name)}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center w-full bg-black text-white py-3 rounded-2xl font-semibold hover:bg-blue-600 transition"
>
  📍 위치 확인하기
</a>
</div>

                  </div>
                </div>
              ))}

            </div>
          </section>

        )}
        
 {/* PHOTO GALLERY */}
 <section
  id="gallery"
  className="max-w-7xl mx-auto px-6 pb-20"
>

  <div className="text-center mb-10">
      <button
      onClick={() => setShowGallery(!showGallery)}
      className="bg-black text-white px-10 py-5 rounded-full text-2xl font-bold shadow-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
    >
      📸 {showGallery ? "사진첩 닫기 ▲" : "백령도 사진첩 보기 ▼"}
    </button>

  </div>

  {showGallery && (

    <>
      <div className="text-center mb-10">

        <h2 className="text-4xl font-bold mb-4">
          📸 백령도 사진첩
        </h2>

        <p className="text-gray-600">
          (사진작가 윤학진님) & 백령도의 모습
        </p>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {Array.from({ length: 60 }, (_, i) =>
  `/images/gallery${i + 1}.jpg`
).map((image, index) => (

  <a
    key={index}
    href={image}
    target="_blank"
    rel="noopener noreferrer"
    className="group overflow-hidden rounded-3xl shadow-lg"
  >

    <Image
      src={image}
      alt={`백령도 사진 ${index + 1}`}
      width={800}
      height={600}
      className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
    />

  </a>

))}
      </div>

    </>

  )}

</section>
      {/* STAY LIST SECTION */}
      <section
        id="stay"
        className="max-w-7xl mx-auto px-6 pb-20"
      >

        {(selectedCategory === "전체" ||
          selectedCategory === "숙박") && (

            <>
              <div className="text-center mb-10">

                <button
                  onClick={() => setShowStay(!showStay)}
                 className="bg-black text-white px-10 py-5 rounded-full text-2xl font-bold shadow-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
                 >
                  🏨 {showStay ? "숙박업소 닫기 ▲" : "숙박업소 보기 ▼"}
                </button>

              </div>

              {showStay && (

                <>

                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="🏨 숙박업소 검색..."
                      value={staySearch}
                      onChange={(e) => setStaySearch(e.target.value)}
                       className="bg-black text-white px-10 py-5 rounded-full text-2xl font-bold shadow-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
                    />
                  </div>

                  <div className="overflow-x-auto bg-white rounded-3xl shadow-lg">

                    <table className="w-full text-left border-collapse">

                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-4 text-lg">숙박명</th>
                          <th className="p-4 text-lg">소재지</th>
                          <th className="p-4 text-lg">전화번호</th>
                        </tr>
                      </thead>

                      <tbody>

                        {[
                          ["루시아펜션", "백령로307", "032-836-0410"],
                          ["파라다이스모텔", "백령로461-14", "032-836-8118"],
                          ["문화모텔", "백령로265", "032-836-7001"],
                          ["백령통나무펜션", "백령로461-30", "010-9440-0545"],
                          ["백령도월가(황토모텔)", "백령로271번길39", "032-836-8060"],
                          ["백령로그펜션", "백령로461-37", "010-3374-9306"],
                          ["백령리조텔", "백령로280번길55", "032-836-3233"],
                          ["백령모텔", "백령로271번길24-3", "032-836-0633"],
                          ["백령오션호텔&펜션", "백령로52", "010-6356-8118"],
                          ["백령캠핑", "백령로363-17", "032-836-2080"],
                          ["백령파란섬모텔", "백령로322", "032-836-3353"],
                          ["아일랜드캐슬", "백령로215", "032-836-6700"],
                          ["옹진모텔", "백령로278번길2-11", "032-836-8001"],
                          ["퍼시픽 백령호텔(구.J&B호텔)", "백령로485", "032-836-2229"],
                          ["통나무펜션A", "백령로461-29", "010-2123-0545"],
                          ["트윈스모텔", "백령로264", "032-836-1100"],
                          ["팰리스모텔", "백령로228", "010-6757-1660"],
                          ["푸른바다펜션", "사곶로69", "010-2759-0581"],
                          ["프로포즈모텔", "백령로297번길16", "032-836-5551"],
                          ["항구모텔", "백령로24-1", "032-836-2945"],
                          ["해송모텔", "백령로849", "032-836-0465"],
                          ["해양숙박", "백령로32", "010-8936-0445"],
                          ["감사한민박", "백령로316번길25-9", "010-9771-1796"],
                          ["경일민박", "백령로278번안길25-9", "010-4500-9432"],
                          ["고향펜션", "두무진로171-10", "010-5078-4557"],
                          ["노블펜션민박", "백령로368", "032-836-2000"],
                          ["다인민박", "백령남로723번길20", "010-6233-2996"],
                          ["로즈마리민박", "백령로803", "032-836-6612"],
                          ["무지개빛펜션민박", "두무진로171-18", "010-8203-8245"],
                          ["문화스테이", "백령로643", "010-6337-7001"],
                          ["민들레민박", "백령로830", "032-836-2219"],
                          ["백령게스트하우스", "백령로178", "010-6332-0363"],
                          ["백령연꽃민박", "관창길399", "032-836-1510"],
                          ["백령콘도비치민박", "사곶로180-23", "010-9596-6706"],
                          ["백령하늬해변펜션", "백령로254번길212", "010-8996-3232"],
                          ["백학민박(솔잎이네)", "두무진로498", "010-3359-1132"],
                          ["사계절민박", "백령로363-5", "010-3784-0836"],
                          ["산과바다민박", "두무진로498", "010-2668-2668"],
                          ["섬민박", "백령로28번길33", "010-3276-0236"],
                          ["솔개펜션민박", "백령로271번길56", "010-3664-8056"],
                          ["수려한민박", "백령로254번길200", "010-8922-3994"],
                          ["스타펜션민박", "백령로370", "032-836-8003"],
                          ["아름다운세상민박", "가을리833-2", "010-9596-3232"],
                          ["영암민박", "백령로380번길210", "010-6329-1779"],
                          ["아름드리민박", "백령로278번길38-13", "010-9596-3232"],
                          ["우리섬펜션민박", "당후길35-16", "010-3499-1745"],
                          ["우리집펜션", "두무진로171-22", "010-2511-0719"],
                          ["이야기민박", "장촌길2", "010-2838-4656"],
                          ["제일민박", "백령로348번길134", "010-4573-7784"],
                          ["포시즌펜션", "백령로461-20", "010-2007-1841"],
                          ["하늬바다민박", "백령로254번길153", "010-6320-0981"],
                          ["하늬황토민박", "백령로316번길109-14", "010-6742-9952"],
                          ["한채하우스민박", "백령로1111", "010-4751-0671"],
                          ["해뜨는민박", "사곶로101", "010-4336-8063"],
                          ["해사랑펜션", "두무진로171-24", "010-3939-4959"],
                          ["현이네민박", "사곶로122번길54-12", "032-836-6091"],
                          ["호수민박", "화동로138", "010-9183-2700"],
                          ["황토민박", "장촌길217", "010-7336-1900"],
                          ["흰날개펜션민박", "백령로254번길41", "010-7239-2126"],
                          ["힐링민박", "백령로473", "010-3459-1161"],
                        ]
                          .filter((stay) =>
                            stay[0].includes(staySearch)
                          )
                          .sort((a, b) => a[0].localeCompare(b[0], "ko"))
                          .map((stay, index) => (
                            <tr
                              key={index}
                              className="border-t hover:bg-gray-50"
                            >
                              <td className="p-4 font-semibold">
                                {stay[0]}
                              </td>

                              <td className="p-4">
                                {stay[1]}
                              </td>

                              <td className="p-4">
                                <a
                                  href={`tel:${stay[2]}`}
                                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                                >
                                  {stay[2]}
                                </a>
                              </td>

                            </tr>
                          ))}

                      </tbody>

                    </table>

                  </div>

                </>

              )}

            </>

          )}

      </section>

      {/* FOOD SECTION */}
      <section
        id="food"
        className="max-w-7xl mx-auto px-6 pb-10"
      >

        {(selectedCategory === "전체" ||
          selectedCategory === "맛집") && (

            <>
              <div className="text-center mb-6">
                <button
                  onClick={() => setShowFood(!showFood)}
                   className="bg-black text-white px-10 py-5 rounded-full text-2xl font-bold shadow-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
                >
                  <>
                    🍜 {showFood ? "음식점 닫기 ▲" : "음식점 보기 ▼"}
                  </>
                </button>
              </div>

              {showFood && (
                <div className="bg-white rounded-3xl shadow-lg p-10 text-center text-gray-600">
                  <div className="overflow-x-auto bg-white rounded-3xl shadow-lg">
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="음식점 검색..."
                        value={foodSearch}
                        onChange={(e) => setFoodSearch(e.target.value)}
                        className="w-full border rounded-2xl px-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                    </div>

                    <table className="w-full text-left border-collapse">

                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-4 text-lg">음식점명</th>
                          <th className="p-4 text-lg">대표메뉴</th>
                          <th className="p-4 text-lg">전화번호</th>
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          ["bhc 치킨", "치킨", "032-836-0777"],
                          ["가을면옥", "냉면 · 한식", "010-2783-3384"],
                          ["강산횟집", "횟집 · 해산물", "032-836-3322"],
                          ["강원횟집", "횟집 · 해산물", "032-836-0779"],
                          ["계림가든", "한식", "032-836-0303"],
                          ["고기먹는날 블랙", "고기집", "032-836-5599"],
                          ["고모네", "한식", "032-836-8277"],
                          ["고향식당", "한식", "032-836-4557"],
                          ["구주고기천국", "고기집", "032-836-0146"],
                          ["국수나라 백반세상", "백반 · 국수", "032-836-2945"],
                          ["꼬꼬발", "닭발", "010-2854-1828"],
                          ["네네치킨", "치킨", "032-836-2200"],
                          ["노랑통닭", "치킨", "010-4085-0802"],
                          ["늘봄해장국", "해장국", "032-836-1355"],
                          ["대박맛집", "한식", "032-836-2266"],
                          ["대성가든", "한식", "032-836-9233"],
                          ["대성수산횟집", "횟집 · 해산물", "032-836-1539"],
                          ["대성횟집", "횟집 · 해산물", "032-836-0363"],
                          ["덮담", "덮밥", "032-836-0333"],
                          ["돈가순대", "순대국 · 돈까스", "010-9629-0704"],
                          ["돈키호테", "돈까스", "032-836-8292"],
                          ["두메칼국수", "칼국수", "032-836-0245"],
                          ["두무나루카페", "카페", "032-836-0765"],
                          ["두무진횟집", "횟집 · 해산물", "032-836-1505"],
                          ["두선네한상", "백반", "032-836-8118"],
                          ["두찜", "찜닭", "032-836-3389"],
                          ["둘리호프", "호프", "032-836-3993"],
                          ["또!오기식당", "한식", "010-9934-2482"],
                          ["또래오래치킨피자", "치킨 · 피자", "032-836-9995"],
                          ["또봉이통닭", "치킨", "010-9629-0704"],
                          ["뚱이네맛집", "한식 · 해산물", "032-836-9393"],
                          ["마라&곤조", "마라탕", "032-836-0161"],
                          ["마왕족발", "족발", "032-836-1005"],
                          ["맛있는집밥", "백반", "032-836-0440"],
                          ["미화정", "한식", "032-836-3999"],
                          ["바다횟집", "횟집 · 해산물", "032-836-2430"],
                          ["배꼽시계", "분식", "032-836-0100"],
                          ["배장집", "한식", "010-9177-1516"],
                          ["백령당(베이커리)", "베이커리", "032-836-6969"],
                          ["백령도서서갈비", "갈비", "032-207-1234"],
                          ["백령동해수산", "횟집 · 해산물", "010-3726-6437"],
                          ["백령면옥", "냉면 · 한식", "032-836-5557"],
                          ["백령분식", "분식", "032-836-1395"],
                          ["백령행운순대", "순대국", "032-836-1834"],
                          ["백령횟집", "횟집 · 해산물", "032-836-2966"],
                          ["백숙정", "백숙", "032-836-8011"],
                          ["버거운버거", "햄버거", "010-7742-0548"],
                          ["복이네", "한식", "032-836-8481"],
                          ["본가감자탕", "감자탕", "010-5619-2219"],
                          ["본스치킨", "치킨", "0140-8788-0548"],
                          ["북포국수", "국수", "010-4018-5421"],
                          ["브라더한정식도시락", "도시락 · 한정식", "010-5893-0550"],
                          ["비비큐", "치킨", "010-5619-2219"],
                          ["빨간석쇠구이", "고기집", "032-836-1796"],
                          ["빽박이네", "한식", "010-7370-9910"],
                          ["뽀끄닭", "치킨", "010-2636-2441"],
                          ["사곶냉면", "냉면", "032-836-0559"],
                          ["사곶일번지칼국수", "칼국수", "032-836-3286"],
                          ["사랑채", "한식", "032-836-8859"],
                          ["사자바위캠프", "캠프 · 바베큐", "010-5088-3689"],
                          ["삼거리치킨&고기집", "치킨 · 고기", "032-836-5017"],
                          ["삼삼구이", "고기집", "032-836-3392"],
                          ["섬마을식당", "한식", "032-836-6601"],
                          ["스카이호프", "호프", "032-836-6091"],
                          ["시골칼국수&냉면", "칼국수 · 냉면", "032-836-1270"],
                          ["신경기횟집", "횟집 · 해산물", "032-836-1156"],
                          ["신화평양냉면", "평양냉면", "032-836-0372"],
                          ["썸&배터지는생동까스", "돈까스", "010-4460-4492"],
                          ["아구와콩나물", "아구찜", "032-836-8700"],
                          ["아랑이네횟집", "횟집 · 해산물", "032-836-7888"],
                          ["아일랜드식당", "한식", "032-836-6700"],
                          ["알통떡강정&떡볶이", "분식", "032-836-1002"],
                          ["옹진가든", "한식", "032-836-8001"],
                          ["우수미나사진관&카페&바", "카페 · 바", "0507-2093-7809"],
                          ["월가", "한식", "032-836-8060"],
                          ["이화원", "중식", "032-836-8150"],
                          ["인천횟집", "횟집 · 해산물", "032-836-3300"],
                          ["일품양평해장국", "해장국", "032-836-9252"],
                          ["자담치킨", "치킨", "032-836-9009"],
                          ["자연마을", "한식", "010-6360-0136"],
                          ["작은행복", "한식", "032-836-7007"],
                          ["잔디식당", "한식", "032-836-6091"],
                          ["장미식당", "한식", "032-836-0339"],
                          ["장산곶횟집", "횟집 · 해산물", "032-836-1132"],
                          ["장촌식당", "한식", "032-836-0961"],
                          ["장촌칼국수", "칼국수", "032-836-7009"],
                          ["전복죽있는 철판집", "철판요리", "032-836-2402"],
                          ["중앙가든", "한식", "032-836-7575"],
                          ["중화루", "중식", "032-836-5300"],
                          ["진촌돼지", "돼지고기", "032-836-6234"],
                          ["진촌역", "술집", "010-2713-0027"],
                          ["참맛있는국밥", "국밥", "010-6757-1660"],
                          ["처갓집양념치킨", "치킨", "010-3905-9955"],
                          ["청년피자", "피자", "032-836-8880"],
                          ["청목숯불갈비", "갈비", "032-836-5454"],
                          ["청정횟집", "횟집 · 해산물", "032-836-8200"],
                          ["청춘꼬마김밥", "분식", "032-836-1537"],
                          ["청춘싸가지", "술집", "010-2911-6092"],
                          ["청풍감자탕", "감자탕", "032-836-5455"],
                          ["충북횟집", "횟집 · 해산물", "032-836-1124"],
                          ["치킨매니아", "치킨", "010-7154-6375"],
                          ["카페블루", "카페", "010-2480-0580"],
                          ["카페오아", "카페", "010-5577-7414"],
                          ["콩깍지", "두부요리", "032-836-6200"],
                          ["키스", "호프", "032-836-7740"],
                          ["통달배족발보쌈삼겹", "족발 · 보쌈", "032-836-0420"],
                          ["펀비어킹", "호프", "032-836-2481"],
                          ["푸른바다찜&탕", "해물찜 · 탕", "032-836-0788"],
                          ["할매감자탕", "감자탕", "032-836-8898"],
                          ["해녀와사위횟집", "횟집 · 해산물", "032-836-5529"],
                          ["해당화횟집", "횟집 · 해산물", "032-836-3300"],
                          ["해물나라", "해산물", "032-836-2599"],
                          ["해송가든", "한식", "032-836-0465"],
                          ["형준네 만두", "만두", "032-836-0427"],
                          ["호남횟집", "횟집 · 해산물", "010-9290-2212"],
                        ]
                          .sort((a, b) => a[0].localeCompare(b[0], "ko"))
                          .map((food, index) => (

                            <tr
                              key={index}
                              className="border-t hover:bg-gray-50"
                            >

                              <td className="p-4 font-semibold">
                                <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">

                                  <span>
                                    {food[0]}
                                  </span>

                                  {food[0] === "뚱이네맛집" && (
                                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                      ⭐ 현지인 추천
                                    </span>
                                  )}
                                  {food[0] === "백령면옥" && (
                                    <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                                      ❄️ 냉면 맛집
                                    </span>
                                  )}
                                  {food[0] === "자연마을" && (
                                    <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                                      🥐 베이커리 맛집
                                    </span>
                                  )}
                                  {food[0] === "전복죽있는 철판집" && (
                                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                                      🪖 군인 추천 맛집
                                    </span>
                                  )}
                                  {food[0] === "진촌돼지" && (
                                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                                      🪖 군인 추천 맛집
                                    </span>
                                  )}
                                  {food[0] === "두선네한상" && (
                                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                      ⭐ 현지인 맛집
                                    </span>
                                  )}
                                  {food[0] === "해녀와사위횟집" && (
                                    <>
                                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                        🌊 해산물 맛집
                                      </span>
                                    </>
                                  )}
                                </div>
                              </td>

                              <td className="p-4">
                                {food[1]}
                              </td>

                              <td className="p-4">

                                {food[2] !== "정보없음" ? (

                                  <div className="flex flex-col gap-2">

                                    <a
                                      href={`tel:${food[2]}`}
                                      className="text-blue-600 hover:underline"
                                    >
                                      📞 {food[2]}
                                    </a>

                                    <a
                                      href={`https://map.naver.com/v5/search/${food[0]}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-green-600 hover:underline"
                                    >
                                      📍 지도보기
                                    </a>

                                  </div>

                                ) : (

                                  <span className="text-gray-400">
                                    정보없음
                                  </span>

                                )}

                              </td>
                            </tr>

                          ))}

                      </tbody>

                    </table>

                  </div>
                </div>
              )}
            </>

          )}

      </section>
      {/* TAXI SECTION */}
      <section
        id="taxi"
        className="max-w-7xl mx-auto px-6 pb-10"
      >

        {(selectedCategory === "전체" ||
          selectedCategory === "개인택시") && (

            <>
              <div className="text-center mb-6">
                <button
                  onClick={() => setShowTaxi(!showTaxi)}
                  className="bg-black text-white px-10 py-5 rounded-full text-2xl font-bold shadow-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
                >
                  <>
                    🚕 {showTaxi ? "개인택시 닫기 ▲" : "개인택시 보기 ▼"}
                  </>
                </button>
              </div>

              {showTaxi && (

                <div className="overflow-x-auto bg-white rounded-3xl shadow-lg">

                  <table className="w-full text-left border-collapse">

                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-4 text-lg">업체명</th>
                        <th className="p-4 text-lg">전화번호</th>
                      </tr>
                    </thead>

                    <tbody>

                      {[
                        ["길택시", "032-836-7080"],
                        ["김인택시", "032-836-4888"],
                        ["선원택시", "032-836-3883"],
                        ["영암택시", "032-836-0016"],
                        ["일갑택시", "032-836-0155"],
                        ["충열택시", "032-836-1302"],
                        ["황금택시", "032-836-0065"],
                      ]
                        .sort((a, b) => a[0].localeCompare(b[0], "ko"))
                        .map((taxi, index) => (

                          <tr
                            key={index}
                            className="border-t hover:bg-gray-50"
                          >
                            <td className="p-4 font-semibold">
                              {taxi[0]}
                            </td>

                            <td className="p-4">
                              <a
                                href={`tel:${taxi[1]}`}
                                className="text-blue-600 hover:underline"
                              >
                                {taxi[1]}
                              </a>
                            </td>

                          </tr>

                        ))}

                    </tbody>

                  </table>

                </div>

              )}
            </>

          )}
      </section>

      {/* RENTCAR SECTION */}
      <section
        id="rentcar"
        className="max-w-7xl mx-auto px-6 pb-10"
      >

        <div className="text-center mb-6">

          <button
            onClick={() => setShowRentcar(!showRentcar)}
             className="bg-black text-white px-10 py-5 rounded-full text-2xl font-bold shadow-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
          >
            🚗 {showRentcar ? "렌트카 닫기 ▲" : "렌트카 보기 ▼"}
          </button>

        </div>

        {showRentcar && (

          <div className="overflow-x-auto bg-white rounded-3xl shadow-lg">

            <table className="w-full text-left border-collapse">

              <thead className="bg-gray-100">

                <tr>
                  <th className="p-4 text-lg">
                    업체명
                  </th>

                  <th className="p-4 text-lg">
                    전화번호
                  </th>
                </tr>

              </thead>

              <tbody>

                {[
                  ["경인렌터카", "032-836-8400"],
                  ["나나렌터카", "032-836-6699"],
                  ["새인천렌터카", "032-836-8118"],
                  ["차놀자렌터카", "010-3374-9306"],
                  ["신한렌터카", "032-836-1510"],
                  ["초이스렌터카", "032-836-0057"],
                  ["한솔렌터카", "032-836-0102"],
                  ["해피렌터카", "032-836-7400"],
                ]
                  .sort((a, b) => a[0].localeCompare(b[0], "ko"))
                  .map((car, index) => (

                    <tr
                      key={index}
                      className="border-t hover:bg-gray-50"
                    >

                      <td className="p-4 font-semibold">
                        {car[0]}
                      </td>

                      <td className="p-4">

                        <a
                          href={`tel:${car[1]}`}
                          className="text-blue-600 hover:underline"
                        >
                          📞 {car[1]}
                        </a>

                      </td>

                    </tr>

                  ))}

              </tbody>

            </table>

          </div>

        )}

      </section>
      {/* LOCAL PRODUCT SECTION */}
      <section
        id="local"
        className="max-w-7xl mx-auto px-6 pb-20"
      >

        {(selectedCategory === "전체" ||
          selectedCategory === "특산물") && (

            <>
              <div className="text-center mb-6">
                <button
                  onClick={() => setShowLocal(!showLocal)}
                 className="bg-black text-white px-10 py-5 rounded-full text-2xl font-bold shadow-xl hover:bg-gray-800 hover:scale-105 transition duration-300"
                >
                  🎁 {showLocal ? "특산물 닫기 ▲" : "특산물 보기 ▼"}
                </button>
              </div>

              {showLocal && (

                <div className="grid md:grid-cols-3 gap-8">

                  <div className="bg-white rounded-3xl shadow-lg p-8">

                    <Image
                      src="/images/sweetpotato.jpg"
                      alt="백색고구마"
                      width={500}
                      height={300}
                      className="rounded-2xl mb-4 object-cover h-48 w-full"
                    />

                    <h3 className="text-2xl font-bold mb-4">
                      🍠 백령도 백색고구마
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      백령도의 대표 특산물로 담백하고 달콤한 맛이 특징입니다.
                    </p>

                  </div>

                  <div className="bg-white rounded-3xl shadow-lg p-8">

                    <Image
                      src="/images/seafood.jpg"
                      alt="백령도 해산물"
                      width={500}
                      height={300}
                      className="rounded-2xl mb-4 object-cover h-48 w-full"
                    />

                    <h3 className="text-2xl font-bold mb-4">
                      🦑 백령도 해산물
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      까나리, 우럭, 놀래미,홍합 등 신선한 해산물을 맛볼 수 있습니다.
                    </p>

                  </div>

                  <div className="bg-white rounded-3xl shadow-lg p-8">

                    <Image
                      src="/images/LOCAL.jpg"
                      alt="백령도 특산품"
                      width={500}
                      height={300}
                      className="rounded-2xl mb-4 object-cover h-48 w-full"
                    />

                    <h3 className="text-2xl font-bold mb-4">
                      🌹 특산품
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      백령도의 특색있는 특산품을 만나볼 수 있습니다.
                    </p>

                  </div>

                </div>

              )}

            </>

          )}
      </section>

      {/* LOCAL PRODUCT SECTION */}
      {/* FISHING SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">


        <h2 className="text-4xl font-bold text-center mb-12">
          🎣 백령도 낚시 포인트
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-3">
              🎣 두무진
            </h3>

            <p className="text-gray-600">
              우럭 · 광어 포인트로 유명한 백령도 대표 낚시 명소
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-3">
              🌊 용기포신신항
            </h3>

            <p className="text-gray-600">
              밤낚시와 방파제 낚시로 인기 있는 장소
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-3">
              🎣 중화동포구
            </h3>

            <p className="text-gray-600">
              방파제 낚시와 생활낚시로 인기 있는 백령도 포인트
            </p>
          </div>

        </div>

      </section>
      {/* SUNSET SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          🌅 백령도 일몰 · 일출 명소
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              🌅 일몰 추천
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>🌊 사곶해변</li>
              <li>🪨 두무진</li>
              <li>🚢 용기포항</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              🌄 일출 추천
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>🏖️ 하늬해변</li>
              <li>🎣 중화동포구</li>
            </ul>
          </div>

        </div>

      </section>

      {/* TRAVEL SEASON SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          🗓️ 백령도 추천 여행 시기
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              🌸 봄
            </h3>

            <p className="text-gray-600 leading-relaxed">
              선선한 바람과 함께 여유로운 백령도를 즐기기 좋은 계절
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              ☀️ 여름
            </h3>

            <p className="text-gray-600 leading-relaxed">
              사곶해변, 해수욕과 낚시를 즐기기 좋은 시즌
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              🍁 가을
            </h3>

            <p className="text-gray-600 leading-relaxed">
              노을과 드라이브 코스를 즐기기 좋은 감성 여행 시즌
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ❄️ 겨울
            </h3>

            <p className="text-gray-600 leading-relaxed">
              조용하고 한적한 백령도의 겨울 감성을 느낄 수 있는 계절
            </p>
          </div>

        </div>

      </section>

      <section className="bg-gray-100 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            백령도 처음이라면?
          </h2>

          <div className="flex flex-col items-center">

            {/* LEFT */}
            <div>

              <h2 className="text-4xl font-bold text-center mb-12">
                ❓ 백령도 자주 묻는 질문
              </h2>

              <div className="space-y-6 max-w-3xl mx-auto">

<div className="bg-white rounded-3xl shadow-lg p-8 text-center">
  <h3 className="text-2xl font-bold mb-3">
    🚗 차량선적 꼭 해야 하나요?
  </h3>

  <p className="text-gray-600 leading-relaxed">
    여행 계획이라면 차량선적(미래해운032-881-6666) 또는 현지 렌트카 이용을 추천합니다.
    팁! 차량은 월,수,금 인천 미래해운에서 싣고, 화,목,토에 백령도에서 찾아야 하므로 렌트카 이용이 편리합니다.
  </p>
</div>

<div className="bg-white rounded-3xl shadow-lg p-8 text-center">
  <h3 className="text-2xl font-bold mb-3">
    🪖 군인 면회는 자유롭게 가능한가요?
  </h3>

  <p className="text-gray-600 leading-relaxed">
    부대 일정과 외출 · 외박 여부에 따라 달라질 수 있으므로 사전 확인을 추천합니다.
    특수한 경우가 많은 섬지역은 부대일정 조율이 꼭 필요함을 알려드립니다!!
  </p>
</div>

<div className="bg-white rounded-3xl shadow-lg p-8 text-center">
  <h3 className="text-2xl font-bold mb-3">
    🏪 편의점이나 마트가 있나요?
  </h3>

  <p className="text-gray-600 leading-relaxed">
    플랫폼 하단을 눌러 편의점 및 마트정보를 확인하세요~
  </p>
</div>

<div className="bg-white rounded-3xl shadow-lg p-8 text-center">
  <h3 className="text-2xl font-bold mb-3">
    ❄️ 겨울에도 여행 가능한가요?
  </h3>

  <p className="text-gray-600 leading-relaxed">
    가능합니다. 다만 기상 상황에 따라 여객선 결항 가능성이 있으니 운항정보 확인이 중요합니다.
  </p>
</div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="space-y-6">

       {/* 한눈에보기 */}
<div className="bg-white rounded-3xl p-4 shadow">

<h3 className="text-2xl font-bold mb-3 text-center">
  📊 백령도 한눈에 보기
</h3>
<p className="text-center text-gray-600 mb-4">
  백령도 주요 관광지와 위치를 한눈에 확인해보세요.
</p>
</div>
            <div className="grid grid-cols-2 gap-2">

              <div className="bg-gray-100 rounded-2xl p-2 text-center">
                <p className="text-2xl font-bold">4시간</p>
                <p className="text-gray-600 text-xs mt-1">
                  인천 ↔ 백령도
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-2 text-center">
                <p className="text-2xl font-bold">3개</p>
                <p className="text-gray-600 text-xs mt-1">
                  주요 관광섬
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-2 text-center">
                <p className="text-2xl font-bold">20+</p>
                <p className="text-gray-600 text-xs mt-1">
                  관광명소
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-2 text-center">
                <p className="text-2xl font-bold">🦭</p>
                <p className="text-gray-600 text-xs mt-1">
                  점박이물범
                </p>
              </div>

            </div>

          </div>

          {/* 멀미 + 차량선적 */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h3 className="text-2xl font-bold mb-5">
                💊 멀미 줄이는 방법
              </h3>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>✔ 출항 30분 전 멀미약</li>
                <li>✔ 중앙 좌석 추천</li>
                <li>✔ 빈속 탑승 피하기</li>
                <li>✔ 출항 직후 잠들기</li>
              </ul>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h3 className="text-2xl font-bold mb-5">
                🚗 차량선적 팁
              </h3>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>✔ 성수기 사전예약</li>
                <li>✔ 출항 1시간 전 도착</li>
                <li>✔ 신분증 필수</li>
                <li>✔ 결항 여부 확인</li>
              </ul>

            </div>

          </div>

          {/* 2열 카드 */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* 숨은 관광명소 */}
            <div className="bg-white rounded-3xl p-8 shadow">

              <h3 className="text-2xl font-bold mb-6">
                🗺️ 숨은 관광명소
              </h3>

              <div className="space-y-5">

                <div className="border-b pb-4">
                <a
  href="/images/junghwadong.jpg"
  target="_blank"
>
  <h4 className="font-bold text-lg mb-1 hover:text-blue-500">
    ⛪ 중화동교회
  </h4>
</a>

                  <p className="text-gray-600 text-sm">
                    백령도의 오래된 역사 교회
                  </p>
                </div>

                <div className="border-b pb-4">
                <a
  href="/images/simcheong.jpg"
  target="_blank"
>
  <h4 className="font-bold text-lg mb-1 hover:text-blue-500">
    🎭 백령심청효 테마파크(연꽃마을)
  </h4>
</a>

                  <p className="text-gray-600 text-sm">
                    심청전 설화를 테마로 한 관광공간
                  </p>
                </div>

                <div className="border-b pb-4">
                <a
  href="/images/nosong.jpg"
  target="_blank"
>
  <h4 className="font-bold text-lg mb-1 hover:text-blue-500">
    🌲 400년 노송
  </h4>
</a>

                  <p className="text-gray-600 text-sm">
                    백령도를 지켜온 상징적인 노송
                  </p>
                </div>

                <div className="border-b pb-4">
                <a
  href="/images/seupgok.jpg"
  target="_blank"
>
  <h4 className="font-bold text-lg mb-1 hover:text-blue-500 cursor-pointer">
    🪨 남포리 습곡구조
  </h4>
</a>

                  <p className="text-gray-600 text-sm">
                    독특한 지층 구조를 볼 수 있는 지질명소
                  </p>
                </div>

                <div className="border-b pb-4">
                <a
  href="/images/basalt.jpg"
  target="_blank"
>
  <h4 className="font-bold text-lg mb-1 hover:text-blue-500">
    🌋 감람암 포획 현무암 분포지
  </h4>
</a>

                  <p className="text-gray-600 text-sm">
                    희귀 화산지형 명소
                  </p>
                </div>

                <div>
                <a
  href="/images/seal.jpg"
  target="_blank"
>
  <h4 className="font-bold text-lg mb-1 hover:text-blue-500">
    🦭 물범바위
  </h4>
</a>

                  <p className="text-gray-600 text-sm">
                    점박이물범 생태 명소
                  </p>
                </div>

              </div>

            </div>

            {/* 버스 + 군인면회 + 가족 */}
            <div className="space-y-6">

              {/* 버스 */}
              <div className="bg-white rounded-3xl p-8 shadow">

              <button
  onClick={() => setShowBus(!showBus)}
  className="w-full bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-3xl shadow-lg transition flex justify-between items-center"
>
  <div>
    <h3 className="text-2xl font-bold">
      🚌 백령도 공영버스 시간표
    </h3>

    <p className="text-blue-100 mt-2">
      클릭해서 시간표 보기
    </p>
  </div>

  <span className="text-3xl">
    {showBus ? "▲" : "▼"}
  </span>
</button>

                {showBus && (

                  <div className="mt-6 border-t pt-6 flex gap-4 flex-wrap">

                    <a
                      href="/images/bus1.jpg"
                      target="_blank"
                      className="bg-black text-white px-6 py-4 rounded-2xl font-semibold"
                    >
                      🚌 북포리 방향
                    </a>

                    <a
                      href="/images/bus2.jpg"
                      target="_blank"
                      className="bg-blue-500 text-white px-6 py-4 rounded-2xl font-semibold"
                    >
                      🚌 화동 방향
                    </a>

                  </div>

                )}

              </div>

              {/* 군인면회 */}
              <div className="bg-white rounded-3xl p-8 shadow">

                <h3 className="text-2xl font-bold mb-4">
                  👨‍✈️ 군인 면회 추천코스
                </h3>

                <ul className="space-y-2 text-gray-700">
                  <li>🍜 외출 식사</li>
                  <li>☕ 감성카페</li>
                  <li>🌊 사곶해변</li>
                  <li>📸 두무진 드라이브</li>
                  <li>🚲 두선네 자전거 산책</li>
                </ul>

              </div>

              {/* 가족여행 */}
              <div className="bg-white rounded-3xl p-8 shadow">

                <h3 className="text-2xl font-bold mb-4">
                  👨‍👩‍👧 아이랑 가기 괜찮나요?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  상비약,아이용품은 꼭 챙겨오시기를 추천합니다.
                </p>
              </div>
            </div>
          </div>

        {/* 생활정보 */}
<div className="bg-white rounded-3xl p-8 shadow">

<h3 className="text-2xl font-bold mb-4">
  📞 백령도 생활정보
</h3>

<p className="text-gray-600 leading-relaxed mb-4">
  편의점 · 마트 전화번호 한눈에 보기
</p>

<a
  href="/images/lifeinfo.jpg"
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-2xl font-bold transition"
>
  📋 생활정보 보기
</a>

</div>
        {/* 관공서 및 단체 */}
        <div className="grid md:grid-cols-2 gap-6">

{/* 관공서 및 단체 */}
<div className="bg-white rounded-3xl p-6 shadow">
  <h3 className="text-2xl font-bold mb-4">
    📞 관공서 및 단체
  </h3>

  <a
    href="/images/contact.jpg"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/contact.jpg"
      alt="관공서 및 단체"
      className="h-40 w-full object-cover rounded-2xl"
    />
  </a>
</div>

{/* 여행정보 */}
<div className="bg-white rounded-3xl p-6 shadow">
  <h3 className="text-2xl font-bold mb-4">
    🧭 여행정보
  </h3>

  <a
    href="/images/travelinfo.jpg"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/travelinfo.jpg"
      alt="여행정보"
      className="h-40 w-full object-cover rounded-2xl"
    />
  </a>
</div>

</div>
      </section>

      {/* COURSE SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          🗺️ 백령도 추천 여행코스
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* 당일코스 */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-5">
              🚢 당일 여행코스
            </h3>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>📍 용기포항 도착</li>
              <li>🌊 사곶해변</li>
              <li>📸 두무진 유람선</li>
              <li>🍜 백령도 맛집 탐방</li>
              <li>🌅 끝섬전망대 일몰</li>
            </ul>

          </div>

          {/* 1박2일 */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-5">
              🏕️ 1박2일 추천코스
            </h3>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>📸 두무진</li>
              <li>🏖️ 사곶해변</li>
              <li>🪨 콩돌해안</li>
              <li>🦭 점박이물범 관찰</li>
              <li>🎣 용기포항 야경</li>
              <li>🚗 백령도 렌트카 드라이브</li>
            </ul>

          </div>

          {/* 군인면회 */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-5">
              🪖 군인 면회코스
            </h3>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>🍜 외출 식사</li>
              <li>☕ 감성카페</li>
              <li>🌊 사곶해변</li>
              <li>📸 두무진 드라이브</li>
              <li>🚲 두선네 자전거 산책</li>
            </ul>

          </div>

        </div>

      </section>
{/* 쩨쩨 소개 */}
<section className="max-w-5xl mx-auto px-6 py-16">

  <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl shadow-xl p-10 text-white text-center">

    <h2 className="text-4xl font-bold mb-6">
      👋 쩨쩨를 소개합니다
    </h2>

    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
      안녕하세요. 백령도에 28년째 살고 있는 쩨쩨입니다.
      <br /><br />
      관광지, 맛집, 숙소, 군인면회 정보까지
      직접 살면서 경험한 내용을 바탕으로
      백령도 여행에 도움이 되는 정보를 정리하고 있습니다.
      <br /><br />
      처음 백령도를 방문하시는 분들이
      조금 더 편하고 즐겁게 여행하실 수 있도록
      계속 업데이트해 나가겠습니다 😊
    </p>

  </div>

</section>
      {/* FLOATING QUICK MENU */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

        <button
          onClick={() =>
            document
              .getElementById("qna")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-sky-400 text-white w-14 h-14 rounded-full shadow-2xl text-xl hover:scale-110 transition"
        >
          💬
        </button>

        <button
          onClick={() =>
            document
              .getElementById("food")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-orange-500 text-white w-14 h-14 rounded-full shadow-2xl text-xl hover:scale-110 transition"
        >
          🍜
        </button>

        <button
          onClick={() =>
            document
              .getElementById("stay")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-blue-500 text-white w-14 h-14 rounded-full shadow-2xl text-xl hover:scale-110 transition"
        >
          🏨
        </button>
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="bg-black text-white w-14 h-14 rounded-full shadow-2xl text-xl hover:scale-110 transition"
        >
          ⬆️
        </button>
      </div>

{/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 px-6 py-12 mt-20">
  <div className="max-w-7xl mx-auto text-center space-y-5">
    <h2 className="text-2xl font-bold text-white">
      백령도의 모든 정보
    </h2>

    <p className="text-gray-400">
      28년 거주 주민이 직접 정리하는 백령도 여행 정보 플랫폼
    </p>

    <div className="flex flex-wrap justify-center gap-4 text-sm">
      <a href="/about" className="hover:text-white">
        운영자 소개
      </a>
      <span>|</span>
      <a href="/privacy" className="hover:text-white">
        개인정보처리방침
      </a>
      <span>|</span>
      <a href="/terms" className="hover:text-white">
        이용약관
      </a>
      <span>|</span>
      <a href="/contact" className="hover:text-white">
        문의하기
      </a>
    </div>

    <p className="text-sm text-gray-500">
      © 2026 백령도의 모든 정보. All Rights Reserved.
    </p>
  </div>
</footer>  
</main>
);
}