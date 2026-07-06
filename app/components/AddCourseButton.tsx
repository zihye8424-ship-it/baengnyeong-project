"use client";

type Place = {
  name: string;
  category?: string;
  location?: string;
};

export default function AddCourseButton({ place }: { place: Place }) {
  function handleAddCourse() {
    const saved = localStorage.getItem("myCourse");
    const current: Place[] = saved ? JSON.parse(saved) : [];

    const exists = current.find((item) => item.name === place.name);

    if (exists) {
      alert("이미 여행코스에 담겨 있어요 😊");
      return;
    }

    const updated = [...current, place];

    localStorage.setItem("myCourse", JSON.stringify(updated));
    window.dispatchEvent(new Event("myCourseUpdated"));

    alert(`${place.name}이 여행코스에 담겼어요!`);
  }

  return (
    <button
      type="button"
      onClick={handleAddCourse}
      className="w-full bg-emerald-500 text-white py-3 rounded-2xl font-semibold hover:bg-emerald-600 transition"
    >
      ➕ 여행코스 담기
    </button>
  );
}