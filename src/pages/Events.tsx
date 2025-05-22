
import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

const Events: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  });
  
  return (
    <div className="flex min-h-screen bg-white max-md:flex-col">
      <Sidebar />
      <main className="flex-1 px-5 py-0 max-md:px-2.5 max-md:py-0">
        <Header 
          stationName="York" 
          time={currentTime} 
          userName="Jamie Smith" 
          userRole="Team Leader" 
        />
        
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-[#d50032] mb-6">Upcoming Events</h1>
          
          <div className="grid gap-6">
            {/* Event card */}
            <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Railway Heritage Exhibition</h2>
              <p className="text-lg mb-4">May 25, 2025 - Platform 1</p>
              <p className="mb-4">Local railway enthusiasts will be showcasing historical artifacts and photographs from York's rich railway history.</p>
              <div className="flex justify-between items-center">
                <span className="text-[#d50032] font-semibold">Expected attendance: 200+</span>
                <button className="bg-[#d50032] text-white px-4 py-2 rounded">View Details</button>
              </div>
            </div>
            
            {/* Event card */}
            <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Rail Safety Awareness Day</h2>
              <p className="text-lg mb-4">June 10, 2025 - Main Concourse</p>
              <p className="mb-4">Information stands and interactive displays about rail safety for passengers and the general public.</p>
              <div className="flex justify-between items-center">
                <span className="text-[#d50032] font-semibold">Expected attendance: 300+</span>
                <button className="bg-[#d50032] text-white px-4 py-2 rounded">View Details</button>
              </div>
            </div>
            
            {/* Event card */}
            <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Summer Travel Information Day</h2>
              <p className="text-lg mb-4">June 28, 2025 - Customer Service Area</p>
              <p className="mb-4">Staff will be on hand to provide information about summer travel schedules, special services, and discount packages.</p>
              <div className="flex justify-between items-center">
                <span className="text-[#d50032] font-semibold">Expected attendance: 150+</span>
                <button className="bg-[#d50032] text-white px-4 py-2 rounded">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
