'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wind,
  Zap,
  Monitor,
  Keyboard,
  Shield,
  Sliders,
  Sparkles,
  Box,
  Compass,
  ArrowRight,
} from 'lucide-react';
import ScrollCanvasScrubber, { ScrollMilestone } from '@/components/3d/ScrollCanvasScrubber';
import ModelViewer3D from '@/components/3d/ModelViewer3D';
import SpecCard from '@/components/ui/SpecCard';
import { BentoGrid } from '@/components/ui/BentoGrid';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const laptopMilestones: ScrollMilestone[] = [
  {
    startProgress: 0.0,
    endProgress: 0.22,
    badge: 'AEROSPACE CHASSIS',
    title: 'Precision CNC Unibody.',
    highlight: 'Milled to ±0.005mm.',
    description:
      'High-tensile aluminum unibody milled from a solid aerospace billet with ceramic bead-blasted matte finish, chamfered diamond edges, and full I/O array.',
    specs: [
      { label: 'THICKNESS', value: '14.2mm' },
      { label: 'WEIGHT', value: '1.38kg' },
      { label: 'TOLERANCE', value: '±0.005mm' },
    ],
    position: 'left',
  },
  {
    startProgress: 0.22,
    endProgress: 0.46,
    badge: 'STUDIO KINEMATICS',
    title: 'Pull-Forward Display.',
    highlight: 'Dual-Hinge Articulation.',
    description:
      'The 14-inch 2.8K 120Hz display glides forward over the keyboard well into Studio Hover mode, locking at the ideal ergonomic angle for stylus creation and tactile touch.',
    specs: [
      { label: 'SCREEN', value: '14" 2.8K 120Hz' },
      { label: 'BEZEL', value: '92%+ Ratio' },
      { label: 'MODES', value: '3 Postures' },
    ],
    position: 'right',
  },
  {
    startProgress: 0.46,
    endProgress: 0.74,
    badge: 'EXPLODED THERMAL STACK',
    title: 'Vapor Phase Deconstruction.',
    highlight: 'Dual Whisper Fans <19dB.',
    description:
      'Chassis separates to reveal the micro-fin copper vapor chamber, liquid metal thermal interface, and twin levitation whisper fans sustaining 45W continuous power.',
    specs: [
      { label: 'COOLING', value: '0.1mm Vapor Fin' },
      { label: 'ACOUSTICS', value: '< 19 dB' },
      { label: 'TDP', value: '45W Sustained' },
    ],
    position: 'left',
  },
  {
    startProgress: 0.74,
    endProgress: 1.0,
    badge: 'SILICON & SUBFRAME',
    title: 'Engineered For Performance.',
    highlight: 'Magnesium Structural Cage.',
    description:
      'Internal magnesium alloy structural ribs isolate thermal hotspots away from palm rests while providing high torsional rigidity under MIL-STD-810H standards.',
    specs: [
      { label: 'TESTING', value: 'MIL-STD-810H' },
      { label: 'KEYBOARD', value: '1.3mm Travel' },
      { label: 'PORTS', value: 'Dual Thunderbolt 4' },
    ],
    position: 'right',
  },
];

export default function LaptopStudioView() {
  const [activeMode, setActiveMode] = useState<'clamshell' | 'studio' | 'canvas'>('clamshell');

  const modes = [
    {
      id: 'clamshell',
      title: 'Clamshell Mode',
      subtitle: 'Standard Productivity',
      angle: '115° Tilt',
      description: 'Optimized for high-cadence keyboard drafting and traditional desk workspace ergonomics.',
    },
    {
      id: 'studio',
      title: 'Studio Mode',
      subtitle: 'Forward-Pulled Hover',
      angle: '45° Floating',
      description: 'Pulls the 14" screen forward directly over the keyboard well, creating the ideal angle for touch, review, and presentation.',
    },
    {
      id: 'canvas',
      title: 'Canvas Mode',
      subtitle: 'Flat Tablet Architecture',
      angle: '180° Flat',
      description: 'Lays completely flat against the desk for 4096-level pressure stylus sketching and architectural drafting.',
    },
  ];

  return (
    <div className="space-y-24">
      {/* SECTION 1: Flagship Intro Banner */}
      <section className="relative text-center max-w-4xl mx-auto pt-6 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/[0.04] border border-champagne/30 text-xs font-mono text-champagne uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>FLAGSHIP MODEL DJS140S • SHENZHEN PRECISION</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl font-extralight tracking-tight text-white"
        >
          Convertible Studio
          <span className="block text-gradient-champagne font-normal">Architecture</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto font-light"
        >
          Scroll down to trigger the continuous 3D hardware transformation. Watch the dual-hinge pull-forward kinematics and the exploded vapor cooling architecture separate in real-time.
        </motion.p>
      </section>

      {/* SECTION 2: THE 450vh SCROLL-DRIVEN 3D RENDER EXPERIENCE */}
      <section className="relative -mx-6 lg:-mx-8">
        <ScrollCanvasScrubber
          folder="laptop"
          totalFrames={300}
          milestones={laptopMilestones}
          scrollHeight="h-[450vh]"
        />
      </section>

      {/* SECTION 3: Real-Time Interactive 3D WebGL Inspection Stage */}
      <section className="max-w-5xl mx-auto space-y-8 pt-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-champagne/30 text-[10px] font-mono text-champagne uppercase tracking-widest">
            <Box className="w-3.5 h-3.5" />
            <span>ORBITAL 3D INSPECTION LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            Manual 360° Orbital Viewport
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Grab with your mouse or finger to orbit around the PBR CAD model from any angle. Toggle posture kinematics below.
          </p>
        </div>

        {/* 3D WebGL Canvas */}
        <ModelViewer3D
          type="laptop"
          laptopMode={activeMode}
        />

        {/* Kinematic Mode Switcher Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modes.map((mode) => {
            const isSelected = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id as any)}
                className={cn(
                  'text-left p-5 rounded-2xl transition-all duration-300 relative overflow-hidden',
                  'bg-white/[0.02] border backdrop-blur-xl',
                  isSelected
                    ? 'border-champagne/60 bg-champagne/[0.04] shadow-glow-champagne-sm'
                    : 'border-white/[0.07] hover:border-white/20 hover:bg-white/[0.03]'
                )}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 px-2.5 py-0.5 rounded-bl-xl bg-champagne text-obsidian-950 text-[9px] font-mono font-bold tracking-wider uppercase">
                    ACTIVE
                  </div>
                )}

                <div className="text-xs font-mono text-champagne tracking-wider mb-1">
                  {mode.angle}
                </div>
                <h4 className="text-base font-medium text-white mb-1">
                  {mode.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {mode.description}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: Full Spec Telemetry Matrix */}
      <section className="space-y-8 pt-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-champagne uppercase">
            DETAILED TECHNICAL BENCHMARKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            Spec Telemetry Matrix
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Comprehensive hardware breakdown for enterprise and professional creative deployability.
          </p>
        </div>

        <BentoGrid>
          <SpecCard
            title="14-inch Studio Touch Display"
            subtitle="OPTICAL METRICS"
            value="2.8K"
            unit="120Hz"
            description="2880 × 1800 resolution, 100% DCI-P3 wide color gamut, 500 nits peak brightness with 10-point multi-touch and 4096-level active stylus support."
            icon={Monitor}
            badge="92%+ SCREEN RATIO"
            accent={true}
          />

          <SpecCard
            title="Tactile Dome-Switch Keyboard"
            subtitle="INPUT TELEMETRY"
            value="1.3"
            unit="mm"
            description="Scissor-dome architecture with zero key-wobble, ambient light auto-dimming backlighting, and 120Hz glass precision haptic trackpad."
            icon={Keyboard}
            badge="ZERO CHATTER"
          />

          <SpecCard
            title="I/O & Thunderbolt 4 Bus"
            subtitle="CONNECTIVITY"
            value="40"
            unit="Gbps"
            description="Dual Thunderbolt 4 / USB4 ports with Power Delivery, 1x USB-A 3.2 Gen 2, Full-Size HDMI 2.1 FRL, 3.5mm Hi-Res Audio, and UHS-II SD card reader."
            icon={Sliders}
            badge="FULL PORT ARRAY"
          />

          <SpecCard
            title="High-Density Battery"
            subtitle="POWER MANAGEMENT"
            value="75"
            unit="Wh"
            description="High energy-density cobalt cell providing up to 18 hours of continuous productivity. Includes ultra-compact 100W GaN fast charger."
            icon={Zap}
            badge="100W GaN DOCK"
          />

          <SpecCard
            title="Aerospace CNC Aluminum Unibody"
            subtitle="CHASSIS TOLERANCE"
            value="14.2"
            unit="mm"
            description="Milled from a single block of aerospace-grade aluminum with bead-blasted ceramic matte finish and champagne laser-etched accents."
            icon={Shield}
            badge="1.38 KG WEIGHT"
          />

          <SpecCard
            title="Vapor Phase Cooling"
            subtitle="THERMAL ARCHITECTURE"
            value="45"
            unit="W TDP"
            description="0.1mm micro-fin sintered copper vapor chamber combined with twin whisper fans dissipating 45W continuous thermal loads under 19dB."
            icon={Wind}
            badge="< 19 dB SILENT"
            accent={true}
          />
        </BentoGrid>
      </section>

      {/* SECTION 5: Enterprise Procurement CTA */}
      <section className="text-center p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 space-y-4 max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-light text-white">
          Deploy Flagship Model DJS140S
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
          Custom enterprise configurations, volume fleet pricing, and factory evaluation units available directly from Shenzhen.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-champagne text-obsidian-950 hover:bg-champagne-light shadow-glow-champagne transition-all"
          >
            <span>Request Enterprise Evaluation Unit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
