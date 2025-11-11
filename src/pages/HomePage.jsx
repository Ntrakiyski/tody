import React from 'react';
import {
  Header,
  PrimaryButton,
  LogoGrid
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

const NewFooter = () => (
  <footer className="bg-[#1C1514] text-gray-400">
    <div className="container mx-auto px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
        {/* Left Side: Logo and Copyright */}
        <div className="md:w-1/3">
          <img src="/assets/fractals-logo.png" alt="Fractals Logo" className="h-10 mb-4" />
          <p className="text-sm leading-relaxed">Design amazing digital experiences that create more happy in the world.</p>
        </div>
        {/* Right Side: Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:w-2/3">
          {/* Column 1 - Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          {/* Column 2 - Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          {/* Column 3 - Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help centre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          {/* Column 4 - Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar: Copyright and Socials */}
      <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; 2025 Fractals. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://twitter.com" className="hover:text-white transition-colors">
            <img src="/assets/twitter.svg" alt="Twitter" className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" className="hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://github.com" className="hover:text-white transition-colors">
            <img src="/assets/github.svg" alt="GitHub" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

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
      <div className="relative z-10 container mx-auto px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bricolage text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">Smart systems build for real people</h1>
          <p className="font-bricolage text-lg md:text-xl mb-8 text-gray-300">Where Product Design meets AI & Machine Learning</p>
          <PrimaryButton label="Book free call" size="xl" />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="/assets/new-hero-graphic.png" alt="Smart systems for real people" className="w-full h-auto" onError={(e) => { e.target.src = '/assets/hero-image.png'; }} />
        </div>
      </div>
    </section>

    {/* Social Proof */}
    <section className="py-12 bg-[#1C1514]">
      <div className="container mx-auto px-8">
        <h2 className="text-center text-xl font-medium mb-6 text-gray-400">Tech we work with</h2>
        <LogoGrid logos={logoList} />
      </div>
    </section>

    {/* Features Section */}
    <section className="relative bg-[#1C1514] text-white py-24 overflow-hidden">
      <div className="relative z-10 container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-bricolage text-3xl lg:text-5xl font-semibold mb-4">Building intelligence into your product</h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">ML systems that work technically and experiences that work for humans—because you need both.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#2B2A2A] rounded-xl p-6 text-center">
              <h3 className="font-bricolage text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ML & AI Blog */}
    <section className="py-24 bg-[#1C1514]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold mb-4 text-white">Machine Learning & AI</h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">Hands-on experimentation with fraud detection, retrieval systems, and autonomous agents.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mlBlogPosts.map((post, i) => (
            <div key={i} className="bg-[#2B2A2A] rounded-lg overflow-hidden">
              <div className="relative h-64 p-6 flex flex-col justify-between bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url('${post.imageSrc}')`}}>
                {post.stats.map((stat, j) => (
                  <p key={j} className="font-bricolage text-2xl font-bold text-white">{stat}</p>
                ))}
              </div>
              <div className="p-6">
                <h3 className="font-bricolage text-lg font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* One Person Team */}
    <section className="py-24 bg-[#1C1514] text-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <p className="font-bricolage text-lg mb-2 text-gray-400">for now</p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold">One person team</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <h3 className="font-bricolage text-2xl font-semibold mb-6">I'm Gloria</h3>
            <p className="text-lg leading-relaxed text-gray-300">{aboutText}</p>
          </div>
          <div className="md:w-1/2">
            <img src="/assets/gloria-photo.jpg" alt="Gloria" className="rounded-lg w-full h-auto" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
        </div>
      </div>
    </section>

    {/* Product Design */}
    <section className="py-24 bg-[#1C1514]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold mb-4 text-white">Product Design</h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">This is my working experience company wide with just a few selected projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productDesignPosts.map((post, i) => (
            <div key={i} className="bg-[#2B2A2A] rounded-lg overflow-hidden">
              <div className="relative h-64 p-6 flex flex-col justify-between bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url('${post.imageSrc}')`}}>
                {post.stats.map((stat, j) => (
                  <p key={j} className="font-bricolage text-2xl font-bold text-white">{stat}</p>
                ))}
              </div>
              <div className="p-6">
                <h3 className="font-bricolage text-lg font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 bg-[#1C1514] text-white relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="bg-[#212121] rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between shadow-2xl max-w-6xl mx-auto gap-8">
          <div className="lg:w-1/2">
            <h2 className="font-bricolage text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Interested in My Approach to ML Problem-Solving?</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300">I'm currently seeking opportunities in:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-center font-bold">
                  {interest}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="/assets/new-cta-graphic.png" alt="CTA" className="w-full h-auto object-cover rounded-2xl" onError={(e) => { e.target.src = '/assets/hero-image.png'; }} />
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <NewFooter />
  </main>
);
