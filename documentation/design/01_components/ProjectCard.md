---
type: 'Reusable Component'
target_path: 'src/design_system/components/ProjectCard/ProjectCard.js'
status: 'Ready for Implementation'
Component: ProjectCard
---
# ProjectCard

## Visual Reference (Pixel Perfect Contract)
![Project Card – from Projects section](../assets/projects.png)

## Description
Specialised card for showcasing portfolio projects. Extends the generic `Card` with a "Read case study" link.

## Props
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `imageSrc` | `string` | `''` | Project thumbnail |
| `title` | `string` | `''` | Project name |
| `summary` | `string` | `''` | One‑line description |
| `link` | `string` | `'#'` | URL to the project detail page |

## Production Code
Create `src/design_system/components/ProjectCard/ProjectCard.js`:

```javascript
import React from 'react';
import { Card } from '../Card/Card';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

export const ProjectCard = ({ imageSrc, title, summary, link }) => (
  <Card
    imageSrc={imageSrc}
    title={title}
    description={summary}
    cta={<PrimaryButton label="Read case study" onClick={() => window.location.href = link} />}
  />
);
```

