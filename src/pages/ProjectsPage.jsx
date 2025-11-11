// Target: src/pages/ProjectsPage.js
import React from 'react';
import {
  Header,
  PrimaryButton,
  Card,
  CTAContainer,
  Button
} from '../design_system/components'; // generic button used in tech‑stack list

export const ProjectsPage = () => (
  <main className="font-inter">

    {/* ---- Hero ---- */}
    <section className="bg-primaryDark text-white py-24 flex flex-col items-center">
      <Header logoSrc="https://placehold.co/150x50?text=Logo" navItems={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Experience', href: '/experience' },
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
          imageSrc="https://placehold.co/100x100?text=USP1"
        />
        <Card
          title="92 %"
          description="Precision"
          imageSrc="https://placehold.co/100x100?text=USP2"
        />
        <Card
          title="89 %"
          description="Recall"
          imageSrc="https://placehold.co/100x100?text=USP3"
        />
      </div>
    </section>

    {/* ---- Projects / Feature Cards ---- */}
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        <Card
          title="Two‑step Retrieval"
          description="Vector embeddings (OpenAI) + LanceDB for semantic search"
          imageSrc="https://placehold.co/300x200?text=Feature1"
        />
        <Card
          title="Custom Evaluation Framework"
          description="Precision, Recall, and MRR metrics for continuous improvement"
          imageSrc="https://placehold.co/300x200?text=Feature2"
        />
        <Card
          title="Real‑time Q&A Interface"
          description="Source attribution with 200 ms avg response time"
          imageSrc="https://placehold.co/300x200?text=Feature3"
        />
      </div>
    </section>

    {/* ---- Pricing / Value Cards ---- */}
    <section id="pricing" className="py-16 bg-lightGray">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <Card
          title="Quantifiable Outcomes"
          description="Saving $2.7M annually, 84 % fraud caught, 75 % alert accuracy"
          imageSrc="https://placehold.co/200x150?text=Pricing1"
        />
        <Card
          title="Business Value"
          description="8 % time saved per employee per week, 98 % user satisfaction"
          imageSrc="https://placehold.co/200x150?text=Pricing2"
        />
      </div>
    </section>

    {/* ---- Tech Stack CTA (buttons) ---- */}
    <section id="tech-stack" className="py-16 bg-white">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <Button variant="secondary">Python</Button>
        <Button variant="secondary">OpenAI API</Button>
        <Button variant="secondary">Cohere</Button>
        <Button variant="secondary">LanceDB</Button>
        <Button variant="secondary">Reflex</Button>
        <Button variant="secondary">FastAPI</Button>
        <Button variant="secondary">Git</Button>
        <Button variant="secondary">Docker</Button>
        <Button variant="secondary">PostgreSQL</Button>
        <Button variant="secondary">Redis</Button>
        <Button variant="secondary">AWS</Button>
        <Button variant="secondary">React</Button>
      </div>
    </section>

    {/* ---- About Me / Contact CTA ---- */}
    <section id="about" className="py-24 bg-primaryDark flex justify-center">
      <CTAContainer
        title="Interested in My Approach to ML Problem‑Solving?"
        subtitle="I'm currently seeking opportunities in:"
        buttonLabel="Email Me"
        onButtonClick={() => window.location.href = 'mailto:ntrakiyski@gmail.com'}
        illustrationSrc="https://placehold.co/200x200?text=CTA"
      />
    </section>

    {/* ---- Final CTA (re‑used) ---- */}
    <section className="py-24 bg-white flex justify-center">
      <CTAContainer
        title="Ready to collaborate?"
        subtitle="Let's build something amazing together."
        buttonLabel="Get in Touch"
        onButtonClick={() => window.location.href = '/contact'}
        illustrationSrc="https://placehold.co/200x200?text=CTA2"
      />
    </section>

  </main>
);