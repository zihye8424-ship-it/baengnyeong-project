import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baengnyeong-project.vercel.app"),

  title: {
    default: "백령도의 모든 정보 | 백령도 여행·맛집·숙소·군인면회",
    template: "%s | 백령도의 모든 정보",
  },

  description:
    "백령도 28년 주민 쩨쩨가 직접 정리한 백령도 여행 플랫폼입니다. 관광지, 맛집, 숙소, 군인면회, 배편, 렌트카, 택시, 여행코스 정보를 한눈에 확인하세요.",

  keywords: [
    "백령도",
    "백령도 여행",
    "백령도 맛집",
    "백령도 숙소",
    "백령도 군인면회",
    "백령도 렌트카",
    "백령도 택시",
    "백령도 관광지",
    "백령도 배편",
    "두무진",
    "사곶해변",
    "콩돌해안",
    "끝섬전망대",
    "하늬해안",
    "백령도 여행코스",
  ],

  authors: [{ name: "쩨쩨" }],
  creator: "쩨쩨",
  publisher: "백령도의 모든 정보",

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://baengnyeong-project.vercel.app",
    siteName: "백령도의 모든 정보",
    title: "백령도의 모든 정보 | 백령도 여행 플랫폼",
    description:
      "백령도 관광지, 맛집, 숙소, 군인면회, 배편, 렌트카, 택시 정보를 한눈에 확인하세요.",
    images: [
      {
        url: "/images/background.jpg",
        width: 1200,
        height: 630,
        alt: "백령도의 모든 정보",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "백령도의 모든 정보 | 백령도 여행 플랫폼",
    description:
      "백령도 관광지, 맛집, 숙소, 군인면회 정보를 한눈에 확인하세요.",
    images: ["/images/background.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={noto.className}>{children}</body>
    </html>
  );
}