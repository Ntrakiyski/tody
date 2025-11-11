import React from 'react';
import { Header, PrimaryButton, Card, CTAContainer, Button } from '../design_system/components';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
];

export const ProjectsPage = () => {
  return (
    <main className="font-inter">
    {/* Hero */}
    <section className="bg-primaryDark text-white py-24 flex flex-col items-center">
      <Header logoSrc="https://picsum.photos/seed/logo/150/50" navItems={navItems} />
      <div className="container mx-auto text-center px-6 mt-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          RAG – Document Q&A System
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Reduced information retrieval time by 85% while achieving 92% answer accuracy
          through a custom RAG pipeline with advanced evaluation framework.
        </p>
        <PrimaryButton 
          label="Explore the System" 
          onClick={() => document.getElementById('usps')?.scrollIntoView({ behavior: 'smooth' })} 
        />
      </div>
    </section>

    {/* USPs */}
    <section id="usps" className="py-20 bg-lightGray">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <Card title="$2.7M" description="Annual Savings" imageSrc="https://picsum.photos/seed/metric1/400/300" />
        <Card title="92%" description="Precision" imageSrc="https://picsum.photos/seed/metric2/400/300" />
        <Card title="89%" description="Recall" imageSrc="https://picsum.photos/seed/metric3/400/300" />
      </div>
    </section>

    {/* Feature Cards */}
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <Card
          title="Two-step Retrieval"
          description="Vector embeddings (OpenAI) + LanceDB for semantic search"
          imageSrc="https://picsum.photos/seed/feature1/400/300"
        />
        <Card
          title="Custom Evaluation Framework"
          description="Precision, Recall, and MRR metrics for continuous improvement"
          imageSrc="https://picsum.photos/seed/feature2/400/300"
        />
        <Card
          title="Real-time Q&A Interface"
          description="Source attribution with 200 ms avg response time"
          imageSrc="https://picsum.photos/seed/feature3/400/300"
        />
      </div>
    </section>

    {/* Value Cards */}
    <section id="value" className="py-20 bg-lightGray">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
        <Card
          title="Quantifiable Outcomes"
          description="Saving $2.7M annually, 84% fraud caught, 75% alert accuracy"
          imageSrc="https://picsum.photos/seed/value1/500/350"
        />
        <Card
          title="Business Value"
          description="8% time saved per employee per week, 98% user satisfaction"
          imageSrc="https://picsum.photos/seed/value2/500/350"
        />
      </div>
    </section>

    {/* Tech Stack */}
    <section id="tech-stack" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primaryDark">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Python', 'OpenAI API', 'Cohere', 'LanceDB', 'Reflex', 'FastAPI', 'Git', 'Docker', 'PostgreSQL', 'Redis', 'Nginx', 'AWS'].map((tech, i) => (
            <Button key={i} variant="ghost">{tech}</Button>
          ))}
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <CTAContainer
      title="Interested in My Approach to ML Problem-Solving?"
      subtitle="I'm currently seeking opportunities in machine learning and data science."
      buttonLabel="Email Me"
      onButtonClick={() => window.location.href = 'mailto:gloria@rusenova.com'}
      illustrationSrc="https://picsum.photos/seed/ctaproject/300/200"
    />

    {/* Final CTA */}
    <section className="py-24 bg-white">
      <CTAContainer
        title="Ready to collaborate?"
        subtitle="Let's build something amazing together."
        buttonLabel="Get in Touch"
        onButtonClick={() => window.location.href = '/contact'}
        illustrationSrc="https://picsum.photos/seed/cta2/300/200"
        className="bg-white text-primaryDark"
      />
    </section>
  </main>
  );
};
