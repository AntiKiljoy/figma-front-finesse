import React from 'react';

interface HeaderProps {
  stationName: string;
  time: string;
  userName: string;
  userRole: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  stationName, 
  time, 
  userName, 
  userRole 
}) => {
  return (
    <header className="flex justify-between items-center bg-[#d50032] px-[18px] py-2.5 max-sm:flex-col max-sm:text-center">
      <div className="text-white text-[39px] font-bold max-sm:text-[28px]">
        {stationName} - {time}
      </div>
      <div className="flex items-center gap-1 max-sm:mt-2.5">
        <div>
          <svg 
            width="70" 
            height="71" 
            viewBox="0 0 70 71" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="profile-icon" 
            style={{ width: '70px', height: '70px' }}
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M35 6.33338C38.8302 6.33336 42.6229 7.08777 46.1616 8.55352C49.7003 10.0193 52.9156 12.1677 55.624 14.876C58.3324 17.5844 60.4808 20.7997 61.9466 24.3384C63.4123 27.8771 64.1668 31.6698 64.1668 35.5C64.1668 51.6083 51.1083 64.6668 35 64.6668C18.8918 64.6668 5.83337 51.6083 5.83337 35.5C5.83337 19.3918 18.8918 6.33338 35 6.33338ZM37.9168 38.4168H32.0834C24.8626 38.4168 18.6633 42.79 15.9895 49.0327C20.2202 54.9651 27.1584 58.8334 35 58.8334C42.8416 58.8334 49.7798 54.9651 54.0106 49.0323C51.3368 42.79 45.1376 38.4168 37.9168 38.4168ZM35 15.0834C30.1675 15.0834 26.25 19.0009 26.25 23.8334C26.25 28.6658 30.1675 32.5834 35 32.5834C39.8325 32.5834 43.75 28.6658 43.75 23.8334C43.75 19.0009 39.8326 15.0834 35 15.0834Z" 
              fill="white"
            />
          </svg>
        </div>
        <div className="text-white px-0 py-0.5">
          <div className="text-2xl p-1">{userName}</div>
          <div className="text-base p-1">{userRole}</div>
        </div>
      </div>
    </header>
  );
};
