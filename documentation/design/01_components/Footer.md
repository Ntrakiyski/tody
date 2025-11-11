---
type: 'Reusable Component'
target_path: 'src/design_system/components/Footer/Footer.js'
status: 'Ready for Implementation'
Component: Footer
---
# Footer

## Visual Reference (Pixel Perfect Contract)
![Footer – from Footer instance](../assets/footer.png)

## Description
Site‑wide footer with navigation links, social icons, and copyright text.  
Implemented as a Figma component instance (`Large 02 / Default / Desktop`).

## Props
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `navGroups` | `Array<{title:string, links:Array<{label:string, href:string}>}>` | — | Column groups of footer links |
| `socialLinks` | `Array<{icon:string, href:string}>` | — | Social media icons (SVG filenames) |
| `copyright` | `string` | `'© 2025 Your Name'` | Footer copy |

## Production Code
Create `src/design_system/components/Footer/Footer.js`:

```javascript
import React from 'react';

export const Footer = ({ navGroups, socialLinks, copyright }) => (
  <footer className="bg-footerBg text-gray-300 py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {navGroups.map(group => (
        <div key={group.title}>
          <h4 className="font-semibold mb-2">{group.title}</h4>
          <ul>
            {group.links.map(link => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex space-x-4">
        {socialLinks.map(item => (
          <a key={item.href} href={item.href}>
            <img src={`/assets/${item.icon}`} alt={item.icon} className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
    <p className="text-center mt-8 text-sm">{copyright}</p>
  </footer>
);
```

