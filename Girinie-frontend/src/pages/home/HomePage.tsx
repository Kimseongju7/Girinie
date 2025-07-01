// src/pages/home/HomePage.tsx

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 py-20 pt-[88px] text-center">
        <h2 className="mb-6 text-4xl font-bold text-[#333]">
          언어와 문화를 넘어, 아이의 미래까지{" "}
          <span className="text-[#C1905C]">Girinie Education</span>
        </h2>
        <p className="mb-8 max-w-xl text-lg text-gray-600">
          다문화 가정 아이들을 위한 스마트 러닝 파트너
        </p>
        <a
          href="/signup"
          className="rounded bg-[#C1905C] px-6 py-3 font-semibold text-white hover:bg-[#a87847]"
        >
          지금 시작하기
        </a>
      </main>

      <footer className="py-4 text-center text-sm text-gray-400">
        &copy; 2025 Girinie. All rights reserved.
      </footer>
    </div>
  );
}
