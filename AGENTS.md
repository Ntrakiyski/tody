# AGENTS.md — Portfolio Website Project

## 🎯 Project Vision

A modern, scalable portfolio website for **Gloria Rusenova** showcasing projects, experience, and design work. Built with a comprehensive design system foundation that enables consistent UI, easy maintenance, and future expansion.

## 🏗️ Architecture

### Technology Stack
- **Framework**: React 19
- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS 3.x with custom theme
- **Routing**: React Router DOM v6+
- **Font**: Inter (Google Fonts)
- **Assets**: Lorem Picsum API for placeholders

### Core Principles
1. **Design System First**: All UI built from reusable tokens and components
2. **Scalability**: Template-based pages (4 projects + 4 experiences)
3. **Performance**: Optimized builds, lazy loading where appropriate
4. **Maintainability**: Clear folder structure, documented components
5. **Accessibility**: Semantic HTML, keyboard navigation, ARIA where needed

## 📁 Project Structure

```
tody/
├── documentation/
│   └── design/
│       ├── 00_system/          # Design tokens (colors, spacing, typography)
│       ├── 01_components/      # Component specifications
│       └── 02_pages/           # Page layout blueprints
├── public/
│   └── assets/                 # Static assets (images, icons, illustrations)
├── src/
│   ├── design_system/
│   │   ├── tokens/            # JS token exports
│   │   │   ├── colors.js
│   │   │   ├── spacing.js
│   │   │   ├── typography.js
│   │   │   └── index.js
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Buttons/
│   │   │   ├── Header/
│   │   │   ├── Card/
│   │   │   ├── ProjectCard/
│   │   │   ├── ServiceCard/
│   │   │   ├── CTAContainer/
│   │   │   ├── LogoGrid/
│   │   │   ├── Footer/
│   │   │   └── index.js
│   │   └── assets/            # Design system specific assets
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── ProjectsPage.js    # Template for 4 projects
│   │   ├── ExperiencePage.js  # Template for 4 experiences
│   │   └── NotFoundPage.js
│   ├── App.jsx                # Route definitions
│   ├── main.jsx               # App entry + Router wrapper
│   └── index.css              # Tailwind directives + global styles
├── tailwind.config.js         # Custom theme configuration
├── postcss.config.js
├── vite.config.js
├── package.json
├── AGENTS.md                  # This file
└── README.md
```

## 🎨 Design System

### Token Hierarchy
**Colors** → **Spacing** → **Typography** → **Components** → **Pages**

Tokens are defined in two places:
1. **JS exports** (`src/design_system/tokens/*.js`) for programmatic access
2. **Tailwind theme** (`tailwind.config.js`) for utility classes

### Color Palette
| Token | Hex/RGBA | Usage |
|-------|----------|-------|
| `white` | `#FFFFFF` | Backgrounds, surfaces |
| `black` | `#000000` | Text, icons |
| `primaryDark` | `#1C1514` | Hero background, dark sections |
| `lightGray` | `#F7F4ED` | Light surfaces, cards |
| `textPrimary` | `#475467` | Body copy |
| `cardDark` | `#2B2A2A` | Dark card background |
| `ctaBackground` | `#212121` | CTA container |
| `footerBg` | `#0C111D` | Footer background |
| `grayLight` | `#F2F4F7` | Section backgrounds |
| `accentOrange` | `#F38301` | Accent elements, highlights |
| `transparentOrange` | `rgba(243,131,0,0.16)` | Overlays, shadows |
| `transparentOrangeStrong` | `rgba(243,131,0,0.56)` | Border/outline accents |

### Spacing Scale
`0`, `4`, `8`, `16`, `24`, `32`, `40`, `64`, `96` (pixels)

**Border Radius:**
- `sm`: 4px
- `md`: 8px
- `lg`: 16px
- `xl`: 24px

### Typography
**Font Family**: Inter (weights: 400, 500, 600, 700)

**Styles:**
- `bodyMdMedium`: 16px / 500 / 1.5em line-height
- `headingLgBold`: 32px / 700 / 1.25em
- `headingMdSemibold`: 24px / 600 / 1.33em
- `buttonSmBold`: 14px / 600 / 1.4em
- `captionXsRegular`: 12px / 400 / 1.4em

## 🧩 Component Library

### Atomic Components
- **Button**: Generic button with variants (primary, secondary, ghost)
- **PrimaryButton**: Specialized CTA button

### Layout Components
- **Header**: Site-wide navigation (logo + nav items)
- **Footer**: Site-wide footer (nav groups, social links, copyright)

### Content Components
- **Card**: Generic card (image, title, description, optional CTA)
- **ProjectCard**: Extends Card with "Read case study" link
- **ServiceCard**: Two-column layout (image + text, reversible)
- **CTAContainer**: Dark hero-style CTA block
- **LogoGrid**: Responsive logo/partner grid

## 📄 Page Templates

### HomePage (`/`)
**Sections:**
1. Hero (Header + headline + CTA)
2. Social Proof (LogoGrid)
3. USPs (3x Card)
4. Projects Preview (3x ProjectCard)
5. About Me (Card)
6. Experiences Preview (3x Card)
7. CTA Block (CTAContainer)
8. Services (2x ServiceCard, alternating layout)
9. Footer

### ProjectsPage (`/projects`)
**Template for 4 individual projects**
**Sections:**
1. Hero (project-specific headline)
2. USPs (metrics/outcomes)
3. Feature Cards (key capabilities)
4. Pricing/Value Cards
5. Tech Stack (Button list)
6. Contact CTA
7. Final CTA
8. Footer

### ExperiencePage (`/experience`)
**Template for 4 individual experiences**
**Sections:**
1. Hero (role/company headline)
2. Social Proof
3. Highlights (In a nutshell cards)
4. Experience Detail (large card)
5. Selected Work (showcase)
6. Framework/Methodology Cards
7. Case Study (optional)
8. Contact CTA
9. Footer

## 🚀 Development Workflow

### PR Process (Organization Rules)
1. **Always build before creating PR**: Run `npm run build` and verify success
2. **Always create new PR for changes**: Never push directly to main
3. **Branch naming**: `codegen-bot/{feature-description}-{hash}`
4. **Commit messages**: Descriptive, co-author info added automatically

### Build Commands
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

### Implementation Order
1. ✅ Foundation (Tailwind + tokens)
2. ✅ Atomic components (Button, Header)
3. ✅ Content components (Card variants, CTA, Footer)
4. ✅ Routing setup (React Router)
5. ✅ Page templates (Home, Projects, Experience)
6. ⏳ Content population (4 projects + 4 experiences)
7. ⏳ Assets replacement (final images, logos, icons)
8. ⏳ Polish (animations, responsive fine-tuning, accessibility)

## 🎯 Future Enhancements

### Phase 2 (Post-MVP)
- **CMS Integration**: Headless CMS for content management (Sanity, Contentful, or Strapi)
- **Dark Mode Toggle**: System preference + manual override
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Blog Section**: MDX support for case study deep-dives
- **Contact Form**: Netlify Forms or form service integration

### Phase 3 (Advanced)
- **i18n**: Multi-language support (react-i18next)
- **Analytics**: Privacy-friendly analytics (Plausible or Fathom)
- **Performance**: Image optimization (WebP, lazy loading, blur-up)
- **Testing**: Vitest for unit tests, Playwright for E2E
- **SEO**: Meta tags, Open Graph, JSON-LD structured data

## 🤝 Contribution Guidelines

### Code Style
- **JavaScript**: Modern ES6+ syntax, functional components with hooks
- **CSS**: Tailwind utility-first, custom classes only when necessary
- **Imports**: Absolute imports from `src/` via aliases (if configured)
- **Props**: PropTypes or TypeScript (future consideration)

### Component Conventions
- One component per file
- Named exports for components
- Default exports for pages
- Co-located styles (Tailwind classes inline)
- Barrel exports (`index.js`) for clean imports

### Asset Management
- **Placeholder images**: Lorem Picsum API (e.g., `https://picsum.photos/800/600`)
- **Icons**: Inline SVG or Heroicons (if needed)
- **Logo**: SVG format in `public/assets/logo.svg`
- **Illustrations**: SVG when possible, optimized PNG/WebP fallback

### Responsive Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 📊 Success Metrics

### Technical
- ✅ Build passes without errors
- ✅ No console warnings in development
- ✅ Lighthouse score 90+ (Performance, Accessibility, Best Practices)
- ✅ Mobile-first responsive design

### Design System
- ✅ All components use design tokens
- ✅ Consistent spacing, typography, colors throughout
- ✅ Reusable components with clear prop APIs
- ✅ Documented component usage

### User Experience
- ✅ Fast initial load (<3s on 3G)
- ✅ Smooth navigation transitions
- ✅ Keyboard accessible
- ✅ Screen reader friendly

## 🔗 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router v6 Guide](https://reactrouter.com/en/main)
- [Vite Guide](https://vitejs.dev/guide/)
- [Inter Font (Google Fonts)](https://fonts.google.com/specimen/Inter)
- [Lorem Picsum](https://picsum.photos/) — Placeholder images

---

**Last Updated**: 2025-11-11  
**Maintainer**: Codegen AI Agent  
**Owner**: Gloria Rusenova

