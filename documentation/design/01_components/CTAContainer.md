---
type: 'Reusable Component'
target_path: 'src/design_system/components/CTAContainer/CTAContainer.js'
status: 'Ready for Implementation'
Component: CTAContainer
---
# CTAContainer

## Visual Reference (Pixel Perfect Contract)
![CTA Container – from CTA section](../assets/cta.png)

## Description
A centered container with a dark background, optional illustration, headline, sub‑copy and a primary button.

## Props
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `''` | Main headline |
| `subtitle` | `string` | `''` | Supporting text |
| `buttonLabel` | `string` | `'Get Started'` | CTA button text |
| `onButtonClick` | `function` | `null` | Button click handler |
| `illustrationSrc` | `string` | `null` | Optional side‑image |

## Production Code
Create `src/design_system/components/CTAContainer/CTAContainer.js`:

```javascript
import React from 'react';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

export const CTAContainer = ({
  title,
  subtitle,
  buttonLabel = 'Get Started',
  onButtonClick,
  illustrationSrc,
}) => (
  <section className="bg-ctaBackground text-white py-24 flex flex-col md:flex-row items-center justify-center gap-12">
    {illustrationSrc && (
      <img src={illustrationSrc} alt="" className="w-64 h-auto" />
    )}
    <div className="max-w-lg text-center md:text-left">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="mb-6">{subtitle}</p>
      <PrimaryButton label={buttonLabel} onClick={onButtonClick} />
    </div>
  </section>
);
```

