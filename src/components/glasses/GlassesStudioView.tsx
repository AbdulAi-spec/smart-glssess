'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  Cpu,
  Sparkles,
  Volume2,
  Battery,
  Wifi,
  ShieldCheck,
  Box,
  ArrowRight,
} from 'lucide-react';
import ScrollCanvasScrubber, { ScrollMilestone } from '@/components/3d/ScrollCanvasScrubber';
import ModelViewer3D from '@/components/3d/ModelViewer3D';
import SpecCard from '@/components/ui/SpecCard';
import { BentoGrid } from '@/components/ui/BentoGrid';
import Link from 'next/link';

const glassesMilestones: ScrollMilestone[] = [
  {
    startProgress: 0.0,
    endProgress: 0.25,
    badge: 'AEROSPACE METALLURGY',
    title: 'Grade-5 Titanium Skeleton.',
    highlight: '48 Grams. All-Day Balance.',
    description:
      'Milled from aerospace titanium with dual memory-hinge temples, calibrated for zero nose-bridge pressure points during continuous 14-hour wear.',
    specs: [
      { label: 'WEIGHT', value: '48g' },
      { label: 'MATERIAL', value: 'Titanium Gr.5' },
      { label: 'DISTRIBUTION', value: '50:50 Center-Mass' },
    ],
    position: 'left',
  },
  {
    startProgress: 0.25,
    endProgress: 0.55,
    badge: 'ON-FRAME AI SILICON',
    title: 'Neural Engine Coprocessor.',
    highlight: 'Sub-15ms Motion-to-Photon.',
    description:
      'Embedded temple silicon runs continuous 6DoF spatial SLAM tracking, hand-gesture recognition, and real-time heads-up translation with zero cloud round-trip latency.',
    specs: [
      { label: 'COMPUTE', value: '2.4 TOPS' },
      { label: 'LATENCY', value: '< 15ms' },
      { label: 'POWER', value: '< 180mW' },
    ],
    position: 'right',
  },
  {
    startProgress: 0.55,
    endProgress: 0.8,
    badge: 'ACOUSTIC PRIVACY',
    title: 'Directional Spatial Sound.',
    highlight: 'Reverse-Phase Cancellation.',
    description:
      'Dual acoustic ports situated along the temples create a private 3D spatial sound sphere with near-zero audio leakage to surrounding individuals.',
    specs: [
      { label: 'AUDIO', value: '360° Spatial' },
      { label: 'MICS', value: 'Dual Beamforming' },
      { label: 'BATTERY', value: '14 Hours' },
    ],
    position: 'left',
  },
  {
    startProgress: 0.8,
    endProgress: 1.0,
    badge: 'CLEANROOM OPTICAL FAB',
    title: 'Laser Waveguide Alignment.',
    highlight: '2,500 Nits Outdoor Output.',
    description:
      'Sub-micron robotic laser collimation calibrates the diffractive surface relief gratings in our Shenzhen cleanroom, delivering daylight-visible HUD projection with 85% transparency.',
    specs: [
      { label: 'LUMINANCE', value: '2,500 Nits' },
      { label: 'TRANSPARENCY', value: '85%' },
      { label: 'CLEANROOM', value: 'ISO Class 5' },
    ],
    position: 'right',
  },
];

export default function GlassesStudioView() {
  return (
    <div className="space-y-24">
      {/* SECTION 1: Intro Header */}
      <section className="relative text-center max-w-4xl mx-auto pt-6 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/[0.04] border border-champagne/30 text-xs font-mono text-champagne uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>NEURAL SPATIAL AR • SHENZHEN OPTICAL LABS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl font-extralight tracking-tight text-white"
        >
          Neural AR
          <span className="block text-gradient-champagne font-normal">Smart Glasses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto font-light"
        >
          Scroll down to initiate the 3D optical breakdown. Travel through the 48-gram titanium skeleton into the illuminated neural coprocessor and the cleanroom laser waveguide calibration.
        </motion.p>
      </section>

      {/* SECTION 2: THE 450vh SCROLL-DRIVEN 3D RENDER EXPERIENCE */}
      <section className="relative -mx-6 lg:-mx-8">
        <ScrollCanvasScrubber
          folder="glasses"
          totalFrames={300}
          milestones={glassesMilestones}
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
            Grab with mouse or touch to orbit around the titanium frame and inspect the optical waveguide lenses from any perspective.
          </p>
        </div>

        {/* 3D WebGL Canvas */}
        <ModelViewer3D type="glasses" />
      </section>

      {/* SECTION 4: Specification Telemetry Matrix */}
      <section className="space-y-8 pt-12">
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
            title="Diffractive Waveguide Output"
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

      {/* SECTION 5: Enterprise Procurement CTA */}
      <section className="text-center p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 space-y-4 max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-light text-white">
          Inquire For Neural AR Developer Kit
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
          Developer edition frames and custom spatial waveguide prescriptions shipping directly from Shenzhen facility.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-champagne text-obsidian-950 hover:bg-champagne-light shadow-glow-champagne transition-all"
          >
            <span>Request Developer Frame Kit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
