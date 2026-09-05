'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppleProductNav from '@/components/layout/AppleProductNav';
import AppleScrollytellingStage, { StoryPhase } from '@/components/scrollytelling/AppleScrollytellingStage';
import { cn } from '@/lib/utils';
import { ArrowRight, Eye, Laptop } from 'lucide-react';

const glassesPhases: StoryPhase[] = [
  {
    range: [0.0, 0.15],
    alignment: 'center',
    headline: 'AR Smart Glasses',
    subheadline: 'Reality, augmented.',
    body: 'The future of spatial computing, seamlessly integrated into your daily life.',
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
    subheadline: 'AR Smart Glasses. Designed for life, engineered for the future.',
    ctaPrimary: {
      label: 'Experience AR Smart Glasses',
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
    headline: 'Studio Laptop Flagship',
    subheadline: 'The architecture of precision.',
    body: 'Uncompromising power meets revolutionary convertible design.',
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
    subheadline: 'Studio Laptop. Engineered for visionaries, crafted for professionals.',
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
    { name: 'Specs', href: '/smart-glasses#specs' },
    { name: 'Buy', href: '/contact' },
  ];

  const laptopLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Architecture', href: '/laptop#architecture' },
    { name: 'Display', href: '/laptop#display' },
    { name: 'Specs', href: '/laptop#specs' },
    { name: 'Buy', href: '/contact' },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white/90 selection:bg-cyan-electric/30 selection:text-white">
      {/* Top Apple Product Navigation with Product Switcher */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Product Switcher Pill */}
          <div className="flex items-center gap-2 p-1 rounded-full bg-white/[0.04] border border-white/10">
            <button
              onClick={() => setActiveProduct('glasses')}
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300',
                activeProduct === 'glasses'
                  ? 'bg-white/10 text-white shadow-sm border border-cyan-electric/40 text-cyan-electric'
                  : 'text-white/50 hover:text-white'
              )}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>AR Smart Glasses</span>
            </button>

            <button
              onClick={() => setActiveProduct('laptop')}
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300',
                activeProduct === 'laptop'
                  ? 'bg-white/10 text-white shadow-sm border border-blue-corporate/40 text-[#60A5FA]'
                  : 'text-white/50 hover:text-white'
              )}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>Studio Laptop</span>
            </button>
          </div>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
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
                'px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-medium tracking-wide text-white transition-all shadow-lg',
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
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono tracking-widest text-white/40 uppercase">
            FLAGSHIP HARDWARE PORTFOLIO
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
            Explore Both Flagship Stories
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/smart-glasses"
            className="group relative rounded-3xl p-8 sm:p-10 bg-[#0A0A0C] border border-white/[0.08] hover:border-cyan-electric/40 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[360px] shadow-2xl hover:shadow-glow-cyan"
          >
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-electric">
                FLAGSHIP 01 • MATTE TITANIUM
              </span>
              <h4 className="text-3xl font-bold text-white group-hover:text-cyan-electric transition-colors">
                AR Smart Glasses &rarr;
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
            className="group relative rounded-3xl p-8 sm:p-10 bg-[#0A0A0C] border border-white/[0.08] hover:border-blue-corporate/40 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[360px] shadow-2xl hover:shadow-glow-blue"
          >
            <div className="space-y-2">
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
    </div>
  );
}
