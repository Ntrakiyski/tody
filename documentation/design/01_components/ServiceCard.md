---
type: 'Reusable Component'
target_path: 'src/design_system/components/ServiceCard/ServiceCard.js'
status: 'Ready for Implementation'
Component: ServiceCard
---
# ServiceCard

## Visual Reference (Pixel Perfect Contract)
![Service Card – from Services section](../assets/services.png)

## Description
Represents a single service offering. The layout can be switched via the `reverse` prop (image left / right).

## Props
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `''` | Service headline |
| `description` | `string` | `''` | Detailed copy |
| `imageSrc` | `string` | `''` | Illustration / screenshot |
| `reverse` | `boolean` | `false` | If `true`, image appears on the left and text on the right |
| `ctaLabel` | `string` | `null` | Optional button text |
| `onCTAClick` | `function` | `null` | Button click handler |

## Production Code
Create `src/design_system/components/ServiceCard/ServiceCard.js`:

```javascript
import React from 'react';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

export const ServiceCard = ({
  title,
  description,
  imageSrc,
  reverse = false,
  ctaLabel,
  onCTAClick,
}) => (
  <section className={`flex flex-col md:flex-${reverse ? 'row-reverse' : 'row'} items-center gap-8 py-12`}>
    <img src={imageSrc} alt={title} className="w-full md:w-1/2 rounded-lg" />
    <div className="md:w-1/2 text-center md:text-left">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="mb-6">{description}</p>
      {ctaLabel && (
        <PrimaryButton label={ctaLabel} onClick={onCTAClick} />
      )}
    </div>
  </section>
);
```

