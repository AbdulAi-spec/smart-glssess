'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppleScrollytellingStage, { StoryPhase } from '@/components/scrollytelling/AppleScrollytellingStage';
import TechLogo from '@/components/ui/TechLogo';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Eye,
  Laptop,
  Monitor,
  Headphones,
  BatteryCharging,
  Sparkles,
  Gift,
  HeartHandshake,
  Award,
  Zap,
  Globe2,
  Users2,
  Flame,
} from 'lucide-react';

const glassesPhases: StoryPhase[] = [
  {
    range: [0.0, 0.15],
    alignment: 'center',
    headline: 'AI Smart Glasses',
    subheadline: 'Reality, augmented.',
    body: 'The future of spatial computing and digital intelligence, seamlessly integrated into everyday life.',
  },
  {
    range: [0.15, 0.4],
    alignment: 'left',
    badge: 'AEROSPACE METALLURGY',
    headline: 'Precision-engineered for vision.',
    subheadline: 'Matte Titanium Chassis',
    body: 'Milled from aerospace Grade-5 titanium with dual micro-tension hinges. Featherweight 48-gram mass distribution ensures effortless all-day wearable comfort.',
  },
  {
    range: [0.4, 0.65],
    alignment: 'right',
    badge: 'OPTICS & SPATIAL SENSORS',
    headline: 'Holographic depth, redefined.',
    subheadline: '2,500 Nits Waveguide',
    body: [
      'Multi-sensor array maps your environment in real-time.',
      'Waveguide optics project crisp, vivid data layers.',
      'Your vision stays clear—digital and physical worlds seamlessly merge.',
    ],
  },
  {
    range: [0.65, 0.85],
    alignment: 'left',
    badge: 'NEURAL COMPUTE & AUDIO',
    headline: 'Immersive spatial intelligence.',
    subheadline: 'Sub-15ms On-Device SLAM',
    body: 'Frame-embedded edge neural processor executes real-time spatial odometry and gesture tracking with zero cloud latency, paired with reverse-phase directional acoustic actuators.',
  },
  {
    range: [0.85, 1.0],
    alignment: 'center',
    headline: 'See beyond. Experience everything.',
    subheadline: 'AI Smart Glasses. Technology infused with human warmth and aesthetic value.',
    ctaPrimary: {
      label: 'Experience Smart Glasses',
      href: '/smart-glasses#experience',
    },
    ctaSecondary: {
      label: 'See full specs',
      href: '/smart-glasses#specs',
    },
  },
];

const laptopPhases: StoryPhase[] = [
  {
    range: [0.0, 0.15],
    alignment: 'center',
    headline: 'High-Performance Studio Laptop',
    subheadline: 'The architecture of precision.',
    body: 'Uncompromising power meets revolutionary convertible design with cost-effective efficiency.',
  },
  {
    range: [0.15, 0.4],
    alignment: 'left',
    badge: 'AEROSPACE CHASSIS',
    headline: 'Milled for perfection.',
    subheadline: 'Single-Block Aluminum',
    body: 'Machined from a single block of aerospace alloy to ±0.005mm tolerances. Dual geared stainless-steel hinges deliver smooth, wobble-free posture transitions with structural rigidity.',
  },
  {
    range: [0.4, 0.65],
    alignment: 'right',
    badge: 'THERMAL & CORE COMPUTE',
    headline: 'Silent power, unleashed.',
    subheadline: 'Copper Vapor Phase Loop',
    body: [
      'Advanced vapor cooling sustains peak performance.',
      'High-density core processing handles massive workflows.',
      'Your workspace remains quiet—even under extreme rendering loads.',
    ],
  },
  {
    range: [0.65, 0.85],
    alignment: 'left',
    badge: 'DISPLAY & TACTILE MATRIX',
    headline: 'An immersive canvas.',
    subheadline: '92% Screen-to-Body Ratio',
    body: 'Color-accurate 2.8K 120Hz IPS touchscreen with ultra-narrow bezels, paired with dome-switch scissor keys providing a crisp 1.3mm travel and fatigue-free typing cadence.',
  },
  {
    range: [0.85, 1.0],
    alignment: 'center',
    headline: 'Create without limits.',
    subheadline: 'High-Performance Studio Laptop. Engineered for visionaries, crafted for professionals.',
    ctaPrimary: {
      label: 'Experience the Studio Laptop',
      href: '/laptop#experience',
    },
    ctaSecondary: {
      label: 'See full specs',
      href: '/laptop#specs',
    },
  },
];

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState<'glasses' | 'laptop'>('glasses');

  const glassesLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Optics', href: '/smart-glasses#optics' },
    { name: 'Sensors', href: '/smart-glasses#sensors' },
    { name: 'Company', href: '#company-profile' },
    { name: 'Products', href: '#core-business' },
    { name: 'Vision', href: '#vision-mission' },
    { name: 'Contact', href: '/contact' },
  ];

  const laptopLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Architecture', href: '/laptop#architecture' },
    { name: 'Display', href: '/laptop#display' },
    { name: 'Company', href: '#company-profile' },
    { name: 'Products', href: '#core-business' },
    { name: 'Vision', href: '#vision-mission' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white/90 selection:bg-cyan-electric/30 selection:text-white">
      {/* Top Apple-Style Product Navigation Header with TechLogo & Switcher */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Product Switcher */}
          <div className="flex items-center gap-4">
            <TechLogo size="sm" />

            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

            {/* Switcher Pill */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10">
              <button
                onClick={() => setActiveProduct('glasses')}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300',
                  activeProduct === 'glasses'
                    ? 'bg-white/10 text-cyan-electric shadow-sm border border-cyan-electric/40'
                    : 'text-white/50 hover:text-white'
                )}
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">AI Smart Glasses</span>
                <span className="sm:hidden">Glasses</span>
              </button>

              <button
                onClick={() => setActiveProduct('laptop')}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300',
                  activeProduct === 'laptop'
                    ? 'bg-white/10 text-[#60A5FA] shadow-sm border border-blue-corporate/40'
                    : 'text-white/50 hover:text-white'
                )}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Studio Laptop</span>
                <span className="sm:hidden">Laptop</span>
              </button>
            </div>
          </div>

          {/* Center Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide">
            {(activeProduct === 'glasses' ? glassesLinks : laptopLinks).map((l) => (
              <a key={l.name} href={l.href} className="text-white/60 hover:text-white transition-colors">
                {l.name}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <Link
              href={activeProduct === 'glasses' ? '/smart-glasses' : '/laptop'}
              className={cn(
                'px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-medium tracking-wide text-white transition-all shadow-lg whitespace-nowrap',
                activeProduct === 'glasses'
                  ? 'bg-gradient-to-r from-cyan-electric/80 to-blue-corporate hover:shadow-glow-cyan'
                  : 'bg-gradient-to-r from-blue-corporate to-cyan-electric hover:shadow-glow-blue'
              )}
            >
              <span>{activeProduct === 'glasses' ? 'Experience AR' : 'Experience Studio'}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main 120-Frame Scrollytelling Canvas */}
      <section id="overview" className="relative pt-16">
        <AppleScrollytellingStage
          key={activeProduct}
          folder={activeProduct}
          accentColor={activeProduct === 'glasses' ? 'cyan' : 'blue'}
          phases={activeProduct === 'glasses' ? glassesPhases : laptopPhases}
        />
      </section>

      {/* Flagship Selector Cards Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono tracking-widest text-cyan-electric uppercase">
            FLAGSHIP HARDWARE PORTFOLIO
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
            Explore Both Flagship Stories
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/smart-glasses"
            className="group relative rounded-3xl p-8 sm:p-10 bg-[#0A0A0C] border border-white/[0.08] hover:border-cyan-electric/40 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[340px] shadow-2xl hover:shadow-glow-cyan"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-electric">
                FLAGSHIP 01 • MATTE TITANIUM
              </span>
              <h4 className="text-3xl font-bold text-white group-hover:text-cyan-electric transition-colors">
                AI Smart Glasses &rarr;
              </h4>
              <p className="text-sm text-white/60 leading-relaxed max-w-md">
                Holographic waveguide optics, 48g Grade-5 titanium frame, and on-frame neural spatial engine.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
              <span>120-FRAME SCROLL STORY</span>
              <span className="text-white group-hover:translate-x-1 transition-transform">LAUNCH &rarr;</span>
            </div>
          </Link>

          <Link
            href="/laptop"
            className="group relative rounded-3xl p-8 sm:p-10 bg-[#0A0A0C] border border-white/[0.08] hover:border-blue-corporate/40 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[340px] shadow-2xl hover:shadow-glow-blue"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#60A5FA]">
                FLAGSHIP 02 • SPACE GRAY UNIBODY
              </span>
              <h4 className="text-3xl font-bold text-white group-hover:text-[#60A5FA] transition-colors">
                Studio Laptop &rarr;
              </h4>
              <p className="text-sm text-white/60 leading-relaxed max-w-md">
                Pull-forward studio kinematics, sintered copper vapor cooling, and 14-inch 2.8K 120Hz display.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
              <span>120-FRAME SCROLL STORY</span>
              <span className="text-white group-hover:translate-x-1 transition-transform">LAUNCH &rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: COMPANY PROFILE
          ========================================================================= */}
      <section id="company-profile" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/[0.06] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-electric/5 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Brand Identity & Philosophy Quote */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-electric/10 border border-cyan-electric/30 text-[11px] font-mono text-cyan-electric uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ESTABLISHED 2022 • DYNAMIC TECH STARTUP</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white/95 leading-[1.15]">
              Mandili Technology
              <span className="block text-2xl sm:text-3xl text-white/50 font-normal mt-1">
                Co., Ltd.
              </span>
            </h2>

            {/* Core Philosophy Callout Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-cyan-electric/30 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-radial opacity-40 pointer-events-none" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-electric block mb-2">
                OUR GUIDING PHILOSOPHY
              </span>
              <blockquote className="text-lg sm:text-xl font-serif italic text-white/95 leading-snug">
                “Frugality cultivates virtue, quality builds character.”
              </blockquote>
            </div>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Mandili Technology Co., Ltd., established in 2022, is a vibrant and dynamic tech startup. We build our core competitiveness through efficiency and cost-effectiveness, while embedding customer-centricity and quality commitment into every product we deliver.
            </p>
          </div>

          {/* Right: Key Competitive Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-cyan-electric/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-electric/10 border border-cyan-electric/20 flex items-center justify-center text-cyan-electric group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-cyan-electric transition-colors">
                Efficiency & Cost-Effectiveness
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Streamlined agile engineering, optimized supply chain sourcing, and state-of-the-art production pipelines delivering maximum value without compromise.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-cyan-electric/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-corporate/20 border border-blue-corporate/30 flex items-center justify-center text-[#60A5FA] group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-cyan-electric transition-colors">
                Quality Builds Character
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Uncompromising inspection standards and robust quality assurance embedded into every electronic terminal, motherboard, and optical lens.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-cyan-electric/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-white transition-colors">
                Customer-Centric Commitment
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Listening deeply to partner and client requirements, crafting tailored electronic hardware solutions that solve real-world industry challenges.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-cyan-electric/40 transition-all duration-300 space-y-3 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-electric/10 border border-cyan-electric/20 flex items-center justify-center text-cyan-electric group-hover:scale-110 transition-transform">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-cyan-electric transition-colors">
                Vibrant Startup Agility
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Fast iterations, rapid prototyping, and flexible customization tailored for international markets, enterprise fleets, and discerning consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CORE BUSINESS & PRODUCTS
          ========================================================================= */}
      <section id="core-business" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-cyan-electric uppercase">
            INTELLIGENT TERMINALS & BESPOKE SOLUTIONS
          </span>
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white/95">
            Core Business & Offerings
          </h3>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
            Our business focuses on intelligent electronic terminals and customized solutions. We strive to make technology not only high-performing but also infused with human warmth and aesthetic value.
          </p>
        </div>

        {/* 6-Card Product & Solution Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: High-Performance Laptops */}
          <div className="p-8 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] hover:border-cyan-electric/40 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:shadow-glow-cyan">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-electric group-hover:scale-110 transition-transform">
                <Laptop className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-electric">
                COMPUTING TERMINAL
              </span>
              <h4 className="text-xl font-bold text-white">
                High-Performance Laptops
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Flagship convertible and clamshell laptops engineered with aerospace-grade unibodies, vapor phase loops, and high-refresh color-accurate displays for creators and engineers.
              </p>
            </div>
            <Link
              href="/laptop"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-electric hover:text-white transition-colors pt-4 border-t border-white/5"
            >
              <span>Explore Laptop Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: All-in-One PCs */}
          <div className="p-8 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] hover:border-blue-corporate/40 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:shadow-glow-blue">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#60A5FA] group-hover:scale-110 transition-transform">
                <Monitor className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#60A5FA]">
                DESKTOP ECOSYSTEM
              </span>
              <h4 className="text-xl font-bold text-white">
                All-in-One PCs (AIO)
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Ultra-slim desktop workstations integrating CPU, high-resolution panel, and whisper-quiet cooling into an elegant minimalist aesthetic for modern offices and studios.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#60A5FA] hover:text-white transition-colors pt-4 border-t border-white/5"
            >
              <span>Inquire AIO Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3: AI Smart Glasses */}
          <div className="p-8 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] hover:border-cyan-electric/40 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:shadow-glow-cyan">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-electric group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-electric">
                SPATIAL INTELLIGENCE
              </span>
              <h4 className="text-xl font-bold text-white">
                AI Smart Glasses
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Featherweight 48g Grade-5 titanium eyewear featuring holographic diffractive optical waveguides, real-time edge SLAM odometry, and directional spatial audio.
              </p>
            </div>
            <Link
              href="/smart-glasses"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-electric hover:text-white transition-colors pt-4 border-t border-white/5"
            >
              <span>Explore Glasses Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 4: Wireless Earphones */}
          <div className="p-8 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] hover:border-cyan-electric/40 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:shadow-glow-cyan">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-electric group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-electric">
                ACOUSTIC INNOVATION
              </span>
              <h4 className="text-xl font-bold text-white">
                Wireless Earphones
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Studio-grade wireless audio with active noise cancellation, custom graphene transducers, ultra-low latency wireless sync, and featherlight ergonomic contouring.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-electric hover:text-white transition-colors pt-4 border-t border-white/5"
            >
              <span>Procurement Inquiries</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 5: Uninterruptible Power Supplies (UPS) */}
          <div className="p-8 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] hover:border-blue-corporate/40 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:shadow-glow-blue">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#60A5FA] group-hover:scale-110 transition-transform">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#60A5FA]">
                ENERGY RESILIENCE
              </span>
              <h4 className="text-xl font-bold text-white">
                Uninterruptible Power Supplies (UPS)
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Reliable pure sine-wave UPS backup systems protecting sensitive computing terminals, servers, and workstations with zero-millisecond power transfer.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#60A5FA] hover:text-white transition-colors pt-4 border-t border-white/5"
            >
              <span>Explore UPS Solutions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 6: Creative Personalized Packaging & Exclusive Gifts */}
          <div className="p-8 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] hover:border-cyan-electric/40 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:shadow-glow-cyan">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-electric group-hover:scale-110 transition-transform">
                <Gift className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-electric">
                CUSTOM AESTHETICS
              </span>
              <h4 className="text-xl font-bold text-white">
                Creative Packaging & Exclusive Gifts
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Creative personalized packaging, exclusive VIP gifts, and customized branded promotional hardware items infused with human warmth and bespoke industrial artistry.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-electric hover:text-white transition-colors pt-4 border-t border-white/5"
            >
              <span>Custom Branding Inquiries</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: VISION AND MISSION
          ========================================================================= */}
      <section id="vision-mission" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-cyan-electric uppercase">
            OUR COMPASS FOR THE FUTURE
          </span>
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white/95">
            Vision and Mission
          </h3>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
            We firmly believe in <strong className="text-white font-medium">“technology with a human touch.”</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Pillar 1 */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0F1015] to-[#0A0A0C] border border-white/[0.08] relative overflow-hidden space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-electric/10 border border-cyan-electric/20 flex items-center justify-center text-cyan-electric">
              <Globe2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">
              Harmonious Coexistence
            </h4>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Committed to integrating the digital intelligence of the new era into everyday life, fostering a seamless, intuitive, and harmonious coexistence between people and technology.
            </p>
          </div>

          {/* Vision Pillar 2 */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0F1015] to-[#0A0A0C] border border-white/[0.08] relative overflow-hidden space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-corporate/20 border border-blue-corporate/30 flex items-center justify-center text-[#60A5FA]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">
              Technology for Good
            </h4>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              We operate responsibly to give back to society. Through open and win-win cooperation, we build a healthy supply chain ecosystem that respects partners and protects the environment.
            </p>
          </div>

          {/* Vision Pillar 3 */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0F1015] to-[#0A0A0C] border border-white/[0.08] relative overflow-hidden space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/90">
              <Users2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">
              Sustainable Future
            </h4>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              We look forward to resonating with our partners around the globe. On the path of technology for good, we will steadily advance towards an inspiring and sustainable future.
            </p>
          </div>
        </div>

        {/* Bottom Direct Inquiry Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-electric/[0.08] via-white/[0.02] to-blue-corporate/[0.08] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Ready to collaborate with Mandili Technology?
            </h4>
            <p className="text-xs sm:text-sm text-white/60">
              Connect with our solutions directors for bespoke hardware, OEM partnerships, and customized packaging.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-cyan-electric hover:text-black transition-all duration-300 shadow-xl shrink-0"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
