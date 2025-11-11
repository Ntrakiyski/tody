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

// Mock data
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
];

const logoList = [
  { src: 'https://picsum.photos/seed/logo1/120/60', alt: 'Tech 1' },
  { src: 'https://picsum.photos/seed/logo2/120/60', alt: 'Tech 2' },
  { src: 'https://picsum.photos/seed/logo3/120/60', alt: 'Tech 3' },
  { src: 'https://picsum.photos/seed/logo4/120/60', alt: 'Tech 4' },
  { src: 'https://picsum.photos/seed/logo5/120/60', alt: 'Tech 5' },
  { src: 'https://picsum.photos/seed/logo6/120/60', alt: 'Tech 6' },
];

const usps = [
  { 
    title: 'Fast', 
    description: 'Optimised performance for lightning-quick user experiences', 
    imageSrc: 'https://picsum.photos/seed/usp1/400/300' 
  },
  { 
    title: 'Responsive', 
    description: 'Mobile-first design that works beautifully on every device', 
    imageSrc: 'https://picsum.photos/seed/usp2/400/300' 
  },
  { 
    title: 'Scalable', 
    description: 'Built for growth with modular architecture', 
    imageSrc: 'https://picsum.photos/seed/usp3/400/300' 
  },
];

const projects = [
  { 
    title: 'Project One', 
    summary: 'A comprehensive design system for enterprise applications', 
    imageSrc: 'https://picsum.photos/seed/project1/800/600', 
    link: '/projects' 
  },
  { 
    title: 'Project Two', 
    summary: 'E-commerce platform with seamless checkout experience', 
    imageSrc: 'https://picsum.photos/seed/project2/800/600', 
    link: '/projects' 
  },
  { 
    title: 'Project Three', 
    summary: 'Mobile app redesign improving user engagement by 40%', 
    imageSrc: 'https://picsum.photos/seed/project3/800/600', 
    link: '/projects' 
  },
];

const experiences = [
  { 
    title: 'Senior Designer at Company A', 
    summary: 'Led design initiatives for flagship products', 
    imageSrc: 'https://picsum.photos/seed/exp1/800/600', 
    link: '/experience' 
  },
  { 
    title: 'Product Designer at Company B', 
    summary: 'Designed user-centric solutions for SaaS platform', 
    imageSrc: 'https://picsum.photos/seed/exp2/800/600', 
    link: '/experience' 
  },
  { 
    title: 'UX Designer at Company C', 
    summary: 'Created intuitive interfaces for mobile applications', 
    imageSrc: 'https://picsum.photos/seed/exp3/800/600', 
    link: '/experience' 
  },
];

const services = [
  {
    title: 'Design System Development',
    description: 'Build consistent, scalable UI with reusable components and design tokens that empower your team.',
    imageSrc: 'https://picsum.photos/seed/service1/600/400',
    reverse: false,
    ctaLabel: 'Learn more',
    onCTAClick: () => window.location.href = '/services/design-system',
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end solutions from robust APIs to beautiful user interfaces, delivered with best practices.',
    imageSrc: 'https://picsum.photos/seed/service2/600/400',
    reverse: true,
    ctaLabel: 'Read more',
    onCTAClick: () => window.location.href = '/services/full-stack',
  },
];

const footerData = {
  navGroups: [
    { 
      title: 'Work', 
      links: [
        { label: 'Projects', href: '/projects' }, 
        { label: 'Experience', href: '/experience' }
      ] 
    },
    { 
      title: 'About', 
      links: [
        { label: 'About Me', href: '/#about' }, 
        { label: 'Contact', href: '/contact' }
      ] 
    },
  ],
  socialLinks: [
    { icon: 'twitter.svg', href: 'https://twitter.com/gloriarusenova' }, 
    { icon: 'github.svg', href: 'https://github.com/gloriarusenova' }
  ],
  copyright: '© 2025 Gloria Rusenova',
};

export const HomePage = () => {
  return (
    <main className="font-inter">
    {/* Hero */}
    <section className="bg-primaryDark text-white py-24 flex flex-col items-center relative">
      <Header logoSrc="https://picsum.photos/seed/logo/150/50" navItems={navItems} />
      <div className="container mx-auto text-center px-6 mt-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Gloria Rusenova — Portfolio</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Crafting beautiful digital experiences with thoughtful design and clean code.
        </p>
        <PrimaryButton 
          label="View My Work" 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
        />
      </div>
    </section>

    {/* Social Proof */}
    <section className="py-16 bg-white">
      <h2 className="text-center text-2xl font-semibold mb-8 text-primaryDark">Tech we work with</h2>
      <LogoGrid logos={logoList} />
    </section>

    {/* USPs */}
    <section id="usps" className="py-20 bg-lightGray">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {usps.map((item, i) => (
          <Card key={i} imageSrc={item.imageSrc} title={item.title} description={item.description} />
        ))}
      </div>
    </section>

    {/* Projects */}
    <section id="projects" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-primaryDark">Featured Projects</h2>
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>

    {/* About Me */}
    <section id="about" className="py-20 bg-lightGray">
      <div className="container mx-auto px-6 max-w-3xl">
        <Card
          title="About Me"
          description="I'm Gloria Rusenova, a designer and developer passionate about creating intuitive, accessible digital experiences. With a background in both design and engineering, I bridge the gap between beautiful interfaces and robust functionality."
        />
      </div>
    </section>

    {/* Experiences */}
    <section id="experiences" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-primaryDark">Professional Experience</h2>
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
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
      illustrationSrc="https://picsum.photos/seed/cta1/300/200"
    />

    {/* Services */}
    {services.map((s, i) => (
      <ServiceCard key={i} {...s} />
    ))}

    {/* Footer */}
    <Footer {...footerData} />
  </main>
  );
};
