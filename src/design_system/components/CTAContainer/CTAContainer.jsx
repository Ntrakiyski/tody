import React from 'react';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton.jsx';

export const CTAContainer = ({ 
  title, 
  subtitle, 
  buttonLabel, 
  onButtonClick, 
  illustrationSrc, 
  className = '' 
}) => (
  <section className={`
    bg-ctaBackground text-white py-24 px-6
    flex flex-col items-center justify-center text-center
    ${className}
  `}>
    {illustrationSrc && (
      <img 
        src={illustrationSrc} 
        alt="" 
        className="mb-8 w-auto h-32 md:h-48"
      />
    )}
    
    <h2 className="text-4xl font-bold mb-4 max-w-3xl">{title}</h2>
    
    {subtitle && (
      <p className="text-lg mb-8 max-w-2xl text-gray-300">{subtitle}</p>
    )}
    
    {buttonLabel && onButtonClick && (
      <PrimaryButton label={buttonLabel} onClick={onButtonClick} />
    )}
  </section>
);
