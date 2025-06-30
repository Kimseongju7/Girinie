import React, { useState } from "react";
import giraffeImg from "@/assets/calendar/giraffe.png";
import LeftButtonImg from "@/assets/calendar/LeftButton.png";
import RightButtonImg from "@/assets/calendar/RightButton.png";

type CalendarProps = {
  mode: "parent" | "child";
};

const days = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar: React.FC<CalendarProps> = ({ mode }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay(); // 0 = Sunday, ..., 6 = Saturday
  };

  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getFirstDayOfMonth(year, month);

  return (
    <div className="mx-auto aspect-[4/3] w-full max-w-3xl rounded-3xl bg-white p-6 shadow-2xl">
      <div className="mb-4 flex items-center justify-between px-4 md:px-2">
        <h1 className="text-xl font-semibold">
          {year}년 {month + 1}월
        </h1>
        <div className="space-x-2">
          <button onClick={handlePrevMonth}>
            <img src={LeftButtonImg} alt="Previous Month" className="h-8 w-8" />
          </button>
          <button onClick={handleNextMonth}>
            <img src={RightButtonImg} alt="Next Month" className="h-8 w-8" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 border border-gray-300 text-center text-sm text-black">
        {days.map((day, i) => (
          <div
            key={day}
            className={`border-b border-gray-300 py-2 text-lg font-semibold ${i === 0 ? "text-[#FF6464]" : ""}`}
          >
            {day}
          </div>
        ))}
        {[
          ...Array.from({ length: startDay }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square border-b border-r border-gray-300" />
          )),
          ...Array.from({ length: daysInMonth }, (_, i) => (
            <div
              key={i}
              className="relative aspect-square border-b border-r border-gray-300 p-2 text-left"
            >
              <div
                className={`text-lg font-semibold ${(i + startDay) % 7 === 0 ? "text-[#FF6464]" : ""}`}
              >
                {i + 1}
              </div>
              <div className="text-center">
                {mode === "child" ? (
                  <img
                    src={giraffeImg}
                    alt="giraffe"
                    className="absolute bottom-0 right-1 h-16 w-16"
                    //h-12 w-12 작은 버전
                  />
                ) : (
                  "📊"
                )}
              </div>
            </div>
          )),
        ]}
      </div>
    </div>
  );
};

export default Calendar;
