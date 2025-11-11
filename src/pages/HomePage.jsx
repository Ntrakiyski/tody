import React from 'react';
import {
  Header,
  PrimaryButton,
  LogoGrid,
  Card,
  ProjectCard,
  CTAContainer,
  ServiceCard,
  Footer
} from '../design_system/components';

// Mock data – replace with real content or CMS integration
const navItems = [{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'Experience', href: '/experience' }];
const logoList = [
  { src: 'https://placehold.co/100x40?text=Logo1', alt: 'Tech 1' },
  { src: 'https://placehold.co/100x40?text=Logo2', alt: 'Tech 2' },
  { src: 'https://placehold.co/100x40?text=Logo3', alt: 'Tech 3' },
  { src: 'https://placehold.co/100x40?text=Logo4', alt: 'Tech 4' },
  { src: 'https://placehold.co/100x40?text=Logo5', alt: 'Tech 5' },
  { src: 'https://placehold.co/100x40?text=Logo6', alt: 'Tech 6' },
];
const usps = [
  { title: 'Fast', description: 'Optimised performance', imageSrc: 'https://placehold.co/100x100?text=USP1' },
  { title: 'Responsive', description: 'Mobile‑first design', imageSrc: 'https://placehold.co/100x100?text=USP2' },
  { title: 'Scalable', description: 'Built for growth', imageSrc: 'https://placehold.co/100x100?text=USP3' },
];
const projects = [
  { title: 'Project One', summary: 'Brief description of the first project', imageSrc: 'https://placehold.co/300x200?text=Project1', link: '/projects/one' },
  { title: 'Project Two', summary: 'Brief description of the second project', imageSrc: 'https://placehold.co/300x200?text=Project2', link: '/projects/two' },
  { title: 'Project Three', summary: 'Brief description of the third project', imageSrc: 'https://placehold.co/300x200?text=Project3', link: '/projects/three' },
];
const experiences = [
  { title: 'Experience One', summary: 'Brief description of the first experience', imageSrc: 'https://placehold.co/300x200?text=Exp1', link: '/experience/one' },
  { title: 'Experience Two', summary: 'Brief description of the second experience', imageSrc: 'https://placehold.co/300x200?text=Exp2', link: '/experience/two' },
  { title: 'Experience Three', summary: 'Brief description of the third experience', imageSrc: 'https://placehold.co/300x200?text=Exp3', link: '/experience/three' },
];
const services = [
  {
    title: 'Design System',
    description: 'Consistent UI with reusable components.',
    imageSrc: 'https://placehold.co/500x300?text=Service1',
    reverse: false,
    ctaLabel: 'Learn more',
    onCTAClick: () => window.location.href = '/services/design-system',
  },
  {
    title: 'Full‑Stack Development',
    description: 'End‑to‑end solutions from API to UI.',
    imageSrc: 'https://placehold.co/500x300?text=Service2',
    reverse: true,
    ctaLabel: 'Read more',
    onCTAClick: () => window.location.href = '/services/full-stack',
  },
];
const footerData = {
  navGroups: [
    { title: 'Product', links: [{ label: 'Features', href: '/#features' }, { label: 'Pricing', href: '/pricing' }, { label: 'Updates', href: '/updates' }, { label: 'Changelog', href: '/changelog' }] },
    { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Careers', href: '/careers' }, { label: 'Contact', href: '/contact' }, { label: 'Blog', href: '/blog' }] },
    { title: 'Resources', links: [{ label: 'Documentation', href: '/docs' }, { label: 'Tutorials', href: '/tutorials' }, { label: 'Support', href: '/support' }, { label: 'API', href: '/api' }] },
    { title: 'Legal', links: [{ label: 'Privacy', href: '/privacy' }, { label: 'Terms', href: '/terms' }, { label: 'Cookies', href: '/cookies' }, { label: 'Licenses', href: '/licenses' }] },
  ],
  socialLinks: [
    { icon: 'https://placehold.co/30x30?text=T', href: 'https://twitter.com/yourhandle' },
    { icon: 'https://placehold.co/30x30?text=G', href: 'https://github.com/yourhandle' },
    { icon: 'https://placehold.co/30x30?text=L', href: 'https://linkedin.com/yourhandle' },
    { icon: 'https://placehold.co/30x30?text=D', href: 'https://dribbble.com/yourhandle' }
  ],
  copyright: '© 2025 Gloria Rusenova. All rights reserved.',
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