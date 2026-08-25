"use client";

import MyCourse from "./components/MyCourse";
import AddCourseButton from "./components/AddCourseButton";
import { supabase } from "./lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedIsland, setSelectedIsland] = useState("백령도");
   const [selectedSeason, setSelectedSeason] = useState("봄");

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
  const [qnaFormCategory, setQnaFormCategory] = useState("배편");
  const [qnaSearch, setQnaSearch] = useState("");
  const [qnaNickname, setQnaNickname] = useState("");
  const [qnaTitle, setQnaTitle] = useState("");
  const [qnaContent, setQnaContent] = useState("");
  const [qnaQuestions, setQnaQuestions] = useState<any[]>([]);
  const [qnaLoading, setQnaLoading] = useState(false);
  const [qnaSubmitting, setQnaSubmitting] = useState(false);
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
    { name: "렌트카", icon: "🚗" },
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
        "수천만 년 동안 형성된 기암절벽과 푸른서해가 어우러진 백령도 대표 절경",
      location: "백령도 북서쪽",
      link: "/place/dumujin",
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
    },
    {
      name: "콩돌해안",
      island: "백령도",
      image: "/images/kongdol.jpg",
      category: "관광지",
      description: "파도 소리가 아름다운 백령도 명소",
      link: "/place/kongdol",
    },

    {
      name: "심청각",
      island: "백령도",
      image: "/images/simcheonggak.jpg",
      category: "관광지",
      description: "심청전 설화가 전해지는 문화 명소",
      link: "/place/simcheonggak",
    },
    {
      name: "하늬해안",
      island: "백령도",
      image: "/images/hani.jpg",
      category: "관광지",
      description: "북한 장산곶 방향의 바다와 점박이물범 서식지를 함께 볼 수 있는 생태관광 명소",
      location: "북한 장산곶 방향이 보이는 백령도 북서쪽 해안",
      tip: "🦭 물범 관찰 추천",
      link: "/place/hani",
    },
    {
  name: "용틀임바위",
  island: "백령도",
  image: "/images/dragon.jpg",
  category: "관광지",
  description: "용이 몸을 비틀며 승천하는 모습을 닮은 백령도의 대표 지질명소",
  link: "/place/dragon",
},
    {
      name: "사자바위",
      island: "백령도",
      image: "/images/sajabawi2.jpg",
      category: "관광지",
      description: "사자의 형상을 닮은 백령도의 대표 해안 바위",
      link: "/place/sajabawi",
    },
    {
      name: "천안함 위령탑",
      island: "백령도",
      image: "/images/cheonan.jpg",
      category: "안보역사",
      description: "천안함 46용사를 추모하는 장소",
      location: "백령면 연화리",
      link: "/place/cheonan",
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
      link: "/place/photozone",
    },
    {
      name: "서해최북단 백령도비",
      island: "백령도",
      image: "/images/baengnyeong-bi.jpg",
      category: "관광지",
      description: "서해 최북단 백령도를 상징하는 기념비입니다. 많은 관광객들이 인증사진을 남기는 대표 포토존입니다.",
      location: "인천 옹진군 백령면 진촌리",
      tip: "📸 포토존",
      link: "/place/baengnyeong-bi",
    },
    {
name: "한국기독교의 섬 / 한국기독교역사관",
island: "백령도",
image: "/images/christian-island.jpg",
category: "안보역사",
description: "백령도의 기독교 역사와 관련 자료를 살펴볼 수 있는 역사문화 공간입니다.",
location: "인천 옹진군 백령면",
tip: "⛪ 역사여행",
link: "/place/christian-island",
    
      encyclopedia: "/place/christianity",
    },
  
    {
      name: "서풍받이",
      island: "대청도",
      image: "/images/seopungbaji.png",
      category: "관광지",
      description: "대청도 남동쪽 해안의 웅장한 절벽과 바다를 함께 만나는 대표 지질명소",
      location: "인천 옹진군 대청면",
      tip: "🥾 해안 트레킹 · 🪨 규암 절벽 · 🌊 서해 절경",
      link: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EC%B2%AD%EB%8F%84+%EC%84%9C%ED%92%8D%EB%B0%9B%EC%9D%B4",
    },
    {
      name: "농여해변",
      island: "대청도",
      image: "/images/nongyeo-beach.png",
      category: "관광지",
      description: "넓은 해변과 독특한 바위 지형을 함께 만나는 대청도 해안 명소",
      location: "인천 옹진군 대청면",
      tip: "🪨 나이테바위 · 🌊 풀등 · 🌅 저녁노을",
      link: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EC%B2%AD%EB%8F%84+%EB%86%8D%EC%97%AC%ED%95%B4%EB%B3%80",
    },

    {
      name: "미아동해변",
      island: "대청도",
      image: "/images/miadong-beach.png",
      category: "관광지",
      description: "탁 트인 모래사장과 푸른 바다가 시원하게 펼쳐지는 대청도 해변",
      location: "인천 옹진군 대청면",
      tip: "🌊 풀등 · 〰️ 물결무늬 연흔 · 📸 해변 풍경",
      link: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EC%B2%AD%EB%8F%84+%EB%AF%B8%EC%95%84%EB%8F%99%ED%95%B4%EB%B3%80",
    },

    {
      name: "삼각산",
      island: "대청도",
      image: "/images/samgaksan.png",
      category: "관광지",
      description: "정상석이 자리한 해발 343m 대청도의 대표 산행 명소",
      location: "인천 옹진군 대청면",
      tip: "⛰️ 해발 343m 정상 · 🔭 섬 조망 · 🥾 트레킹",
      link: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EC%B2%AD%EB%8F%84+%EC%82%BC%EA%B0%81%EC%82%B0",
    },

    {
      name: "매바위전망대",
      island: "대청도",
      image: "/images/maebawi-observatory.png",
      category: "관광지",
      description: "매 조형물과 함께 대청도의 산과 바다 풍경을 바라볼 수 있는 전망 포인트",
      location: "인천 옹진군 대청면",
      tip: "🦅 매 조형물 · 🔭 해안 전망 · 📸 포토존",
      link: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EC%B2%AD%EB%8F%84+%EB%A7%A4%EB%B0%94%EC%9C%84%EC%A0%84%EB%A7%9D%EB%8C%80",
    },

    {
      name: "모래울해변",
      island: "대청도",
      image: "/images/moraeul-beach.png",
      category: "관광지",
      description: "산자락 사이로 길게 이어지는 모래사장과 잔잔한 바다가 어우러진 해변",
      location: "인천 옹진군 대청면",
      tip: "🌲 소나무숲 · 🌊 모래해변 · 😌 조용한 휴식",
      link: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EC%B2%AD%EB%8F%84+%EB%AA%A8%EB%9E%98%EC%9A%B8%ED%95%B4%EB%B3%80",
    },

    {
      name: "지두리해변",
      island: "대청도",
      image: "/images/jiduri-beach.png",
      category: "관광지",
      description: "부드러운 모래사장과 파도 풍경을 가까이에서 즐기기 좋은 대청도 해변",
      location: "인천 옹진군 대청면",
      tip: "🌊 넓은 모래해변 · 🚶 해안 산책 · 📸 바다 풍경",
      link: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EC%B2%AD%EB%8F%84+%EC%A7%80%EB%91%90%EB%A6%AC%ED%95%B4%EB%B3%80",
    },

    {
      name: "답동해변",
      island: "대청도",
      image: "/images/dapdong-beach.png",
      category: "관광지",
      description: "바위 해안과 해안 데크길이 어우러져 걷는 재미가 있는 대청도 해안 명소",
      location: "인천 옹진군 대청면",
      tip: "🚶 해안 산책로 · 🪨 바위해안 · 🌊 해변 풍경",
      link: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EC%B2%AD%EB%8F%84+%EB%8B%B5%EB%8F%99%ED%95%B4%EB%B3%80",
    },

    {
      name: "해넘이전망대",
      island: "대청도",
      image: "/images/sunset-observatory.png",
      category: "관광지",
      description: "탁 트인 서해를 바라보며 대청도의 해넘이 풍경을 감상하기 좋은 전망대",
      location: "인천 옹진군 대청면",
      tip: "🌅 서해 일몰 · 🔭 탁 트인 전망 · 📸 노을 사진",
      link: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EC%B2%AD%EB%8F%84+%ED%95%B4%EB%84%98%EC%9D%B4%EC%A0%84%EB%A7%9D%EB%8C%80",
    },
    {
      name: "소청등대",
      island: "소청도",
      image: "/images/socheong-lighthouse.png",
      category: "관광지",
      description: "소청도의 푸른 바다와 섬 풍경을 함께 바라볼 수 있는 대표적인 등대 명소",
      location: "인천 옹진군 대청면 소청리",
      tip: "🌊 바다전망 · 📸 등대풍경",
      link: "https://www.google.com/maps/search/?api=1&query=%EC%86%8C%EC%B2%AD%EB%8F%84+%EC%86%8C%EC%B2%AD%EB%93%B1%EB%8C%80",
    },

    {
      name: "분바위",
      island: "소청도",
      image: "/images/bunbawi.png",
      category: "관광지",
      description: "바다와 맞닿은 밝은 암벽이 인상적인 소청도의 대표 해안 절경",
      location: "인천 옹진군 대청면 소청리",
      tip: "🪨 해안절경 · 📸 지질풍경",
      link: "https://www.google.com/maps/search/?api=1&query=%EC%86%8C%EC%B2%AD%EB%8F%84+%EB%B6%84%EB%B0%94%EC%9C%84",
    },

    {
      name: "스트로마톨라이트",
      island: "소청도",
      image: "/images/stromatolite.png",
      category: "관광지",
      description: "소청도의 독특한 지질 경관을 가까이에서 살펴볼 수 있는 자연 학습 명소",
      location: "인천 옹진군 대청면 소청리",
      tip: "🌍 지질명소 · 🪨 자연학습",
      link: "https://www.google.com/maps/search/?api=1&query=%EC%86%8C%EC%B2%AD%EB%8F%84+%EC%8A%A4%ED%8A%B8%EB%A1%9C%EB%A7%88%ED%86%A8%EB%9D%BC%EC%9D%B4%ED%8A%B8",
    },



    {
      name: "옥죽동 해안사구",
      island: "대청도",
      image: "/images/okjuk-sand-dune.png",
      category: "관광지",
      description: "대청도 북쪽 해안에서 바람이 만든 모래언덕을 만나는 대표 해안사구",
      location: "인천 옹진군 대청면 옥죽동",
      tip: "🏜️ 모래사막 풍경 · 🐫 이색 포토존 · 🌍 지질명소",
      link: "https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EC%B2%AD%EB%8F%84+%EC%98%A5%EC%A3%BD%EB%8F%99+%ED%95%B4%EC%95%88%EC%82%AC%EA%B5%AC",
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
    const themeStops: Record<string, string[]> = {
      "자연·사진": ["두무진", "콩돌해안", "사곶해변", "끝섬전망대"],
      "아이와 가족": ["심청각", "사곶해변", "콩돌해안", "백령도 사진명소"],
      "군인 면회": ["진촌 시내", "사곶해변", "콩돌해안", "현지 맛집"],
      "역사·안보": ["천안함 위령탑", "중화동교회", "심청각", "끝섬전망대"],
      "맛집·카페": ["백령면옥", "현지인 추천 식당", "두무나루카페", "바다 전망 카페"],
      "힐링·느긋하게": ["하늬해안", "콩돌해안", "두무진", "노을 감상"],
    };

    const selectedStops = themeStops[plannerTheme] || themeStops["자연·사진"];
    const dayCount = plannerDuration === "당일" ? 1 : plannerDuration === "1박 2일" ? 2 : 3;

    const templates = [
      {
        title: "백령도 첫인상과 대표 명소",
        schedule: [
          { time: "오전", place: "용기포항 도착 · 차량 인수", detail: "배에서 내린 뒤 교통수단을 정리하고 여행을 시작해요." },
          { time: "점심", place: plannerTheme === "맛집·카페" ? selectedStops[0] : "진촌 현지 식당", detail: "냉면, 칼국수, 한식 등 현지 메뉴로 든든하게 시작해요." },
          { time: "오후", place: selectedStops[0], detail: `${plannerTheme} 취향을 반영한 첫 번째 핵심 코스예요.` },
          { time: "늦은 오후", place: selectedStops[1], detail: "이동 동선을 줄이면서 백령도의 풍경을 여유롭게 즐겨요." },
          { time: "저녁", place: "진촌 시내 또는 숙소 근처", detail: "저녁식사 후 숙소 체크인과 휴식을 추천해요." },
        ],
      },
      {
        title: "백령도 핵심 절경 완성",
        schedule: [
          { time: "아침", place: "숙소 조식 · 출발 준비", detail: "기상과 배편 공지를 먼저 확인해요." },
          { time: "오전", place: selectedStops[2], detail: "사람이 붐비기 전 대표 명소를 먼저 둘러봐요." },
          { time: "점심", place: "현지인 추천 맛집", detail: "이동 경로와 가까운 식당을 선택하면 시간을 아낄 수 있어요." },
          { time: "오후", place: selectedStops[3], detail: "사진 촬영과 산책 시간을 넉넉히 잡아두세요." },
          { time: "저녁", place: "노을 명소 · 숙소", detail: "날씨가 좋으면 끝섬전망대나 서쪽 해안에서 노을을 즐겨요." },
        ],
      },
      {
        title: "숨은 이야기와 여유로운 마무리",
        schedule: [
          { time: "아침", place: "하늬해안", detail: "조용한 아침 바다와 생태 풍경을 감상해요." },
          { time: "오전", place: plannerTheme === "역사·안보" ? "천안함 위령탑" : "심청각", detail: "백령도의 자연뿐 아니라 이야기까지 함께 만나봐요." },
          { time: "점심", place: "진촌 시내", detail: "마지막 식사와 특산물 구입 시간을 함께 잡아요." },
          { time: "오후", place: "용기포항 이동", detail: "출항 1시간 전까지 여유 있게 도착하는 일정이에요." },
        ],
      },
    ];

    const transportTip = plannerTransport === "도보·대중교통"
      ? "백령도는 관광지 사이 거리가 멀어 공영버스 시간표와 개인택시 번호를 미리 저장하세요."
      : "차량 이동 시 주유소 위치와 반납 시간을 미리 확인하면 일정이 훨씬 편해요.";

    const companionTip = plannerCompanion === "아이 동반"
      ? "아이와 함께라면 해안 산책 시간을 짧게 나누고 간식과 여벌옷을 준비하세요."
      : plannerCompanion === "부모님"
      ? "부모님과 함께라면 계단과 경사가 적은 사곶해변·콩돌해안을 중심으로 여유 있게 이동하세요."
      : plannerCompanion === "군인 면회"
      ? "외출·복귀 시간을 최우선으로 두고 진촌 시내와 가까운 코스를 먼저 배치하세요."
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
      "백령도 여행 전날과 당일 아침에 여객선 운항 여부를 꼭 확인하세요.",
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
    { name: "백령도 AI 여행 플래너", category: "여행코스", icon: "✨", description: "기간과 동행에 맞는 백령도 일정을 자동으로 만들어드려요.", target: "ai-planner" },
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
    <a href="/" className="text-xl font-bold text-gray-900">
      백령·대청·소청도의 모든 정보
    </a>

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
  </div>
</header>
      {/* HERO */}
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
            백령·대청·소청도의 모든 정보
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

{/* 통합 검색 */}
<section id="global-search" className="relative z-10 max-w-6xl mx-auto px-6 -mt-10 pb-10">
  <div className="rounded-[2rem] bg-white p-6 md:p-9 shadow-2xl border border-gray-100">
    <div className="text-center mb-6">
      <p className="font-bold text-sky-600 mb-2">백령도 통합검색</p>
      <h2 className="text-3xl md:text-4xl font-extrabold">무엇을 찾고 계신가요?</h2>
      <p className="mt-3 text-gray-500">관광지·맛집·숙소·교통·여행정보를 한 번에 찾아보세요.</p>
    </div>

    <form
      onSubmit={(e) => { e.preventDefault(); runGlobalSearch(); }}
      className="flex flex-col sm:flex-row gap-3 max-w-4xl mx-auto"
    >
      <div className="relative flex-1">
        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
        <input
          value={globalSearch}
          onChange={(e) => setGlobalSearch(e.target.value)}
          placeholder="예: 두무진, 군인 면회, 숙소, 맛집"
          className="w-full rounded-2xl border-2 border-gray-200 bg-gray-50 py-5 pl-14 pr-5 text-lg outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
        />
      </div>
      <button type="submit" className="rounded-2xl bg-black px-8 py-5 text-lg font-bold text-white hover:bg-sky-600 transition">
        검색하기
      </button>
    </form>

    <div className="mt-6 flex flex-wrap justify-center gap-2">
      <span className="py-2 text-sm font-bold text-gray-500">🔥 인기검색어</span>
      {["두무진", "사곶해변", "군인 면회", "맛집", "숙소", "배편", "렌터카", "사진첩"].map((keyword) => (
        <button key={keyword} type="button" onClick={() => runGlobalSearch(keyword)} className="rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700 hover:bg-sky-600 hover:text-white transition">
          #{keyword}
        </button>
      ))}
    </div>

    {showSearchResults && (
      <div id="search-results" className="scroll-mt-24 mt-8 border-t pt-8">
        <div className="flex items-center justify-between gap-4 mb-5">
          <h3 className="text-2xl font-extrabold">
            {globalSearch ? `“${globalSearch}” 검색결과` : "검색어를 입력해주세요"}
          </h3>
          {searchResults.length > 0 && <span className="text-sm font-bold text-sky-600">{searchResults.length}개 결과</span>}
        </div>

        {globalSearch && searchResults.length === 0 ? (
          <div className="rounded-2xl bg-gray-50 p-8 text-center">
            <div className="text-5xl mb-3">🔎</div>
            <p className="font-bold text-lg">일치하는 정보가 아직 없어요.</p>
            <p className="mt-2 text-gray-500">다른 단어로 검색하거나 제보센터를 이용해주세요.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {searchResults.map((item, index) => (
              <button
                key={`${item.name}-${index}`}
                type="button"
                onClick={() => openSearchResult(item)}
                className="group flex items-start gap-4 rounded-2xl border border-gray-200 p-5 text-left hover:border-sky-400 hover:bg-sky-50 transition"
              >
                <div className="text-3xl">{item.icon || "📍"}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg font-extrabold group-hover:text-sky-700">{item.name}</h4>
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-600">{item.category}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{item.description}</p>
                  <p className="mt-3 text-sm font-bold text-sky-600">바로 보기 →</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    )}
  </div>
</section>

{/* AI 여행 플래너 */}
<section id="ai-planner" className="max-w-7xl mx-auto px-6 py-20">
  <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-sky-700 shadow-2xl">
    <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
      <div className="p-8 md:p-12 text-white">
        <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold ring-1 ring-white/20">
          ✨ 맞춤 일정 자동 생성
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
          백령도 AI 여행 플래너
        </h2>
        <p className="mt-5 text-lg leading-8 text-sky-100">
          여행 기간과 동행, 관심사를 선택하면 백령도 이동 동선을 고려한 맞춤 일정을 바로 만들어드려요.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
          {["대표 관광지", "현지 맛집", "이동 순서", "계절별 준비팁"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10">
              ✓ {item}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-7 md:p-10">
        <div className="grid sm:grid-cols-2 gap-5">
          <label className="block">
            <span className="mb-2 block font-bold text-gray-800">🗓️ 여행 기간</span>
            <select value={plannerDuration} onChange={(e) => setPlannerDuration(e.target.value)} className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100">
              <option>당일</option><option>1박 2일</option><option>2박 3일</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block font-bold text-gray-800">👥 누구와 가나요?</span>
            <select value={plannerCompanion} onChange={(e) => setPlannerCompanion(e.target.value)} className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100">
              <option>혼자</option><option>연인</option><option>가족</option><option>아이 동반</option><option>부모님</option><option>군인 면회</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block font-bold text-gray-800">💙 여행 취향</span>
            <select value={plannerTheme} onChange={(e) => setPlannerTheme(e.target.value)} className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100">
              <option>자연·사진</option><option>아이와 가족</option><option>군인 면회</option><option>역사·안보</option><option>맛집·카페</option><option>힐링·느긋하게</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block font-bold text-gray-800">🚗 이동수단</span>
            <select value={plannerTransport} onChange={(e) => setPlannerTransport(e.target.value)} className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100">
              <option>렌터카·자가용</option><option>도보·대중교통</option>
            </select>
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-2 block font-bold text-gray-800">🌿 여행 계절</span>
            <div className="grid grid-cols-4 gap-2">
              {["봄", "여름", "가을", "겨울"].map((season) => (
                <button key={season} type="button" onClick={() => setPlannerSeason(season)} className={`rounded-2xl px-3 py-3 font-bold transition ${plannerSeason === season ? "bg-sky-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                  {season}
                </button>
              ))}
            </div>
          </label>
        </div>
                <button onClick={makeTravelPlan} className="mt-7 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-blue-700 px-6 py-5 text-xl font-extrabold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
          ✨ 나만의 백령도 일정 만들기
        </button>
        <p className="mt-3 text-center text-xs text-gray-400">
          현재는 백령도 현지 정보를 기반으로 일정을 자동 조합하는 무료 버전입니다.
        </p>
      </div>
    </div>
  </div>

  {plannerResult && (
    <div id="planner-result" className="scroll-mt-24 mt-10 rounded-[2rem] border border-sky-100 bg-sky-50 p-6 md:p-10 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <p className="font-bold text-sky-600">AI 추천 일정 완성</p>
          <h3 className="mt-1 text-3xl md:text-4xl font-extrabold text-gray-900">
            {plannerDuration} · {plannerCompanion} 맞춤 여행
          </h3>
          <p className="mt-3 text-gray-600">{plannerTheme} 중심 · {plannerTransport} · {plannerSeason} 여행</p>
        </div>
        <button onClick={makeTravelPlan} className="rounded-full bg-white px-5 py-3 font-bold text-sky-700 shadow hover:shadow-md">
          🔄 일정 다시 만들기
        </button>
      </div>

      <div className="space-y-7">
        {plannerResult.map((day, dayIndex) => (
          <article key={dayIndex} className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-5 text-white">
              <p className="text-sm font-bold text-sky-100">DAY {dayIndex + 1}</p>
              <h4 className="mt-1 text-2xl font-extrabold">{day.title}</h4>
            </div>
            <div className="divide-y divide-gray-100">
              {day.schedule.map((item: any, itemIndex: number) => (
                <div key={itemIndex} className="grid md:grid-cols-[110px_1fr] gap-3 px-6 py-5">
                  <span className="h-fit w-fit rounded-full bg-sky-100 px-4 py-2 text-sm font-extrabold text-sky-700">{item.time}</span>
                  <div>
                    <h5 className="text-lg font-extrabold text-gray-900">📍 {item.place}</h5>
                    <p className="mt-2 leading-7 text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-200">
        <h4 className="text-xl font-extrabold text-amber-900">💡 이 여행에 꼭 필요한 팁</h4>
        <ul className="mt-4 space-y-3 text-amber-950">
          {plannerTips.map((tip, index) => (
            <li key={index} className="flex gap-3"><span>✓</span><span>{tip}</span></li>
          ))}
        </ul>
      </div>
    </div>
  )}
</section>

{/* 계절별 백령도 */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-10">
    <p className="font-bold text-sky-600 mb-2">사계절 여행 가이드</p>

    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
      🌿 계절마다 다른 백령도
    </h2>

    <p className="mt-4 text-lg text-gray-500">
      봄·여름·가을·겨울 버튼을 눌러 계절별 풍경과 여행 팁을 확인하세요.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-3 mb-10">
    {["봄", "여름", "가을", "겨울"].map((season) => (
      <button
        key={season}
        type="button"
        onClick={() => setSelectedSeason(season)}
        className={`rounded-full px-7 py-3 font-extrabold transition ${
          selectedSeason === season
            ? "bg-sky-600 text-white shadow-lg"
            : "bg-white text-gray-700 border border-gray-200 hover:bg-sky-50"
        }`}
      >
        {season}
      </button>
    ))}
  </div>

  {selectedSeason === "봄" && (
    <div className="grid lg:grid-cols-2 gap-8 items-center rounded-[2rem] bg-pink-50 p-6 md:p-10 shadow-lg">
      <div className="relative h-[320px] md:h-[430px] overflow-hidden rounded-3xl">
        <Image
          src="/images/season-spring.jpg"
          alt="봄의 백령도"
          fill
          className="object-cover"
        />
      </div>

      <div>
        <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 font-bold text-pink-700">
          🌸 봄 여행
        </span>

        <h3 className="mt-5 text-3xl md:text-4xl font-black">
          따뜻한 바람과 함께 시작하는 백령도 여행
        </h3>

        <p className="mt-5 leading-8 text-gray-700">
          봄에는 겨울보다 바람이 부드러워지고 섬 곳곳에서 새싹과 봄꽃을
          만날 수 있습니다. 두무진과 사곶해변을 천천히 걷기에 좋고,
          맑은 날에는 사진도 선명하게 나오는 계절입니다.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-4 font-bold">📸 추천: 두무진·사곶해변</div>
          <div className="rounded-2xl bg-white p-4 font-bold">🧥 준비물: 얇은 바람막이</div>
          <div className="rounded-2xl bg-white p-4 font-bold">🚶 추천활동: 해안 산책</div>
          <div className="rounded-2xl bg-white p-4 font-bold">🗓️ 추천시기: 4월~5월</div>
        </div>
      </div>
    </div>
  )}

  {selectedSeason === "여름" && (
    <div className="grid lg:grid-cols-2 gap-8 items-center rounded-[2rem] bg-sky-50 p-6 md:p-10 shadow-lg">
      <div className="relative h-[320px] md:h-[430px] overflow-hidden rounded-3xl">
        <Image
          src="/images/season-summer.jpg"
          alt="여름의 백령도"
          fill
          className="object-cover"
        />
      </div>

      <div>
        <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 font-bold text-sky-700">
          🌊 여름 여행
        </span>

        <h3 className="mt-5 text-3xl md:text-4xl font-black">
          푸른 바다와 해안 풍경이 가장 빛나는 계절
        </h3>

        <p className="mt-5 leading-8 text-gray-700">
          여름에는 백령도의 바다색이 가장 선명하고 해변 여행을 즐기기
          좋습니다. 사곶해변, 콩돌해안, 하늬해안에서 시원한 풍경을
          감상할 수 있으며 햇빛과 자외선 대비가 필요합니다.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-4 font-bold">🏖️ 추천: 사곶해변·콩돌해안</div>
          <div className="rounded-2xl bg-white p-4 font-bold">🧴 준비물: 선크림·모자</div>
          <div className="rounded-2xl bg-white p-4 font-bold">📷 추천활동: 해변 사진</div>
          <div className="rounded-2xl bg-white p-4 font-bold">🗓️ 추천시기: 6월~8월</div>
        </div>
      </div>
    </div>
  )}

  {selectedSeason === "가을" && (
    <div className="grid lg:grid-cols-2 gap-8 items-center rounded-[2rem] bg-amber-50 p-6 md:p-10 shadow-lg">
      <div className="relative h-[320px] md:h-[430px] overflow-hidden rounded-3xl">
        <Image
          src="/images/season-autumn.jpg"
          alt="가을의 백령도"
          fill
          className="object-cover"
        />
      </div>

      <div>
        <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 font-bold text-amber-700">
          🍂 가을 여행
        </span>

        <h3 className="mt-5 text-3xl md:text-4xl font-black">
          선선한 날씨와 노을이 아름다운 백령도
        </h3>

        <p className="mt-5 leading-8 text-gray-700">
          가을은 백령도를 여행하기 가장 편안한 계절 중 하나입니다.
          낮에는 선선하고 해 질 무렵에는 붉은 노을이 아름다워
          끝섬전망대와 서쪽 해안을 방문하기 좋습니다.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-4 font-bold">🌅 추천: 끝섬전망대·두무진</div>
          <div className="rounded-2xl bg-white p-4 font-bold">🧣 준비물: 가벼운 겉옷</div>
          <div className="rounded-2xl bg-white p-4 font-bold">🚗 추천활동: 해안 드라이브</div>
          <div className="rounded-2xl bg-white p-4 font-bold">🗓️ 추천시기: 9월~10월</div>
        </div>
      </div>
    </div>
  )}

  {selectedSeason === "겨울" && (
    <div className="grid lg:grid-cols-2 gap-8 items-center rounded-[2rem] bg-slate-100 p-6 md:p-10 shadow-lg">
      <div className="relative h-[320px] md:h-[430px] overflow-hidden rounded-3xl">
        <Image
          src="/images/season-winter.jpg"
          alt="겨울의 백령도"
          fill
          className="object-cover"
        />
      </div>

      <div>
        <span className="inline-flex rounded-full bg-slate-200 px-4 py-2 font-bold text-slate-700">
          ❄️ 겨울 여행
        </span>

        <h3 className="mt-5 text-3xl md:text-4xl font-black">
          고요하고 웅장한 겨울 바다를 만나는 계절
        </h3>

        <p className="mt-5 leading-8 text-gray-700">
          겨울의 백령도는 바람이 강하고 날씨 변화가 크지만,
          사람이 적어 조용한 풍경을 즐길 수 있습니다. 결항 가능성이
          있으므로 배편과 기상 정보를 자주 확인하는 것이 중요합니다.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-4 font-bold">🌊 추천: 두무진·하늬해안</div>
          <div className="rounded-2xl bg-white p-4 font-bold">🧤 준비물: 방풍·방한용품</div>
          <div className="rounded-2xl bg-white p-4 font-bold">☕ 추천활동: 드라이브·카페</div>
          <div className="rounded-2xl bg-white p-4 font-bold">🗓️ 추천시기: 12월~2월</div>
        </div>
      </div>
    </div>
  )}
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
      <section id="live-info" className="max-w-7xl mx-auto px-6 py-10">

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
        </section>
{/* 백령도 소개 */}
{selectedIsland === "백령도" && (
<section className="max-w-6xl mx-auto px-6 py-16">
  <div className="bg-white rounded-3xl shadow-lg p-10 leading-9">

    <h2 className="text-4xl font-bold text-sky-700 mb-8">
      🌊 백령도는 어떤 곳인가요?
    </h2>

    <p className="text-gray-700 mb-6">
      백령도는 대한민국 서해 최북단에 위치한 섬으로 인천광역시 옹진군에 속해 있습니다.
      인천항에서 여객선을 이용해 약 4시간 정도 이동하면 만날 수 있으며,
      국내에서는 쉽게 볼 수 없는 웅장한 해안절벽과 천혜의 자연환경,
      그리고 다양한 지질 명소를 품고 있는 특별한 여행지입니다.
      북한 장산곶과 가장 가까운 섬이라는 지리적 특징도 가지고 있어
      자연과 역사, 안보를 함께 경험할 수 있는 곳으로 많은 여행객들의 관심을 받고 있습니다.
    </p>

    <p className="text-gray-700 mb-6">
      백령도를 대표하는 관광지는 단연 두무진입니다.
      수천만 년 동안 형성된 기암절벽과 푸른 서해가 어우러진 풍경은
      대한민국 최고의 해안 절경 가운데 하나로 꼽힙니다.
      유람선을 타면 해안을 따라 이어지는 기암괴석을 가까이에서 감상할 수 있으며,
      날씨가 좋은 날에는 더욱 웅장한 자연의 모습을 만날 수 있습니다.
    </p>

    <p className="text-gray-700 mb-6">
      사곶해변은 세계적으로도 보기 드문 천연비행장으로 유명합니다.
      모래가 매우 단단하여 과거 실제 비행기가 이착륙했던 장소로 알려져 있으며,
      지금은 넓고 아름다운 해변을 걸으며 산책을 즐길 수 있는 명소가 되었습니다.
      또한 콩돌해안에서는 파도가 밀려올 때마다 들리는 아름다운 자갈 소리를 들을 수 있어
      많은 관광객과 사진작가들이 찾고 있습니다.
    </p>

    <p className="text-gray-700 mb-6">
      백령도는 사계절 모두 다른 매력을 가지고 있습니다.
      봄에는 따뜻한 날씨와 야생화를,
      여름에는 시원한 바다와 해변을,
      가을에는 맑은 하늘과 아름다운 노을을,
      겨울에는 철새와 고요한 겨울 바다를 만날 수 있습니다.
      특히 봄과 가을은 여행하기 가장 좋은 시기로 꼽히며,
      자연을 좋아하는 여행객들에게 많은 사랑을 받고 있습니다.
    </p>

    <p className="text-gray-700 mb-6">
      백령도는 가족여행, 부모님과 함께하는 여행, 커플여행,
      친구들과의 여행은 물론 군인 면회를 위한 방문객도 많은 지역입니다.
      여행을 계획할 때는 여객선 예약과 숙소 예약을 미리 진행하는 것이 좋으며,
      섬 내부 이동은 렌터카나 개인택시를 이용하면 더욱 편리하게 관광할 수 있습니다.
    </p>

    <p className="text-gray-700 mb-6">
      백령도에는 현지 주민들이 운영하는 맛집과 숙박업소도 다양하게 있습니다.
      신선한 해산물과 백령도식 냉면, 자연산 회 등 지역의 특색 있는 음식을 즐길 수 있으며,
      바다가 보이는 숙소와 가족 단위 여행객을 위한 펜션도 많이 운영되고 있습니다.
      여행 일정에 맞는 숙소를 선택하면 더욱 여유로운 여행을 즐길 수 있습니다.
    </p>

    <p className="text-gray-700 mb-6">
      이 사이트는 백령도에서 28년 동안 생활한 운영자가 직접 경험한 내용을 바탕으로
      여행객들이 꼭 필요한 정보를 쉽고 편리하게 확인할 수 있도록 제작한 여행 플랫폼입니다.
      관광지, 맛집, 숙소, 배편 정보, 군인 면회 정보,
      교통, 여행 코스, 여행 준비물, 계절별 여행 팁 등
      실제 여행에 도움이 되는 정보를 지속적으로 업데이트하고 있습니다.
    </p>

    <p className="text-gray-700">
      처음 백령도를 방문하는 분부터 여러 번 여행을 다녀온 분들까지
      모두가 편리하게 이용할 수 있는 여행 플랫폼을 목표로 운영하고 있습니다.
      앞으로도 새로운 관광지와 맛집, 숙소, 축제, 특산품 등
      최신 정보를 꾸준히 추가하여 백령도를 찾는 모든 분들에게 도움이 되는 사이트가 되겠습니다.
    </p>

  </div>
</section>
)}
<div className="bg-white rounded-3xl shadow-lg overflow-hidden">

  <a
    href="/images/seal.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Image
      src="/images/seal.jpg"
      alt="점박이물범"
      width={500}
      height={300}
      className="block w-full h-56 object-cover hover:opacity-90 transition duration-300 cursor-pointer"
    />
  </a>

  <div className="p-6">
    <h3 className="text-2xl font-bold mb-3">
      🦭 점박이물범
    </h3>

    <p className="text-gray-600 leading-7">
      백령도는 우리나라에서 점박이물범을 가장 가까이에서
      관찰할 수 있는 대표 지역입니다.
      매년 많은 관광객과 사진작가들이 찾습니다.
    </p>
  </div>

</div>
<div className="bg-white rounded-3xl shadow-lg overflow-hidden">

  <a
    href="/images/rose.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Image
      src="/images/rose.jpg"
      alt="해당화"
      width={500}
      height={300}
      className="block w-full h-56 object-cover hover:opacity-90 transition duration-300 cursor-pointer"
    />
  </a>

  <div className="p-6">
    <h3 className="text-2xl font-bold mb-3">
      🌹 해당화
    </h3>

    <p className="text-gray-600 leading-7">
      백령도 해안에서 자라는 아름다운 야생화로
      봄과 초여름이면 붉은 꽃이 피어
      관광객들의 사랑을 받고 있습니다.
    </p>
  </div>

</div>
<div className="bg-white rounded-3xl shadow-lg overflow-hidden">

  <a
    href="/images/bird.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Image
      src="/images/bird.jpg"
      alt="철새"
      width={500}
      height={300}
      className="block w-full h-56 object-cover hover:opacity-90 transition duration-300 cursor-pointer"
    />
  </a>

  <div className="p-6">
    <h3 className="text-2xl font-bold mb-3">
      🦅 철새
    </h3>

    <p className="text-gray-600 leading-7">
      백령도는 동아시아 철새 이동경로에 위치해
      봄과 가을이면 다양한 철새를
      관찰할 수 있는 생태관광지입니다.
    </p>
  </div>

</div>
<div className="bg-white rounded-3xl shadow-lg overflow-hidden">

  <a
    href="/images/plant.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <Image
      src="/images/plant.jpg"
      alt="해안절벽과 괭이갈매기"
      width={500}
      height={300}
      className="block w-full h-56 object-cover hover:opacity-90 transition duration-300 cursor-pointer"
    />
  </a>

  <div className="p-6">
    <h3 className="text-2xl font-bold mb-3">
      🏞️ 해안절벽과 괭이갈매기
    </h3>

    <p className="text-gray-600 leading-7">
      백령도는 웅장한 해안절벽과 푸른 서해가 어우러진 아름다운
      자연경관을 자랑합니다. 절벽 주변에는 괭이갈매기가 무리를
      지어 서식하며 힘차게 비행하는 모습을 가까이에서 볼 수 있어
      백령도를 대표하는 자연생태 명소로 손꼽힙니다.
    </p>
  </div>

</div>
{/* 섬별 FAQ */}
{selectedIsland === "대청도" && (
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-10">
    <p className="font-bold text-sky-600 mb-2">여행 전 많이 묻는 질문</p>
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">❓ 대청도 여행 FAQ</h2>
    <p className="mt-4 text-lg text-gray-500">대청도 여행을 준비할 때 자주 궁금해하는 내용을 한눈에 정리했어요.</p>
  </div>
  <div className="max-w-4xl mx-auto space-y-4">
    {[
      ["대청도는 어떻게 들어가나요?", "인천에서 여객선을 이용해 들어가는 섬입니다. 기상과 해상 상황에 따라 운항이 달라질 수 있으므로 출발 전 선사 운항정보를 꼭 확인하세요."],
      ["대청도에서 꼭 가볼 만한 곳은 어디인가요?", "옥죽동 해안사구, 서풍받이, 농여해변, 미아동해변, 삼각산, 매바위전망대, 모래울해변, 지두리해변, 답동해변, 해넘이전망대 등을 둘러볼 수 있어요."],
      ["대청도에 숙박할 곳이 있나요?", "네. 민박과 펜션 등 여러 숙박업소가 있습니다. 플랫폼의 대청도 숙박 메뉴에서 전화번호를 확인한 뒤 방문 전 예약 여부를 확인하는 것을 권해요."],
      ["대청도에 식당이 있나요?", "네. 대청도에는 여러 음식점이 있습니다. 플랫폼의 대청도 맛집 메뉴에서 업체와 전화번호를 확인할 수 있어요."],
      ["대청도에서 낚시배를 이용할 수 있나요?", "네. 현지 안내자료에 등록된 낚시배 연락처를 플랫폼의 낚시배 메뉴에 정리해 두었어요. 이용 전 전화로 출항 가능 여부와 비용을 확인하세요."],
      ["대청도 여행은 날씨 영향을 많이 받나요?", "섬 여행은 바람과 파도 등 해상 상황의 영향을 많이 받습니다. 특히 입도·출도 일정은 여유 있게 계획하고 출발 당일 운항 여부를 다시 확인하는 것이 좋아요."],
    ].map(([q,a],i)=>(
      <details key={i} className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
        <summary className="cursor-pointer list-none font-extrabold text-gray-900 flex justify-between gap-4">
          <span>{q}</span><span className="text-sky-500 group-open:rotate-45 transition">＋</span>
        </summary>
        <p className="mt-4 leading-7 text-gray-600">{a}</p>
      </details>
    ))}
  </div>
</section>
)}

{selectedIsland === "소청도" && (
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-10">
    <p className="font-bold text-sky-600 mb-2">여행 전 많이 묻는 질문</p>
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">❓ 소청도 여행 FAQ</h2>
    <p className="mt-4 text-lg text-gray-500">소청도 여행 전에 알아두면 좋은 내용을 정리했어요.</p>
  </div>
  <div className="max-w-4xl mx-auto space-y-4">
    {[
      ["소청도는 어떻게 들어가나요?", "여객선을 이용해 들어가는 섬으로, 기상과 해상 상황에 따라 운항 일정이 달라질 수 있습니다. 출발 전 반드시 최신 운항정보를 확인하세요."],
      ["소청도에서 꼭 가볼 만한 곳은 어디인가요?", "소청등대, 분바위, 스트로마톨라이트가 대표적인 명소예요. 바다 풍경과 독특한 지질경관을 함께 볼 수 있습니다."],
      ["소청도에 숙박할 곳이 있나요?", "네. 현지 안내자료에 등록된 민박들이 있습니다. 플랫폼의 소청도 숙박 메뉴에서 연락처를 확인하고 방문 전에 예약 여부를 확인하세요."],
      ["소청도에 식당이 있나요?", "현재 제공받은 현지 안내자료 기준으로 음식점 정보를 플랫폼에 정리해 두었어요. 방문 전 전화로 영업 여부를 확인하는 것이 좋습니다."],
      ["소청도 여행은 당일치기가 가능한가요?", "배 운항시간과 당일 해상 상황에 따라 달라질 수 있어요. 섬 이동은 변수가 있으므로 배 시간부터 확인한 뒤 여행 일정을 잡는 것이 안전합니다."],
      ["소청도 여행에서 가장 주의할 점은 무엇인가요?", "선박 운항 여부와 날씨를 가장 먼저 확인하세요. 관광지 이동과 숙박·식사도 육지보다 선택지가 제한될 수 있으므로 미리 연락해 확인하는 것을 권합니다."],
    ].map(([q,a],i)=>(
      <details key={i} className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
        <summary className="cursor-pointer list-none font-extrabold text-gray-900 flex justify-between gap-4">
          <span>{q}</span><span className="text-sky-500 group-open:rotate-45 transition">＋</span>
        </summary>
        <p className="mt-4 leading-7 text-gray-600">{a}</p>
      </details>
    ))}
  </div>
</section>
)}

{selectedIsland === "백령도" && (
<section className="max-w-6xl mx-auto px-6 py-16">
  <div className="mb-8 rounded-[2rem] bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 md:p-8 border border-violet-100">
    <p className="font-bold text-violet-700">여행 전 많이 묻는 질문</p>
    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
      ❓ 백령도 여행 FAQ
    </h2>
    <p className="mt-3 max-w-3xl leading-7 text-gray-600">
      질문을 누르면 답변이 펼쳐집니다. 더 궁금한 내용은 아래 Q&amp;A에서 직접 질문할 수 있습니다.
    </p>
  </div>

  <div className="space-y-3">
    {[
      {
        q: "백령도는 어떻게 가나요?",
        a: "인천항에서 출발하는 여객선을 이용하면 됩니다. 계절과 기상상황에 따라 운항시간이 달라질 수 있으므로 출발 전 반드시 여객선 운항 여부를 확인하는 것이 좋습니다.",
      },
      {
        q: "백령도 여행은 몇 박이 좋나요?",
        a: "주요 관광지만 둘러본다면 1박 2일, 여유롭게 여행하려면 2박 3일을 추천합니다.",
      },
      {
        q: "렌터카가 꼭 필요한가요?",
        a: "관광지가 넓게 분포되어 있어 렌터카나 개인택시를 이용하면 훨씬 편하게 여행할 수 있습니다.",
      },
      {
        q: "가장 유명한 관광지는 어디인가요?",
        a: "두무진, 사곶해변, 콩돌해안, 끝섬전망대, 하늬해안이 대표 관광지입니다.",
      },
      {
        q: "백령도는 언제 가는 것이 좋나요?",
        a: "봄과 가을이 가장 인기가 많으며, 여름에는 해변을 즐기기 좋고 겨울에는 철새와 고요한 자연을 감상할 수 있습니다.",
      },
    ].map((faq, index) => (
      <div key={faq.q} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setOpenFaq(openFaq === index ? null : index)}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left hover:bg-sky-50 transition"
        >
          <span className="text-lg md:text-xl font-extrabold text-sky-700">
            Q. {faq.q}
          </span>
          <span className="shrink-0 text-2xl text-sky-600">
            {openFaq === index ? "−" : "+"}
          </span>
        </button>

        {openFaq === index && (
          <div className="border-t border-gray-100 bg-gray-50 px-5 py-5">
            <p className="leading-8 text-gray-700">A. {faq.a}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</section>
)}
{/* 최신 여행정보 */}
{selectedIsland === "백령도" && (
<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-4xl font-bold text-center mb-10">
    📰 최신 백령도 여행정보
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-4">
        🚢 백령도 배편 예약
      </h3>

      <p className="text-gray-700 leading-7">
        백령도 여행 전 가장 먼저 준비해야 하는 것은 여객선 예약입니다.
        성수기에는 조기 매진되는 경우가 많으므로 미리 예약하는 것을 추천합니다.
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-4">
        🌤️ 여행하기 좋은 계절
      </h3>

      <p className="text-gray-700 leading-7">
        봄과 가을은 백령도를 가장 아름답게 즐길 수 있는 시기입니다.
        여름은 해변 여행, 겨울은 철새 관찰 여행이 인기가 많습니다.
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-4">
        📸 꼭 가봐야 할 명소
      </h3>

      <p className="text-gray-700 leading-7">
        두무진, 사곶해변, 콩돌해안, 끝섬전망대,
        하늬해안은 백령도를 대표하는 관광지입니다.
      </p>
    </div>

  </div>
</section>
)}
      {/* ISLAND MENU */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex justify-center gap-4 flex-wrap">

          {["백령도", "대청도", "소청도"].map((island) => (
            <button
              key={island}
              onClick={() => {
                setSelectedIsland(island);
                setSelectedCategory(island === "백령도" ? "전체" : "관광지");
              }}
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

          {islandCategories.map((category) => (

            <button
              key={category.name}
              onClick={() => {

                setSelectedCategory(category.name);

                if (
                  selectedIsland !== "백령도" &&
                  ["맛집", "숙박", "낚시배"].includes(category.name)
                ) {
                  setTimeout(() => {
                    document.getElementById("island-directory")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                  return;
                }

                // 전체
                if (category.name === "전체") {

                  setShowStay(true);
                  setShowFood(true);
                  setShowTaxi(true);
                  setShowRentcar(true);
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

                  setShowStay(false);
                  setShowFood(false);
                  setShowTaxi(false);
                  setShowRentcar(false);
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
                  setShowRentcar(false);
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
                  setShowRentcar(false);
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
                  setShowRentcar(false);
                  setShowLocal(false);

                  setTimeout(() => {
                    document
                      .getElementById("taxi")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }, 100);

                }

                // 렌트카
                else if (category.name === "렌트카") {

                  setShowStay(false);
                  setShowFood(false);
                  setShowTaxi(false);
                  setShowRentcar(true);
                  setShowLocal(false);

                  setTimeout(() => {
                    document
                      .getElementById("rentcar")
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
                  setShowRentcar(false);
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
      <section id="my-course" className="scroll-mt-24">
        <div className="mx-auto mb-5 max-w-7xl px-6">
          <div className="rounded-[2rem] bg-gradient-to-br from-pink-50 to-rose-50 p-6 md:p-8 border border-pink-100">
            <p className="font-bold text-pink-700">내가 고른 장소 모아보기</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
              ❤️ 나만의 여행코스
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              관광지와 추천코스에서 추가한 장소를 이곳에서 한 번에 확인할 수 있어요.
            </p>
          </div>
        </div>
        <MyCourse />
      </section>
      {/* 섬별 실시간 인기 관광지 */}
{selectedIsland === "백령도" && popularPlaces.length > 0 && (
  <section className="max-w-7xl mx-auto px-6 py-16">
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
  <section className="max-w-7xl mx-auto px-6 py-16">
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
  <section className="max-w-7xl mx-auto px-6 py-16">
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

      {selectedIsland !== "백령도" &&
        ["맛집", "숙박", "낚시배"].includes(selectedCategory) && (
        <section id="island-directory" className="max-w-7xl mx-auto px-6 pb-20">
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
  unoptimized
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

                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {place.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      {place.description}
                    </p>
                    <div className="text-sm text-gray-700 mb-4 leading-6">
  {place.tip ? `추천 포인트: ${place.tip}` : "추천 포인트: 현지에서 꼭 둘러볼 만한 명소예요."}
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

  <AddCourseButton place={place} />

  {[
  { name: "두무진", href: "/place/dumujin" },
  { name: "끝섬전망대", href: "/place/kkeutseom" },
  { name: "사곶해변", href: "/place/sagot" },
  { name: "콩돌해안", href: "/place/kongdol" },
  { name: "심청각", href: "/place/simcheonggak" },
  { name: "하늬해안", href: "/place/hani" },
  { name: "용틀임바위", href: "/place/dragon" },
  { name: "사자바위", href: "/place/sajabawi" },
  { name: "천안함 위령탑", href: "/place/cheonan" },
  { name: "📸 사진찍기 좋은 녹색명소", href: "/place/photozone" },
  { name: "서해최북단 백령도비", href: "/place/baengnyeong-bi" },
  { name: "한국기독교의 섬 / 한국기독교역사관", href: "/place/christianity" },
  { name: "서풍받이", href: "/place/seopungbaji" },
  { name: "옥죽동 해안사구", href: "/place/okjuk-sanddune" },
  { name: "농여해변", href: "/place/nongyeo-beach" },
  { name: "미아동해변", href: "/place/miadong-beach" },
  { name: "삼각산", href: "/place/samgaksan" },
  { name: "매바위전망대", href: "/place/maebawi-observatory" },
  { name: "모래울해변", href: "/place/moraeul-beach" },
  { name: "지두리해변", href: "/place/jiduri-beach" },
  { name: "답동해변", href: "/place/dapdong-beach" },
  { name: "해넘이전망대", href: "/place/sunset-observatory" },
  { name: "소청등대", href: "/place/socheong-lighthouse" },
  { name: "분바위", href: "/place/bunbawi" },
  { name: "스트로마톨라이트", href: "/place/stromatolite" },
]
  .filter((item) => item.name === place.name)
  .map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="inline-flex items-center justify-center w-full bg-sky-600 text-white py-3 rounded-2xl font-semibold hover:bg-sky-700 transition"
    >
      📖 상세정보 보기
    </Link>
  ))}

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
        <section className="max-w-7xl mx-auto px-6 py-16">
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
          📷 사진작가 윤학진님 외 사진 협찬 · 백령도의 다양한 모습을 담았습니다.
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
                                  {stay[0]}
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
              <div className="rounded-3xl bg-white p-8 shadow">
                <button
                  type="button"
                  onClick={() => setShowBus(!showBus)}
                  className="w-full rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 p-6 text-left text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-blue-100">백령도 교통정보</p>
                      <h3 className="mt-1 text-2xl font-extrabold">
                        🚌 백령도 공영버스 시간표
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-blue-50">
                        방향별 시간표 이미지를 크게 열어 확인할 수 있어요.
                      </p>
                    </div>
                    <span className="text-3xl">{showBus ? "▲" : "▼"}</span>
                  </div>
                </button>

                {showBus && (
                  <div className="mt-6">
                    <div className="rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                      💡 운행 시간은 변경될 수 있으니 실제 이용 전 최신 시간표인지 확인해 주세요.
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <a
                        href="/images/bus1.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border-2 border-gray-100 p-5 transition hover:border-blue-300 hover:shadow-md"
                      >
                        <div className="text-3xl">🚌</div>
                        <h4 className="mt-3 text-lg font-extrabold text-gray-900">
                          북포리 방향
                        </h4>
                        <p className="mt-2 text-sm text-gray-500">
                          시간표 크게 보기 →
                        </p>
                      </a>

                      <a
                        href="/images/bus2.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border-2 border-gray-100 p-5 transition hover:border-sky-300 hover:shadow-md"
                      >
                        <div className="text-3xl">🚌</div>
                        <h4 className="mt-3 text-lg font-extrabold text-gray-900">
                          화동 방향
                        </h4>
                        <p className="mt-2 text-sm text-gray-500">
                          시간표 크게 보기 →
                        </p>
                      </a>
                    </div>
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
      </section>

      {/* COURSE SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

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

          {/* 군인면회 실전가이드 - 기존 추천코스와 중복되지 않도록 준비/교통/숙박 중심 */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-2">
              🪖 군인 면회 실전 가이드
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              백령도까지 직접 면회 오는 가족·친구·연인을 위한 준비 정보
            </p>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <div className="rounded-2xl bg-blue-50 p-5">
                <h4 className="font-extrabold text-gray-900 mb-2">① 출발 전 가장 먼저 확인</h4>
                <p>
                  면회·외출·외박 가능 여부와 시간은 부대 일정에 따라 달라질 수 있습니다.
                  방문 날짜를 정하기 전에 복무 장병을 통해 소속 부대의 최신 일정과 복귀 시간을 먼저 확인하세요.
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5">
                <h4 className="font-extrabold text-gray-900 mb-2">② 배편은 왕복으로 미리 준비</h4>
                <p>
                  인천–백령 항로는 소청도·대청도를 거쳐 백령도로 들어오며 약 3시간 40분이 걸립니다.
                  섬 특성상 기상·선박 사정으로 운항이 달라질 수 있으니 예매할 때뿐 아니라
                  출발 전날과 당일에도 운항 여부를 다시 확인하는 것이 좋습니다.
                </p>
                <a
                  href="https://komsa.or.kr/kor/sub03_020302.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-bold text-sky-700 hover:underline"
                >
                  한국해양교통안전공단 인천–백령 항로 확인 →
                </a>
              </div>

              <div className="rounded-2xl bg-amber-50 p-5">
                <h4 className="font-extrabold text-gray-900 mb-2">③ 당일치기보다 숙박 일정에 여유 두기</h4>
                <p>
                  백령도는 육로 대체가 없는 섬이라 기상 악화 시 출도 일정이 달라질 수 있습니다.
                  면회 날짜와 장병 복귀시간을 기준으로 숙소와 돌아가는 배편을 함께 계획하고,
                  중요한 일정이 있다면 귀가 다음 날까지 여유를 두는 편이 안전합니다.
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-5">
                <h4 className="font-extrabold text-gray-900 mb-2">④ 섬 안 이동수단도 미리 정하기</h4>
                <p>
                  면회 후 식사나 관광까지 계획한다면 렌터카·택시 등 이동수단을 미리 확인하세요.
                  장병의 실제 외출 가능 시간에 맞춰 가까운 식당이나 카페부터 이용하면 일정이 한결 편합니다.
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50 p-5">
                <h4 className="font-extrabold text-gray-900 mb-2">⑤ 2025년에는 면회객 전용 여행상품도 운영</h4>
                <p>
                  옹진군은 2025년 백령도 복무 장병의 가족·친구·연인을 대상으로
                  현지 숙박·식사·교통과 체험을 연계한 ‘백령도에 왔으면회’ 면회 여행상품을 시범 운영했습니다.
                  다만 당시 한시 사업이므로 현재 상시 지원으로 오해하지 않도록,
                  새로운 면회객 지원사업이 나오는지는 옹진군 최신 공지를 확인해 주세요.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5">
                <h4 className="font-extrabold text-gray-900 mb-3">🎒 면회객 출발 전 체크리스트</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-sm">
                  <span>✓ 장병 면회·외출 가능일 확인</span>
                  <span>✓ 장병 복귀시간 확인</span>
                  <span>✓ 왕복 여객선 예약</span>
                  <span>✓ 출항 당일 운항정보 확인</span>
                  <span>✓ 숙박 예약</span>
                  <span>✓ 렌터카·택시 등 이동수단 확인</span>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                ※ 군부대별 세부 면회·외출 규정은 공개 정보만으로 일괄 안내하기 어렵고 변경될 수 있습니다.
                반드시 복무 장병을 통해 소속 부대의 최신 안내를 확인해 주세요.
              </p>
            </div>

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
      © 2026 백령·대청·소청도의 모든 정보. All Rights Reserved.
    </p>
  </div>
</footer>  
</main>
);
}
