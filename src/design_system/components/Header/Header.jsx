import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ logoSrc = '/assets/logo.svg', navItems = [], authActions = [] }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const ChevronDown = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  const renderNavItem = (item, index) => {
    if (item.dropdown) {
      const isProducts = item.label === 'Products';
      const isResources = item.label === 'Resources';

      return (
        <div key={index} className="relative group">
          <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors font-medium">
            <span>{item.label}</span>
            <ChevronDown />
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-[#1C1514] rounded-md shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            {isProducts && (
              <>
                <Link to="/products/overview" className="block px-4 py-2 text-white hover:bg-gray-700">Overview</Link>
                <Link to="/products/features" className="block px-4 py-2 text-white hover:bg-gray-700">Features</Link>
              </>
            )}
            {isResources && (
              <>
                <Link to="/resources/blog" className="block px-4 py-2 text-white hover:bg-gray-700">Blog</Link>
                <Link to="/resources/docs" className="block px-4 py-2 text-white hover:bg-gray-700">Documentation</Link>
              </>
            )}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={index}
        to={item.href}
        className="text-white hover:text-gray-300 transition-colors font-medium"
      >
        {item.label}
      </Link>
    );
  };

  const renderMobileNavItem = (item) => {
    const isProducts = item.label === 'Products';
    const isResources = item.label === 'Resources';
    const open = isProducts ? productsOpen : resourcesOpen;
    const setOpen = isProducts ? setProductsOpen : setResourcesOpen;

    return (
      <div key={item.label}>
        <button
          onClick={() => {
            if (item.dropdown) {
              setOpen(!open);
            } else {
              setMobileMenuOpen(false);
            }
          }}
          className="flex items-center justify-between w-full text-left text-white hover:text-gray-300 transition-colors font-medium py-2"
        >
          {item.label}
          {item.dropdown && <ChevronDown />}
        </button>
        {item.dropdown && (
          <div className={`ml-4 mt-2 space-y-2 ${open ? 'block' : 'hidden'}`}>
            {isProducts && (
              <>
                <Link to="/products/overview" className="block text-white hover:text-gray-300 py-1">Overview</Link>
                <Link to="/products/features" className="block text-white hover:text-gray-300 py-1">Features</Link>
              </>
            )}
            {isResources && (
              <>
                <Link to="/resources/blog" className="block text-white hover:text-gray-300 py-1">Blog</Link>
                <Link to="/resources/docs" className="block text-white hover:text-gray-300 py-1">Documentation</Link>
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderAuthActions = () => (
    <div className="flex items-center space-x-4 ml-8">
      {authActions.map((action, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            action.variant === 'tertiaryGray'
              ? 'text-gray-300 hover:text-white border border-gray-600'
              : 'bg-[#7F56D9] text-white hover:bg-[#7F56D9]/90 shadow-sm'
          }`}
        >
          {action.label}
        </button>
      ))}
    </div>
  );

  return (
    <header className="w-full bg-transparent text-white py-4 px-6 md:px-12 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center space-x-8">
            {navItems.map(renderNavItem)}
          </nav>
          {authActions.length > 0 && renderAuthActions()}
        </div>

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
        <nav className="md:hidden mt-4 flex flex-col space-y-4 bg-[#1C1514] p-6 rounded-lg">
          {navItems.map(renderMobileNavItem)}
          {authActions.length > 0 && (
            <div className="border-t border-gray-600 pt-4 mt-4 space-y-2">
              {authActions.map((action, index) => (
                <button
                  key={index}
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                    action.variant === 'tertiaryGray'
                      ? 'text-gray-300 hover:text-white border border-gray-600'
                      : 'bg-[#7F56D9] text-white hover:bg-[#7F56D9]/90 shadow-sm'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      )}
    </header>
  );
};
