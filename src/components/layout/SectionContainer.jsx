import React from 'react';

/**
 * SectionContainer
 * A standardized wrapper component for all page sections.
 * Guarantees a consistent maximum width, responsive padding, 
 * and optional semantic HTML rendering.
 */
export const SectionWrapper = ({ 
  children, 
  className = '', 
  as: Tag = 'section',
  spacing = 'standard',
  ...props 
}) => {
  const getSpacingClass = () => {
    if (spacing === 'standard') return 'py-12 md:py-16 lg:py-24';
    if (spacing === 'none') return '';
    return spacing; 
  };

  return (
    <Tag className={`relative w-full ${getSpacingClass()} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export const SectionContent = ({ children, className = '', ...props }) => (
  <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`} {...props}>
    {children}
  </div>
);

// Keep default export for simple cases
const SectionContainer = ({ children, className = '', as = 'section', spacing = 'standard', ...props }) => (
  <SectionWrapper className={className} as={as} spacing={spacing} {...props}>
    <SectionContent>
      {children}
    </SectionContent>
  </SectionWrapper>
);

export default SectionContainer;
