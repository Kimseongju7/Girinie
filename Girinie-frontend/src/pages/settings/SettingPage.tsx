import React, { useState, useEffect } from "react";
import Sidebar from "../gardian/components/GuardianSidebar";
import { childList } from "@/lib/childData";
import ChildCard from "../settings/components/ChildCard";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Child } from "@/lib/childData"; 

const getCardsPerPage = () => {
  if (typeof window !== "undefined" && window.innerWidth < 768) return 1;
  return 2;
};

const SettingPage: React.FC = () => {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

  const totalItems = childList.length + 1;

  // 페이지 개수는 아이 추가까지만 허용 
  const totalPages = Math.ceil(totalItems / cardsPerPage);

  const start = page * cardsPerPage;
  const end = start + cardsPerPage;
  const items: (Child | "ADD")[] = [...childList, "ADD"];
  const visibleItems = items.slice(start, end);

  // 화면 리사이즈시 page index 조정
  useEffect(() => {
    const handleResize = () => {
      const newCardsPerPage = getCardsPerPage();
      const newTotalPages = Math.ceil(totalItems / newCardsPerPage);

      setCardsPerPage(newCardsPerPage);
      setPage((prev) => Math.min(prev, newTotalPages - 1)); 
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [totalItems]);

  return (
    <div className="min-h-screen bg-white">
      <header className="h-16 bg-white shadow" />
      <Sidebar />

      <main className="ml-60 p-10 max-w-7xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">아이 설정</h3>

        <div className="relative w-full max-w-5xl mx-auto bg-yellow-100 rounded-lg shadow-md p-8 overflow-hidden">
          <div className="flex gap-6 justify-center items-center">
            {visibleItems.map((item, idx) =>
              item === "ADD" ? (
                <button
                  key="add-card"
                  className="bg-white hover:bg-gray-100 cursor-pointer transition rounded-lg shadow-md p-6 w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px] h-[350px] flex flex-col items-center justify-center flex-shrink-0"
                  onClick={() => {
                  }}
                >
                  <Plus size={48} className="text-gray-400 mb-2" />
                  <span className="text-lg font-medium text-gray-600">아이 추가</span>
                </button>
              ) : (
                <ChildCard key={item.id} child={item} />
              )
            )}
          </div>

          {page > 0 && (
            <button
              onClick={() => setPage((p) => p - 1)}
              className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
            >
              <ChevronLeft />
            </button>
          )}

          {page < totalPages - 1 && (
            <button
              onClick={() => setPage((p) => p + 1)}
              className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          )}
        </div>

        <div className="mt-10 space-y-2 text-gray-800">
          <div className="text-xl font-semibold mb-4">계정 설정</div>
          <div className="cursor-pointer hover:underline">로그아웃</div>
          <div className="text-red-500 cursor-pointer hover:underline">회원 탈퇴</div>
        </div>
      </main>
    </div>
  );
};

export default SettingPage;
