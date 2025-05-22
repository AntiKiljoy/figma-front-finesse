import React from 'react';

interface ResolveButtonProps {
  onClick: () => void;
}

export const ResolveButton: React.FC<ResolveButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="text-white text-2xl rounded cursor-pointer bg-[#ff6b00] px-3 py-0.5 border-[none]"
    >
      Resolve
    </button>
  );
};
