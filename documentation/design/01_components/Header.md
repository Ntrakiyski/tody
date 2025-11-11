---
type: 'Reusable Component'
target_path: 'src/design_system/components/Header/Header.js'
status: 'Ready for Implementation'
Component: Header
---
# Header

## Visual Reference (Pixel Perfect Contract)
![Header – from Hero section](../assets/hero.png)

## Description
The top navigation bar that sits inside the Hero frame.  
It contains the logo, primary navigation links, and a hamburger menu for mobile breakpoints.

## Props
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `logoSrc` | `string` | `'/assets/logo.svg'` | Path to the site logo |
| `navItems` | `Array<{label:string, href:string}>` | — | Navigation link list |
| `onMenuToggle` | `function` | — | Callback for opening the mobile drawer |

## Production Code
Create `src/design_system/components/Header/Header.js`:

```javascript
import React from 'react';
import { colors, spacing } from '../../tokens';

export const Header = ({ logoSrc, navItems, onMenuToggle }) => (
  <header className="flex items-center justify-between py-4 px-8 bg-white shadow-md">
    <img src={logoSrc} alt="Logo" className="h-8" />
    <nav className="hidden md:flex space-x-6">
      {navItems.map(item => (
        <a key={item.href} href={item.href} className="text-gray-700 hover:text-primary">
          {item.label}
        </a>
      ))}
    </nav>
    <button className="md:hidden" onClick={onMenuToggle}>
      {/* Hamburger icon */}
    </button>
  </header>
);
