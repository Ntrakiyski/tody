import React from 'react';

export const Card = ({ imageSrc, title, description, cta, className = '' }) => (
  <div className={`
    bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center
    hover:shadow-lg transition-shadow duration-200
    ${className}
  `}>
    {imageSrc && <img src={imageSrc} alt={title || ''} className="mb-6 w-full h-auto max-h-48 object-contain rounded-md" />}
    {title && <h3 className="text-2xl font-semibold mb-3 text-primaryDark">{title}</h3>}
    {description && <p className="text-base text-textPrimary mb-6 leading-relaxed">{description}</p>}
    {cta}
  </div>
);

