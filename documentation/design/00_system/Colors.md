---
type: 'Design Token Definition'
target_path: 'src/design_system/tokens/colors.js'
status: 'Ready for Implementation'
---
# Color Tokens

## Description
Defines the core colour palette extracted from the Figma design.

## Palette
| Token            | Hex / RGBA               | Usage |
|------------------|--------------------------|-------|
| `white`          | `#FFFFFF`                | Backgrounds, surfaces |
| `black`          | `#000000`                | Text, icons |
| `primaryDark`    | `#1C1514`                | Hero background, dark sections |
| `lightGray`      | `#F7F4ED`                | Light surfaces, cards |
| `textPrimary`    | `#475467`                | Body copy |
| `cardDark`       | `#2B2A2A`                | Dark card background |
| `ctaBackground`  | `#212121`                | CTA container |
| `footerBg`       | `#0C111D`                | Footer background |
| `grayLight`      | `#F2F4F7`                | Section backgrounds |
| `accentOrange`   | `#F38301`                | Accent elements, highlights |
| `transparentOrange` | `rgba(243,131,0,0.16)` | Overlays, shadows |
| `transparentOrangeStrong` | `rgba(243,131,0,0.56)` | Border/outline accents |

## Production Code
Create `src/design_system/tokens/colors.js` with:

```javascript
// Target: src/design_system/tokens/colors.js
export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  primaryDark: '#1C1514',
  lightGray: '#F7F4ED',
  textPrimary: '#475467',
  cardDark: '#2B2A2A',
  ctaBackground: '#212121',
  footerBg: '#0C111D',
  grayLight: '#F2F4F7',
  accentOrange: '#F38301',
  transparentOrange: 'rgba(243,131,0,0.16)',
  transparentOrangeStrong: 'rgba(243,131,0,0.56)',
};
```

