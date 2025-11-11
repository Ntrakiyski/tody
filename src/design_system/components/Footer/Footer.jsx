import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = ({ navGroups = [], socialLinks = [], copyright = '', className = '' }) => (
  <footer className={`bg-footerBg text-white py-12 px-6 ${className}`}>
    <div className="container mx-auto">
      {/* Navigation Groups */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {navGroups.map((group, index) => (
          <div key={index}>
            <h4 className="font-semibold text-lg mb-4">{group.title}</h4>
            <ul className="space-y-2">
              {group.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-accentOrange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Links */}
      {socialLinks.length > 0 && (
        <div className="flex items-center justify-center gap-6 mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={`/assets/${social.icon}`} 
                alt={social.icon.replace('.svg', '')} 
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>
      )}

      {/* Copyright */}
      {copyright && (
        <div className="text-center text-gray-500 text-sm pt-6 border-t border-gray-700">
          {copyright}
        </div>
      )}
    </div>
  </footer>
);

