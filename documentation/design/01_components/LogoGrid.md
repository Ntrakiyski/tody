---
type: 'Reusable Component'
target_path: 'src/design_system/components/LogoGrid/LogoGrid.js'
status: 'Ready for Implementation'
Component: LogoGrid
---
# LogoGrid

## Visual Reference (Pixel Perfect Contract)
![Logo Grid – from Social Proof section](../assets/social-proof.png)

## Description
A responsive, wrapping grid that displays partner / technology logos.  
The design uses a `row` layout with `gap: 24px` and `wrap: true`.

## Props
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `logos` | `Array<{src:string, alt:string}>` | — | List of logo image objects |
| `maxHeight` | `string` | `'40px'` | Maximum height for each logo (keeps them uniform) |

## Production Code
Create `src/design_system/components/LogoGrid/LogoGrid.js`:

```javascript
import React from 'react';

export const LogoGrid = ({ logos, maxHeight = '40px' }) => (
  <div className="flex flex-wrap justify-center items-center gap-6">
    {logos.map(({ src, alt }, i) => (
      <img key={i} src={src} alt={alt} style={{ maxHeight }} className="opacity-80 hover:opacity-100 transition" />
    ))}
  </div>
);
```

