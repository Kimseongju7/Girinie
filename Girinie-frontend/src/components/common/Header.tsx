import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 py-3">
        <div className="mx-auto max-w-screen-xl px-6 sm:px-12 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <img src="/logo.svg" alt="logo" className="h-10 w-10 rounded-full" />
            </div>

            <div className="flex items-center gap-x-3 sm:gap-x-10">
                <nav className="flex items-center gap-x-2 sm:gap-x-4 font-medium text-gray-700 text-sm sm:text-base">
                    <a href="#" className="hover:text-[#FF6464]">보호자</a>
                    <a href="#" className="hover:text-[#FF6464]">아이</a>
                </nav>
                <Button className="h-9 px-4 sm:px-6 text-white bg-[#CE995D] hover:bg-[#F9E0AE]">
                    로그인 →
                </Button>
            </div>
        </div>
    </header>

  );
};

export default Header;
