import React from 'react';

export const LogoGrid = ({ logos = [], maxHeight = 48, className = '' }) => (
  <div className={`
    container mx-auto px-6
    grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8
    items-center justify-items-center
    ${className}
  `}>
    {logos.map((logo, index) => (
      <img
        key={index}
        src={logo.src}
        alt={logo.alt || `Logo ${index + 1}`}
        className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        style={{ maxHeight: `${maxHeight}px`, width: 'auto' }}
      />
    ))}
  </div>
);

