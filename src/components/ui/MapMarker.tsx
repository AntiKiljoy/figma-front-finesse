import React from 'react';

type MarkerType = 'warning' | 'danger';

interface MapMarkerProps {
  type: MarkerType;
  style?: React.CSSProperties;
}

export const MapMarker: React.FC<MapMarkerProps> = ({ type, style }) => {
  const fillColor = type === 'warning' ? '#E2E912' : '#FF0000';
  const fillOpacity = type === 'warning' ? '0.39' : '0.55';
  const color = type === 'warning' ? '#ffa000' : '#f00';
  
  return (
    <div>
      <svg 
        width="22" 
        height="22" 
        viewBox="0 0 22 22" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`map-marker ${type}`} 
        style={{ color, position: 'absolute', ...style }}
      >
        <circle 
          cx="11" 
          cy="11" 
          r="10" 
          fill={fillColor} 
          fillOpacity={fillOpacity} 
          stroke="black" 
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
