import React from 'react';

interface StatItem {
  label: string;
  value: string;
  color: string;
}

interface StatCardProps {
  title: string;
  stats: StatItem[];
}

export const StatCard: React.FC<StatCardProps> = ({ title, stats }) => {
  return (
    <section className="shadow-[6px_4px_4.4px_rgba(0,0,0,0.25)] min-w-[356px] bg-[#d9d9d9] rounded-md max-md:min-w-[unset]">
      <h2 className="text-white text-2xl font-bold bg-[#d50032] px-1 py-0.5">
        {title}
      </h2>
      <div className="flex justify-center gap-[74px] px-1 py-0 max-sm:flex-col max-sm:gap-2.5">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-2 px-0 py-2.5">
            <div className="text-xl">{stat.label}</div>
            <div className={`text-xl text-[${stat.color}] px-0.5 py-1.5`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
