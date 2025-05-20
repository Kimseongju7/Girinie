import React, { useState } from "react";

interface ChildListProps {
  className?: string;
}

const ChildList: React.FC<ChildListProps> = ({ className }) => {
  const [children, setChildren] = useState<string[]>(['남혜민']);
  const [selected, setSelected] = useState<string>('남혜민');

  const addChild = () => {
    const name = prompt('아이 이름을 입력하세요');
    if (name) {
      setChildren([...children, name]);
    }
  };

  return (
    <div className="px-4">
      <button
        className={`mb-7 py-1 bg-[#C18C4B] text-white font-normal rounded-md ${className}`}
        onClick={addChild}
      >
        + 아이 추가하기
      </button>
      <ul className="space-y-4">
        {children.map((child) => (
          <li
            key={child}
            className={`px-3 flex items-center space-x-4 hover:text-[#CE995D] cursor-pointer ${
              selected === child ? 'font-bold text-black' : 'text-gray-400'
            }`}
            onClick={() => setSelected(child)}
          >
            <div className="h-10 w-10 bg-black rounded-full"></div>
            <span>{child}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildList;
