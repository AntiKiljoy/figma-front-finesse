import React from 'react';
import { MapMarker } from '../ui/MapMarker';

interface MapMarkerData {
  id: string;
  type: 'warning' | 'danger';
  style: React.CSSProperties;
}

interface StationMapProps {
  markers: MapMarkerData[];
}

export const StationMap: React.FC<StationMapProps> = ({ markers }) => {
  return (
    <section className="relative max-sm:hidden">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7b54e7791c5d40b4e3e42ad6edf89ecdc2046cc"
        className="w-full h-[410px] rounded-[0_0_12px_12px]"
        alt="Station Map"
      />
      <div className="absolute w-full h-full left-0 top-0">
        {markers.map((marker) => (
          <MapMarker 
            key={marker.id}
            type={marker.type}
            style={marker.style}
          />
        ))}
      </div>
    </section>
  );
};
