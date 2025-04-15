import React from "react";

interface BarChartIconProps {
  className?: string;
}

const BarChartIcon: React.FC<BarChartIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <line x1="10" y1="18" x2="10" y2="6"></line>
      <line x1="14" y1="18" x2="14" y2="10"></line>
      <line x1="6" y1="18" x2="6" y2="14"></line>
      <line x1="18" y1="18" x2="18" y2="4"></line>
    </svg>
  );
};

export default BarChartIcon; 