import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata = {
  title: "백령도의 모든 정보 | 관광지·맛집·숙소·군인면회",
  description:
    "백령도 28년 주민 쩨쩨가 직접 운영하는 백령도 여행 플랫폼. 관광지, 맛집, 숙소, 군인면회, 배편, 렌트카, 택시, 여행코스 정보를 한눈에 확인하세요.",
  keywords: [
    "백령도",
    "백령도여행",
    "백령도맛집",
    "백령도숙소",
    "백령도군인면회",
    "백령도렌트카",
    "백령도택시",
    "백령도관광지",
    "백령도배편",
    "두무진",
    "사곶해변",
  ],
  openGraph: {
    title: "백령도의 모든 정보",
    description:
      "백령도 관광지, 맛집, 숙소, 군인면회 정보를 한눈에 확인하세요.",
    images: ["/images/background.jpg"],
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