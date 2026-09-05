'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Cpu,
  Wind,
  Zap,
  Monitor,
  Keyboard,
  Shield,
  Maximize,
  Sliders,
  ChevronRight,
  Sparkles,
  RotateCw,
  Box,
} from 'lucide-react';
import ModelViewer3D from '@/components/3d/ModelViewer3D';
import FrameScrubber from '@/components/media/FrameScrubber';
import SpecCard from '@/components/ui/SpecCard';
import { BentoGrid, BentoCard } from '@/components/ui/BentoGrid';
import { cn } from '@/lib/utils';

export default function LaptopStudioView() {
  const [activeMode, setActiveMode] = useState<'clamshell' | 'studio' | 'canvas'>('clamshell');
  const [viewType, setViewType] = useState<'scrubber' | 'webgl'>('scrubber');
  const [thermalStep, setThermalStep] = useState<number>(150);

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

  const thermalSteps = [
    { frame: 75, label: 'Assembled Laptop', desc: 'Sleek unibody CNC aluminum exterior with ultra-narrow bezels.' },
    { frame: 150, label: 'Exploded Thermal Stack', desc: 'Separation of top lid, display panel, vapor chamber, and chassis.' },
    { frame: 215, label: 'Motherboard & Silicon', desc: 'Logic board featuring ultra-dense trace routing and liquid metal TIM.' },
    { frame: 250, label: 'Magnesium Sub-Chassis', desc: 'Internal magnesium alloy structural ribs providing torsional rigidity.' },
  ];

  return (
    <div className="space-y-24">
      {/* SECTION 1: Flagship Hero & 3D Interactive Stage */}
      <section className="relative pt-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-champagne/30 text-xs font-mono text-champagne uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>FLAGSHIP MODEL DJS140S • SHENZHEN PRECISION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-light tracking-tight text-white"
          >
            Convertible Studio
            <span className="block text-gradient-champagne font-normal">Architecture</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto"
          >
            Engineered with a dual-hinge pull-forward mechanism, 14-inch 2.8K 120Hz display, dome-switch keyboard, and aerospace copper vapor cooling.
          </motion.p>
        </div>

        {/* View Mode Selector (Photorealistic 360 vs Realtime WebGL) */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center p-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setViewType('scrubber')}
              className={cn(
                'flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono transition-all',
                viewType === 'scrubber'
                  ? 'bg-white/10 text-white border border-champagne/40 shadow-glow-champagne-sm'
                  : 'text-neutral-400 hover:text-white'
              )}
            >
              <RotateCw className="w-3.5 h-3.5 text-champagne" />
              <span>360° CINEMATIC RENDER</span>
            </button>
            <button
              onClick={() => setViewType('webgl')}
              className={cn(
                'flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono transition-all',
                viewType === 'webgl'
                  ? 'bg-white/10 text-white border border-champagne/40 shadow-glow-champagne-sm'
                  : 'text-neutral-400 hover:text-white'
              )}
            >
              <Box className="w-3.5 h-3.5 text-champagne" />
              <span>INTERACTIVE WEBGL 3D</span>
            </button>
          </div>
        </div>

        {/* The Viewport Stage */}
        <div className="relative max-w-5xl mx-auto">
          {viewType === 'scrubber' ? (
            <FrameScrubber
              folder="laptop"
              initialFrame={75}
              autoSpinDefault={true}
              aspectRatio="16/9"
              label="DJS140S 360° PRECISION"
              subsystemCallouts={[
                { frameStart: 1, frameEnd: 30, title: 'Closed Profile', description: 'Ultra-thin 14.2mm CNC aluminum chamfered edge with full I/O array.' },
                { frameStart: 60, frameEnd: 90, title: '92%+ Screen-To-Body', description: 'Ultra-narrow 3.2mm micro bezels framing 14-inch 2.8K OLED.' },
                { frameStart: 130, frameEnd: 180, title: 'Thermal Separation', description: 'Vapor chamber and dual levitation whisper fans dissipating up to 45W TDP.' },
                { frameStart: 200, frameEnd: 230, title: 'High-Density PCB', description: 'Engineered logic board with zero-impedance power delivery.' },
                { frameStart: 240, frameEnd: 270, title: 'Magnesium Unibody', description: 'Aerospace structural cage providing high torsional strength.' },
              ]}
            />
          ) : (
            <ModelViewer3D
              type="laptop"
              laptopMode={activeMode}
            />
          )}
        </div>

        {/* Interactive Mode Switcher Tabs */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono tracking-widest text-champagne uppercase">
              DYNAMIC DISPLAY KINEMATICS
            </span>
            <h3 className="text-xl font-light text-white">Select Functional Posture</h3>
          </div>

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

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-champagne tracking-wider">
                      {mode.angle}
                    </span>
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
        </div>
      </section>

      {/* SECTION 2: Exploded Thermal Architecture Section */}
      <section className="relative py-16 px-4 rounded-3xl bg-white/[0.01] border border-white/[0.05]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-champagne uppercase tracking-widest mb-3">
                <Wind className="w-3 h-3" />
                <span>THERMAL & STRUCTURAL TELEMETRY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-white">
                Exploded Thermal Architecture
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl">
                Dual whisper fans, sintered copper vapor chamber, and precision magnesium structural sub-frame engineered for zero throttle under sustained workloads.
              </p>
            </div>

            {/* Quick Step Buttons for Exploded Inspection */}
            <div className="flex flex-wrap items-center gap-2">
              {thermalSteps.map((step) => (
                <button
                  key={step.frame}
                  onClick={() => setThermalStep(step.frame)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
                    thermalStep === step.frame
                      ? 'bg-champagne text-obsidian-950 font-bold'
                      : 'bg-white/5 text-neutral-300 hover:text-white border border-white/10'
                  )}
                >
                  {step.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dedicated Exploded Thermal Scrubber View */}
          <div className="relative">
            <FrameScrubber
              folder="laptop"
              initialFrame={thermalStep}
              key={thermalStep}
              autoSpinDefault={false}
              aspectRatio="16/9"
              label="EXPLODED SUBSYSTEM TELEMETRY"
              subsystemCallouts={[
                { frameStart: 130, frameEnd: 175, title: 'Twin Whisper Fans & Vapor Chamber', description: 'Dual 58-blade liquid crystal polymer fans rotating on fluid-dynamic bearings (<19dB).' },
                { frameStart: 200, frameEnd: 235, title: 'Engineered Motherboard', description: 'Liquid metal interface delivering 45W continuous power envelope.' },
                { frameStart: 240, frameEnd: 275, title: 'Magnesium Alloy Subframe', description: 'Precision CNC ribs isolating thermal hotspots from palm rests.' },
              ]}
            />
          </div>

          {/* Thermal Architecture 3-Column Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne mb-3">
                <Wind className="w-4 h-4" />
              </div>
              <div className="text-2xl font-light text-white">{'< 19 dB'}</div>
              <div className="text-xs font-semibold text-neutral-200">Twin Levitation Fans</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Acoustically tuned blades eliminate high-pitch harmonics even under peak compiling loads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-2xl font-light text-white">0.1 mm</div>
              <div className="text-xs font-semibold text-neutral-200">Micro-Fin Vapor Chamber</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Vacuum-sealed deionized water phase-change loop spreads heat across the entire chassis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne mb-3">
                <Shield className="w-4 h-4" />
              </div>
              <div className="text-2xl font-light text-white">±0.005 mm</div>
              <div className="text-xs font-semibold text-neutral-200">CNC Magnesium Durability</div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                High strength-to-weight structural chassis passed 12 MIL-STD-810H environmental tests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Full Spec Telemetry Matrix */}
      <section className="space-y-8">
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
            title="Shenzhen Certified R&D"
            subtitle="LABORATORY STANDARDS"
            value="ISO 5"
            unit="Class"
            description="Manufactured under cleanroom atmospheric standards in Longgang District, Shenzhen. Verified with 100% automated optical inspection (AOI)."
            icon={Cpu}
            badge="SHENZHEN LABS"
            accent={true}
          />
        </BentoGrid>
      </section>
    </div>
  );
}
