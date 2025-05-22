
import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

const Security: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-[#d50032] mb-6">Security Checks</h1>
          
          <div className="grid gap-6">
            <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Daily Security Briefing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Current Security Level</h3>
                  <div className="bg-amber-500 text-white text-center py-2 rounded-md font-bold text-xl">
                    SUBSTANTIAL
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Required Action</h3>
                  <p>Heightened vigilance required. Report any suspicious activity immediately.</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Security Notes</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Security team conducting random bag checks at main entrance</li>
                  <li>CCTV monitoring increased in concourse areas</li>
                  <li>Report abandoned luggage to security control immediately</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Security Check Schedule</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#d50032] text-white">
                    <th className="border p-2 text-left">Time</th>
                    <th className="border p-2 text-left">Location</th>
                    <th className="border p-2 text-left">Officer</th>
                    <th className="border p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">08:00</td>
                    <td className="border p-2">Main Entrance</td>
                    <td className="border p-2">K. Wilson</td>
                    <td className="border p-2 bg-green-100">Complete</td>
                  </tr>
                  <tr>
                    <td className="border p-2">10:30</td>
                    <td className="border p-2">Platform 5-9</td>
                    <td className="border p-2">M. Ahmed</td>
                    <td className="border p-2 bg-amber-100">In Progress</td>
                  </tr>
                  <tr>
                    <td className="border p-2">12:15</td>
                    <td className="border p-2">Service Areas</td>
                    <td className="border p-2">R. Johnson</td>
                    <td className="border p-2">Pending</td>
                  </tr>
                  <tr>
                    <td className="border p-2">14:45</td>
                    <td className="border p-2">Car Park</td>
                    <td className="border p-2">S. Thompson</td>
                    <td className="border p-2">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-[#d9d9d9] rounded-md shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Emergency Response Procedures</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#d50032]">Code Red Response</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Alert station control room (ext: 5555)</li>
                    <li>Evacuate immediate area</li>
                    <li>Establish cordon at safe distance</li>
                    <li>Wait for security team arrival</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#d50032]">Code Yellow Response</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Report to supervisor</li>
                    <li>Monitor situation discreetly</li>
                    <li>Be prepared to escalate if necessary</li>
                    <li>Document all observations</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Security;
