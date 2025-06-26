import { useLocation } from 'react-router-dom';
// import ChildData from "@/lib/childData";
import ChildList from "@/lib/childList"

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="pt-20 w-60 h-screen fixed top-0 left-0 bg-[#FFFFFF] text-white flex flex-col justify-between border-r border-[#D9D9D9]">
      <div className="p-7">
        <ChildList className="h-9 px-4 sm:px-6 text-white bg-tertiary hover:bg-[#F9E0AE]" />
      </div>

      <nav className="mt-auto divide-y divide-[#D9D9D9] border-t border-[#D9D9D9]">
        <div
        className={`hover:text-tertiary cursor-pointer px-8 py-4 ${
          isActive('/report') ? 'font-bold text-black' : 'text-gray-400'
        }`}
        >
          캘린더
        </div>
        <div
          className={`hover:text-tertiary cursor-pointer px-8 py-4 ${
            isActive('/settings') ? 'font-bold text-black' : 'text-gray-400'
          }`}
        >
          설정
        </div>
      </nav> 
    </aside>
  );
};

export default Sidebar;
