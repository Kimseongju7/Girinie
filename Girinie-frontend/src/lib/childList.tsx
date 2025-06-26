import React, { useState } from "react";
import { childList, Child } from "@/lib/childData";

interface ChildListProps {
    className?: string;
}

const ChildList: React.FC<ChildListProps> = ({ className }) => {
    const [selected, setSelected] = useState<string>(childList[0]?.id || '');

    return (
        <div className="px-4">
          <ul className="space-y-4">
            {childList.map((child: Child) => (
              <li
                key={child.id}
                className={`px-4 flex items-center space-x-4 hover:text-tertiary cursor-pointer ${
                  selected === child.id ? 'font-semibold text-black' : 'text-gray-400'
                }`}
                onClick={() => setSelected(child.id)}
              >
                <img
                  src={child.avatarUrl ?? '/img/default-avatar.png'}
                  alt={child.name}
                  className="h-10 w-10 rounded-full bg-gray-200"
                />
                <span className="text-lg font-semibold">{child.name}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default ChildList;