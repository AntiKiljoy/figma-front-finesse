
import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

const PassengerAssist: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-[#d50032] mb-6">Passenger Assist</h1>
          
          <div className="grid gap-6">
            <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-4">Today's Booked Assists</h2>
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-[#d50032] text-white">
                    <th className="border p-2 text-left">Time</th>
                    <th className="border p-2 text-left">Passenger</th>
                    <th className="border p-2 text-left">From</th>
                    <th className="border p-2 text-left">To</th>
                    <th className="border p-2 text-left">Requirements</th>
                    <th className="border p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">09:45</td>
                    <td className="border p-2">Sarah Johnson</td>
                    <td className="border p-2">Platform 4</td>
                    <td className="border p-2">Main Exit</td>
                    <td className="border p-2">Wheelchair assistance</td>
                    <td className="border p-2 bg-green-100 text-green-800">Completed</td>
                  </tr>
                  <tr>
                    <td className="border p-2">10:30</td>
                    <td className="border p-2">Michael Brown</td>
                    <td className="border p-2">Main Entrance</td>
                    <td className="border p-2">Platform 7</td>
                    <td className="border p-2">Visual impairment, guide assistance</td>
                    <td className="border p-2 bg-amber-100 text-amber-800">In Progress</td>
                  </tr>
                  <tr>
                    <td className="border p-2">11:15</td>
                    <td className="border p-2">Emma Wilson</td>
                    <td className="border p-2">Platform 2</td>
                    <td className="border p-2">Taxi Rank</td>
                    <td className="border p-2">Elderly, luggage assistance</td>
                    <td className="border p-2">Pending</td>
                  </tr>
                  <tr>
                    <td className="border p-2">12:45</td>
                    <td className="border p-2">James Taylor</td>
                    <td className="border p-2">Car Park</td>
                    <td className="border p-2">Platform 9</td>
                    <td className="border p-2">Mobility scooter, ramp required</td>
                    <td className="border p-2">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
                <h2 className="text-2xl font-bold mb-4">Available Staff</h2>
                <div className="bg-white rounded-md p-4 space-y-3">
                  <div className="flex justify-between items-center p-2 border-b">
                    <span className="font-semibold">David Smith</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Available</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border-b">
                    <span className="font-semibold">Lisa Johnson</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">On Task</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border-b">
                    <span className="font-semibold">Mark Williams</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Available</span>
                  </div>
                  <div className="flex justify-between items-center p-2">
                    <span className="font-semibold">Sarah Thompson</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">Break</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
                <h2 className="text-2xl font-bold mb-4">Equipment Status</h2>
                <div className="bg-white rounded-md p-4 space-y-3">
                  <div className="flex justify-between items-center p-2 border-b">
                    <span className="font-semibold">Wheelchairs</span>
                    <span className="text-green-600">4 Available</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border-b">
                    <span className="font-semibold">Platform Ramps</span>
                    <span className="text-green-600">6 Available</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border-b">
                    <span className="font-semibold">Train Ramps</span>
                    <span className="text-amber-600">2 Available</span>
                  </div>
                  <div className="flex justify-between items-center p-2">
                    <span className="font-semibold">Buggies</span>
                    <span className="text-red-600">0 Available (In Use)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PassengerAssist;
