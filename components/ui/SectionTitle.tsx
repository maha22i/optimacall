import React from 'react';

interface SectionTitleProps {
  preTitle?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  preTitle,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  const alignmentClasses = centered ? 'text-center' : '';
  
  return (
    <div className={`mb-12 ${alignmentClasses} ${className}`}>
      {preTitle && (
        <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2 animate-fade-in">
          {preTitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-100">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
