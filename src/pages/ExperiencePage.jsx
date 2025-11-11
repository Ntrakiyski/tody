import React from 'react';
import { Header, PrimaryButton, LogoGrid, Card, CTAContainer } from '../design_system/components';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
];

const logoList = [
  { src: 'https://picsum.photos/seed/explogo1/120/60', alt: 'Tech 1' },
  { src: 'https://picsum.photos/seed/explogo2/120/60', alt: 'Tech 2' },
  { src: 'https://picsum.photos/seed/explogo3/120/60', alt: 'Tech 3' },
  { src: 'https://picsum.photos/seed/explogo4/120/60', alt: 'Tech 4' },
];

export const ExperiencePage = () => {
  return (
    <main className="font-inter">
    {/* Hero */}
    <section className="bg-primaryDark text-white py-24 flex flex-col items-center">
      <Header logoSrc="https://picsum.photos/seed/logo/150/50" navItems={navItems} />
      <div className="container mx-auto text-center px-6 mt-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Senior Product Designer at Tide
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Tide is transforming SME banking & business management with 1.6M+ members
          across the UK, India, Germany & France.
        </p>
        <PrimaryButton 
          label="Read My Story" 
          onClick={() => document.getElementById('usps')?.scrollIntoView({ behavior: 'smooth' })} 
        />
      </div>
    </section>

    {/* Social Proof */}
    <section className="py-16 bg-white">
      <h2 className="text-center text-2xl font-semibold mb-8 text-primaryDark">Tech we work with</h2>
      <LogoGrid logos={logoList} />
    </section>

    {/* Highlights */}
    <section id="usps" className="py-20 bg-lightGray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primaryDark">In a Nutshell</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Cross-functional Squad"
            description="A team focused on initiatives that improve core product experience across all areas."
            imageSrc="https://picsum.photos/seed/highlight1/400/300"
          />
          <Card
            title="Constant Collaboration"
            description="Daily work with engineering, product, marketing and design to balance user needs with business goals."
            imageSrc="https://picsum.photos/seed/highlight2/400/300"
          />
          <Card
            title="Impact-driven Design"
            description="Delivered measurable outcomes while navigating technical constraints."
            imageSrc="https://picsum.photos/seed/highlight3/400/300"
          />
        </div>
      </div>
    </section>

    {/* Experience Detail */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <Card
          title="Senior Product Designer at Tide"
          description="Tide is transforming SME banking & business management with 1.6M+ members across the UK, India, Germany & France. As a Senior Product Designer, I led end-to-end design for flagship features, collaborating closely with cross-functional teams to deliver user-centered solutions that drive measurable business impact."
          imageSrc="https://picsum.photos/seed/expdetail/800/500"
        />
      </div>
    </section>

    {/* Selected Work */}
    <section className="py-20 bg-lightGray">
      <div className="container mx-auto px-6">
        <div className="relative rounded-xl overflow-hidden">
          <img 
            src="https://picsum.photos/seed/selectedwork/1200/600" 
            alt="Selected work background" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-12">
            <h2 className="text-4xl font-bold mb-6 text-white">Selected Work</h2>
            <p className="max-w-2xl text-lg text-gray-200">
              Featured below are select projects from my broader portfolio. I drove end-to-end design across multiple products – from research and testing to data synthesis and strategic planning. Happy to dive deeper into specific work.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Communication Framework */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primaryDark">Communication Framework</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card
            title="The Challenge"
            description="Messages were being sent across multiple channels with no consistent structure, creating noise for users and complexity for teams."
            imageSrc="https://picsum.photos/seed/challenge/400/300"
          />
          <Card
            title="The Goal"
            description="Design a company-wide framework for categorising, prioritising, and delivering messages based on urgency and whether action was required."
            imageSrc="https://picsum.photos/seed/goal/400/300"
          />
          <Card
            title="What We Achieved"
            description="Mapped every message type, identified impact, and built a decision-tree system that teams could use to determine priority, placement, timing, and format."
            imageSrc="https://picsum.photos/seed/result/400/300"
          />
          <Card
            title="The Impact"
            description="Reduced user complaints by 40%, improved team efficiency by 25%, and established a scalable framework for future communication needs."
            imageSrc="https://picsum.photos/seed/impact/400/300"
          />
        </div>
      </div>
    </section>

    {/* Home-Page Redesign */}
    <section className="py-20 bg-lightGray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primaryDark">Home Page Redesign</h2>
        <div className="relative rounded-xl overflow-hidden max-w-5xl mx-auto">
          <img 
            src="https://picsum.photos/seed/redesign/1200/700" 
            alt="Home redesign background" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-12">
            <div className="text-white space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">The Challenge</h3>
                <p className="text-gray-200">
                  The home page needed to surface the most important daily information for small-business owners while balancing competing priorities from multiple product teams.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">The Goal</h3>
                <p className="text-gray-200">
                  Identify what businesses actually need to see each day and design a home page that prioritises those needs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">What We Achieved</h3>
                <p className="text-gray-200">
                  Through iterative research and testing, we developed a prioritisation system that delivers the right content at the right time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <CTAContainer
      title="Interested in My Design Approach?"
      subtitle="I'm currently seeking opportunities in product design and UX."
      buttonLabel="Email Me"
      onButtonClick={() => window.location.href = 'mailto:gloria@rusenova.com'}
      illustrationSrc="https://picsum.photos/seed/ctaexp/300/200"
    />
  </main>
  );
};
