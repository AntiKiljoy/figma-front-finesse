import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { StatCard } from '@/components/dashboard/StatCard';
import { DeparturesTable } from '@/components/dashboard/DeparturesTable';
import { AlertsPanel } from '@/components/dashboard/AlertsPanel';
import { StationMap } from '@/components/dashboard/StationMap';

const Index: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('09:47');
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  // Stat cards data
  const rightTimeStats = [
    { label: 'Northbound', value: '75%', color: '#ffa000' },
    { label: 'Southbound', value: '95%', color: '#388e3c' }
  ];

  const stationRunningStats = [
    { label: 'Platform Loading', value: '75%', color: '#ffa000' },
    { label: 'Cleanliness', value: '3/10', color: '#f00' }
  ];

  const carParkStats = [
    { label: 'Short Stay', value: '75%', color: '#ffa000' },
    { label: 'Main Car Park', value: '95%', color: '#f00' }
  ];

  // Departures data
  const departures = [
    {
      headcode: '1E05 - KGX',
      platform: '9',
      traction: 'IET - 9 car',
      notes: 'Coaches A B C very busy',
      dueIn: '13 minutes away - 10:00',
      status: 'warning' as const
    },
    {
      headcode: '1S07 - EDB',
      platform: '10',
      traction: 'IET - 9 car',
      notes: 'Limited catering',
      dueIn: '3 minutes away - 09:50',
      status: 'on-time' as const
    },
    {
      headcode: '1Y82 - KGX',
      platform: '6',
      traction: '225',
      notes: 'No reports',
      dueIn: 'Starts here - 10:02',
      status: 'on-time' as const
    },
    {
      headcode: '1E06 - KGX',
      platform: '9',
      traction: 'IET - 10 car',
      notes: 'Newcastle Fans travelling to KGX',
      dueIn: '64 minutes away - 10:51',
      status: 'delayed' as const
    }
  ];

  // Alerts data
  const initialAlerts = [
    {
      id: '1',
      title: 'Main Car Park becoming full',
      description: 'Expect passengers may miss their booked train',
      hasResolveButton: false
    },
    {
      id: '2',
      title: 'Platform 3 becoming overcrowded',
      description: '80% capacity - consider redirecting passengers, next London 10:02 Plt. 6',
      hasResolveButton: true
    },
    {
      id: '3',
      title: 'Bin outside Main Entrance 85% full',
      description: 'Deploy cleaners',
      hasResolveButton: true
    },
    {
      id: '4',
      title: 'First Class Lounge cleanliness declining',
      description: 'Moderate trash detected, inspection recommended',
      hasResolveButton: true
    }
  ];

  // Map markers data
  const mapMarkers = [
    {
      id: '1',
      type: 'warning' as const,
      style: { top: '120px', left: '150px' }
    },
    {
      id: '2',
      type: 'danger' as const,
      style: { top: '200px', left: '300px' }
    },
    {
      id: '3',
      type: 'warning' as const,
      style: { top: '250px', left: '100px' }
    }
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Gotham:wght@300;400;700&display=swap"
      />
      <div className="flex min-h-screen bg-white max-md:flex-col">
        <Sidebar />
        <main className="flex-1 px-5 py-0 max-md:px-2.5 max-md:py-0">
          <Header 
            stationName="York" 
            time={currentTime} 
            userName="Jamie Smith" 
            userRole="Team Leader" 
          />
          
          <div className="flex gap-10 mx-0 my-5 max-md:flex-col max-md:gap-5 max-sm:gap-2.5">
            <StatCard title="Right Time Deps" stats={rightTimeStats} />
            <StatCard title="Station Running" stats={stationRunningStats} />
            <StatCard title="Car Park" stats={carParkStats} />
          </div>
          
          <DeparturesTable departures={departures} />
          
          
<div className="flex gap-15 max-md:flex-col">
  <div className="flex-1">
    <AlertsPanel initialAlerts={initialAlerts} />
  </div>
  <div className="flex-1">
    <StationMap markers={mapMarkers} />
  </div>
</div>
        </main>
      </div>
    </>
  );
};

export default Index;
