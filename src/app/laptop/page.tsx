import type { Metadata } from 'next';
import AppleProductNav from '@/components/layout/AppleProductNav';
import AppleScrollytellingStage, { StoryPhase } from '@/components/scrollytelling/AppleScrollytellingStage';
import { Wind, Cpu, Monitor, Sliders, Shield, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Studio Laptop | The architecture of precision.',
  description:
    'Experience the flagship Convertible Studio Laptop. Space-gray single-block aluminum unibody, pull-forward studio kinematics, copper vapor cooling.',
};

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
      href: '#experience',
    },
    ctaSecondary: {
      label: 'See full specs',
      href: '#specs',
    },
  },
];

export default function LaptopPage() {
  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Display', href: '#display' },
    { name: 'Specs', href: '#specs' },
    { name: 'Buy', href: '#experience' },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white/90 selection:bg-blue-corporate/30 selection:text-white">
      {/* Apple-style ultra-minimal fixed top nav */}
      <AppleProductNav
        productTitle="Studio Laptop"
        links={navLinks}
        ctaText="Experience Studio"
        ctaHref="#experience"
        accentColor="blue"
        switchHref="/smart-glasses"
        switchTitle="AR Smart Glasses"
      />

      {/* The 120-Frame Scroll-Linked Canvas Experience */}
      <section id="overview" className="relative">
        <AppleScrollytellingStage
          folder="laptop"
          accentColor="blue"
          phases={laptopPhases}
        />
      </section>

      {/* Editorial Deep-Dive: Architecture & Thermal */}
      <section id="architecture" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#60A5FA] uppercase">
            THERMAL ARCHITECTURE
          </span>
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white/90">
            Sintered Vapor Phase Cooling
          </h3>
          <p className="text-sm sm:text-base text-white/60">
            A 0.1mm micro-fin copper vapor chamber dissipates up to 45W of continuous power while twin whisper fans stay below 19dB.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/[0.06] space-y-3">
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">45W TDP</div>
            <div className="text-sm font-semibold text-white/90">Sustained Power Envelope</div>
            <p className="text-xs text-white/60 leading-relaxed">
              Zero thermal throttling under long multi-threaded code builds, 3D rendering, and 8K video exports.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/[0.06] space-y-3">
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">{'< 19 dB'}</div>
            <div className="text-sm font-semibold text-white/90">Whisper Levitation Fans</div>
            <p className="text-xs text-white/60 leading-relaxed">
              Fluid-dynamic bearings and 58 tuned blades eliminate high-pitch whine for silent studio concentration.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/[0.06] space-y-3">
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">14.2 mm</div>
            <div className="text-sm font-semibold text-white/90">Aerospace CNC Unibody</div>
            <p className="text-xs text-white/60 leading-relaxed">
              Internal magnesium ribs eliminate palm rest flex while insulating thermal hotspots from your hands.
            </p>
          </div>
        </div>
      </section>

      {/* Full Specs Section */}
      <section id="specs" className="py-24 border-t border-white/[0.06] bg-[#0A0A0C]/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono tracking-widest text-[#60A5FA] uppercase">
              TECHNICAL BENCHMARKS
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
              Hardware Matrix
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-6 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <span className="text-white/40 uppercase font-mono">DISPLAY</span>
              <div className="text-base font-semibold text-white">14&quot; 2.8K 120Hz</div>
              <p className="text-white/60">2880 × 1800 IPS touchscreen, 92%+ screen-to-body, 100% DCI-P3, 500 nits.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <span className="text-white/40 uppercase font-mono">INPUT</span>
              <div className="text-base font-semibold text-white">Scissor Dome Keys</div>
              <p className="text-white/60">1.3mm travel, zero-rattle scissor switches, ambient auto-dimming backlighting.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <span className="text-white/40 uppercase font-mono">I/O ARRAY</span>
              <div className="text-base font-semibold text-white">Dual Thunderbolt 4</div>
              <p className="text-white/60">40Gbps USB4, USB-A 3.2 Gen 2, Full-Size HDMI 2.1 FRL, UHS-II SD card reader.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <span className="text-white/40 uppercase font-mono">POWER</span>
              <div className="text-base font-semibold text-white">75Wh + 100W GaN</div>
              <p className="text-white/60">Up to 18 hours battery endurance, ultra-compact GaN rapid charging brick.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Purchase Section */}
      <section id="experience" className="py-28 text-center max-w-4xl mx-auto px-6 space-y-6">
        <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-white/90">
          Engineered for Visionaries.
        </h3>
        <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
          Reserve your Studio Laptop Flagship. Crafted for professionals who demand zero compromise.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-blue-corporate via-[#0066FF] to-cyan-electric hover:shadow-glow-blue transition-all duration-300"
          >
            Order Studio Laptop
          </a>
          <a
            href="/contact"
            className="px-8 py-3.5 rounded-full text-sm font-medium tracking-wide text-white/80 bg-white/5 border border-white/10 hover:border-white/30 transition-all"
          >
            Enterprise Fleet Pricing
          </a>
        </div>
      </section>
    </div>
  );
}
