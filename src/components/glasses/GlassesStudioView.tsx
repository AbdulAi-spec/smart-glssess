'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  Cpu,
  Layers,
  Sparkles,
  Volume2,
  Battery,
  Wifi,
  ShieldCheck,
  Radio,
  RotateCw,
  Box,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import ModelViewer3D from '@/components/3d/ModelViewer3D';
import FrameScrubber from '@/components/media/FrameScrubber';
import SpecCard from '@/components/ui/SpecCard';
import { BentoGrid } from '@/components/ui/BentoGrid';
import { cn } from '@/lib/utils';

export default function GlassesStudioView() {
  const [viewType, setViewType] = useState<'scrubber' | 'webgl'>('scrubber');
  const [activeLayer, setActiveLayer] = useState<string>('waveguide');
  const [inspectedFrame, setInspectedFrame] = useState<number>(1);

  const opticsLayers = [
    {
      id: 'waveguide',
      title: 'Diffractive Waveguide',
      frame: 1,
      badge: '85% TRANSPARENCY',
      description: 'Nano-etched surface relief gratings project RGB imagery directly onto your visual field without obstructing your peripheral vision.',
      metrics: '2,500 nits peak brightness • 0.3mm optical thickness',
    },
    {
      id: 'neural',
      title: 'AI Neural Coprocessor',
      frame: 80,
      badge: '15MS LATENCY',
      description: 'Custom low-power silicon embedded directly into the temple, running continuous 6DoF spatial head tracking and ambient scene perception.',
      metrics: '2.4 TOPS neural compute • < 180mW power envelope',
    },
    {
      id: 'cleanroom',
      title: 'Laser Waveguide Alignment',
      frame: 250,
      badge: 'ISO CLASS 5 CALIBRATION',
      description: 'Sub-micron robotic laser collimation ensuring instantaneous focal convergence and zero optical distortion for prolonged wear.',
      metrics: '±0.001mm focal accuracy • Cleanroom certified',
    },
    {
      id: 'audio',
      title: 'Directional Acoustic Actuators',
      frame: 180,
      badge: 'SPATIAL AUDIO',
      description: 'Reverse phase-canceling micro-drivers situated along the temples beam spatial sound directly into your ear canal with near-zero leakage.',
      metrics: 'Dual beamforming mics • Reverse phase acoustic privacy',
    },
  ];

  return (
    <div className="space-y-24">
      {/* SECTION 1: Flagship AR Glasses Stage */}
      <section className="relative pt-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-champagne/30 text-xs font-mono text-champagne uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>NEURAL SPATIAL AR • SHENZHEN OPTICAL LABS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-light tracking-tight text-white"
          >
            Neural AR
            <span className="block text-gradient-champagne font-normal">Smart Glasses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto"
          >
            48-gram aerospace titanium frame with diffractive optical waveguide, custom neural coprocessor, and directional spatial audio.
          </motion.p>
        </div>

        {/* View Mode Selector */}
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
              folder="glasses"
              initialFrame={inspectedFrame}
              key={inspectedFrame}
              autoSpinDefault={true}
              aspectRatio="16/9"
              label="NEURAL AR 360° TELEMETRY"
              subsystemCallouts={[
                { frameStart: 1, frameEnd: 45, title: 'Titanium Frontal Silhouette', description: '48g weight distribution with zero nose-bridge pressure points.' },
                { frameStart: 70, frameEnd: 95, title: 'Neural Engine Logic Temple', description: 'Illuminated AI neural chip managing real-time 6DoF spatial SLAM.' },
                { frameStart: 160, frameEnd: 195, title: 'Directional Spatial Sound', description: 'Dual acoustic beamforming ports isolating external speech.' },
                { frameStart: 240, frameEnd: 275, title: 'Cleanroom Waveguide Laser HUD', description: 'Automated robotic laser collimation calibrating 2,500 nits micro-projection.' },
              ]}
            />
          ) : (
            <ModelViewer3D
              type="glasses"
            />
          )}
        </div>
      </section>

      {/* SECTION 2: Waveguide Optics & Hardware Subsystem Breakdown */}
      <section className="relative py-16 px-4 rounded-3xl bg-white/[0.01] border border-white/[0.05]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-champagne uppercase tracking-widest">
              <Layers className="w-3 h-3" />
              <span>SUBSYSTEM LAYER MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white">
              Waveguide Optics & Architecture
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Explore the holographic optical layers, on-frame neural intelligence, and cleanroom robotic alignment.
            </p>
          </div>

          {/* Interactive Layer Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {opticsLayers.map((layer) => {
              const isSelected = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => {
                    setActiveLayer(layer.id);
                    setInspectedFrame(layer.frame);
                    setViewType('scrubber');
                  }}
                  className={cn(
                    'text-left p-5 rounded-2xl transition-all duration-300 relative overflow-hidden',
                    'bg-white/[0.02] border backdrop-blur-xl',
                    isSelected
                      ? 'border-champagne/60 bg-champagne/[0.04] shadow-glow-champagne-sm'
                      : 'border-white/[0.07] hover:border-white/20 hover:bg-white/[0.03]'
                  )}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-champagne uppercase tracking-wider">
                      {layer.badge}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-champagne" />
                    )}
                  </div>

                  <h4 className="text-sm font-semibold text-white mb-1">
                    {layer.title}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                    {layer.description}
                  </p>
                  <div className="text-[10px] font-mono text-neutral-300 border-t border-white/5 pt-2">
                    {layer.metrics}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Subsystem Spotlight Graphic Banner */}
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-white/[0.08]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-radial-radial from-champagne/10 to-transparent blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-mono text-champagne tracking-widest uppercase">
                  ACTIVE LAYER TELEMETRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white">
                  {opticsLayers.find((l) => l.id === activeLayer)?.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {opticsLayers.find((l) => l.id === activeLayer)?.description}
                </p>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs text-champagne flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-champagne" />
                  <span>{opticsLayers.find((l) => l.id === activeLayer)?.metrics}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-mono">FRAME SUBSYSTEM</span>
                  <span className="text-xs text-white font-mono font-bold">
                    FRAME #{String(opticsLayers.find((l) => l.id === activeLayer)?.frame).padStart(3, '0')}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-mono">FIELD OF VIEW (FOV)</span>
                  <span className="text-xs text-champagne font-mono font-bold">45° DIAGONAL SPATIAL CONE</span>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-mono">MOTION-TO-PHOTON</span>
                  <span className="text-xs text-white font-mono font-bold">{'< 15 MILLISECONDS'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Specification Telemetry Matrix */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-champagne uppercase">
            FLAGSHIP AR BENCHMARKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            Smart Glasses Specification Grid
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Engineered in Shenzhen for day-long enterprise spatial interaction and ambient digital overlay.
          </p>
        </div>

        <BentoGrid>
          <SpecCard
            title="Titanium Featherweight Frame"
            subtitle="WEIGHT METRIC"
            value="48"
            unit="grams"
            description="Grade-5 aerospace titanium unibody skeleton with dual memory-hinge temples, calibrated for continuous 14-hour wear comfort."
            icon={ShieldCheck}
            badge="ALL-DAY WEAR"
            accent={true}
          />

          <SpecCard
            title="Diffractive Waveguide Peak Output"
            subtitle="OPTICAL LUMINANCE"
            value="2,500"
            unit="nits"
            description="High-transparency diffractive surface relief optical glass visible even under intense direct midday Shenzhen sunlight."
            icon={Eye}
            badge="DAYLIGHT OPTICS"
          />

          <SpecCard
            title="Dual Temple Power Cell"
            subtitle="BATTERY ENDURANCE"
            value="14"
            unit="hours"
            description="Independent high-density 180mAh cells in each temple arm with magnetic rapid contact dock (0 to 80% charge in 25 minutes)."
            icon={Battery}
            badge="MAGNETIC DOCK"
          />

          <SpecCard
            title="Directional Spatial Audio"
            subtitle="ACOUSTICS"
            value="360"
            unit="° 3D"
            description="Acoustic phase-canceling micro-drivers situated along the temples beam spatial sound into the ear canal with zero privacy leakage."
            icon={Volume2}
            badge="NO LEAKAGE"
          />

          <SpecCard
            title="Neural NPU Coprocessor"
            subtitle="ON-DEVICE AI"
            value="15"
            unit="ms"
            description="Zero-cloud dependency for 6DoF spatial head tracking, gesture recognition, and instantaneous real-time translation overlay."
            icon={Cpu}
            badge="ON-DEVICE SLAM"
            accent={true}
          />

          <SpecCard
            title="Wireless Protocol Matrix"
            subtitle="CONNECTIVITY"
            value="Wi-Fi 7"
            unit="+ UWB"
            description="Dual-band Wi-Fi 7, Bluetooth 5.4 LE Audio with Auracast support, and Ultra-Wideband (UWB) spatial room beacon anchoring."
            icon={Wifi}
            badge="ULTRA LOW LATENCY"
          />
        </BentoGrid>
      </section>
    </div>
  );
}
