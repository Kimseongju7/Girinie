import Calendar from "@/components/calendar/Calendar";

export default function KidCalendarPage() {
  return (
    <div className="min-h-screen bg-[#F7E0AF] p-6">
      <div className="flex">
        {/* Sidebar placeholder */}
        <aside className="mr-6 hidden lg:block lg:w-64">{/* Sidebar will be added here */}</aside>

        {/* Main content */}
        <main className="flex flex-1 justify-center">
          <div className="w-full max-w-4xl">
            <Calendar mode="child" />
          </div>
        </main>
      </div>
    </div>
  );
}
