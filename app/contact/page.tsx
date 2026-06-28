export default function ContactPage() {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">문의하기</h1>
  
        <div className="space-y-6 leading-8 text-gray-700">
  
          <p>
            백령도의 모든 정보 이용 중 궁금한 사항이나
            수정이 필요한 정보가 있다면 언제든 문의해 주세요.
          </p>
  
          <div className="bg-sky-50 rounded-2xl p-6 border">
            <h2 className="text-2xl font-bold mb-4">
              📧 이메일
            </h2>
  
            <p>
              zihye7@naver.com
            </p>
          </div>
  
          <div className="bg-green-50 rounded-2xl p-6 border">
            <h2 className="text-2xl font-bold mb-4">
              📝 블로그
            </h2>
  
            <a
              href="https://blog.naver.com/zihye7"
              target="_blank"
              className="text-sky-600 underline"
            >
              https://blog.naver.com/zihye7
            </a>
          </div>
  
        </div>
      </main>
    );
  }