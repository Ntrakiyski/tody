import React from 'react';

export const PrimaryButton = ({ label, onClick, type = 'button', className = '' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`
      bg-accentOrange text-white py-3 px-8 rounded-md
      hover:bg-opacity-90 transition-all duration-200
      font-inter font-semibold text-base
      focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-2
      ${className}
    `}
  >
    {label}
  </button>
);

