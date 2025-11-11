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

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products', dropdown: true },
  { label: 'Resources', href: '/resources', dropdown: true },
  { label: 'Pricing', href: '/pricing' }
];

const logoList = [
  { src: '/assets/logo1.svg', alt: 'Tech 1' }, // Replace with actual SVGs from Figma
  { src: '/assets/logo2.svg', alt: 'Tech 2' },
  { src: '/assets/logo3.svg', alt: 'Tech 3' },
  { src: '/assets/logo4.svg', alt: 'Tech 4' },
  { src: '/assets/logo5.svg', alt: 'Tech 5' },
  { src: '/assets/logo6.svg', alt: 'Tech 6' },
];

const features = [
  { 
    title: 'AI integrations', 
    description: 'Automate repetitive workflows and eliminate manual tasks',
    animationSrc: 'https://placehold.co/72x72?text=AI' // Placeholder for Lottie
  },
  { 
    title: 'AI chatbots', 
    description: 'Issues which resolves themselves 24/7',
    animationSrc: 'https://placehold.co/72x72?text=Chat'
  },
  { 
    title: 'Custom AI apps', 
    description: 'Specialized AI for your needs',
    animationSrc: 'https://placehold.co/72x72?text=Custom'
  },
  { 
    title: 'Product Design', 
    description: 'Discover how AI can help your business',
    animationSrc: 'https://placehold.co/72x72?text=Design'
  }
];

const mlBlogPosts = [
  { 
    title: 'RAG - Document Q&A system', 
    description: 'Reduced information retrieval time by 85% while achieving 92% answer accuracy',
    imageSrc: '/assets/rag-system.png',
    stats: ['92% Precision', '89% Response accuracy']
  },
  { 
    title: 'Agents system', 
    description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    imageSrc: 'https://placehold.co/354x189?text=Agents',
    stats: ['Response accuracy %']
  },
  { 
    title: 'Fraud detection system', 
    description: 'An AI-powered system that catches 84% of fraud while keeping false alarms under 0.05%',
    imageSrc: '/assets/fraud-detection.png',
    stats: ['83.8% Fraud Caught']
  }
];

const productDesignPosts = [
  { 
    title: 'Tide', 
    description: 'Tide is transforming SME banking & business management with 1.6M+ members',
    imageSrc: 'https://placehold.co/354x189?text=Tide',
    stats: ['Increased active usage by 23%', 'decision-tree system that helped determine message priority']
  },
  { 
    title: 'Telenor', 
    description: 'Telecommunications company with 1M+ Users',
    imageSrc: 'https://placehold.co/354x189?text=Telenor',
    stats: ['Increased the number of paid bills by 28%']
  },
  { 
    title: 'EPAM', 
    description: 'Software Engineering & Product Development Services',
    imageSrc: 'https://placehold.co/354x189?text=EPAM',
    stats: ['managed community of designers', 'Designer E-commerce white label platform']
  }
];

const aboutText = `I’m Gloria — a product designer with 8 years of experience exploring how systems, data, and human behavior connect to shape meaningful experiences. I’ve always been drawn to the details that make complex systems feel seamless, from how a product behaves to how people move through its journey. My curiosity about data naturally led me to machine learning, where I found a new way to understand and design smarter experiences.

After studying statistics and ML and building several projects, I’m excited to merge these worlds — using design thinking to make AI more intuitive and human-centered. If you’re working on something in that space, I’d love to collaborate`;

const interests = [
  'Machine Learning Engineering',
  'Data Science',
  'AI/ML Architecture',
  'Product design'
];

const contactButtons = [
  { label: 'Email Me', icon: '/assets/email.svg', href: 'mailto:gloria@example.com' },
  { label: 'LinkedIn', icon: '/assets/linkedin.svg', href: 'https://linkedin.com/in/gloria' },
  { label: 'GitHub', icon: '/assets/github.svg', href: 'https://github.com/gloria' },
  { label: 'Resume', icon: '/assets/resume.svg', href: '/resume.pdf' }
];

const footerData = {
  navGroups: [
    { 
      title: 'Product', 
      links: [
        { label: 'Overview', href: '/overview' },
        { label: 'Features', href: '/features' },
        { label: 'Solutions', href: '/solutions', badge: 'New' },
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Releases', href: '/releases' }
      ] 
    },
    { 
      title: 'Company', 
      links: [
        { label: 'About us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'News', href: '/news' },
        { label: 'Media kit', href: '/media' },
        { label: 'Contact', href: '/contact' }
      ] 
    },
    { 
      title: 'Resources', 
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Newsletter', href: '/newsletter' },
        { label: 'Events', href: '/events' },
        { label: 'Help centre', href: '/help' },
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'Support', href: '/support' }
      ] 
    },
    { 
      title: 'Legal', 
      links: [
        { label: 'Terms', href: '/terms' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Cookies', href: '/cookies' },
        { label: 'Licenses', href: '/licenses' },
        { label: 'Settings', href: '/settings' },
        { label: 'Contact', href: '/contact' }
      ] 
    }
  ],
  socialLinks: [
    { icon: '/assets/twitter.svg', href: 'https://twitter.com/gloria' },
    { icon: '/assets/linkedin.svg', href: 'https://linkedin.com/in/gloria' },
    { icon: '/assets/facebook.svg', href: 'https://facebook.com/gloria' },
    { icon: '/assets/github.svg', href: 'https://github.com/gloria' },
    { icon: '/assets/angellist.svg', href: 'https://angellist.com/gloria' },
    { icon: '/assets/dribbble.svg', href: 'https://dribbble.com/gloria' }
  ],
  copyright: '© 2025 Gloria Rusenova. All rights reserved.',
};

export const HomePage = () => (
  <main className="font-inter">
    {/* Hero Section */}
    <section className="relative bg-[#1C1514] text-white overflow-hidden">
      <Header 
        logoSrc="/assets/fractals-logo.png" 
        navItems={navItems}
        authActions={[
          { label: 'Log in', variant: 'tertiaryGray' },
          { label: 'Sign up', variant: 'primary' }
        ]}
      />
      <div className="relative z-10 container mx-auto px-8 py-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bricolage text-6xl lg:text-8xl font-bold mb-4 leading-tight">Smart systems build for real people</h1>
          <h2 className="font-bricolage text-2xl font-bold mb-6 text-[#F0633F]">HUMAN & AI</h2>
          <p className="font-bricolage text-xl mb-8 text-gray-300">Where Product Design meets AI & Machine Learning</p>
          <PrimaryButton label="Book free call" size="xl" />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="/assets/hero-image.png" alt="Hero" className="w-full h-auto rounded-tl-[40px]" />
        </div>
      </div>
      <div className="absolute inset-0">
        <img src="/assets/circle.svg" alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1607px] h-[1607px] opacity-20" /> {/* Placeholder for circle */}
      </div>
    </section>

    {/* Social Proof */}
    <section className="py-12 bg-[#F7F4ED]">
      <div className="container mx-auto px-8">
        <h2 className="text-center text-xl font-medium mb-6 text-gray-600">Tech we work with</h2>
        <LogoGrid logos={logoList} />
      </div>
    </section>

    {/* Features Section */}
    <section className="relative bg-[#1C1514] text-white py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/assets/circle.svg" alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1607px] h-[1607px] opacity-20" />
      </div>
      <div className="relative z-10 container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-bricolage text-4xl lg:text-5xl font-semibold mb-4">Building intelligence into your product</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">ML systems that work technically and experiences that work for humans—because you need both.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#2B2A2A] rounded-xl p-6 text-center">
              <div className="w-18 h-18 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                <img src={feature.animationSrc} alt={feature.title} className="w-12 h-12" />
              </div>
              <h3 className="font-bricolage text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ML & AI Blog */}
    <section className="py-24 bg-[#F7F4ED]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold mb-4 text-[#101828]">Machine Learning & AI</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hands-on experimentation with fraud detection, retrieval systems, and autonomous agents.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {mlBlogPosts.map((post, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#1C1514] relative h-96">
                <img src={post.imageSrc} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                {post.stats.map((stat, j) => (
                  <p key={j} className="absolute top-4 left-4 bg-white text-black px-2 py-1 rounded text-sm font-bold">{stat}</p>
                ))}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full mr-2"></div> {/* Icon placeholder */}
                  <h3 className="font-bricolage text-lg font-semibold text-[#101828]">{post.title}</h3>
                </div>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* One Person Team */}
    <section className="py-24 bg-[#1C1514] text-white">
      <div className="container mx-auto px-8 max-w-4xl">
        <div className="text-center mb-8">
          <p className="font-bricolage text-lg mb-2">for now</p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold">One person team</h2>
        </div>
        <div className="bg-[#F7F4ED] rounded-2xl p-8 text-[#1C1514]">
          <h3 className="font-bricolage text-2xl font-semibold mb-6">I&#x27;m Gloria</h3>
          <p className="text-lg mb-8 leading-relaxed">{aboutText}</p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
              <span className="text-lg">Check item 1</span>
            </div>
            {/* Add more check items as needed */}
          </div>
        </div>
        <img src="/assets/about-image.svg" alt="About" className="mt-8 mx-auto w-full max-w-md" /> {/* Placeholder */}
      </div>
    </section>

    {/* Product Design */}
    <section className="py-24 bg-[#F7F4ED]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold mb-4 text-[#101828]">Product Design</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">This is my working experience company wide with just a few selected projects</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {productDesignPosts.map((post, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="bg-[#1C1514] relative h-96">
                <img src={post.imageSrc} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                {post.stats.map((stat, j) => (
                  <p key={j} className={`absolute ${j === 0 ? 'top-4 left-4' : 'bottom-4 left-4'} bg-white text-black px-2 py-1 rounded text-sm font-bold`}>{stat}</p>
                ))}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full mr-2"></div>
                  <h3 className="font-bricolage text-lg font-semibold text-[#101828]">{post.title}</h3>
                </div>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 bg-[#1C1514] text-white relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="bg-[#212121] rounded-3xl p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl max-w-6xl mx-auto">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold mb-4">Interested in My Approach to ML Problem-Solving?</h2>
            <p className="text-xl mb-8 text-gray-300">I&#x27;m currently seeking opportunities in:</p>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-center font-bold">
                  {interest}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="/assets/cta-image.png" alt="CTA" className="w-full h-80 object-cover rounded-2xl" /> {/* Placeholder */}
          </div>
        </div>
      </div>
    </section>

    {/* Contact Buttons */}
    <section className="py-12 bg-[#F7F4ED]">
      <div className="container mx-auto px-8 flex flex-wrap justify-center gap-4">
        {contactButtons.map((btn, i) => (
          <a key={i} href={btn.href} className="bg-white text-[#155DFC] px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition">
            <img src={btn.icon} alt={btn.label} className="w-5 h-5" />
            {btn.label}
          </a>
        ))}
      </div>
    </section>

    {/* Footer */}
    <Footer {...footerData} />
  </main>
);
