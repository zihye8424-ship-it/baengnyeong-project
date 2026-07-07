export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        문의하기
      </h1>

      <p className="mb-6 leading-8">
        백령도의 모든 정보를 이용해 주셔서 감사합니다.
      </p>

      <p className="mb-6 leading-8">
        사이트 이용 중 오류, 정보 수정 요청, 관광지 제보,
        맛집 추천 등은 언제든지 연락해 주세요.
      </p>

      <div className="bg-gray-100 rounded-2xl p-6 mt-8">
        <p className="font-bold mb-2">운영자</p>
        <p>쩨쩨</p>

        <p className="font-bold mt-6 mb-2">이메일</p>
        <p>zihye8424@gmail.com</p>

        <p className="font-bold mt-6 mb-2">운영 목적</p>
        <p>
          백령도를 찾는 관광객과 군인 면회객에게
          정확하고 유용한 여행 정보를 제공하기 위해 운영합니다.
        </p>
      </div>
    </main>
  );
}