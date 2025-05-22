import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
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
      <nav className="flex flex-col gap-3 mt-[101px] max-md:mt-5">
        {navItems.map((item) => (
          <Link 
            key={item.name}
            to={item.path} 
            className="text-2xl text-center bg-white px-0 py-1 rounded-[7px]"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="flex flex-col gap-1 mt-auto">
        <div className="flex items-center gap-1 text-base">
          <i className="ti ti-settings" />
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-1 text-base">
          <i className="ti ti-help" />
          <span>Help</span>
        </div>
      </div>
    </aside>
  );
};
