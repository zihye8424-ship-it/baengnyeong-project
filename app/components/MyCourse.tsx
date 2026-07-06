"use client";

import { useEffect, useState } from "react";

type CoursePlace = {
  name: string;
  category?: string;
  location?: string;
};

export default function MyCourse() {
  const [myCourse, setMyCourse] = useState<CoursePlace[]>([]);

  function loadCourse() {
    const saved = localStorage.getItem("myCourse");
    setMyCourse(saved ? JSON.parse(saved) : []);
  }

  useEffect(() => {
    loadCourse();

    window.addEventListener("myCourseUpdated", loadCourse);

    return () => {
      window.removeEventListener("myCourseUpdated", loadCourse);
    };
  }, []);

  function handleRemove(placeName: string) {
    const updated = myCourse.filter((place) => place.name !== placeName);
    setMyCourse(updated);
    localStorage.setItem("myCourse", JSON.stringify(updated));
    window.dispatchEvent(new Event("myCourseUpdated"));
  }

  function handleClear() {
    if (!confirm("여행코스를 모두 삭제할까요?")) return;

    setMyCourse([]);
    localStorage.removeItem("myCourse");
    window.dispatchEvent(new Event("myCourseUpdated"));
  }

  if (myCourse.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 shadow">
        <h2 className="text-3xl font-bold text-center mb-6">
          🗺️ 내 여행코스
        </h2>

        <div className="space-y-3">
          {myCourse.map((place, index) => (
            <div
              key={place.name}
              className="bg-white rounded-2xl p-4 flex justify-between items-center gap-4"
            >
              <div>
                <p className="font-bold">
                  {index + 1}. {place.name}
                </p>
                <p className="text-sm text-gray-500">
                  {place.location || place.category || "백령도 관광지"}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleRemove(place.name)}
                className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold"
              >
                삭제
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={handleClear}
            className="bg-black text-white px-6 py-3 rounded-2xl font-bold"
          >
            전체 삭제
          </button>
        </div>
      </div>
    </section>
  );
}