import type { Metadata } from 'next';
import AppleProductNav from '@/components/layout/AppleProductNav';
import AppleScrollytellingStage, { StoryPhase } from '@/components/scrollytelling/AppleScrollytellingStage';
import { Shield, Eye, Cpu, Wifi, Battery, Volume2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AR Smart Glasses | Reality, augmented.',
  description:
    'Experience the flagship AR Smart Glasses. Matte titanium frame, holographic waveguide optics, on-frame neural spatial intelligence.',
};

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
      href: '#experience',
    },
    ctaSecondary: {
      label: 'See full specs',
      href: '#specs',
    },
  },
];

export default function SmartGlassesPage() {
  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Optics', href: '#optics' },
    { name: 'Sensors', href: '#sensors' },
    { name: 'Specs', href: '#specs' },
    { name: 'Buy', href: '#experience' },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white/90 selection:bg-cyan-electric/30 selection:text-white">
      {/* Apple-style ultra-minimal fixed top nav */}
      <AppleProductNav
        productTitle="AR Smart Glasses"
        links={navLinks}
        ctaText="Experience AR"
        ctaHref="#experience"
        accentColor="cyan"
        switchHref="/laptop"
        switchTitle="Studio Laptop"
      />

      {/* The 120-Frame Scroll-Linked Canvas Experience */}
      <section id="overview" className="relative">
        <AppleScrollytellingStage
          folder="glasses"
          accentColor="cyan"
          phases={glassesPhases}
        />
      </section>

      {/* Editorial Deep-Dive: Optics & Sensors */}
      <section id="optics" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono tracking-widest text-cyan-electric uppercase">
            OPTICAL ENGINEERING
          </span>
          <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-white/90">
            Diffractive Waveguide Architecture
          </h3>
          <p className="text-sm sm:text-base text-white/60">
            Nano-etched surface relief gratings project full-spectrum RGB imagery directly across 85% transparent optical glass.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/[0.06] space-y-3">
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">2,500 Nits</div>
            <div className="text-sm font-semibold text-white/90">Peak Daylight Luminance</div>
            <p className="text-xs text-white/60 leading-relaxed">
              Maintains razor-sharp contrast and vivid colors even under high-noon sunlight without prescription tinting.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/[0.06] space-y-3">
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">{'< 15 ms'}</div>
            <div className="text-sm font-semibold text-white/90">Motion-to-Photon</div>
            <p className="text-xs text-white/60 leading-relaxed">
              Instantaneous optical tracking eliminates motion sickness and anchors digital holographic objects rock-solid in space.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/[0.06] space-y-3">
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">48 Grams</div>
            <div className="text-sm font-semibold text-white/90">Matte Titanium Frame</div>
            <p className="text-xs text-white/60 leading-relaxed">
              Engineered with 50:50 mass distribution across nose pads and ear stems for fatigue-free all-day wearability.
            </p>
          </div>
        </div>
      </section>

      {/* Full Specs Section */}
      <section id="specs" className="py-24 border-t border-white/[0.06] bg-[#0A0A0C]/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono tracking-widest text-cyan-electric uppercase">
              TECHNICAL SPECIFICATIONS
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white/90">
              Hardware Matrix
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-6 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <span className="text-white/40 uppercase font-mono">OPTICS</span>
              <div className="text-base font-semibold text-white">Diffractive Waveguide</div>
              <p className="text-white/60">Surface relief grating, 85% optical transparency, 45° FOV diagonal cone.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <span className="text-white/40 uppercase font-mono">COMPUTE</span>
              <div className="text-base font-semibold text-white">Neural Engine NPU</div>
              <p className="text-white/60">2.4 TOPS on-device edge AI, continuous 6DoF spatial SLAM, {'<'} 180mW envelope.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <span className="text-white/40 uppercase font-mono">AUDIO</span>
              <div className="text-base font-semibold text-white">Spatial Directional</div>
              <p className="text-white/60">Dual reverse-phase beamforming actuators with near-zero external sound leakage.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <span className="text-white/40 uppercase font-mono">BATTERY & I/O</span>
              <div className="text-base font-semibold text-white">14h Active Life</div>
              <p className="text-white/60">Dual 180mAh temple cells, Wi-Fi 7, Bluetooth 5.4 LE Audio, UWB spatial beacon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Purchase Section */}
      <section id="experience" className="py-28 text-center max-w-4xl mx-auto px-6 space-y-6">
        <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-white/90">
          The Future of Vision Starts Here.
        </h3>
        <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
          Reserve your pair of flagship AR Smart Glasses. Designed for life, engineered for the future.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-cyan-electric via-[#00B4D8] to-blue-corporate hover:shadow-glow-cyan transition-all duration-300"
          >
            Order AR Smart Glasses
          </a>
          <a
            href="/contact"
            className="px-8 py-3.5 rounded-full text-sm font-medium tracking-wide text-white/80 bg-white/5 border border-white/10 hover:border-white/30 transition-all"
          >
            Enterprise Developer Kit
          </a>
        </div>
      </section>
    </div>
  );
}
