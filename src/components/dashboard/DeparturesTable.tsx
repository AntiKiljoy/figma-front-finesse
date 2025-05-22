import React from 'react';

interface Departure {
  headcode: string;
  platform: string;
  traction: string;
  notes: string;
  dueIn: string;
  status: 'on-time' | 'delayed' | 'warning';
}

interface DeparturesTableProps {
  departures: Departure[];
}

export const DeparturesTable: React.FC<DeparturesTableProps> = ({ departures }) => {
  const getStatusColor = (status: Departure['status']) => {
    switch (status) {
      case 'on-time': return '#388e3c';
      case 'warning': return '#ffa000';
      case 'delayed': return '#f00';
      default: return 'inherit';
    }
  };

  return (
    <section className="mx-0 my-5">
      <h2 className="text-white text-2xl font-bold bg-[#d50032] px-0.5 py-1.5">
        Departures
      </h2>
      <div className="bg-[rgba(217,217,217,0.79)] max-md:overflow-x-auto">
        <div className="grid grid-cols-[1fr_1fr_1fr_2fr_1fr] text-2xl p-2.5">
          <div>Headcode</div>
          <div>Platform</div>
          <div>Traction</div>
          <div>Notes</div>
          <div>Due in</div>
        </div>
        
        {departures.map((departure, index) => (
          <div key={index} className="grid grid-cols-[1fr_1fr_1fr_2fr_1fr] text-base p-2.5">
            <div>{departure.headcode}</div>
            <div>{departure.platform}</div>
            <div>{departure.traction}</div>
            <div>{departure.notes}</div>
            <div style={{ color: getStatusColor(departure.status) }}>
              {departure.dueIn}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
