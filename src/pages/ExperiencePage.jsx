// Target: src/pages/ExperiencePage.js
import React from 'react';
import {
  Header,
  PrimaryButton,
  LogoGrid,
  Card,
  CTAContainer
} from '../design_system/components';

export const ExperiencePage = () => (
  <main className="font-inter">

    {/* ---- Hero ---- */}
    <section className="bg-primaryDark text-white py-24 flex flex-col items-center">
      <Header logoSrc="https://placehold.co/150x50?text=Logo" navItems={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Experience', href: '/experience' },
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
        { src: 'https://placehold.co/100x40?text=Logo1', alt: 'Tech 1' },
        { src: 'https://placehold.co/100x40?text=Logo2', alt: 'Tech 2' },
        { src: 'https://placehold.co/100x40?text=Logo3', alt: 'Tech 3' },
        { src: 'https://placehold.co/100x40?text=Logo4', alt: 'Tech 4' },
        { src: 'https://placehold.co/100x40?text=Logo5', alt: 'Tech 5' },
        { src: 'https://placehold.co/100x40?text=Logo6', alt: 'Tech 6' },
      ]} />
    </section>

    {/* ---- USPs / Highlights ---- */}
    <section id="usps" className="py-16 bg-lightGray">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        <Card
          title="Cross‑functional squad"
          description="A team focused on initiatives that improve core product experience across all areas."
          imageSrc="https://placehold.co/100x100?text=USP1"
        />
        <Card
          title="Constant collaboration"
          description="Daily work with engineering, product, marketing and design to balance user needs with business goals."
          imageSrc="https://placehold.co/100x100?text=USP2"
        />
        <Card
          title="Impact‑driven design"
          description="Delivered measurable outcomes while navigating technical constraints."
          imageSrc="https://placehold.co/100x100?text=USP3"
        />
      </div>
    </section>

    {/* ---- Experience Detail ---- */}
    <section className="py-16 bg-white">
      <Card
        title="Senior Product Designer at Tide"
        description={`Tide is transforming SME banking & business management with 1.6M+ members across the UK, India, Germany & France.`}
        imageSrc="https://placehold.co/300x200?text=ExpDetail"
      />
    </section>

    {/* ---- Selected Work ---- */}
    <section className="py-16 bg-lightGray">
      <div className="relative">
        <img src="https://placehold.co/800x400?text=Selected+Work" alt="Selected work background" className="w-full rounded-lg" />
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
          imageSrc="https://placehold.co/100x100?text=Challenge"
        />
        {/* Goal */}
        <Card
          title="The Goal"
          description="Design a company‑wide framework for categorising, prioritising, and delivering messages based on urgency and whether action was required."
          imageSrc="https://placehold.co/100x100?text=Goal"
        />
        {/* Result */}
        <Card
          title="What We Achieved"
          description="Mapped every message type, identified impact, and built a decision‑tree system that teams could use to determine priority, placement, timing, and format."
          imageSrc="https://placehold.co/100x100?text=Result"
        />
        {/* Additional Detail (optional) */}
        <Card
          title="Process"
          description="Iterative design process with stakeholder alignment and user validation."
          imageSrc="https://placehold.co/100x100?text=Process"
        />
      </div>
    </section>

    {/* ---- Home‑Page Redesign ---- */}
    <section className="py-16 bg-lightGray">
      <h2 className="text-center text-3xl font-semibold mb-8">Home Page Redesign</h2>
      <div className="relative">
        <img src="https://placehold.co/800x400?text=Home+Redesign" alt="Home redesign background" className="w-full rounded-lg" />
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
        illustrationSrc="https://placehold.co/200x200?text=CTA"
      />
    </section>

  </main>
);