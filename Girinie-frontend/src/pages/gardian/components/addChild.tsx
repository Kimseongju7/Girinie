import React, { useState } from "react";

interface ChildListProps {
  className?: string;
}

const ChildList: React.FC<ChildListProps> = ({ className }) => {
  const [children, setChildren] = useState<string[]>(['남혜민']);
  const [selected, setSelected] = useState<string>('남혜민');

  return (
    <div className="px-4">
      <ul className="space-y-4">
        {children.map((child) => (
          <li
            key={child}
            className={`px-4 flex items-center space-x-4 hover:text-tertiary cursor-pointer ${
              selected === child ? 'font-bold text-black' : 'text-gray-400'
            }`}
            onClick={() => setSelected(child)}
          >
            <div className="h-10 w-10 bg-black rounded-full"></div>
            <span className="text-xl font-semibold">{child}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildList;
