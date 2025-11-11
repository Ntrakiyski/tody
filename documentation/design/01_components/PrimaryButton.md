---
type: 'Reusable Component'
target_path: 'src/design_system/components/PrimaryButton/PrimaryButton.js'
status: 'Ready for Implementation'
Component: PrimaryButton
---
# PrimaryButton

## Visual Reference (Pixel Perfect Contract)
![Primary Button – from CTA section](../assets/cta.png)

## Description
The main call‑to‑action button used throughout the site (hero, CTA, service cards).

## Props
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Button text |
| `onClick` | `function` | — | Click handler |
| `type` | `string` | `'button'` | HTML button type |
| `className` | `string` | `''` | Additional Tailwind classes |

## Production Code
Create `src/design_system/components/PrimaryButton/PrimaryButton.js`:

```javascript
import React from 'react';
import { colors, spacing } from '../../tokens';

export const PrimaryButton = ({ label, onClick, type = 'button', className = '' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`
      bg-primary text-white py-2 px-6 rounded-md
      hover:bg-primary-dark transition
      ${className}
    `}
  >
    {label}
  </button>
);
```

