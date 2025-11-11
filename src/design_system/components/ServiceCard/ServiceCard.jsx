import React from 'react';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton.jsx';

export const ServiceCard = ({ 
  title, 
  description, 
  imageSrc, 
  reverse = false, 
  ctaLabel, 
  onCTAClick, 
  className = '' 
}) => (
  <div className={`
    flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
    items-center gap-8 py-12 px-6 md:px-12 bg-white
    ${className}
  `}>
    {/* Image Column */}
    <div className="flex-1 w-full">
      <img 
        src={imageSrc} 
        alt={title || ''} 
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>

    {/* Text Column */}
    <div className="flex-1 flex flex-col justify-center">
      <h3 className="text-3xl font-bold mb-4 text-primaryDark">{title}</h3>
      <p className="text-base text-textPrimary mb-6 leading-relaxed">{description}</p>
      {ctaLabel && onCTAClick && (
        <PrimaryButton label={ctaLabel} onClick={onCTAClick} />
      )}
    </div>
  </div>
);
