'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Shield, Cpu, MapPin, Globe, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-obsidian-950 text-white border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-radial-radial from-champagne/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        {/* Top Grid: Brand, Address, Products, Engineering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-champagne/30 flex items-center justify-center text-champagne">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M4 20V4l8 8 8-8v16" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="text-sm font-semibold tracking-wider uppercase text-white">
                Shenzhen Mandyli Technology
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Architecting next-generation convertible studio computing and spatial optical neural hardware. Manufactured in Shenzhen with aerospace micron tolerances.
            </p>

            {/* Official Headquarters Address */}
            <div className="pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-300">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-medium text-white/90">Official Corporate Headquarters:</div>
                  <div className="text-[11px] text-neutral-400 leading-relaxed">
                    Room 206, No.8 Ma Li Road, Longgang Avenue, Longgang District, Shenzhen City, Guangdong Province, China
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Hardware Portfolio */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-champagne">
              Flagship Hardware
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/laptop" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>DJS140S Studio Laptop</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/smart-glasses" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Neural AR Smart Glasses</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <span className="text-neutral-400">Spatial Telemetry Dock (2026)</span>
              </li>
              <li>
                <span className="text-neutral-400">GaN 100W Studio Brick</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Engineering & Innovation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-champagne">
              Engineering
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/engineering" className="hover:text-white transition-colors">
                  Vapor Cooling Architecture
                </Link>
              </li>
              <li>
                <Link href="/engineering" className="hover:text-white transition-colors">
                  Waveguide Optical Fab
                </Link>
              </li>
              <li>
                <Link href="/engineering" className="hover:text-white transition-colors">
                  ISO Class 5 Cleanroom
                </Link>
              </li>
              <li>
                <Link href="/engineering" className="hover:text-white transition-colors">
                  Acoustic Whisper Labs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Standards & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-champagne">
              Compliance & R&D
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-champagne/80" />
                <span>ISO 9001:2015 Precision</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-champagne/80" />
                <span>MIL-STD-810H Certified</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-champagne/80" />
                <span>CE / FCC / RoHS Tier 1</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-champagne/80" />
                <span>Cleanroom Class 100</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Sub-links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-mono">
          <div>
            &copy; {currentYear} Shenzhen Mandyli Technology Co., Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Enterprise Procurement
            </Link>
            <Link href="/engineering" className="hover:text-white transition-colors">
              Hardware Whitepapers
            </Link>
            <span className="text-champagne/60">Designed for Visionaries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
