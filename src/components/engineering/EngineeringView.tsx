'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Cpu,
  Wind,
  ShieldCheck,
  Eye,
  Activity,
  ArrowRight,
} from 'lucide-react';
import SpecCard from '@/components/ui/SpecCard';
import { BentoGrid } from '@/components/ui/BentoGrid';

export default function EngineeringView() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-champagne/30 text-xs font-mono text-champagne uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>SHENZHEN PRECISION R&D LABORATORIES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white">
          Hardware Without
          <span className="block text-gradient-champagne font-normal">Compromise</span>
        </h1>

        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          From particle-free ISO Class 5 cleanrooms to 5-axis CNC machining, our Longgang District facilities merge aerospace metallurgy with nano-optics.
        </p>
      </section>

      {/* Engineering Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pillar 1: Thermal Dynamics */}
        <div className="p-8 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-light text-white">
              Vapor Phase Thermodynamics
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We employ a 0.1mm micro-fin sintered copper vapor chamber filled with deionized water. As CPU and GPU silicon generate heat, water rapidly vaporizes, traverses the low-pressure envelope, condenses against perimeter heat sinks, and recirculates via capillary wick structures.
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/50">
            <Image
              src="/frames/laptop/ezgif-frame-150.jpg"
              alt="Thermal Chamber Exploded View"
              fill
              className="object-contain p-2"
            />
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span className="text-champagne">45W CONTINUOUS TDP</span>
            <span>{'< 19 dB ACOUSTICS'}</span>
          </div>
        </div>

        {/* Pillar 2: Waveguide Optics */}
        <div className="p-8 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-light text-white">
              Diffractive Nano-Gratings
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Our optical waveguides feature surface relief gratings (SRG) etched with sub-nanometer beam lithography. With 85% optical transparency, digital heads-up overlays remain crystal-clear without dimming the real world, producing 2,500 nits of peak outdoor luminance.
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/50">
            <Image
              src="/frames/glasses/ezgif-frame-250.jpg"
              alt="Cleanroom Laser Waveguide Alignment"
              fill
              className="object-contain p-2"
            />
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span className="text-champagne">2,500 NITS PEAK</span>
            <span>0.3MM THICKNESS</span>
          </div>
        </div>

        {/* Pillar 3: On-Frame Neural Silicon */}
        <div className="p-8 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-light text-white">
              Neural Co-Processor
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Custom edge AI silicon integrated into the titanium temple runs real-time 6DoF head tracking, optical flow odometry, and gesture interpretation with under 15ms motion-to-photon latency, consuming less than 180mW of power.
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/50">
            <Image
              src="/frames/glasses/ezgif-frame-080.jpg"
              alt="Neural AI Silicon Temple Logic"
              fill
              className="object-contain p-2"
            />
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span className="text-champagne">15MS LATENCY</span>
            <span>{'< 180mW POWER'}</span>
          </div>
        </div>
      </section>

      {/* Quality Assurance Matrix */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-champagne uppercase">
            CERTIFIED MANUFACTURING PROTOCOLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            Quality Assurance Matrix
          </h2>
        </div>

        <BentoGrid>
          <SpecCard
            title="Cleanroom Airborne Particle Control"
            subtitle="CLEANROOM STANDARDS"
            value="ISO 5"
            unit="Class"
            description="Less than 3,520 particles (0.5µm or larger) per cubic meter of air, guaranteeing zero micro-dust contamination on optical waveguide prisms."
            icon={ShieldCheck}
            badge="CLASS 100"
            accent={true}
          />

          <SpecCard
            title="Acoustic Whisper Chamber"
            subtitle="NOISE FLOOR TESTING"
            value="14"
            unit="dB"
            description="Semi-anechoic acoustic testing chamber ensures cooling fans and spatial bone-conduction drivers emit zero irritating high-frequency noise."
            icon={Wind}
            badge="ANECHOIC"
          />

          <SpecCard
            title="Automated Optical Inspection (AOI)"
            subtitle="ROBOTIC QC"
            value="100"
            unit="%"
            description="Every motherboard, vapor seal, and optical temple is scanned by multi-angle 4K machine vision cameras before final sealing."
            icon={Activity}
            badge="ZERO DEFECTS"
          />
        </BentoGrid>
      </section>

      {/* Bottom CTA */}
      <section className="text-center p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 space-y-4">
        <h3 className="text-2xl sm:text-3xl font-light text-white">
          Collaborate With Our Engineering Team
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
          We partner with enterprise hardware teams and OEMs globally for bespoke configurations.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-champagne text-obsidian-950 hover:bg-champagne-light shadow-glow-champagne transition-all"
          >
            <span>Inquire for Custom Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
