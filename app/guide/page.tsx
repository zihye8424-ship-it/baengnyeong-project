export default function GuidePage() {
    return (
      <main className="min-h-screen bg-gray-50">
  
        <section className="bg-blue-900 text-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
  
            <h1 className="text-5xl font-extrabold mb-6">
              📘 백령도 여행 가이드
            </h1>
  
            <p className="text-xl mb-8">
              28년 거주민이 직접 만든 2026 최신판
            </p>
  
            <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-xl">
  
              <h2 className="text-3xl font-bold mb-4">
                백령도 여행 전 필수 준비물
              </h2>
  
              <p className="text-lg">
                관광지, 맛집, 숙소, 군인면회, 할인정보,
                배편정보까지 한눈에 확인할 수 있습니다.
              </p>
  
            </div>
  
          </div>
        </section>
  
        <section className="max-w-6xl mx-auto py-20 px-6">
  
          <h2 className="text-4xl font-bold text-center mb-12">
            전자책 구성
          </h2>
  
          <div className="grid md:grid-cols-2 gap-8">
  
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                📍 수록 내용
              </h3>
  
              <ul className="space-y-3 text-gray-700">
                <li>✔ 백령도 여행 준비</li>
                <li>✔ 여객선 정보</li>
                <li>✔ 숙소 추천</li>
                <li>✔ 현지인 맛집</li>
                <li>✔ 숨은 관광지</li>
                <li>✔ 군인 면회 코스</li>
                <li>✔ 가족 여행 코스</li>
                <li>✔ 할인 정보</li>
              </ul>
            </div>
  
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                🎁 이런 분께 추천
              </h3>
  
              <ul className="space-y-3 text-gray-700">
                <li>✔ 백령도 첫 여행</li>
                <li>✔ 군인 면회 예정</li>
                <li>✔ 가족 여행 계획</li>
                <li>✔ 여행 일정 짜기 어려운 분</li>
                <li>✔ 현지인 정보가 필요한 분</li>
              </ul>
            </div>
  
          </div>
  
        </section>
  
        <section className="max-w-5xl mx-auto px-6 pb-20">
  
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-10 text-center">
  
            <h2 className="text-4xl font-bold mb-6">
              💰 구매하기
            </h2>
  
            <p className="text-lg mb-8">
              2026 백령도 여행 가이드 PDF
            </p>
            <img
  src="/images/ebook-cover.jpg"
  alt="백령도 여행가이드"
  className="w-full max-w-md mx-auto rounded-3xl shadow-xl"
/>
            <p className="text-5xl font-extrabold text-red-500 mb-8">
              ₩9,900
            </p>
  
            <a
              href="#"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full text-xl font-bold"
            >
              구매하러 가기
            </a>
  
          </div>
  
        </section>
  
      </main>
    );
  }