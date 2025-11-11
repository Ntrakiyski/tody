import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ logoSrc = '/assets/logo.svg', navItems = [] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent text-white py-4 px-6 md:px-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="Gloria Rusenova" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-white hover:text-accentOrange transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4 bg-primaryDark p-6 rounded-lg">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-accentOrange transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

