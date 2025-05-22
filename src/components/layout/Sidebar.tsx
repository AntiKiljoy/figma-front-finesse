
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, HelpCircle } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Security Checks', path: '/security' },
    { name: 'TVM Status', path: '/tvm' },
    { name: 'Passenger Assist', path: '/assist' },
  ];

  return (
    <aside className="w-[232px] flex flex-col gap-4 bg-[#d9d9d9] px-[21px] py-[23px] max-md:w-full max-md:p-2.5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca3bf3b3730f5c05e0ff8abcbbe39e8bbc2723d7"
        className="w-[154px] h-[73px] mx-[17px] my-2.5"
        alt="LNER"
      />
      <nav className="flex flex-col gap-3 mt-[60px] max-md:mt-5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.name}
              to={item.path} 
              className={`text-xl font-semibold text-center px-5 py-2 rounded-[7px] transition-colors ${
                isActive 
                ? 'bg-[#d50032] text-white' 
                : 'bg-white hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex flex-col gap-3 mt-auto">
        <button className="flex items-center gap-2 text-base font-medium px-4 py-2 rounded-md hover:bg-[#c9c9c9] transition-colors">
          <Settings size={18} />
          <span>Settings</span>
        </button>
        <button className="flex items-center gap-2 text-base font-medium px-4 py-2 rounded-md hover:bg-[#c9c9c9] transition-colors">
          <HelpCircle size={18} />
          <span>Help</span>
        </button>
      </div>
    </aside>
  );
};
