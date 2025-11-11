---
type: 'Design Token Definition'
target_path: 'src/design_system/tokens/spacing.js'
status: 'Ready for Implementation'
---
# Spacing Tokens

## Description
Global spacing (margin / padding) values that match the layout grids used in the design.

## Tokens
| Token            | Value (px) | Usage |
|------------------|-----------|-------|
| `space-0`        | 0         | Reset |
| `space-4`        | 4         | Tiny gutters |
| `space-8`        | 8         | Small gutters |
| `space-16`       | 16        | Standard padding |
| `space-24`       | 24        | Section vertical spacing |
| `space-32`       | 32        | Column gaps |
| `space-40`       | 40        | Large vertical gaps |
| `space-64`       | 64        | Section separators |
| `space-96`       | 96        | Hero & CTA vertical padding |
| `radius-sm`      | 4px       | Small rounded corners |
| `radius-md`      | 8px       | Default component rounding |
| `radius-lg`      | 16px      | Cards, modals |
| `radius-xl`      | 24px      | Hero container, CTA card |

## Production Code
Create `src/design_system/tokens/spacing.js` with:

```javascript
// Target: src/design_system/tokens/spacing.js
export const spacing = {
  0: 0,
  4: 4,
  8: 8,
  16: 16,
  24: 24,
  32: 32,
  40: 40,
  64: 64,
  96: 96,
  radiusSm: '4px',
  radiusMd: '8px',
  radiusLg: '16px',
  radiusXl: '24px',
};
```

