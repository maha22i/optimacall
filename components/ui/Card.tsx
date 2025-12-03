import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glass = false,
  ...rest
}) => {
  const baseClasses = 'rounded-2xl overflow-hidden';
  const hoverClasses = hover ? 'card-hover' : '';
  const glassClasses = glass ? 'glass' : 'bg-white shadow-lg';
  
  return (
    <div className={`${baseClasses} ${glassClasses} ${hoverClasses} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
