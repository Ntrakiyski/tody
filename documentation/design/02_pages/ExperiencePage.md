---
type: 'Page Layout'
target_path: 'src/pages/ExperiencePage.js'
status: 'Ready for Implementation'
---
# Experience Page

## Visual Reference (Pixel Perfect Contract)
![Full Experience page](/assets/experience-page.png)

## Section Breakdown
| # | Section (Figma name)            | Node ID      | Component(s)                     | Description |
|---|--------------------------------|--------------|----------------------------------|-------------|
| 1 | **Hero header**                | `4088:8188`  | `Header`, `PrimaryButton`        | Hero with navigation, logo ("Fractals"), headline "Senior Product Designer at Tide", and a primary CTA. |
| 2 | **Social proof**               | `4082:6529`  | `LogoGrid`                       | Row of partner / technology logos with the label "Tech we work with". |
| 3 | **USPs / Highlights**          | `4088:21045` | `Card` (×3)                      | Three‑column "In a nutshell" block showing key impact metrics (e.g., "Cross‑functional squad", "Constant collaboration"). |
| 4 | **Experience detail**          | `4088:8203`  | `Card` (×1)                      | Large card summarising the role at Tide (headline + supporting copy). |
| 5 | **Selected work**              | `4088:21102` | `Card` (×1) + image background   | Showcase of portfolio items with heading "Selected Work". |
| 6 | **Communication Framework**   | `4141:7279`  | `Card` (×4) with icons & text   | Step‑by‑step description of a communication framework (Challenge → Goal → Result). |
| 7 | **Home‑page redesign**         | `4141:7534`  | `Card` (×1) + illustration       | Case‑study card with heading "Home Page Redesign". |
| 8 | **Final CTA**                  | `4088:8117`  | `CTAContainer`                   | Re‑used CTA block asking "Interested in My Approach to ML Problem‑Solving?" with contact buttons. |

> **All components referenced above are already present in the design system** (`src/design_system/components/...`). The only new visual assets are the screenshots listed at the top of this file.

## Component Composition (ordered top‑to‑bottom)

| Section | Component | Screenshot (optional) |
|---------|-----------|-----------------------|
| Hero header | `Header` → `PrimaryButton` | (see `hero.png`) |
| Social proof | `LogoGrid` | (see `social-proof.png`) |
| USPs / Highlights | `Card` (x3) | (see `usps.png`) |
| Experience detail | `Card` (x1) | (see `experience-detail.png`) |
| Selected work | `Card` (x1) + background image | (see `selected-work.png`) |
| Communication Framework | `Card` (x4) – each card uses an icon + text block | (see `communication-framework.png`) |
| Home‑page redesign | `Card` (x1) + illustration | (see `home-redesign.png`) |
| Final CTA | `CTAContainer` (re‑used) | (see `cta.png`) |

## Page Assembly Code
Create `src/pages/ExperiencePage.js` with the following skeleton (feel free to adjust Tailwind utilities to match exact spacing from the design):

```javascript
// Target: src/pages/ExperiencePage.js
import React from 'react';
import { Header } from '../design_system/components/Header/Header';
import { PrimaryButton } from '../design_system/components/PrimaryButton/PrimaryButton';
import { LogoGrid } from '../design_system/components/LogoGrid/LogoGrid';
import { Card } from '../design_system/components/Card/Card';
import { CTAContainer } from '../design_system/components/CTAContainer/CTAContainer';

export const ExperiencePage = () => (
  <main className="font-inter">

    {/* ---- Hero ---- */}
    <section className="bg-primaryDark text-white py-24 flex flex-col items-center">
      <Header logoSrc="/assets/logo.svg" navItems={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '#projects' },
        { label: 'About', href: '#about' },
      ]} />
      <h1 className="text-5xl font-bold mt-12 mb-6">
        Senior Product Designer at Tide
      </h1>
      <p className="mb-8 max-w-2xl text-center">
        Tide is transforming SME banking & business management with 1.6M+ members
        across the UK, India, Germany & France.
      </p>
      <PrimaryButton label="Read My Story" onClick={() => document.getElementById('usps').scrollIntoView({ behavior: 'smooth' })} />
    </section>

    {/* ---- Social Proof ---- */}
    <section className="py-12 bg-white">
      <h2 className="text-center text-xl font-medium mb-6">Tech we work with</h2>
      <LogoGrid logos={[
        { src: '/assets/logo-1.svg', alt: 'Logo 1' },
        { src: '/assets/logo-2.svg', alt: 'Logo 2' },
        // …add the rest of the partner logos…
      ]} />
    </section>

    {/* ---- USPs / Highlights ---- */}
    <section id="usps" className="py-16 bg-lightGray">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        <Card
          title="Cross‑functional squad"
          description="A team focused on initiatives that improve core product experience across all areas."
          imageSrc="/assets/usps-1.svg"
        />
        <Card
          title="Constant collaboration"
          description="Daily work with engineering, product, marketing and design to balance user needs with business goals."
          imageSrc="/assets/usps-2.svg"
        />
        <Card
          title="Impact‑driven design"
          description="Delivered measurable outcomes while navigating technical constraints."
          imageSrc="/assets/usps-3.svg"
        />
      </div>
    </section>

    {/* ---- Experience Detail ---- */}
    <section className="py-16 bg-white">
      <Card
        title="Senior Product Designer at Tide"
        description={`Tide is transforming SME banking & business management with 1.6M+ members across the UK, India, Germany & France.`}
        imageSrc="/assets/experience-detail.svg"
      />
    </section>

    {/* ---- Selected Work ---- */}
    <section className="py-16 bg-lightGray">
      <div className="relative">
        <img src="/assets/selected-work-bg.png" alt="Selected work background" className="w-full rounded-lg" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
          <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
          <p className="max-w-xl">
            Featured below are select projects from my broader portfolio. I drove end‑to‑end design across multiple products – from research and testing to data synthesis and strategic planning. Happy to dive deeper into specific work.
          </p>
        </div>
      </div>
    </section>

    {/* ---- Communication Framework ---- */}
    <section className="py-16 bg-white">
      <h2 className="text-center text-3xl font-semibold mb-8">Communication Framework</h2>
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* Challenge */}
        <Card
          title="The Challenge"
          description="Messages were being sent across multiple channels with no consistent structure, creating noise for users and complexity for teams."
          imageSrc="/assets/icon-challenge.svg"
        />
        {/* Goal */}
        <Card
          title="The Goal"
          description="Design a company‑wide framework for categorising, prioritising, and delivering messages based on urgency and whether action was required."
          imageSrc="/assets/icon-goal.svg"
        />
        {/* Result */}
        <Card
          title="What We Achieved"
          description="Mapped every message type, identified impact, and built a decision‑tree system that teams could use to determine priority, placement, timing, and format."
          imageSrc="/assets/icon-result.svg"
        />
        {/* Additional Detail (optional) */}
        {/* Add more cards here if needed */}
      </div>
    </section>

    {/* ---- Home‑Page Redesign ---- */}
    <section className="py-16 bg-lightGray">
      <h2 className="text-center text-3xl font-semibold mb-8">Home Page Redesign</h2>
      <div className="relative">
        <img src="/assets/home-redesign-bg.png" alt="Home redesign background" className="w-full rounded-lg" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
          <h3 className="text-2xl font-bold mb-2">The Challenge</h3>
          <p className="max-w-xl">
            The home page needed to surface the most important daily information for small‑business owners while balancing competing priorities from multiple product teams – all without overwhelming users.
          </p>
          <h3 className="text-2xl font-bold mt-6 mb-2">The Goal</h3>
          <p className="max-w-xl">
            Identify what businesses actually need to see each day and design a home page that prioritises those needs while accommodating stakeholder requirements across the organisation.
          </p>
          <h3 className="text-2xl font-bold mt-6 mb-2">What We Achieved</h3>
          <p className="max-w-xl">
            Through iterative research and testing, we identified the information that truly drove daily decisions and developed a prioritisation system that teams could use to deliver the right content at the right time.
          </p>
        </div>
      </div>
    </section>

    {/* ---- Final CTA (re‑used) ---- */}
    <section className="py-24 bg-white flex justify-center">
      <CTAContainer
        title="Interested in My Approach to ML Problem‑Solving?"
        subtitle="I'm currently seeking opportunities in:"
        buttonLabel="Email Me"
        onButtonClick={() => window.location.href = 'mailto:ntrakiyski@gmail.com'}
        illustrationSrc="/assets/cta-illustration.svg"
      />
    </section>

  </main>
);
```

