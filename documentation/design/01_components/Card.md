---
type: 'Reusable Component'
target_path: 'src/design_system/components/Card/Card.js'
status: 'Ready for Implementation'
Component: Card
---
# Card

## Visual Reference (Pixel Perfect Contract)
![Card – from USPs section](../assets/usps.png)

## Description
A generic card component used for USP blocks, project tiles, and experience entries.  
Supports an optional image, title, description, and a trailing action element.

## Props
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `imageSrc` | `string` | `null` | URL of the card image / illustration |
| `title` | `string` | `''` | Card headline |
| `description` | `string` | `''` | Body copy |
| `cta` | `ReactNode` | `null` | Optional CTA (e.g., button) |
| `className` | `string` | `''` | Extra Tailwind classes |

## Production Code
Create `src/design_system/components/Card/Card.js`:

```javascript
import React from 'react';
import { colors, spacing } from '../../tokens';

export const Card = ({ imageSrc, title, description, cta, className = '' }) => (
  <div className={`
    bg-white rounded-lg shadow-sm p-6 flex flex-col items-center
    ${className}
  `}>
    {imageSrc && <img src={imageSrc} alt={title} className="mb-4 w-full h-auto" />}
    {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
    {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
    {cta}
  </div>
);
```

