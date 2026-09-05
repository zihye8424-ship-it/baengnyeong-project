"use client";

import MyCourse from "./components/MyCourse";
import { supabase } from "./lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState, useEffect, useRef } from "react";



const quickMenuItems = [
  { icon: "🚢", label: "배편정보", key: "ship" },
  { icon: "🚕", label: "교통·택시", key: "transport" },
  { icon: "🏠", label: "숙박", key: "stay" },
  { icon: "🍜", label: "맛집", key: "food" },
  { icon: "🪖", label: "군인면회", key: "military" },
  { icon: "🎣", label: "낚시", key: "fishing" },
  { icon: "🎁", label: "특산물", key: "specialty" },
  { icon: "📢", label: "축제·소식", key: "news" },
];

const platformServiceItems = [
  { icon: "🏝️", title: "섬별 관광지", description: "선택한 섬의 명소 보기", key: "places" },
  { icon: "🚢", title: "배편·운항정보", description: "배편과 예약정보 확인", key: "ship" },
  { icon: "🏠", title: "숙소 한눈에", description: "섬별 숙박정보 보기", key: "stay" },
  { icon: "🍜", title: "음식점 한눈에", description: "섬별 맛집정보 보기", key: "food" },
  { icon: "🎣", title: "낚시배 정보", description: "낚시배와 출조정보 확인", key: "fishing" },
  { icon: "📸", title: "여행사진 올리기", description: "나의 섬 여행 공유하기", key: "footprints" },
  { icon: "💬", title: "문의·정보제보", description: "새 정보와 수정사항 알리기", key: "contact" },
];

const islandWeatherLocations = [
  { name: "백령도", latitude: 37.96, longitude: 124.67, image: "/images/hero/hero-06.png" },
  { name: "대청도", latitude: 37.83, longitude: 124.69, image: "/images/daecheong.jpg" },
  { name: "소청도", latitude: 37.76, longitude: 124.75, image: "/images/socheong.jpg" },
];

function weatherCodeInfo(code: number | null) {
  if (code === null) return { label: "불러오는 중", icon: "🌤️" };
  if (code === 0) return { label: "맑음", icon: "☀️" };
  if ([1, 2].includes(code)) return { label: "대체로 맑음", icon: "🌤️" };
  if (code === 3) return { label: "흐림", icon: "☁️" };
  if ([45, 48].includes(code)) return { label: "안개", icon: "🌫️" };
  if ([51, 53, 55, 56, 57].includes(code)) return { label: "이슬비", icon: "🌦️" };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { label: "비", icon: "🌧️" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { label: "눈", icon: "🌨️" };
  if ([95, 96, 99].includes(code)) return { label: "뇌우", icon: "⛈️" };
  return { label: "구름 많음", icon: "⛅" };
}

const islandNews = [
  { date:"2026.09.15", month:"9월", island:"백령도", type:"행사", title:"2026년 백령면민의 날 행사", place:"백령다목적실내체육관 (화동체육관)", image:"/images/news/baengnyeong-residents-day-2026.png" },
  { date:"2026.08.26", month:"8월", island:"백령도", type:"행사", title:"섬 라이프 아카데미", place:"백령종합사회복지관", image:"/images/news/island-life-academy.jpg" },
  { date:"2026.08.29", month:"8월", island:"백령도", type: "축제", title:"백령 그린페스타", place:"심청각 일대", image:"/images/news/baengnyeong-green-festa.jpg" },
  { date:"2026.09.05", month:"9월", island:"백령도", type:"축제", title:"백령도와 함께한 가족 이야기 그리기 대회", place:"백령종합사회복지관 3층 강당", image:"/images/news/family-drawing-contest.jpg" },
  { date:"2026.09.12", month:"9월", island:"백령도", type:"행사", title:"백령종합사회복지관 9월 영화", place:"복지관 3층 강당", image:"/images/news/welfare-september-movie.jpg" },
  { date:"2026.09.12", month:"9월", island:"옹진군", type: "축제", title:"제9회 섬마을밴드 음악축제", place:"대이작도 해양생태관 특별야외무대", image:"/images/news/island-band-festival.png" },
  { date:"2026.09.01 ~ 09.20", month:"9월", island:"옹진군", type:"관내소식", title:"심뇌혈관질환 예방관리 걷기 챌린지", place:"옹진군", image:"/images/news/heart-walk.png" },
  { date:"2026.08.03 ~ 10.31", month:"8~10월", island:"옹진군", type:"관내소식", title:"90일간의 대장정 걷기 챌린지", place:"옹진군", image:"/images/news/90day-walk.png" },
  { date:"2026.06.15 ~ 09.06", month:"6~9월", island:"옹진군", type:"관내소식", title:"2026 평화·통일미래 콘텐츠 공모전", place:"공모전", image:"/images/news/peace-content.png" },
  { date:"2026.09.23 ~ 09.27", month:"9월", island:"백령·대청 등", type:"관내소식", title:"추석 명절 귀성객 여객운임 지원", place:"연평·백령·대청·덕적·자월", image:"/images/news/chuseok-ferry-support.png" },
  { date:"2026.01.01 ~ 12.11", month:"연중", island:"섬 지역", type:"관내소식", title:"섬 지역 생활물류 운임 지원사업", place:"옹진군 섬 지역", image:"/images/news/island-logistics.png" },
  { date:"2026.10.15", month:"10월", island:"백령도", type:"행사", title:"제3회 황혼결혼식", place:"백령노인문화센터 강당", image:"/images/news/hwanghon-wedding.png" },
  { date:"2026.07.01 시행", month:"7월", island:"어선 이용자", type: "관내소식", title:"전 어선 구명조끼 착용 의무화", place:"해양 안전 안내", image:"/images/news/lifejacket-mandatory.jpg" },
];

const heroSlides = [
  { src: "/images/hero/hero-01.png", alt: "백령도의 소나무 사이로 보이는 일몰", position: "center 58%" },
  { src: "/images/hero/hero-02.png", alt: "눈과 얼음으로 뒤덮인 백령도 겨울 해안", position: "center 52%" },
  { src: "/images/hero/hero-03.png", alt: "백령도 해안의 갈매기 풍경", position: "center 48%" },
  { src: "/images/hero/hero-04.png", alt: "백령도 포구와 어선 풍경", position: "center 55%" },
  { src: "/images/hero/hero-05.png", alt: "파도와 둥근 콩돌이 어우러진 백령도 해안", position: "center 58%" },
  { src: "/images/hero/hero-06.png", alt: "백령도의 푸른 바다와 해변 풍경", position: "center 52%" },
  { src: "/images/hero/hero-07.png", alt: "백령도 기암과 햇살이 어우러진 해안 풍경", position: "center 50%" },
  { src: "/images/hero/hero-08.png", alt: "백령도 바다의 점박이물범", position: "center 50%" },
  { src: "/images/hero/hero-09.png", alt: "백령도의 대표 향토음식 냉면", position: "center 58%" },
  { src: "/images/hero/hero-10.png", alt: "서해 최북단 백령도 기념비", position: "center center" },
];

const restaurantPhotos: Record<string, string[]> = {
  "전복죽있는 철판집": ["/images/restaurants/jeonbok-cheolpan-01.jpg"],
  "가을면옥": ["/images/restaurants/gaeul-myeonok-01.png"],
  "고모네": ["/images/restaurants/gomone-01.png"],
  "네네치킨": ["/images/restaurants/nene-chicken-01.png"],
  "노랑통닭": ["/images/restaurants/norang-tongdak-01.png"],
  "대박맛집": ["/images/restaurants/daebak-matjip-01.png"],
  "국수나라 백반세상": ["/images/restaurants/guksunara-baekban-01.png"],
  "돈키호테": ["/images/restaurants/donquixote-01.png"],
  "두메칼국수": ["/images/restaurants/dume-kalguksu-01.png"],
  "해녀와사위횟집": ["/images/restaurants/haenyeo-sawi-01.png"],
  "두선네한상": ["/images/restaurants/dusun-hansang-01.png"],
  "뚱이네맛집": ["/images/restaurants/ddungi-matjip-01.png"],
  "미화정": ["/images/restaurants/mihwajeong-01.png"],
  "백령면옥": ["/images/restaurants/baengnyeong-myeonok-01.png"],
  "시골칼국수&냉면": ["/images/restaurants/sigol-kalguksu-naengmyeon-01.png"],
  "이화원": ["/images/restaurants/ihwawon-01.png"],
  "자연마을": ["/images/restaurants/jayeon-maeul-01.png"],
  "장촌칼국수": ["/images/restaurants/jangchon-kalguksu-01.png"],
  "진촌돼지": ["/images/restaurants/jinchon-dwaeji-01.png"],
  "푸른바다찜&탕": ["/images/restaurants/pureun-bada-jjim-tang-01.png"],
  "썸&배터지는생동까스": ["/images/restaurants/ssum-baeteojineun-donkatsu-01.png"],
  "아랑이네횟집": ["/images/restaurants/arangi-sashimi-01.png"],
  "신화평양냉면": ["/images/restaurants/shinhwa-pyeongyang-naengmyeon-01.png"],
  "사랑채": ["/images/restaurants/sarangchae-01.png"],
  "뽀끄닭": ["/images/restaurants/ppokkeudak-01.jpg"],
  "복이네": ["/images/restaurants/bokine-01.jpg"],
  "둘리호프": ["/images/restaurants/dooly-hof-01.jpg"],
};

const stayPhotos: Record<string, string[]> = {
  "백령로그펜션": [
    "/images/stays/baengnyeong-log-pension-01.jpg",
    "/images/stays/baengnyeong-log-pension-02.jpg",
    "/images/stays/baengnyeong-log-pension-03.jpg",
    "/images/stays/baengnyeong-log-pension-04.jpg",
    "/images/stays/baengnyeong-log-pension-05.jpg",
  ],
};

const daecheongGallery = [
  { src: "/images/seopungbaji.png", name: "서풍받이" },
  { src: "/images/nongyeo-beach.png", name: "농여해변" },
  { src: "/images/miadong-beach.png", name: "미아동해변" },
  { src: "/images/samgaksan.png", name: "삼각산" },
  { src: "/images/maebawi-observatory.png", name: "매바위전망대" },
  { src: "/images/moraeul-beach.png", name: "모래울해변" },
  { src: "/images/jiduri-beach.png", name: "지두리해변" },
  { src: "/images/dapdong-beach.png", name: "답동해변" },
  { src: "/images/sunset-observatory.png", name: "해넘이전망대" },
  { src: "/images/okjuk-sand-dune.png", name: "옥죽동 해안사구" },
  { src: "/images/geomeunnang-coast.png", name: "검은낭 해안" },
  { src: "/images/dokbawi.png", name: "독바위" },
];

const daecheongSpecialties = [
  { name: "우럭", image: "/images/specialties/daecheong-rockfish.png", description: "대청도 청정 해역에서 만나는 대표 어종으로, 담백하고 탄탄한 식감이 매력적이에요." },
  { name: "홍어", image: "/images/specialties/daecheong-skate.png", description: "대청도 연근해에서 잡히는 수산물로, 신선한 상태부터 숙성 요리까지 다양하게 즐겨요." },
  { name: "흑염소", image: "/images/specialties/daecheong-black-goat.png", description: "대청도의 자연환경에서 자란 흑염소로, 현지 식재료와 특산품으로 알려져 있어요." },
  { name: "전복", image: "/images/specialties/daecheong-abalone.png", description: "깨끗한 바다에서 자란 전복은 쫄깃한 식감과 진한 바다 풍미가 특징이에요." },
  { name: "해삼", image: "/images/specialties/daecheong-sea-cucumber.png", description: "대청도 바다에서 채취하는 해삼은 오독오독한 식감으로 사랑받는 해산물이에요." },
  { name: "꽃게", image: "/images/specialties/daecheong-blue-crab.png", description: "제철에 살과 알이 차오른 꽃게는 찜·탕·게장 등 다양한 요리에 잘 어울려요." },
  { name: "돌미역", image: "/images/specialties/daecheong-rock-seaweed.png", description: "바위에 붙어 자란 돌미역은 깊은 바다 향과 부드러우면서도 탄탄한 식감이 특징이에요." },
  { name: "성게", image: "/images/specialties/daecheong-sea-urchin.png", description: "대청도 바다의 성게는 제철에 진하고 고소한 풍미를 맛볼 수 있는 별미예요." },
  { name: "다시마", image: "/images/specialties/daecheong-kelp.png", description: "깨끗한 바다에서 자란 다시마는 국물과 반찬에 깊은 감칠맛을 더해줘요." },
];

export default function Home() {
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [weatherSlideIndex, setWeatherSlideIndex] = useState(0);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(false);
  const [weatherItems, setWeatherItems] = useState(
    islandWeatherLocations.map((item) => ({ ...item, temperature: null as number | null, weatherCode: null as number | null, windSpeed: null as number | null }))
  );
  const [newsFilter, setNewsFilter] = useState("전체");
  const [selectedSeason, setSelectedSeason] = useState("봄");
  const filteredIslandNews =
    newsFilter === "전체"
      ? islandNews
      : islandNews.filter((item) => item.type === newsFilter);


  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroSlideIndex((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadWeather() {
      try {
        const results = await Promise.all(
          islandWeatherLocations.map(async (island) => {
            const query = new URLSearchParams({
              latitude: String(island.latitude),
              longitude: String(island.longitude),
              current: "temperature_2m,weather_code,wind_speed_10m",
              timezone: "Asia/Seoul",
            });
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?${query.toString()}`);
            if (!response.ok) throw new Error("날씨 정보를 불러오지 못했습니다.");
            const result = await response.json();
            return {
              ...island,
              temperature: Number(result.current?.temperature_2m),
              weatherCode: Number(result.current?.weather_code),
              windSpeed: Number(result.current?.wind_speed_10m),
            };
          })
        );
        if (!cancelled) {
          setWeatherItems(results);
          setWeatherError(false);
        }
      } catch (error) {
        console.error("섬 날씨 불러오기 오류:", error);
        if (!cancelled) setWeatherError(true);
      } finally {
        if (!cancelled) setWeatherLoading(false);
      }
    }

    loadWeather();
    const refreshTimer = window.setInterval(loadWeather, 30 * 60 * 1000);
    return () => {
      cancelled = true;
      window.clearInterval(refreshTimer);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWeatherSlideIndex((current) => (current + 1) % islandWeatherLocations.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  function openTranslatedPage(language: "en" | "zh-CN" | "ja") {
    setShowLanguageMenu(false);
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      alert("번역 기능은 인터넷에 배포된 사이트에서 사용할 수 있어요.");
      return;
    }
    const translateUrl = `https://translate.google.com/translate?sl=ko&tl=${language}&u=${encodeURIComponent(window.location.href)}`;
    window.open(translateUrl, "_blank", "noopener,noreferrer");
  }

  const currentWeather = weatherItems[weatherSlideIndex];
  const currentWeatherInfo = weatherCodeInfo(currentWeather?.weatherCode ?? null);

  const islandNewsSliderRef = useRef<HTMLDivElement>(null);
  const [isNewsSliderPaused, setIsNewsSliderPaused] = useState(false);

  const moveIslandNews = (direction: "left" | "right") => {
    const slider = islandNewsSliderRef.current;
    if (!slider) return;
    const card = slider.querySelector<HTMLElement>("[data-news-card]");
    if (!card) return;

    const step = card.getBoundingClientRect().width + 20;
    slider.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isNewsSliderPaused || filteredIslandNews.length <= 1) return;

    const timer = window.setInterval(() => {
      const slider = islandNewsSliderRef.current;
      if (!slider) return;

      const card = slider.querySelector<HTMLElement>("[data-news-card]");
      if (!card) return;

      const step = card.getBoundingClientRect().width + 20;
      const isAtEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - step / 2;

      if (isAtEnd) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isNewsSliderPaused, newsFilter, filteredIslandNews.length]);


  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedIsland, setSelectedIsland] = useState("백령도");

  // 방문자
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);

  // 펼치기/접기
  const [showStay, setShowStay] = useState(false);
  const [showFood, setShowFood] = useState(false);
  const [showFishing, setShowFishing] = useState(false);
  const [showDaecheongSpecialty, setShowDaecheongSpecialty] = useState(false);
  const [showTaxi, setShowTaxi] = useState(false);
  const [showRentcar, setShowRentcar] = useState(false);
  const [showLocal, setShowLocal] = useState(false);
  const [showBus, setShowBus] = useState(false);
  const [showMart, setShowMart] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  // 여행자들의 섬 발자국
  const [footprints, setFootprints] = useState<any[]>([]);
  const [footprintLoading, setFootprintLoading] = useState(false);
  const [footprintSubmitting, setFootprintSubmitting] = useState(false);
  const [isFootprintMarqueePaused, setIsFootprintMarqueePaused] = useState(false);
  const [footprintIsland, setFootprintIsland] = useState("백령도");
  const [footprintPlace, setFootprintPlace] = useState("");
  const [footprintNickname, setFootprintNickname] = useState("");
  const [footprintStory, setFootprintStory] = useState("");
  const [footprintFile, setFootprintFile] = useState<File | null>(null);

  function handleQuickMenuClick(key: string) {
    let targetId = "";

    if (key === "ship") {
      targetId = "ship-info";
    } else if (key === "transport") {
      if (selectedIsland === "백령도") {
        setSelectedCategory("개인택시");
        setShowTaxi(true);
        targetId = "taxi";
      } else {
        targetId = "island-guide";
      }
    } else if (key === "stay") {
      setSelectedCategory("숙박");
      if (selectedIsland === "백령도") {
        setShowStay(true);
        targetId = "stay";
      } else if (selectedIsland === "대청도") {
        setShowStay(true);
        targetId = "daecheong-stay";
      } else {
        targetId = "island-directory";
      }
    } else if (key === "food") {
      setSelectedCategory("맛집");
      if (selectedIsland === "백령도") {
        setShowFood(true);
        targetId = "food";
      } else if (selectedIsland === "대청도") {
        setShowFood(true);
        targetId = "daecheong-food";
      } else {
        targetId = "island-directory";
      }
    } else if (key === "military") {
      if (selectedIsland !== "백령도") {
        setSelectedIsland("백령도");
      }
      targetId = "military-visit";
    } else if (key === "fishing") {
      if (selectedIsland === "대청도") {
        setSelectedCategory("낚시배");
        setShowFishing(true);
        targetId = "daecheong-fishing";
      } else if (selectedIsland === "소청도") {
        targetId = "island-guide";
      } else {
        targetId = "fishing-info";
      }
    } else if (key === "specialty") {
      if (selectedIsland === "대청도") {
        setShowDaecheongSpecialty(true);
        targetId = "daecheong-specialty";
      } else {
        if (selectedIsland !== "백령도") {
        setSelectedIsland("백령도");
        }
        setSelectedCategory("특산물");
        setShowLocal(true);
        targetId = "local";
      }
    } else if (key === "news") {
      targetId = "island-news";
    }

    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  }

  function handlePlatformServiceClick(key: string) {
    if (["ship", "stay", "food", "fishing"].includes(key)) {
      handleQuickMenuClick(key);
      return;
    }

    if (key === "contact") {
      window.location.href = "/contact";
      return;
    }

    const targetId = key === "places" ? "place-section" : "traveler-footprints";
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // 버스
  const [busDirection, setBusDirection] = useState("북포리");

  // 검색
  const [staySearch, setStaySearch] = useState("");
  const [foodSearch, setFoodSearch] = useState("");


  // Q&A
  const [qnaCategory, setQnaCategory] = useState("전체");
  const [qnaFormCategory, setQnaFormCategory] = useState("배편");
  const [qnaSearch, setQnaSearch] = useState("");
  const [qnaNickname, setQnaNickname] = useState("");
  const [qnaTitle, setQnaTitle] = useState("");
  const [qnaContent, setQnaContent] = useState("");
  const [qnaQuestions, setQnaQuestions] = useState<any[]>([]);
  const [qnaLoading, setQnaLoading] = useState(false);
  const [qnaSubmitting, setQnaSubmitting] = useState(false);

  // 곰신 군인면회 후기
  const [militaryReviews, setMilitaryReviews] = useState<any[]>([]);
  const [militaryReviewLoading, setMilitaryReviewLoading] = useState(false);
  const [militaryReviewSubmitting, setMilitaryReviewSubmitting] = useState(false);
  const [militaryReviewNickname, setMilitaryReviewNickname] = useState("");
  const [militaryReviewRelation, setMilitaryReviewRelation] = useState("연인");
  const [militaryReviewPeriod, setMilitaryReviewPeriod] = useState("");
  const [militaryReviewStay, setMilitaryReviewStay] = useState("당일");
  const [militaryReviewTransport, setMilitaryReviewTransport] = useState("택시");
  const [militaryReviewRating, setMilitaryReviewRating] = useState(5);
  const [militaryReviewContent, setMilitaryReviewContent] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [notices, setNotices] = useState<any[]>([]);
const [placeViews, setPlaceViews] = useState<any[]>([]);
const [placeLikes, setPlaceLikes] = useState<any[]>([]);
const [myCourse, setMyCourse] = useState<any[]>([]);
const [popularPlaces, setPopularPlaces] = useState<any[]>([]);

// AI 여행 플래너
const [plannerDuration, setPlannerDuration] = useState("1박 2일");
const [plannerCompanion, setPlannerCompanion] = useState("가족");
const [plannerTheme, setPlannerTheme] = useState("자연·사진");
const [plannerTransport, setPlannerTransport] = useState("렌터카·자가용");
const [plannerSeason, setPlannerSeason] = useState("봄");
const [plannerResult, setPlannerResult] = useState<any[] | null>(null);
const [plannerTips, setPlannerTips] = useState<string[]>([]);
const [optimizedCourse, setOptimizedCourse] = useState<any | null>(null);

useEffect(() => {
  setPlannerResult(null);
  setOptimizedCourse(null);
}, [selectedIsland]);

// 통합 검색
const [globalSearch, setGlobalSearch] = useState("");
const [searchResults, setSearchResults] = useState<any[]>([]);
const [showSearchResults, setShowSearchResults] = useState(false);

  const categories = [
    { name: "전체", icon: "🏝️" },
    { name: "관광지", icon: "📸" },
    { name: "맛집", icon: "🍜" },
    { name: "숙박", icon: "🏨" },
    { name: "개인택시", icon: "🚕" },
    { name: "렌터카", icon: "🚗" },
    { name: "특산물", icon: "🎁" },
  ];

  const islandCategories =
    selectedIsland === "대청도"
      ? [
          { name: "관광지", icon: "📸" },
          { name: "맛집", icon: "🍜" },
          { name: "숙박", icon: "🏨" },
          { name: "낚시배", icon: "🎣" },
        ]
      : selectedIsland === "소청도"
      ? [
          { name: "관광지", icon: "📸" },
          { name: "맛집", icon: "🍜" },
          { name: "숙박", icon: "🏨" },
        ]
      : categories;
  const places = [
    {
      name: "두무진",
      island: "백령도",
      image: "/images/dumujin.jpg",
      category: "관광지",
      description:
        "수천만 년 동안 형성된 기암절벽과 푸른 서해가 어우러진 백령도 대표 절경",
      location: "백령도 북서쪽",
      link: "/place/dumujin",
      tip: "🚢 유람선과 해안 산책로에서 웅장한 기암절벽을 서로 다른 각도로 즐겨보세요.",
    },
    {
      name: "끝섬전망대",
      island: "백령도",
      image: "/images/kkutseom.jpg",
      category: "관광지",
      description:
        "북한 장산곶과 사곶해변, 하늬해변까지 조망 가능한 백령도의 대표 전망 명소",
      location: "백령도 서쪽해안",
      link: "/place/kkeutseom",
      tip: "🌅 늦은 오후에 방문하면 서해 전망과 붉게 물드는 노을을 함께 감상하기 좋아요.",
    },
    {
      name: "사곶해변",
      island: "백령도",
      image: "/images/sagot.jpg",
      category: "관광지",
      description:
        "천연비행장으로 유명한 세계적으로 희귀한 사빈 해변",
      location: "용기포항 인근",
      link: "/place/sagot",
      tip: "✈️ 천연비행장으로 알려진 단단하고 넓은 해변을 천천히 걸으며 독특한 지형을 느껴보세요.",
    },
    {
      name: "콩돌해안",
      island: "백령도",
      image: "/images/kongdol.jpg",
      category: "관광지",
      description: "파도 소리가 아름다운 백령도 명소",
      location: "인천 옹진군 백령면 남포리",
      link: "/place/kongdol",
      tip: "🌊 파도에 둥근 콩돌이 구르며 내는 독특한 소리를 들으며 해안을 천천히 걸어보세요.",
    },

    {
      name: "심청각",
      island: "백령도",
      image: "/images/simcheonggak.jpg",
      category: "관광지",
      description: "심청전 설화가 전해지는 문화 명소",
      location: "인천 옹진군 백령면 진촌리",
      link: "/place/simcheonggak",
      tip: "📖 심청전 설화를 살펴보고 전망까지 함께 즐길 수 있어 가족 여행 코스로 잘 어울려요.",
    },
    {
      name: "하늬해안",
      island: "백령도",
      image: "/images/hani.jpg",
      category: "관광지",
      description: "북한 장산곶 방향의 바다와 점박이물범 서식지를 함께 볼 수 있는 생태관광 명소",
      location: "북한 장산곶 방향이 보이는 백령도 북서쪽 해안",
      tip: "🦭 해안 전망과 함께 점박이물범 서식 환경을 살펴볼 수 있는 백령도의 대표 생태여행 포인트예요.",
      link: "/place/hani",
    },
    {
      name: "백령 점박이물범 생태관광체험센터",
      island: "백령도",
      image: "/images/spotted-seal-center.jpg",
      category: "관광지",
      description: "백령도의 점박이물범 생태를 배우고 관찰할 수 있는 생태관광 명소",
      location: "백령도 하늬해안 일대",
      tip: "🦭 점박이물범의 생태를 배우고 하늬해안의 자연환경과 함께 둘러보기 좋은 생태관광 코스예요.",
      link: "/place/spotted-seal-center",
    },
    {
  name: "용틀임바위",
  island: "백령도",
  image: "/images/dragon.jpg",
  category: "관광지",
  description: "용이 몸을 비틀며 승천하는 모습을 닮은 백령도의 대표 지질명소",
  location: "인천 옹진군 백령면 남포리",
  link: "/place/dragon",
      tip: "🪨 용이 몸을 비트는 듯한 독특한 바위 형태와 주변 해안 지형을 함께 관찰해 보세요.",
},
    {
      name: "사자바위",
      island: "백령도",
      image: "/images/sajabawi2.jpg",
      category: "관광지",
      description: "사자의 형상을 닮은 백령도의 대표 해안 바위",
      location: "인천 옹진군 백령면 진촌리",
      link: "/place/sajabawi",
      tip: "🦁 보는 방향에 따라 사자를 닮아 보이는 바위와 해안 풍경을 함께 사진에 담기 좋아요.",
    },
    {
      name: "천안함 위령탑",
      island: "백령도",
      image: "/images/cheonan.jpg",
      category: "안보역사",
      description: "천안함 46용사를 추모하는 장소",
      location: "백령면 연화리",
      link: "/place/cheonan",
      tip: "🕊️ 천안함 46용사를 기억하며 백령도의 안보 역사를 차분하게 돌아보는 공간이에요.",
    },
    {
      name: "사진 찍기 좋은 녹색명소",
      island: "백령도",
      image: "/images/photozone.jpg",
      category: "관광지",
      description:
        "백령도에서 꼭 사진을 남겨야 하는 숨은 포토스팟입니다.",
      location: "인천 옹진군 백령면 남포리 산2",
      tip: "📸 백령도의 녹색 풍경을 배경으로 여행 인증사진을 남기기 좋은 드라이브 포인트예요.",
      link: "/place/photozone",
    },
    {
      name: "서해최북단 백령도비",
      island: "백령도",
      image: "/images/baengnyeong-bi.jpg",
      category: "관광지",
      description: "서해 최북단 백령도를 상징하는 기념비입니다. 많은 관광객들이 인증사진을 남기는 대표 포토존입니다.",
      location: "인천 옹진군 백령면 진촌리",
      tip: "📸 백령도 인증사진 · 🧭 최북단 상징 · 🚗 짧게 들르기",
      link: "/place/baengnyeong-bi",
    },
    {
      name: "한국기독교의 섬",
      island: "백령도",
      image: "/images/christian-island.jpg",
      category: "안보역사",
      description: "백령도에 이어져 온 기독교 역사와 신앙의 발자취를 살펴보는 역사문화 명소입니다.",
      location: "인천 옹진군 백령면",
      tip: "⛪ 백령도 기독교 역사 · 📖 문화여행",
      link: "/place/christianity",
    },
    {
      name: "한국기독교역사관",
      island: "백령도",
      image: "/images/christian-history-museum.png",
      category: "안보역사",
      description: "백령도의 기독교 역사와 관련 자료를 관람할 수 있는 역사문화 공간입니다.",
      location: "인천 옹진군 백령면",
      tip: "🏛️ 실내 관람 · ⛪ 기독교 역사 · 📖 문화여행",
      link: "/place/christian-island",
    },
  
    {
      name: "서풍받이",
      island: "대청도",
      image: "/images/seopungbaji.png",
      category: "관광지",
      description: "대청도 남동쪽 해안의 웅장한 절벽과 바다를 함께 만나는 대표 지질명소",
      location: "인천 옹진군 대청면",
      tip: "🥾 해안 트레킹 · 🪨 규암 절벽 · 🌊 서해 절경",
      link: "/place/seopungbaji",
    },
    {
      name: "농여해변",
      island: "대청도",
      image: "/images/nongyeo-beach.png",
      category: "관광지",
      description: "넓은 해변과 독특한 바위 지형을 함께 만나는 대청도 해안 명소",
      location: "인천 옹진군 대청면",
      tip: "🪨 나이테바위 · 🌊 풀등 · 🌅 저녁노을",
      link: "/place/nongyeo-beach",
    },

    {
      name: "미아동해변",
      island: "대청도",
      image: "/images/miadong-beach.png",
      category: "관광지",
      description: "탁 트인 모래사장과 푸른 바다가 시원하게 펼쳐지는 대청도 해변",
      location: "인천 옹진군 대청면",
      tip: "🌊 풀등 · 〰️ 물결무늬 연흔 · 📸 해변 풍경",
      link: "/place/miadong-beach",
    },

    {
      name: "삼각산",
      island: "대청도",
      image: "/images/samgaksan.png",
      category: "관광지",
      description: "정상석이 자리한 해발 343m 대청도의 대표 산행 명소",
      location: "인천 옹진군 대청면",
      tip: "⛰️ 해발 343m 정상 · 🔭 섬 조망 · 🥾 트레킹",
      link: "/place/samgaksan",
    },

    {
      name: "매바위전망대",
      island: "대청도",
      image: "/images/maebawi-observatory.png",
      category: "관광지",
      description: "매 조형물과 함께 대청도의 산과 바다 풍경을 바라볼 수 있는 전망 포인트",
      location: "인천 옹진군 대청면",
      tip: "🦅 매 조형물 · 🔭 대청도 해안 전망 · 📸 산과 바다가 어우러진 풍경을 배경으로 사진을 남겨보세요.",
      link: "/place/maebawi-observatory",
    },

    {
      name: "모래울해변",
      island: "대청도",
      image: "/images/moraeul-beach.png",
      category: "관광지",
      description: "산자락 사이로 길게 이어지는 모래사장과 잔잔한 바다가 어우러진 해변",
      location: "인천 옹진군 대청면",
      tip: "🌲 소나무숲 · 🌊 모래해변 · 😌 조용한 휴식",
      link: "/place/moraeul-beach",
    },

    {
      name: "지두리해변",
      island: "대청도",
      image: "/images/jiduri-beach.png",
      category: "관광지",
      description: "부드러운 모래사장과 파도 풍경을 가까이에서 즐기기 좋은 대청도 해변",
      location: "인천 옹진군 대청면",
      tip: "🌊 넓은 모래해변 · 🚶 해안 산책 · 📸 바다 풍경",
      link: "/place/jiduri-beach",
    },

    {
      name: "답동해변",
      island: "대청도",
      image: "/images/dapdong-beach.png",
      category: "관광지",
      description: "바위 해안과 해안 데크길이 어우러져 걷는 재미가 있는 대청도 해안 명소",
      location: "인천 옹진군 대청면",
      tip: "🚶 해안 산책로 · 🪨 바위해안 · 🌊 해변 풍경",
      link: "/place/dapdong-beach",
    },

    {
      name: "해넘이전망대",
      island: "대청도",
      image: "/images/sunset-observatory.png",
      category: "관광지",
      description: "탁 트인 서해를 바라보며 대청도의 해넘이 풍경을 감상하기 좋은 전망대",
      location: "인천 옹진군 대청면",
      tip: "🌅 서해 일몰 · 🔭 탁 트인 전망 · 📸 노을 사진",
      link: "/place/sunset-observatory",
    },
    {
      name: "소청등대",
      island: "소청도",
      image: "/images/socheong-lighthouse.png",
      category: "관광지",
      description: "소청도의 푸른 바다와 섬 풍경을 함께 바라볼 수 있는 대표적인 등대 명소",
      location: "인천 옹진군 대청면 소청리",
      tip: "🌊 바다전망 · 📸 등대풍경",
      link: "/place/socheong-lighthouse",
    },

    {
      name: "분바위",
      island: "소청도",
      image: "/images/bunbawi.png",
      category: "관광지",
      description: "바다와 맞닿은 밝은 암벽이 인상적인 소청도의 대표 해안 절경",
      location: "인천 옹진군 대청면 소청리",
      tip: "🪨 해안절경 · 📸 지질풍경",
      link: "/place/bunbawi",
    },

    {
      name: "스트로마톨라이트",
      island: "소청도",
      image: "/images/stromatolite.png",
      category: "관광지",
      description: "소청도의 독특한 지질 경관을 가까이에서 살펴볼 수 있는 자연 학습 명소",
      location: "인천 옹진군 대청면 소청리",
      tip: "🌍 지질명소 · 🪨 자연학습",
      link: "/place/stromatolite",
    },



    {
      name: "나이테바위",
      island: "대청도",
      image: "/images/nongyeo-beach.png",
      category: "관광지",
      description: "농여해변 일대에서 만나는 독특한 층리 무늬의 바위로, 대청도의 해안 지질경관을 가까이에서 살펴보기 좋은 포인트입니다.",
      location: "인천 옹진군 대청면 농여해변 일대",
      tip: "🪨 독특한 바위무늬 · 🌊 농여해변과 함께 · 📸 지질풍경",
      link: "/place/tree-ring-rock",
    },
    {
      name: "검은낭 해안",
      island: "대청도",
      image: "/images/geomeunnang-coast.png",
      category: "관광지",
      description: "대청도 남쪽 해안의 거친 바위와 바다 풍경을 만날 수 있는 해안 경관 포인트입니다. 해안 접근은 현지 여건과 물때를 먼저 확인하세요.",
      location: "인천 옹진군 대청면",
      tip: "🌊 해안절경 · 🪨 자갈·바위해안 · ⚠️ 현지 접근여건 확인",
      link: "/place/geomeunnang-coast",
    },
    {
      name: "독바위",
      island: "대청도",
      image: "/images/dokbawi.png",
      category: "관광지",
      description: "대청도를 상징하는 해안 바위 경관 가운데 하나로, 섬 특유의 지형과 바다 풍경을 함께 감상하기 좋은 곳입니다.",
      location: "인천 옹진군 대청면",
      tip: "🪨 해안 바위 · 🌊 섬 풍경 · 📸 자연 포토포인트",
      link: "/place/dokbawi",
    },
    {
      name: "소청도 천주교회·김대건 신부상",
      island: "소청도",
      image: "/images/socheong-catholic.png",
      category: "관광지",
      description: "소청도의 종교·생활문화를 함께 살펴볼 수 있는 방문 포인트입니다. 조용한 마을 공간인 만큼 주민 생활을 배려하며 둘러보세요.",
      location: "인천 옹진군 대청면 소청리",
      tip: "⛪ 섬 문화 · 📖 역사 이야기 · 🤫 조용한 관람",
      link: "/place/socheong-catholic",
    },
    {
      name: "예동포구",
      island: "소청도",
      image: "/images/yedong-port.png",
      category: "관광지",
      description: "작은 포구와 해안 마을 풍경을 만날 수 있는 소청도의 생활경관 포인트입니다. 관광시설보다는 섬의 일상을 천천히 느끼는 곳에 가깝습니다.",
      location: "인천 옹진군 대청면 소청리",
      tip: "⚓ 작은 포구 · 🏘️ 섬마을 풍경 · 🚶 천천히 둘러보기",
      link: "/place/yedong-port",
    },
    {
      name: "노화동포구",
      island: "소청도",
      image: "/images/nohwa-port.png",
      category: "관광지",
      description: "소청도의 바다와 주민 생활이 맞닿아 있는 작은 포구입니다. 주변 지질·해안 풍경과 함께 섬의 생활 모습을 살펴보기 좋습니다.",
      location: "인천 옹진군 대청면 소청리",
      tip: "⚓ 포구풍경 · 🌊 해안 산책 · 🏘️ 섬의 일상",
      link: "/place/nohwa-port",
    },
    {
      name: "소청도 주상절리",
      island: "소청도",
      image: "/images/stromatolite.png",
      category: "관광지",
      description: "소청도의 다양한 지질경관을 보여주는 해안 지질 포인트입니다. 안전한 관찰 위치와 현지 접근 여건을 확인한 뒤 둘러보는 것을 권장합니다.",
      location: "인천 옹진군 대청면 소청리",
      tip: "🌍 지질여행 · 🪨 암석 관찰 · ⚠️ 안전한 위치에서 관찰",
      link: "/place/socheong-columnar-joint",
    },
    {
      name: "탑동포구·인사하는 바위",
      island: "소청도",
      image: "/images/tapdong-port-greeting-rock.png",
      category: "관광지",
      description: "탑동포구 주변의 해안 경관과 독특한 바위 지형을 함께 살펴볼 수 있는 소청도의 숨은 지질·경관 포인트입니다.",
      location: "인천 옹진군 대청면 소청리",
      tip: "⚓ 포구 · 🪨 바위경관 · 📸 숨은 풍경",
      link: "/place/tapdong-port",
    },

    {
      name: "옥죽동 해안사구",
      island: "대청도",
      image: "/images/okjuk-sand-dune.png",
      category: "관광지",
      description: "대청도 북쪽 해안에서 바람이 만든 모래언덕을 만나는 대표 해안사구",
      location: "인천 옹진군 대청면 옥죽동",
      tip: "🏜️ 모래사막 풍경 · 🐫 이색 포토존 · 🌍 지질명소",
      link: "/place/okjuk-sanddune",
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

  const daecheongFood = [
    ["대청식당","김애란","032-836-2124"],["선진식당","문봉녀","032-836-3664"],
    ["바다식당","김선옥","032-836-2476"],["소나무가든","김순의","032-565-9999"],
    ["티바두마리치킨&피자앤 대청도점","김수겸","032-836-3858"],["대청면옥","오영화","032-836-7430"],
    ["술중화요리","김명순","032-836-9758"],["솔밭나루터펜션식당","허선희","032-836-8999"],
    ["차우식당","배복봉","032-836-7555"],["고리식당","신봉","032-836-0054"],
    ["궁차이나","조미경","032-836-1775"],["섬식당","송태국","032-836-2121"],
    ["돼지가든","정지영","032-836-5983"],["정원가든","정금녀","032-836-2443"],
    ["학골식당","정희서","032-836-6640"],["마루식당","장정숙","010-2282-2209"],
    ["농여식당","김미성","032-836-2011"],
  ];

  const socheongFood = [
    ["해변식당","이은철","032-836-5353"],
  ];

  const daecheongStay = [
    ["이동민박","박영순","010-3217-1118"],["문화쉼터","민윤전","032-836-2015"],
    ["엘림민박","장덕찬","032-836-5997"],["선진민박","이정일","032-836-2137"],
    ["희망민박","조숙녀","032-836-2102"],["초록별민박","이경순","032-836-2122"],
    ["솔향기민박","최용철","032-836-2477"],["수경민박","손경필","032-836-3664"],
    ["하늘민박","지형욱","032-836-2588"],["늘푸른민박","김금자","010-4189-3545"],
    ["솔밭나루터민박","조철수","010-9466-2079"],["수성민박","안선안","010-4756-7069"],
    ["대길민박","최경수","032-836-2321"],["연실민박","김연순","032-836-0054"],
    ["왕대포민박","손경삼","032-836-7070"],["씨유민박","강길여","010-2087-7776"],
    ["G펜션","전명화","010-8662-6696"],["도화민박","서연오","032-836-2010"],
    ["로뎀민박","이경덕","032-836-2463"],["행복민박","홍정자","032-836-8853"],
    ["마루민박","김진매","032-836-2017"],["대청민박","김필남","010-8927-2503"],
    ["드림펜션","현호준","032-836-3290"],["엄지여관","이복순","032-836-2035"],
    ["해당화민박","송국매","010-4741-7787"],["홍실민박","최상숙","010-7118-0400"],
    ["청실민박","최창백","010-3335-7779"],["솔청민박","이복순","010-2753-9158"],
  ];

  const socheongStay = [
    ["등대","최옥화","032-836-3024"],["백경민박","이용희","032-836-3022"],
    ["노을민박","정예진","032-836-3043"],["중앙민박","박준복","010-3311-2206"],
    ["은혜민박","한정연","010-9852-6141"],["별빛민박","노한용","010-9338-3176"],
  ];

  const daecheongFishing = [
    ["기성호","김호인","010-5334-8552"],["부광호","손규진","010-6331-2055"],
    ["신해호","오연만","010-4052-2663"],["뉴신해호","김호준","010-3739-5217"],
    ["수성호","안선안","010-4756-7069"],["진성1호","김두순","010-5322-0473"],
    ["인성호","문용삼","010-6354-2248"],["덕윤호","김정운","010-6354-2463"],
    ["황해호","이환우","010-6717-2352"],["양덕호","주연미","010-9093-2027"],
    ["대길호","배순옥","010-9167-2321"],["유복호","오만영","010-3204-2212"],
    ["경기2호","박준향","010-7122-2473"],["비호","손경련","010-9314-7036"],
    ["동명호","정상빈","010-5345-3620"],["한성호","김기철","010-8745-3024"],
  ];

  const islandDirectory =
    selectedIsland === "대청도"
      ? selectedCategory === "맛집" ? daecheongFood
        : selectedCategory === "숙박" ? daecheongStay
        : selectedCategory === "낚시배" ? daecheongFishing : []
      : selectedIsland === "소청도"
      ? selectedCategory === "맛집" ? socheongFood
        : selectedCategory === "숙박" ? socheongStay : []
      : [];

  const marqueeFootprints = footprints.length > 0
    ? Array.from({ length: Math.max(1, Math.ceil(8 / footprints.length)) }, () => footprints).flat()
    : [];

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
    loadQnaQuestions();
    loadMilitaryReviews();
    loadFootprints();
  
    const savedCourse = localStorage.getItem("myCourse");
    if (savedCourse) {
      setMyCourse(JSON.parse(savedCourse));
    }
  }, []);

  function handleAddCourse(place: any) {
    const exists = myCourse.some((item) => item.name === place.name);

    if (exists) {
      alert("이미 여행코스에 담겨 있어요 😊");
      return;
    }

    const updatedCourse = [...myCourse, place];
    setMyCourse(updatedCourse);
    setOptimizedCourse(null);
    localStorage.setItem("myCourse", JSON.stringify(updatedCourse));
    alert(`${place.name}이 여행코스에 담겼어요!`);
  }

  function makeOptimizedCourse() {
    const islandCourseOrder: Record<string, string[]> = {
      백령도: [
        "사곶해변", "용틀임바위", "콩돌해안", "사진 찍기 좋은 녹색명소", "심청각",
        "서해최북단 백령도비", "한국기독교의 섬", "한국기독교역사관", "하늬해안",
        "백령 점박이물범 생태관광체험센터", "천안함 위령탑", "두무진", "사자바위",
      ],
      대청도: [
        "옥죽동 해안사구", "농여해변", "나이테바위", "미아동해변", "지두리해변",
        "매바위전망대", "삼각산", "모래울해변", "답동해변", "해넘이전망대",
        "서풍받이", "검은낭 해안", "독바위",
      ],
      소청도: [
        "예동포구", "소청도 천주교회·김대건 신부상", "소청등대", "분바위",
        "스트로마톨라이트", "소청도 주상절리", "노화동포구", "탑동포구·인사하는 바위",
      ],
    };

    const selectedPlaces = myCourse.filter((item) => item.island === selectedIsland);
    if (selectedPlaces.length < 2) {
      alert(`${selectedIsland} 관광지를 2곳 이상 담아주세요.`);
      return;
    }

    const order = islandCourseOrder[selectedIsland] || [];
    const indexOf = (name: string) => {
      const index = order.indexOf(name);
      return index >= 0 ? index : order.length;
    };
    const remaining = [...selectedPlaces];
    const startIndex: Record<string, number> = { 백령도: 0, 대청도: 5, 소청도: 0 };
    let currentIndex = startIndex[selectedIsland] ?? 0;
    const sorted: any[] = [];

    while (remaining.length) {
      remaining.sort((a, b) => Math.abs(indexOf(a.name) - currentIndex) - Math.abs(indexOf(b.name) - currentIndex));
      const next = remaining.shift();
      sorted.push(next);
      currentIndex = indexOf(next.name);
    }

    const transportFactor = plannerTransport === "도보·대중교통" ? 2.2 : plannerTransport === "택시" ? 0.9 : 1;
    const islandBase: Record<string, number> = { 백령도: 6, 대청도: 5, 소청도: 7 };
    let previousIndex = startIndex[selectedIsland] ?? 0;
    let totalTravelMinutes = 0;

    const stops = sorted.map((place, index) => {
      const placeIndex = indexOf(place.name);
      const gap = Math.max(1, Math.abs(placeIndex - previousIndex));
      const moveMinutes = Math.max(5, Math.round(((islandBase[selectedIsland] || 6) + gap * 4) * transportFactor / 5) * 5);
      const visitMinutes = place.name.includes("삼각산") ? 150 : place.name.includes("해변") || place.name.includes("해안") ? 60 : 45;
      totalTravelMinutes += moveMinutes;
      previousIndex = placeIndex;
      return { ...place, order: index + 1, moveMinutes, visitMinutes };
    });

    setOptimizedCourse({
      island: selectedIsland,
      stops,
      totalTravelMinutes,
      totalVisitMinutes: stops.reduce((sum, stop) => sum + stop.visitMinutes, 0),
      transport: plannerTransport,
    });

    window.setTimeout(() => {
      document.getElementById("optimized-course")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
 
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

  const { data: updatedData, error } = await supabase
    .from("visitor_stats")
    .update({
      today_count: newTodayCount,
      total_count: newTotalCount,
      last_date: today,
    })
    .eq("id", 1)
    .select()
    .single();

  console.log("updatedData:", updatedData);
  console.log("error:", error);

  if (updatedData) {
    localStorage.setItem(visitedKey, "true");
    setTodayVisitors(updatedData.today_count);
    setTotalVisitors(updatedData.total_count);
  }
};
  
  function makeTravelPlan() {
    if (selectedIsland !== "백령도") {
      const islandStops: Record<string, Record<string, string[]>> = {
        대청도: {
          "자연·사진": ["옥죽동 해안사구", "농여해변·나이테바위", "서풍받이", "해넘이전망대"],
          "아이와 가족": ["옥죽동 해안사구", "농여해변", "매바위전망대", "모래울해변"],
          "군인 면회": ["선진포항 주변", "농여해변", "옥죽동 해안사구", "매바위전망대"],
          "역사·안보": ["대청도 마을", "매바위전망대", "옥죽동 해안사구", "서풍받이"],
          "맛집·카페": ["대청도 현지 음식점", "농여해변", "마을 카페·쉼터", "해넘이전망대"],
          "힐링·느긋하게": ["모래울해변", "지두리해변", "농여해변", "해넘이전망대"],
        },
        소청도: {
          "자연·사진": ["분바위", "스트로마톨라이트", "소청등대", "탑동포구·인사하는 바위"],
          "아이와 가족": ["예동포구", "소청도 천주교회·김대건 신부상", "분바위", "소청등대"],
          "군인 면회": ["예동포구", "소청도 천주교회·김대건 신부상", "노화동포구", "분바위"],
          "역사·안보": ["소청도 천주교회·김대건 신부상", "예동포구", "소청등대", "분바위"],
          "맛집·카페": ["예동포구 마을", "소청도 천주교회·김대건 신부상", "분바위", "소청등대"],
          "힐링·느긋하게": ["예동포구", "노화동포구", "분바위", "소청등대"],
        },
      };
      const stops = islandStops[selectedIsland]?.[plannerTheme] || islandStops[selectedIsland]["자연·사진"];
      const port = selectedIsland === "대청도" ? "선진포항" : "예동포구 선착장";
      const dayCount = plannerDuration === "당일" ? 1 : plannerDuration === "1박 2일" ? 2 : 3;
      const schedules = [
        {
          title: `${selectedIsland} 첫인상과 대표 풍경`,
          schedule: [
            { time: "도착 후", place: `${port} 도착 · 이동 준비`, detail: "선박 도착 후 예약한 교통편과 귀항 시간을 먼저 확인하세요." },
            { time: "오전", place: stops[0], detail: `${plannerTheme} 취향을 반영한 첫 번째 핵심 장소예요.` },
            { time: "점심", place: `${selectedIsland} 현지 음식점`, detail: "영업 여부를 전화로 확인하고 이동 경로와 가까운 곳에서 식사하세요." },
            { time: "오후", place: stops[1], detail: "바람과 물때, 현지 접근 여건을 확인하며 여유 있게 둘러보세요." },
            { time: plannerDuration === "당일" ? "출항 전" : "저녁", place: plannerDuration === "당일" ? `${port} 이동` : `${selectedIsland} 숙소`, detail: plannerDuration === "당일" ? "승선 마감보다 넉넉하게 항구로 돌아가세요." : "저녁식사와 다음 날 운항 공지를 확인하세요." },
          ],
        },
        {
          title: `${selectedIsland} 해안·전망 핵심 코스`,
          schedule: [
            { time: "아침", place: "숙소 · 기상 확인", detail: "바람, 파고, 선박 운항 여부를 먼저 확인하세요." },
            { time: "오전", place: stops[2], detail: "첫날과 다른 권역의 대표 풍경을 천천히 둘러보세요." },
            { time: "점심", place: "현지인 추천 음식점", detail: "사전 예약 또는 영업 여부 확인을 권장해요." },
            { time: "오후", place: stops[3], detail: "사진 촬영과 산책 시간을 40~60분 정도 잡아두세요." },
            { time: plannerDuration === "1박 2일" ? "출항 전" : "저녁", place: plannerDuration === "1박 2일" ? `${port} 이동` : `${selectedIsland} 숙소`, detail: plannerDuration === "1박 2일" ? "귀항편 승선 시간을 확인하고 여유 있게 이동하세요." : "마지막 날 일정에 맞춰 휴식하세요." },
          ],
        },
        {
          title: `${selectedIsland} 마을과 숨은 풍경`,
          schedule: [
            { time: "오전", place: selectedIsland === "대청도" ? "답동해변" : "노화동포구", detail: "조용한 섬의 생활 풍경을 천천히 둘러보세요." },
            { time: "늦은 오전", place: selectedIsland === "대청도" ? "검은낭 해안" : "소청도 주상절리", detail: "안전한 관찰 위치와 현지 접근 가능 여부를 먼저 확인하세요." },
            { time: "점심", place: `${selectedIsland} 마을`, detail: "식사와 특산품 구입 시간을 함께 잡아두세요." },
            { time: "출항 전", place: `${port} 이동`, detail: "기상과 승선 마감시간을 다시 확인하고 항구로 이동하세요." },
          ],
        },
      ];

      setPlannerResult(schedules.slice(0, dayCount));
      setPlannerTips([
        selectedIsland === "대청도" ? "대청도는 관광지 사이 이동을 위해 차량이나 예약 교통편을 준비하면 편리해요." : "소청도는 도보 구간과 경사가 있으므로 짐을 가볍게 하고 미끄럼 방지 신발을 준비하세요.",
        "섬의 음식점·숙소·교통편은 운영 여부와 이용 시간을 미리 전화로 확인하세요.",
        "해안 관광지는 바람과 물때에 따라 접근 여건이 달라질 수 있으므로 현지 안내를 우선하세요.",
        "일정은 여행 계획을 위한 예시이며 실제 이동 전 선박 운항과 기상 상황을 다시 확인하세요.",
      ]);
      window.setTimeout(() => document.getElementById("planner-result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      return;
    }

    const themeStops: Record<string, string[]> = {
      "자연·사진": ["두무진", "콩돌해안", "사곶해변", "끝섬전망대"],
      "아이와 가족": ["심청각", "사곶해변", "콩돌해안", "두무진"],
      "군인 면회": ["진촌 시내", "사곶해변", "콩돌해안", "심청각"],
      "역사·안보": ["천안함 46용사 위령탑", "중화동교회", "심청각", "끝섬전망대"],
      "맛집·카페": ["백령도 현지 맛집", "바다 전망 카페", "사곶해변", "콩돌해안"],
      "힐링·느긋하게": ["하늬해안", "콩돌해안", "두무진", "끝섬전망대"],
    };

    const selectedStops = themeStops[plannerTheme] || themeStops["자연·사진"];
    const isMilitary = plannerCompanion === "군인 면회" || plannerTheme === "군인 면회";
    const isFoodTheme = plannerTheme === "맛집·카페";
    const isDayTrip = plannerDuration === "당일";
    const isOneNight = plannerDuration === "1박 2일";

    const arrivalPlace = plannerTransport === "렌터카·자가용"
      ? "용기포항 도착 · 이동 준비"
      : plannerTransport === "택시"
      ? "용기포항 도착 · 택시 이동 준비"
      : "용기포항 도착 · 교통편 확인";

    const day1Schedule = isDayTrip
      ? isMilitary
        ? [
            { time: "오전", place: arrivalPlace, detail: "도착 후 면회 장소와 외출·복귀 시간을 먼저 확인해요." },
            { time: "점심", place: "진촌 시내 현지 식당", detail: "면회 동선에서 크게 벗어나지 않는 곳에서 식사해요." },
            { time: "오후", place: "군인 면회 · 외출 일정", detail: "부대 안내에 따른 외출·복귀 시간을 가장 우선해서 움직여요." },
            { time: "여유 시간", place: "사곶해변 또는 가까운 카페", detail: "복귀와 출항 시간에 여유가 있을 때만 짧게 둘러보세요." },
            { time: "출항 전", place: "용기포항 이동", detail: "선사 안내와 승선 마감 시간을 확인하고 충분한 여유를 두고 이동하세요." },
          ]
        : [
            { time: "오전", place: arrivalPlace, detail: "배에서 내린 뒤 교통수단을 정리하고 여행을 시작해요." },
            { time: "오전", place: isFoodTheme ? "사곶해변" : selectedStops[0], detail: `${plannerTheme} 취향을 반영한 첫 코스예요.` },
            { time: "점심", place: isFoodTheme ? "백령도 현지 맛집" : "진촌 현지 식당", detail: "이동 경로와 가까운 곳에서 식사하며 시간을 아껴요." },
            { time: "오후", place: isFoodTheme ? "바다 전망 카페" : selectedStops[1], detail: "출항 시간을 고려해 무리하지 않는 범위에서 둘러봐요." },
            { time: "출항 전", place: "용기포항 이동", detail: "선사 안내와 승선 마감 시간을 확인하고 충분한 여유를 두고 이동하세요." },
          ]
      : isMilitary
      ? [
          { time: "오전", place: arrivalPlace, detail: "도착 후 면회 장소와 외출·복귀 시간을 먼저 확인해요." },
          { time: "점심", place: isFoodTheme ? "진촌 시내 현지 맛집" : "진촌 시내 식당", detail: "면회 동선과 가까운 곳에서 여유 있게 식사해요." },
          { time: "오후", place: "군인 면회 · 외출 일정", detail: "부대 안내에 따른 외출·복귀 시간을 최우선으로 잡아요." },
          { time: "늦은 오후", place: isFoodTheme ? "바다 전망 카페" : "사곶해변", detail: "면회 일정이 끝난 뒤 이동 부담이 적은 코스를 가볍게 즐겨요." },
          { time: "저녁", place: "진촌 시내 · 숙소", detail: "저녁식사 후 숙소에 체크인하고 다음 날 일정을 준비해요." },
        ]
      : [
          { time: "오전", place: arrivalPlace, detail: "배에서 내린 뒤 교통수단을 정리하고 여행을 시작해요." },
          { time: "점심", place: isFoodTheme ? "백령도 현지 맛집" : "진촌 현지 식당", detail: "현지 메뉴로 든든하게 여행을 시작해요." },
          { time: "오후", place: isFoodTheme ? "사곶해변" : selectedStops[0], detail: `${plannerTheme} 취향을 반영한 첫 번째 핵심 코스예요.` },
          { time: "늦은 오후", place: isFoodTheme ? "바다 전망 카페" : selectedStops[1], detail: "앞 일정과 겹치지 않는 장소에서 여유롭게 시간을 보내요." },
          { time: "저녁", place: "진촌 시내 · 숙소", detail: "저녁식사 후 숙소 체크인과 휴식을 추천해요." },
        ];

    const day2Schedule = isMilitary
      ? [
          { time: "아침", place: "숙소 · 출발 준비", detail: "기상과 여객선 운항 공지를 먼저 확인해요." },
          { time: "오전", place: "사곶해변", detail: "이동 부담이 적은 대표 명소에서 여유롭게 아침을 시작해요." },
          { time: "점심", place: isFoodTheme ? "첫날과 다른 현지 맛집" : "진촌 현지 식당", detail: "첫날과 겹치지 않는 식당을 골라 식사해요." },
          { time: "오후", place: isFoodTheme ? "콩돌해안 또는 카페" : "콩돌해안", detail: "출항 일정에 맞춰 가까운 코스를 무리 없이 둘러봐요." },
          ...(isOneNight
            ? [{ time: "출항 전", place: "용기포항 이동", detail: "선사 안내와 승선 마감 시간을 확인하고 충분한 여유를 두고 이동하세요." }]
            : [{ time: "저녁", place: "진촌 시내 · 숙소", detail: "저녁식사 후 숙소에서 휴식하며 마지막 날을 준비해요." }]),
        ]
      : [
          { time: "아침", place: "숙소 · 출발 준비", detail: "기상과 여객선 운항 공지를 먼저 확인해요." },
          { time: "오전", place: isFoodTheme ? "콩돌해안" : selectedStops[2], detail: "첫날과 겹치지 않는 대표 코스를 둘러봐요." },
          { time: "점심", place: isFoodTheme ? "첫날과 다른 현지 맛집" : "현지인 추천 식당", detail: "이동 경로와 가까운 식당을 선택하면 시간을 아낄 수 있어요." },
          { time: "오후", place: isFoodTheme ? "카페 또는 해안 산책" : selectedStops[3], detail: "사진 촬영과 산책 시간을 여유 있게 잡아두세요." },
          ...(isOneNight
            ? [{ time: "출항 전", place: "용기포항 이동", detail: "선사 안내와 승선 마감 시간을 확인하고 충분한 여유를 두고 이동하세요." }]
            : [{ time: "저녁", place: "진촌 시내 · 숙소", detail: "저녁식사 후 숙소에서 휴식하며 마지막 날을 준비해요." }]),
        ];

    const day3Schedule = [
      { time: "아침", place: "하늬해안", detail: "조용한 아침 바다와 생태 풍경을 감상해요." },
      { time: "오전", place: plannerTheme === "역사·안보" ? "천안함 46용사 위령탑" : "심청각", detail: "앞선 일정과 다른 백령도의 이야기를 만나봐요." },
      { time: "점심", place: isFoodTheme ? "마지막 현지 맛집" : "진촌 시내", detail: "마지막 식사와 특산물 구입 시간을 함께 잡아요." },
      { time: "출항 전", place: "용기포항 이동", detail: "선사 안내와 승선 마감 시간을 확인하고 충분한 여유를 두고 이동하세요." },
    ];

    const templates = [
      {
        title: isDayTrip ? (isMilitary ? "군인 면회 중심 당일 일정" : "백령도 당일 핵심 여행") : (isMilitary ? "군인 면회 중심 첫날" : "백령도 첫인상과 대표 명소"),
        schedule: day1Schedule,
      },
      {
        title: isMilitary ? "면회 다음 날 · 백령도 여행" : "백령도 핵심 코스 이어보기",
        schedule: day2Schedule,
      },
      {
        title: "숨은 이야기와 여유로운 마무리",
        schedule: day3Schedule,
      },
    ];

    const dayCount = isDayTrip ? 1 : isOneNight ? 2 : 3;

    const transportTip = plannerTransport === "도보·대중교통"
      ? "백령도는 관광지 사이 거리가 멀어 공영버스 시간표와 개인택시 번호를 미리 저장하세요."
      : plannerTransport === "택시"
      ? "택시 이동은 기사님과 다음 이동 시간과 장소를 미리 조율하면 일정이 편해요."
      : "차량 이동 시 주유소 위치와 반납 시간을 미리 확인하면 일정이 훨씬 편해요.";

    const companionTip = plannerCompanion === "아이 동반"
      ? "아이와 함께라면 해안 산책 시간을 짧게 나누고 간식과 여벌옷을 준비하세요."
      : plannerCompanion === "부모님"
      ? "부모님과 함께라면 계단과 경사가 적은 사곶해변·콩돌해안을 중심으로 여유 있게 이동하세요."
      : plannerCompanion === "군인 면회"
      ? "군인 면회 일정은 부대의 외출·복귀 안내를 최우선으로 하고 관광 일정은 남는 시간에 맞춰 조정하세요."
      : "동행자의 체력에 맞춰 명소 한 곳당 40~60분 정도 여유를 두세요.";

    const seasonTip: Record<string, string> = {
      봄: "봄에는 바닷바람이 차가울 수 있으니 얇은 겉옷을 챙기세요.",
      여름: "여름에는 햇빛이 강하므로 모자, 선크림, 생수를 준비하세요.",
      가을: "가을은 일교차가 커서 바람막이와 가벼운 보온의류가 좋아요.",
      겨울: "겨울에는 결항 가능성이 있으니 일정 앞뒤로 여유를 두고 방풍용품을 준비하세요.",
    };

    setPlannerResult(templates.slice(0, dayCount));
    setPlannerTips([
      transportTip,
      companionTip,
      seasonTip[plannerSeason],
      "일정은 여행 계획을 돕는 예시이며, 실제 이동 전 여객선 운항과 영업시간·면회 가능 시간을 다시 확인하세요.",
    ]);

    setTimeout(() => {
      document.getElementById("planner-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  const quickSearchItems = [
    { name: "맛집 전체보기", category: "맛집", icon: "🍜", description: "백령도 음식점과 대표메뉴, 전화번호를 확인하세요.", target: "food" },
    {
  name: "황해도식 냉면투어",
  category: "맛집",
  icon: "🍜",
  description: "백령도의 대표 냉면집 5곳을 모두 둘러보세요.",
  target: "naengmyeon",
},
    { name: "숙소 전체보기", category: "숙박", icon: "🏨", description: "백령도 숙박업소와 연락처를 한눈에 확인하세요.", target: "stay" },
    { name: "개인택시", category: "교통", icon: "🚕", description: "백령도 개인택시 업체와 전화번호를 확인하세요.", target: "taxi" },
    { name: "렌터카", category: "교통", icon: "🚗", description: "백령도 렌터카 업체 정보를 확인하세요.", target: "rentcar" },
    { name: "배편 예약", category: "여행정보", icon: "🚢", description: "백령도 여객선 예약과 운항 정보를 확인하세요.", target: "live-info" },
    { name: "군인 면회 여행", category: "군인면회", icon: "🪖", description: "군인 면회에 맞춘 여행 일정을 만들어보세요.", target: "ai-planner" },
    { name: "섬별 맞춤 여행 플래너", category: "여행코스", icon: "✨", description: "기간과 동행에 맞는 백령·대청·소청 일정을 자동으로 만들어드려요.", target: "ai-planner" },
    { name: "백령도 사진첩", category: "사진", icon: "📸", description: "백령도의 아름다운 풍경 사진을 감상하세요.", target: "gallery" },
  ];

  function runGlobalSearch(keyword?: string) {
    const query = (keyword ?? globalSearch).trim();
    setGlobalSearch(query);

    if (!query) {
      setSearchResults([]);
      setShowSearchResults(true);
      return;
    }

    const normalized = query.toLowerCase().replace(/\s/g, "");
    const placeResults = places
      .filter((place) =>
        [place.name, place.category, place.description, place.location, place.tip]
          .filter(Boolean)
          .join(" " )
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(normalized)
      )
      .map((place) => ({ ...place, icon: "📍", target: "place-section", type: "place" }));

    const menuResults = quickSearchItems.filter((item) =>
      [item.name, item.category, item.description]
        .join(" " )
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(normalized)
    );

    setSearchResults([...placeResults, ...menuResults].slice(0, 12));
    setShowSearchResults(true);

    setTimeout(() => {
      document.getElementById("search-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function openSearchResult(item: any) {
    if (item.target === "food") { setSelectedCategory("맛집"); setShowFood(true); }
    if (item.target === "stay") { setSelectedCategory("숙박"); setShowStay(true); }
    if (item.target === "taxi") { setSelectedCategory("개인택시"); setShowTaxi(true); }
    if (item.target === "rentcar") { setShowRentcar(true); }
    if (item.target === "gallery") { setShowGallery(true); }
    if (item.type === "place") { setSelectedIsland(item.island || "백령도"); setSelectedCategory("관광지"); }

    setTimeout(() => {
      document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  }


  async function loadMilitaryReviews() {
    setMilitaryReviewLoading(true);
    const { data, error } = await supabase
      .from("military_visit_reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setMilitaryReviews(data ?? []);
    } else {
      // 후기 테이블을 아직 만들지 않은 개발 단계에서는 빈 목록으로 표시
      setMilitaryReviews([]);
    }
    setMilitaryReviewLoading(false);
  }

  async function handleMilitaryReviewSubmit() {
    if (!militaryReviewNickname.trim() || !militaryReviewPeriod.trim() || militaryReviewContent.trim().length < 10) {
      alert("닉네임, 방문시기를 입력하고 후기는 10자 이상 작성해주세요.");
      return;
    }
    setMilitaryReviewSubmitting(true);
    const { error } = await supabase.from("military_visit_reviews").insert({
      nickname: militaryReviewNickname.trim(),
      relation: militaryReviewRelation,
      visit_period: militaryReviewPeriod.trim(),
      stay_type: militaryReviewStay,
      transport: militaryReviewTransport,
      rating: militaryReviewRating,
      content: militaryReviewContent.trim(),
    });
    if (error) {
      console.error("군인면회 후기 등록 오류:", error);
      alert("후기 등록에 실패했습니다. Supabase 후기 테이블 설정을 확인해주세요.");
      setMilitaryReviewSubmitting(false);
      return;
    }
    setMilitaryReviewNickname("");
    setMilitaryReviewPeriod("");
    setMilitaryReviewRelation("연인");
    setMilitaryReviewStay("당일");
    setMilitaryReviewTransport("택시");
    setMilitaryReviewRating(5);
    setMilitaryReviewContent("");
    await loadMilitaryReviews();
    setMilitaryReviewSubmitting(false);
    alert("소중한 면회 후기가 등록되었습니다 💌");
  }

  async function loadQnaQuestions() {
    setQnaLoading(true);
    const { data, error } = await supabase
      .from("qna_questions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Q&A 불러오기 오류:", error);
      setQnaLoading(false);
      return;
    }

    setQnaQuestions(data ?? []);
    setQnaLoading(false);
  }

  async function handleQnaSubmit() {
    if (!qnaNickname.trim() || !qnaTitle.trim() || !qnaContent.trim()) {
      alert("닉네임, 질문 제목, 질문 내용을 모두 입력해주세요.");
      return;
    }

    setQnaSubmitting(true);

    const { error } = await supabase.from("qna_questions").insert({
      nickname: qnaNickname.trim(),
      island: selectedIsland,
      category: qnaFormCategory,
      title: qnaTitle.trim(),
      content: qnaContent.trim(),
      answer: null,
      is_faq: false,
      is_answered: false,
    });

    if (error) {
      console.error("Q&A 등록 오류:", error);
      alert("질문 등록에 실패했습니다. 다시 시도해주세요.");
      setQnaSubmitting(false);
      return;
    }

    setQnaNickname("");
    setQnaFormCategory("배편");
    setQnaTitle("");
    setQnaContent("");
    await loadQnaQuestions();
    setQnaSubmitting(false);
    alert("질문이 등록되었습니다 😊");
  }

  async function loadFootprints() {
    setFootprintLoading(true);
    const { data, error } = await supabase
      .from("traveler_footprints")
      .select("*")
      .eq("is_approved", true)
      .order("created_at", { ascending: false });

    if (!error && data) setFootprints(data);
    if (error) console.error("섬 발자국 불러오기 오류:", error);
    setFootprintLoading(false);
  }

  async function handleFootprintSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!footprintNickname.trim() || !footprintPlace.trim() || !footprintFile) {
      alert("닉네임, 장소명, 사진은 꼭 입력해 주세요.");
      return;
    }

    if (footprintFile.size > 5 * 1024 * 1024) {
      alert("사진은 5MB 이하만 올릴 수 있어요.");
      return;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(footprintFile.type)) {
      alert("JPG, PNG, WEBP 사진만 올릴 수 있어요.");
      return;
    }

    setFootprintSubmitting(true);

    try {
      const ext = footprintFile.name.split(".").pop()?.toLowerCase() || "jpg";
      const filePath = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("traveler-footprints")
        .upload(filePath, footprintFile, {
          cacheControl: "3600",
          upsert: false,
          contentType: footprintFile.type,
        });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("traveler-footprints")
        .getPublicUrl(filePath);

      const { error: insertError } = await supabase
        .from("traveler_footprints")
        .insert({
          nickname: footprintNickname.trim(),
          island: footprintIsland,
          place_name: footprintPlace.trim(),
          story: footprintStory.trim() || null,
          image_url: publicUrlData.publicUrl,
          is_approved: false,
        });

      if (insertError) throw insertError;

      setFootprintNickname("");
      setFootprintPlace("");
      setFootprintStory("");
      setFootprintFile(null);
      const fileInput = document.getElementById("footprint-photo") as HTMLInputElement | null;
      if (fileInput) fileInput.value = "";

      alert("사진이 등록됐어요! 관리자 확인 후 여행자들의 섬 발자국에 공개됩니다. 📸");
    } catch (error) {
      console.error("섬 발자국 등록 오류:", error);
      alert("사진 등록에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setFootprintSubmitting(false);
    }
  }

  const filteredQnaQuestions = qnaQuestions.filter((item) => {
    const islandOk =
      selectedIsland === "백령도"
        ? !item.island || item.island === "백령도"
        : item.island === selectedIsland;
    const categoryOk = qnaCategory === "전체" || item.category === qnaCategory;
    const keyword = qnaSearch.trim().toLowerCase();
    const searchOk =
      !keyword ||
      String(item.title ?? "").toLowerCase().includes(keyword) ||
      String(item.content ?? "").toLowerCase().includes(keyword) ||
      String(item.answer ?? "").toLowerCase().includes(keyword);
    return islandOk && categoryOk && searchOk;
  });

  return (
    <main className="bg-white min-h-screen text-gray-900">




      {/* HEADER */}
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" className="font-bold text-gray-900 sm:text-xl">
      <span className="hidden sm:inline">백령·대청·소청도의 모든 정보</span>
      <span className="sm:hidden">섬 여행정보</span>
    </a>

    <div className="flex items-center gap-3">
    <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
      <a href="/" className="hover:text-sky-500">홈</a>
      <a href="#place-section" className="hover:text-sky-500">관광지</a>
      <a href="#food" className="hover:text-sky-500">맛집</a>
      <a href="#stay" className="hover:text-sky-500">숙소</a>
      {selectedIsland === "백령도" && (
        <a href="#qna" className="hover:text-sky-500">Q&A</a>
      )}
      <a href="/admin" className="hover:text-red-500">🔐 관리자</a>
      <a href="/about" className="hover:text-sky-500">운영자 소개</a>
    </nav>
    <div className="relative">
      <button type="button" onClick={() => setShowLanguageMenu(!showLanguageMenu)} className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 shadow-sm hover:border-sky-300" aria-expanded={showLanguageMenu}>
        <span>🌐</span><span>한국어</span><span className="text-xs">⌄</span>
      </button>
      {showLanguageMenu && (
        <div className="absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-2xl border border-gray-100 bg-white py-2 shadow-xl">
          <button type="button" onClick={() => setShowLanguageMenu(false)} className="block w-full px-4 py-2.5 text-left text-sm font-bold text-sky-600 hover:bg-sky-50">한국어</button>
          <button type="button" onClick={() => openTranslatedPage("en")} className="block w-full px-4 py-2.5 text-left text-sm font-bold text-gray-700 hover:bg-gray-50">English</button>
          <button type="button" onClick={() => openTranslatedPage("zh-CN")} className="block w-full px-4 py-2.5 text-left text-sm font-bold text-gray-700 hover:bg-gray-50">中文</button>
          <button type="button" onClick={() => openTranslatedPage("ja")} className="block w-full px-4 py-2.5 text-left text-sm font-bold text-gray-700 hover:bg-gray-50">日本語</button>
        </div>
      )}
    </div>
    </div>
  </div>
</header>
      {/* HERO */}
      <section className="relative isolate min-h-[500px] overflow-hidden bg-slate-950 md:min-h-[560px]">
        {/* 현재 사진 한 장만 배경으로 표시하고 3초마다 교체합니다. */}
        <div
          key={heroSlides[heroSlideIndex].src}
          className="absolute inset-0 bg-cover bg-center animate-[heroFade_1s_ease-in-out]"
          style={{
            backgroundImage: `url(${heroSlides[heroSlideIndex].src})`,
            backgroundSize: "cover",
            backgroundPosition: heroSlides[heroSlideIndex].position,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
          role="img"
          aria-label={heroSlides[heroSlideIndex].alt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center justify-between gap-10 px-6 pb-20 pt-16 md:min-h-[560px] md:px-8">
          <div className="max-w-3xl">
            <button
              type="button"
              onClick={() => setWeatherSlideIndex((weatherSlideIndex + 1) % weatherItems.length)}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-md lg:hidden"
              title="누르면 다음 섬 날씨가 표시됩니다"
            >
              <span className="text-xl">{weatherError ? "🌤️" : currentWeatherInfo.icon}</span>
              <span>{currentWeather?.name}</span>
              <strong>{weatherLoading || typeof currentWeather?.temperature !== "number" ? "--°" : `${currentWeather.temperature.toFixed(0)}°C`}</strong>
            </button>
            <p className="mb-3 text-sm font-black tracking-[0.16em] text-sky-100 md:text-base">
              BAENGNYEONG · DAECHEONG · SOCHEONG
            </p>
            <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-white drop-shadow-lg md:text-6xl">
              백령 · 대청 · 소청,
              <br />
              섬 여행을 한곳에서
            </h1>
            <p className="mt-6 max-w-2xl text-base font-bold leading-7 text-white drop-shadow md:text-lg">
              배편부터 관광지 · 맛집 · 숙박 · 교통 · 군인면회까지
              <br className="hidden sm:block" />
              현지 생활 경험을 담은 서해 섬 여행 가이드
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {(["백령도", "대청도", "소청도"] as const).map((island) => (
                <button
                  key={island}
                  type="button"
                  onClick={() => {
                    setSelectedIsland(island);
                    setSelectedCategory(island === "백령도" ? "전체" : "관광지");

                    window.setTimeout(() => {
                      document.getElementById("place-section")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 100);
                  }}
                  className={`relative z-20 rounded-full px-6 py-3 text-sm font-black shadow-lg transition hover:-translate-y-0.5 ${
                    selectedIsland === island
                      ? "bg-white text-slate-950"
                      : "border border-white/70 bg-black/40 text-white backdrop-blur-md hover:bg-black/55"
                  }`}
                >
                  {island} 보기
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setWeatherSlideIndex((weatherSlideIndex + 1) % weatherItems.length)}
            className="hidden w-64 shrink-0 rounded-3xl border border-white/30 bg-black/15 p-6 text-left text-white shadow-xl backdrop-blur-md transition hover:bg-black/25 lg:block lg:translate-x-16 xl:translate-x-24"
            title="누르면 다음 섬 날씨가 표시됩니다"
            aria-label={`${currentWeather?.name} 날씨, 다음 섬 날씨 보기`}
          >
            <p className="text-xs font-black tracking-[0.16em] text-sky-100">LIVE WEATHER</p>
            <p className="mt-3 text-base font-bold">오늘 {currentWeather?.name}</p>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-5xl">{weatherError ? "🌤️" : currentWeatherInfo.icon}</span>
              <div>
                <p className="text-3xl font-black">{weatherLoading || typeof currentWeather?.temperature !== "number" ? "--°" : `${currentWeather.temperature.toFixed(0)}°C`}</p>
                <p className="mt-1 text-sm text-white/75">{weatherError ? "날씨 확인 중" : currentWeatherInfo.label}</p>
              </div>
            </div>
            {typeof currentWeather?.windSpeed === "number" && <p className="mt-4 border-t border-white/20 pt-3 text-xs text-white/70">바람 {currentWeather.windSpeed.toFixed(1)}km/h · 30분마다 갱신</p>}
          </button>
        </div>
      </section>

      {/* 플랫폼형 빠른 정보 메뉴 */}
      <section className="relative z-20 -mt-6 md:-mt-10" id="island-content">
        <div className="mx-auto max-w-7xl px-4 md:px-5">
          <div className="rounded-[28px] border border-gray-100 bg-white/95 px-5 py-6 shadow-[0_12px_35px_rgba(15,23,42,0.12)] backdrop-blur">
            <div className="flex gap-5 overflow-x-auto pb-1 md:justify-between">
            {quickMenuItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleQuickMenuClick(item.key)}
                className="group min-w-[82px] text-center"
              >
                <div className="mx-auto flex h-[74px] w-[74px] items-center justify-center rounded-[26px] border border-gray-100 bg-white text-3xl shadow-[0_5px_18px_rgba(15,23,42,0.08)] transition group-hover:-translate-y-1">
                  {item.icon}
                </div>
                <div className="mt-3 whitespace-nowrap text-sm font-bold text-gray-600">{item.label}</div>
              </button>
            ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes heroFade {
          from { opacity: 0.25; transform: scale(1.015); }
          to { opacity: 1; transform: scale(1); }
        }
        .footprint-marquee-track {
          animation: footprint-marquee 42s linear infinite;
        }
        @keyframes footprint-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.375rem)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .footprint-marquee-track { animation: none; }
        }
        @media (max-width: 1023px) {
          #island-news [data-news-card] {
            width: calc((100% - 20px) / 2) !important;
            min-width: calc((100% - 20px) / 2) !important;
          }
        }
        @media (max-width: 639px) {
          #island-news [data-news-card] {
            width: 82vw !important;
            min-width: 82vw !important;
          }
        }
        #island-news [data-news-card] img {
          max-width: 100%;
        }
        #island-news div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* 지금 확인할 축제 · 행사 · 관내소식 */}
      <section id="island-news" className="mt-20 bg-[#f7f8fa] py-14 md:mt-28 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-2xl font-black text-gray-950 md:text-3xl">축제 · 행사 · 관내소식</h2>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {["전체", "축제", "행사", "관내소식"].map((label) => (
                  <button
                    type="button"
                    key={label}
                    onClick={() => {
                      setNewsFilter(label);
                      islandNewsSliderRef.current?.scrollTo({ left: 0, behavior: "smooth" });
                    }}
                    className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold transition ${
                      newsFilter === label
                        ? "bg-blue-600 text-white"
                        : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <span className="mx-1 hidden h-7 w-px bg-gray-200 sm:block" />
                <button
                  type="button"
                  onClick={() => moveIslandNews("left")}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl font-black text-gray-800 shadow-sm transition hover:bg-gray-100 active:scale-95"
                  aria-label="이전 포스터"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => moveIslandNews("right")}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl font-black text-gray-800 shadow-sm transition hover:bg-gray-100 active:scale-95"
                  aria-label="다음 포스터"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsNewsSliderPaused(true)}
            onMouseLeave={() => setIsNewsSliderPaused(false)}
            onTouchStart={() => setIsNewsSliderPaused(true)}
            onTouchEnd={() => setIsNewsSliderPaused(false)}
          >
            <div
              ref={islandNewsSliderRef}
              className="flex w-full snap-x snap-mandatory items-stretch overflow-x-auto scroll-smooth pb-6"
              style={{
                gap: "20px",
                scrollbarWidth: "none",
              }}
            >
            {filteredIslandNews.map((item) => (
              <article
                  data-news-card
                  key={`${item.title}-${item.date}`}
                  className="group flex-none snap-start"
                  style={{
                    width: "calc((100% - 60px) / 4)",
                    minWidth: "calc((100% - 60px) / 4)",
                  }}
                >
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    title={`${item.title} 포스터 크게 보기`}
                    className="block"
                  >
                  <div
                    className="relative overflow-hidden rounded-[22px] bg-white p-2 shadow-lg ring-1 ring-black/5"
                    style={{ height: "430px" }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-[16px] bg-white"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                    <div className="absolute left-3 top-3 flex gap-1.5">
                      <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-sky-700 shadow-sm">
                        {item.island}
                      </span>
                      <span className="rounded-full bg-gray-950/80 px-3 py-1 text-xs font-bold text-white">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  </a>
                </article>
            ))}
            </div>
          </div>

          <p className="mt-2 text-xs leading-5 text-gray-400">
            ※ 일정과 지원내용은 주최·주관기관 사정에 따라 변경될 수 있으니 방문 또는 신청 전 최신 공지를 확인해 주세요.
          </p>
        </div>
      </section>


{/* 홈 2차 개편: 핵심 여행 준비 메뉴 */}
<section id="ship-info" className="scroll-mt-24 max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
  <div className="mb-8">
    <p className="text-sky-600 font-extrabold text-sm mb-2">TRIP ESSENTIALS</p>
    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
      여행 준비, 여기서 빠르게
    </h2>
    <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl">
      처음 방문한다면 배편부터 확인하고, 목적에 맞는 여행정보로 바로 이동해 보세요.
    </p>
  </div>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
    <a
      href="https://island.haewoon.co.kr/"
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition"
    >
      <span className="text-3xl">🚢</span>
      <h3 className="font-black text-lg mt-4">배편 확인</h3>
      <p className="text-sm text-gray-500 mt-2">출항 전 운항 여부와 예매 확인</p>
      <span className="inline-block mt-4 text-sm font-bold text-sky-600">확인하기 →</span>
    </a>

    <button
      type="button"
      onClick={() => {
        setSelectedCategory("관광지");
        window.setTimeout(() => {
          document.getElementById("place-section")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }}
      className="text-left group rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition"
    >
      <span className="text-3xl">📍</span>
      <h3 className="font-black text-lg mt-4">관광지</h3>
      <p className="text-sm text-gray-500 mt-2">섬별 대표 명소와 현지 여행정보</p>
      <span className="inline-block mt-4 text-sm font-bold text-sky-600">둘러보기 →</span>
    </button>

    <button
      type="button"
      onClick={() => {
        setSelectedIsland("백령도");
        setSelectedCategory("군인면회");
        window.setTimeout(() => {
          document.getElementById("military-visit")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      }}
      className="text-left group rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition"
    >
      <span className="text-3xl">🪖</span>
      <h3 className="font-black text-lg mt-4">군인 면회</h3>
      <p className="text-sm text-gray-500 mt-2">배편·숙박·이동 준비 실전정보</p>
      <span className="inline-block mt-4 text-sm font-bold text-sky-600">정보 보기 →</span>
    </button>

    <button
      type="button"
      onClick={() => document.getElementById("qna")?.scrollIntoView({ behavior: "smooth" })}
      className="text-left group rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition"
    >
      <span className="text-3xl">💬</span>
      <h3 className="font-black text-lg mt-4">여행 Q&A</h3>
      <p className="text-sm text-gray-500 mt-2">여행 전 자주 묻는 질문 확인</p>
      <span className="inline-block mt-4 text-sm font-bold text-sky-600">질문 보기 →</span>
    </button>
  </div>
</section>

      {/* DAECHUNG & SOCHEONG QUICK GUIDE */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6 md:p-8">
          <p className="text-sm font-black tracking-[0.18em] text-indigo-600">ISLAND QUICK GUIDE</p>
          <h2 className="mt-2 text-3xl font-black text-gray-900">🏝️ 대청도·소청도도 함께 둘러보세요</h2>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            백령도와는 또 다른 풍경을 가진 섬들이에요. 배편과 현지 이동 여건을 먼저 확인하고 여유 있게 일정을 잡아보세요.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <button
              type="button"
              onClick={() => {
                setSelectedIsland("대청도");
                setSelectedCategory("관광지");
                setTimeout(() => document.getElementById("place-section")?.scrollIntoView({behavior:"smooth", block:"start"}), 100);
              }}
              className="rounded-3xl border border-indigo-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-gray-900">🌬️ 대청도</h3>
                <span className="font-black text-indigo-600">관광지 보기 →</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                서풍받이의 해안 절경과 옥죽동 해안사구처럼 바람과 지형이 만든 풍경을 중심으로 둘러보기 좋아요.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["#서풍받이","#옥죽동해안사구","#농여해변","#지질여행"].map((tag) => (
                  <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">{tag}</span>
                ))}
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedIsland("소청도");
                setSelectedCategory("관광지");
                setTimeout(() => document.getElementById("place-section")?.scrollIntoView({behavior:"smooth", block:"start"}), 100);
              }}
              className="rounded-3xl border border-cyan-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-gray-900">🌊 소청도</h3>
                <span className="font-black text-cyan-600">관광지 보기 →</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                작은 섬의 해안 풍경과 지질 자원을 천천히 만나는 여행에 잘 어울려요. 이동 전 현지 여건을 꼭 확인해 주세요.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["#분바위","#스트로마톨라이트","#소청도등대","#해안풍경"].map((tag) => (
                  <span key={tag} className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700">{tag}</span>
                ))}
              </div>
            </button>
          </div>

          <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            ⚓ 섬 지역은 기상과 선박 운항 상황에 따라 이동 일정이 달라질 수 있어요. 출발 전 최신 운항정보를 확인해 주세요.
          </div>
        </div>
      </section>

      {/* 섬별 맞춤 여행 플래너 */}
      {(
        <section id="ai-planner" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-16">
          <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-sky-50 shadow-sm">
            <div className="p-6 md:p-9">
              <p className="text-sm font-black tracking-[0.18em] text-violet-600">TRAVEL PLANNER</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
                ✨ {selectedIsland} 맞춤 여행 플래너
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-gray-600">
                여행 기간과 동행, 취향을 고르면 {selectedIsland} 일정 예시를 자동으로 만들어드려요.
                실제 이동 전에는 여객선 운항 여부와 현지 교통 상황을 꼭 확인해 주세요.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3">
                <span className="font-black text-pink-700">❤️ 내가 담은 {selectedIsland} 관광지 {myCourse.filter((item) => item.island === selectedIsland).length}곳</span>
                <span className="text-sm text-gray-600">관광지 카드에서 장소를 담은 뒤, 아래 맞춤 일정과 함께 비교해 보세요.</span>
                <button
                  type="button"
                  onClick={() => document.getElementById("my-course")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className="ml-auto rounded-full bg-white px-4 py-2 text-sm font-black text-pink-700 shadow-sm hover:bg-pink-100"
                >
                  담은 장소 보기 ↓
                </button>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-black text-gray-700">여행 기간</span>
                  <select
                    value={plannerDuration}
                    onChange={(e) => {
                      setPlannerDuration(e.target.value);
                      setPlannerResult(null);
                    }}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-bold text-gray-800 outline-none focus:border-violet-400"
                  >
                    {["당일", "1박 2일", "2박 3일"].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-gray-700">동행</span>
                  <select
                    value={plannerCompanion}
                    onChange={(e) => {
                      setPlannerCompanion(e.target.value);
                      setPlannerResult(null);
                    }}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-bold text-gray-800 outline-none focus:border-violet-400"
                  >
                    {["가족", "아이 동반", "부모님", "연인·친구", "혼자", "군인 면회"].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-gray-700">여행 테마</span>
                  <select
                    value={plannerTheme}
                    onChange={(e) => {
                      setPlannerTheme(e.target.value);
                      setPlannerResult(null);
                    }}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-bold text-gray-800 outline-none focus:border-violet-400"
                  >
                    {["자연·사진", "아이와 가족", "군인 면회", "역사·안보", "맛집·카페", "힐링·느긋하게"].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-gray-700">이동수단</span>
                  <select
                    value={plannerTransport}
                    onChange={(e) => {
                      setPlannerTransport(e.target.value);
                      setPlannerResult(null);
                    }}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-bold text-gray-800 outline-none focus:border-violet-400"
                  >
                    {["렌터카·자가용", "택시", "도보·대중교통"].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-gray-700">계절</span>
                  <select
                    value={plannerSeason}
                    onChange={(e) => {
                      setPlannerSeason(e.target.value);
                      setPlannerResult(null);
                    }}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-bold text-gray-800 outline-none focus:border-violet-400"
                  >
                    {["봄", "여름", "가을", "겨울"].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                type="button"
                onClick={makeTravelPlan}
                className="mt-6 w-full rounded-2xl bg-violet-600 px-6 py-4 text-lg font-black text-white shadow-md transition hover:bg-violet-700 md:w-auto"
              >
                ✨ 내 여행 일정 만들기
              </button>

              {plannerResult && (
                <div id="planner-result" className="scroll-mt-24 mt-9">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-sm font-black text-violet-600">맞춤 일정 결과</p>
                      <h3 className="mt-1 text-2xl font-black text-gray-900">
                        {plannerDuration} · {plannerCompanion} · {plannerTheme}
                      </h3>
                    </div>
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-600 shadow-sm">
                      {plannerTransport} · {plannerSeason}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-5">
                    {plannerResult.map((day, dayIndex) => (
                      <article key={`${day.title}-${dayIndex}`} className="rounded-3xl border border-violet-100 bg-white p-5 md:p-6 shadow-sm">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-black text-white">
                            {dayIndex + 1}
                          </span>
                          <h4 className="text-xl font-black text-gray-900">
                            {dayIndex + 1}일차 · {day.title}
                          </h4>
                        </div>

                        <div className="mt-5 space-y-3">
                          {day.schedule.map((item: any, itemIndex: number) => (
                            <div key={`${item.time}-${item.place}-${itemIndex}`} className="rounded-2xl bg-gray-50 p-4">
                              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                                <span className="shrink-0 font-black text-violet-600">{item.time}</span>
                                <strong className="text-gray-900">{item.place}</strong>
                              </div>
                              <p className="mt-2 text-sm leading-6 text-gray-600">{item.detail}</p>
                            </div>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="mt-5 rounded-3xl border border-amber-100 bg-amber-50 p-5">
                    <h4 className="font-black text-amber-900">💡 여행 전 확인하세요</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-900">
                      {plannerTips.map((tip, index) => (
                        <li key={`${tip}-${index}`}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div id="my-course" className="scroll-mt-24 mt-10 border-t border-violet-100 pt-8">
                <p className="font-bold text-pink-700">관광지 담기와 맞춤 일정 짜기를 한곳에서</p>
                <h3 className="mt-2 text-2xl font-black text-gray-900 md:text-3xl">❤️ 나만의 여행코스</h3>
                <p className="mt-3 leading-7 text-gray-600">
                  관광지 카드에서 담은 장소를 순서대로 확인하고, 위에서 만든 맞춤 일정과 함께 나만의 코스를 완성해 보세요.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl bg-violet-50 p-4">
                  <button
                    type="button"
                    onClick={makeOptimizedCourse}
                    className="rounded-2xl bg-gray-950 px-5 py-3 font-black text-white shadow-sm transition hover:bg-violet-700"
                  >
                    🧭 담은 장소 최단 동선 만들기
                  </button>
                  <span className="text-sm leading-6 text-gray-600">현재 선택한 이동수단({plannerTransport}) 기준 예상시간을 계산해요.</span>
                </div>

                {optimizedCourse?.island === selectedIsland && (
                  <div id="optimized-course" className="scroll-mt-24 mt-6 rounded-3xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-black text-emerald-700">추천 최단 동선 · 예상시간</p>
                        <h4 className="mt-1 text-xl font-black text-gray-900">{selectedIsland} {optimizedCourse.stops.length}곳 이동코스</h4>
                      </div>
                      <div className="rounded-2xl bg-white px-4 py-3 text-right shadow-sm">
                        <p className="text-xs font-bold text-gray-500">예상 총 소요시간</p>
                        <strong className="text-lg text-emerald-700">
                          약 {Math.floor((optimizedCourse.totalTravelMinutes + optimizedCourse.totalVisitMinutes) / 60)}시간 {(optimizedCourse.totalTravelMinutes + optimizedCourse.totalVisitMinutes) % 60}분
                        </strong>
                        <p className="mt-1 text-xs text-gray-500">이동 {optimizedCourse.totalTravelMinutes}분 + 관람 {optimizedCourse.totalVisitMinutes}분</p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {optimizedCourse.stops.map((stop: any) => (
                        <div key={`${stop.order}-${stop.name}`} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-black text-white">{stop.order}</span>
                          <div className="min-w-0 flex-1">
                            <strong className="text-gray-900">{stop.name}</strong>
                            <div className="mt-2 flex flex-wrap gap-2 text-xs font-bold">
                              <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">🚗 {stop.order === 1 ? "항구·출발지에서" : "이전 장소에서"} 약 {stop.moveMinutes}분</span>
                              <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">📸 권장 관람 {stop.visitMinutes}분</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(selectedIsland === "백령도" ? "용기포항 백령도" : selectedIsland === "대청도" ? "선진포항 대청도" : "예동포구 소청도")}&destination=${encodeURIComponent(`${optimizedCourse.stops[optimizedCourse.stops.length - 1]?.name} ${selectedIsland}`)}&waypoints=${encodeURIComponent(optimizedCourse.stops.slice(0, -1).map((stop: any) => `${stop.name} ${selectedIsland}`).join("|"))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 font-black text-white transition hover:bg-emerald-800 sm:w-auto"
                    >
                      📍 지도에서 전체 동선 확인
                    </a>
                    <p className="mt-4 text-xs leading-5 text-emerald-900">※ 섬 내 일반적인 이동거리와 선택한 이동수단을 기준으로 계산한 예상시간입니다. 실제 시간은 도로·날씨·물때·현지 교통 상황에 따라 달라질 수 있습니다.</p>
                  </div>
                )}
                <div
                  className="mt-6 overflow-hidden rounded-3xl border border-pink-100 bg-white p-4 md:p-6"
                  onClick={() => {
                    window.setTimeout(() => {
                      const savedCourse = localStorage.getItem("myCourse");
                      setMyCourse(savedCourse ? JSON.parse(savedCourse) : []);
                      setOptimizedCourse(null);
                    }, 0);
                  }}
                >
                  <MyCourse key={myCourse.map((item) => item.name).join("|")} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* 섬별 실시간 인기 관광지 */}
{selectedIsland === "백령도" && popularPlaces.length > 0 && (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
    <h2 className="text-4xl font-bold text-center mb-10">
      🏆 백령도 실시간 인기 관광지 TOP 10
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
      {popularPlaces.map((place, index) => (
        <div key={place.name} className="bg-white rounded-3xl shadow-lg p-5 text-center border hover:shadow-xl transition">
          <div className="text-3xl font-extrabold mb-3">
            {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}위`}
          </div>
          <h3 className="font-bold text-lg mb-2">{place.name}</h3>
          <p className="text-sm text-gray-500">👀 {place.view} · ❤️ {place.like}</p>
        </div>
      ))}
    </div>
  </section>
)}

{selectedIsland === "대청도" && (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
    <h2 className="text-4xl font-bold text-center mb-10">
      🏆 대청도 실시간 인기 관광지 TOP 10
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
      {filteredPlaces
        .filter((place) => place.category === "관광지")
        .slice()
        .sort((a, b) => {
          const av = placeViews.find((v) => v.place_name === a.name)?.view_count || 0;
          const bv = placeViews.find((v) => v.place_name === b.name)?.view_count || 0;
          return bv - av;
        })
        .slice(0, 10)
        .map((place, index) => (
          <div key={place.name} className="bg-white rounded-3xl shadow-lg p-5 text-center border hover:shadow-xl transition">
            <div className="text-3xl font-extrabold mb-3">
              {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}위`}
            </div>
            <h3 className="font-bold text-lg mb-2">{place.name}</h3>
            <p className="text-sm text-gray-500">
              👀 {placeViews.find((v) => v.place_name === place.name)?.view_count || 0}
            </p>
          </div>
        ))}
    </div>
  </section>
)}

{selectedIsland === "소청도" && (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
    <h2 className="text-4xl font-bold text-center mb-10">
      🏆 소청도 실시간 인기 관광지 TOP 3
    </h2>
    <div className="grid md:grid-cols-3 gap-5">
      {filteredPlaces
        .filter((place) => place.category === "관광지")
        .slice()
        .sort((a, b) => {
          const av = placeViews.find((v) => v.place_name === a.name)?.view_count || 0;
          const bv = placeViews.find((v) => v.place_name === b.name)?.view_count || 0;
          return bv - av;
        })
        .slice(0, 3)
        .map((place, index) => (
          <div key={place.name} className="bg-white rounded-3xl shadow-lg p-5 text-center border hover:shadow-xl transition">
            <div className="text-3xl font-extrabold mb-3">
              {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
            </div>
            <h3 className="font-bold text-lg mb-2">{place.name}</h3>
            <p className="text-sm text-gray-500">
              👀 {placeViews.find((v) => v.place_name === place.name)?.view_count || 0}
            </p>
          </div>
        ))}
    </div>
  </section>
)}


<section className="max-w-7xl mx-auto px-6 pb-12">
  {selectedIsland === "백령도" && (
    <div className="rounded-3xl bg-sky-50 p-7 md:p-9 ring-1 ring-sky-100">
      <p className="font-bold text-sky-600 mb-2">대한민국 서해 최북단 섬 여행</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">🏝️ 백령도 여행</h2>
      <p className="mt-4 leading-8 text-gray-700">
        두무진·사곶해변·콩돌해안·심청각 등 자연과 안보·역사 이야기가 함께 있는 백령도의 관광지를 둘러보세요.
        아래에는 백령도 관광지와 여행에 필요한 정보를 이어서 확인할 수 있어요.
      </p>
    </div>
  )}

  {selectedIsland === "대청도" && (
    <div className="rounded-3xl bg-emerald-50 p-7 md:p-9 ring-1 ring-emerald-100">
      <p className="font-bold text-emerald-600 mb-2">모래사구와 해안절경을 만나는 섬</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">🏝️ 대청도 여행</h2>
      <p className="mt-4 leading-8 text-gray-700">
        옥죽동 해안사구·서풍받이·농여해변·삼각산 등 대청도만의 다양한 자연경관을 만나보세요.
        아래에는 대청도 관광지와 맛집·숙박·낚시배 정보를 이어서 확인할 수 있어요.
      </p>
    </div>
  )}

  {selectedIsland === "소청도" && (
    <div className="rounded-3xl bg-indigo-50 p-7 md:p-9 ring-1 ring-indigo-100">
      <p className="font-bold text-indigo-600 mb-2">등대와 지질경관이 인상적인 작은 섬</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">🏝️ 소청도 여행</h2>
      <p className="mt-4 leading-8 text-gray-700">
        소청등대·분바위·스트로마톨라이트를 중심으로 소청도의 바다 풍경과 독특한 지질경관을 둘러보세요.
        아래에는 소청도 관광지와 맛집·숙박 정보를 이어서 확인할 수 있어요.
      </p>
    </div>
  )}
</section>

      {(selectedIsland === "소청도" && ["맛집", "숙박"].includes(selectedCategory)) && (
        <section id="island-directory" className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {selectedIsland} {selectedCategory} 안내
            </h2>
            <p className="mt-3 text-gray-500">
              현지 관광 안내자료에 기재된 정보를 정리했습니다. 방문 전 전화로 운영 여부를 확인해 주세요.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {islandDirectory.map(([name, owner, phone]) => (
              <div key={`${selectedIsland}-${selectedCategory}-${name}`} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                      {selectedCategory}
                    </span>
                    <h3 className="mt-3 text-xl font-extrabold text-gray-900">{name}</h3>
                    <p className="mt-2 text-sm text-gray-500">대표자 {owner}</p>
                  </div>
                  <span className="text-2xl">
                    {selectedCategory === "맛집" ? "🍜" : selectedCategory === "숙박" ? "🏨" : "🎣"}
                  </span>
                </div>
                <a
                  href={`tel:${phone.replace(/-/g, "")}`}
                  className="mt-5 block rounded-xl bg-gray-900 px-4 py-3 text-center font-bold text-white hover:bg-blue-600 transition"
                >
                  ☎ {phone}
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PLACE CARDS */}
      <div className="text-center mb-14">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          🔥 가장 많이 찾는 {selectedIsland} 명소
        </h2>

        <p className="text-gray-500 text-lg">
          {selectedIsland === "백령도"
            ? "백령도를 처음 방문한다면 꼭 가봐야 할 대표 관광지"
            : selectedIsland === "대청도"
            ? "대청도를 처음 방문한다면 꼭 가봐야 할 대표 관광지"
            : "소청도를 처음 방문한다면 꼭 가봐야 할 대표 관광지"}
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
            className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20"
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
  unoptimized
  className="object-cover group-hover:scale-105 transition-transform duration-700"
/>
                  </div>

                  <div className="p-4 sm:p-6 flex flex-col flex-1">

                    <div className="flex flex-wrap items-center gap-2 mb-4">

                      <span className="bg-blue-500 text-white text-[11px] px-3 py-1 rounded-full font-medium">
                        {place.island}
                      </span>

                      <span className="bg-gray-100 text-gray-700 text-[11px] px-3 py-1 rounded-full font-medium">
                        {place.category}
                      </span>

                      {place.name === "두무진" && (
                        <span className="bg-violet-100 text-violet-700 text-[11px] px-3 py-1 rounded-full font-bold">
                          🏛️ 명승 제8호
                        </span>
                      )}

                      {place.name === "사곶해변" && (
                        <span className="bg-green-100 text-green-700 text-[11px] px-3 py-1 rounded-full font-bold">
                          🌿 천연기념물 제391호
                        </span>
                      )}

                      {place.name === "콩돌해안" && (
                        <span className="bg-green-100 text-green-700 text-[11px] px-3 py-1 rounded-full font-bold">
                          🌿 천연기념물 제392호
                        </span>
                      )}

                      {["분바위", "스트로마톨라이트"].includes(place.name) && (
                        <span className="bg-green-100 text-green-700 text-[11px] px-3 py-1 rounded-full font-bold">
                          🌿 천연기념물 제508호
                        </span>
                      )}

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
                        "서풍받이",
                        "옥죽동 해안사구",
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

                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {place.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px] mb-3 sm:mb-4">
                      {place.description}
                    </p>
                    <div className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-5 sm:leading-6">
  {place.tip ? `추천 포인트: ${place.tip}` : "추천 포인트: 현지에서 꼭 둘러볼 만한 명소예요."}
</div>
                    {place.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span>📍</span>
                        <span>{place.location}</span>
                      </div>
                    )}


<div className="mt-auto pt-4 sm:pt-5 space-y-2 sm:space-y-3">
  <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-400">
    <span>👀 {placeViews.find((item) => item.place_name === place.name)?.view_count || 0}</span>
    <span>❤️ {placeLikes.find((item) => item.place_name === place.name)?.like_count || 0}</span>
  </div>

  {place.link && place.link.startsWith("/place/") && (
    <Link
      href={place.encyclopedia || place.link}
      onClick={() => handlePlaceView(place.name)}
      className="inline-flex items-center justify-center w-full bg-sky-600 text-white py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-sky-700 transition"
    >
      📖 백과사전 보기
    </Link>
  )}

  <button
    type="button"
    onClick={() => handleAddCourse(place)}
    disabled={myCourse.some((item) => item.name === place.name)}
    className={`w-full rounded-xl py-2.5 text-sm font-semibold transition sm:rounded-2xl sm:py-3 sm:text-base ${
      myCourse.some((item) => item.name === place.name)
        ? "cursor-default bg-emerald-100 text-emerald-700"
        : "bg-violet-600 text-white hover:bg-violet-700"
    }`}
  >
    {myCourse.some((item) => item.name === place.name) ? "✅ 일정에 담김" : "🗓️ 일정에 담기"}
  </button>

  <button
    onClick={() => handlePlaceLike(place.name)}
    className="w-full bg-rose-500 text-white py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-rose-600 transition"
  >
    ❤️ 좋아요
  </button>

  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      ({
        "두무진": "두무진 인천 옹진군 백령면 연화리",
        "심청각": "심청각 인천 옹진군 백령면 백령로316번길 109-117",
        "농여해변": "농여해변 인천 옹진군 대청면 대청리 469-25",
        "나이테바위": "나이테바위 농여해변 인천 옹진군 대청면 대청리 469-25",
        "독바위": "독바위해변 인천 옹진군 대청면 대청리",
        "검은낭 해안": "검은낭갯바위 인천 옹진군 대청면 대청리",
        "소청도 천주교회·김대건 신부상": "예동공소 김대건 신부 동상 소청도 인천 옹진군 대청면",
        "예동포구": "예동포구 소청도 인천 옹진군 대청면",
        "노화동포구": "노화동포구 소청도 인천 옹진군 대청면",
        "소청도 주상절리": "소청도 주상절리 인천 옹진군 대청면",
        "탑동포구·인사하는 바위": "탑동포구 인사하는 바위 소청도 인천 옹진군 대청면"
      } as Record<string, string>)[place.name] || `${place.name} ${place.island} 인천 옹진군`
    )}`}
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
        {selectedIsland === "백령도" && (selectedCategory === "전체" || selectedCategory === "관광지") && (
          <section id="hidden-places" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
            <div className="mb-6">
              <p className="text-sm font-black tracking-[0.18em] text-emerald-600">HIDDEN PLACES</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900">🗺️ 백령도 숨은 관광명소</h2>
              <p className="mt-2 text-gray-600">대표 관광지 다음으로 천천히 둘러보기 좋은 백령도의 또 다른 장소들이에요.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["⛪", "중화동교회", "백령도의 오래된 역사 교회", "/images/junghwadong.jpg"],
                ["🎭", "백령심청효 테마파크(연꽃마을)", "심청전 설화를 테마로 한 관광공간", "/images/simcheong.jpg"],
                ["🌲", "400년 노송", "백령도를 오랫동안 지켜온 상징적인 노송", "/images/nosong.jpg"],
                ["🪨", "남포리 습곡구조", "독특한 지층 구조를 볼 수 있는 지질명소", "/images/seupgok.jpg"],
                ["🌋", "감람암 포획 현무암 분포지", "백령도의 지질 이야기를 만날 수 있는 장소", "/images/basalt.jpg"],
                ["🦭", "물범바위", "점박이물범 생태와 연결되는 해안 명소", "/images/seal.jpg"],
              ].map(([icon, name, desc, image]) => (
                <a key={name} href={image} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-3xl">{icon}</div>
                  <h3 className="mt-4 text-xl font-black text-gray-900 group-hover:text-emerald-600">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
                  <p className="mt-4 text-xs font-bold text-emerald-600">사진 크게 보기 →</p>
                </a>
              ))}
            </div>
          </section>
        )}

{/* TRAVELER FOOTPRINTS */}
<section id="traveler-footprints" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
  <div className="overflow-hidden rounded-[2rem] border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 shadow-sm">
    <div className="p-6 md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-extrabold tracking-[0.16em] text-amber-600">TRAVELER PHOTO STORY</p>
          <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">📸 여행자들의 섬 발자국</h2>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            백령·대청·소청에서 만난 특별한 순간을 남겨주세요.
            당신의 사진 한 장이 다음 여행자의 설렘이 됩니다.
          </p>
        </div>
        <div className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-gray-600 shadow-sm ring-1 ring-black/5">
          관리자 확인 후 공개돼요 ✓
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
        <form onSubmit={handleFootprintSubmit} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5 md:p-6">
          <h3 className="text-xl font-black text-gray-900">나의 섬 발자국 남기기</h3>
          <p className="mt-1 text-sm text-gray-500">직접 찍은 여행 사진과 짧은 이야기를 들려주세요.</p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {["백령도", "대청도", "소청도"].map((island) => (
              <button
                key={island}
                type="button"
                onClick={() => setFootprintIsland(island)}
                className={`rounded-xl px-3 py-2.5 text-sm font-extrabold transition ${
                  footprintIsland === island
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {island}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            <input
              value={footprintPlace}
              onChange={(e) => setFootprintPlace(e.target.value)}
              maxLength={50}
              placeholder="장소명 (예: 두무진, 서풍받이)"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-400"
            />
            <input
              value={footprintNickname}
              onChange={(e) => setFootprintNickname(e.target.value)}
              maxLength={20}
              placeholder="닉네임"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-400"
            />
            <textarea
              value={footprintStory}
              onChange={(e) => setFootprintStory(e.target.value)}
              maxLength={200}
              rows={3}
              placeholder="이 순간에 대한 한 줄 이야기 (선택)"
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-400"
            />
            <label htmlFor="footprint-photo" className="block cursor-pointer rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-5 text-center transition hover:border-amber-300 hover:bg-amber-50">
              <span className="block text-2xl">🖼️</span>
              <span className="mt-1 block text-sm font-extrabold text-gray-700">
                {footprintFile ? footprintFile.name : "사진 선택하기"}
              </span>
              <span className="mt-1 block text-xs text-gray-400">JPG · PNG · WEBP / 최대 5MB</span>
            </label>
            <input
              id="footprint-photo"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => setFootprintFile(e.target.files?.[0] ?? null)}
              className="hidden"
            />
          </div>

          <button
            type="submit"
            disabled={footprintSubmitting}
            className="mt-4 w-full rounded-2xl bg-amber-500 px-5 py-3.5 font-black text-white shadow-sm transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {footprintSubmitting ? "사진 등록 중..." : "📷 내 발자국 남기기"}
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-gray-400">
            직접 촬영한 사진만 올려주세요. 등록된 사진은 관리자 확인 후 공개됩니다.
          </p>
        </form>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-gray-900">여행자들이 남긴 순간</h3>
              <p className="mt-1 text-sm text-gray-500">세 섬에서 이어지는 여행자들의 사진 기록</p>
            </div>
            {footprints.length > 0 && (
              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-gray-500 shadow-sm">
                {footprints.length}개의 발자국
              </span>
            )}
          </div>

          {footprintLoading ? (
            <div className="rounded-3xl bg-white p-10 text-center text-sm text-gray-500 shadow-sm">사진을 불러오는 중...</div>
          ) : footprints.length === 0 ? (
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-white/80 p-8 text-center">
              <div className="text-5xl">🏝️</div>
              <p className="mt-4 text-lg font-black text-gray-800">첫 번째 섬 발자국을 기다리고 있어요</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                백령·대청·소청에서 찍은 당신의 특별한 순간을 가장 먼저 남겨주세요.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {footprints.slice(0, 12).map((item) => (
                <article key={item.id} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                  <a href={item.image_url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={`${item.island} ${item.place_name} 여행자 사진`}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </a>
                  <div className="p-3 md:p-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-extrabold text-sky-700">{item.island}</span>
                      <span className="text-xs font-black text-gray-800">{item.place_name}</span>
                    </div>
                    {item.story && <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-600">{item.story}</p>}
                    <p className="mt-2 text-[11px] font-bold text-gray-400">by {item.nickname}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</section>



        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
  <div className="grid md:grid-cols-2 gap-8">

    {/* 옹진군청 */}
    <a
      href="https://www.ongjin.go.kr"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-3xl bg-white p-8 shadow hover:shadow-xl transition"
    >
      <div className="text-5xl">🏛</div>

      <h2 className="mt-5 text-3xl font-black">
        옹진군청
      </h2>

      <p className="mt-4 text-gray-600 leading-8">
        관광정보, 축제, 행정서비스,
        공지사항 등
        백령도의 공식 정보를
        확인할 수 있습니다.
      </p>

      <div className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-white font-bold">
        바로가기 →
      </div>
    </a>

    {/* 옹진자연몰 */}
    <a
      href="https://www.ongjinmall.co.kr"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-3xl bg-white p-8 shadow hover:shadow-xl transition"
    >
      <div className="text-5xl">🛍</div>

      <h2 className="mt-5 text-3xl font-black">
        옹진자연몰
      </h2>

      <p className="mt-4 text-gray-600 leading-8">
        백령도를 비롯한
        옹진군 주민들이 직접 판매하는
        특산품 쇼핑몰입니다.
      </p>

      <div className="mt-6 inline-block rounded-full bg-green-600 px-6 py-3 text-white font-bold">
        특산품 보러가기 →
      </div>
    </a>

  </div>
</section>
 {selectedIsland === "백령도" && (
  <>
{/* PHOTO GALLERY */}
<section id="gallery" className={selectedIsland === "백령도" ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-20" : "hidden"}>
  <div className="rounded-[2rem] bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 md:p-10 shadow-sm border border-violet-100">
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-bold text-violet-600">백령도 풍경사진</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
          📸 백령도 사진첩 한눈에 보기
        </h2>
        <p className="mt-3 leading-7 text-gray-600">
          백령도의 바다·해안·관광지 풍경을 사진으로 한눈에 감상해 보세요.
          사진을 누르면 크게 볼 수 있어요.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowGallery(!showGallery)}
        className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-violet-600"
      >
        {showGallery ? "사진첩 닫기 ▲" : "사진첩 전체보기 ▼"}
      </button>
    </div>

    {showGallery && (
      <div className="mt-8">
        <div className="mb-6 rounded-2xl bg-white/80 p-4 text-sm leading-6 text-gray-600">
          📷 사진작가 윤학진님, 옹진군 외 사진 협찬
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 60 }, (_, i) => `/images/gallery${i + 1}.jpg`).map(
            (image, index) => (
              <a
                key={index}
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={image}
                  alt={`백령도 사진 ${index + 1}`}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-10 text-white">
                  <p className="text-sm font-bold">백령도 풍경 #{index + 1}</p>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    )}
  </div>
</section>
      {/* STAY LIST SECTION */}
      <section
        id="stay"
        className={selectedIsland === "백령도" ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-20" : "hidden"}
      >
        {(selectedCategory === "전체" ||
          selectedCategory === "숙박") && (
          <>
            <div className="rounded-[2rem] bg-gradient-to-br from-sky-50 to-blue-50 p-6 md:p-10 shadow-sm border border-sky-100">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-bold text-sky-600">백령도 숙박정보</p>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                    🏨 숙박업소 한눈에 보기
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    숙박업소 이름·주소·전화번호를 확인하고 바로 전화할 수 있어요.
                    예약 가능 여부와 요금은 방문 전 숙소에 직접 확인해 주세요.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["🚢 항구 이동거리 확인","👨‍👩‍👧 가족·단체 객실 문의","🍳 조식 여부 확인","🚗 주차 가능 여부","🌊 결항 시 일정 문의"].map((tip) => (
                      <span key={tip} className="rounded-full border border-sky-100 bg-white px-3 py-2 text-xs font-bold text-sky-700 shadow-sm">{tip}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-5 text-gray-500">
                    💡 섬 여행은 배편 일정이 달라질 수 있어 예약 전 취소·변경 기준도 함께 확인하면 좋아요.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowStay(!showStay)}
                  className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-600"
                >
                  {showStay ? "숙박업소 닫기 ▲" : "숙박업소 전체보기 ▼"}
                </button>
              </div>

              {showStay && (
                <div className="mt-8">
                  <div className="rounded-3xl bg-white p-5 md:p-7 shadow-lg">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                          🔎
                        </span>
                        <input
                          type="text"
                          placeholder="숙소명, 주소, 전화번호로 검색"
                          value={staySearch}
                          onChange={(e) => setStaySearch(e.target.value)}
                          className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                        />
                      </div>

                      {staySearch && (
                        <button
                          type="button"
                          onClick={() => setStaySearch("")}
                          className="rounded-2xl bg-gray-100 px-5 py-4 font-bold text-gray-700 transition hover:bg-gray-200"
                        >
                          검색 초기화
                        </button>
                      )}
                    </div>

                    <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                      💡 휴대폰에서는 전화번호를 누르면 바로 전화 연결할 수 있습니다.
                      주소·연락처는 변경될 수 있으니 예약 전 다시 확인해 주세요.
                    </div>

                    <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-100">
                      <table className="w-full min-w-[720px] text-left border-collapse">
                        <thead className="bg-gray-900 text-white">
                          <tr>
                            <th className="p-4 text-base">숙박명</th>
                            <th className="p-4 text-base">소재지</th>
                            <th className="p-4 text-base">전화번호</th>
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
                            .filter((stay) => {
                              const keyword = staySearch
                                .trim()
                                .toLowerCase()
                                .replace(/\s/g, "");
                              if (!keyword) return true;

                              return stay
                                .join(" ")
                                .toLowerCase()
                                .replace(/\s/g, "")
                                .includes(keyword);
                            })
                            .sort((a, b) => a[0].localeCompare(b[0], "ko"))
                            .map((stay, index) => (
                              <tr
                                key={`${stay[0]}-${index}`}
                                className="border-t border-gray-100 transition hover:bg-sky-50"
                              >
                                <td className="p-4 font-extrabold text-gray-900">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span>{stay[0]}</span>
                                    {stayPhotos[stay[0]]?.length > 0 && (
                                      <details className="relative">
                                        <summary className="cursor-pointer list-none shrink-0 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 hover:bg-sky-100">
                                          📸 사진보기 ({stayPhotos[stay[0]].length}장)
                                        </summary>
                                        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                          {stayPhotos[stay[0]].map((photo, photoIndex) => (
                                            <a
                                              key={photo}
                                              href={photo}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md"
                                              aria-label={`${stay[0]} 사진 ${photoIndex + 1} 새 창에서 보기`}
                                            >
                                              <Image
                                                src={photo}
                                                alt={`${stay[0]} 사진 ${photoIndex + 1}`}
                                                width={420}
                                                height={280}
                                                className="h-40 w-full object-cover"
                                              />
                                              <div className="px-3 py-2 text-center text-xs font-bold text-sky-700">
                                                사진 {photoIndex + 1} 크게보기
                                              </div>
                                            </a>
                                          ))}
                                        </div>
                                      </details>
                                    )}
                                  </div>
                                </td>

                                <td className="p-4 text-gray-600">
                                  {stay[1]}
                                </td>

                                <td className="p-4">
                                  <a
                                    href={`tel:${stay[2]}`}
                                    className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 font-bold text-white transition hover:bg-sky-700"
                                  >
                                    📞 {stay[2]}
                                  </a>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </section>

      {/* FOOD SECTION */}
      <section
        id="food"
        className={selectedIsland === "백령도" ? "max-w-7xl mx-auto px-6 pb-10" : "hidden"}
      >

        {(selectedCategory === "전체" ||
          selectedCategory === "맛집") && (

            <>
              <div className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-amber-50 p-6 md:p-10 mb-6 border border-orange-100">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="font-bold text-orange-600">백령도 음식정보</p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                      🍜 음식점 한눈에 보기
                    </h2>
                    <p className="mt-3 leading-7 text-gray-600">
                      음식점 이름과 대표메뉴를 검색하고 전화번호를 눌러 바로 문의할 수 있어요.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["🍚 아침식사 문의","🥡 포장 가능 여부","👨‍👩‍👧 가족·단체 식사","🐟 해산물·회","🍜 간단한 한 끼","☕ 카페·휴식"].map((tip) => (
                        <span key={tip} className="rounded-full border border-orange-100 bg-white px-3 py-2 text-xs font-bold text-orange-700 shadow-sm">{tip}</span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs leading-5 text-gray-500">
                      💡 영업시간·휴무·메뉴는 계절과 업소 사정에 따라 달라질 수 있으니 방문 전 전화 확인을 권장해요.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowFood(!showFood)}
                    className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-orange-600"
                  >
                    {showFood ? "음식점 닫기 ▲" : "음식점 전체보기 ▼"}
                  </button>
                </div>
              </div>

              {showFood && (
                <div className="bg-white rounded-3xl shadow-lg p-10 text-center text-gray-600">
                  <div className="overflow-x-auto bg-white rounded-3xl shadow-lg">
                    <div className="mb-6">
                      <div className="flex flex-col gap-3 md:flex-row">
                        <input
                          type="text"
                          placeholder="🔎 음식점명 · 대표메뉴 · 전화번호 검색"
                          value={foodSearch}
                          onChange={(e) => setFoodSearch(e.target.value)}
                          className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 shadow-sm outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                        />
                        {foodSearch && (
                          <button
                            type="button"
                            onClick={() => setFoodSearch("")}
                            className="rounded-2xl bg-gray-100 px-5 py-4 font-bold text-gray-700 hover:bg-gray-200"
                          >
                            검색 초기화
                          </button>
                        )}
                      </div>
                      <p className="mt-3 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                        💡 영업시간과 휴무일은 달라질 수 있으니 방문 전 전화 확인을 추천합니다.
                      </p>
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
                          ["돈키호테", "양식맛집", "032-836-8292"],
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
                          .filter((food) => {
                            const keyword = foodSearch
                              .trim()
                              .toLowerCase()
                              .replace(/\s/g, "");

                            if (!keyword) return true;

                            return food
                              .join(" ")
                              .toLowerCase()
                              .replace(/\s/g, "")
                              .includes(keyword);
                          })
                          .sort((a, b) => a[0].localeCompare(b[0], "ko"))
                          .map((food, index) => (
                            <Fragment key={food[0]}>
                            <tr
                              key={index}
                              className="border-t hover:bg-gray-50"
                            >

                              <td className="p-4 font-semibold">
                                <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">

                                  {
  [
    "백령면옥",
    "가을면옥",
    "사곶냉면",
    "시골칼국수&냉면",
    "신화평양냉면",
  ].includes(food[0]) ? (
    <Link
      href="/food/naengmyeon"
      className="text-sky-600 font-bold hover:underline"
    >
      {food[0]}
    </Link>
  ) : (
    <span>{food[0]}</span>
  )
}

                                  {restaurantPhotos[food[0]]?.length > 0 && (
                                    <a
                                      href={restaurantPhotos[food[0]][0]}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="shrink-0 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 hover:bg-sky-100"
                                      aria-label={`${food[0]} 사진 새 창에서 보기`}
                                    >
                                      📸 사진보기
                                    </a>
                                  )}

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
                            </Fragment>

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
        className={selectedIsland === "백령도" ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-10" : "hidden"}
      >
        {(selectedCategory === "전체" ||
          selectedCategory === "개인택시") && (
          <div className="rounded-[2rem] bg-gradient-to-br from-yellow-50 to-amber-50 p-6 md:p-10 border border-yellow-100">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-bold text-amber-600">백령도 이동정보</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                  🚕 개인택시 한눈에 보기
                </h2>
                <p className="mt-3 leading-7 text-gray-600">
                  백령도 개인택시 연락처를 확인하고 전화번호를 눌러 바로 문의할 수 있어요.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowTaxi(!showTaxi)}
                className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-500"
              >
                {showTaxi ? "개인택시 닫기 ▲" : "개인택시 전체보기 ▼"}
              </button>
            </div>

            {showTaxi && (
              <div className="mt-8 rounded-3xl bg-white p-5 md:p-7 shadow-lg">
                <div className="rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                  💡 배 도착 시간이나 관광 일정에 맞춰 이용하려면 미리 전화로 운행 가능 여부를 확인해 주세요.
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                      <div
                        key={`${taxi[0]}-${index}`}
                        className="rounded-2xl border border-gray-200 p-5 transition hover:border-amber-300 hover:shadow-md"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 text-xl">
                            🚕
                          </div>
                          <div>
                            <p className="font-extrabold text-gray-900">{taxi[0]}</p>
                            <p className="mt-1 text-sm text-gray-500">개인택시</p>
                          </div>
                        </div>

                        <a
                          href={`tel:${taxi[1]}`}
                          className="mt-5 flex w-full items-center justify-center rounded-2xl bg-amber-500 px-4 py-3 font-extrabold text-white transition hover:bg-amber-600"
                        >
                          📞 {taxi[1]} 전화하기
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* RENTCAR SECTION */}
      <section
        id="rentcar"
        className={selectedIsland === "백령도" ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-10" : "hidden"}
      >
        <div className="rounded-[2rem] bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-10 border border-blue-100">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-bold text-blue-600">백령도 이동정보</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                🚗 렌터카 한눈에 보기
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                백령도 렌터카 업체 연락처를 확인하고 전화번호를 눌러 바로 예약 문의할 수 있어요.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowRentcar(!showRentcar)}
              className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              {showRentcar ? "렌터카 닫기 ▲" : "렌터카 전체보기 ▼"}
            </button>
          </div>

          {showRentcar && (
            <div className="mt-8 rounded-3xl bg-white p-5 md:p-7 shadow-lg">
              <div className="rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                💡 성수기에는 차량이 빨리 마감될 수 있어요. 차량 종류·요금·인수 장소는 예약 전에 업체에 직접 확인해 주세요.
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                    <div
                      key={`${car[0]}-${index}`}
                      className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-xl">
                          🚗
                        </div>
                        <div>
                          <p className="font-extrabold text-gray-900">{car[0]}</p>
                          <p className="mt-1 text-sm text-gray-500">렌터카 예약 문의</p>
                        </div>
                      </div>

                      <a
                        href={`tel:${car[1]}`}
                        className="mt-5 flex w-full items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 font-extrabold text-white transition hover:bg-blue-700"
                      >
                        📞 {car[1]} 전화하기
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>


      {/* LOCAL PRODUCT SECTION */}
      <section
        id="local"
        className={selectedIsland === "백령도" ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-20" : "hidden"}
      >
        {(selectedCategory === "전체" ||
          selectedCategory === "특산물") && (
          <div className="rounded-[2rem] bg-gradient-to-br from-rose-50 to-orange-50 p-6 md:p-10 border border-rose-100">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-bold text-rose-600">백령도 먹거리·선물</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                  🎁 백령도 특산물 한눈에 보기
                </h2>
                <p className="mt-3 leading-7 text-gray-600">
                  백령도에서 많이 찾는 농수산물과 지역 특산물을 여행 전에 확인해 보세요.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowLocal(!showLocal)}
                className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-rose-600"
              >
                {showLocal ? "특산물 닫기 ▲" : "특산물 전체보기 ▼"}
              </button>
            </div>

            {showLocal && (
              <div className="mt-8">
                <div className="rounded-2xl bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm">
                  💡 농수산물은 계절과 조업·수확 상황에 따라 판매 여부가 달라질 수 있습니다.
                  구매 전 판매처에 재고와 판매 시기를 확인해 주세요.
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { name: "백령도 약쑥", image: "/images/specialties/mugwort.png", description: "백령도에서 자라는 향긋한 약쑥으로 다양한 지역 상품에 활용됩니다." },
                    { name: "까나리액젓", image: "/images/specialties/fish-sauce.png", description: "백령도를 대표하는 수산 가공품 중 하나로 김치와 각종 요리에 활용됩니다." },
                    { name: "백고구마", image: "/images/specialties/sweet-potato.png", description: "담백한 맛과 포슬한 식감이 특징인 백령도의 대표 농산물입니다." },
                    { name: "돌미역", image: "/images/specialties/sea-mustard.png", description: "백령도 바다에서 나는 미역으로 국과 다양한 해조류 요리에 활용됩니다." },
                    { name: "다시마", image: "/images/specialties/kelp.png", description: "백령도 해역에서 생산되는 해조류로 육수와 요리에 활용하기 좋습니다." },
                    { name: "백령도쌀", image: "/images/specialties/rice.png", description: "섬에서 재배되는 백령도 농산물로 지역 먹거리로 만나볼 수 있습니다." },
                    { name: "건홍합·냉동홍합", image: "/images/specialties/mussels.png", description: "백령도 바다의 홍합을 건조하거나 냉동한 수산물입니다." },
                    { name: "백령도 굴", image: "/images/specialties/oysters.png", description: "제철에 만날 수 있는 백령도의 신선한 수산물입니다." },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-extrabold text-gray-900">{item.name}</h3>
                        <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl bg-gray-900 p-6 text-white md:flex md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold">특산물 구매 전 체크</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      생물·냉동 제품은 여행 일정과 선박 이동시간을 고려해 포장 방법도 함께 확인하세요.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* PUBLIC BUS SECTION */}
      <section id="bus" className={selectedIsland === "백령도" ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-10" : "hidden"}>
        <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50 p-6 md:p-8">
          <button
            type="button"
            onClick={() => setShowBus(!showBus)}
            className="w-full rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 p-6 text-left text-white shadow-lg transition hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-blue-100">백령도 교통정보</p>
                <h2 className="mt-1 text-2xl font-extrabold md:text-3xl">🚌 백령도 공영버스 시간표</h2>
                <p className="mt-2 text-sm leading-6 text-blue-50">북포리·화동 방향 시간표를 따로 크게 확인할 수 있어요.</p>
              </div>
              <span className="text-3xl">{showBus ? "▲" : "▼"}</span>
            </div>
          </button>

          {showBus && (
            <div className="mt-6">
              <div className="rounded-2xl bg-white p-4 text-sm leading-6 text-blue-900">
                💡 운행 시간은 변경될 수 있으니 실제 이용 전 최신 시간표인지 다시 확인해 주세요.
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <a href="/images/bus1.jpg" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-2 border-white bg-white p-5 transition hover:border-blue-300 hover:shadow-md">
                  <div className="text-3xl">🚌</div>
                  <h3 className="mt-3 text-lg font-extrabold text-gray-900">북포리 방향</h3>
                  <p className="mt-2 text-sm text-gray-500">시간표 크게 보기 →</p>
                </a>
                <a href="/images/bus2.jpg" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-2 border-white bg-white p-5 transition hover:border-sky-300 hover:shadow-md">
                  <div className="text-3xl">🚌</div>
                  <h3 className="mt-3 text-lg font-extrabold text-gray-900">화동 방향</h3>
                  <p className="mt-2 text-sm text-gray-500">시간표 크게 보기 →</p>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* COMPACT LOCAL GUIDE ACCORDION */}
<section className="max-w-6xl mx-auto px-6 pb-14">
  <div className="rounded-[2rem] border border-gray-200 bg-white overflow-hidden shadow-sm">
    <div className="px-6 sm:px-8 py-6 border-b border-gray-100">
      <p className="text-sm font-extrabold text-sky-600 mb-1">LOCAL GUIDE</p>
      <h2 className="text-2xl font-black text-gray-900">백령도 현지 여행 가이드</h2>
      <p className="mt-2 text-sm text-gray-500">필요한 항목만 눌러서 펼쳐보세요.</p>
    </div>
    <div className="divide-y divide-gray-100">
      <details id="fishing-info" className="group scroll-mt-24">
        <summary className="cursor-pointer list-none px-6 sm:px-8 py-5 flex items-center justify-between gap-4 font-extrabold hover:bg-gray-50">
          <span>🎣 백령도 낚시 포인트</span><span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
        </summary>
        <div className="bg-gray-50/50 pt-6"><section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">


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
              🌊 용기포신항
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
      </div>
      </details>
      <details className="group">
        <summary className="cursor-pointer list-none px-6 sm:px-8 py-5 flex items-center justify-between gap-4 font-extrabold hover:bg-gray-50">
          <span>🌅 백령도 일몰 · 일출 명소</span><span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
        </summary>
        <div className="bg-gray-50/50 pt-6"><section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">

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

      </div>
      </details>
      <details className="group">
        <summary className="cursor-pointer list-none px-6 sm:px-8 py-5 flex items-center justify-between gap-4 font-extrabold hover:bg-gray-50">
          <span>🧭 백령도 처음이라면?</span><span className="text-gray-400 group-open:rotate-180 transition">⌄</span>
        </summary>
        <div className="bg-gray-50/50 pt-6"><section className="bg-gray-100 py-20 px-6">

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
    🚗 백령도 차량선적 안내
  </h3>

  <p className="text-gray-600 leading-relaxed">
    백령도에서는 현지 렌터카를 이용하면 일정 조정이 편리합니다.
    차량을 가져갈 계획이라면 선적 가능 여부와 운항 일정, 접수 시간, 요금 등을 미리 확인하세요.
    차량 선적 관련 사항은 미래해운에 문의해 확인할 수 있습니다.
  </p>

  <a href="tel:032-881-6666" className="inline-flex items-center justify-center mt-5 px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold shadow-md transition hover:bg-blue-700">
    ☎ 미래해운 032-881-6666
  </a>

  <p className="mt-4 text-sm text-gray-500 leading-relaxed">
    ※ 운항 일정과 차량 선적 조건은 기상·선박 운항 상황 등에 따라 달라질 수 있으므로 출발 전 반드시 최신 정보를 확인하세요.
  </p>
</div>

<div className="bg-white rounded-3xl shadow-lg p-8 text-center">
  <h3 className="text-2xl font-bold mb-3">
    🪖 군인 면회는 자유롭게 가능한가요?
  </h3>

  <p className="text-gray-600 leading-relaxed">
    부대 일정과 외출·외박 가능 여부에 따라 달라질 수 있으므로 복무 장병에게 미리 확인해 주세요.
    배편과 복귀 시간을 고려해 면회 일정을 충분히 여유 있게 조율하는 것이 좋습니다.
  </p>
</div>

<div className="bg-white rounded-3xl shadow-lg p-8 text-center">
  <h3 className="text-2xl font-bold mb-3">
    🏪 편의점이나 마트가 있나요?
  </h3>

  <p className="text-gray-600 leading-relaxed">
    아래 생활정보에서 편의점과 마트 정보를 확인해 주세요.
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
  백령도 주요 관광지와 위치를 한눈에 확인해 보세요.
</p>
</div>
            <div className="grid grid-cols-2 gap-2">

              <div className="bg-gray-100 rounded-2xl p-2 text-center">
                <p className="text-2xl font-bold">약 4시간</p>
                <p className="text-gray-600 text-xs mt-1">
                  인천 ↔ 백령도
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-2 text-center">
                <p className="text-2xl font-bold">3개</p>
                <p className="text-gray-600 text-xs mt-1">
                  주요 관광 섬
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
                <li>✔ 멀미약은 제품 복용법 또는 약사 안내에 따라 미리 준비하기</li>
                <li>✔ 중앙 좌석 추천</li>
                <li>✔ 빈속 탑승 피하기</li>
                <li>✔ 휴대폰·독서는 줄이고 편안한 자세로 쉬기</li>
              </ul>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h3 className="text-2xl font-bold mb-5">
                🚗 차량선적 팁
              </h3>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>✔ 차량선적 가능 여부·예약 방법을 운송사에 사전 확인</li>
                <li>✔ 선적 차량은 운송사 안내 시간보다 여유 있게 도착하기</li>
                <li>✔ 신분증 필수</li>
                <li>✔ 결항 여부 확인</li>
              </ul>

            </div>

          </div>

          {/* 2열 카드 */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* 버스 + 군인면회 + 가족 */}
            <div className="space-y-6">

              {/* 가족여행 */}
              <div className="bg-white rounded-3xl p-8 shadow">

                <h3 className="text-2xl font-bold mb-4">
                  👨‍👩‍👧 아이랑 가기 괜찮나요?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  상비약과 아이용품은 섬에 들어오기 전에 미리 준비하는 것을 추천합니다.
                </p>
              </div>
            </div>
          </div>

        {/* 생활정보 */}
        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              📞
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-gray-900">
              백령도 생활정보
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              편의점 · 마트 등 여행 중 필요한 생활정보를 크게 확인할 수 있어요.
            </p>
            <a
              href="/images/lifeinfo.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-2xl bg-emerald-600 py-4 font-extrabold text-white transition hover:bg-emerald-700"
            >
              📋 생활정보 크게 보기
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
              🏢
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-gray-900">
              관공서 및 단체
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              백령도에서 필요한 관공서와 주요 단체 연락처를 확인하세요.
            </p>
            <a
              href="/images/contact.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-2xl bg-blue-600 py-4 font-extrabold text-white transition hover:bg-blue-700"
            >
              📞 연락처 크게 보기
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
              🧭
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-gray-900">
              여행정보
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              백령도 여행에 필요한 안내 정보를 이미지로 크게 확인할 수 있어요.
            </p>
            <a
              href="/images/travelinfo.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-2xl bg-violet-600 py-4 font-extrabold text-white transition hover:bg-violet-700"
            >
              🧭 여행정보 크게 보기
            </a>
          </div>

        </div>
      </section></div>
      </details>
    </div>
  </div>
</section>
{/* TRAVEL SEASON SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
        <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-violet-50 shadow-sm">
          <div className="px-6 pt-8 text-center sm:px-8 sm:pt-10">
            <p className="text-sm font-black tracking-[0.22em] text-sky-600">SEASON GUIDE</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">🗓️ 백령도, 언제 가면 가장 좋을까요?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              계절 카드를 눌러 백령도의 계절 풍경을 만나보세요.
            </p>
          </div>

          {(() => {
            const seasons = [
              {
                season:"봄", english:"SPRING", icon:"🌸", months:"3월 · 4월 · 5월",
                title:"걷기 좋은 섬 여행", desc:"선선한 바닷바람과 함께 해안 산책과 관광지를 천천히 둘러보기 좋은 계절",
                tip:"얇은 겉옷 준비", bg:"from-pink-50 to-rose-100",
                image:"/images/seasons/spring.jpg", photoTitle:"봄 · 꽃과 바닷바람이 만나는 백령도",
                photoDesc:"봄의 백령도는 해안 산책과 섬 풍경을 여유롭게 즐기기 좋은 시기예요."
              },
              {
                season:"여름", english:"SUMMER", icon:"🌊", months:"6월 · 7월 · 8월",
                title:"바다를 제대로 즐기는 때", desc:"사곶해변과 해안 풍경, 낚시 등 백령도의 여름 바다를 즐기기 좋은 계절",
                tip:"햇빛 대비 필수", bg:"from-cyan-50 to-sky-100",
                image:"/images/seasons/summer.jpg", photoTitle:"여름 · 푸른 바다가 빛나는 백령도",
                photoDesc:"두무진과 사곶해변을 비롯한 백령도의 시원한 해안 풍경이 가장 돋보이는 계절이에요."
              },
              {
                season:"가을", english:"AUTUMN", icon:"🍂", months:"9월 · 10월 · 11월",
                title:"노을과 드라이브", desc:"선선한 날씨 속에서 해안 드라이브와 노을 풍경을 여유롭게 즐기기 좋은 계절",
                tip:"일교차 대비", bg:"from-amber-50 to-orange-100",
                image:"/images/seasons/autumn.jpg", photoTitle:"가을 · 노을과 드라이브의 백령도",
                photoDesc:"맑은 하늘과 부드러운 노을을 따라 천천히 섬을 둘러보기 좋은 계절이에요."
              },
              {
                season:"겨울", english:"WINTER", icon:"❄️", months:"12월 · 1월 · 2월",
                title:"조용한 겨울 섬", desc:"관광객이 비교적 적은 시기에 한적한 섬의 분위기와 겨울 바다를 만나는 계절",
                tip:"방풍용품 준비", bg:"from-slate-50 to-blue-100",
                image:"/images/seasons/winter.jpg", photoTitle:"겨울 · 고요한 바다와 설경의 백령도",
                photoDesc:"차가운 바닷바람 속에서 한층 고요해진 백령도의 겨울 풍경을 만날 수 있어요."
              }
            ];
            const active = seasons.find((item) => item.season === selectedSeason) ?? seasons[0];

            return (
              <>
                <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
                  {seasons.map((item) => (
                    <button
                      type="button"
                      key={item.season}
                      onClick={() => { setSelectedSeason(item.season); window.open(item.image, "_blank", "noopener,noreferrer"); }}
                      className={`group relative min-h-[290px] overflow-hidden rounded-3xl bg-gradient-to-br ${item.bg} p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                        selectedSeason === item.season ? "ring-4 ring-white shadow-xl outline outline-2 outline-sky-400" : ""
                      }`}
                    >
                      <div className="absolute -right-2 top-3 text-5xl font-black tracking-tighter text-white/70 sm:text-6xl">{item.english}</div>
                      <div className="relative flex h-full flex-col">
                        <div className="text-4xl">{item.icon}</div>
                        <p className="mt-5 text-xs font-black tracking-wider text-gray-500">{item.months}</p>
                        <h3 className="mt-1 text-2xl font-black text-gray-900">{item.season}</h3>
                        <p className="mt-3 font-extrabold text-gray-800">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-gray-600">{item.desc}</p>
                        <div className="mt-auto flex items-end justify-between gap-2 pt-5">
                          <span className="inline-flex rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm">💡 {item.tip}</span>
                          <span className="text-xs font-black text-gray-600">사진 새 창으로 보기 ↗</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mx-6 mb-6 grid gap-3 rounded-2xl bg-white/80 p-4 text-sm sm:mx-8 sm:mb-8 sm:grid-cols-3 sm:p-5">
                  <div className="text-center"><span className="font-black text-gray-900">📸 사진·산책</span><span className="ml-2 text-gray-600">봄 · 가을</span></div>
                  <div className="text-center"><span className="font-black text-gray-900">🌊 바다여행</span><span className="ml-2 text-gray-600">여름</span></div>
                  <div className="text-center"><span className="font-black text-gray-900">🧣 한적한 여행</span><span className="ml-2 text-gray-600">겨울</span></div>
                </div>
              </>
            );
          })()}

          <p className="px-6 pb-7 text-center text-xs leading-5 text-gray-500 sm:px-8">
            ※ 섬 날씨와 여객선 운항은 계절과 당일 기상상황에 따라 달라질 수 있으니 출발 전 최신 정보를 확인하세요.
          </p>
        </div>
      </section>


      {/* TRAVEL STYLE RECOMMENDATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
        <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 md:p-8">
          <div className="mb-7">
            <p className="text-sm font-black tracking-[0.18em] text-emerald-600">TRAVEL STYLE</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">🧳 누구와, 어떻게 여행하세요?</h2>
            <p className="mt-3 max-w-3xl leading-7 text-gray-600">
              여행 목적에 따라 백령도에서 먼저 챙겨보면 좋은 장소와 정보를 골라봤어요.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {icon:"👨‍👩‍👧", title:"부모님과 함께", desc:"이동 부담은 줄이고 대표 명소와 전망을 여유롭게", tags:["두무진","심청각","사곶해변"], action:"place"},
              {icon:"🧒", title:"아이와 함께", desc:"바다와 자연을 직접 보고 배우는 가족여행", tags:["콩돌해안","사곶해변","하늬해변"], action:"place"},
              {icon:"🪖", title:"군인면회", desc:"배편부터 이동·식사·복귀 시간까지 실전 준비 중심", tags:["면회 준비","추천코스","곰신 후기"], action:"military"},
              {icon:"📸", title:"사진여행", desc:"백령도다운 절경과 노을을 사진으로 남기는 여행", tags:["두무진","끝섬전망대","콩돌해안"], action:"place"},
              {icon:"🚌", title:"뚜벅이 여행", desc:"공영버스와 택시를 함께 활용해 이동 부담 줄이기", tags:["버스시간표","택시","동선 계획"], action:"transport"},
              {icon:"🌅", title:"여유로운 2박 3일", desc:"대표 관광지와 숨은 명소까지 천천히 둘러보기", tags:["추천코스","숨은 명소","계절여행"], action:"course"},
            ].map((item) => (
              <button
                type="button"
                key={item.title}
                onClick={() => {
                  const target =
                    item.action === "military" ? "military-visit" :
                    item.action === "transport" ? "bus" :
                    item.action === "course" ? "my-course" : "place-section";
                  document.getElementById(target)?.scrollIntoView({behavior:"smooth", block:"start"});
                }}
                className="group rounded-3xl border border-white bg-white/90 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-sm font-black text-emerald-600 transition group-hover:translate-x-1">추천 보기 →</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">#{tag}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* COURSE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">

        <div className="mb-8 rounded-[2rem] bg-gradient-to-br from-cyan-50 to-sky-50 p-6 md:p-8 border border-cyan-100">
          <p className="font-bold text-cyan-700">백령도 일정 짜기</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            🗺️ 추천 여행코스
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            여행 기간에 맞는 기본 코스를 참고하고, 마음에 드는 장소는 나만의 여행코스에 추가해 보세요.
            선박 운항과 날씨에 따라 실제 일정은 달라질 수 있습니다.
          </p>
        </div>

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
              <li>🚢 출항 시간 확인 후 여유 있게 용기포항 이동</li>
            </ul>

          </div>

          {/* 1박2일 */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-5">
              🏕️ 1박 2일 추천코스
            </h3>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>📸 두무진</li>
              <li>🏖️ 사곶해변</li>
              <li>🪨 콩돌해안</li>
              <li>🦭 점박이물범 관찰</li>
              <li>🎣 용기포항 야경</li>
              <li>🚗 백령도 렌터카 드라이브</li>
            </ul>

          </div>

          {/* 2박3일 */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-5">
              🌅 2박 3일 추천코스
            </h3>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>🌊 1일차 · 사곶해변 → 콩돌해안</li>
              <li>📸 2일차 · 두무진 → 중화동교회</li>
              <li>🕊️ 천안함 46용사 위령탑</li>
              <li>🌅 끝섬전망대 일몰</li>
              <li>🏞️ 3일차 · 심청각 → 하늬해변</li>
              <li>🚢 여유 있게 용기포항 이동</li>
            </ul>

          </div>



        </div>

          {/* 군인면회 - 추천여행코스처럼 가로형 한 섹션으로 압축 */}
        <div id="military-visit" className="scroll-mt-24 mt-8 bg-white rounded-3xl shadow-lg p-6 sm:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-extrabold tracking-[0.16em] text-sky-600">MILITARY VISIT</p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-black">🪖 백령도 군인 면회</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  처음 면회 오실 때 꼭 필요한 내용만 순서대로 확인하세요.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">
                ※ 면회·외출 일정은 복무 장병에게 최신 안내를 확인해 주세요.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto pb-2">
              <div className="flex min-w-max gap-3">
                {[
                  ["① 일정 확인", "장병에게 면회·외출 가능 날짜와 복귀 시간 확인", "📅"],
                  ["② 왕복 배편", "가는 배와 돌아오는 배를 함께 예약·확인", "🚢"],
                  ["③ 숙소", "숙박이 필요하면 배편 확정 후 미리 준비", "🏠"],
                  ["④ 섬 내 이동", "면회 시간에 맞춰 택시·렌터카 등 이동수단 확인", "🚕"],
                  ["⑤ 결항 대비", "출항 전 운항 여부 확인, 결항 시 다음 배와 숙소 확인", "🌊"],
                ].map(([title, desc, icon]) => (
                  <div
                    key={title}
                    className="w-[235px] shrink-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <span className="text-2xl">{icon}</span>
                    <h4 className="mt-3 font-black text-gray-900">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-black tracking-[0.16em] text-indigo-600">VISIT COURSE</p>
                  <h4 className="mt-1 text-xl font-black text-gray-900">👨‍✈️ 군인 면회 추천코스</h4>
                </div>
                <p className="text-xs text-gray-500">장병의 실제 외출·복귀 시간을 먼저 확인하세요.</p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-bold text-gray-700">
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">🍜 함께 식사</span>
                <span>→</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">☕ 카페</span>
                <span>→</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">🌊 사곶해변</span>
                <span>→</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">📸 두무진·가까운 명소</span>
                <span>→</span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">⏰ 여유 있게 복귀</span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-sky-50 p-4 sm:p-5">
              <p className="font-black text-gray-900">💡 면회객 핵심 팁</p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                백령도는 배 운항이 일정에 큰 영향을 줍니다. 면회 시간만 확인하지 말고
                돌아오는 배 시간까지 먼저 맞춘 뒤 식사·관광 일정을 잡는 것이 좋아요.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button type="button" onClick={() => handleQuickMenuClick("ship")} className="rounded-full bg-gray-950 px-4 py-2 text-sm font-bold text-white">
                🚢 배편
              </button>
              <button type="button" onClick={() => handleQuickMenuClick("stay")} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-800">
                🏠 숙박
              </button>
              <button type="button" onClick={() => handleQuickMenuClick("food")} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-800">
                🍜 맛집
              </button>
              <button type="button" onClick={() => handleQuickMenuClick("transport")} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-800">
                🚕 교통
              </button>
              <a
                href="https://www.komsa.or.kr/prog/crtfctSailing/kor/sub03_0206/list.do"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700"
              >
                🌊 운항·결항 확인
              </a>
            </div>
          </div>

        {/* 곰신 군인면회 후기 */}
        <div id="military-reviews" className="mt-8 overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-violet-50 shadow-sm">
          <div className="px-6 pt-8 sm:px-8 sm:pt-10">
            <p className="text-sm font-black tracking-[0.18em] text-pink-500">REAL VISIT STORY</p>
            <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-2xl font-black text-gray-900 sm:text-3xl">💌 곰신들의 백령도 면회 이야기</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">직접 다녀온 경험을 남겨주세요. 다음 면회객에게 큰 도움이 됩니다.</p>
              </div>
              <span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-pink-600 shadow-sm">후기 {militaryReviews.length}개</span>
            </div>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-6">
              <h4 className="text-xl font-black">✍️ 면회 후기 남기기</h4>
              <p className="mt-2 text-xs leading-5 text-gray-500">부대명·부대 위치·훈련/작전 일정·연락처 등 군사정보와 개인정보는 작성하지 마세요.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <input value={militaryReviewNickname} onChange={(e)=>setMilitaryReviewNickname(e.target.value)} maxLength={20} placeholder="닉네임" className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"/>
                <input value={militaryReviewPeriod} onChange={(e)=>setMilitaryReviewPeriod(e.target.value)} maxLength={20} placeholder="방문시기 예: 2026년 8월" className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"/>
                <select value={militaryReviewRelation} onChange={(e)=>setMilitaryReviewRelation(e.target.value)} className="rounded-2xl border border-gray-200 px-4 py-3 text-sm"><option>연인</option><option>가족</option><option>친구</option><option>기타</option></select>
                <select value={militaryReviewStay} onChange={(e)=>setMilitaryReviewStay(e.target.value)} className="rounded-2xl border border-gray-200 px-4 py-3 text-sm"><option>당일</option><option>1박 2일</option><option>2박 3일 이상</option></select>
                <select value={militaryReviewTransport} onChange={(e)=>setMilitaryReviewTransport(e.target.value)} className="rounded-2xl border border-gray-200 px-4 py-3 text-sm sm:col-span-2"><option>택시</option><option>렌터카</option><option>자가용 선적</option><option>공영버스</option><option>기타</option></select>
              </div>
              <div className="mt-4">
                <p className="mb-2 text-sm font-bold text-gray-700">이번 면회여행은 어땠나요?</p>
                <div className="flex gap-1">{[1,2,3,4,5].map((star)=><button key={star} type="button" onClick={()=>setMilitaryReviewRating(star)} className="text-2xl">{star <= militaryReviewRating ? "⭐" : "☆"}</button>)}</div>
              </div>
              <textarea value={militaryReviewContent} onChange={(e)=>setMilitaryReviewContent(e.target.value)} maxLength={800} rows={5} placeholder="배편, 숙소, 이동, 식사, 면회하면서 도움됐던 팁 등 다음 방문자에게 알려주고 싶은 경험을 자유롭게 남겨주세요." className="mt-4 w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm leading-6 outline-none focus:border-pink-400"/>
              <button type="button" onClick={handleMilitaryReviewSubmit} disabled={militaryReviewSubmitting} className="mt-4 w-full rounded-2xl bg-gray-950 px-5 py-3.5 font-black text-white disabled:opacity-50">{militaryReviewSubmitting ? "등록 중..." : "💌 면회 후기 등록하기"}</button>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between"><h4 className="text-xl font-black">백령도를 다녀온 이야기</h4><span className="text-xs text-gray-500">최신순</span></div>
              {militaryReviewLoading ? (
                <div className="rounded-3xl bg-white p-8 text-center text-sm text-gray-500">후기를 불러오는 중이에요...</div>
              ) : militaryReviews.length === 0 ? (
                <div className="rounded-3xl bg-white p-8 text-center shadow-sm"><div className="text-4xl">💌</div><p className="mt-4 font-black">아직 첫 후기를 기다리고 있어요.</p><p className="mt-2 text-sm leading-6 text-gray-500">백령도 면회를 다녀오셨다면 다음 방문자에게 도움이 될 경험을 남겨주세요.</p></div>
              ) : (
                <div className="max-h-[570px] space-y-4 overflow-y-auto pr-1">
                  {militaryReviews.map((review)=>(
                    <article key={review.id} className="rounded-3xl bg-white p-5 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2"><div><span className="font-black">{review.nickname}</span><span className="ml-2 text-xs text-gray-500">{review.visit_period}</span></div><span className="text-sm">{"⭐".repeat(Math.max(1,Math.min(5,Number(review.rating)||5)))}</span></div>
                      <div className="mt-3 flex flex-wrap gap-2">{[review.relation,review.stay_type,review.transport].filter(Boolean).map((tag)=><span key={tag} className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-pink-600">#{tag}</span>)}</div>
                      <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-gray-700">{review.content}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </section>
      {/* FLOATING QUICK MENU */}

      {/* Q&A - 실제 질문 등록/답변 표시 */}
      {selectedIsland === "백령도" && (
        <>
      <section id="qna" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-sky-50 via-white to-violet-50 border border-sky-100 p-6 md:p-10 shadow-lg">
          <div className="text-center">
            <p className="font-bold text-sky-600">{selectedIsland} 여행, 궁금한 점을 직접 물어보세요</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">💬 {selectedIsland} 여행 Q&amp;A</h2>
            <p className="mt-3 text-gray-600 leading-7">
              질문을 등록하면 관리자 답변을 이곳에서 확인할 수 있습니다.
            </p>
          </div>

          <div className="mt-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
            <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-extrabold">✍️ 질문 남기기</h3>
              <p className="mt-2 text-sm text-gray-500">
                전화번호·예약번호 등 개인정보는 작성하지 마세요.
              </p>

              <div className="mt-6 space-y-4">
                <input
                  value={qnaNickname}
                  onChange={(e) => setQnaNickname(e.target.value)}
                  placeholder="닉네임"
                  maxLength={30}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-sky-500"
                />
                <select
                  value={qnaFormCategory}
                  onChange={(e) => setQnaFormCategory(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-sky-500"
                >
                  {["배편", "숙소", "맛집", "관광지", "교통"].map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <input
                  value={qnaTitle}
                  onChange={(e) => setQnaTitle(e.target.value)}
                  placeholder="질문 제목"
                  maxLength={100}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-sky-500"
                />
                <textarea
                  value={qnaContent}
                  onChange={(e) => setQnaContent(e.target.value)}
                  placeholder={`${selectedIsland} 여행에서 궁금한 내용을 자세히 적어주세요.`}
                  rows={5}
                  maxLength={1000}
                  className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-sky-500"
                />
                <button
                  type="button"
                  disabled={qnaSubmitting}
                  onClick={handleQnaSubmit}
                  className="w-full rounded-2xl bg-sky-600 px-5 py-4 font-extrabold text-white hover:bg-sky-700 transition disabled:opacity-60"
                >
                  {qnaSubmitting ? "등록 중..." : "💬 질문 등록하기"}
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-extrabold">📋 등록된 질문</h3>

              <input
                value={qnaSearch}
                onChange={(e) => setQnaSearch(e.target.value)}
                placeholder="🔍 질문 검색"
                className="mt-5 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-sky-500"
              />

              <div className="mt-4 flex flex-wrap gap-2">
                {["전체", "배편", "숙소", "맛집", "관광지", "교통"].map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setQnaCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-bold ${
                      qnaCategory === category
                        ? "bg-sky-600 text-white"
                        : "bg-sky-50 text-sky-700 hover:bg-sky-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-6 max-h-[650px] space-y-4 overflow-y-auto pr-1">
                {qnaLoading ? (
                  <div className="rounded-2xl bg-gray-50 p-6 text-center text-gray-500">
                    질문을 불러오는 중입니다...
                  </div>
                ) : filteredQnaQuestions.length === 0 ? (
                  <div className="rounded-2xl bg-gray-50 p-6 text-center text-gray-500">
                    등록된 질문이 없습니다.
                  </div>
                ) : (
                  filteredQnaQuestions.map((item) => (
                    <article key={item.id} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                      <div className="flex flex-wrap gap-2 text-xs font-bold">
                        <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">
                          {item.category || "기타"}
                        </span>
                        {item.is_faq && (
                          <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">FAQ</span>
                        )}
                        <span className={`rounded-full px-3 py-1 ${
                          item.is_answered
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-gray-200 text-gray-600"
                        }`}>
                          {item.is_answered ? "답변완료" : "답변대기"}
                        </span>
                      </div>

                      <h4 className="mt-4 text-lg font-extrabold">Q. {item.title}</h4>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-600">{item.content}</p>
                      <p className="mt-3 text-xs text-gray-400">작성자: {item.nickname || "익명"}</p>

                      {item.answer && (
                        <div className="mt-4 rounded-2xl bg-white p-4">
                          <p className="font-extrabold text-sky-700">A. 쩨쩨의 답변</p>
                          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-700">{item.answer}</p>
                        </div>
                      )}
                    </article>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

        {selectedIsland === "백령도" && (
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
        )}

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

  </>
)}

{selectedIsland === "대청도" && (
  <>
    {/* 대청도 사진첩 */}
    <section id="daecheong-gallery" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-emerald-600">대청도 풍경사진</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">📸 대청도 사진첩 한눈에 보기</h2>
            <p className="mt-3 leading-7 text-gray-600">
              해안사구부터 해변·전망대·기암절벽까지 대청도의 풍경을 사진으로 만나보세요.
              사진을 누르면 크게 볼 수 있어요.
            </p>
          </div>
          <button type="button" onClick={() => setShowGallery(!showGallery)} className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600">
            {showGallery ? "사진첩 닫기 ▲" : "사진첩 전체보기 ▼"}
          </button>
        </div>
        {showGallery && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {daecheongGallery.map((photo) => (
              <a key={photo.name} href={photo.src} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
                <Image src={photo.src} alt={`대청도 ${photo.name}`} width={800} height={600} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-12 text-white"><p className="font-extrabold">{photo.name}</p></div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>

    {/* 대청도 숙소 */}
    <section id="daecheong-stay" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-blue-50 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-sky-600">대청도 숙박정보</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">🏨 대청도 숙소 한눈에 보기</h2>
            <p className="mt-3 leading-7 text-gray-600">대청도 민박·펜션·여관의 연락처를 확인하고 바로 전화할 수 있어요. 요금과 객실, 픽업 여부는 예약 전에 확인해 주세요.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["🚢 선진포항 픽업 문의", "🚗 차량·주차 확인", "🍳 식사 제공 여부", "👨‍👩‍👧 단체 객실 문의", "🌊 결항 시 변경 기준"].map((tip) => (
                <span key={tip} className="rounded-full border border-sky-100 bg-white px-3 py-2 text-xs font-bold text-sky-700 shadow-sm">{tip}</span>
              ))}
            </div>
          </div>
          <button type="button" onClick={() => setShowStay(!showStay)} className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-sky-600">
            {showStay ? "숙소 목록 닫기 ▲" : `숙소 ${daecheongStay.length}곳 전체보기 ▼`}
          </button>
        </div>
        {showStay && (
          <div className="mt-8">
            <input value={staySearch} onChange={(e) => setStaySearch(e.target.value)} placeholder="🔎 숙소명 · 대표자 · 전화번호 검색" className="w-full rounded-2xl border-2 border-sky-100 bg-white px-5 py-4 outline-none focus:border-sky-500" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {daecheongStay.filter(([name, owner, phone]) => `${name} ${owner} ${phone}`.toLowerCase().includes(staySearch.trim().toLowerCase())).map(([name, owner, phone]) => (
                <article key={name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sky-100">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">대청도 숙소</span>
                  <h3 className="mt-4 text-xl font-extrabold text-gray-900">{name}</h3>
                  <p className="mt-2 text-sm text-gray-500">대표자 {owner}</p>
                  <a href={`tel:${phone.replace(/-/g, "")}`} className="mt-5 block rounded-xl bg-sky-600 px-4 py-3 text-center font-bold text-white hover:bg-sky-700">☎ {phone}</a>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>

    {/* 대청도 음식점 */}
    <section id="daecheong-food" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-[2rem] border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-orange-600">대청도 음식점 정보</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">🍜 대청도 음식점 한눈에 보기</h2>
            <p className="mt-3 leading-7 text-gray-600">대청도 음식점 연락처를 확인하고 영업 여부와 식사 가능 시간을 바로 문의해 보세요.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["🍚 아침식사 문의", "🥡 포장 가능 여부", "👨‍👩‍👧 단체 식사", "🐟 해산물·회", "🍜 간단한 한 끼"].map((tip) => (
                <span key={tip} className="rounded-full border border-orange-100 bg-white px-3 py-2 text-xs font-bold text-orange-700 shadow-sm">{tip}</span>
              ))}
            </div>
          </div>
          <button type="button" onClick={() => setShowFood(!showFood)} className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-orange-600">
            {showFood ? "음식점 목록 닫기 ▲" : `음식점 ${daecheongFood.length}곳 전체보기 ▼`}
          </button>
        </div>
        {showFood && (
          <div className="mt-8">
            <input value={foodSearch} onChange={(e) => setFoodSearch(e.target.value)} placeholder="🔎 음식점명 · 대표자 · 전화번호 검색" className="w-full rounded-2xl border-2 border-orange-100 bg-white px-5 py-4 outline-none focus:border-orange-500" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {daecheongFood.filter(([name, owner, phone]) => `${name} ${owner} ${phone}`.toLowerCase().includes(foodSearch.trim().toLowerCase())).map(([name, owner, phone]) => (
                <article key={name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">대청도 음식점</span>
                  <h3 className="mt-4 text-xl font-extrabold text-gray-900">{name}</h3>
                  <p className="mt-2 text-sm text-gray-500">대표자 {owner}</p>
                  <a href={`tel:${phone.replace(/-/g, "")}`} className="mt-5 block rounded-xl bg-orange-500 px-4 py-3 text-center font-bold text-white hover:bg-orange-600">☎ {phone}</a>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>

    {/* 대청도 낚시배 */}
    <section id="daecheong-fishing" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-cyan-700">대청도 바다낚시 정보</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">🎣 대청도 낚시배 정보 한눈에 보기</h2>
            <p className="mt-3 leading-7 text-gray-600">대청도 낚시배 이름과 선주 연락처를 확인하고 출항 여부·예약 가능 인원·요금을 직접 문의할 수 있어요.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["🌊 출항 여부 확인", "👥 승선 인원 문의", "💳 요금·예약금 확인", "🎣 장비 대여 문의", "🦺 구명조끼·안전수칙"].map((tip) => (
                <span key={tip} className="rounded-full border border-cyan-100 bg-white px-3 py-2 text-xs font-bold text-cyan-700 shadow-sm">{tip}</span>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-gray-500">💡 기상과 물때에 따라 출항이 변경될 수 있으니 출발 전 선주에게 반드시 확인해 주세요.</p>
          </div>
          <button type="button" onClick={() => setShowFishing(!showFishing)} className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-cyan-700">
            {showFishing ? "낚시배 목록 닫기 ▲" : `낚시배 ${daecheongFishing.length}척 전체보기 ▼`}
          </button>
        </div>
        {showFishing && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {daecheongFishing.map(([name, owner, phone]) => (
              <article key={name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-cyan-100">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">대청도 낚시배</span>
                    <h3 className="mt-4 text-xl font-extrabold text-gray-900">{name}</h3>
                    <p className="mt-2 text-sm text-gray-500">선주 {owner}</p>
                  </div>
                  <span className="text-3xl">🎣</span>
                </div>
                <a href={`tel:${phone.replace(/-/g, "")}`} className="mt-5 block rounded-xl bg-cyan-700 px-4 py-3 text-center font-bold text-white hover:bg-cyan-800">☎ {phone}</a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>

    {/* 대청도 특산품 */}
    <section id="daecheong-specialty" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-[2rem] border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-teal-700">대청도의 바다와 자연이 키운 먹거리</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">🎁 대청도 특산품 한눈에 보기</h2>
            <p className="mt-3 leading-7 text-gray-600">대청도에서 만날 수 있는 대표 수산물과 농축산물을 소개합니다. 어획 시기와 판매 여부는 계절·기상에 따라 달라질 수 있어요.</p>
          </div>
          <button type="button" onClick={() => setShowDaecheongSpecialty(!showDaecheongSpecialty)} className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-teal-700">
            {showDaecheongSpecialty ? "특산품 닫기 ▲" : `특산품 ${daecheongSpecialties.length}종 전체보기 ▼`}
          </button>
        </div>
        {showDaecheongSpecialty && (
          <div className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {daecheongSpecialties.map((item) => (
                <article key={item.name} className="group overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-teal-100 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="overflow-hidden bg-stone-50">
                    <Image src={item.image} alt={`대청도 특산품 ${item.name}`} width={900} height={600} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700">대청도 특산품</span>
                    <h3 className="mt-4 text-2xl font-extrabold text-gray-900">{item.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 rounded-2xl bg-white/80 p-4 text-sm leading-6 text-gray-600">💡 구입처·택배 가능 여부·가격은 현지 판매처와 대청면 관광 안내를 통해 방문 전에 확인해 주세요.</p>
          </div>
        )}
      </div>
    </section>
  </>
)}

{/* 여행자 사진 자동 슬라이드 */}
{footprints.length > 0 && (
  <section className="overflow-hidden bg-[#292929] py-12 text-white md:py-16">
    <div className="mx-auto max-w-7xl px-5 text-center sm:px-6">
      <p className="text-sm font-black tracking-[0.2em] text-amber-500">TRAVELER MOMENTS</p>
      <h2 className="mt-3 text-2xl font-black sm:text-3xl md:text-4xl">
        <span className="text-amber-500">{footprints.length}장</span>의 여행자 사진이 모였습니다.
      </h2>
      <p className="mt-3 text-sm leading-6 text-gray-300">백령·대청·소청에서 여행자들이 직접 남긴 소중한 순간이에요.</p>
      <button
        type="button"
        onClick={() => setIsFootprintMarqueePaused(!isFootprintMarqueePaused)}
        aria-label={isFootprintMarqueePaused ? "사진 슬라이드 재생" : "사진 슬라이드 일시정지"}
        className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-sm font-black transition hover:bg-white hover:text-gray-900"
      >
        {isFootprintMarqueePaused ? "▶" : "Ⅱ"}
      </button>
    </div>

    <div className="mt-9 overflow-hidden">
      <div
        className="footprint-marquee-track flex w-max gap-3"
        style={{ animationPlayState: isFootprintMarqueePaused ? "paused" : "running" }}
      >
        {[...marqueeFootprints, ...marqueeFootprints].map((item, index) => {
          const widthClass = ["w-56", "w-80", "w-64", "w-96"][index % 4];
          return (
            <a
              key={`${item.id}-${index}`}
              href={item.image_url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative h-56 shrink-0 overflow-hidden rounded-sm bg-gray-700 ${widthClass}`}
            >
              <img src={item.image_url} alt={`${item.island} ${item.place_name} 여행자 사진`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 text-left opacity-0 transition group-hover:opacity-100">
                <p className="text-sm font-black">{item.place_name}</p>
                <p className="mt-1 text-xs text-white/70">{item.island} · {item.nickname}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>

  </section>
)}

{/* 섬여행 바로가기 메뉴 */}
<section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16">
  <div className="rounded-[2rem] border border-gray-100 bg-gray-50 px-5 py-8 shadow-sm sm:px-8 md:py-10">
    <div className="mb-8 text-center">
      <p className="text-sm font-black tracking-[0.18em] text-sky-600">ISLAND TRAVEL</p>
      <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">섬여행 바로가기</h2>
      <p className="mt-3 text-sm leading-6 text-gray-500">백령·대청·소청 여행에 필요한 정보를 빠르게 찾아보세요.</p>
    </div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {platformServiceItems.map((item) => (
        <button
          type="button"
          key={item.title}
          onClick={() => handlePlatformServiceClick(item.key)}
          className="group flex min-h-44 flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white px-3 py-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-3xl transition group-hover:border-sky-400 group-hover:bg-sky-50">{item.icon}</span>
          <strong className="mt-4 break-keep text-sm font-black leading-6 text-gray-900">{item.title}</strong>
          <span className="mt-1 break-keep text-xs leading-5 text-gray-500">{item.description}</span>
        </button>
      ))}
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

{/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 px-6 py-12 mt-20">
  <div className="max-w-7xl mx-auto text-center space-y-5">
    <h2 className="text-2xl font-bold text-white">
      백령·대청·소청도의 모든 정보
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
      자료 및 사진 출처 : 옹진군 · 윤학진 외
    </p>

    <p className="text-sm text-gray-500">
      © 2026 백령·대청·소청도의 모든 정보. All Rights Reserved.
    </p>
  </div>
</footer>  
</main>
);
}
