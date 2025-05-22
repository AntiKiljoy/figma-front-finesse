import React, { useState } from 'react';
import { ResolveButton } from '../ui/ResolveButton';

interface Alert {
  id: string;
  title: string;
  description: string;
  hasResolveButton: boolean;
}

interface AlertsPanelProps {
  initialAlerts: Alert[];
}

export const AlertsPanel: React.FC<AlertsPanelProps> = ({ initialAlerts }) => {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);

  const handleResolve = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <section className="mx-0 my-5">
      <h2 className="text-white text-2xl font-bold bg-[#d50032] px-0.5 py-1.5">
        Alerts Panel ({alerts.length})
      </h2>
      <div className="flex flex-col gap-6">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-center gap-[34px] p-2.5 max-sm:flex-col max-sm:text-center max-sm:gap-2.5">
            <div className="w-[247px] text-xl p-0.5 max-sm:w-full">
              {alert.title}
            </div>
            <div className="w-[248px] text-base p-0.5 max-sm:w-full">
              {alert.description}
            </div>
            {alert.hasResolveButton && (
              <ResolveButton onClick={() => handleResolve(alert.id)} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
