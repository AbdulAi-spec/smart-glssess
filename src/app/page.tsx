'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Zap,
  Wind,
  Eye,
  Laptop,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import SpecCard from '@/components/ui/SpecCard';
import { BentoGrid } from '@/components/ui/BentoGrid';

export default function HomePage() {
  const [laptopCardMouse, setLaptopCardMouse] = useState({ x: 0, y: 0 });
  const [glassesCardMouse, setGlassesCardMouse] = useState({ x: 0, y: 0 });

  return (
    <div className="relative overflow-hidden pt-28 sm:pt-36 pb-24">
      {/* SECTION 1: Cinematic Hero Viewport */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8 mb-24">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-champagne/30 backdrop-blur-xl shadow-glow-champagne-sm"
        >
          <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-champagne uppercase font-medium">
            SHENZHEN MANDYLI HARDWARE • R&D PREVIEW
          </span>
        </motion.div>

        {/* Hero Main Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-extralight tracking-tight text-white font-sans"
          >
            The Architecture of
            <span className="block text-gradient-champagne font-normal tracking-tight">
              Precision
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Pioneering dark-mode obsidian luxury hardware. From dual-hinge convertible studio computing to waveguide neural AR, engineered in Shenzhen with sub-micron tolerances.
          </motion.p>
        </div>

        {/* Hero Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/laptop"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-champagne text-obsidian-950 hover:bg-champagne-light shadow-glow-champagne transition-all duration-300 active:scale-95"
          >
            <span>Explore Studio Laptop</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/smart-glasses"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-champagne/40 backdrop-blur-xl transition-all duration-300 active:scale-95"
          >
            <span>Inspect AR Glasses</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Live Lab Telemetry Strip */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
            <div className="text-[10px] font-mono text-champagne uppercase tracking-widest">TOLERANCE</div>
            <div className="text-xl font-light text-white font-mono">±0.005mm</div>
            <div className="text-[11px] text-neutral-400">5-Axis CNC Milling</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
            <div className="text-[10px] font-mono text-champagne uppercase tracking-widest">CLEANROOM</div>
            <div className="text-xl font-light text-white font-mono">ISO Class 5</div>
            <div className="text-[11px] text-neutral-400">Waveguide Optics Lab</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
            <div className="text-[10px] font-mono text-champagne uppercase tracking-widest">WEIGHT</div>
            <div className="text-xl font-light text-white font-mono">48 Grams</div>
            <div className="text-[11px] text-neutral-400">Titanium Smart Frame</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
            <div className="text-[10px] font-mono text-champagne uppercase tracking-widest">HEADQUARTERS</div>
            <div className="text-xl font-light text-white font-mono">Shenzhen</div>
            <div className="text-[11px] text-neutral-400">Longgang District</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Dual Showcase Split / Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-28">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono text-champagne uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>DUAL FLAGSHIP SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Two Masterpieces. One Vision.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Select a hardware flagship to enter its dedicated interactive 3D stage and 60fps telemetry breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Convertible Studio Laptop */}
          <Link
            href="/laptop"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setLaptopCardMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            className="group relative rounded-3xl p-8 sm:p-10 bg-obsidian-900/90 border border-white/[0.08] hover:border-champagne/40 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[540px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-glow-champagne"
          >
            {/* Specular Radial Cursor Glow */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(500px circle at ${laptopCardMouse.x}px ${laptopCardMouse.y}px, rgba(212, 175, 55, 0.12), transparent 70%)`,
              }}
            />

            {/* Top row */}
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-champagne mb-3">
                  <Laptop className="w-3 h-3" />
                  MODEL DJS140S
                </span>
                <h3 className="text-3xl sm:text-4xl font-light text-white group-hover:text-champagne-light transition-colors">
                  Convertible Studio Laptop
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-md">
                  Dual-hinge pull-forward studio architecture, 14&quot; 2.8K 120Hz display, dome-switch keyboard, and copper vapor chamber.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-champagne group-hover:text-obsidian-950 transition-colors">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Middle Preview Image / Real Render Frame */}
            <div className="relative z-10 my-8 w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.06] bg-black/40 group-hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/frames/laptop/ezgif-frame-075.jpg"
                alt="Mandyli Studio Laptop"
                fill
                className="object-contain p-2"
                priority
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono text-neutral-300">
                14&quot; 2.8K 120Hz PROMOTION • 92%+ SCREEN RATIO
              </div>
            </div>

            {/* Bottom Telemetry Strip */}
            <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="text-champagne">3 FUNCTIONAL MODES</span>
              <span>COPPER VAPOR COOLING</span>
              <span className="text-white group-hover:translate-x-1 transition-transform">LAUNCH STAGE &rarr;</span>
            </div>
          </Link>

          {/* Card 2: Neural AR Smart Glasses */}
          <Link
            href="/smart-glasses"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setGlassesCardMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            className="group relative rounded-3xl p-8 sm:p-10 bg-obsidian-900/90 border border-white/[0.08] hover:border-champagne/40 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[540px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-glow-champagne"
          >
            {/* Specular Radial Cursor Glow */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(500px circle at ${glassesCardMouse.x}px ${glassesCardMouse.y}px, rgba(212, 175, 55, 0.12), transparent 70%)`,
              }}
            />

            {/* Top row */}
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-champagne mb-3">
                  <Eye className="w-3 h-3" />
                  NEURAL SPATIAL AR
                </span>
                <h3 className="text-3xl sm:text-4xl font-light text-white group-hover:text-champagne-light transition-colors">
                  Neural AR Smart Glasses
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-md">
                  48-gram aerospace titanium frame, diffractive optical waveguide, ambient spatial sensors, and on-frame neural engine.
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-champagne group-hover:text-obsidian-950 transition-colors">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Middle Preview Image / Real Render Frame */}
            <div className="relative z-10 my-8 w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.06] bg-black/40 group-hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/frames/glasses/ezgif-frame-080.jpg"
                alt="Mandyli Neural AR Smart Glasses"
                fill
                className="object-contain p-2"
                priority
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono text-neutral-300">
                AI NEURAL ENGINE • 2,500 NITS WAVEGUIDE
              </div>
            </div>

            {/* Bottom Telemetry Strip */}
            <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="text-champagne">48G TITANIUM</span>
              <span>15MS MOTION-TO-PHOTON</span>
              <span className="text-white group-hover:translate-x-1 transition-transform">LAUNCH STAGE &rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* SECTION 3: Brand Credentials & Shenzhen R&D Strip */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.07] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono text-champagne uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3" />
                <span>R&D MANUFACTURING CRITERIA</span>
              </div>
              <h3 className="text-3xl font-light text-white">
                Engineered in Shenzhen.
                <span className="block text-gradient-champagne font-normal">
                  Deployed Globally.
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Operating at the epicenter of global hardware innovation. Our Longgang facility integrates state-of-the-art 5-axis CNC machines, automated optical inspection, and class 100 cleanrooms.
              </p>
              <Link
                href="/engineering"
                className="inline-flex items-center gap-2 text-xs font-mono text-champagne hover:text-champagne-light uppercase tracking-wider pt-2"
              >
                <span>Read Engineering Whitepaper</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="text-2xl font-light text-white font-mono">0.005 mm</div>
                <div className="text-xs font-semibold text-neutral-200">5-Axis CNC Precision</div>
                <p className="text-xs text-neutral-400">
                  Every aluminum and titanium unibody undergoes continuous high-speed CNC milling for uncompromising structural integrity.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="text-2xl font-light text-white font-mono">ISO Class 5</div>
                <div className="text-xs font-semibold text-neutral-200">Cleanroom Assembly</div>
                <p className="text-xs text-neutral-400">
                  Waveguide optical gratings are etched and collimated in airborne particle-controlled cleanrooms.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="text-2xl font-light text-white font-mono">100% AOI</div>
                <div className="text-xs font-semibold text-neutral-200">Automated Optical Inspection</div>
                <p className="text-xs text-neutral-400">
                  Multi-angle robotic cameras verify solder joint integrity and optical alignment down to the micron.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="text-2xl font-light text-white font-mono">MIL-STD-810H</div>
                <div className="text-xs font-semibold text-neutral-200">Rugged Reliability</div>
                <p className="text-xs text-neutral-400">
                  Tested against thermal shock, drop impact, moisture, and high-frequency vibration endurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
