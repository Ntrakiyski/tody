import React from 'react';

export const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '' 
}) => {
  const baseStyles = 'font-inter font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-accentOrange text-white hover:bg-opacity-90 focus:ring-accentOrange',
    secondary: 'bg-primaryDark text-white hover:bg-opacity-90 focus:ring-primaryDark',
    ghost: 'bg-transparent text-textPrimary border border-textPrimary hover:bg-grayLight focus:ring-textPrimary',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabledStyles}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

