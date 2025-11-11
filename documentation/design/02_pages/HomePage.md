---
type: 'Page Layout'
target_path: 'src/pages/HomePage.js'
status: 'Ready for Implementation'
---
# HomePage

## Visual Reference (Pixel Perfect Contract)
![Full Home page](/assets/full-home.png)

## Component Composition (ordered top‑to‑bottom)

| Section | Component(s) | Screenshot |
|---------|--------------|------------|
| **Hero** | `Header`, `PrimaryButton` (inside hero) | ![Hero](/assets/hero.png) |
| **Social Proof** | `LogoGrid` | ![Social Proof](/assets/social-proof.png) |
| **USPs** | `Card` (x3) | ![USPs](/assets/usps.png) |
| **Projects** | `ProjectCard` (grid) | ![Projects](/assets/projects.png) |
| **About Me** | `Card` (large text block) | ![About Me](/assets/about-me.png) |
| **Experiences** | `ProjectCard` (re‑used as ExperienceCard) | ![Experiences](/assets/experiences.png) |
| **CTA** | `CTAContainer` | ![CTA](/assets/cta.png) |
| **Services** | `ServiceCard` (image on right) | ![Services](/assets/services.png) |
| **Services 2** | `ServiceCard` (`reverse=true`, image on left) | ![Services 2](/assets/services-2.png) |
| **Footer** | `Footer` | ![Footer](/assets/footer.png) |

## Page Assembly Code
Create `src/pages/HomePage.js`:

```javascript
import React from 'react';
import { Header } from '../design_system/components/Header/Header';
import { PrimaryButton } from '../design_system/components/PrimaryButton/PrimaryButton';
import { LogoGrid } from '../design_system/components/LogoGrid/LogoGrid';
import { Card } from '../design_system/components/Card/Card';
import { ProjectCard } from '../design_system/components/ProjectCard/ProjectCard';
import { CTAContainer } from '../design_system/components/CTAContainer/CTAContainer';
import { ServiceCard } from '../design_system/components/ServiceCard/ServiceCard';
import { Footer } from '../design_system/components/Footer/Footer';

// Mock data – replace with real content or CMS integration
const navItems = [{ label: 'Home', href: '/' }, { label: 'Projects', href: '#projects' }, { label: 'About', href: '#about' }];
const logoList = [
  { src: '/assets/logo1.svg', alt: 'Tech 1' },
  { src: '/assets/logo2.svg', alt: 'Tech 2' },
  // …more logos
];
const usps = [
  { title: 'Fast', description: 'Optimised performance', imageSrc: '/assets/usp1.svg' },
  { title: 'Responsive', description: 'Mobile‑first design', imageSrc: '/assets/usp2.svg' },
  { title: 'Scalable', description: 'Built for growth', imageSrc: '/assets/usp3.svg' },
];
const projects = [
  { title: 'Project One', summary: 'Brief description', imageSrc: '/assets/project1.png', link: '/projects/one' },
  // …more projects
];
const experiences = [
  // reuse same shape as projects
];
const services = [
  {
    title: 'Design System',
    description: 'Consistent UI with reusable components.',
    imageSrc: '/assets/service-illustration-right.svg',
    reverse: false,
    ctaLabel: 'Learn more',
    onCTAClick: () => window.location.href = '/services/design-system',
  },
  {
    title: 'Full‑Stack Development',
    description: 'End‑to‑end solutions from API to UI.',
    imageSrc: '/assets/service-illustration-left.svg',
    reverse: true,
    ctaLabel: 'Read more',
    onCTAClick: () => window.location.href = '/services/full-stack',
  },
];
const footerData = {
  navGroups: [
    { title: 'Product', links: [{ label: 'Features', href: '/#features' }, { label: 'Pricing', href: '/pricing' }] },
    { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Careers', href: '/careers' }] },
  ],
  socialLinks: [{ icon: 'twitter.svg', href: 'https://twitter.com/yourhandle' }, { icon: 'github.svg', href: 'https://github.com/yourhandle' }],
  copyright: '© 2025 Niko',
};

export const HomePage = () => (
  <main>
    {/* Hero */}
    <section className="bg-primaryDark text-white py-24 flex flex-col items-center">
      <Header logoSrc="/assets/logo.svg" navItems={navItems} />
      <h1 className="text-5xl font-bold mt-12 mb-6">Your Name – Portfolio</h1>
      <p className="mb-8 max-w-2xl text-center">Brief tagline or value proposition.</p>
      <PrimaryButton label="View My Work" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} />
    </section>

    {/* Social Proof */}
    <section className="py-12 bg-white">
      <h2 className="text-center text-xl font-medium mb-6">Tech we work with</h2>
      <LogoGrid logos={logoList} />
    </section>

    {/* USPs */}
    <section id="usps" className="py-16 bg-lightGray">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {usps.map((item, i) => (
          <Card key={i} imageSrc={item.imageSrc} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    {/* Projects */}
    <section id="projects" className="py-16 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-8">Projects</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>

    {/* About Me */}
    <section id="about" className="py-16 bg-lightGray">
      <div className="container mx-auto max-w-2xl">
        <Card
          title="About Me"
          description="A short bio describing your background, skills, and what makes you unique as a developer/designer."
        />
      </div>
    </section>

    {/* Experiences */}
    <section id="experiences" className="py-16 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-8">Experiences</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {experiences.map((e, i) => (
          <ProjectCard key={i} {...e} />
        ))}
      </div>
    </section>

    {/* CTA */}
    <CTAContainer
      title="Ready to collaborate?"
      subtitle="Let's build something amazing together."
      buttonLabel="Get in Touch"
      onButtonClick={() => window.location.href = '/contact'}
      illustrationSrc="/assets/cta-illustration.svg"
    />

    {/* Services */}
    {services.map((s, i) => (
      <ServiceCard key={i} {...s} />
    ))}

    {/* Footer */}
    <Footer {...footerData} />
  </main>
);
```

