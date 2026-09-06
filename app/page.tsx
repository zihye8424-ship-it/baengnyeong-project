"use client";

import MyCourse from "./components/MyCourse";
import { supabase } from "./lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState, useEffect, useRef } from "react";



const quickMenuItems = [
  { icon: "?슓", label: "諛고렪?뺣낫", key: "ship" },
  { icon: "?슃", label: "援먰넻쨌?앹떆", key: "transport" },
  { icon: "?룧", label: "?숇컯", key: "stay" },
  { icon: "?뜙", label: "留쏆쭛", key: "food" },
  { icon: "?첉", label: "援곗씤硫댄쉶", key: "military" },
  { icon: "?렍", label: "?싳떆", key: "fishing" },
  { icon: "?럞", label: "?뱀궛臾?, key: "specialty" },
  { icon: "?뱼", label: "異뺤젣쨌?뚯떇", key: "news" },
];

const platformServiceItems = [
  { icon: "?룤截?, title: "?щ퀎 愿愿묒?", description: "?좏깮???ъ쓽 紐낆냼 蹂닿린", key: "places" },
  { icon: "?슓", title: "諛고렪쨌?댄빆?뺣낫", description: "諛고렪怨??덉빟?뺣낫 ?뺤씤", key: "ship" },
  { icon: "?룧", title: "?숈냼 ?쒕늿??, description: "?щ퀎 ?숇컯?뺣낫 蹂닿린", key: "stay" },
  { icon: "?뜙", title: "?뚯떇???쒕늿??, description: "?щ퀎 留쏆쭛?뺣낫 蹂닿린", key: "food" },
  { icon: "?렍", title: "?싳떆諛??뺣낫", description: "?싳떆諛곗? 異쒖“?뺣낫 ?뺤씤", key: "fishing" },
  { icon: "?벝", title: "?ы뻾?ъ쭊 ?щ━湲?, description: "?섏쓽 ???ы뻾 怨듭쑀?섍린", key: "footprints" },
  { icon: "?뮠", title: "臾몄쓽쨌?뺣낫?쒕낫", description: "???뺣낫? ?섏젙?ы빆 ?뚮━湲?, key: "contact" },
];

const islandWeatherLocations = [
  { name: "諛깅졊??, latitude: 37.96, longitude: 124.67, image: "/images/hero/hero-06.png" },
  { name: "?泥?룄", latitude: 37.83, longitude: 124.69, image: "/images/daecheong.jpg" },
  { name: "?뚯껌??, latitude: 37.76, longitude: 124.75, image: "/images/socheong.jpg" },
];

function weatherCodeInfo(code: number | null) {
  if (code === null) return { label: "遺덈윭?ㅻ뒗 以?, icon: "?뙟截? };
  if (code === 0) return { label: "留묒쓬", icon: "?截? };
  if ([1, 2].includes(code)) return { label: "?泥대줈 留묒쓬", icon: "?뙟截? };
  if (code === 3) return { label: "?먮┝", icon: "?곻툘" };
  if ([45, 48].includes(code)) return { label: "?덇컻", icon: "?뙧截? };
  if ([51, 53, 55, 56, 57].includes(code)) return { label: "?댁뒳鍮?, icon: "?뙡截? };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { label: "鍮?, icon: "?뙢截? };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { label: "??, icon: "?뙣截? };
  if ([95, 96, 99].includes(code)) return { label: "?뚯슦", icon: "?덌툘" };
  return { label: "援щ쫫 留롮쓬", icon: "?? };
}

const islandNews = [
  { date:"2026.09.15", month:"9??, island:"諛깅졊??, type:"?됱궗", title:"2026??諛깅졊硫대??????됱궗", place:"諛깅졊?ㅻぉ?곸떎?댁껜?↔? (?붾룞泥댁쑁愿)", image:"/images/news/baengnyeong-residents-day-2026.png" },
  { date:"2026.08.26", month:"8??, island:"諛깅졊??, type:"?됱궗", title:"???쇱씠???꾩뭅?곕?", place:"諛깅졊醫낇빀?ы쉶蹂듭?愿", image:"/images/news/island-life-academy.jpg" },
  { date:"2026.08.29", month:"8??, island:"諛깅졊??, type: "異뺤젣", title:"諛깅졊 洹몃┛?섏뒪?", place:"?ъ껌媛??쇰?", image:"/images/news/baengnyeong-green-festa.jpg" },
  { date:"2026.09.05", month:"9??, island:"諛깅졊??, type:"異뺤젣", title:"諛깅졊?꾩? ?④퍡??媛議??댁빞湲?洹몃━湲????, place:"諛깅졊醫낇빀?ы쉶蹂듭?愿 3痢?媛뺣떦", image:"/images/news/family-drawing-contest.jpg" },
  { date:"2026.09.12", month:"9??, island:"諛깅졊??, type:"?됱궗", title:"諛깅졊醫낇빀?ы쉶蹂듭?愿 9???곹솕", place:"蹂듭?愿 3痢?媛뺣떦", image:"/images/news/welfare-september-movie.jpg" },
  { date:"2026.09.12", month:"9??, island:"?뱀쭊援?, type: "異뺤젣", title:"?????щ쭏?꾨객???뚯븙異뺤젣", place:"??댁옉???댁뼇?앺깭愿 ?밸퀎?쇱쇅臾대?", image:"/images/news/island-band-festival.png" },
  { date:"2026.09.01 ~ 09.20", month:"9??, island:"?뱀쭊援?, type:"愿?댁냼??, title:"?щ뇤?덇?吏덊솚 ?덈갑愿由?嫄룰린 梨뚮┛吏", place:"?뱀쭊援?, image:"/images/news/heart-walk.png" },
  { date:"2026.08.03 ~ 10.31", month:"8~10??, island:"?뱀쭊援?, type:"愿?댁냼??, title:"90?쇨컙????μ젙 嫄룰린 梨뚮┛吏", place:"?뱀쭊援?, image:"/images/news/90day-walk.png" },
  { date:"2026.06.15 ~ 09.06", month:"6~9??, island:"?뱀쭊援?, type:"愿?댁냼??, title:"2026 ?됲솕쨌?듭씪誘몃옒 肄섑뀗痢?怨듬え??, place:"怨듬え??, image:"/images/news/peace-content.png" },
  { date:"2026.09.23 ~ 09.27", month:"9??, island:"諛깅졊쨌?泥???, type:"愿?댁냼??, title:"異붿꽍 紐낆젅 洹?깃컼 ?ш컼?댁엫 吏??, place:"?고룊쨌諛깅졊쨌?泥?룸뜒?겶룹옄??, image:"/images/news/chuseok-ferry-support.png" },
  { date:"2026.01.01 ~ 12.11", month:"?곗쨷", island:"??吏??, type:"愿?댁냼??, title:"??吏???앺솢臾쇰쪟 ?댁엫 吏?먯궗??, place:"?뱀쭊援???吏??, image:"/images/news/island-logistics.png" },
  { date:"2026.10.15", month:"10??, island:"諛깅졊??, type:"?됱궗", title:"?????⑺샎寃고샎??, place:"諛깅졊?몄씤臾명솕?쇳꽣 媛뺣떦", image:"/images/news/hwanghon-wedding.png" },
  { date:"2026.07.01 ?쒗뻾", month:"7??, island:"?댁꽑 ?댁슜??, type: "愿?댁냼??, title:"???댁꽑 援щ챸議곕겮 李⑹슜 ?섎Т??, place:"?댁뼇 ?덉쟾 ?덈궡", image:"/images/news/lifejacket-mandatory.jpg" },
];

const heroSlides = [
  { src: "/images/hero/hero-01.png", alt: "諛깅졊?꾩쓽 ?뚮굹臾??ъ씠濡?蹂댁씠???쇰ぐ", position: "center 58%" },
  { src: "/images/hero/hero-02.png", alt: "?덇낵 ?쇱쓬?쇰줈 ?ㅻ뜮??諛깅졊??寃⑥슱 ?댁븞", position: "center 52%" },
  { src: "/images/hero/hero-03.png", alt: "諛깅졊???댁븞??媛덈ℓ湲??띻꼍", position: "center 48%" },
  { src: "/images/hero/hero-04.png", alt: "諛깅졊???ш뎄? ?댁꽑 ?띻꼍", position: "center 55%" },
  { src: "/images/hero/hero-05.png", alt: "?뚮룄? ?κ렐 肄⑸룎???댁슦?ъ쭊 諛깅졊???댁븞", position: "center 58%" },
  { src: "/images/hero/hero-06.png", alt: "諛깅졊?꾩쓽 ?몃Ⅸ 諛붾떎? ?대? ?띻꼍", position: "center 52%" },
  { src: "/images/hero/hero-07.png", alt: "諛깅졊??湲곗븫怨??뉗궡???댁슦?ъ쭊 ?댁븞 ?띻꼍", position: "center 50%" },
  { src: "/images/hero/hero-08.png", alt: "諛깅졊??諛붾떎???먮컯?대Ъ踰?, position: "center 50%" },
  { src: "/images/hero/hero-09.png", alt: "諛깅졊?꾩쓽 ????ν넗?뚯떇 ?됰㈃", position: "center 58%" },
  { src: "/images/hero/hero-10.png", alt: "?쒗빐 理쒕턿??諛깅졊??湲곕뀗鍮?, position: "center center" },
  { src: "/images/hero/hero-11.jpg", alt: "?덈꼍 ?꾩뿉 ?몄썙吏?諛깅졊??湲??議고삎臾?, position: "center 52%" },
  { src: "/images/hero/hero-12.jpg", alt: "?몃Ⅸ ?섎뒛怨?諛붾떎媛 ?댁슦?ъ쭊 諛깅졊???댁븞 湲곗븫", position: "center 48%" },
  { src: "/images/hero/hero-13.jpg", alt: "遺됯쾶 臾쇰뱺 諛깅졊???ш뎄???몄쓣", position: "center 52%" },
  { src: "/images/hero/hero-14.jpg", alt: "媛덈ℓ湲곗? ????씤 ?먮Т吏?湲곗븫?덈꼍", position: "center 54%" },
  { src: "/images/hero/hero-15.jpg", alt: "?믪? 怨녹뿉??諛붾씪蹂??ш낭?대? ?꾧꼍", position: "center 58%" },
];

const restaurantPhotos: Record<string, string[]> = {
  "?꾨났二쎌엳??泥좏뙋吏?: ["/images/restaurants/jeonbok-cheolpan-01.jpg"],
  "媛?꾨㈃??: ["/images/restaurants/gaeul-myeonok-01.png"],
  "怨좊え??: ["/images/restaurants/gomone-01.png"],
  "?ㅻ꽕移섑궓": ["/images/restaurants/nene-chicken-01.png"],
  "?몃옉?듬떗": ["/images/restaurants/norang-tongdak-01.png"],
  "?諛뺣쭧吏?: ["/images/restaurants/daebak-matjip-01.png"],
  "援?닔?섎씪 諛깅컲?몄긽": ["/images/restaurants/guksunara-baekban-01.png"],
  "?덊궎?명뀒": ["/images/restaurants/donquixote-01.png"],
  "?먮찓移쇨뎅??: ["/images/restaurants/dume-kalguksu-01.png"],
  "?대???ъ쐞?잛쭛": ["/images/restaurants/haenyeo-sawi-01.png"],
  "?먯꽑?ㅽ븳??: ["/images/restaurants/dusun-hansang-01.png"],
  "?깆씠?ㅻ쭧吏?: ["/images/restaurants/ddungi-matjip-01.png"],
  "誘명솕??: ["/images/restaurants/mihwajeong-01.png"],
  "諛깅졊硫댁삦": ["/images/restaurants/baengnyeong-myeonok-01.png"],
  "?쒓낏移쇨뎅???됰㈃": ["/images/restaurants/sigol-kalguksu-naengmyeon-01.png"],
  "?댄솕??: ["/images/restaurants/ihwawon-01.png"],
  "?먯뿰留덉쓣": ["/images/restaurants/jayeon-maeul-01.png"],
  "?μ큿移쇨뎅??: ["/images/restaurants/jangchon-kalguksu-01.png"],
  "吏꾩큿?쇱?": ["/images/restaurants/jinchon-dwaeji-01.png"],
  "?몃Ⅸ諛붾떎李???: ["/images/restaurants/pureun-bada-jjim-tang-01.png"],
  "??諛고꽣吏?붿깮?숆퉴??: ["/images/restaurants/ssum-baeteojineun-donkatsu-01.png"],
  "?꾨옉?대꽕?잛쭛": ["/images/restaurants/arangi-sashimi-01.png"],
  "?좏솕?됱뼇?됰㈃": ["/images/restaurants/shinhwa-pyeongyang-naengmyeon-01.png"],
  "?щ옉梨?: ["/images/restaurants/sarangchae-01.png"],
  "戮?꾨떗": ["/images/restaurants/ppokkeudak-01.jpg"],
  "蹂듭씠??: ["/images/restaurants/bokine-01.jpg"],
  "?섎━?명봽": ["/images/restaurants/dooly-hof-01.jpg"],
};

const stayPhotos: Record<string, string[]> = {
  "諛깅졊濡쒓렇?쒖뀡": [
    "/images/stays/baengnyeong-log-pension-01.jpg",
    "/images/stays/baengnyeong-log-pension-02.jpg",
    "/images/stays/baengnyeong-log-pension-03.jpg",
    "/images/stays/baengnyeong-log-pension-04.jpg",
    "/images/stays/baengnyeong-log-pension-05.jpg",
  ],
};

const daecheongGallery = [
  { src: "/images/seopungbaji.png", name: "?쒗뭾諛쏆씠" },
  { src: "/images/nongyeo-beach.png", name: "?띿뿬?대?" },
  { src: "/images/miadong-beach.png", name: "誘몄븘?숉빐蹂" },
  { src: "/images/samgaksan.png", name: "?쇨컖?? },
  { src: "/images/maebawi-observatory.png", name: "留ㅻ컮?꾩쟾留앸?" },
  { src: "/images/moraeul-beach.png", name: "紐⑤옒?명빐蹂" },
  { src: "/images/jiduri-beach.png", name: "吏?먮━?대?" },
  { src: "/images/dapdong-beach.png", name: "?듬룞?대?" },
  { src: "/images/sunset-observatory.png", name: "?대꽆?댁쟾留앸?" },
  { src: "/images/okjuk-sand-dune.png", name: "?μ＝???댁븞?ш뎄" },
  { src: "/images/geomeunnang-coast.png", name: "寃????댁븞" },
  { src: "/images/dokbawi.png", name: "?낅컮?? },
];

const daecheongSpecialties = [
  { name: "?곕윮", image: "/images/specialties/daecheong-rockfish.png", description: "?泥?룄 泥?젙 ?댁뿭?먯꽌 留뚮굹??????댁쥌?쇰줈, ?대갚?섍퀬 ?꾪깂???앷컧??留ㅻ젰?곸씠?먯슂." },
  { name: "?띿뼱", image: "/images/specialties/daecheong-skate.png", description: "?泥?룄 ?곌렐?댁뿉???≫엳???섏궛臾쇰줈, ?좎꽑???곹깭遺???숈꽦 ?붾━源뚯? ?ㅼ뼇?섍쾶 利먭꺼??" },
  { name: "?묒뿼??, image: "/images/specialties/daecheong-black-goat.png", description: "?泥?룄???먯뿰?섍꼍?먯꽌 ?먮? ?묒뿼?뚮줈, ?꾩? ?앹옱猷뚯? ?뱀궛?덉쑝濡??뚮젮???덉뼱??" },
  { name: "?꾨났", image: "/images/specialties/daecheong-abalone.png", description: "源⑤걮??諛붾떎?먯꽌 ?먮? ?꾨났? 已꾧퉫???앷컧怨?吏꾪븳 諛붾떎 ?띾?媛 ?뱀쭠?댁뿉??" },
  { name: "?댁궪", image: "/images/specialties/daecheong-sea-cucumber.png", description: "?泥?룄 諛붾떎?먯꽌 梨꾩랬?섎뒗 ?댁궪? ?ㅻ룆?ㅻ룆???앷컧?쇰줈 ?щ옉諛쏅뒗 ?댁궛臾쇱씠?먯슂." },
  { name: "苑껉쾶", image: "/images/specialties/daecheong-blue-crab.png", description: "?쒖쿋???닿낵 ?뚯씠 李⑥삤瑜?苑껉쾶??李쑣룻깢쨌寃뚯옣 ???ㅼ뼇???붾━?????댁슱?ㅼ슂." },
  { name: "?뚮???, image: "/images/specialties/daecheong-rock-seaweed.png", description: "諛붿쐞??遺숈뼱 ?먮? ?뚮???? 源딆? 諛붾떎 ?κ낵 遺?쒕윭?곕㈃?쒕룄 ?꾪깂???앷컧???뱀쭠?댁뿉??" },
  { name: "?깃쾶", image: "/images/specialties/daecheong-sea-urchin.png", description: "?泥?룄 諛붾떎???깃쾶???쒖쿋??吏꾪븯怨?怨좎냼???띾?瑜?留쏅낵 ???덈뒗 蹂꾨??덉슂." },
  { name: "?ㅼ떆留?, image: "/images/specialties/daecheong-kelp.png", description: "源⑤걮??諛붾떎?먯꽌 ?먮? ?ㅼ떆留덈뒗 援?Ъ怨?諛섏갔??源딆? 媛먯튌留쏆쓣 ?뷀빐以섏슂." },
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
  const [newsFilter, setNewsFilter] = useState("?꾩껜");
  const [selectedSeason, setSelectedSeason] = useState("遊?);
  const filteredIslandNews =
    newsFilter === "?꾩껜"
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
            if (!response.ok) throw new Error("?좎뵪 ?뺣낫瑜?遺덈윭?ㅼ? 紐삵뻽?듬땲??");
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
        console.error("???좎뵪 遺덈윭?ㅺ린 ?ㅻ쪟:", error);
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
      alert("踰덉뿭 湲곕뒫? ?명꽣?룹뿉 諛고룷???ъ씠?몄뿉???ъ슜?????덉뼱??");
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


  const [selectedCategory, setSelectedCategory] = useState("?꾩껜");
  const [selectedIsland, setSelectedIsland] = useState("諛깅졊??);

  // 諛⑸Ц??  const [todayVisitors, setTodayVisitors] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);

  // ?쇱튂湲??묎린
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

  // ?ы뻾?먮뱾????諛쒖옄援?  const [footprints, setFootprints] = useState<any[]>([]);
  const [footprintLoading, setFootprintLoading] = useState(false);
  const [footprintSubmitting, setFootprintSubmitting] = useState(false);
  const [isFootprintMarqueePaused, setIsFootprintMarqueePaused] = useState(false);
  const [footprintIsland, setFootprintIsland] = useState("諛깅졊??);
  const [footprintPlace, setFootprintPlace] = useState("");
  const [footprintNickname, setFootprintNickname] = useState("");
  const [footprintStory, setFootprintStory] = useState("");
  const [footprintFile, setFootprintFile] = useState<File | null>(null);

  function handleQuickMenuClick(key: string) {
    let targetId = "";

    if (key === "ship") {
      targetId = "ship-info";
    } else if (key === "transport") {
      if (selectedIsland === "諛깅졊??) {
        setSelectedCategory("媛쒖씤?앹떆");
        setShowTaxi(true);
        targetId = "taxi";
      } else {
        targetId = "island-guide";
      }
    } else if (key === "stay") {
      setSelectedCategory("?숇컯");
      if (selectedIsland === "諛깅졊??) {
        setShowStay(true);
        targetId = "stay";
      } else if (selectedIsland === "?泥?룄") {
        setShowStay(true);
        targetId = "daecheong-stay";
      } else {
        targetId = "island-directory";
      }
    } else if (key === "food") {
      setSelectedCategory("留쏆쭛");
      if (selectedIsland === "諛깅졊??) {
        setShowFood(true);
        targetId = "food";
      } else if (selectedIsland === "?泥?룄") {
        setShowFood(true);
        targetId = "daecheong-food";
      } else {
        targetId = "island-directory";
      }
    } else if (key === "military") {
      if (selectedIsland !== "諛깅졊??) {
        setSelectedIsland("諛깅졊??);
      }
      targetId = "military-visit";
    } else if (key === "fishing") {
      if (selectedIsland === "?泥?룄") {
        setSelectedCategory("?싳떆諛?);
        setShowFishing(true);
        targetId = "daecheong-fishing";
      } else if (selectedIsland === "?뚯껌??) {
        targetId = "island-guide";
      } else {
        targetId = "fishing-info";
      }
    } else if (key === "specialty") {
      if (selectedIsland === "?泥?룄") {
        setShowDaecheongSpecialty(true);
        targetId = "daecheong-specialty";
      } else {
        if (selectedIsland !== "諛깅졊??) {
        setSelectedIsland("諛깅졊??);
        }
        setSelectedCategory("?뱀궛臾?);
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

  // 踰꾩뒪
  const [busDirection, setBusDirection] = useState("遺곹룷由?);

  // 寃??  const [staySearch, setStaySearch] = useState("");
  const [foodSearch, setFoodSearch] = useState("");


  // Q&A
  const [qnaCategory, setQnaCategory] = useState("?꾩껜");
  const [qnaFormCategory, setQnaFormCategory] = useState("諛고렪");
  const [qnaSearch, setQnaSearch] = useState("");
  const [qnaNickname, setQnaNickname] = useState("");
  const [qnaTitle, setQnaTitle] = useState("");
  const [qnaContent, setQnaContent] = useState("");
  const [qnaQuestions, setQnaQuestions] = useState<any[]>([]);
  const [qnaLoading, setQnaLoading] = useState(false);
  const [qnaSubmitting, setQnaSubmitting] = useState(false);

  // 怨곗떊 援곗씤硫댄쉶 ?꾧린
  const [militaryReviews, setMilitaryReviews] = useState<any[]>([]);
  const [militaryReviewLoading, setMilitaryReviewLoading] = useState(false);
  const [militaryReviewSubmitting, setMilitaryReviewSubmitting] = useState(false);
  const [militaryReviewNickname, setMilitaryReviewNickname] = useState("");
  const [militaryReviewRelation, setMilitaryReviewRelation] = useState("?곗씤");
  const [militaryReviewPeriod, setMilitaryReviewPeriod] = useState("");
  const [militaryReviewStay, setMilitaryReviewStay] = useState("?뱀씪");
  const [militaryReviewTransport, setMilitaryReviewTransport] = useState("?앹떆");
  const [militaryReviewRating, setMilitaryReviewRating] = useState(5);
  const [militaryReviewContent, setMilitaryReviewContent] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [notices, setNotices] = useState<any[]>([]);
const [placeViews, setPlaceViews] = useState<any[]>([]);
const [placeLikes, setPlaceLikes] = useState<any[]>([]);
const [myCourse, setMyCourse] = useState<any[]>([]);
const [popularPlaces, setPopularPlaces] = useState<any[]>([]);

// AI ?ы뻾 ?뚮옒??const [plannerDuration, setPlannerDuration] = useState("1諛?2??);
const [plannerCompanion, setPlannerCompanion] = useState("媛議?);
const [plannerTheme, setPlannerTheme] = useState("?먯뿰쨌?ъ쭊");
const [plannerTransport, setPlannerTransport] = useState("?뚰꽣移는룹옄媛??);
const [plannerSeason, setPlannerSeason] = useState("遊?);
const [plannerResult, setPlannerResult] = useState<any[] | null>(null);
const [plannerTips, setPlannerTips] = useState<string[]>([]);
const [optimizedCourse, setOptimizedCourse] = useState<any | null>(null);

useEffect(() => {
  setPlannerResult(null);
  setOptimizedCourse(null);
}, [selectedIsland]);

// ?듯빀 寃??const [globalSearch, setGlobalSearch] = useState("");
const [searchResults, setSearchResults] = useState<any[]>([]);
const [showSearchResults, setShowSearchResults] = useState(false);

  const categories = [
    { name: "?꾩껜", icon: "?룤截? },
    { name: "愿愿묒?", icon: "?벝" },
    { name: "留쏆쭛", icon: "?뜙" },
    { name: "?숇컯", icon: "?룳" },
    { name: "媛쒖씤?앹떆", icon: "?슃" },
    { name: "?뚰꽣移?, icon: "?슅" },
    { name: "?뱀궛臾?, icon: "?럞" },
  ];

  const islandCategories =
    selectedIsland === "?泥?룄"
      ? [
          { name: "愿愿묒?", icon: "?벝" },
          { name: "留쏆쭛", icon: "?뜙" },
          { name: "?숇컯", icon: "?룳" },
          { name: "?싳떆諛?, icon: "?렍" },
        ]
      : selectedIsland === "?뚯껌??
      ? [
          { name: "愿愿묒?", icon: "?벝" },
          { name: "留쏆쭛", icon: "?뜙" },
          { name: "?숇컯", icon: "?룳" },
        ]
      : categories;
  const places = [
    {
      name: "?먮Т吏?,
      island: "諛깅졊??,
      image: "/images/dumujin.jpg",
      category: "愿愿묒?",
      description:
        "?섏쿇留????숈븞 ?뺤꽦??湲곗븫?덈꼍怨??몃Ⅸ ?쒗빐媛 ?댁슦?ъ쭊 諛깅졊??????덇꼍",
      location: "諛깅졊??遺곸꽌履?,
      link: "/place/dumujin",
      tip: "?슓 ?좊엺?좉낵 ?댁븞 ?곗콉濡쒖뿉???낆옣??湲곗븫?덈꼍???쒕줈 ?ㅻⅨ 媛곷룄濡?利먭꺼蹂댁꽭??",
    },
    {
      name: "?앹꽟?꾨쭩?",
      island: "諛깅졊??,
      image: "/images/kkutseom.jpg",
      category: "愿愿묒?",
      description:
        "遺곹븳 ?μ궛怨띔낵 ?ш낭?대?, ?섎뒳?대?源뚯? 議곕쭩 媛?ν븳 諛깅졊?꾩쓽 ????꾨쭩 紐낆냼",
      location: "諛깅졊???쒖そ?댁븞",
      link: "/place/kkeutseom",
      tip: "?똿 ??? ?ㅽ썑??諛⑸Ц?섎㈃ ?쒗빐 ?꾨쭩怨?遺됯쾶 臾쇰뱶???몄쓣???④퍡 媛먯긽?섍린 醫뗭븘??",
    },
    {
      name: "?ш낭?대?",
      island: "諛깅졊??,
      image: "/images/sagot.jpg",
      category: "愿愿묒?",
      description:
        "泥쒖뿰鍮꾪뻾?μ쑝濡??좊챸???멸퀎?곸쑝濡??ш????щ퉰 ?대?",
      location: "?⑷린?ы빆 ?멸렐",
      link: "/place/sagot",
      tip: "?덌툘 泥쒖뿰鍮꾪뻾?μ쑝濡??뚮젮吏??⑤떒?섍퀬 ?볦? ?대???泥쒖쿇??嫄몄쑝硫??낇듅??吏?뺤쓣 ?먭뺨蹂댁꽭??",
    },
    {
      name: "肄⑸룎?댁븞",
      island: "諛깅졊??,
      image: "/images/kongdol.jpg",
      category: "愿愿묒?",
      description: "?뚮룄 ?뚮━媛 ?꾨쫫?ㅼ슫 諛깅졊??紐낆냼",
      location: "?몄쿇 ?뱀쭊援?諛깅졊硫??⑦룷由?,
      link: "/place/kongdol",
      tip: "?뙄 ?뚮룄???κ렐 肄⑸룎??援щⅤ硫??대뒗 ?낇듅???뚮━瑜??ㅼ쑝硫??댁븞??泥쒖쿇??嫄몄뼱蹂댁꽭??",
    },

    {
      name: "?ъ껌媛?,
      island: "諛깅졊??,
      image: "/images/simcheonggak.jpg",
      category: "愿愿묒?",
      description: "?ъ껌???ㅽ솕媛 ?꾪빐吏??臾명솕 紐낆냼",
      location: "?몄쿇 ?뱀쭊援?諛깅졊硫?吏꾩큿由?,
      link: "/place/simcheonggak",
      tip: "?뱰 ?ъ껌???ㅽ솕瑜??댄렣蹂닿퀬 ?꾨쭩源뚯? ?④퍡 利먭만 ???덉뼱 媛議??ы뻾 肄붿뒪濡????댁슱?ㅼ슂.",
    },
    {
      name: "?섎뒳?댁븞",
      island: "諛깅졊??,
      image: "/images/hani.jpg",
      category: "愿愿묒?",
      description: "遺곹븳 ?μ궛怨?諛⑺뼢??諛붾떎? ?먮컯?대Ъ踰??쒖떇吏瑜??④퍡 蹂????덈뒗 ?앺깭愿愿?紐낆냼",
      location: "遺곹븳 ?μ궛怨?諛⑺뼢??蹂댁씠??諛깅졊??遺곸꽌履??댁븞",
      tip: "?┃ ?댁븞 ?꾨쭩怨??④퍡 ?먮컯?대Ъ踰??쒖떇 ?섍꼍???댄렣蹂????덈뒗 諛깅졊?꾩쓽 ????앺깭?ы뻾 ?ъ씤?몄삁??",
      link: "/place/hani",
    },
    {
      name: "諛깅졊 ?먮컯?대Ъ踰??앺깭愿愿묒껜?섏꽱??,
      island: "諛깅졊??,
      image: "/images/spotted-seal-center.jpg",
      category: "愿愿묒?",
      description: "諛깅졊?꾩쓽 ?먮컯?대Ъ踰??앺깭瑜?諛곗슦怨?愿李고븷 ???덈뒗 ?앺깭愿愿?紐낆냼",
      location: "諛깅졊???섎뒳?댁븞 ?쇰?",
      tip: "?┃ ?먮컯?대Ъ踰붿쓽 ?앺깭瑜?諛곗슦怨??섎뒳?댁븞???먯뿰?섍꼍怨??④퍡 ?섎윭蹂닿린 醫뗭? ?앺깭愿愿?肄붿뒪?덉슂.",
      link: "/place/spotted-seal-center",
    },
    {
  name: "?⑺??꾨컮??,
  island: "諛깅졊??,
  image: "/images/dragon.jpg",
  category: "愿愿묒?",
  description: "?⑹씠 紐몄쓣 鍮꾪?硫??뱀쿇?섎뒗 紐⑥뒿????? 諛깅졊?꾩쓽 ???吏吏덈챸??,
  location: "?몄쿇 ?뱀쭊援?諛깅졊硫??⑦룷由?,
  link: "/place/dragon",
      tip: "?え ?⑹씠 紐몄쓣 鍮꾪듃????븳 ?낇듅??諛붿쐞 ?뺥깭? 二쇰? ?댁븞 吏?뺤쓣 ?④퍡 愿李고빐 蹂댁꽭??",
},
    {
      name: "?ъ옄諛붿쐞",
      island: "諛깅졊??,
      image: "/images/sajabawi2.jpg",
      category: "愿愿묒?",
      description: "?ъ옄???뺤긽????? 諛깅졊?꾩쓽 ????댁븞 諛붿쐞",
      location: "?몄쿇 ?뱀쭊援?諛깅졊硫?吏꾩큿由?,
      link: "/place/sajabawi",
      tip: "?쫨 蹂대뒗 諛⑺뼢???곕씪 ?ъ옄瑜???븘 蹂댁씠??諛붿쐞? ?댁븞 ?띻꼍???④퍡 ?ъ쭊???닿린 醫뗭븘??",
    },
    {
      name: "泥쒖븞???꾨졊??,
      island: "諛깅졊??,
      image: "/images/cheonan.jpg",
      category: "?덈낫??궗",
      description: "泥쒖븞??46?⑹궗瑜?異붾え?섎뒗 ?μ냼",
      location: "諛깅졊硫??고솕由?,
      link: "/place/cheonan",
      tip: "?븡截?泥쒖븞??46?⑹궗瑜?湲곗뼲?섎ŉ 諛깅졊?꾩쓽 ?덈낫 ??궗瑜?李⑤텇?섍쾶 ?뚯븘蹂대뒗 怨듦컙?댁뿉??",
    },
    {
      name: "?ъ쭊 李띻린 醫뗭? ?뱀깋紐낆냼",
      island: "諛깅졊??,
      image: "/images/photozone.jpg",
      category: "愿愿묒?",
      description:
        "諛깅졊?꾩뿉??瑗??ъ쭊???④꺼???섎뒗 ?⑥? ?ы넗?ㅽ뙚?낅땲??",
      location: "?몄쿇 ?뱀쭊援?諛깅졊硫??⑦룷由???",
      tip: "?벝 諛깅졊?꾩쓽 ?뱀깋 ?띻꼍??諛곌꼍?쇰줈 ?ы뻾 ?몄쬆?ъ쭊???④린湲?醫뗭? ?쒕씪?대툕 ?ъ씤?몄삁??",
      link: "/place/photozone",
    },
    {
      name: "?쒗빐理쒕턿??諛깅졊?꾨퉬",
      island: "諛깅졊??,
      image: "/images/baengnyeong-bi.jpg",
      category: "愿愿묒?",
      description: "?쒗빐 理쒕턿??諛깅졊?꾨? ?곸쭠?섎뒗 湲곕뀗鍮꾩엯?덈떎. 留롮? 愿愿묎컼?ㅼ씠 ?몄쬆?ъ쭊???④린??????ы넗議댁엯?덈떎.",
      location: "?몄쿇 ?뱀쭊援?諛깅졊硫?吏꾩큿由?,
      tip: "?벝 諛깅졊???몄쬆?ъ쭊 쨌 ?㎛ 理쒕턿???곸쭠 쨌 ?슅 吏㏐쾶 ?ㅻⅤ湲?,
      link: "/place/baengnyeong-bi",
    },
    {
      name: "?쒓뎅湲곕룆援먯쓽 ??,
      island: "諛깅졊??,
      image: "/images/christian-island.jpg",
      category: "?덈낫??궗",
      description: "諛깅졊?꾩뿉 ?댁뼱????湲곕룆援???궗? ?좎븰??諛쒖옄痍⑤? ?댄렣蹂대뒗 ??궗臾명솕 紐낆냼?낅땲??",
      location: "?몄쿇 ?뱀쭊援?諛깅졊硫?,
      tip: "??諛깅졊??湲곕룆援???궗 쨌 ?뱰 臾명솕?ы뻾",
      link: "/place/christianity",
    },
    {
      name: "?쒓뎅湲곕룆援먯뿭?ш?",
      island: "諛깅졊??,
      image: "/images/christian-history-museum.png",
      category: "?덈낫??궗",
      description: "諛깅졊?꾩쓽 湲곕룆援???궗? 愿???먮즺瑜?愿?뚰븷 ???덈뒗 ??궗臾명솕 怨듦컙?낅땲??",
      location: "?몄쿇 ?뱀쭊援?諛깅졊硫?,
      tip: "?룢截??ㅻ궡 愿??쨌 ??湲곕룆援???궗 쨌 ?뱰 臾명솕?ы뻾",
      link: "/place/christian-island",
    },
  
    {
      name: "?쒗뭾諛쏆씠",
      island: "?泥?룄",
      image: "/images/seopungbaji.png",
      category: "愿愿묒?",
      description: "?泥?룄 ?⑤룞履??댁븞???낆옣???덈꼍怨?諛붾떎瑜??④퍡 留뚮굹?????吏吏덈챸??,
      location: "?몄쿇 ?뱀쭊援??泥?㈃",
      tip: "?? ?댁븞 ?몃젅??쨌 ?え 洹쒖븫 ?덈꼍 쨌 ?뙄 ?쒗빐 ?덇꼍",
      link: "/place/seopungbaji",
    },
    {
      name: "?띿뿬?대?",
      island: "?泥?룄",
      image: "/images/nongyeo-beach.png",
      category: "愿愿묒?",
      description: "?볦? ?대?怨??낇듅??諛붿쐞 吏?뺤쓣 ?④퍡 留뚮굹???泥?룄 ?댁븞 紐낆냼",
      location: "?몄쿇 ?뱀쭊援??泥?㈃",
      tip: "?え ?섏씠?뚮컮??쨌 ?뙄 ???쨌 ?똿 ??곷끂??,
      link: "/place/nongyeo-beach",
    },

    {
      name: "誘몄븘?숉빐蹂",
      island: "?泥?룄",
      image: "/images/miadong-beach.png",
      category: "愿愿묒?",
      description: "???몄씤 紐⑤옒?ъ옣怨??몃Ⅸ 諛붾떎媛 ?쒖썝?섍쾶 ?쇱퀜吏???泥?룄 ?대?",
      location: "?몄쿇 ?뱀쭊援??泥?㈃",
      tip: "?뙄 ???쨌 ?곤툘 臾쇨껐臾대뒳 ?고쓷 쨌 ?벝 ?대? ?띻꼍",
      link: "/place/miadong-beach",
    },

    {
      name: "?쇨컖??,
      island: "?泥?룄",
      image: "/images/samgaksan.png",
      category: "愿愿묒?",
      description: "?뺤긽?앹씠 ?먮━???대컻 343m ?泥?룄??????고뻾 紐낆냼",
      location: "?몄쿇 ?뱀쭊援??泥?㈃",
      tip: "?곤툘 ?대컻 343m ?뺤긽 쨌 ?뵯 ??議곕쭩 쨌 ?? ?몃젅??,
      link: "/place/samgaksan",
    },

    {
      name: "留ㅻ컮?꾩쟾留앸?",
      island: "?泥?룄",
      image: "/images/maebawi-observatory.png",
      category: "愿愿묒?",
      description: "留?議고삎臾쇨낵 ?④퍡 ?泥?룄???곌낵 諛붾떎 ?띻꼍??諛붾씪蹂????덈뒗 ?꾨쭩 ?ъ씤??,
      location: "?몄쿇 ?뱀쭊援??泥?㈃",
      tip: "?쫭 留?議고삎臾?쨌 ?뵯 ?泥?룄 ?댁븞 ?꾨쭩 쨌 ?벝 ?곌낵 諛붾떎媛 ?댁슦?ъ쭊 ?띻꼍??諛곌꼍?쇰줈 ?ъ쭊???④꺼蹂댁꽭??",
      link: "/place/maebawi-observatory",
    },

    {
      name: "紐⑤옒?명빐蹂",
      island: "?泥?룄",
      image: "/images/moraeul-beach.png",
      category: "愿愿묒?",
      description: "?곗옄???ъ씠濡?湲멸쾶 ?댁뼱吏??紐⑤옒?ъ옣怨??붿옍??諛붾떎媛 ?댁슦?ъ쭊 ?대?",
      location: "?몄쿇 ?뱀쭊援??泥?㈃",
      tip: "?뙯 ?뚮굹臾댁댉 쨌 ?뙄 紐⑤옒?대? 쨌 ?삅 議곗슜???댁떇",
      link: "/place/moraeul-beach",
    },

    {
      name: "吏?먮━?대?",
      island: "?泥?룄",
      image: "/images/jiduri-beach.png",
      category: "愿愿묒?",
      description: "遺?쒕윭??紐⑤옒?ъ옣怨??뚮룄 ?띻꼍??媛源뚯씠?먯꽌 利먭린湲?醫뗭? ?泥?룄 ?대?",
      location: "?몄쿇 ?뱀쭊援??泥?㈃",
      tip: "?뙄 ?볦? 紐⑤옒?대? 쨌 ?슯 ?댁븞 ?곗콉 쨌 ?벝 諛붾떎 ?띻꼍",
      link: "/place/jiduri-beach",
    },

    {
      name: "?듬룞?대?",
      island: "?泥?룄",
      image: "/images/dapdong-beach.png",
      category: "愿愿묒?",
      description: "諛붿쐞 ?댁븞怨??댁븞 ?고겕湲몄씠 ?댁슦?ъ졇 嫄룸뒗 ?щ?媛 ?덈뒗 ?泥?룄 ?댁븞 紐낆냼",
      location: "?몄쿇 ?뱀쭊援??泥?㈃",
      tip: "?슯 ?댁븞 ?곗콉濡?쨌 ?え 諛붿쐞?댁븞 쨌 ?뙄 ?대? ?띻꼍",
      link: "/place/dapdong-beach",
    },

    {
      name: "?대꽆?댁쟾留앸?",
      island: "?泥?룄",
      image: "/images/sunset-observatory.png",
      category: "愿愿묒?",
      description: "???몄씤 ?쒗빐瑜?諛붾씪蹂대ŉ ?泥?룄???대꽆???띻꼍??媛먯긽?섍린 醫뗭? ?꾨쭩?",
      location: "?몄쿇 ?뱀쭊援??泥?㈃",
      tip: "?똿 ?쒗빐 ?쇰ぐ 쨌 ?뵯 ???몄씤 ?꾨쭩 쨌 ?벝 ?몄쓣 ?ъ쭊",
      link: "/place/sunset-observatory",
    },
    {
      name: "?뚯껌?깅?",
      island: "?뚯껌??,
      image: "/images/socheong-lighthouse.png",
      category: "愿愿묒?",
      description: "?뚯껌?꾩쓽 ?몃Ⅸ 諛붾떎? ???띻꼍???④퍡 諛붾씪蹂????덈뒗 ??쒖쟻???깅? 紐낆냼",
      location: "?몄쿇 ?뱀쭊援??泥?㈃ ?뚯껌由?,
      tip: "?뙄 諛붾떎?꾨쭩 쨌 ?벝 ?깅??띻꼍",
      link: "/place/socheong-lighthouse",
    },

    {
      name: "遺꾨컮??,
      island: "?뚯껌??,
      image: "/images/bunbawi.png",
      category: "愿愿묒?",
      description: "諛붾떎? 留욌떯? 諛앹? ?붾꼍???몄긽?곸씤 ?뚯껌?꾩쓽 ????댁븞 ?덇꼍",
      location: "?몄쿇 ?뱀쭊援??泥?㈃ ?뚯껌由?,
      tip: "?え ?댁븞?덇꼍 쨌 ?벝 吏吏덊뭾寃?,
      link: "/place/bunbawi",
    },

    {
      name: "?ㅽ듃濡쒕쭏?⑤씪?댄듃",
      island: "?뚯껌??,
      image: "/images/stromatolite.png",
      category: "愿愿묒?",
      description: "?뚯껌?꾩쓽 ?낇듅??吏吏?寃쎄???媛源뚯씠?먯꽌 ?댄렣蹂????덈뒗 ?먯뿰 ?숈뒿 紐낆냼",
      location: "?몄쿇 ?뱀쭊援??泥?㈃ ?뚯껌由?,
      tip: "?뙇 吏吏덈챸??쨌 ?え ?먯뿰?숈뒿",
      link: "/place/stromatolite",
    },



    {
      name: "?섏씠?뚮컮??,
      island: "?泥?룄",
      image: "/images/nongyeo-beach.png",
      category: "愿愿묒?",
      description: "?띿뿬?대? ?쇰??먯꽌 留뚮굹???낇듅??痢듬━ 臾대뒳??諛붿쐞濡? ?泥?룄???댁븞 吏吏덇꼍愿??媛源뚯씠?먯꽌 ?댄렣蹂닿린 醫뗭? ?ъ씤?몄엯?덈떎.",
      location: "?몄쿇 ?뱀쭊援??泥?㈃ ?띿뿬?대? ?쇰?",
      tip: "?え ?낇듅??諛붿쐞臾대뒳 쨌 ?뙄 ?띿뿬?대?怨??④퍡 쨌 ?벝 吏吏덊뭾寃?,
      link: "/place/tree-ring-rock",
    },
    {
      name: "寃????댁븞",
      island: "?泥?룄",
      image: "/images/geomeunnang-coast.png",
      category: "愿愿묒?",
      description: "?泥?룄 ?⑥そ ?댁븞??嫄곗튇 諛붿쐞? 諛붾떎 ?띻꼍??留뚮궇 ???덈뒗 ?댁븞 寃쎄? ?ъ씤?몄엯?덈떎. ?댁븞 ?묎렐? ?꾩? ?ш굔怨?臾쇰븣瑜?癒쇱? ?뺤씤?섏꽭??",
      location: "?몄쿇 ?뱀쭊援??泥?㈃",
      tip: "?뙄 ?댁븞?덇꼍 쨌 ?え ?먭컝쨌諛붿쐞?댁븞 쨌 ?좑툘 ?꾩? ?묎렐?ш굔 ?뺤씤",
      link: "/place/geomeunnang-coast",
    },
    {
      name: "?낅컮??,
      island: "?泥?룄",
      image: "/images/dokbawi.png",
      category: "愿愿묒?",
      description: "?泥?룄瑜??곸쭠?섎뒗 ?댁븞 諛붿쐞 寃쎄? 媛?대뜲 ?섎굹濡? ???뱀쑀??吏?뺢낵 諛붾떎 ?띻꼍???④퍡 媛먯긽?섍린 醫뗭? 怨녹엯?덈떎.",
      location: "?몄쿇 ?뱀쭊援??泥?㈃",
      tip: "?え ?댁븞 諛붿쐞 쨌 ?뙄 ???띻꼍 쨌 ?벝 ?먯뿰 ?ы넗?ъ씤??,
      link: "/place/dokbawi",
    },
    {
      name: "?뚯껌??泥쒖＜援먰쉶쨌源?嫄??좊???,
      island: "?뚯껌??,
      image: "/images/socheong-catholic.png",
      category: "愿愿묒?",
      description: "?뚯껌?꾩쓽 醫낃탳쨌?앺솢臾명솕瑜??④퍡 ?댄렣蹂????덈뒗 諛⑸Ц ?ъ씤?몄엯?덈떎. 議곗슜??留덉쓣 怨듦컙??留뚰겮 二쇰? ?앺솢??諛곕젮?섎ŉ ?섎윭蹂댁꽭??",
      location: "?몄쿇 ?뱀쭊援??泥?㈃ ?뚯껌由?,
      tip: "????臾명솕 쨌 ?뱰 ??궗 ?댁빞湲?쨌 ?ㄻ 議곗슜??愿??,
      link: "/place/socheong-catholic",
    },
    {
      name: "?덈룞?ш뎄",
      island: "?뚯껌??,
      image: "/images/yedong-port.png",
      category: "愿愿묒?",
      description: "?묒? ?ш뎄? ?댁븞 留덉쓣 ?띻꼍??留뚮궇 ???덈뒗 ?뚯껌?꾩쓽 ?앺솢寃쎄? ?ъ씤?몄엯?덈떎. 愿愿묒떆?ㅻ낫?ㅻ뒗 ?ъ쓽 ?쇱긽??泥쒖쿇???먮겮??怨녹뿉 媛源앹뒿?덈떎.",
      location: "?몄쿇 ?뱀쭊援??泥?㈃ ?뚯껌由?,
      tip: "???묒? ?ш뎄 쨌 ?룜截??щ쭏???띻꼍 쨌 ?슯 泥쒖쿇???섎윭蹂닿린",
      link: "/place/yedong-port",
    },
    {
      name: "?명솕?숉룷援?,
      island: "?뚯껌??,
      image: "/images/nohwa-port.png",
      category: "愿愿묒?",
      description: "?뚯껌?꾩쓽 諛붾떎? 二쇰? ?앺솢??留욌떯???덈뒗 ?묒? ?ш뎄?낅땲?? 二쇰? 吏吏댟룻빐???띻꼍怨??④퍡 ?ъ쓽 ?앺솢 紐⑥뒿???댄렣蹂닿린 醫뗭뒿?덈떎.",
      location: "?몄쿇 ?뱀쭊援??泥?㈃ ?뚯껌由?,
      tip: "???ш뎄?띻꼍 쨌 ?뙄 ?댁븞 ?곗콉 쨌 ?룜截??ъ쓽 ?쇱긽",
      link: "/place/nohwa-port",
    },
    {
      name: "?뚯껌??二쇱긽?덈━",
      island: "?뚯껌??,
      image: "/images/stromatolite.png",
      category: "愿愿묒?",
      description: "?뚯껌?꾩쓽 ?ㅼ뼇??吏吏덇꼍愿??蹂댁뿬二쇰뒗 ?댁븞 吏吏??ъ씤?몄엯?덈떎. ?덉쟾??愿李??꾩튂? ?꾩? ?묎렐 ?ш굔???뺤씤?????섎윭蹂대뒗 寃껋쓣 沅뚯옣?⑸땲??",
      location: "?몄쿇 ?뱀쭊援??泥?㈃ ?뚯껌由?,
      tip: "?뙇 吏吏덉뿬??쨌 ?え ?붿꽍 愿李?쨌 ?좑툘 ?덉쟾???꾩튂?먯꽌 愿李?,
      link: "/place/socheong-columnar-joint",
    },
    {
      name: "?묐룞?ш뎄쨌?몄궗?섎뒗 諛붿쐞",
      island: "?뚯껌??,
      image: "/images/tapdong-port-greeting-rock.png",
      category: "愿愿묒?",
      description: "?묐룞?ш뎄 二쇰????댁븞 寃쎄?怨??낇듅??諛붿쐞 吏?뺤쓣 ?④퍡 ?댄렣蹂????덈뒗 ?뚯껌?꾩쓽 ?⑥? 吏吏댟룰꼍愿 ?ъ씤?몄엯?덈떎.",
      location: "?몄쿇 ?뱀쭊援??泥?㈃ ?뚯껌由?,
      tip: "???ш뎄 쨌 ?え 諛붿쐞寃쎄? 쨌 ?벝 ?⑥? ?띻꼍",
      link: "/place/tapdong-port",
    },

    {
      name: "?μ＝???댁븞?ш뎄",
      island: "?泥?룄",
      image: "/images/okjuk-sand-dune.png",
      category: "愿愿묒?",
      description: "?泥?룄 遺곸そ ?댁븞?먯꽌 諛붾엺??留뚮뱺 紐⑤옒?몃뜒??留뚮굹??????댁븞?ш뎄",
      location: "?몄쿇 ?뱀쭊援??泥?㈃ ?μ＝??,
      tip: "?룣截?紐⑤옒?щ쭑 ?띻꼍 쨌 ?맜 ?댁깋 ?ы넗議?쨌 ?뙇 吏吏덈챸??,
      link: "/place/okjuk-sanddune",
    },

    {
      name: "諛깅졊??媛먯꽦移댄럹",
      image: "/images/emotioncafe.jpg",
      category: "移댄럹",
      description: "諛붾떎酉곗? ?몄쓣???꾨쫫?ㅼ슫 移댄럹",
    },
    {
      name: "援곗씤 異붿쿇 ?몄텧肄붿뒪",
      image: "/images/soldier.jpg",
      category: "援곗씤?몄텧",
      description: "吏㏃? ?쒓컙??利먭린??諛깅졊??肄붿뒪",
    },

  ];

  const daecheongFood = [
    ["?泥?떇??,"源?좊?","032-836-2124"],["?좎쭊?앸떦","臾몃큺?","032-836-3664"],
    ["諛붾떎?앸떦","源?좎삦","032-836-2476"],["?뚮굹臾닿???,"源?쒖쓽","032-565-9999"],
    ["?곕컮?먮쭏由ъ튂???쇱옄???泥?룄??,"源?섍껴","032-836-3858"],["?泥?㈃??,"?ㅼ쁺??,"032-836-7430"],
    ["?좎쨷?붿슂由?,"源紐낆닚","032-836-9758"],["?붾강?섎（?고렂?섏떇??,"?덉꽑??,"032-836-8999"],
    ["李⑥슦?앸떦","諛곕났遊?,"032-836-7555"],["怨좊━?앸떦","?좊큺","032-836-0054"],
    ["沅곸감?대굹","議곕?寃?,"032-836-1775"],["?ъ떇??,"?≫깭援?,"032-836-2121"],
    ["?쇱?媛??,"?뺤???,"032-836-5983"],["?뺤썝媛??,"?뺢툑?","032-836-2443"],
    ["?숆낏?앸떦","?뺥씗??,"032-836-6640"],["留덈（?앸떦","?μ젙??,"010-2282-2209"],
    ["?띿뿬?앸떦","源誘몄꽦","032-836-2011"],
  ];

  const socheongFood = [
    ["?대??앸떦","?댁?泥?,"032-836-5353"],
  ];

  const daecheongStay = [
    ["?대룞誘쇰컯","諛뺤쁺??,"010-3217-1118"],["臾명솕?쇳꽣","誘쇱쑄??,"032-836-2015"],
    ["?섎┝誘쇰컯","?λ뜒李?,"032-836-5997"],["?좎쭊誘쇰컯","?댁젙??,"032-836-2137"],
    ["?щ쭩誘쇰컯","議곗닕?","032-836-2102"],["珥덈줉蹂꾨?諛?,"?닿꼍??,"032-836-2122"],
    ["?뷀뼢湲곕?諛?,"理쒖슜泥?,"032-836-2477"],["?섍꼍誘쇰컯","?먭꼍??,"032-836-3664"],
    ["?섎뒛誘쇰컯","吏?뺤슧","032-836-2588"],["?섑뫖瑜몃?諛?,"源湲덉옄","010-4189-3545"],
    ["?붾강?섎（?곕?諛?,"議곗쿋??,"010-9466-2079"],["?섏꽦誘쇰컯","?덉꽑??,"010-4756-7069"],
    ["?湲몃?諛?,"理쒓꼍??,"032-836-2321"],["?곗떎誘쇰컯","源?곗닚","032-836-0054"],
    ["?뺣??щ?諛?,"?먭꼍??,"032-836-7070"],["?⑥쑀誘쇰컯","媛뺢만??,"010-2087-7776"],
    ["G?쒖뀡","?꾨챸??,"010-8662-6696"],["?꾪솕誘쇰컯","?쒖뿰??,"032-836-2010"],
    ["濡쒕?誘쇰컯","?닿꼍??,"032-836-2463"],["?됰났誘쇰컯","?띿젙??,"032-836-8853"],
    ["留덈（誘쇰컯","源吏꾨ℓ","032-836-2017"],["?泥??諛?,"源?꾨궓","010-8927-2503"],
    ["?쒕┝?쒖뀡","?꾪샇以","032-836-3290"],["?꾩??ш?","?대났??,"032-836-2035"],
    ["?대떦?붾?諛?,"?↔뎅留?,"010-4741-7787"],["?띿떎誘쇰컯","理쒖긽??,"010-7118-0400"],
    ["泥?떎誘쇰컯","理쒖갹諛?,"010-3335-7779"],["?붿껌誘쇰컯","?대났??,"010-2753-9158"],
  ];

  const socheongStay = [
    ["?깅?","理쒖삦??,"032-836-3024"],["諛깃꼍誘쇰컯","?댁슜??,"032-836-3022"],
    ["?몄쓣誘쇰컯","?뺤삁吏?,"032-836-3043"],["以묒븰誘쇰컯","諛뺤?蹂?,"010-3311-2206"],
    ["??쒕?諛?,"?쒖젙??,"010-9852-6141"],["蹂꾨튆誘쇰컯","?명븳??,"010-9338-3176"],
  ];

  const daecheongFishing = [
    ["湲곗꽦??,"源?몄씤","010-5334-8552"],["遺愿묓샇","?먭퇋吏?,"010-6331-2055"],
    ["?좏빐??,"?ㅼ뿰留?,"010-4052-2663"],["?댁떊?댄샇","源?몄?","010-3739-5217"],
    ["?섏꽦??,"?덉꽑??,"010-4756-7069"],["吏꾩꽦1??,"源?먯닚","010-5322-0473"],
    ["?몄꽦??,"臾몄슜??,"010-6354-2248"],["?뺤쑄??,"源?뺤슫","010-6354-2463"],
    ["?⑺빐??,"?댄솚??,"010-6717-2352"],["?묐뜒??,"二쇱뿰誘?,"010-9093-2027"],
    ["?湲명샇","諛곗닚??,"010-9167-2321"],["?좊났??,"?ㅻ쭔??,"010-3204-2212"],
    ["寃쎄린2??,"諛뺤???,"010-7122-2473"],["鍮꾪샇","?먭꼍??,"010-9314-7036"],
    ["?숇챸??,"?뺤긽鍮?,"010-5345-3620"],["?쒖꽦??,"源湲곗쿋","010-8745-3024"],
  ];

  const islandDirectory =
    selectedIsland === "?泥?룄"
      ? selectedCategory === "留쏆쭛" ? daecheongFood
        : selectedCategory === "?숇컯" ? daecheongStay
        : selectedCategory === "?싳떆諛? ? daecheongFishing : []
      : selectedIsland === "?뚯껌??
      ? selectedCategory === "留쏆쭛" ? socheongFood
        : selectedCategory === "?숇컯" ? socheongStay : []
      : [];

  const marqueeFootprints = footprints.length > 0
    ? Array.from({ length: Math.max(1, Math.ceil(8 / footprints.length)) }, () => footprints).flat()
    : [];

  const filteredPlaces = places.filter((place) => {

    // ???꾪꽣
    const islandMatch =
      place.island === selectedIsland;

    // ?꾩껜
    if (selectedCategory === "?꾩껜") {
      return islandMatch;
    }

    // 愿愿??덈낫
    return (
      islandMatch &&
      (
        place.category === selectedCategory ||

        (
          selectedCategory === "愿愿묒?" &&
          place.category === "?덈낫??궗"
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
      alert("?대? ?ы뻾肄붿뒪???닿꺼 ?덉뼱???삃");
      return;
    }

    const updatedCourse = [...myCourse, place];
    setMyCourse(updatedCourse);
    setOptimizedCourse(null);
    localStorage.setItem("myCourse", JSON.stringify(updatedCourse));
    alert(`${place.name}???ы뻾肄붿뒪???닿꼈?댁슂!`);
  }

  function makeOptimizedCourse() {
    const islandCourseOrder: Record<string, string[]> = {
      諛깅졊?? [
        "?ш낭?대?", "?⑺??꾨컮??, "肄⑸룎?댁븞", "?ъ쭊 李띻린 醫뗭? ?뱀깋紐낆냼", "?ъ껌媛?,
        "?쒗빐理쒕턿??諛깅졊?꾨퉬", "?쒓뎅湲곕룆援먯쓽 ??, "?쒓뎅湲곕룆援먯뿭?ш?", "?섎뒳?댁븞",
        "諛깅졊 ?먮컯?대Ъ踰??앺깭愿愿묒껜?섏꽱??, "泥쒖븞???꾨졊??, "?먮Т吏?, "?ъ옄諛붿쐞",
      ],
      ?泥?룄: [
        "?μ＝???댁븞?ш뎄", "?띿뿬?대?", "?섏씠?뚮컮??, "誘몄븘?숉빐蹂", "吏?먮━?대?",
        "留ㅻ컮?꾩쟾留앸?", "?쇨컖??, "紐⑤옒?명빐蹂", "?듬룞?대?", "?대꽆?댁쟾留앸?",
        "?쒗뭾諛쏆씠", "寃????댁븞", "?낅컮??,
      ],
      ?뚯껌?? [
        "?덈룞?ш뎄", "?뚯껌??泥쒖＜援먰쉶쨌源?嫄??좊???, "?뚯껌?깅?", "遺꾨컮??,
        "?ㅽ듃濡쒕쭏?⑤씪?댄듃", "?뚯껌??二쇱긽?덈━", "?명솕?숉룷援?, "?묐룞?ш뎄쨌?몄궗?섎뒗 諛붿쐞",
      ],
    };

    const selectedPlaces = myCourse.filter((item) => item.island === selectedIsland);
    if (selectedPlaces.length < 2) {
      alert(`${selectedIsland} 愿愿묒?瑜?2怨??댁긽 ?댁븘二쇱꽭??`);
      return;
    }

    const order = islandCourseOrder[selectedIsland] || [];
    const indexOf = (name: string) => {
      const index = order.indexOf(name);
      return index >= 0 ? index : order.length;
    };
    const remaining = [...selectedPlaces];
    const startIndex: Record<string, number> = { 諛깅졊?? 0, ?泥?룄: 5, ?뚯껌?? 0 };
    let currentIndex = startIndex[selectedIsland] ?? 0;
    const sorted: any[] = [];

    while (remaining.length) {
      remaining.sort((a, b) => Math.abs(indexOf(a.name) - currentIndex) - Math.abs(indexOf(b.name) - currentIndex));
      const next = remaining.shift();
      sorted.push(next);
      currentIndex = indexOf(next.name);
    }

    const transportFactor = plannerTransport === "?꾨낫쨌?以묎탳?? ? 2.2 : plannerTransport === "?앹떆" ? 0.9 : 1;
    const islandBase: Record<string, number> = { 諛깅졊?? 6, ?泥?룄: 5, ?뚯껌?? 7 };
    let previousIndex = startIndex[selectedIsland] ?? 0;
    let totalTravelMinutes = 0;

    const stops = sorted.map((place, index) => {
      const placeIndex = indexOf(place.name);
      const gap = Math.max(1, Math.abs(placeIndex - previousIndex));
      const moveMinutes = Math.max(5, Math.round(((islandBase[selectedIsland] || 6) + gap * 4) * transportFactor / 5) * 5);
      const visitMinutes = place.name.includes("?쇨컖??) ? 150 : place.name.includes("?대?") || place.name.includes("?댁븞") ? 60 : 45;
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
      alert("?대? 醫뗭븘?붾? ?뚮??댁슂 ?삃");
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
    if (selectedIsland !== "諛깅졊??) {
      const islandStops: Record<string, Record<string, string[]>> = {
        ?泥?룄: {
          "?먯뿰쨌?ъ쭊": ["?μ＝???댁븞?ш뎄", "?띿뿬?대?쨌?섏씠?뚮컮??, "?쒗뭾諛쏆씠", "?대꽆?댁쟾留앸?"],
          "?꾩씠? 媛議?: ["?μ＝???댁븞?ш뎄", "?띿뿬?대?", "留ㅻ컮?꾩쟾留앸?", "紐⑤옒?명빐蹂"],
          "援곗씤 硫댄쉶": ["?좎쭊?ы빆 二쇰?", "?띿뿬?대?", "?μ＝???댁븞?ш뎄", "留ㅻ컮?꾩쟾留앸?"],
          "??궗쨌?덈낫": ["?泥?룄 留덉쓣", "留ㅻ컮?꾩쟾留앸?", "?μ＝???댁븞?ш뎄", "?쒗뭾諛쏆씠"],
          "留쏆쭛쨌移댄럹": ["?泥?룄 ?꾩? ?뚯떇??, "?띿뿬?대?", "留덉쓣 移댄럹쨌?쇳꽣", "?대꽆?댁쟾留앸?"],
          "?먮쭅쨌?먭툔?섍쾶": ["紐⑤옒?명빐蹂", "吏?먮━?대?", "?띿뿬?대?", "?대꽆?댁쟾留앸?"],
        },
        ?뚯껌?? {
          "?먯뿰쨌?ъ쭊": ["遺꾨컮??, "?ㅽ듃濡쒕쭏?⑤씪?댄듃", "?뚯껌?깅?", "?묐룞?ш뎄쨌?몄궗?섎뒗 諛붿쐞"],
          "?꾩씠? 媛議?: ["?덈룞?ш뎄", "?뚯껌??泥쒖＜援먰쉶쨌源?嫄??좊???, "遺꾨컮??, "?뚯껌?깅?"],
          "援곗씤 硫댄쉶": ["?덈룞?ш뎄", "?뚯껌??泥쒖＜援먰쉶쨌源?嫄??좊???, "?명솕?숉룷援?, "遺꾨컮??],
          "??궗쨌?덈낫": ["?뚯껌??泥쒖＜援먰쉶쨌源?嫄??좊???, "?덈룞?ш뎄", "?뚯껌?깅?", "遺꾨컮??],
          "留쏆쭛쨌移댄럹": ["?덈룞?ш뎄 留덉쓣", "?뚯껌??泥쒖＜援먰쉶쨌源?嫄??좊???, "遺꾨컮??, "?뚯껌?깅?"],
          "?먮쭅쨌?먭툔?섍쾶": ["?덈룞?ш뎄", "?명솕?숉룷援?, "遺꾨컮??, "?뚯껌?깅?"],
        },
      };
      const stops = islandStops[selectedIsland]?.[plannerTheme] || islandStops[selectedIsland]["?먯뿰쨌?ъ쭊"];
      const port = selectedIsland === "?泥?룄" ? "?좎쭊?ы빆" : "?덈룞?ш뎄 ?좎갑??;
      const dayCount = plannerDuration === "?뱀씪" ? 1 : plannerDuration === "1諛?2?? ? 2 : 3;
      const schedules = [
        {
          title: `${selectedIsland} 泥レ씤?곴낵 ????띻꼍`,
          schedule: [
            { time: "?꾩갑 ??, place: `${port} ?꾩갑 쨌 ?대룞 以鍮?, detail: "?좊컯 ?꾩갑 ???덉빟??援먰넻?멸낵 洹???쒓컙??癒쇱? ?뺤씤?섏꽭??" },
            { time: "?ㅼ쟾", place: stops[0], detail: `${plannerTheme} 痍⑦뼢??諛섏쁺??泥?踰덉㎏ ?듭떖 ?μ냼?덉슂.` },
            { time: "?먯떖", place: `${selectedIsland} ?꾩? ?뚯떇??, detail: "?곸뾽 ?щ?瑜??꾪솕濡??뺤씤?섍퀬 ?대룞 寃쎈줈? 媛源뚯슫 怨녹뿉???앹궗?섏꽭??" },
            { time: "?ㅽ썑", place: stops[1], detail: "諛붾엺怨?臾쇰븣, ?꾩? ?묎렐 ?ш굔???뺤씤?섎ŉ ?ъ쑀 ?덇쾶 ?섎윭蹂댁꽭??" },
            { time: plannerDuration === "?뱀씪" ? "異쒗빆 ?? : "???, place: plannerDuration === "?뱀씪" ? `${port} ?대룞` : `${selectedIsland} ?숈냼`, detail: plannerDuration === "?뱀씪" ? "?뱀꽑 留덇컧蹂대떎 ?됰꼮?섍쾶 ??뎄濡??뚯븘媛?몄슂." : "??곸떇?ъ? ?ㅼ쓬 ???댄빆 怨듭?瑜??뺤씤?섏꽭??" },
          ],
        },
        {
          title: `${selectedIsland} ?댁븞쨌?꾨쭩 ?듭떖 肄붿뒪`,
          schedule: [
            { time: "?꾩묠", place: "?숈냼 쨌 湲곗긽 ?뺤씤", detail: "諛붾엺, ?뚭퀬, ?좊컯 ?댄빆 ?щ?瑜?癒쇱? ?뺤씤?섏꽭??" },
            { time: "?ㅼ쟾", place: stops[2], detail: "泥ル궇怨??ㅻⅨ 沅뚯뿭??????띻꼍??泥쒖쿇???섎윭蹂댁꽭??" },
            { time: "?먯떖", place: "?꾩???異붿쿇 ?뚯떇??, detail: "?ъ쟾 ?덉빟 ?먮뒗 ?곸뾽 ?щ? ?뺤씤??沅뚯옣?댁슂." },
            { time: "?ㅽ썑", place: stops[3], detail: "?ъ쭊 珥ъ쁺怨??곗콉 ?쒓컙??40~60遺??뺣룄 ?≪븘?먯꽭??" },
            { time: plannerDuration === "1諛?2?? ? "異쒗빆 ?? : "???, place: plannerDuration === "1諛?2?? ? `${port} ?대룞` : `${selectedIsland} ?숈냼`, detail: plannerDuration === "1諛?2?? ? "洹??렪 ?뱀꽑 ?쒓컙???뺤씤?섍퀬 ?ъ쑀 ?덇쾶 ?대룞?섏꽭??" : "留덉?留????쇱젙??留욎떠 ?댁떇?섏꽭??" },
          ],
        },
        {
          title: `${selectedIsland} 留덉쓣怨??⑥? ?띻꼍`,
          schedule: [
            { time: "?ㅼ쟾", place: selectedIsland === "?泥?룄" ? "?듬룞?대?" : "?명솕?숉룷援?, detail: "議곗슜???ъ쓽 ?앺솢 ?띻꼍??泥쒖쿇???섎윭蹂댁꽭??" },
            { time: "??? ?ㅼ쟾", place: selectedIsland === "?泥?룄" ? "寃????댁븞" : "?뚯껌??二쇱긽?덈━", detail: "?덉쟾??愿李??꾩튂? ?꾩? ?묎렐 媛???щ?瑜?癒쇱? ?뺤씤?섏꽭??" },
            { time: "?먯떖", place: `${selectedIsland} 留덉쓣`, detail: "?앹궗? ?뱀궛??援ъ엯 ?쒓컙???④퍡 ?≪븘?먯꽭??" },
            { time: "異쒗빆 ??, place: `${port} ?대룞`, detail: "湲곗긽怨??뱀꽑 留덇컧?쒓컙???ㅼ떆 ?뺤씤?섍퀬 ??뎄濡??대룞?섏꽭??" },
          ],
        },
      ];

      setPlannerResult(schedules.slice(0, dayCount));
      setPlannerTips([
        selectedIsland === "?泥?룄" ? "?泥?룄??愿愿묒? ?ъ씠 ?대룞???꾪빐 李⑤웾?대굹 ?덉빟 援먰넻?몄쓣 以鍮꾪븯硫??몃━?댁슂." : "?뚯껌?꾨뒗 ?꾨낫 援ш컙怨?寃쎌궗媛 ?덉쑝誘濡?吏먯쓣 媛蹂띻쾶 ?섍퀬 誘몃걚??諛⑹? ?좊컻??以鍮꾪븯?몄슂.",
        "?ъ쓽 ?뚯떇?먃룹닕?뙿룰탳?듯렪? ?댁쁺 ?щ?? ?댁슜 ?쒓컙??誘몃━ ?꾪솕濡??뺤씤?섏꽭??",
        "?댁븞 愿愿묒???諛붾엺怨?臾쇰븣???곕씪 ?묎렐 ?ш굔???щ씪吏????덉쑝誘濡??꾩? ?덈궡瑜??곗꽑?섏꽭??",
        "?쇱젙? ?ы뻾 怨꾪쉷???꾪븳 ?덉떆?대ŉ ?ㅼ젣 ?대룞 ???좊컯 ?댄빆怨?湲곗긽 ?곹솴???ㅼ떆 ?뺤씤?섏꽭??",
      ]);
      window.setTimeout(() => document.getElementById("planner-result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      return;
    }

    const themeStops: Record<string, string[]> = {
      "?먯뿰쨌?ъ쭊": ["?먮Т吏?, "肄⑸룎?댁븞", "?ш낭?대?", "?앹꽟?꾨쭩?"],
      "?꾩씠? 媛議?: ["?ъ껌媛?, "?ш낭?대?", "肄⑸룎?댁븞", "?먮Т吏?],
      "援곗씤 硫댄쉶": ["吏꾩큿 ?쒕궡", "?ш낭?대?", "肄⑸룎?댁븞", "?ъ껌媛?],
      "??궗쨌?덈낫": ["泥쒖븞??46?⑹궗 ?꾨졊??, "以묓솕?숆탳??, "?ъ껌媛?, "?앹꽟?꾨쭩?"],
      "留쏆쭛쨌移댄럹": ["諛깅졊???꾩? 留쏆쭛", "諛붾떎 ?꾨쭩 移댄럹", "?ш낭?대?", "肄⑸룎?댁븞"],
      "?먮쭅쨌?먭툔?섍쾶": ["?섎뒳?댁븞", "肄⑸룎?댁븞", "?먮Т吏?, "?앹꽟?꾨쭩?"],
    };

    const selectedStops = themeStops[plannerTheme] || themeStops["?먯뿰쨌?ъ쭊"];
    const isMilitary = plannerCompanion === "援곗씤 硫댄쉶" || plannerTheme === "援곗씤 硫댄쉶";
    const isFoodTheme = plannerTheme === "留쏆쭛쨌移댄럹";
    const isDayTrip = plannerDuration === "?뱀씪";
    const isOneNight = plannerDuration === "1諛?2??;

    const arrivalPlace = plannerTransport === "?뚰꽣移는룹옄媛??
      ? "?⑷린?ы빆 ?꾩갑 쨌 ?대룞 以鍮?
      : plannerTransport === "?앹떆"
      ? "?⑷린?ы빆 ?꾩갑 쨌 ?앹떆 ?대룞 以鍮?
      : "?⑷린?ы빆 ?꾩갑 쨌 援먰넻???뺤씤";

    const day1Schedule = isDayTrip
      ? isMilitary
        ? [
            { time: "?ㅼ쟾", place: arrivalPlace, detail: "?꾩갑 ??硫댄쉶 ?μ냼? ?몄텧쨌蹂듦? ?쒓컙??癒쇱? ?뺤씤?댁슂." },
            { time: "?먯떖", place: "吏꾩큿 ?쒕궡 ?꾩? ?앸떦", detail: "硫댄쉶 ?숈꽑?먯꽌 ?ш쾶 踰쀬뼱?섏? ?딅뒗 怨녹뿉???앹궗?댁슂." },
            { time: "?ㅽ썑", place: "援곗씤 硫댄쉶 쨌 ?몄텧 ?쇱젙", detail: "遺? ?덈궡???곕Ⅸ ?몄텧쨌蹂듦? ?쒓컙??媛???곗꽑?댁꽌 ?吏곸뿬??" },
            { time: "?ъ쑀 ?쒓컙", place: "?ш낭?대? ?먮뒗 媛源뚯슫 移댄럹", detail: "蹂듦?? 異쒗빆 ?쒓컙???ъ쑀媛 ?덉쓣 ?뚮쭔 吏㏐쾶 ?섎윭蹂댁꽭??" },
            { time: "異쒗빆 ??, place: "?⑷린?ы빆 ?대룞", detail: "?좎궗 ?덈궡? ?뱀꽑 留덇컧 ?쒓컙???뺤씤?섍퀬 異⑸텇???ъ쑀瑜??먭퀬 ?대룞?섏꽭??" },
          ]
        : [
            { time: "?ㅼ쟾", place: arrivalPlace, detail: "諛곗뿉???대┛ ??援먰넻?섎떒???뺣━?섍퀬 ?ы뻾???쒖옉?댁슂." },
            { time: "?ㅼ쟾", place: isFoodTheme ? "?ш낭?대?" : selectedStops[0], detail: `${plannerTheme} 痍⑦뼢??諛섏쁺??泥?肄붿뒪?덉슂.` },
            { time: "?먯떖", place: isFoodTheme ? "諛깅졊???꾩? 留쏆쭛" : "吏꾩큿 ?꾩? ?앸떦", detail: "?대룞 寃쎈줈? 媛源뚯슫 怨녹뿉???앹궗?섎ŉ ?쒓컙???꾧뺨??" },
            { time: "?ㅽ썑", place: isFoodTheme ? "諛붾떎 ?꾨쭩 移댄럹" : selectedStops[1], detail: "異쒗빆 ?쒓컙??怨좊젮??臾대━?섏? ?딅뒗 踰붿쐞?먯꽌 ?섎윭遊먯슂." },
            { time: "異쒗빆 ??, place: "?⑷린?ы빆 ?대룞", detail: "?좎궗 ?덈궡? ?뱀꽑 留덇컧 ?쒓컙???뺤씤?섍퀬 異⑸텇???ъ쑀瑜??먭퀬 ?대룞?섏꽭??" },
          ]
      : isMilitary
      ? [
          { time: "?ㅼ쟾", place: arrivalPlace, detail: "?꾩갑 ??硫댄쉶 ?μ냼? ?몄텧쨌蹂듦? ?쒓컙??癒쇱? ?뺤씤?댁슂." },
          { time: "?먯떖", place: isFoodTheme ? "吏꾩큿 ?쒕궡 ?꾩? 留쏆쭛" : "吏꾩큿 ?쒕궡 ?앸떦", detail: "硫댄쉶 ?숈꽑怨?媛源뚯슫 怨녹뿉???ъ쑀 ?덇쾶 ?앹궗?댁슂." },
          { time: "?ㅽ썑", place: "援곗씤 硫댄쉶 쨌 ?몄텧 ?쇱젙", detail: "遺? ?덈궡???곕Ⅸ ?몄텧쨌蹂듦? ?쒓컙??理쒖슦?좎쑝濡??≪븘??" },
          { time: "??? ?ㅽ썑", place: isFoodTheme ? "諛붾떎 ?꾨쭩 移댄럹" : "?ш낭?대?", detail: "硫댄쉶 ?쇱젙???앸궃 ???대룞 遺?댁씠 ?곸? 肄붿뒪瑜?媛蹂띻쾶 利먭꺼??" },
          { time: "???, place: "吏꾩큿 ?쒕궡 쨌 ?숈냼", detail: "??곸떇?????숈냼??泥댄겕?명븯怨??ㅼ쓬 ???쇱젙??以鍮꾪빐??" },
        ]
      : [
          { time: "?ㅼ쟾", place: arrivalPlace, detail: "諛곗뿉???대┛ ??援먰넻?섎떒???뺣━?섍퀬 ?ы뻾???쒖옉?댁슂." },
          { time: "?먯떖", place: isFoodTheme ? "諛깅졊???꾩? 留쏆쭛" : "吏꾩큿 ?꾩? ?앸떦", detail: "?꾩? 硫붾돱濡??좊뱺?섍쾶 ?ы뻾???쒖옉?댁슂." },
          { time: "?ㅽ썑", place: isFoodTheme ? "?ш낭?대?" : selectedStops[0], detail: `${plannerTheme} 痍⑦뼢??諛섏쁺??泥?踰덉㎏ ?듭떖 肄붿뒪?덉슂.` },
          { time: "??? ?ㅽ썑", place: isFoodTheme ? "諛붾떎 ?꾨쭩 移댄럹" : selectedStops[1], detail: "???쇱젙怨?寃뱀튂吏 ?딅뒗 ?μ냼?먯꽌 ?ъ쑀濡?쾶 ?쒓컙??蹂대궡??" },
          { time: "???, place: "吏꾩큿 ?쒕궡 쨌 ?숈냼", detail: "??곸떇?????숈냼 泥댄겕?멸낵 ?댁떇??異붿쿇?댁슂." },
        ];

    const day2Schedule = isMilitary
      ? [
          { time: "?꾩묠", place: "?숈냼 쨌 異쒕컻 以鍮?, detail: "湲곗긽怨??ш컼???댄빆 怨듭?瑜?癒쇱? ?뺤씤?댁슂." },
          { time: "?ㅼ쟾", place: "?ш낭?대?", detail: "?대룞 遺?댁씠 ?곸? ???紐낆냼?먯꽌 ?ъ쑀濡?쾶 ?꾩묠???쒖옉?댁슂." },
          { time: "?먯떖", place: isFoodTheme ? "泥ル궇怨??ㅻⅨ ?꾩? 留쏆쭛" : "吏꾩큿 ?꾩? ?앸떦", detail: "泥ル궇怨?寃뱀튂吏 ?딅뒗 ?앸떦??怨⑤씪 ?앹궗?댁슂." },
          { time: "?ㅽ썑", place: isFoodTheme ? "肄⑸룎?댁븞 ?먮뒗 移댄럹" : "肄⑸룎?댁븞", detail: "異쒗빆 ?쇱젙??留욎떠 媛源뚯슫 肄붿뒪瑜?臾대━ ?놁씠 ?섎윭遊먯슂." },
          ...(isOneNight
            ? [{ time: "異쒗빆 ??, place: "?⑷린?ы빆 ?대룞", detail: "?좎궗 ?덈궡? ?뱀꽑 留덇컧 ?쒓컙???뺤씤?섍퀬 異⑸텇???ъ쑀瑜??먭퀬 ?대룞?섏꽭??" }]
            : [{ time: "???, place: "吏꾩큿 ?쒕궡 쨌 ?숈냼", detail: "??곸떇?????숈냼?먯꽌 ?댁떇?섎ŉ 留덉?留??좎쓣 以鍮꾪빐??" }]),
        ]
      : [
          { time: "?꾩묠", place: "?숈냼 쨌 異쒕컻 以鍮?, detail: "湲곗긽怨??ш컼???댄빆 怨듭?瑜?癒쇱? ?뺤씤?댁슂." },
          { time: "?ㅼ쟾", place: isFoodTheme ? "肄⑸룎?댁븞" : selectedStops[2], detail: "泥ル궇怨?寃뱀튂吏 ?딅뒗 ???肄붿뒪瑜??섎윭遊먯슂." },
          { time: "?먯떖", place: isFoodTheme ? "泥ル궇怨??ㅻⅨ ?꾩? 留쏆쭛" : "?꾩???異붿쿇 ?앸떦", detail: "?대룞 寃쎈줈? 媛源뚯슫 ?앸떦???좏깮?섎㈃ ?쒓컙???꾨굜 ???덉뼱??" },
          { time: "?ㅽ썑", place: isFoodTheme ? "移댄럹 ?먮뒗 ?댁븞 ?곗콉" : selectedStops[3], detail: "?ъ쭊 珥ъ쁺怨??곗콉 ?쒓컙???ъ쑀 ?덇쾶 ?≪븘?먯꽭??" },
          ...(isOneNight
            ? [{ time: "異쒗빆 ??, place: "?⑷린?ы빆 ?대룞", detail: "?좎궗 ?덈궡? ?뱀꽑 留덇컧 ?쒓컙???뺤씤?섍퀬 異⑸텇???ъ쑀瑜??먭퀬 ?대룞?섏꽭??" }]
            : [{ time: "???, place: "吏꾩큿 ?쒕궡 쨌 ?숈냼", detail: "??곸떇?????숈냼?먯꽌 ?댁떇?섎ŉ 留덉?留??좎쓣 以鍮꾪빐??" }]),
        ];

    const day3Schedule = [
      { time: "?꾩묠", place: "?섎뒳?댁븞", detail: "議곗슜???꾩묠 諛붾떎? ?앺깭 ?띻꼍??媛먯긽?댁슂." },
      { time: "?ㅼ쟾", place: plannerTheme === "??궗쨌?덈낫" ? "泥쒖븞??46?⑹궗 ?꾨졊?? : "?ъ껌媛?, detail: "?욎꽑 ?쇱젙怨??ㅻⅨ 諛깅졊?꾩쓽 ?댁빞湲곕? 留뚮굹遊먯슂." },
      { time: "?먯떖", place: isFoodTheme ? "留덉?留??꾩? 留쏆쭛" : "吏꾩큿 ?쒕궡", detail: "留덉?留??앹궗? ?뱀궛臾?援ъ엯 ?쒓컙???④퍡 ?≪븘??" },
      { time: "異쒗빆 ??, place: "?⑷린?ы빆 ?대룞", detail: "?좎궗 ?덈궡? ?뱀꽑 留덇컧 ?쒓컙???뺤씤?섍퀬 異⑸텇???ъ쑀瑜??먭퀬 ?대룞?섏꽭??" },
    ];

    const templates = [
      {
        title: isDayTrip ? (isMilitary ? "援곗씤 硫댄쉶 以묒떖 ?뱀씪 ?쇱젙" : "諛깅졊???뱀씪 ?듭떖 ?ы뻾") : (isMilitary ? "援곗씤 硫댄쉶 以묒떖 泥ル궇" : "諛깅졊??泥レ씤?곴낵 ???紐낆냼"),
        schedule: day1Schedule,
      },
      {
        title: isMilitary ? "硫댄쉶 ?ㅼ쓬 ??쨌 諛깅졊???ы뻾" : "諛깅졊???듭떖 肄붿뒪 ?댁뼱蹂닿린",
        schedule: day2Schedule,
      },
      {
        title: "?⑥? ?댁빞湲곗? ?ъ쑀濡쒖슫 留덈Т由?,
        schedule: day3Schedule,
      },
    ];

    const dayCount = isDayTrip ? 1 : isOneNight ? 2 : 3;

    const transportTip = plannerTransport === "?꾨낫쨌?以묎탳??
      ? "諛깅졊?꾨뒗 愿愿묒? ?ъ씠 嫄곕━媛 硫??怨듭쁺踰꾩뒪 ?쒓컙?쒖? 媛쒖씤?앹떆 踰덊샇瑜?誘몃━ ??ν븯?몄슂."
      : plannerTransport === "?앹떆"
      ? "?앹떆 ?대룞? 湲곗궗?섍낵 ?ㅼ쓬 ?대룞 ?쒓컙怨??μ냼瑜?誘몃━ 議곗쑉?섎㈃ ?쇱젙???명빐??"
      : "李⑤웾 ?대룞 ??二쇱쑀???꾩튂? 諛섎궔 ?쒓컙??誘몃━ ?뺤씤?섎㈃ ?쇱젙???⑥뵮 ?명빐??";

    const companionTip = plannerCompanion === "?꾩씠 ?숇컲"
      ? "?꾩씠? ?④퍡?쇰㈃ ?댁븞 ?곗콉 ?쒓컙??吏㏐쾶 ?섎늻怨?媛꾩떇怨??щ쾶?룹쓣 以鍮꾪븯?몄슂."
      : plannerCompanion === "遺紐⑤떂"
      ? "遺紐⑤떂怨??④퍡?쇰㈃ 怨꾨떒怨?寃쎌궗媛 ?곸? ?ш낭?대?쨌肄⑸룎?댁븞??以묒떖?쇰줈 ?ъ쑀 ?덇쾶 ?대룞?섏꽭??"
      : plannerCompanion === "援곗씤 硫댄쉶"
      ? "援곗씤 硫댄쉶 ?쇱젙? 遺????몄텧쨌蹂듦? ?덈궡瑜?理쒖슦?좎쑝濡??섍퀬 愿愿??쇱젙? ?⑤뒗 ?쒓컙??留욎떠 議곗젙?섏꽭??"
      : "?숉뻾?먯쓽 泥대젰??留욎떠 紐낆냼 ??怨노떦 40~60遺??뺣룄 ?ъ쑀瑜??먯꽭??";

    const seasonTip: Record<string, string> = {
      遊? "遊꾩뿉??諛붾떣諛붾엺??李④??????덉쑝???뉗? 寃됱샆??梨숆린?몄슂.",
      ?щ쫫: "?щ쫫?먮뒗 ?뉖튆??媛뺥븯誘濡?紐⑥옄, ?좏겕由? ?앹닔瑜?以鍮꾪븯?몄슂.",
      媛?? "媛?꾩? ?쇨탳李④? 而ㅼ꽌 諛붾엺留됱씠? 媛踰쇱슫 蹂댁삩?섎쪟媛 醫뗭븘??",
      寃⑥슱: "寃⑥슱?먮뒗 寃고빆 媛?μ꽦???덉쑝???쇱젙 ?욌뮘濡??ъ쑀瑜??먭퀬 諛⑺뭾?⑺뭹??以鍮꾪븯?몄슂.",
    };

    setPlannerResult(templates.slice(0, dayCount));
    setPlannerTips([
      transportTip,
      companionTip,
      seasonTip[plannerSeason],
      "?쇱젙? ?ы뻾 怨꾪쉷???뺣뒗 ?덉떆?대ŉ, ?ㅼ젣 ?대룞 ???ш컼???댄빆怨??곸뾽?쒓컙쨌硫댄쉶 媛???쒓컙???ㅼ떆 ?뺤씤?섏꽭??",
    ]);

    setTimeout(() => {
      document.getElementById("planner-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  const quickSearchItems = [
    { name: "留쏆쭛 ?꾩껜蹂닿린", category: "留쏆쭛", icon: "?뜙", description: "諛깅졊???뚯떇?먭낵 ??쒕찓?? ?꾪솕踰덊샇瑜??뺤씤?섏꽭??", target: "food" },
    {
  name: "?⑺빐?꾩떇 ?됰㈃?ъ뼱",
  category: "留쏆쭛",
  icon: "?뜙",
  description: "諛깅졊?꾩쓽 ????됰㈃吏?5怨녹쓣 紐⑤몢 ?섎윭蹂댁꽭??",
  target: "naengmyeon",
},
    { name: "?숈냼 ?꾩껜蹂닿린", category: "?숇컯", icon: "?룳", description: "諛깅졊???숇컯?낆냼? ?곕씫泥섎? ?쒕늿???뺤씤?섏꽭??", target: "stay" },
    { name: "媛쒖씤?앹떆", category: "援먰넻", icon: "?슃", description: "諛깅졊??媛쒖씤?앹떆 ?낆껜? ?꾪솕踰덊샇瑜??뺤씤?섏꽭??", target: "taxi" },
    { name: "?뚰꽣移?, category: "援먰넻", icon: "?슅", description: "諛깅졊???뚰꽣移??낆껜 ?뺣낫瑜??뺤씤?섏꽭??", target: "rentcar" },
    { name: "諛고렪 ?덉빟", category: "?ы뻾?뺣낫", icon: "?슓", description: "諛깅졊???ш컼???덉빟怨??댄빆 ?뺣낫瑜??뺤씤?섏꽭??", target: "live-info" },
    { name: "援곗씤 硫댄쉶 ?ы뻾", category: "援곗씤硫댄쉶", icon: "?첉", description: "援곗씤 硫댄쉶??留욎텣 ?ы뻾 ?쇱젙??留뚮뱾?대낫?몄슂.", target: "ai-planner" },
    { name: "?щ퀎 留욎땄 ?ы뻾 ?뚮옒??, category: "?ы뻾肄붿뒪", icon: "??, description: "湲곌컙怨??숉뻾??留욌뒗 諛깅졊쨌?泥?룹냼泥??쇱젙???먮룞?쇰줈 留뚮뱾?대뱶?ㅼ슂.", target: "ai-planner" },
    { name: "諛깅졊???ъ쭊泥?, category: "?ъ쭊", icon: "?벝", description: "諛깅졊?꾩쓽 ?꾨쫫?ㅼ슫 ?띻꼍 ?ъ쭊??媛먯긽?섏꽭??", target: "gallery" },
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
      .map((place) => ({ ...place, icon: "?뱧", target: "place-section", type: "place" }));

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
    if (item.target === "food") { setSelectedCategory("留쏆쭛"); setShowFood(true); }
    if (item.target === "stay") { setSelectedCategory("?숇컯"); setShowStay(true); }
    if (item.target === "taxi") { setSelectedCategory("媛쒖씤?앹떆"); setShowTaxi(true); }
    if (item.target === "rentcar") { setShowRentcar(true); }
    if (item.target === "gallery") { setShowGallery(true); }
    if (item.type === "place") { setSelectedIsland(item.island || "諛깅졊??); setSelectedCategory("愿愿묒?"); }

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
      // ?꾧린 ?뚯씠釉붿쓣 ?꾩쭅 留뚮뱾吏 ?딆? 媛쒕컻 ?④퀎?먯꽌??鍮?紐⑸줉?쇰줈 ?쒖떆
      setMilitaryReviews([]);
    }
    setMilitaryReviewLoading(false);
  }

  async function handleMilitaryReviewSubmit() {
    if (!militaryReviewNickname.trim() || !militaryReviewPeriod.trim() || militaryReviewContent.trim().length < 10) {
      alert("?됰꽕?? 諛⑸Ц?쒓린瑜??낅젰?섍퀬 ?꾧린??10???댁긽 ?묒꽦?댁＜?몄슂.");
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
      console.error("援곗씤硫댄쉶 ?꾧린 ?깅줉 ?ㅻ쪟:", error);
      alert("?꾧린 ?깅줉???ㅽ뙣?덉뒿?덈떎. Supabase ?꾧린 ?뚯씠釉??ㅼ젙???뺤씤?댁＜?몄슂.");
      setMilitaryReviewSubmitting(false);
      return;
    }
    setMilitaryReviewNickname("");
    setMilitaryReviewPeriod("");
    setMilitaryReviewRelation("?곗씤");
    setMilitaryReviewStay("?뱀씪");
    setMilitaryReviewTransport("?앹떆");
    setMilitaryReviewRating(5);
    setMilitaryReviewContent("");
    await loadMilitaryReviews();
    setMilitaryReviewSubmitting(false);
    alert("?뚯쨷??硫댄쉶 ?꾧린媛 ?깅줉?섏뿀?듬땲???뭽");
  }

  async function loadQnaQuestions() {
    setQnaLoading(true);
    const { data, error } = await supabase
      .from("qna_questions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Q&A 遺덈윭?ㅺ린 ?ㅻ쪟:", error);
      setQnaLoading(false);
      return;
    }

    setQnaQuestions(data ?? []);
    setQnaLoading(false);
  }

  async function handleQnaSubmit() {
    if (!qnaNickname.trim() || !qnaTitle.trim() || !qnaContent.trim()) {
      alert("?됰꽕?? 吏덈Ц ?쒕ぉ, 吏덈Ц ?댁슜??紐⑤몢 ?낅젰?댁＜?몄슂.");
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
      console.error("Q&A ?깅줉 ?ㅻ쪟:", error);
      alert("吏덈Ц ?깅줉???ㅽ뙣?덉뒿?덈떎. ?ㅼ떆 ?쒕룄?댁＜?몄슂.");
      setQnaSubmitting(false);
      return;
    }

    setQnaNickname("");
    setQnaFormCategory("諛고렪");
    setQnaTitle("");
    setQnaContent("");
    await loadQnaQuestions();
    setQnaSubmitting(false);
    alert("吏덈Ц???깅줉?섏뿀?듬땲???삃");
  }

  async function loadFootprints() {
    setFootprintLoading(true);
    const { data, error } = await supabase
      .from("traveler_footprints")
      .select("*")
      .eq("is_approved", true)
      .order("created_at", { ascending: false });

    if (!error && data) setFootprints(data);
    if (error) console.error("??諛쒖옄援?遺덈윭?ㅺ린 ?ㅻ쪟:", error);
    setFootprintLoading(false);
  }

  async function handleFootprintSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!footprintNickname.trim() || !footprintPlace.trim() || !footprintFile) {
      alert("?됰꽕?? ?μ냼紐? ?ъ쭊? 瑗??낅젰??二쇱꽭??");
      return;
    }

    if (footprintFile.size > 5 * 1024 * 1024) {
      alert("?ъ쭊? 5MB ?댄븯留??щ┫ ???덉뼱??");
      return;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(footprintFile.type)) {
      alert("JPG, PNG, WEBP ?ъ쭊留??щ┫ ???덉뼱??");
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

      alert("?ъ쭊???깅줉?먯뼱?? 愿由ъ옄 ?뺤씤 ???ы뻾?먮뱾????諛쒖옄援?뿉 怨듦컻?⑸땲?? ?벝");
    } catch (error) {
      console.error("??諛쒖옄援??깅줉 ?ㅻ쪟:", error);
      alert("?ъ쭊 ?깅줉???ㅽ뙣?덉뒿?덈떎. ?좎떆 ???ㅼ떆 ?쒕룄??二쇱꽭??");
    } finally {
      setFootprintSubmitting(false);
    }
  }

  const filteredQnaQuestions = qnaQuestions.filter((item) => {
    const islandOk =
      selectedIsland === "諛깅졊??
        ? !item.island || item.island === "諛깅졊??
        : item.island === selectedIsland;
    const categoryOk = qnaCategory === "?꾩껜" || item.category === qnaCategory;
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
      <span className="hidden sm:inline">諛깅졊쨌?泥?룹냼泥?룄??紐⑤뱺 ?뺣낫</span>
      <span className="sm:hidden">???ы뻾?뺣낫</span>
    </a>

    <div className="flex items-center gap-3">
    <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
      <a href="/" className="hover:text-sky-500">??/a>
      <a href="#place-section" className="hover:text-sky-500">愿愿묒?</a>
      <a href="#food" className="hover:text-sky-500">留쏆쭛</a>
      <a href="#stay" className="hover:text-sky-500">?숈냼</a>
      {selectedIsland === "諛깅졊?? && (
        <a href="#qna" className="hover:text-sky-500">Q&A</a>
      )}
      <a href="/admin" className="hover:text-red-500">?뵍 愿由ъ옄</a>
      <a href="/about" className="hover:text-sky-500">?댁쁺???뚭컻</a>
    </nav>
    <div className="relative">
      <button type="button" onClick={() => setShowLanguageMenu(!showLanguageMenu)} className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 shadow-sm hover:border-sky-300" aria-expanded={showLanguageMenu}>
        <span>?뙋</span><span>?쒓뎅??/span><span className="text-xs">??/span>
      </button>
      {showLanguageMenu && (
        <div className="absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-2xl border border-gray-100 bg-white py-2 shadow-xl">
          <button type="button" onClick={() => setShowLanguageMenu(false)} className="block w-full px-4 py-2.5 text-left text-sm font-bold text-sky-600 hover:bg-sky-50">?쒓뎅??/button>
          <button type="button" onClick={() => openTranslatedPage("en")} className="block w-full px-4 py-2.5 text-left text-sm font-bold text-gray-700 hover:bg-gray-50">English</button>
          <button type="button" onClick={() => openTranslatedPage("zh-CN")} className="block w-full px-4 py-2.5 text-left text-sm font-bold text-gray-700 hover:bg-gray-50">訝?뻼</button>
          <button type="button" onClick={() => openTranslatedPage("ja")} className="block w-full px-4 py-2.5 text-left text-sm font-bold text-gray-700 hover:bg-gray-50">?ζ쑍沃?/button>
        </div>
      )}
    </div>
    </div>
  </div>
</header>
      {/* HERO */}
      <section className="relative isolate min-h-[500px] overflow-hidden bg-slate-950 md:min-h-[560px]">
        {/* ?꾩옱 ?ъ쭊 ???λ쭔 諛곌꼍?쇰줈 ?쒖떆?섍퀬 3珥덈쭏??援먯껜?⑸땲?? */}
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
              title="?꾨Ⅴ硫??ㅼ쓬 ???좎뵪媛 ?쒖떆?⑸땲??
            >
              <span className="text-xl">{weatherError ? "?뙟截? : currentWeatherInfo.icon}</span>
              <span>{currentWeather?.name}</span>
              <strong>{weatherLoading || typeof currentWeather?.temperature !== "number" ? "--째" : `${currentWeather.temperature.toFixed(0)}째C`}</strong>
            </button>
            <p className="mb-3 text-sm font-black tracking-[0.16em] text-sky-100 md:text-base">
              BAENGNYEONG 쨌 DAECHEONG 쨌 SOCHEONG
            </p>
            <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-white drop-shadow-lg md:text-6xl">
              諛깅졊 쨌 ?泥?쨌 ?뚯껌,
              <br />
              ???ы뻾???쒓납?먯꽌
            </h1>
            <p className="mt-6 max-w-2xl text-base font-bold leading-7 text-white drop-shadow md:text-lg">
              諛고렪遺??愿愿묒? 쨌 留쏆쭛 쨌 ?숇컯 쨌 援먰넻 쨌 援곗씤硫댄쉶源뚯?
              <br className="hidden sm:block" />
              ?꾩? ?앺솢 寃쏀뿕???댁? ?쒗빐 ???ы뻾 媛?대뱶
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {(["諛깅졊??, "?泥?룄", "?뚯껌??] as const).map((island) => (
                <button
                  key={island}
                  type="button"
                  onClick={() => {
                    setSelectedIsland(island);
                    setSelectedCategory(island === "諛깅졊?? ? "?꾩껜" : "愿愿묒?");

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
                  {island} 蹂닿린
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setWeatherSlideIndex((weatherSlideIndex + 1) % weatherItems.length)}
            className="hidden w-64 shrink-0 rounded-3xl border border-white/30 bg-black/15 p-6 text-left text-white shadow-xl backdrop-blur-md transition hover:bg-black/25 lg:block lg:translate-x-16 xl:translate-x-24"
            title="?꾨Ⅴ硫??ㅼ쓬 ???좎뵪媛 ?쒖떆?⑸땲??
            aria-label={`${currentWeather?.name} ?좎뵪, ?ㅼ쓬 ???좎뵪 蹂닿린`}
          >
            <p className="text-xs font-black tracking-[0.16em] text-sky-100">LIVE WEATHER</p>
            <p className="mt-3 text-base font-bold">?ㅻ뒛 {currentWeather?.name}</p>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-5xl">{weatherError ? "?뙟截? : currentWeatherInfo.icon}</span>
              <div>
                <p className="text-3xl font-black">{weatherLoading || typeof currentWeather?.temperature !== "number" ? "--째" : `${currentWeather.temperature.toFixed(0)}째C`}</p>
                <p className="mt-1 text-sm text-white/75">{weatherError ? "?좎뵪 ?뺤씤 以? : currentWeatherInfo.label}</p>
              </div>
            </div>
            {typeof currentWeather?.windSpeed === "number" && <p className="mt-4 border-t border-white/20 pt-3 text-xs text-white/70">諛붾엺 {currentWeather.windSpeed.toFixed(1)}km/h 쨌 30遺꾨쭏??媛깆떊</p>}
          </button>
        </div>
      </section>

      {/* ?뚮옯?쇳삎 鍮좊Ⅸ ?뺣낫 硫붾돱 */}
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

      {/* 吏湲??뺤씤??異뺤젣 쨌 ?됱궗 쨌 愿?댁냼??*/}
      <section id="island-news" className="mt-20 bg-[#f7f8fa] py-14 md:mt-28 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-2xl font-black text-gray-950 md:text-3xl">異뺤젣 쨌 ?됱궗 쨌 愿?댁냼??/h2>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {["?꾩껜", "異뺤젣", "?됱궗", "愿?댁냼??].map((label) => (
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
                  aria-label="?댁쟾 ?ъ뒪??
                >
                  ??                </button>
                <button
                  type="button"
                  onClick={() => moveIslandNews("right")}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl font-black text-gray-800 shadow-sm transition hover:bg-gray-100 active:scale-95"
                  aria-label="?ㅼ쓬 ?ъ뒪??
                >
                  ??                </button>
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
                    title={`${item.title} ?ъ뒪???ш쾶 蹂닿린`}
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
            ???쇱젙怨?吏?먮궡?⑹? 二쇱턀쨌二쇨?湲곌? ?ъ젙???곕씪 蹂寃쎈맆 ???덉쑝??諛⑸Ц ?먮뒗 ?좎껌 ??理쒖떊 怨듭?瑜??뺤씤??二쇱꽭??
          </p>
        </div>
      </section>


{/* ??2李?媛쒗렪: ?듭떖 ?ы뻾 以鍮?硫붾돱 */}
<section id="ship-info" className="scroll-mt-24 max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
  <div className="mb-8">
    <p className="text-sky-600 font-extrabold text-sm mb-2">TRIP ESSENTIALS</p>
    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
      ?ы뻾 以鍮? ?ш린??鍮좊Ⅴ寃?    </h2>
    <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl">
      泥섏쓬 諛⑸Ц?쒕떎硫?諛고렪遺???뺤씤?섍퀬, 紐⑹쟻??留욌뒗 ?ы뻾?뺣낫濡?諛붾줈 ?대룞??蹂댁꽭??
    </p>
  </div>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
    <a
      href="https://island.haewoon.co.kr/"
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition"
    >
      <span className="text-3xl">?슓</span>
      <h3 className="font-black text-lg mt-4">諛고렪 ?뺤씤</h3>
      <p className="text-sm text-gray-500 mt-2">異쒗빆 ???댄빆 ?щ?? ?덈ℓ ?뺤씤</p>
      <span className="inline-block mt-4 text-sm font-bold text-sky-600">?뺤씤?섍린 ??/span>
    </a>

    <button
      type="button"
      onClick={() => {
        setSelectedCategory("愿愿묒?");
        window.setTimeout(() => {
          document.getElementById("place-section")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }}
      className="text-left group rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition"
    >
      <span className="text-3xl">?뱧</span>
      <h3 className="font-black text-lg mt-4">愿愿묒?</h3>
      <p className="text-sm text-gray-500 mt-2">?щ퀎 ???紐낆냼? ?꾩? ?ы뻾?뺣낫</p>
      <span className="inline-block mt-4 text-sm font-bold text-sky-600">?섎윭蹂닿린 ??/span>
    </button>

    <button
      type="button"
      onClick={() => {
        setSelectedIsland("諛깅졊??);
        setSelectedCategory("援곗씤硫댄쉶");
        window.setTimeout(() => {
          document.getElementById("military-visit")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      }}
      className="text-left group rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition"
    >
      <span className="text-3xl">?첉</span>
      <h3 className="font-black text-lg mt-4">援곗씤 硫댄쉶</h3>
      <p className="text-sm text-gray-500 mt-2">諛고렪쨌?숇컯쨌?대룞 以鍮??ㅼ쟾?뺣낫</p>
      <span className="inline-block mt-4 text-sm font-bold text-sky-600">?뺣낫 蹂닿린 ??/span>
    </button>

    <button
      type="button"
      onClick={() => document.getElementById("qna")?.scrollIntoView({ behavior: "smooth" })}
      className="text-left group rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition"
    >
      <span className="text-3xl">?뮠</span>
      <h3 className="font-black text-lg mt-4">?ы뻾 Q&A</h3>
      <p className="text-sm text-gray-500 mt-2">?ы뻾 ???먯＜ 臾삳뒗 吏덈Ц ?뺤씤</p>
      <span className="inline-block mt-4 text-sm font-bold text-sky-600">吏덈Ц 蹂닿린 ??/span>
    </button>
  </div>
</section>

      {/* DAECHUNG & SOCHEONG QUICK GUIDE */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6 md:p-8">
          <p className="text-sm font-black tracking-[0.18em] text-indigo-600">ISLAND QUICK GUIDE</p>
          <h2 className="mt-2 text-3xl font-black text-gray-900">?룤截??泥?룄쨌?뚯껌?꾨룄 ?④퍡 ?섎윭蹂댁꽭??/h2>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            諛깅졊?꾩??????ㅻⅨ ?띻꼍??媛吏??щ뱾?댁뿉?? 諛고렪怨??꾩? ?대룞 ?ш굔??癒쇱? ?뺤씤?섍퀬 ?ъ쑀 ?덇쾶 ?쇱젙???≪븘蹂댁꽭??
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <button
              type="button"
              onClick={() => {
                setSelectedIsland("?泥?룄");
                setSelectedCategory("愿愿묒?");
                setTimeout(() => document.getElementById("place-section")?.scrollIntoView({behavior:"smooth", block:"start"}), 100);
              }}
              className="rounded-3xl border border-indigo-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-gray-900">?뙩截??泥?룄</h3>
                <span className="font-black text-indigo-600">愿愿묒? 蹂닿린 ??/span>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                ?쒗뭾諛쏆씠???댁븞 ?덇꼍怨??μ＝???댁븞?ш뎄泥섎읆 諛붾엺怨?吏?뺤씠 留뚮뱺 ?띻꼍??以묒떖?쇰줈 ?섎윭蹂닿린 醫뗭븘??
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["#?쒗뭾諛쏆씠","#?μ＝?숉빐?덉궗援?,"#?띿뿬?대?","#吏吏덉뿬??].map((tag) => (
                  <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700">{tag}</span>
                ))}
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedIsland("?뚯껌??);
                setSelectedCategory("愿愿묒?");
                setTimeout(() => document.getElementById("place-section")?.scrollIntoView({behavior:"smooth", block:"start"}), 100);
              }}
              className="rounded-3xl border border-cyan-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black text-gray-900">?뙄 ?뚯껌??/h3>
                <span className="font-black text-cyan-600">愿愿묒? 蹂닿린 ??/span>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                ?묒? ?ъ쓽 ?댁븞 ?띻꼍怨?吏吏??먯썝??泥쒖쿇??留뚮굹???ы뻾?????댁슱?ㅼ슂. ?대룞 ???꾩? ?ш굔??瑗??뺤씤??二쇱꽭??
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["#遺꾨컮??,"#?ㅽ듃濡쒕쭏?⑤씪?댄듃","#?뚯껌?꾨벑?","#?댁븞?띻꼍"].map((tag) => (
                  <span key={tag} className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700">{tag}</span>
                ))}
              </div>
            </button>
          </div>

          <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            ????吏??? 湲곗긽怨??좊컯 ?댄빆 ?곹솴???곕씪 ?대룞 ?쇱젙???щ씪吏????덉뼱?? 異쒕컻 ??理쒖떊 ?댄빆?뺣낫瑜??뺤씤??二쇱꽭??
          </div>
        </div>
      </section>

      {/* ?щ퀎 留욎땄 ?ы뻾 ?뚮옒??*/}
      {(
        <section id="ai-planner" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-16">
          <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-sky-50 shadow-sm">
            <div className="p-6 md:p-9">
              <p className="text-sm font-black tracking-[0.18em] text-violet-600">TRAVEL PLANNER</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
                ??{selectedIsland} 留욎땄 ?ы뻾 ?뚮옒??              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-gray-600">
                ?ы뻾 湲곌컙怨??숉뻾, 痍⑦뼢??怨좊Ⅴ硫?{selectedIsland} ?쇱젙 ?덉떆瑜??먮룞?쇰줈 留뚮뱾?대뱶?ㅼ슂.
                ?ㅼ젣 ?대룞 ?꾩뿉???ш컼???댄빆 ?щ?? ?꾩? 援먰넻 ?곹솴??瑗??뺤씤??二쇱꽭??
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl border border-pink-100 bg-pink-50 px-4 py-3">
                <span className="font-black text-pink-700">?ㅿ툘 ?닿? ?댁? {selectedIsland} 愿愿묒? {myCourse.filter((item) => item.island === selectedIsland).length}怨?/span>
                <span className="text-sm text-gray-600">愿愿묒? 移대뱶?먯꽌 ?μ냼瑜??댁? ?? ?꾨옒 留욎땄 ?쇱젙怨??④퍡 鍮꾧탳??蹂댁꽭??</span>
                <button
                  type="button"
                  onClick={() => document.getElementById("my-course")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className="ml-auto rounded-full bg-white px-4 py-2 text-sm font-black text-pink-700 shadow-sm hover:bg-pink-100"
                >
                  ?댁? ?μ냼 蹂닿린 ??                </button>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-black text-gray-700">?ы뻾 湲곌컙</span>
                  <select
                    value={plannerDuration}
                    onChange={(e) => {
                      setPlannerDuration(e.target.value);
                      setPlannerResult(null);
                    }}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-bold text-gray-800 outline-none focus:border-violet-400"
                  >
                    {["?뱀씪", "1諛?2??, "2諛?3??].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-gray-700">?숉뻾</span>
                  <select
                    value={plannerCompanion}
                    onChange={(e) => {
                      setPlannerCompanion(e.target.value);
                      setPlannerResult(null);
                    }}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-bold text-gray-800 outline-none focus:border-violet-400"
                  >
                    {["媛議?, "?꾩씠 ?숇컲", "遺紐⑤떂", "?곗씤쨌移쒓뎄", "?쇱옄", "援곗씤 硫댄쉶"].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-gray-700">?ы뻾 ?뚮쭏</span>
                  <select
                    value={plannerTheme}
                    onChange={(e) => {
                      setPlannerTheme(e.target.value);
                      setPlannerResult(null);
                    }}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-bold text-gray-800 outline-none focus:border-violet-400"
                  >
                    {["?먯뿰쨌?ъ쭊", "?꾩씠? 媛議?, "援곗씤 硫댄쉶", "??궗쨌?덈낫", "留쏆쭛쨌移댄럹", "?먮쭅쨌?먭툔?섍쾶"].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-gray-700">?대룞?섎떒</span>
                  <select
                    value={plannerTransport}
                    onChange={(e) => {
                      setPlannerTransport(e.target.value);
                      setPlannerResult(null);
                    }}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-bold text-gray-800 outline-none focus:border-violet-400"
                  >
                    {["?뚰꽣移는룹옄媛??, "?앹떆", "?꾨낫쨌?以묎탳??].map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-gray-700">怨꾩젅</span>
                  <select
                    value={plannerSeason}
                    onChange={(e) => {
                      setPlannerSeason(e.target.value);
                      setPlannerResult(null);
                    }}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 font-bold text-gray-800 outline-none focus:border-violet-400"
                  >
                    {["遊?, "?щ쫫", "媛??, "寃⑥슱"].map((item) => (
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
                ?????ы뻾 ?쇱젙 留뚮뱾湲?              </button>

              {plannerResult && (
                <div id="planner-result" className="scroll-mt-24 mt-9">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-sm font-black text-violet-600">留욎땄 ?쇱젙 寃곌낵</p>
                      <h3 className="mt-1 text-2xl font-black text-gray-900">
                        {plannerDuration} 쨌 {plannerCompanion} 쨌 {plannerTheme}
                      </h3>
                    </div>
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-600 shadow-sm">
                      {plannerTransport} 쨌 {plannerSeason}
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
                            {dayIndex + 1}?쇱감 쨌 {day.title}
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
                    <h4 className="font-black text-amber-900">?뮕 ?ы뻾 ???뺤씤?섏꽭??/h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-900">
                      {plannerTips.map((tip, index) => (
                        <li key={`${tip}-${index}`}>??{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div id="my-course" className="scroll-mt-24 mt-10 border-t border-violet-100 pt-8">
                <p className="font-bold text-pink-700">愿愿묒? ?닿린? 留욎땄 ?쇱젙 吏쒓린瑜??쒓납?먯꽌</p>
                <h3 className="mt-2 text-2xl font-black text-gray-900 md:text-3xl">?ㅿ툘 ?섎쭔???ы뻾肄붿뒪</h3>
                <p className="mt-3 leading-7 text-gray-600">
                  愿愿묒? 移대뱶?먯꽌 ?댁? ?μ냼瑜??쒖꽌?濡??뺤씤?섍퀬, ?꾩뿉??留뚮뱺 留욎땄 ?쇱젙怨??④퍡 ?섎쭔??肄붿뒪瑜??꾩꽦??蹂댁꽭??
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl bg-violet-50 p-4">
                  <button
                    type="button"
                    onClick={makeOptimizedCourse}
                    className="rounded-2xl bg-gray-950 px-5 py-3 font-black text-white shadow-sm transition hover:bg-violet-700"
                  >
                    ?㎛ ?댁? ?μ냼 理쒕떒 ?숈꽑 留뚮뱾湲?                  </button>
                  <span className="text-sm leading-6 text-gray-600">?꾩옱 ?좏깮???대룞?섎떒({plannerTransport}) 湲곗? ?덉긽?쒓컙??怨꾩궛?댁슂.</span>
                </div>

                {optimizedCourse?.island === selectedIsland && (
                  <div id="optimized-course" className="scroll-mt-24 mt-6 rounded-3xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-black text-emerald-700">異붿쿇 理쒕떒 ?숈꽑 쨌 ?덉긽?쒓컙</p>
                        <h4 className="mt-1 text-xl font-black text-gray-900">{selectedIsland} {optimizedCourse.stops.length}怨??대룞肄붿뒪</h4>
                      </div>
                      <div className="rounded-2xl bg-white px-4 py-3 text-right shadow-sm">
                        <p className="text-xs font-bold text-gray-500">?덉긽 珥??뚯슂?쒓컙</p>
                        <strong className="text-lg text-emerald-700">
                          ??{Math.floor((optimizedCourse.totalTravelMinutes + optimizedCourse.totalVisitMinutes) / 60)}?쒓컙 {(optimizedCourse.totalTravelMinutes + optimizedCourse.totalVisitMinutes) % 60}遺?                        </strong>
                        <p className="mt-1 text-xs text-gray-500">?대룞 {optimizedCourse.totalTravelMinutes}遺?+ 愿??{optimizedCourse.totalVisitMinutes}遺?/p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {optimizedCourse.stops.map((stop: any) => (
                        <div key={`${stop.order}-${stop.name}`} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-black text-white">{stop.order}</span>
                          <div className="min-w-0 flex-1">
                            <strong className="text-gray-900">{stop.name}</strong>
                            <div className="mt-2 flex flex-wrap gap-2 text-xs font-bold">
                              <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">?슅 {stop.order === 1 ? "??뎄쨌異쒕컻吏?먯꽌" : "?댁쟾 ?μ냼?먯꽌"} ??{stop.moveMinutes}遺?/span>
                              <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">?벝 沅뚯옣 愿??{stop.visitMinutes}遺?/span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(selectedIsland === "諛깅졊?? ? "?⑷린?ы빆 諛깅졊?? : selectedIsland === "?泥?룄" ? "?좎쭊?ы빆 ?泥?룄" : "?덈룞?ш뎄 ?뚯껌??)}&destination=${encodeURIComponent(`${optimizedCourse.stops[optimizedCourse.stops.length - 1]?.name} ${selectedIsland}`)}&waypoints=${encodeURIComponent(optimizedCourse.stops.slice(0, -1).map((stop: any) => `${stop.name} ${selectedIsland}`).join("|"))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-5 py-3 font-black text-white transition hover:bg-emerald-800 sm:w-auto"
                    >
                      ?뱧 吏?꾩뿉???꾩껜 ?숈꽑 ?뺤씤
                    </a>
                    <p className="mt-4 text-xs leading-5 text-emerald-900">???????쇰컲?곸씤 ?대룞嫄곕━? ?좏깮???대룞?섎떒??湲곗??쇰줈 怨꾩궛???덉긽?쒓컙?낅땲?? ?ㅼ젣 ?쒓컙? ?꾨줈쨌?좎뵪쨌臾쇰븣쨌?꾩? 援먰넻 ?곹솴???곕씪 ?щ씪吏????덉뒿?덈떎.</p>
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
      {/* ?щ퀎 ?ㅼ떆媛??멸린 愿愿묒? */}
{selectedIsland === "諛깅졊?? && popularPlaces.length > 0 && (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
    <h2 className="text-4xl font-bold text-center mb-10">
      ?룇 諛깅졊???ㅼ떆媛??멸린 愿愿묒? TOP 10
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
      {popularPlaces.map((place, index) => (
        <div key={place.name} className="bg-white rounded-3xl shadow-lg p-5 text-center border hover:shadow-xl transition">
          <div className="text-3xl font-extrabold mb-3">
            {index === 0 ? "?쪍" : index === 1 ? "?쪎" : index === 2 ? "?쪏" : `${index + 1}??}
          </div>
          <h3 className="font-bold text-lg mb-2">{place.name}</h3>
          <p className="text-sm text-gray-500">?? {place.view} 쨌 ?ㅿ툘 {place.like}</p>
        </div>
      ))}
    </div>
  </section>
)}

{selectedIsland === "?泥?룄" && (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
    <h2 className="text-4xl font-bold text-center mb-10">
      ?룇 ?泥?룄 ?ㅼ떆媛??멸린 愿愿묒? TOP 10
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
      {filteredPlaces
        .filter((place) => place.category === "愿愿묒?")
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
              {index === 0 ? "?쪍" : index === 1 ? "?쪎" : index === 2 ? "?쪏" : `${index + 1}??}
            </div>
            <h3 className="font-bold text-lg mb-2">{place.name}</h3>
            <p className="text-sm text-gray-500">
              ?? {placeViews.find((v) => v.place_name === place.name)?.view_count || 0}
            </p>
          </div>
        ))}
    </div>
  </section>
)}

{selectedIsland === "?뚯껌?? && (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
    <h2 className="text-4xl font-bold text-center mb-10">
      ?룇 ?뚯껌???ㅼ떆媛??멸린 愿愿묒? TOP 3
    </h2>
    <div className="grid md:grid-cols-3 gap-5">
      {filteredPlaces
        .filter((place) => place.category === "愿愿묒?")
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
              {index === 0 ? "?쪍" : index === 1 ? "?쪎" : "?쪏"}
            </div>
            <h3 className="font-bold text-lg mb-2">{place.name}</h3>
            <p className="text-sm text-gray-500">
              ?? {placeViews.find((v) => v.place_name === place.name)?.view_count || 0}
            </p>
          </div>
        ))}
    </div>
  </section>
)}


<section className="max-w-7xl mx-auto px-6 pb-12">
  {selectedIsland === "諛깅졊?? && (
    <div className="rounded-3xl bg-sky-50 p-7 md:p-9 ring-1 ring-sky-100">
      <p className="font-bold text-sky-600 mb-2">??쒕?援??쒗빐 理쒕턿?????ы뻾</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">?룤截?諛깅졊???ы뻾</h2>
      <p className="mt-4 leading-8 text-gray-700">
        ?먮Т吏꽷룹궗怨띤빐蹂쨌肄⑸룎?댁븞쨌?ъ껌媛????먯뿰怨??덈낫쨌??궗 ?댁빞湲곌? ?④퍡 ?덈뒗 諛깅졊?꾩쓽 愿愿묒?瑜??섎윭蹂댁꽭??
        ?꾨옒?먮뒗 諛깅졊??愿愿묒?? ?ы뻾???꾩슂???뺣낫瑜??댁뼱???뺤씤?????덉뼱??
      </p>
    </div>
  )}

  {selectedIsland === "?泥?룄" && (
    <div className="rounded-3xl bg-emerald-50 p-7 md:p-9 ring-1 ring-emerald-100">
      <p className="font-bold text-emerald-600 mb-2">紐⑤옒?ш뎄? ?댁븞?덇꼍??留뚮굹????/p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">?룤截??泥?룄 ?ы뻾</h2>
      <p className="mt-4 leading-8 text-gray-700">
        ?μ＝???댁븞?ш뎄쨌?쒗뭾諛쏆씠쨌?띿뿬?대?쨌?쇨컖?????泥?룄留뚯쓽 ?ㅼ뼇???먯뿰寃쎄???留뚮굹蹂댁꽭??
        ?꾨옒?먮뒗 ?泥?룄 愿愿묒?? 留쏆쭛쨌?숇컯쨌?싳떆諛??뺣낫瑜??댁뼱???뺤씤?????덉뼱??
      </p>
    </div>
  )}

  {selectedIsland === "?뚯껌?? && (
    <div className="rounded-3xl bg-indigo-50 p-7 md:p-9 ring-1 ring-indigo-100">
      <p className="font-bold text-indigo-600 mb-2">?깅?? 吏吏덇꼍愿???몄긽?곸씤 ?묒? ??/p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">?룤截??뚯껌???ы뻾</h2>
      <p className="mt-4 leading-8 text-gray-700">
        ?뚯껌?깅?쨌遺꾨컮?꽷룹뒪?몃줈留덊넧?쇱씠?몃? 以묒떖?쇰줈 ?뚯껌?꾩쓽 諛붾떎 ?띻꼍怨??낇듅??吏吏덇꼍愿???섎윭蹂댁꽭??
        ?꾨옒?먮뒗 ?뚯껌??愿愿묒?? 留쏆쭛쨌?숇컯 ?뺣낫瑜??댁뼱???뺤씤?????덉뼱??
      </p>
    </div>
  )}
</section>

      {(selectedIsland === "?뚯껌?? && ["留쏆쭛", "?숇컯"].includes(selectedCategory)) && (
        <section id="island-directory" className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {selectedIsland} {selectedCategory} ?덈궡
            </h2>
            <p className="mt-3 text-gray-500">
              ?꾩? 愿愿??덈궡?먮즺??湲곗옱???뺣낫瑜??뺣━?덉뒿?덈떎. 諛⑸Ц ???꾪솕濡??댁쁺 ?щ?瑜??뺤씤??二쇱꽭??
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
                    <p className="mt-2 text-sm text-gray-500">??쒖옄 {owner}</p>
                  </div>
                  <span className="text-2xl">
                    {selectedCategory === "留쏆쭛" ? "?뜙" : selectedCategory === "?숇컯" ? "?룳" : "?렍"}
                  </span>
                </div>
                <a
                  href={`tel:${phone.replace(/-/g, "")}`}
                  className="mt-5 block rounded-xl bg-gray-900 px-4 py-3 text-center font-bold text-white hover:bg-blue-600 transition"
                >
                  ??{phone}
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PLACE CARDS */}
      <div className="text-center mb-14">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          ?뵦 媛??留롮씠 李얜뒗 {selectedIsland} 紐낆냼
        </h2>

        <p className="text-gray-500 text-lg">
          {selectedIsland === "諛깅졊??
            ? "諛깅졊?꾨? 泥섏쓬 諛⑸Ц?쒕떎硫?瑗?媛遊먯빞 ?????愿愿묒?"
            : selectedIsland === "?泥?룄"
            ? "?泥?룄瑜?泥섏쓬 諛⑸Ц?쒕떎硫?瑗?媛遊먯빞 ?????愿愿묒?"
            : "?뚯껌?꾨? 泥섏쓬 諛⑸Ц?쒕떎硫?瑗?媛遊먯빞 ?????愿愿묒?"}
        </p>

      </div>
      {(
        selectedCategory === "?꾩껜" ||
        selectedCategory === "愿愿묒?" ||
        selectedCategory === "?덈낫??궗" ||
        selectedCategory === "援곗씤硫댄쉶" ||
        selectedCategory === "媛議깆뿬??
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

                      {place.name === "?먮Т吏? && (
                        <span className="bg-violet-100 text-violet-700 text-[11px] px-3 py-1 rounded-full font-bold">
                          ?룢截?紐낆듅 ????                        </span>
                      )}

                      {place.name === "?ш낭?대?" && (
                        <span className="bg-green-100 text-green-700 text-[11px] px-3 py-1 rounded-full font-bold">
                          ?뙼 泥쒖뿰湲곕뀗臾???91??                        </span>
                      )}

                      {place.name === "肄⑸룎?댁븞" && (
                        <span className="bg-green-100 text-green-700 text-[11px] px-3 py-1 rounded-full font-bold">
                          ?뙼 泥쒖뿰湲곕뀗臾???92??                        </span>
                      )}

                      {["遺꾨컮??, "?ㅽ듃濡쒕쭏?⑤씪?댄듃"].includes(place.name) && (
                        <span className="bg-green-100 text-green-700 text-[11px] px-3 py-1 rounded-full font-bold">
                          ?뙼 泥쒖뿰湲곕뀗臾???08??                        </span>
                      )}

                      {place.name === "?앹꽟?꾨쭩?" && (
                        <span className="bg-pink-100 text-pink-600 text-[11px] px-3 py-1 rounded-full font-medium">
                          ?똿 ?몄쓣紐낆냼
                        </span>
                      )}

                      {place.name === "?먮Т吏? && (
                        <span className="bg-sky-100 text-sky-700 text-[11px] px-3 py-1 rounded-full font-medium">
                          ?벝 ?덇꼍紐낆냼
                        </span>
                      )}

                      {place.name === "?ш낭?대?" && (
                        <span className="bg-amber-100 text-amber-700 text-[11px] px-3 py-1 rounded-full font-medium">
                          ?룚截?媛먯꽦?대?
                        </span>
                      )}

                      {[
                        "?먮Т吏?,
                        "?⑺??꾨컮??,
                        "?ш낭?대?",
                        "?쒗뭾諛쏆씠",
                        "?μ＝???댁븞?ш뎄",
                      ].includes(place.name) && (
                          <span className="bg-emerald-100 text-emerald-700 text-[11px] px-3 py-1 rounded-full font-medium">
                            ?뙇 吏吏덇났??                          </span>
                        )}

                      {place.name === "?앹꽟?꾨쭩?" && (
                        <span className="bg-red-100 text-red-700 text-[11px] px-3 py-1 rounded-full font-medium">
                          ?눖?눟 理쒕턿??                        </span>
                      )}

                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {place.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px] mb-3 sm:mb-4">
                      {place.description}
                    </p>
                    <div className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-5 sm:leading-6">
  {place.tip ? `異붿쿇 ?ъ씤?? ${place.tip}` : "異붿쿇 ?ъ씤?? ?꾩??먯꽌 瑗??섎윭蹂?留뚰븳 紐낆냼?덉슂."}
</div>
                    {place.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span>?뱧</span>
                        <span>{place.location}</span>
                      </div>
                    )}


<div className="mt-auto pt-4 sm:pt-5 space-y-2 sm:space-y-3">
  <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-400">
    <span>?? {placeViews.find((item) => item.place_name === place.name)?.view_count || 0}</span>
    <span>?ㅿ툘 {placeLikes.find((item) => item.place_name === place.name)?.like_count || 0}</span>
  </div>

  {place.link && place.link.startsWith("/place/") && (
    <Link
      href={place.link}
      onClick={() => handlePlaceView(place.name)}
      className="inline-flex items-center justify-center w-full bg-sky-600 text-white py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-sky-700 transition"
    >
      ?뱰 諛깃낵?ъ쟾 蹂닿린
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
    {myCourse.some((item) => item.name === place.name) ? "???쇱젙???닿?" : "?뿎截??쇱젙???닿린"}
  </button>

  <button
    onClick={() => handlePlaceLike(place.name)}
    className="w-full bg-rose-500 text-white py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-rose-600 transition"
  >
    ?ㅿ툘 醫뗭븘??  </button>

  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      ({
        "?먮Т吏?: "?먮Т吏??몄쿇 ?뱀쭊援?諛깅졊硫??고솕由?,
        "?ъ껌媛?: "?ъ껌媛??몄쿇 ?뱀쭊援?諛깅졊硫?諛깅졊濡?16踰덇만 109-117",
        "?띿뿬?대?": "?띿뿬?대? ?몄쿇 ?뱀쭊援??泥?㈃ ?泥?━ 469-25",
        "?섏씠?뚮컮??: "?섏씠?뚮컮???띿뿬?대? ?몄쿇 ?뱀쭊援??泥?㈃ ?泥?━ 469-25",
        "?낅컮??: "?낅컮?꾪빐蹂 ?몄쿇 ?뱀쭊援??泥?㈃ ?泥?━",
        "寃????댁븞": "寃???갗諛붿쐞 ?몄쿇 ?뱀쭊援??泥?㈃ ?泥?━",
        "?뚯껌??泥쒖＜援먰쉶쨌源?嫄??좊???: "?덈룞怨듭냼 源?嫄??좊? ?숈긽 ?뚯껌???몄쿇 ?뱀쭊援??泥?㈃",
        "?덈룞?ш뎄": "?덈룞?ш뎄 ?뚯껌???몄쿇 ?뱀쭊援??泥?㈃",
        "?명솕?숉룷援?: "?명솕?숉룷援??뚯껌???몄쿇 ?뱀쭊援??泥?㈃",
        "?뚯껌??二쇱긽?덈━": "?뚯껌??二쇱긽?덈━ ?몄쿇 ?뱀쭊援??泥?㈃",
        "?묐룞?ш뎄쨌?몄궗?섎뒗 諛붿쐞": "?묐룞?ш뎄 ?몄궗?섎뒗 諛붿쐞 ?뚯껌???몄쿇 ?뱀쭊援??泥?㈃"
      } as Record<string, string>)[place.name] || `${place.name} ${place.island} ?몄쿇 ?뱀쭊援?
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-full bg-black text-white py-3 rounded-2xl font-semibold hover:bg-blue-600 transition"
  >
    ?뱧 ?꾩튂 ?뺤씤?섍린
  </a>
</div>

                  </div>
                </div>
              ))}

            </div>
          </section>

        )}
        {selectedIsland === "諛깅졊?? && (selectedCategory === "?꾩껜" || selectedCategory === "愿愿묒?") && (
          <section id="hidden-places" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
            <div className="mb-6">
              <p className="text-sm font-black tracking-[0.18em] text-emerald-600">HIDDEN PLACES</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900">?뿺截?諛깅졊???⑥? 愿愿묐챸??/h2>
              <p className="mt-2 text-gray-600">???愿愿묒? ?ㅼ쓬?쇰줈 泥쒖쿇???섎윭蹂닿린 醫뗭? 諛깅졊?꾩쓽 ???ㅻⅨ ?μ냼?ㅼ씠?먯슂.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["??, "以묓솕?숆탳??, "諛깅졊?꾩쓽 ?ㅻ옒????궗 援먰쉶", "/images/junghwadong.jpg"],
                ["?렚", "諛깅졊?ъ껌???뚮쭏?뚰겕(?곌퐙留덉쓣)", "?ъ껌???ㅽ솕瑜??뚮쭏濡???愿愿묎났媛?, "/images/simcheong.jpg"],
                ["?뙯", "400???몄넚", "諛깅졊?꾨? ?ㅻ옯?숈븞 吏耳쒖삩 ?곸쭠?곸씤 ?몄넚", "/images/nosong.jpg"],
                ["?え", "?⑦룷由??듦끝援ъ“", "?낇듅??吏痢?援ъ“瑜?蹂????덈뒗 吏吏덈챸??, "/images/seupgok.jpg"],
                ["?뙅", "媛먮엺???ы쉷 ?꾨Т??遺꾪룷吏", "諛깅졊?꾩쓽 吏吏??댁빞湲곕? 留뚮궇 ???덈뒗 ?μ냼", "/images/basalt.jpg"],
                ["?┃", "臾쇰쾾諛붿쐞", "?먮컯?대Ъ踰??앺깭? ?곌껐?섎뒗 ?댁븞 紐낆냼", "/images/seal.jpg"],
              ].map(([icon, name, desc, image]) => (
                <a key={name} href={image} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-3xl">{icon}</div>
                  <h3 className="mt-4 text-xl font-black text-gray-900 group-hover:text-emerald-600">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
                  <p className="mt-4 text-xs font-bold text-emerald-600">?ъ쭊 ?ш쾶 蹂닿린 ??/p>
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
          <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">?벝 ?ы뻾?먮뱾????諛쒖옄援?/h2>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            諛깅졊쨌?泥?룹냼泥?뿉??留뚮궃 ?밸퀎???쒓컙???④꺼二쇱꽭??
            ?뱀떊???ъ쭊 ???μ씠 ?ㅼ쓬 ?ы뻾?먯쓽 ?ㅻ젞???⑸땲??
          </p>
        </div>
        <div className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-gray-600 shadow-sm ring-1 ring-black/5">
          愿由ъ옄 ?뺤씤 ??怨듦컻?쇱슂 ??        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
        <form onSubmit={handleFootprintSubmit} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5 md:p-6">
          <h3 className="text-xl font-black text-gray-900">?섏쓽 ??諛쒖옄援??④린湲?/h3>
          <p className="mt-1 text-sm text-gray-500">吏곸젒 李띿? ?ы뻾 ?ъ쭊怨?吏㏃? ?댁빞湲곕? ?ㅻ젮二쇱꽭??</p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {["諛깅졊??, "?泥?룄", "?뚯껌??].map((island) => (
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
              placeholder="?μ냼紐?(?? ?먮Т吏? ?쒗뭾諛쏆씠)"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-400"
            />
            <input
              value={footprintNickname}
              onChange={(e) => setFootprintNickname(e.target.value)}
              maxLength={20}
              placeholder="?됰꽕??
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-400"
            />
            <textarea
              value={footprintStory}
              onChange={(e) => setFootprintStory(e.target.value)}
              maxLength={200}
              rows={3}
              placeholder="???쒓컙???????以??댁빞湲?(?좏깮)"
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-400"
            />
            <label htmlFor="footprint-photo" className="block cursor-pointer rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-5 text-center transition hover:border-amber-300 hover:bg-amber-50">
              <span className="block text-2xl">?뼹截?/span>
              <span className="mt-1 block text-sm font-extrabold text-gray-700">
                {footprintFile ? footprintFile.name : "?ъ쭊 ?좏깮?섍린"}
              </span>
              <span className="mt-1 block text-xs text-gray-400">JPG 쨌 PNG 쨌 WEBP / 理쒕? 5MB</span>
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
            {footprintSubmitting ? "?ъ쭊 ?깅줉 以?.." : "?벜 ??諛쒖옄援??④린湲?}
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-gray-400">
            吏곸젒 珥ъ쁺???ъ쭊留??щ젮二쇱꽭?? ?깅줉???ъ쭊? 愿由ъ옄 ?뺤씤 ??怨듦컻?⑸땲??
          </p>
        </form>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-gray-900">?ы뻾?먮뱾???④릿 ?쒓컙</h3>
              <p className="mt-1 text-sm text-gray-500">???ъ뿉???댁뼱吏???ы뻾?먮뱾???ъ쭊 湲곕줉</p>
            </div>
            {footprints.length > 0 && (
              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-gray-500 shadow-sm">
                {footprints.length}媛쒖쓽 諛쒖옄援?              </span>
            )}
          </div>

          {footprintLoading ? (
            <div className="rounded-3xl bg-white p-10 text-center text-sm text-gray-500 shadow-sm">?ъ쭊??遺덈윭?ㅻ뒗 以?..</div>
          ) : footprints.length === 0 ? (
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-white/80 p-8 text-center">
              <div className="text-5xl">?룤截?/div>
              <p className="mt-4 text-lg font-black text-gray-800">泥?踰덉㎏ ??諛쒖옄援?쓣 湲곕떎由ш퀬 ?덉뼱??/p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                諛깅졊쨌?泥?룹냼泥?뿉??李띿? ?뱀떊???밸퀎???쒓컙??媛??癒쇱? ?④꺼二쇱꽭??
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {footprints.slice(0, 12).map((item) => (
                <article key={item.id} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                  <a href={item.image_url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={`${item.island} ${item.place_name} ?ы뻾???ъ쭊`}
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

    {/* ?뱀쭊援곗껌 */}
    <a
      href="https://www.ongjin.go.kr"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-3xl bg-white p-8 shadow hover:shadow-xl transition"
    >
      <div className="text-5xl">?룢</div>

      <h2 className="mt-5 text-3xl font-black">
        ?뱀쭊援곗껌
      </h2>

      <p className="mt-4 text-gray-600 leading-8">
        愿愿묒젙蹂? 異뺤젣, ?됱젙?쒕퉬??
        怨듭??ы빆 ??        諛깅졊?꾩쓽 怨듭떇 ?뺣낫瑜?        ?뺤씤?????덉뒿?덈떎.
      </p>

      <div className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-white font-bold">
        諛붾줈媛湲???      </div>
    </a>

    {/* ?뱀쭊?먯뿰紐?*/}
    <a
      href="https://www.ongjinmall.co.kr"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-3xl bg-white p-8 shadow hover:shadow-xl transition"
    >
      <div className="text-5xl">?썚</div>

      <h2 className="mt-5 text-3xl font-black">
        ?뱀쭊?먯뿰紐?      </h2>

      <p className="mt-4 text-gray-600 leading-8">
        諛깅졊?꾨? 鍮꾨’??        ?뱀쭊援?二쇰??ㅼ씠 吏곸젒 ?먮ℓ?섎뒗
        ?뱀궛???쇳븨紐곗엯?덈떎.
      </p>

      <div className="mt-6 inline-block rounded-full bg-green-600 px-6 py-3 text-white font-bold">
        ?뱀궛??蹂대윭媛湲???      </div>
    </a>

  </div>
</section>
 {selectedIsland === "諛깅졊?? && (
  <>
{/* PHOTO GALLERY */}
<section id="gallery" className={selectedIsland === "諛깅졊?? ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-20" : "hidden"}>
  <div className="rounded-[2rem] bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 md:p-10 shadow-sm border border-violet-100">
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="font-bold text-violet-600">諛깅졊???띻꼍?ъ쭊</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
          ?벝 諛깅졊???ъ쭊泥??쒕늿??蹂닿린
        </h2>
        <p className="mt-3 leading-7 text-gray-600">
          諛깅졊?꾩쓽 諛붾떎쨌?댁븞쨌愿愿묒? ?띻꼍???ъ쭊?쇰줈 ?쒕늿??媛먯긽??蹂댁꽭??
          ?ъ쭊???꾨Ⅴ硫??ш쾶 蹂????덉뼱??
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowGallery(!showGallery)}
        className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-violet-600"
      >
        {showGallery ? "?ъ쭊泥??リ린 ?? : "?ъ쭊泥??꾩껜蹂닿린 ??}
      </button>
    </div>

    {showGallery && (
      <div className="mt-8">
        <div className="mb-6 rounded-2xl bg-white/80 p-4 text-sm leading-6 text-gray-600">
          ?벜 ?ъ쭊?묎? ?ㅽ븰吏꾨떂, ?뱀쭊援????ъ쭊 ?묒갔
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
                  alt={`諛깅졊???ъ쭊 ${index + 1}`}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-10 text-white">
                  <p className="text-sm font-bold">諛깅졊???띻꼍 #{index + 1}</p>
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
        className={selectedIsland === "諛깅졊?? ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-20" : "hidden"}
      >
        {(selectedCategory === "?꾩껜" ||
          selectedCategory === "?숇컯") && (
          <>
            <div className="rounded-[2rem] bg-gradient-to-br from-sky-50 to-blue-50 p-6 md:p-10 shadow-sm border border-sky-100">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-bold text-sky-600">諛깅졊???숇컯?뺣낫</p>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                    ?룳 ?숇컯?낆냼 ?쒕늿??蹂닿린
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    ?숇컯?낆냼 ?대쫫쨌二쇱냼쨌?꾪솕踰덊샇瑜??뺤씤?섍퀬 諛붾줈 ?꾪솕?????덉뼱??
                    ?덉빟 媛???щ?? ?붽툑? 諛⑸Ц ???숈냼??吏곸젒 ?뺤씤??二쇱꽭??
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["?슓 ??뎄 ?대룞嫄곕━ ?뺤씤","?뫅?랅윉⒱랅윉?媛議굿룸떒泥?媛앹떎 臾몄쓽","?뜵 議곗떇 ?щ? ?뺤씤","?슅 二쇱감 媛???щ?","?뙄 寃고빆 ???쇱젙 臾몄쓽"].map((tip) => (
                      <span key={tip} className="rounded-full border border-sky-100 bg-white px-3 py-2 text-xs font-bold text-sky-700 shadow-sm">{tip}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-5 text-gray-500">
                    ?뮕 ???ы뻾? 諛고렪 ?쇱젙???щ씪吏????덉뼱 ?덉빟 ??痍⑥냼쨌蹂寃?湲곗????④퍡 ?뺤씤?섎㈃ 醫뗭븘??
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowStay(!showStay)}
                  className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-600"
                >
                  {showStay ? "?숇컯?낆냼 ?リ린 ?? : "?숇컯?낆냼 ?꾩껜蹂닿린 ??}
                </button>
              </div>

              {showStay && (
                <div className="mt-8">
                  <div className="rounded-3xl bg-white p-5 md:p-7 shadow-lg">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                          ?뵊
                        </span>
                        <input
                          type="text"
                          placeholder="?숈냼紐? 二쇱냼, ?꾪솕踰덊샇濡?寃??
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
                          寃??珥덇린??                        </button>
                      )}
                    </div>

                    <div className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                      ?뮕 ?대??곗뿉?쒕뒗 ?꾪솕踰덊샇瑜??꾨Ⅴ硫?諛붾줈 ?꾪솕 ?곌껐?????덉뒿?덈떎.
                      二쇱냼쨌?곕씫泥섎뒗 蹂寃쎈맆 ???덉쑝???덉빟 ???ㅼ떆 ?뺤씤??二쇱꽭??
                    </div>

                    <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-100">
                      <table className="w-full min-w-[720px] text-left border-collapse">
                        <thead className="bg-gray-900 text-white">
                          <tr>
                            <th className="p-4 text-base">?숇컯紐?/th>
                            <th className="p-4 text-base">?뚯옱吏</th>
                            <th className="p-4 text-base">?꾪솕踰덊샇</th>
                          </tr>
                        </thead>

                        <tbody>
                          {[
                            ["猷⑥떆?꾪렂??, "諛깅졊濡?07", "032-836-0410"],
                            ["?뚮씪?ㅼ씠?ㅻえ??, "諛깅졊濡?61-14", "032-836-8118"],
                            ["臾명솕紐⑦뀛", "諛깅졊濡?65", "032-836-7001"],
                            ["諛깅졊?듬굹臾댄렂??, "諛깅졊濡?61-30", "010-9440-0545"],
                            ["諛깅졊?꾩썡媛(?⑺넗紐⑦뀛)", "諛깅졊濡?71踰덇만39", "032-836-8060"],
                            ["諛깅졊濡쒓렇?쒖뀡", "諛깅졊濡?61-37", "010-3374-9306"],
                            ["諛깅졊由ъ“??, "諛깅졊濡?80踰덇만55", "032-836-3233"],
                            ["諛깅졊紐⑦뀛", "諛깅졊濡?71踰덇만24-3", "032-836-0633"],
                            ["諛깅졊?ㅼ뀡?명뀛&?쒖뀡", "諛깅졊濡?2", "010-6356-8118"],
                            ["諛깅졊罹좏븨", "諛깅졊濡?63-17", "032-836-2080"],
                            ["諛깅졊?뚮??щえ??, "諛깅졊濡?22", "032-836-3353"],
                            ["?꾩씪?쒕뱶罹먯뒳", "諛깅졊濡?15", "032-836-6700"],
                            ["?뱀쭊紐⑦뀛", "諛깅졊濡?78踰덇만2-11", "032-836-8001"],
                            ["?쇱떆??諛깅졊?명뀛(援?J&B?명뀛)", "諛깅졊濡?85", "032-836-2229"],
                            ["?듬굹臾댄렂?쁀", "諛깅졊濡?61-29", "010-2123-0545"],
                            ["?몄쐢?ㅻえ??, "諛깅졊濡?64", "032-836-1100"],
                            ["?곕━?ㅻえ??, "諛깅졊濡?28", "010-6757-1660"],
                            ["?몃Ⅸ諛붾떎?쒖뀡", "?ш낭濡?9", "010-2759-0581"],
                            ["?꾨줈?ъ쫰紐⑦뀛", "諛깅졊濡?97踰덇만16", "032-836-5551"],
                            ["??뎄紐⑦뀛", "諛깅졊濡?4-1", "032-836-2945"],
                            ["?댁넚紐⑦뀛", "諛깅졊濡?49", "032-836-0465"],
                            ["?댁뼇?숇컯", "諛깅졊濡?2", "010-8936-0445"],
                            ["媛먯궗?쒕?諛?, "諛깅졊濡?16踰덇만25-9", "010-9771-1796"],
                            ["寃쎌씪誘쇰컯", "諛깅졊濡?78踰덉븞湲?5-9", "010-4500-9432"],
                            ["怨좏뼢?쒖뀡", "?먮Т吏꾨줈171-10", "010-5078-4557"],
                            ["?몃툝?쒖뀡誘쇰컯", "諛깅졊濡?68", "032-836-2000"],
                            ["?ㅼ씤誘쇰컯", "諛깅졊?⑤줈723踰덇만20", "010-6233-2996"],
                            ["濡쒖쫰留덈━誘쇰컯", "諛깅졊濡?03", "032-836-6612"],
                            ["臾댁?媛쒕튆?쒖뀡誘쇰컯", "?먮Т吏꾨줈171-18", "010-8203-8245"],
                            ["臾명솕?ㅽ뀒??, "諛깅졊濡?43", "010-6337-7001"],
                            ["誘쇰뱾?덈?諛?, "諛깅졊濡?30", "032-836-2219"],
                            ["諛깅졊寃뚯뒪?명븯?곗뒪", "諛깅졊濡?78", "010-6332-0363"],
                            ["諛깅졊?곌퐙誘쇰컯", "愿李쎄만399", "032-836-1510"],
                            ["諛깅졊肄섎룄鍮꾩튂誘쇰컯", "?ш낭濡?80-23", "010-9596-6706"],
                            ["諛깅졊?섎뒳?대??쒖뀡", "諛깅졊濡?54踰덇만212", "010-8996-3232"],
                            ["諛깊븰誘쇰컯(?붿옂?대꽕)", "?먮Т吏꾨줈498", "010-3359-1132"],
                            ["?ш퀎?덈?諛?, "諛깅졊濡?63-5", "010-3784-0836"],
                            ["?곌낵諛붾떎誘쇰컯", "?먮Т吏꾨줈498", "010-2668-2668"],
                            ["?щ?諛?, "諛깅졊濡?8踰덇만33", "010-3276-0236"],
                            ["?붽컻?쒖뀡誘쇰컯", "諛깅졊濡?71踰덇만56", "010-3664-8056"],
                            ["?섎젮?쒕?諛?, "諛깅졊濡?54踰덇만200", "010-8922-3994"],
                            ["?ㅽ??쒖뀡誘쇰컯", "諛깅졊濡?70", "032-836-8003"],
                            ["?꾨쫫?ㅼ슫?몄긽誘쇰컯", "媛?꾨━833-2", "010-9596-3232"],
                            ["?곸븫誘쇰컯", "諛깅졊濡?80踰덇만210", "010-6329-1779"],
                            ["?꾨쫫?쒕━誘쇰컯", "諛깅졊濡?78踰덇만38-13", "010-9596-3232"],
                            ["?곕━?ы렂?섎?諛?, "?뱁썑湲?5-16", "010-3499-1745"],
                            ["?곕━吏묓렂??, "?먮Т吏꾨줈171-22", "010-2511-0719"],
                            ["?댁빞湲곕?諛?, "?μ큿湲?", "010-2838-4656"],
                            ["?쒖씪誘쇰컯", "諛깅졊濡?48踰덇만134", "010-4573-7784"],
                            ["?ъ떆利뚰렂??, "諛깅졊濡?61-20", "010-2007-1841"],
                            ["?섎뒳諛붾떎誘쇰컯", "諛깅졊濡?54踰덇만153", "010-6320-0981"],
                            ["?섎뒳?⑺넗誘쇰컯", "諛깅졊濡?16踰덇만109-14", "010-6742-9952"],
                            ["?쒖콈?섏슦?ㅻ?諛?, "諛깅졊濡?111", "010-4751-0671"],
                            ["?대쑉?붾?諛?, "?ш낭濡?01", "010-4336-8063"],
                            ["?댁궗?묓렂??, "?먮Т吏꾨줈171-24", "010-3939-4959"],
                            ["?꾩씠?ㅻ?諛?, "?ш낭濡?22踰덇만54-12", "032-836-6091"],
                            ["?몄닔誘쇰컯", "?붾룞濡?38", "010-9183-2700"],
                            ["?⑺넗誘쇰컯", "?μ큿湲?17", "010-7336-1900"],
                            ["?곕궇媛쒗렂?섎?諛?, "諛깅졊濡?54踰덇만41", "010-7239-2126"],
                            ["?먮쭅誘쇰컯", "諛깅졊濡?73", "010-3459-1161"],
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
                                          ?벝 ?ъ쭊蹂닿린 ({stayPhotos[stay[0]].length}??
                                        </summary>
                                        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                          {stayPhotos[stay[0]].map((photo, photoIndex) => (
                                            <a
                                              key={photo}
                                              href={photo}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md"
                                              aria-label={`${stay[0]} ?ъ쭊 ${photoIndex + 1} ??李쎌뿉??蹂닿린`}
                                            >
                                              <Image
                                                src={photo}
                                                alt={`${stay[0]} ?ъ쭊 ${photoIndex + 1}`}
                                                width={420}
                                                height={280}
                                                className="h-40 w-full object-cover"
                                              />
                                              <div className="px-3 py-2 text-center text-xs font-bold text-sky-700">
                                                ?ъ쭊 {photoIndex + 1} ?ш쾶蹂닿린
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
                                    ?뱸 {stay[2]}
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
        className={selectedIsland === "諛깅졊?? ? "max-w-7xl mx-auto px-6 pb-10" : "hidden"}
      >

        {(selectedCategory === "?꾩껜" ||
          selectedCategory === "留쏆쭛") && (

            <>
              <div className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-amber-50 p-6 md:p-10 mb-6 border border-orange-100">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="font-bold text-orange-600">諛깅졊???뚯떇?뺣낫</p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                      ?뜙 ?뚯떇???쒕늿??蹂닿린
                    </h2>
                    <p className="mt-3 leading-7 text-gray-600">
                      ?뚯떇???대쫫怨???쒕찓?대? 寃?됲븯怨??꾪솕踰덊샇瑜??뚮윭 諛붾줈 臾몄쓽?????덉뼱??
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["?뜗 ?꾩묠?앹궗 臾몄쓽","?ⅰ ?ъ옣 媛???щ?","?뫅?랅윉⒱랅윉?媛議굿룸떒泥??앹궗","?맅 ?댁궛臾셋룻쉶","?뜙 媛꾨떒??????,"??移댄럹쨌?댁떇"].map((tip) => (
                        <span key={tip} className="rounded-full border border-orange-100 bg-white px-3 py-2 text-xs font-bold text-orange-700 shadow-sm">{tip}</span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs leading-5 text-gray-500">
                      ?뮕 ?곸뾽?쒓컙쨌?대Т쨌硫붾돱??怨꾩젅怨??낆냼 ?ъ젙???곕씪 ?щ씪吏????덉쑝??諛⑸Ц ???꾪솕 ?뺤씤??沅뚯옣?댁슂.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowFood(!showFood)}
                    className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-orange-600"
                  >
                    {showFood ? "?뚯떇???リ린 ?? : "?뚯떇???꾩껜蹂닿린 ??}
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
                          placeholder="?뵊 ?뚯떇?먮챸 쨌 ??쒕찓??쨌 ?꾪솕踰덊샇 寃??
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
                            寃??珥덇린??                          </button>
                        )}
                      </div>
                      <p className="mt-3 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                        ?뮕 ?곸뾽?쒓컙怨??대Т?쇱? ?щ씪吏????덉쑝??諛⑸Ц ???꾪솕 ?뺤씤??異붿쿇?⑸땲??
                      </p>
                    </div>

                    <table className="w-full text-left border-collapse">

                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-4 text-lg">?뚯떇?먮챸</th>
                          <th className="p-4 text-lg">??쒕찓??/th>
                          <th className="p-4 text-lg">?꾪솕踰덊샇</th>
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          ["bhc 移섑궓", "移섑궓", "032-836-0777"],
                          ["媛?꾨㈃??, "?됰㈃ 쨌 ?쒖떇", "010-2783-3384"],
                          ["媛뺤궛?잛쭛", "?잛쭛 쨌 ?댁궛臾?, "032-836-3322"],
                          ["媛뺤썝?잛쭛", "?잛쭛 쨌 ?댁궛臾?, "032-836-0779"],
                          ["怨꾨┝媛??, "?쒖떇", "032-836-0303"],
                          ["怨좉린癒밸뒗??釉붾옓", "怨좉린吏?, "032-836-5599"],
                          ["怨좊え??, "?쒖떇", "032-836-8277"],
                          ["怨좏뼢?앸떦", "?쒖떇", "032-836-4557"],
                          ["援ъ＜怨좉린泥쒓뎅", "怨좉린吏?, "032-836-0146"],
                          ["援?닔?섎씪 諛깅컲?몄긽", "諛깅컲 쨌 援?닔", "032-836-2945"],
                          ["瑗ш섕諛?, "??컻", "010-2854-1828"],
                          ["?ㅻ꽕移섑궓", "移섑궓", "032-836-2200"],
                          ["?몃옉?듬떗", "移섑궓", "010-4085-0802"],
                          ["?섎큵?댁옣援?, "?댁옣援?, "032-836-1355"],
                          ["?諛뺣쭧吏?, "?쒖떇", "032-836-2266"],
                          ["??깃???, "?쒖떇", "032-836-9233"],
                          ["??깆닔?고슏吏?, "?잛쭛 쨌 ?댁궛臾?, "032-836-1539"],
                          ["??깊슏吏?, "?잛쭛 쨌 ?댁궛臾?, "032-836-0363"],
                          ["??떞", "??갈", "032-836-0333"],
                          ["?덇??쒕?", "?쒕?援?쨌 ?덇퉴??, "010-9629-0704"],
                          ["?덊궎?명뀒", "?묒떇留쏆쭛", "032-836-8292"],
                          ["?먮찓移쇨뎅??, "移쇨뎅??, "032-836-0245"],
                          ["?먮Т?섎（移댄럹", "移댄럹", "032-836-0765"],
                          ["?먮Т吏꾪슏吏?, "?잛쭛 쨌 ?댁궛臾?, "032-836-1505"],
                          ["?먯꽑?ㅽ븳??, "諛깅컲", "032-836-8118"],
                          ["?먯컻", "李쒕떗", "032-836-3389"],
                          ["?섎━?명봽", "?명봽", "032-836-3993"],
                          ["???ㅺ린?앸떦", "?쒖떇", "010-9934-2482"],
                          ["?먮옒?ㅻ옒移섑궓?쇱옄", "移섑궓 쨌 ?쇱옄", "032-836-9995"],
                          ["?먮큺?댄넻??, "移섑궓", "010-9629-0704"],
                          ["?깆씠?ㅻ쭧吏?, "?쒖떇 쨌 ?댁궛臾?, "032-836-9393"],
                          ["留덈씪&怨ㅼ“", "留덈씪??, "032-836-0161"],
                          ["留덉솗議깅컻", "議깅컻", "032-836-1005"],
                          ["留쏆엳?붿쭛諛?, "諛깅컲", "032-836-0440"],
                          ["誘명솕??, "?쒖떇", "032-836-3999"],
                          ["諛붾떎?잛쭛", "?잛쭛 쨌 ?댁궛臾?, "032-836-2430"],
                          ["諛곌섹?쒓퀎", "遺꾩떇", "032-836-0100"],
                          ["諛곗옣吏?, "?쒖떇", "010-9177-1516"],
                          ["諛깅졊??踰좎씠而ㅻ━)", "踰좎씠而ㅻ━", "032-836-6969"],
                          ["諛깅졊?꾩꽌?쒓컝鍮?, "媛덈퉬", "032-207-1234"],
                          ["諛깅졊?숉빐?섏궛", "?잛쭛 쨌 ?댁궛臾?, "010-3726-6437"],
                          ["諛깅졊硫댁삦", "?됰㈃ 쨌 ?쒖떇", "032-836-5557"],
                          ["諛깅졊遺꾩떇", "遺꾩떇", "032-836-1395"],
                          ["諛깅졊?됱슫?쒕?", "?쒕?援?, "032-836-1834"],
                          ["諛깅졊?잛쭛", "?잛쭛 쨌 ?댁궛臾?, "032-836-2966"],
                          ["諛깆닕??, "諛깆닕", "032-836-8011"],
                          ["踰꾧굅?대쾭嫄?, "?꾨쾭嫄?, "010-7742-0548"],
                          ["蹂듭씠??, "?쒖떇", "032-836-8481"],
                          ["蹂멸?媛먯옄??, "媛먯옄??, "010-5619-2219"],
                          ["蹂몄뒪移섑궓", "移섑궓", "0140-8788-0548"],
                          ["遺곹룷援?닔", "援?닔", "010-4018-5421"],
                          ["釉뚮씪?뷀븳?뺤떇?꾩떆??, "?꾩떆??쨌 ?쒖젙??, "010-5893-0550"],
                          ["鍮꾨퉬??, "移섑궓", "010-5619-2219"],
                          ["鍮④컙?앹뇿援ъ씠", "怨좉린吏?, "032-836-1796"],
                          ["鍮쎈컯?대꽕", "?쒖떇", "010-7370-9910"],
                          ["戮?꾨떗", "移섑궓", "010-2636-2441"],
                          ["?ш낭?됰㈃", "?됰㈃", "032-836-0559"],
                          ["?ш낭?쇰쾲吏移쇨뎅??, "移쇨뎅??, "032-836-3286"],
                          ["?щ옉梨?, "?쒖떇", "032-836-8859"],
                          ["?ъ옄諛붿쐞罹좏봽", "罹좏봽 쨌 諛붾쿋??, "010-5088-3689"],
                          ["?쇨굅由ъ튂??怨좉린吏?, "移섑궓 쨌 怨좉린", "032-836-5017"],
                          ["?쇱궪援ъ씠", "怨좉린吏?, "032-836-3392"],
                          ["?щ쭏?꾩떇??, "?쒖떇", "032-836-6601"],
                          ["?ㅼ뭅?댄샇??, "?명봽", "032-836-6091"],
                          ["?쒓낏移쇨뎅???됰㈃", "移쇨뎅??쨌 ?됰㈃", "032-836-1270"],
                          ["?좉꼍湲고슏吏?, "?잛쭛 쨌 ?댁궛臾?, "032-836-1156"],
                          ["?좏솕?됱뼇?됰㈃", "?됱뼇?됰㈃", "032-836-0372"],
                          ["??諛고꽣吏?붿깮?숆퉴??, "?덇퉴??, "010-4460-4492"],
                          ["?꾧뎄?肄⑸굹臾?, "?꾧뎄李?, "032-836-8700"],
                          ["?꾨옉?대꽕?잛쭛", "?잛쭛 쨌 ?댁궛臾?, "032-836-7888"],
                          ["?꾩씪?쒕뱶?앸떦", "?쒖떇", "032-836-6700"],
                          ["?뚰넻?↔컯???〓낭??, "遺꾩떇", "032-836-1002"],
                          ["?뱀쭊媛??, "?쒖떇", "032-836-8001"],
                          ["?곗닔誘몃굹?ъ쭊愿&移댄럹&諛?, "移댄럹 쨌 諛?, "0507-2093-7809"],
                          ["?붽?", "?쒖떇", "032-836-8060"],
                          ["?댄솕??, "以묒떇", "032-836-8150"],
                          ["?몄쿇?잛쭛", "?잛쭛 쨌 ?댁궛臾?, "032-836-3300"],
                          ["?쇳뭹?묓룊?댁옣援?, "?댁옣援?, "032-836-9252"],
                          ["?먮떞移섑궓", "移섑궓", "032-836-9009"],
                          ["?먯뿰留덉쓣", "?쒖떇", "010-6360-0136"],
                          ["?묒??됰났", "?쒖떇", "032-836-7007"],
                          ["?붾뵒?앸떦", "?쒖떇", "032-836-6091"],
                          ["?λ??앸떦", "?쒖떇", "032-836-0339"],
                          ["?μ궛怨띤슏吏?, "?잛쭛 쨌 ?댁궛臾?, "032-836-1132"],
                          ["?μ큿?앸떦", "?쒖떇", "032-836-0961"],
                          ["?μ큿移쇨뎅??, "移쇨뎅??, "032-836-7009"],
                          ["?꾨났二쎌엳??泥좏뙋吏?, "泥좏뙋?붾━", "032-836-2402"],
                          ["以묒븰媛??, "?쒖떇", "032-836-7575"],
                          ["以묓솕猷?, "以묒떇", "032-836-5300"],
                          ["吏꾩큿?쇱?", "?쇱?怨좉린", "032-836-6234"],
                          ["吏꾩큿??, "?좎쭛", "010-2713-0027"],
                          ["李몃쭧?덈뒗援?갈", "援?갈", "010-6757-1660"],
                          ["泥섍컭吏묒뼇?먯튂??, "移섑궓", "010-3905-9955"],
                          ["泥?뀈?쇱옄", "?쇱옄", "032-836-8880"],
                          ["泥?ぉ??텋媛덈퉬", "媛덈퉬", "032-836-5454"],
                          ["泥?젙?잛쭛", "?잛쭛 쨌 ?댁궛臾?, "032-836-8200"],
                          ["泥?텣瑗щ쭏源諛?, "遺꾩떇", "032-836-1537"],
                          ["泥?텣?멸?吏", "?좎쭛", "010-2911-6092"],
                          ["泥?뭾媛먯옄??, "媛먯옄??, "032-836-5455"],
                          ["異⑸턿?잛쭛", "?잛쭛 쨌 ?댁궛臾?, "032-836-1124"],
                          ["移섑궓留ㅻ땲??, "移섑궓", "010-7154-6375"],
                          ["移댄럹釉붾（", "移댄럹", "010-2480-0580"],
                          ["移댄럹?ㅼ븘", "移댄럹", "010-5577-7414"],
                          ["肄⑷퉵吏", "?먮??붾━", "032-836-6200"],
                          ["?ㅼ뒪", "?명봽", "032-836-7740"],
                          ["?듬떖諛곗”諛쒕낫?덉궪寃?, "議깅컻 쨌 蹂댁뙂", "032-836-0420"],
                          ["?鍮꾩뼱??, "?명봽", "032-836-2481"],
                          ["?몃Ⅸ諛붾떎李???, "?대Ъ李?쨌 ??, "032-836-0788"],
                          ["?좊ℓ媛먯옄??, "媛먯옄??, "032-836-8898"],
                          ["?대???ъ쐞?잛쭛", "?잛쭛 쨌 ?댁궛臾?, "032-836-5529"],
                          ["?대떦?뷀슏吏?, "?잛쭛 쨌 ?댁궛臾?, "032-836-3300"],
                          ["?대Ъ?섎씪", "?댁궛臾?, "032-836-2599"],
                          ["?댁넚媛??, "?쒖떇", "032-836-0465"],
                          ["?뺤???留뚮몢", "留뚮몢", "032-836-0427"],
                          ["?몃궓?잛쭛", "?잛쭛 쨌 ?댁궛臾?, "010-9290-2212"],
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
    "諛깅졊硫댁삦",
    "媛?꾨㈃??,
    "?ш낭?됰㈃",
    "?쒓낏移쇨뎅???됰㈃",
    "?좏솕?됱뼇?됰㈃",
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
                                      aria-label={`${food[0]} ?ъ쭊 ??李쎌뿉??蹂닿린`}
                                    >
                                      ?벝 ?ъ쭊蹂닿린
                                    </a>
                                  )}

                                  {food[0] === "?깆씠?ㅻ쭧吏? && (
                                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                      狩??꾩???異붿쿇
                                    </span>
                                  )}
                                  {food[0] === "諛깅졊硫댁삦" && (
                                    <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                                      ?꾬툘 ?됰㈃ 留쏆쭛
                                    </span>
                                  )}
                                  {food[0] === "?먯뿰留덉쓣" && (
                                    <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                                      ?쪖 踰좎씠而ㅻ━ 留쏆쭛
                                    </span>
                                  )}
                                  {food[0] === "?꾨났二쎌엳??泥좏뙋吏? && (
                                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                                      ?첉 援곗씤 異붿쿇 留쏆쭛
                                    </span>
                                  )}
                                  {food[0] === "吏꾩큿?쇱?" && (
                                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                                      ?첉 援곗씤 異붿쿇 留쏆쭛
                                    </span>
                                  )}
                                  {food[0] === "?먯꽑?ㅽ븳?? && (
                                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                      狩??꾩???留쏆쭛
                                    </span>
                                  )}
                                  {food[0] === "?대???ъ쐞?잛쭛" && (
                                    <>
                                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                        ?뙄 ?댁궛臾?留쏆쭛
                                      </span>
                                    </>
                                  )}
                                </div>
                              </td>

                              <td className="p-4">
                                {food[1]}
                              </td>

                              <td className="p-4">

                                {food[2] !== "?뺣낫?놁쓬" ? (

                                  <div className="flex flex-col gap-2">

                                    <a
                                      href={`tel:${food[2]}`}
                                      className="text-blue-600 hover:underline"
                                    >
                                      ?뱸 {food[2]}
                                    </a>

                                    <a
                                      href={`https://map.naver.com/v5/search/${food[0]}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-green-600 hover:underline"
                                    >
                                      ?뱧 吏?꾨낫湲?                                    </a>

                                  </div>

                                ) : (

                                  <span className="text-gray-400">
                                    ?뺣낫?놁쓬
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
        className={selectedIsland === "諛깅졊?? ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-10" : "hidden"}
      >
        {(selectedCategory === "?꾩껜" ||
          selectedCategory === "媛쒖씤?앹떆") && (
          <div className="rounded-[2rem] bg-gradient-to-br from-yellow-50 to-amber-50 p-6 md:p-10 border border-yellow-100">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-bold text-amber-600">諛깅졊???대룞?뺣낫</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                  ?슃 媛쒖씤?앹떆 ?쒕늿??蹂닿린
                </h2>
                <p className="mt-3 leading-7 text-gray-600">
                  諛깅졊??媛쒖씤?앹떆 ?곕씫泥섎? ?뺤씤?섍퀬 ?꾪솕踰덊샇瑜??뚮윭 諛붾줈 臾몄쓽?????덉뼱??
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowTaxi(!showTaxi)}
                className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-500"
              >
                {showTaxi ? "媛쒖씤?앹떆 ?リ린 ?? : "媛쒖씤?앹떆 ?꾩껜蹂닿린 ??}
              </button>
            </div>

            {showTaxi && (
              <div className="mt-8 rounded-3xl bg-white p-5 md:p-7 shadow-lg">
                <div className="rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                  ?뮕 諛??꾩갑 ?쒓컙?대굹 愿愿??쇱젙??留욎떠 ?댁슜?섎젮硫?誘몃━ ?꾪솕濡??댄뻾 媛???щ?瑜??뺤씤??二쇱꽭??
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    ["湲명깮??, "032-836-7080"],
                    ["源?명깮??, "032-836-4888"],
                    ["?좎썝?앹떆", "032-836-3883"],
                    ["?곸븫?앹떆", "032-836-0016"],
                    ["?쇨컩?앹떆", "032-836-0155"],
                    ["異⑹뿴?앹떆", "032-836-1302"],
                    ["?⑷툑?앹떆", "032-836-0065"],
                  ]
                    .sort((a, b) => a[0].localeCompare(b[0], "ko"))
                    .map((taxi, index) => (
                      <div
                        key={`${taxi[0]}-${index}`}
                        className="rounded-2xl border border-gray-200 p-5 transition hover:border-amber-300 hover:shadow-md"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 text-xl">
                            ?슃
                          </div>
                          <div>
                            <p className="font-extrabold text-gray-900">{taxi[0]}</p>
                            <p className="mt-1 text-sm text-gray-500">媛쒖씤?앹떆</p>
                          </div>
                        </div>

                        <a
                          href={`tel:${taxi[1]}`}
                          className="mt-5 flex w-full items-center justify-center rounded-2xl bg-amber-500 px-4 py-3 font-extrabold text-white transition hover:bg-amber-600"
                        >
                          ?뱸 {taxi[1]} ?꾪솕?섍린
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
        className={selectedIsland === "諛깅졊?? ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-10" : "hidden"}
      >
        <div className="rounded-[2rem] bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-10 border border-blue-100">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-bold text-blue-600">諛깅졊???대룞?뺣낫</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                ?슅 ?뚰꽣移??쒕늿??蹂닿린
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                諛깅졊???뚰꽣移??낆껜 ?곕씫泥섎? ?뺤씤?섍퀬 ?꾪솕踰덊샇瑜??뚮윭 諛붾줈 ?덉빟 臾몄쓽?????덉뼱??
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowRentcar(!showRentcar)}
              className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              {showRentcar ? "?뚰꽣移??リ린 ?? : "?뚰꽣移??꾩껜蹂닿린 ??}
            </button>
          </div>

          {showRentcar && (
            <div className="mt-8 rounded-3xl bg-white p-5 md:p-7 shadow-lg">
              <div className="rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                ?뮕 ?깆닔湲곗뿉??李⑤웾??鍮⑤━ 留덇컧?????덉뼱?? 李⑤웾 醫낅쪟쨌?붽툑쨌?몄닔 ?μ냼???덉빟 ?꾩뿉 ?낆껜??吏곸젒 ?뺤씤??二쇱꽭??
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["寃쎌씤?뚰꽣移?, "032-836-8400"],
                  ["?섎굹?뚰꽣移?, "032-836-6699"],
                  ["?덉씤泥쒕젋?곗뭅", "032-836-8118"],
                  ["李⑤??먮젋?곗뭅", "010-3374-9306"],
                  ["?좏븳?뚰꽣移?, "032-836-1510"],
                  ["珥덉씠?ㅻ젋?곗뭅", "032-836-0057"],
                  ["?쒖넄?뚰꽣移?, "032-836-0102"],
                  ["?댄뵾?뚰꽣移?, "032-836-7400"],
                ]
                  .sort((a, b) => a[0].localeCompare(b[0], "ko"))
                  .map((car, index) => (
                    <div
                      key={`${car[0]}-${index}`}
                      className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-xl">
                          ?슅
                        </div>
                        <div>
                          <p className="font-extrabold text-gray-900">{car[0]}</p>
                          <p className="mt-1 text-sm text-gray-500">?뚰꽣移??덉빟 臾몄쓽</p>
                        </div>
                      </div>

                      <a
                        href={`tel:${car[1]}`}
                        className="mt-5 flex w-full items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 font-extrabold text-white transition hover:bg-blue-700"
                      >
                        ?뱸 {car[1]} ?꾪솕?섍린
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
        className={selectedIsland === "諛깅졊?? ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-20" : "hidden"}
      >
        {(selectedCategory === "?꾩껜" ||
          selectedCategory === "?뱀궛臾?) && (
          <div className="rounded-[2rem] bg-gradient-to-br from-rose-50 to-orange-50 p-6 md:p-10 border border-rose-100">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-bold text-rose-600">諛깅졊??癒밴굅由?룹꽑臾?/p>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                  ?럞 諛깅졊???뱀궛臾??쒕늿??蹂닿린
                </h2>
                <p className="mt-3 leading-7 text-gray-600">
                  諛깅졊?꾩뿉??留롮씠 李얜뒗 ?띿닔?곕Ъ怨?吏???뱀궛臾쇱쓣 ?ы뻾 ?꾩뿉 ?뺤씤??蹂댁꽭??
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowLocal(!showLocal)}
                className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-rose-600"
              >
                {showLocal ? "?뱀궛臾??リ린 ?? : "?뱀궛臾??꾩껜蹂닿린 ??}
              </button>
            </div>

            {showLocal && (
              <div className="mt-8">
                <div className="rounded-2xl bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm">
                  ?뮕 ?띿닔?곕Ъ? 怨꾩젅怨?議곗뾽쨌?섑솗 ?곹솴???곕씪 ?먮ℓ ?щ?媛 ?щ씪吏????덉뒿?덈떎.
                  援щℓ ???먮ℓ泥섏뿉 ?ш퀬? ?먮ℓ ?쒓린瑜??뺤씤??二쇱꽭??
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { name: "諛깅졊???쎌뫁", image: "/images/specialties/mugwort.png", description: "諛깅졊?꾩뿉???먮씪???κ툔???쎌뫁?쇰줈 ?ㅼ뼇??吏???곹뭹???쒖슜?⑸땲??" },
                    { name: "源뚮굹由ъ븸??, image: "/images/specialties/fish-sauce.png", description: "諛깅졊?꾨? ??쒗븯???섏궛 媛怨듯뭹 以??섎굹濡?源移섏? 媛곸쥌 ?붾━???쒖슜?⑸땲??" },
                    { name: "諛깃퀬援щ쭏", image: "/images/specialties/sweet-potato.png", description: "?대갚??留쏄낵 ?ъ뒳???앷컧???뱀쭠??諛깅졊?꾩쓽 ????띿궛臾쇱엯?덈떎." },
                    { name: "?뚮???, image: "/images/specialties/sea-mustard.png", description: "諛깅졊??諛붾떎?먯꽌 ?섎뒗 誘몄뿭?쇰줈 援?낵 ?ㅼ뼇???댁“瑜??붾━???쒖슜?⑸땲??" },
                    { name: "?ㅼ떆留?, image: "/images/specialties/kelp.png", description: "諛깅졊???댁뿭?먯꽌 ?앹궛?섎뒗 ?댁“瑜섎줈 ?≪닔? ?붾━???쒖슜?섍린 醫뗭뒿?덈떎." },
                    { name: "諛깅졊?꾩?", image: "/images/specialties/rice.png", description: "?ъ뿉???щ같?섎뒗 諛깅졊???띿궛臾쇰줈 吏??癒밴굅由щ줈 留뚮굹蹂????덉뒿?덈떎." },
                    { name: "嫄댄솉?㈑룸깋?숉솉??, image: "/images/specialties/mussels.png", description: "諛깅졊??諛붾떎???랁빀??嫄댁“?섍굅???됰룞???섏궛臾쇱엯?덈떎." },
                    { name: "諛깅졊??援?, image: "/images/specialties/oysters.png", description: "?쒖쿋??留뚮궇 ???덈뒗 諛깅졊?꾩쓽 ?좎꽑???섏궛臾쇱엯?덈떎." },
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
                    <h3 className="text-xl font-extrabold">?뱀궛臾?援щℓ ??泥댄겕</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      ?앸Ъ쨌?됰룞 ?쒗뭹? ?ы뻾 ?쇱젙怨??좊컯 ?대룞?쒓컙??怨좊젮???ъ옣 諛⑸쾿???④퍡 ?뺤씤?섏꽭??
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* PUBLIC BUS SECTION */}
      <section id="bus" className={selectedIsland === "諛깅졊?? ? "scroll-mt-24 max-w-7xl mx-auto px-6 pb-10" : "hidden"}>
        <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50 p-6 md:p-8">
          <button
            type="button"
            onClick={() => setShowBus(!showBus)}
            className="w-full rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 p-6 text-left text-white shadow-lg transition hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-blue-100">諛깅졊??援먰넻?뺣낫</p>
                <h2 className="mt-1 text-2xl font-extrabold md:text-3xl">?쉶 諛깅졊??怨듭쁺踰꾩뒪 ?쒓컙??/h2>
                <p className="mt-2 text-sm leading-6 text-blue-50">遺곹룷由?룻솕??諛⑺뼢 ?쒓컙?쒕? ?곕줈 ?ш쾶 ?뺤씤?????덉뼱??</p>
              </div>
              <span className="text-3xl">{showBus ? "?? : "??}</span>
            </div>
          </button>

          {showBus && (
            <div className="mt-6">
              <div className="rounded-2xl bg-white p-4 text-sm leading-6 text-blue-900">
                ?뮕 ?댄뻾 ?쒓컙? 蹂寃쎈맆 ???덉쑝???ㅼ젣 ?댁슜 ??理쒖떊 ?쒓컙?쒖씤吏 ?ㅼ떆 ?뺤씤??二쇱꽭??
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <a href="/images/bus1.jpg" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-2 border-white bg-white p-5 transition hover:border-blue-300 hover:shadow-md">
                  <div className="text-3xl">?쉶</div>
                  <h3 className="mt-3 text-lg font-extrabold text-gray-900">遺곹룷由?諛⑺뼢</h3>
                  <p className="mt-2 text-sm text-gray-500">?쒓컙???ш쾶 蹂닿린 ??/p>
                </a>
                <a href="/images/bus2.jpg" target="_blank" rel="noopener noreferrer" className="rounded-2xl border-2 border-white bg-white p-5 transition hover:border-sky-300 hover:shadow-md">
                  <div className="text-3xl">?쉶</div>
                  <h3 className="mt-3 text-lg font-extrabold text-gray-900">?붾룞 諛⑺뼢</h3>
                  <p className="mt-2 text-sm text-gray-500">?쒓컙???ш쾶 蹂닿린 ??/p>
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
      <h2 className="text-2xl font-black text-gray-900">諛깅졊???꾩? ?ы뻾 媛?대뱶</h2>
      <p className="mt-2 text-sm text-gray-500">?꾩슂????ぉ留??뚮윭???쇱퀜蹂댁꽭??</p>
    </div>
    <div className="divide-y divide-gray-100">
      <details id="fishing-info" className="group scroll-mt-24">
        <summary className="cursor-pointer list-none px-6 sm:px-8 py-5 flex items-center justify-between gap-4 font-extrabold hover:bg-gray-50">
          <span>?렍 諛깅졊???싳떆 ?ъ씤??/span><span className="text-gray-400 group-open:rotate-180 transition">??/span>
        </summary>
        <div className="bg-gray-50/50 pt-6"><section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">


        <h2 className="text-4xl font-bold text-center mb-12">
          ?렍 諛깅졊???싳떆 ?ъ씤??        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-3">
              ?렍 ?먮Т吏?            </h3>

            <p className="text-gray-600">
              ?곕윮 쨌 愿묒뼱 ?ъ씤?몃줈 ?좊챸??諛깅졊??????싳떆 紐낆냼
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-3">
              ?뙄 ?⑷린?ъ떊??            </h3>

            <p className="text-gray-600">
              諛ㅻ굾?쒖? 諛⑺뙆???싳떆濡??멸린 ?덈뒗 ?μ냼
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-3">
              ?렍 以묓솕?숉룷援?            </h3>

            <p className="text-gray-600">
              諛⑺뙆???싳떆? ?앺솢?싳떆濡??멸린 ?덈뒗 諛깅졊???ъ씤??            </p>
          </div>

        </div>

      </section>
      </div>
      </details>
      <details className="group">
        <summary className="cursor-pointer list-none px-6 sm:px-8 py-5 flex items-center justify-between gap-4 font-extrabold hover:bg-gray-50">
          <span>?똿 諛깅졊???쇰ぐ 쨌 ?쇱텧 紐낆냼</span><span className="text-gray-400 group-open:rotate-180 transition">??/span>
        </summary>
        <div className="bg-gray-50/50 pt-6"><section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          ?똿 諛깅졊???쇰ぐ 쨌 ?쇱텧 紐낆냼
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              ?똿 ?쇰ぐ 異붿쿇
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>?뙄 ?ш낭?대?</li>
              <li>?え ?먮Т吏?/li>
              <li>?슓 ?⑷린?ы빆</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              ?똾 ?쇱텧 異붿쿇
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>?룚截??섎뒳?대?</li>
              <li>?렍 以묓솕?숉룷援?/li>
            </ul>
          </div>

        </div>

      </section>

      </div>
      </details>
      <details className="group">
        <summary className="cursor-pointer list-none px-6 sm:px-8 py-5 flex items-center justify-between gap-4 font-extrabold hover:bg-gray-50">
          <span>?㎛ 諛깅졊??泥섏쓬?대씪硫?</span><span className="text-gray-400 group-open:rotate-180 transition">??/span>
        </summary>
        <div className="bg-gray-50/50 pt-6"><section className="bg-gray-100 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            諛깅졊??泥섏쓬?대씪硫?
          </h2>

          <div className="flex flex-col items-center">

            {/* LEFT */}
            <div>

              <h2 className="text-4xl font-bold text-center mb-12">
                ??諛깅졊???먯＜ 臾삳뒗 吏덈Ц
              </h2>

              <div className="space-y-6 max-w-3xl mx-auto">

<div className="bg-white rounded-3xl shadow-lg p-8 text-center">
  <h3 className="text-2xl font-bold mb-3">
    ?슅 諛깅졊??李⑤웾?좎쟻 ?덈궡
  </h3>

  <p className="text-gray-600 leading-relaxed">
    諛깅졊?꾩뿉?쒕뒗 ?꾩? ?뚰꽣移대? ?댁슜?섎㈃ ?쇱젙 議곗젙???몃━?⑸땲??
    李⑤웾??媛?멸컝 怨꾪쉷?대씪硫??좎쟻 媛???щ?? ?댄빆 ?쇱젙, ?묒닔 ?쒓컙, ?붽툑 ?깆쓣 誘몃━ ?뺤씤?섏꽭??
    李⑤웾 ?좎쟻 愿???ы빆? 誘몃옒?댁슫??臾몄쓽???뺤씤?????덉뒿?덈떎.
  </p>

  <a href="tel:032-881-6666" className="inline-flex items-center justify-center mt-5 px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold shadow-md transition hover:bg-blue-700">
    ??誘몃옒?댁슫 032-881-6666
  </a>

  <p className="mt-4 text-sm text-gray-500 leading-relaxed">
    ???댄빆 ?쇱젙怨?李⑤웾 ?좎쟻 議곌굔? 湲곗긽쨌?좊컯 ?댄빆 ?곹솴 ?깆뿉 ?곕씪 ?щ씪吏????덉쑝誘濡?異쒕컻 ??諛섎뱶??理쒖떊 ?뺣낫瑜??뺤씤?섏꽭??
  </p>
</div>

<div className="bg-white rounded-3xl shadow-lg p-8 text-center">
  <h3 className="text-2xl font-bold mb-3">
    ?첉 援곗씤 硫댄쉶???먯쑀濡?쾶 媛?ν븳媛??
  </h3>

  <p className="text-gray-600 leading-relaxed">
    遺? ?쇱젙怨??몄텧쨌?몃컯 媛???щ????곕씪 ?щ씪吏????덉쑝誘濡?蹂듬Т ?λ퀝?먭쾶 誘몃━ ?뺤씤??二쇱꽭??
    諛고렪怨?蹂듦? ?쒓컙??怨좊젮??硫댄쉶 ?쇱젙??異⑸텇???ъ쑀 ?덇쾶 議곗쑉?섎뒗 寃껋씠 醫뗭뒿?덈떎.
  </p>
</div>

<div className="bg-white rounded-3xl shadow-lg p-8 text-center">
  <h3 className="text-2xl font-bold mb-3">
    ?룵 ?몄쓽?먯씠??留덊듃媛 ?덈굹??
  </h3>

  <p className="text-gray-600 leading-relaxed">
    ?꾨옒 ?앺솢?뺣낫?먯꽌 ?몄쓽?먭낵 留덊듃 ?뺣낫瑜??뺤씤??二쇱꽭??
  </p>
</div>

<div className="bg-white rounded-3xl shadow-lg p-8 text-center">
  <h3 className="text-2xl font-bold mb-3">
    ?꾬툘 寃⑥슱?먮룄 ?ы뻾 媛?ν븳媛??
  </h3>

  <p className="text-gray-600 leading-relaxed">
    媛?ν빀?덈떎. ?ㅻ쭔 湲곗긽 ?곹솴???곕씪 ?ш컼??寃고빆 媛?μ꽦???덉쑝???댄빆?뺣낫 ?뺤씤??以묒슂?⑸땲??
  </p>
</div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="space-y-6">

       {/* ?쒕늿?먮낫湲?*/}
<div className="bg-white rounded-3xl p-4 shadow">

<h3 className="text-2xl font-bold mb-3 text-center">
  ?뱤 諛깅졊???쒕늿??蹂닿린
</h3>
<p className="text-center text-gray-600 mb-4">
  諛깅졊??二쇱슂 愿愿묒?? ?꾩튂瑜??쒕늿???뺤씤??蹂댁꽭??
</p>
</div>
            <div className="grid grid-cols-2 gap-2">

              <div className="bg-gray-100 rounded-2xl p-2 text-center">
                <p className="text-2xl font-bold">??4?쒓컙</p>
                <p className="text-gray-600 text-xs mt-1">
                  ?몄쿇 ??諛깅졊??                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-2 text-center">
                <p className="text-2xl font-bold">3媛?/p>
                <p className="text-gray-600 text-xs mt-1">
                  二쇱슂 愿愿???                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-2 text-center">
                <p className="text-2xl font-bold">20+</p>
                <p className="text-gray-600 text-xs mt-1">
                  愿愿묐챸??                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-2 text-center">
                <p className="text-2xl font-bold">?┃</p>
                <p className="text-gray-600 text-xs mt-1">
                  ?먮컯?대Ъ踰?                </p>
              </div>

            </div>

          </div>

          {/* 硫誘?+ 李⑤웾?좎쟻 */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h3 className="text-2xl font-bold mb-5">
                ?뭻 硫誘?以꾩씠??諛⑸쾿
              </h3>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>??硫誘몄빟? ?쒗뭹 蹂듭슜踰??먮뒗 ?쎌궗 ?덈궡???곕씪 誘몃━ 以鍮꾪븯湲?/li>
                <li>??以묒븰 醫뚯꽍 異붿쿇</li>
                <li>??鍮덉냽 ?묒듅 ?쇳븯湲?/li>
                <li>???대??걔룸룆?쒕뒗 以꾩씠怨??몄븞???먯꽭濡??ш린</li>
              </ul>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h3 className="text-2xl font-bold mb-5">
                ?슅 李⑤웾?좎쟻 ??              </h3>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>??李⑤웾?좎쟻 媛???щ?쨌?덉빟 諛⑸쾿???댁넚?ъ뿉 ?ъ쟾 ?뺤씤</li>
                <li>???좎쟻 李⑤웾? ?댁넚???덈궡 ?쒓컙蹂대떎 ?ъ쑀 ?덇쾶 ?꾩갑?섍린</li>
                <li>???좊텇利??꾩닔</li>
                <li>??寃고빆 ?щ? ?뺤씤</li>
              </ul>

            </div>

          </div>

          {/* 2??移대뱶 */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* 踰꾩뒪 + 援곗씤硫댄쉶 + 媛議?*/}
            <div className="space-y-6">

              {/* 媛議깆뿬??*/}
              <div className="bg-white rounded-3xl p-8 shadow">

                <h3 className="text-2xl font-bold mb-4">
                  ?뫅?랅윉⒱랅윉??꾩씠??媛湲?愿쒖갖?섏슂?
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  ?곷퉬?쎄낵 ?꾩씠?⑺뭹? ?ъ뿉 ?ㅼ뼱?ㅺ린 ?꾩뿉 誘몃━ 以鍮꾪븯??寃껋쓣 異붿쿇?⑸땲??
                </p>
              </div>
            </div>
          </div>

        {/* ?앺솢?뺣낫 */}
        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
              ?뱸
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-gray-900">
              諛깅졊???앺솢?뺣낫
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              ?몄쓽??쨌 留덊듃 ???ы뻾 以??꾩슂???앺솢?뺣낫瑜??ш쾶 ?뺤씤?????덉뼱??
            </p>
            <a
              href="/images/lifeinfo.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-2xl bg-emerald-600 py-4 font-extrabold text-white transition hover:bg-emerald-700"
            >
              ?뱥 ?앺솢?뺣낫 ?ш쾶 蹂닿린
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
              ?룫
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-gray-900">
              愿怨듭꽌 諛??⑥껜
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              諛깅졊?꾩뿉???꾩슂??愿怨듭꽌? 二쇱슂 ?⑥껜 ?곕씫泥섎? ?뺤씤?섏꽭??
            </p>
            <a
              href="/images/contact.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-2xl bg-blue-600 py-4 font-extrabold text-white transition hover:bg-blue-700"
            >
              ?뱸 ?곕씫泥??ш쾶 蹂닿린
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
              ?㎛
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-gray-900">
              ?ы뻾?뺣낫
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              諛깅졊???ы뻾???꾩슂???덈궡 ?뺣낫瑜??대?吏濡??ш쾶 ?뺤씤?????덉뼱??
            </p>
            <a
              href="/images/travelinfo.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-2xl bg-violet-600 py-4 font-extrabold text-white transition hover:bg-violet-700"
            >
              ?㎛ ?ы뻾?뺣낫 ?ш쾶 蹂닿린
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
            <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">?뿎截?諛깅졊?? ?몄젣 媛硫?媛??醫뗭쓣源뚯슂?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              怨꾩젅 移대뱶瑜??뚮윭 諛깅졊?꾩쓽 怨꾩젅 ?띻꼍??留뚮굹蹂댁꽭??
            </p>
          </div>

          {(() => {
            const seasons = [
              {
                season:"遊?, english:"SPRING", icon:"?뙵", months:"3??쨌 4??쨌 5??,
                title:"嫄룰린 醫뗭? ???ы뻾", desc:"?좎꽑??諛붾떣諛붾엺怨??④퍡 ?댁븞 ?곗콉怨?愿愿묒?瑜?泥쒖쿇???섎윭蹂닿린 醫뗭? 怨꾩젅",
                tip:"?뉗? 寃됱샆 以鍮?, bg:"from-pink-50 to-rose-100",
                image:"/images/seasons/spring.jpg", photoTitle:"遊?쨌 苑껉낵 諛붾떣諛붾엺??留뚮굹??諛깅졊??,
                photoDesc:"遊꾩쓽 諛깅졊?꾨뒗 ?댁븞 ?곗콉怨????띻꼍???ъ쑀濡?쾶 利먭린湲?醫뗭? ?쒓린?덉슂."
              },
              {
                season:"?щ쫫", english:"SUMMER", icon:"?뙄", months:"6??쨌 7??쨌 8??,
                title:"諛붾떎瑜??쒕?濡?利먭린????, desc:"?ш낭?대?怨??댁븞 ?띻꼍, ?싳떆 ??諛깅졊?꾩쓽 ?щ쫫 諛붾떎瑜?利먭린湲?醫뗭? 怨꾩젅",
                tip:"?뉖튆 ?鍮??꾩닔", bg:"from-cyan-50 to-sky-100",
                image:"/images/seasons/summer.jpg", photoTitle:"?щ쫫 쨌 ?몃Ⅸ 諛붾떎媛 鍮쏅굹??諛깅졊??,
                photoDesc:"?먮Т吏꾧낵 ?ш낭?대???鍮꾨’??諛깅졊?꾩쓽 ?쒖썝???댁븞 ?띻꼍??媛???뗫낫?대뒗 怨꾩젅?댁뿉??"
              },
              {
                season:"媛??, english:"AUTUMN", icon:"?뛼", months:"9??쨌 10??쨌 11??,
                title:"?몄쓣怨??쒕씪?대툕", desc:"?좎꽑???좎뵪 ?띿뿉???댁븞 ?쒕씪?대툕? ?몄쓣 ?띻꼍???ъ쑀濡?쾶 利먭린湲?醫뗭? 怨꾩젅",
                tip:"?쇨탳李??鍮?, bg:"from-amber-50 to-orange-100",
                image:"/images/seasons/autumn.jpg", photoTitle:"媛??쨌 ?몄쓣怨??쒕씪?대툕??諛깅졊??,
                photoDesc:"留묒? ?섎뒛怨?遺?쒕윭???몄쓣???곕씪 泥쒖쿇???ъ쓣 ?섎윭蹂닿린 醫뗭? 怨꾩젅?댁뿉??"
              },
              {
                season:"寃⑥슱", english:"WINTER", icon:"?꾬툘", months:"12??쨌 1??쨌 2??,
                title:"議곗슜??寃⑥슱 ??, desc:"愿愿묎컼??鍮꾧탳???곸? ?쒓린???쒖쟻???ъ쓽 遺꾩쐞湲곗? 寃⑥슱 諛붾떎瑜?留뚮굹??怨꾩젅",
                tip:"諛⑺뭾?⑺뭹 以鍮?, bg:"from-slate-50 to-blue-100",
                image:"/images/seasons/winter.jpg", photoTitle:"寃⑥슱 쨌 怨좎슂??諛붾떎? ?ㅺ꼍??諛깅졊??,
                photoDesc:"李④???諛붾떣諛붾엺 ?띿뿉???쒖링 怨좎슂?댁쭊 諛깅졊?꾩쓽 寃⑥슱 ?띻꼍??留뚮궇 ???덉뼱??"
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
                          <span className="inline-flex rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm">?뮕 {item.tip}</span>
                          <span className="text-xs font-black text-gray-600">?ъ쭊 ??李쎌쑝濡?蹂닿린 ??/span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mx-6 mb-6 grid gap-3 rounded-2xl bg-white/80 p-4 text-sm sm:mx-8 sm:mb-8 sm:grid-cols-3 sm:p-5">
                  <div className="text-center"><span className="font-black text-gray-900">?벝 ?ъ쭊쨌?곗콉</span><span className="ml-2 text-gray-600">遊?쨌 媛??/span></div>
                  <div className="text-center"><span className="font-black text-gray-900">?뙄 諛붾떎?ы뻾</span><span className="ml-2 text-gray-600">?щ쫫</span></div>
                  <div className="text-center"><span className="font-black text-gray-900">?㎗ ?쒖쟻???ы뻾</span><span className="ml-2 text-gray-600">寃⑥슱</span></div>
                </div>
              </>
            );
          })()}

          <p className="px-6 pb-7 text-center text-xs leading-5 text-gray-500 sm:px-8">
            ?????좎뵪? ?ш컼???댄빆? 怨꾩젅怨??뱀씪 湲곗긽?곹솴???곕씪 ?щ씪吏????덉쑝??異쒕컻 ??理쒖떊 ?뺣낫瑜??뺤씤?섏꽭??
          </p>
        </div>
      </section>


      {/* TRAVEL STYLE RECOMMENDATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
        <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 md:p-8">
          <div className="mb-7">
            <p className="text-sm font-black tracking-[0.18em] text-emerald-600">TRAVEL STYLE</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">?㎡ ?꾧뎄?, ?대뼸寃??ы뻾?섏꽭??</h2>
            <p className="mt-3 max-w-3xl leading-7 text-gray-600">
              ?ы뻾 紐⑹쟻???곕씪 諛깅졊?꾩뿉??癒쇱? 梨숆꺼蹂대㈃ 醫뗭? ?μ냼? ?뺣낫瑜?怨⑤씪遊ㅼ뼱??
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {icon:"?뫅?랅윉⒱랅윉?, title:"遺紐⑤떂怨??④퍡", desc:"?대룞 遺?댁? 以꾩씠怨????紐낆냼? ?꾨쭩???ъ쑀濡?쾶", tags:["?먮Т吏?,"?ъ껌媛?,"?ш낭?대?"], action:"place"},
              {icon:"?쭜", title:"?꾩씠? ?④퍡", desc:"諛붾떎? ?먯뿰??吏곸젒 蹂닿퀬 諛곗슦??媛議깆뿬??, tags:["肄⑸룎?댁븞","?ш낭?대?","?섎뒳?대?"], action:"place"},
              {icon:"?첉", title:"援곗씤硫댄쉶", desc:"諛고렪遺???대룞쨌?앹궗쨌蹂듦? ?쒓컙源뚯? ?ㅼ쟾 以鍮?以묒떖", tags:["硫댄쉶 以鍮?,"異붿쿇肄붿뒪","怨곗떊 ?꾧린"], action:"military"},
              {icon:"?벝", title:"?ъ쭊?ы뻾", desc:"諛깅졊?꾨떎???덇꼍怨??몄쓣???ъ쭊?쇰줈 ?④린???ы뻾", tags:["?먮Т吏?,"?앹꽟?꾨쭩?","肄⑸룎?댁븞"], action:"place"},
              {icon:"?쉶", title:"?쒕쾮???ы뻾", desc:"怨듭쁺踰꾩뒪? ?앹떆瑜??④퍡 ?쒖슜???대룞 遺??以꾩씠湲?, tags:["踰꾩뒪?쒓컙??,"?앹떆","?숈꽑 怨꾪쉷"], action:"transport"},
              {icon:"?똿", title:"?ъ쑀濡쒖슫 2諛?3??, desc:"???愿愿묒?? ?⑥? 紐낆냼源뚯? 泥쒖쿇???섎윭蹂닿린", tags:["異붿쿇肄붿뒪","?⑥? 紐낆냼","怨꾩젅?ы뻾"], action:"course"},
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
                  <span className="text-sm font-black text-emerald-600 transition group-hover:translate-x-1">異붿쿇 蹂닿린 ??/span>
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
          <p className="font-bold text-cyan-700">諛깅졊???쇱젙 吏쒓린</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            ?뿺截?異붿쿇 ?ы뻾肄붿뒪
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-gray-600">
            ?ы뻾 湲곌컙??留욌뒗 湲곕낯 肄붿뒪瑜?李멸퀬?섍퀬, 留덉쓬???쒕뒗 ?μ냼???섎쭔???ы뻾肄붿뒪??異붽???蹂댁꽭??
            ?좊컯 ?댄빆怨??좎뵪???곕씪 ?ㅼ젣 ?쇱젙? ?щ씪吏????덉뒿?덈떎.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* ?뱀씪肄붿뒪 */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-5">
              ?슓 ?뱀씪 ?ы뻾肄붿뒪
            </h3>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>?뱧 ?⑷린?ы빆 ?꾩갑</li>
              <li>?뙄 ?ш낭?대?</li>
              <li>?벝 ?먮Т吏??좊엺??/li>
              <li>?뜙 諛깅졊??留쏆쭛 ?먮갑</li>
              <li>?슓 異쒗빆 ?쒓컙 ?뺤씤 ???ъ쑀 ?덇쾶 ?⑷린?ы빆 ?대룞</li>
            </ul>

          </div>

          {/* 1諛???*/}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-5">
              ?룙截?1諛?2??異붿쿇肄붿뒪
            </h3>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>?벝 ?먮Т吏?/li>
              <li>?룚截??ш낭?대?</li>
              <li>?え 肄⑸룎?댁븞</li>
              <li>?┃ ?먮컯?대Ъ踰?愿李?/li>
              <li>?렍 ?⑷린?ы빆 ?쇨꼍</li>
              <li>?슅 諛깅졊???뚰꽣移??쒕씪?대툕</li>
            </ul>

          </div>

          {/* 2諛???*/}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-5">
              ?똿 2諛?3??異붿쿇肄붿뒪
            </h3>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>?뙄 1?쇱감 쨌 ?ш낭?대? ??肄⑸룎?댁븞</li>
              <li>?벝 2?쇱감 쨌 ?먮Т吏???以묓솕?숆탳??/li>
              <li>?븡截?泥쒖븞??46?⑹궗 ?꾨졊??/li>
              <li>?똿 ?앹꽟?꾨쭩? ?쇰ぐ</li>
              <li>?룥截?3?쇱감 쨌 ?ъ껌媛????섎뒳?대?</li>
              <li>?슓 ?ъ쑀 ?덇쾶 ?⑷린?ы빆 ?대룞</li>
            </ul>

          </div>



        </div>

          {/* 援곗씤硫댄쉶 - 異붿쿇?ы뻾肄붿뒪泥섎읆 媛濡쒗삎 ???뱀뀡?쇰줈 ?뺤텞 */}
        <div id="military-visit" className="scroll-mt-24 mt-8 bg-white rounded-3xl shadow-lg p-6 sm:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-extrabold tracking-[0.16em] text-sky-600">MILITARY VISIT</p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-black">?첉 諛깅졊??援곗씤 硫댄쉶</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  泥섏쓬 硫댄쉶 ?ㅼ떎 ??瑗??꾩슂???댁슜留??쒖꽌?濡??뺤씤?섏꽭??
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">
                ??硫댄쉶쨌?몄텧 ?쇱젙? 蹂듬Т ?λ퀝?먭쾶 理쒖떊 ?덈궡瑜??뺤씤??二쇱꽭??
              </p>
            </div>

            <div className="mt-6 overflow-x-auto pb-2">
              <div className="flex min-w-max gap-3">
                {[
                  ["???쇱젙 ?뺤씤", "?λ퀝?먭쾶 硫댄쉶쨌?몄텧 媛???좎쭨? 蹂듦? ?쒓컙 ?뺤씤", "?뱟"],
                  ["???뺣났 諛고렪", "媛??諛곗? ?뚯븘?ㅻ뒗 諛곕? ?④퍡 ?덉빟쨌?뺤씤", "?슓"],
                  ["???숈냼", "?숇컯???꾩슂?섎㈃ 諛고렪 ?뺤젙 ??誘몃━ 以鍮?, "?룧"],
                  ["???????대룞", "硫댄쉶 ?쒓컙??留욎떠 ?앹떆쨌?뚰꽣移????대룞?섎떒 ?뺤씤", "?슃"],
                  ["??寃고빆 ?鍮?, "異쒗빆 ???댄빆 ?щ? ?뺤씤, 寃고빆 ???ㅼ쓬 諛곗? ?숈냼 ?뺤씤", "?뙄"],
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
                  <h4 className="mt-1 text-xl font-black text-gray-900">?뫅?띯쐢截?援곗씤 硫댄쉶 異붿쿇肄붿뒪</h4>
                </div>
                <p className="text-xs text-gray-500">?λ퀝???ㅼ젣 ?몄텧쨌蹂듦? ?쒓컙??癒쇱? ?뺤씤?섏꽭??</p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-bold text-gray-700">
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">?뜙 ?④퍡 ?앹궗</span>
                <span>??/span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">??移댄럹</span>
                <span>??/span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">?뙄 ?ш낭?대?</span>
                <span>??/span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">?벝 ?먮Т吏꽷룰?源뚯슫 紐낆냼</span>
                <span>??/span>
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">???ъ쑀 ?덇쾶 蹂듦?</span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-sky-50 p-4 sm:p-5">
              <p className="font-black text-gray-900">?뮕 硫댄쉶媛??듭떖 ??/p>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                諛깅졊?꾨뒗 諛??댄빆???쇱젙?????곹뼢??以띾땲?? 硫댄쉶 ?쒓컙留??뺤씤?섏? 留먭퀬
                ?뚯븘?ㅻ뒗 諛??쒓컙源뚯? 癒쇱? 留욎텣 ???앹궗쨌愿愿??쇱젙???〓뒗 寃껋씠 醫뗭븘??
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button type="button" onClick={() => handleQuickMenuClick("ship")} className="rounded-full bg-gray-950 px-4 py-2 text-sm font-bold text-white">
                ?슓 諛고렪
              </button>
              <button type="button" onClick={() => handleQuickMenuClick("stay")} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-800">
                ?룧 ?숇컯
              </button>
              <button type="button" onClick={() => handleQuickMenuClick("food")} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-800">
                ?뜙 留쏆쭛
              </button>
              <button type="button" onClick={() => handleQuickMenuClick("transport")} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-800">
                ?슃 援먰넻
              </button>
              <a
                href="https://www.komsa.or.kr/prog/crtfctSailing/kor/sub03_0206/list.do"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-700"
              >
                ?뙄 ?댄빆쨌寃고빆 ?뺤씤
              </a>
            </div>
          </div>

        {/* 怨곗떊 援곗씤硫댄쉶 ?꾧린 */}
        <div id="military-reviews" className="mt-8 overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-violet-50 shadow-sm">
          <div className="px-6 pt-8 sm:px-8 sm:pt-10">
            <p className="text-sm font-black tracking-[0.18em] text-pink-500">REAL VISIT STORY</p>
            <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-2xl font-black text-gray-900 sm:text-3xl">?뭽 怨곗떊?ㅼ쓽 諛깅졊??硫댄쉶 ?댁빞湲?/h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">吏곸젒 ?ㅻ???寃쏀뿕???④꺼二쇱꽭?? ?ㅼ쓬 硫댄쉶媛앹뿉寃????꾩????⑸땲??</p>
              </div>
              <span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-pink-600 shadow-sm">?꾧린 {militaryReviews.length}媛?/span>
            </div>
          </div>

          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-6">
              <h4 className="text-xl font-black">?랃툘 硫댄쉶 ?꾧린 ?④린湲?/h4>
              <p className="mt-2 text-xs leading-5 text-gray-500">遺?紐끒룸?? ?꾩튂쨌?덈젴/?묒쟾 ?쇱젙쨌?곕씫泥???援곗궗?뺣낫? 媛쒖씤?뺣낫???묒꽦?섏? 留덉꽭??</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <input value={militaryReviewNickname} onChange={(e)=>setMilitaryReviewNickname(e.target.value)} maxLength={20} placeholder="?됰꽕?? className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"/>
                <input value={militaryReviewPeriod} onChange={(e)=>setMilitaryReviewPeriod(e.target.value)} maxLength={20} placeholder="諛⑸Ц?쒓린 ?? 2026??8?? className="rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-pink-400"/>
                <select value={militaryReviewRelation} onChange={(e)=>setMilitaryReviewRelation(e.target.value)} className="rounded-2xl border border-gray-200 px-4 py-3 text-sm"><option>?곗씤</option><option>媛議?/option><option>移쒓뎄</option><option>湲고?</option></select>
                <select value={militaryReviewStay} onChange={(e)=>setMilitaryReviewStay(e.target.value)} className="rounded-2xl border border-gray-200 px-4 py-3 text-sm"><option>?뱀씪</option><option>1諛?2??/option><option>2諛?3???댁긽</option></select>
                <select value={militaryReviewTransport} onChange={(e)=>setMilitaryReviewTransport(e.target.value)} className="rounded-2xl border border-gray-200 px-4 py-3 text-sm sm:col-span-2"><option>?앹떆</option><option>?뚰꽣移?/option><option>?먭????좎쟻</option><option>怨듭쁺踰꾩뒪</option><option>湲고?</option></select>
              </div>
              <div className="mt-4">
                <p className="mb-2 text-sm font-bold text-gray-700">?대쾲 硫댄쉶?ы뻾? ?대븷?섏슂?</p>
                <div className="flex gap-1">{[1,2,3,4,5].map((star)=><button key={star} type="button" onClick={()=>setMilitaryReviewRating(star)} className="text-2xl">{star <= militaryReviewRating ? "狩? : "??}</button>)}</div>
              </div>
              <textarea value={militaryReviewContent} onChange={(e)=>setMilitaryReviewContent(e.target.value)} maxLength={800} rows={5} placeholder="諛고렪, ?숈냼, ?대룞, ?앹궗, 硫댄쉶?섎㈃???꾩??먮뜕 ?????ㅼ쓬 諛⑸Ц?먯뿉寃??뚮젮二쇨퀬 ?띠? 寃쏀뿕???먯쑀濡?쾶 ?④꺼二쇱꽭??" className="mt-4 w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm leading-6 outline-none focus:border-pink-400"/>
              <button type="button" onClick={handleMilitaryReviewSubmit} disabled={militaryReviewSubmitting} className="mt-4 w-full rounded-2xl bg-gray-950 px-5 py-3.5 font-black text-white disabled:opacity-50">{militaryReviewSubmitting ? "?깅줉 以?.." : "?뭽 硫댄쉶 ?꾧린 ?깅줉?섍린"}</button>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between"><h4 className="text-xl font-black">諛깅졊?꾨? ?ㅻ????댁빞湲?/h4><span className="text-xs text-gray-500">理쒖떊??/span></div>
              {militaryReviewLoading ? (
                <div className="rounded-3xl bg-white p-8 text-center text-sm text-gray-500">?꾧린瑜?遺덈윭?ㅻ뒗 以묒씠?먯슂...</div>
              ) : militaryReviews.length === 0 ? (
                <div className="rounded-3xl bg-white p-8 text-center shadow-sm"><div className="text-4xl">?뭽</div><p className="mt-4 font-black">?꾩쭅 泥??꾧린瑜?湲곕떎由ш퀬 ?덉뼱??</p><p className="mt-2 text-sm leading-6 text-gray-500">諛깅졊??硫댄쉶瑜??ㅻ??ㅼ뀲?ㅻ㈃ ?ㅼ쓬 諛⑸Ц?먯뿉寃??꾩?????寃쏀뿕???④꺼二쇱꽭??</p></div>
              ) : (
                <div className="max-h-[570px] space-y-4 overflow-y-auto pr-1">
                  {militaryReviews.map((review)=>(
                    <article key={review.id} className="rounded-3xl bg-white p-5 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2"><div><span className="font-black">{review.nickname}</span><span className="ml-2 text-xs text-gray-500">{review.visit_period}</span></div><span className="text-sm">{"狩?.repeat(Math.max(1,Math.min(5,Number(review.rating)||5)))}</span></div>
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

      {/* Q&A - ?ㅼ젣 吏덈Ц ?깅줉/?듬? ?쒖떆 */}
      {selectedIsland === "諛깅졊?? && (
        <>
      <section id="qna" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-sky-50 via-white to-violet-50 border border-sky-100 p-6 md:p-10 shadow-lg">
          <div className="text-center">
            <p className="font-bold text-sky-600">{selectedIsland} ?ы뻾, 沅곴툑???먯쓣 吏곸젒 臾쇱뼱蹂댁꽭??/p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">?뮠 {selectedIsland} ?ы뻾 Q&amp;A</h2>
            <p className="mt-3 text-gray-600 leading-7">
              吏덈Ц???깅줉?섎㈃ 愿由ъ옄 ?듬????닿납?먯꽌 ?뺤씤?????덉뒿?덈떎.
            </p>
          </div>

          <div className="mt-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
            <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-extrabold">?랃툘 吏덈Ц ?④린湲?/h3>
              <p className="mt-2 text-sm text-gray-500">
                ?꾪솕踰덊샇쨌?덉빟踰덊샇 ??媛쒖씤?뺣낫???묒꽦?섏? 留덉꽭??
              </p>

              <div className="mt-6 space-y-4">
                <input
                  value={qnaNickname}
                  onChange={(e) => setQnaNickname(e.target.value)}
                  placeholder="?됰꽕??
                  maxLength={30}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-sky-500"
                />
                <select
                  value={qnaFormCategory}
                  onChange={(e) => setQnaFormCategory(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-sky-500"
                >
                  {["諛고렪", "?숈냼", "留쏆쭛", "愿愿묒?", "援먰넻"].map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <input
                  value={qnaTitle}
                  onChange={(e) => setQnaTitle(e.target.value)}
                  placeholder="吏덈Ц ?쒕ぉ"
                  maxLength={100}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-sky-500"
                />
                <textarea
                  value={qnaContent}
                  onChange={(e) => setQnaContent(e.target.value)}
                  placeholder={`${selectedIsland} ?ы뻾?먯꽌 沅곴툑???댁슜???먯꽭???곸뼱二쇱꽭??`}
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
                  {qnaSubmitting ? "?깅줉 以?.." : "?뮠 吏덈Ц ?깅줉?섍린"}
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-extrabold">?뱥 ?깅줉??吏덈Ц</h3>

              <input
                value={qnaSearch}
                onChange={(e) => setQnaSearch(e.target.value)}
                placeholder="?뵇 吏덈Ц 寃??
                className="mt-5 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-sky-500"
              />

              <div className="mt-4 flex flex-wrap gap-2">
                {["?꾩껜", "諛고렪", "?숈냼", "留쏆쭛", "愿愿묒?", "援먰넻"].map((category) => (
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
                    吏덈Ц??遺덈윭?ㅻ뒗 以묒엯?덈떎...
                  </div>
                ) : filteredQnaQuestions.length === 0 ? (
                  <div className="rounded-2xl bg-gray-50 p-6 text-center text-gray-500">
                    ?깅줉??吏덈Ц???놁뒿?덈떎.
                  </div>
                ) : (
                  filteredQnaQuestions.map((item) => (
                    <article key={item.id} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                      <div className="flex flex-wrap gap-2 text-xs font-bold">
                        <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">
                          {item.category || "湲고?"}
                        </span>
                        {item.is_faq && (
                          <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">FAQ</span>
                        )}
                        <span className={`rounded-full px-3 py-1 ${
                          item.is_answered
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-gray-200 text-gray-600"
                        }`}>
                          {item.is_answered ? "?듬??꾨즺" : "?듬??湲?}
                        </span>
                      </div>

                      <h4 className="mt-4 text-lg font-extrabold">Q. {item.title}</h4>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-600">{item.content}</p>
                      <p className="mt-3 text-xs text-gray-400">?묒꽦?? {item.nickname || "?듬챸"}</p>

                      {item.answer && (
                        <div className="mt-4 rounded-2xl bg-white p-4">
                          <p className="font-extrabold text-sky-700">A. 姨⑥ŀ???듬?</p>
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

        {selectedIsland === "諛깅졊?? && (
        <button
          onClick={() =>
            document
              .getElementById("qna")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-sky-400 text-white w-14 h-14 rounded-full shadow-2xl text-xl hover:scale-110 transition"
        >
          ?뮠
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
          ?뜙
        </button>

        <button
          onClick={() =>
            document
              .getElementById("stay")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-blue-500 text-white w-14 h-14 rounded-full shadow-2xl text-xl hover:scale-110 transition"
        >
          ?룳
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
          燧놅툘
        </button>
      </div>

  </>
)}

{selectedIsland === "?泥?룄" && (
  <>
    {/* ?泥?룄 ?ъ쭊泥?*/}
    <section id="daecheong-gallery" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-emerald-600">?泥?룄 ?띻꼍?ъ쭊</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">?벝 ?泥?룄 ?ъ쭊泥??쒕늿??蹂닿린</h2>
            <p className="mt-3 leading-7 text-gray-600">
              ?댁븞?ш뎄遺???대?쨌?꾨쭩?쨌湲곗븫?덈꼍源뚯? ?泥?룄???띻꼍???ъ쭊?쇰줈 留뚮굹蹂댁꽭??
              ?ъ쭊???꾨Ⅴ硫??ш쾶 蹂????덉뼱??
            </p>
          </div>
          <button type="button" onClick={() => setShowGallery(!showGallery)} className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600">
            {showGallery ? "?ъ쭊泥??リ린 ?? : "?ъ쭊泥??꾩껜蹂닿린 ??}
          </button>
        </div>
        {showGallery && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {daecheongGallery.map((photo) => (
              <a key={photo.name} href={photo.src} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
                <Image src={photo.src} alt={`?泥?룄 ${photo.name}`} width={800} height={600} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-12 text-white"><p className="font-extrabold">{photo.name}</p></div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>

    {/* ?泥?룄 ?숈냼 */}
    <section id="daecheong-stay" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-blue-50 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-sky-600">?泥?룄 ?숇컯?뺣낫</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">?룳 ?泥?룄 ?숈냼 ?쒕늿??蹂닿린</h2>
            <p className="mt-3 leading-7 text-gray-600">?泥?룄 誘쇰컯쨌?쒖뀡쨌?ш????곕씫泥섎? ?뺤씤?섍퀬 諛붾줈 ?꾪솕?????덉뼱?? ?붽툑怨?媛앹떎, ?쎌뾽 ?щ????덉빟 ?꾩뿉 ?뺤씤??二쇱꽭??</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["?슓 ?좎쭊?ы빆 ?쎌뾽 臾몄쓽", "?슅 李⑤웾쨌二쇱감 ?뺤씤", "?뜵 ?앹궗 ?쒓났 ?щ?", "?뫅?랅윉⒱랅윉??⑥껜 媛앹떎 臾몄쓽", "?뙄 寃고빆 ??蹂寃?湲곗?"].map((tip) => (
                <span key={tip} className="rounded-full border border-sky-100 bg-white px-3 py-2 text-xs font-bold text-sky-700 shadow-sm">{tip}</span>
              ))}
            </div>
          </div>
          <button type="button" onClick={() => setShowStay(!showStay)} className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-sky-600">
            {showStay ? "?숈냼 紐⑸줉 ?リ린 ?? : `?숈냼 ${daecheongStay.length}怨??꾩껜蹂닿린 ??}
          </button>
        </div>
        {showStay && (
          <div className="mt-8">
            <input value={staySearch} onChange={(e) => setStaySearch(e.target.value)} placeholder="?뵊 ?숈냼紐?쨌 ??쒖옄 쨌 ?꾪솕踰덊샇 寃?? className="w-full rounded-2xl border-2 border-sky-100 bg-white px-5 py-4 outline-none focus:border-sky-500" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {daecheongStay.filter(([name, owner, phone]) => `${name} ${owner} ${phone}`.toLowerCase().includes(staySearch.trim().toLowerCase())).map(([name, owner, phone]) => (
                <article key={name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sky-100">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">?泥?룄 ?숈냼</span>
                  <h3 className="mt-4 text-xl font-extrabold text-gray-900">{name}</h3>
                  <p className="mt-2 text-sm text-gray-500">??쒖옄 {owner}</p>
                  <a href={`tel:${phone.replace(/-/g, "")}`} className="mt-5 block rounded-xl bg-sky-600 px-4 py-3 text-center font-bold text-white hover:bg-sky-700">??{phone}</a>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>

    {/* ?泥?룄 ?뚯떇??*/}
    <section id="daecheong-food" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-[2rem] border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-orange-600">?泥?룄 ?뚯떇???뺣낫</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">?뜙 ?泥?룄 ?뚯떇???쒕늿??蹂닿린</h2>
            <p className="mt-3 leading-7 text-gray-600">?泥?룄 ?뚯떇???곕씫泥섎? ?뺤씤?섍퀬 ?곸뾽 ?щ?? ?앹궗 媛???쒓컙??諛붾줈 臾몄쓽??蹂댁꽭??</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["?뜗 ?꾩묠?앹궗 臾몄쓽", "?ⅰ ?ъ옣 媛???щ?", "?뫅?랅윉⒱랅윉??⑥껜 ?앹궗", "?맅 ?댁궛臾셋룻쉶", "?뜙 媛꾨떒??????].map((tip) => (
                <span key={tip} className="rounded-full border border-orange-100 bg-white px-3 py-2 text-xs font-bold text-orange-700 shadow-sm">{tip}</span>
              ))}
            </div>
          </div>
          <button type="button" onClick={() => setShowFood(!showFood)} className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-orange-600">
            {showFood ? "?뚯떇??紐⑸줉 ?リ린 ?? : `?뚯떇??${daecheongFood.length}怨??꾩껜蹂닿린 ??}
          </button>
        </div>
        {showFood && (
          <div className="mt-8">
            <input value={foodSearch} onChange={(e) => setFoodSearch(e.target.value)} placeholder="?뵊 ?뚯떇?먮챸 쨌 ??쒖옄 쨌 ?꾪솕踰덊샇 寃?? className="w-full rounded-2xl border-2 border-orange-100 bg-white px-5 py-4 outline-none focus:border-orange-500" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {daecheongFood.filter(([name, owner, phone]) => `${name} ${owner} ${phone}`.toLowerCase().includes(foodSearch.trim().toLowerCase())).map(([name, owner, phone]) => (
                <article key={name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">?泥?룄 ?뚯떇??/span>
                  <h3 className="mt-4 text-xl font-extrabold text-gray-900">{name}</h3>
                  <p className="mt-2 text-sm text-gray-500">??쒖옄 {owner}</p>
                  <a href={`tel:${phone.replace(/-/g, "")}`} className="mt-5 block rounded-xl bg-orange-500 px-4 py-3 text-center font-bold text-white hover:bg-orange-600">??{phone}</a>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>

    {/* ?泥?룄 ?싳떆諛?*/}
    <section id="daecheong-fishing" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-cyan-700">?泥?룄 諛붾떎?싳떆 ?뺣낫</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">?렍 ?泥?룄 ?싳떆諛??뺣낫 ?쒕늿??蹂닿린</h2>
            <p className="mt-3 leading-7 text-gray-600">?泥?룄 ?싳떆諛??대쫫怨??좎＜ ?곕씫泥섎? ?뺤씤?섍퀬 異쒗빆 ?щ?쨌?덉빟 媛???몄썝쨌?붽툑??吏곸젒 臾몄쓽?????덉뼱??</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["?뙄 異쒗빆 ?щ? ?뺤씤", "?뫁 ?뱀꽑 ?몄썝 臾몄쓽", "?뮩 ?붽툑쨌?덉빟湲??뺤씤", "?렍 ?λ퉬 ???臾몄쓽", "?┷ 援щ챸議곕겮쨌?덉쟾?섏튃"].map((tip) => (
                <span key={tip} className="rounded-full border border-cyan-100 bg-white px-3 py-2 text-xs font-bold text-cyan-700 shadow-sm">{tip}</span>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-gray-500">?뮕 湲곗긽怨?臾쇰븣???곕씪 異쒗빆??蹂寃쎈맆 ???덉쑝??異쒕컻 ???좎＜?먭쾶 諛섎뱶???뺤씤??二쇱꽭??</p>
          </div>
          <button type="button" onClick={() => setShowFishing(!showFishing)} className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-cyan-700">
            {showFishing ? "?싳떆諛?紐⑸줉 ?リ린 ?? : `?싳떆諛?${daecheongFishing.length}泥??꾩껜蹂닿린 ??}
          </button>
        </div>
        {showFishing && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {daecheongFishing.map(([name, owner, phone]) => (
              <article key={name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-cyan-100">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">?泥?룄 ?싳떆諛?/span>
                    <h3 className="mt-4 text-xl font-extrabold text-gray-900">{name}</h3>
                    <p className="mt-2 text-sm text-gray-500">?좎＜ {owner}</p>
                  </div>
                  <span className="text-3xl">?렍</span>
                </div>
                <a href={`tel:${phone.replace(/-/g, "")}`} className="mt-5 block rounded-xl bg-cyan-700 px-4 py-3 text-center font-bold text-white hover:bg-cyan-800">??{phone}</a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>

    {/* ?泥?룄 ?뱀궛??*/}
    <section id="daecheong-specialty" className="scroll-mt-24 mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-[2rem] border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-6 shadow-sm md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold text-teal-700">?泥?룄??諛붾떎? ?먯뿰???ㅼ슫 癒밴굅由?/p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">?럞 ?泥?룄 ?뱀궛???쒕늿??蹂닿린</h2>
            <p className="mt-3 leading-7 text-gray-600">?泥?룄?먯꽌 留뚮궇 ???덈뒗 ????섏궛臾쇨낵 ?띿텞?곕Ъ???뚭컻?⑸땲?? ?댄쉷 ?쒓린? ?먮ℓ ?щ???怨꾩젅쨌湲곗긽???곕씪 ?щ씪吏????덉뼱??</p>
          </div>
          <button type="button" onClick={() => setShowDaecheongSpecialty(!showDaecheongSpecialty)} className="shrink-0 rounded-2xl bg-gray-900 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-teal-700">
            {showDaecheongSpecialty ? "?뱀궛???リ린 ?? : `?뱀궛??${daecheongSpecialties.length}醫??꾩껜蹂닿린 ??}
          </button>
        </div>
        {showDaecheongSpecialty && (
          <div className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {daecheongSpecialties.map((item) => (
                <article key={item.name} className="group overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-teal-100 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="overflow-hidden bg-stone-50">
                    <Image src={item.image} alt={`?泥?룄 ?뱀궛??${item.name}`} width={900} height={600} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700">?泥?룄 ?뱀궛??/span>
                    <h3 className="mt-4 text-2xl font-extrabold text-gray-900">{item.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 rounded-2xl bg-white/80 p-4 text-sm leading-6 text-gray-600">?뮕 援ъ엯泥샕룻깮諛?媛???щ?쨌媛寃⑹? ?꾩? ?먮ℓ泥섏? ?泥?㈃ 愿愿??덈궡瑜??듯빐 諛⑸Ц ?꾩뿉 ?뺤씤??二쇱꽭??</p>
          </div>
        )}
      </div>
    </section>
  </>
)}

{/* ?ы뻾???ъ쭊 ?먮룞 ?щ씪?대뱶 */}
{footprints.length > 0 && (
  <section className="overflow-hidden bg-[#292929] py-12 text-white md:py-16">
    <div className="mx-auto max-w-7xl px-5 text-center sm:px-6">
      <p className="text-sm font-black tracking-[0.2em] text-amber-500">TRAVELER MOMENTS</p>
      <h2 className="mt-3 text-2xl font-black sm:text-3xl md:text-4xl">
        <span className="text-amber-500">{footprints.length}??/span>???ы뻾???ъ쭊??紐⑥??듬땲??
      </h2>
      <p className="mt-3 text-sm leading-6 text-gray-300">諛깅졊쨌?泥?룹냼泥?뿉???ы뻾?먮뱾??吏곸젒 ?④릿 ?뚯쨷???쒓컙?댁뿉??</p>
      <button
        type="button"
        onClick={() => setIsFootprintMarqueePaused(!isFootprintMarqueePaused)}
        aria-label={isFootprintMarqueePaused ? "?ъ쭊 ?щ씪?대뱶 ?ъ깮" : "?ъ쭊 ?щ씪?대뱶 ?쇱떆?뺤?"}
        className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-sm font-black transition hover:bg-white hover:text-gray-900"
      >
        {isFootprintMarqueePaused ? "?? : "??}
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
              <img src={item.image_url} alt={`${item.island} ${item.place_name} ?ы뻾???ъ쭊`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 text-left opacity-0 transition group-hover:opacity-100">
                <p className="text-sm font-black">{item.place_name}</p>
                <p className="mt-1 text-xs text-white/70">{item.island} 쨌 {item.nickname}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>

  </section>
)}

{/* ?ъ뿬??諛붾줈媛湲?硫붾돱 */}
<section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16">
  <div className="rounded-[2rem] border border-gray-100 bg-gray-50 px-5 py-8 shadow-sm sm:px-8 md:py-10">
    <div className="mb-8 text-center">
      <p className="text-sm font-black tracking-[0.18em] text-sky-600">ISLAND TRAVEL</p>
      <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">?ъ뿬??諛붾줈媛湲?/h2>
      <p className="mt-3 text-sm leading-6 text-gray-500">諛깅졊쨌?泥?룹냼泥??ы뻾???꾩슂???뺣낫瑜?鍮좊Ⅴ寃?李얠븘蹂댁꽭??</p>
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

{/* 姨⑥ŀ ?뚭컻 */}
<section className="max-w-5xl mx-auto px-6 py-16">

  <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl shadow-xl p-10 text-white text-center">

    <h2 className="text-4xl font-bold mb-6">
      ?몝 姨⑥ŀ瑜??뚭컻?⑸땲??    </h2>

    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
      ?덈뀞?섏꽭?? 諛깅졊?꾩뿉 28?꾩㎏ ?닿퀬 ?덈뒗 姨⑥ŀ?낅땲??
      <br /><br />
      愿愿묒?, 留쏆쭛, ?숈냼, 援곗씤硫댄쉶 ?뺣낫源뚯?
      吏곸젒 ?대㈃??寃쏀뿕???댁슜??諛뷀깢?쇰줈
      諛깅졊???ы뻾???꾩????섎뒗 ?뺣낫瑜??뺣━?섍퀬 ?덉뒿?덈떎.
      <br /><br />
      泥섏쓬 諛깅졊?꾨? 諛⑸Ц?섏떆??遺꾨뱾??      議곌툑 ???명븯怨?利먭쾪寃??ы뻾?섏떎 ???덈룄濡?      怨꾩냽 ?낅뜲?댄듃???섍?寃좎뒿?덈떎 ?삃
    </p>

  </div>

</section>

{/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 px-6 py-12 mt-20">
  <div className="max-w-7xl mx-auto text-center space-y-5">
    <h2 className="text-2xl font-bold text-white">
      諛깅졊쨌?泥?룹냼泥?룄??紐⑤뱺 ?뺣낫
    </h2>

    <p className="text-gray-400">
      28??嫄곗＜ 二쇰???吏곸젒 ?뺣━?섎뒗 諛깅졊???ы뻾 ?뺣낫 ?뚮옯??    </p>

    <div className="flex flex-wrap justify-center gap-4 text-sm">
      <a href="/about" className="hover:text-white">
        ?댁쁺???뚭컻
      </a>
      <span>|</span>
      <a href="/privacy" className="hover:text-white">
        媛쒖씤?뺣낫泥섎━諛⑹묠
      </a>
      <span>|</span>
      <a href="/terms" className="hover:text-white">
        ?댁슜?쎄?
      </a>
      <span>|</span>
      <a href="/contact" className="hover:text-white">
        臾몄쓽?섍린
      </a>
    </div>

    <p className="text-sm text-gray-500">
      ?먮즺 諛??ъ쭊 異쒖쿂 : ?뱀쭊援?쨌 ?ㅽ븰吏???    </p>

    <p className="text-sm text-gray-500">
      짤 2026 諛깅졊쨌?泥?룹냼泥?룄??紐⑤뱺 ?뺣낫. All Rights Reserved.
    </p>
  </div>
</footer>  
</main>
);
}

