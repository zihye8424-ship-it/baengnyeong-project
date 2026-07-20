type Props = {
  title: string;
};

export default function PlaceTemplate({ title }: Props) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-5xl font-black">{title}</h1>

        <p className="mt-6 text-xl text-gray-600">
          관광지 정보를 불러오는 중...
        </p>
      </div>
    </main>
  );
}