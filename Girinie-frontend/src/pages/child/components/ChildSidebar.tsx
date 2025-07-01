import { useLocation, useNavigate } from 'react-router-dom';
import { childList } from '@/lib/childData';


const Sidebar = () => {
const location = useLocation();
const navigate = useNavigate();

const isActive = (path: string) => location.pathname === path;

const selectedChild = childList.find((c) => c.id === '1'); // 나중엔 props로 받아도 됨

return (
    <aside className="pt-20 w-60 h-screen fixed top-0 left-0 bg-[#FFFFFF] text-white flex flex-col justify-start border-r border-[#D9D9D9]">
    <div className="p-10 place-items-center">
        <img
            src={selectedChild?.avatarUrl ?? '/img/default.png'}
            className="w-28 h-28 rounded-full"
            alt={selectedChild?.name}
        />
        <p className="text-center mt-5 text-black font-semibold">
            {selectedChild?.name}
        </p>
    </div>

    <nav className="divide-y divide-[#D9D9D9] border-t border-[#D9D9D9]">
        <div
            className={`hover:text-tertiary cursor-pointer px-8 py-4 ${
            isActive('/report') ? 'font-bold text-black' : 'text-gray-400'
            }`}
            onClick={() => navigate('/chatbot')}
        >
            챗봇
        </div>
        <div
            className={`hover:text-tertiary cursor-pointer px-8 py-4 ${
            isActive('/settings') ? 'font-bold text-black' : 'text-gray-400'
            }`}
            onClick={() => navigate('/learning-rate')}
        >
            학습률
        </div>
    </nav> 
    <hr className="border-t border-[#D9D9D9]" />
    </aside>
);
};

export default Sidebar;
