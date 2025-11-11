---
type: 'Page Layout'
target_path: 'src/pages/ProjectsPage.js'
status: 'Ready for Implementation'
---
# Projects Page

## Visual Reference (Pixel Perfect Contract)
![Full Projects page](/assets/projects-page.png)

## Section Breakdown
| # | Section (Figma name) | Node ID | Component(s) | Description |
|---|----------------------|---------|--------------|-------------|
| 1 | **Hero header** | `3925:17180` | `Header`, `PrimaryButton` | Top‑fold hero with headline "RAG – Document Q&A System", background image, navigation bar and primary CTA. |
| 2 | **USPs** | `3925:17182` | `Card` (×3) | Three‑column block highlighting "Saving $2.7M Annually", "92 % Precision", "89 % Recall". |
| 3 | **Projects / Features** | `3925:17192` | `Card` (×3) | Grid of three feature cards (two‑step retrieval, custom evaluation framework, real‑time Q&A interface). |
| 4 | **Pricing / Value** | `3925:17273` | `Card` (×2) | Two pricing‑tier cards (Quantifiable Outcomes, Business Value) with badge, heading & bullet list. |
| 5 | **Tech Stack CTA** | `3925:17489` | `Button` (×12) | Horizontal list of technology‑stack buttons (Python, OpenAI API, Cohere, LanceDB, etc.). |
| 6 | **About Me / Contact CTA** | `3925:17614` | `CTAContainer` | Dark‑background block with headline "Interested in My Approach to ML Problem‑Solving?" and action buttons (Email, LinkedIn, GitHub, Resume). |
| 7 | **Final CTA** | `3925:17657` | `CTAContainer` | Re‑uses the same CTA component as the Home page (different copy & illustration). |

> **Note:** All visual assets (illustrations, icons, background images) are stored in `src/design_system/assets/`. Replace the placeholder paths in the component blueprints with the final exported assets.

## Component Composition (ordered top‑to‑bottom)

| Section | Component | Screenshot (optional) |
|---------|-----------|-----------------------|
| Hero header | `Header` → `PrimaryButton` | (see `hero.png`) |
| USPs | `Card` (x3) | (see `usps.png`) |
| Projects / Features | `Card` (x3) | (see `projects.png`) |
| Pricing / Value | `Card` (x2) | (see `pricing.png`) |
| Tech Stack CTA | `Button` (x12) – uses the generic `Button` component from the design system | (see `tech-stack.png`) |
| About Me / Contact CTA | `CTAContainer` | (see `cta.png`) |
| Final CTA | `CTAContainer` (re‑used) | (see `cta-2.png`) |

## Page Assembly Code
Create `src/pages/ProjectsPage.js` with the following skeleton (feel free to adjust classNames or Tailwind utilities to match the exact spacing from the design):

```javascript
// Target: src/pages/ProjectsPage.js
import React from 'react';
import { Header } from '../design_system/components/Header/Header';
import { PrimaryButton } from '../design_system/components/PrimaryButton/PrimaryButton';
import { Card } from '../design_system/components/Card/Card';
import { CTAContainer } from '../design_system/components/CTAContainer/CTAContainer';
import { Button } from '../design_system/components/Buttons/Button'; // generic button used in tech‑stack list

export const ProjectsPage = () => (
  <main className="font-inter">

    {/* ---- Hero ---- */}
    <section className="bg-primaryDark text-white py-24 flex flex-col items-center">
      <Header logoSrc="/assets/logo.svg" navItems={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '#projects' },
        { label: 'About', href: '#about' },
      ]} />
      <h1 className="text-5xl font-bold mt-12 mb-6">RAG – Document Q&A System</h1>
      <p className="mb-8 max-w-2xl text-center">
        Reduced information retrieval time by 85% while achieving 92% answer accuracy
        through a custom RAG pipeline with advanced evaluation framework.
      </p>
      <PrimaryButton label="Explore the System" onClick={() => document.getElementById('usps').scrollIntoView({ behavior: 'smooth' })} />
    </section>

    {/* ---- USPs ---- */}
    <section id="usps" className="py-16 bg-lightGray">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        <Card
          title="$2.7M"
          description="Annual Savings"
          imageSrc="/assets/usps-1.svg"
        />
        <Card
          title="92 %"
          description="Precision"
          imageSrc="/assets/usps-2.svg"
        />
        <Card
          title="89 %"
          description="Recall"
          imageSrc="/assets/usps-3.svg"
        />
      </div>
    </section>

    {/* ---- Projects / Feature Cards ---- */}
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        <Card
          title="Two‑step Retrieval"
          description="Vector embeddings (OpenAI) + LanceDB for semantic search"
          imageSrc="/assets/feature-1.svg"
        />
        <Card
          title="Custom Evaluation Framework"
          description="Precision, Recall, and MRR metrics for continuous improvement"
          imageSrc="/assets/feature-2.svg"
        />
        <Card
          title="Real‑time Q&A Interface"
          description="Source attribution with 200 ms avg response time"
          imageSrc="/assets/feature-3.svg"
        />
      </div>
    </section>

    {/* ---- Pricing / Value Cards ---- */}
    <section id="pricing" className="py-16 bg-lightGray">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <Card
          title="Quantifiable Outcomes"
          description="Saving $2.7M annually, 84 % fraud caught, 75 % alert accuracy"
          imageSrc="/assets/pricing-1.svg"
        />
        <Card
          title="Business Value"
          description="8 % time saved per employee per week, 98 % user satisfaction"
          imageSrc="/assets/pricing-2.svg"
        />
      </div>
    </section>

    {/* ---- Tech Stack CTA (buttons) ---- */}
    <section id="tech-stack" className="py-16 bg-white">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <Button>Python</Button>
        <Button>OpenAI API</Button>
        <Button>Cohere</Button>
        <Button>LanceDB</Button>
        <Button>Reflex</Button>
        <Button>FastAPI</Button>
        <Button>Git</Button>
        {/* …add the remaining buttons as needed… */}
      </div>
    </section>

    {/* ---- About Me / Contact CTA ---- */}
    <section id="about" className="py-24 bg-primaryDark flex justify-center">
      <CTAContainer
        title="Interested in My Approach to ML Problem‑Solving?"
        subtitle="I'm currently seeking opportunities in:"
        buttonLabel="Email Me"
        onButtonClick={() => window.location.href = 'mailto:ntrakiyski@gmail.com'}
        illustrationSrc="/assets/cta-illustration.svg"
      />
    </section>

    {/* ---- Final CTA (re‑used) ---- */}
    <section className="py-24 bg-white flex justify-center">
      <CTAContainer
        title="Ready to collaborate?"
        subtitle="Let's build something amazing together."
        buttonLabel="Get in Touch"
        onButtonClick={() => window.location.href = '/contact'}
        illustrationSrc="/assets/cta-illustration-2.svg"
      />
    </section>

  </main>
);
```

