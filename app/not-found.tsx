import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-sky-50 px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-sky-500">404</h1>

        <h2 className="text-3xl font-bold mt-6 mb-4">
          페이지를 찾을 수 없습니다.
        </h2>

        <p className="text-gray-600 mb-8">
          요청하신 페이지가 없거나 주소가 변경되었습니다.
        </p>

        <Link
          href="/"
          className="inline-block bg-sky-500 text-white px-8 py-4 rounded-full hover:bg-sky-600 transition"
        >
          🏝️ 메인으로 돌아가기
        </Link>
      </div>
    </main>
  );
}