---
type: 'Design Token Definition'
target_path: 'src/design_system/tokens/typography.js'
status: 'Ready for Implementation'
---
# Typography Tokens

## Description
Font‑style definitions pulled from the design's text styles.

## Tokens
| Token            | Font‑Family | Weight | Size (px) | Line‑Height | Letter‑Spacing | Usage |
|------------------|------------|--------|-----------|-------------|----------------|-------|
| `bodyMdMedium`   | Inter      | 500    | 16        | 1.5 em      | 0 px           | Paragraphs, body copy |
| `headingLgBold`  | Inter      | 700    | 32        | 1.25 em    | 0 px           | Main headings |
| `headingMdSemibold` | Inter  | 600    | 24        | 1.33 em    | 0 px           | Sub‑headings |
| `buttonSmBold`   | Inter      | 600    | 14        | 1.4 em      | 0 px           | Button text |
| `captionXsRegular` | Inter    | 400    | 12        | 1.4 em      | 0 px           | Captions, footnotes |

## Production Code
Create `src/design_system/tokens/typography.js` with:

```javascript
// Target: src/design_system/tokens/typography.js
export const typography = {
  bodyMdMedium: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '1.5em',
  },
  headingLgBold: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '1.25em',
  },
  headingMdSemibold: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '1.33em',
  },
  buttonSmBold: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '1.4em',
  },
  captionXsRegular: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '1.4em',
  },
};
```

