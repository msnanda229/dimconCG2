import React from 'react';

/**
 * Card Component
 * A standardized enterprise card component that ensures consistent 
 * borders, shadows, padding, and hover states across the application.
 */
export const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl border border-slate-200 shadow-sm
        ${hover ? 'hover:shadow-enterprise-hover hover:-translate-y-1 transition-all duration-hover' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-6 pb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl md:text-2xl font-bold text-slate-900 leading-tight ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-sm md:text-base text-slate-500 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 flex items-center mt-auto ${className}`} {...props}>
    {children}
  </div>
);
