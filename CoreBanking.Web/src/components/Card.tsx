import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false, glass = false, onClick }) => {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-200 border';
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5 cursor-pointer' : '';
  const glassStyles = glass
    ? 'bg-white/80 backdrop-blur-md border-slate-200/80 shadow-sm'
    : 'bg-white border-slate-200/80 card-shadow';

  return (
    <div 
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
