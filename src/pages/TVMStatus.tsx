
import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

const TVMStatus: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-[#d50032] mb-6">TVM Status</h1>
          
          <div className="grid gap-6">
            <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-4">Machine Status Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-white p-4 rounded-md">
                  <h3 className="text-xl font-semibold mb-2">Operational Status</h3>
                  <div className="flex justify-between items-center">
                    <span>Total Machines:</span>
                    <span className="font-bold">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fully Operational:</span>
                    <span className="font-bold text-green-600">6</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Limited Service:</span>
                    <span className="font-bold text-amber-500">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Out of Service:</span>
                    <span className="font-bold text-red-600">1</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-md">
                  <h3 className="text-xl font-semibold mb-2">Today's Transactions</h3>
                  <div className="flex justify-between items-center">
                    <span>Total Transactions:</span>
                    <span className="font-bold">243</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Card Payments:</span>
                    <span className="font-bold">198</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cash Payments:</span>
                    <span className="font-bold">45</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Failed Transactions:</span>
                    <span className="font-bold text-red-600">12</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-4">Individual Machine Status</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#d50032] text-white">
                    <th className="border p-2 text-left">Machine ID</th>
                    <th className="border p-2 text-left">Location</th>
                    <th className="border p-2 text-left">Status</th>
                    <th className="border p-2 text-left">Issue</th>
                    <th className="border p-2 text-left">Last Maintained</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border p-2">TVM-001</td>
                    <td className="border p-2">Main Concourse</td>
                    <td className="border p-2 text-green-600 font-semibold">Operational</td>
                    <td className="border p-2">None</td>
                    <td className="border p-2">2023-05-15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2">TVM-002</td>
                    <td className="border p-2">Main Concourse</td>
                    <td className="border p-2 text-green-600 font-semibold">Operational</td>
                    <td className="border p-2">None</td>
                    <td className="border p-2">2023-05-10</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-2">TVM-003</td>
                    <td className="border p-2">Platform 3</td>
                    <td className="border p-2 text-amber-500 font-semibold">Limited</td>
                    <td className="border p-2">Card reader intermittent</td>
                    <td className="border p-2">2023-05-18</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2">TVM-004</td>
                    <td className="border p-2">Platform 5</td>
                    <td className="border p-2 text-red-600 font-semibold">Out of Service</td>
                    <td className="border p-2">Printer jam</td>
                    <td className="border p-2">2023-05-01</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-2">TVM-005</td>
                    <td className="border p-2">East Exit</td>
                    <td className="border p-2 text-green-600 font-semibold">Operational</td>
                    <td className="border p-2">None</td>
                    <td className="border p-2">2023-05-12</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-4">Maintenance Schedule</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#d50032]">Upcoming Maintenance</h3>
                  <ul className="bg-white p-4 rounded-md space-y-2">
                    <li className="flex justify-between">
                      <span>TVM-003 Card Reader Repair</span>
                      <span className="font-semibold">Today, 17:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>TVM-004 Printer Service</span>
                      <span className="font-semibold">Tomorrow, 09:30</span>
                    </li>
                    <li className="flex justify-between">
                      <span>All Machines Software Update</span>
                      <span className="font-semibold">25/05/2023, 23:00</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#d50032]">Support Contacts</h3>
                  <div className="bg-white p-4 rounded-md space-y-2">
                    <div>
                      <div className="font-semibold">TVM Technical Support</div>
                      <div>0800-123-4567 (24/7)</div>
                    </div>
                    <div>
                      <div className="font-semibold">Maintenance Team</div>
                      <div>maintenance@example.com</div>
                    </div>
                    <div>
                      <div className="font-semibold">On-site Technician</div>
                      <div>Robert Jones (07700-900123)</div>
                    </div>
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

export default TVMStatus;
