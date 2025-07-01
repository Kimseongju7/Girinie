import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 py-3">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src="/logo.svg" alt="logo" className="h-12 w-12 rounded-full" 
          onClick={() => navigate("/")}
          />
        
        </div>

        <div className="flex items-center gap-x-3 sm:gap-x-10">
          <nav className="flex items-center gap-x-3 sm:gap-x-7 font-medium text-gray-700 text-sm sm:text-base">
            <button
              onClick={() => navigate("/gardian")}
              className="hover:text-[#FF6464] transition-colors"
            >
              보호자
            </button>
            <button
              onClick={() => navigate("/child")}
              className="hover:text-[#FF6464] transition-colors"
            >
              아이
            </button>
          </nav>

          <Button
            className="h-9 px-4 sm:px-5 text-white bg-[#CE995D] hover:bg-[#F9E0AE] transition-colors"
            onClick={() => navigate("/login")}
          >
            로그인 →
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
