'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Shield, Cpu, MapPin, Globe, Sparkles } from 'lucide-react';
import TechLogo from '@/components/ui/TechLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-white/90 border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-radial-radial from-cyan-electric/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        {/* Top Grid: Brand, Address, Products, Engineering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Col 1 & 2: Brand Information with Tech Logo */}
          <div className="lg:col-span-2 space-y-4">
            <TechLogo size="default" />
            
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Architecting next-generation convertible studio computing and spatial optical neural hardware. Manufactured in Shenzhen with sub-micron tolerances.
            </p>

            {/* Official Headquarters Address */}
            <div className="pt-2">
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#0A0A0C] border border-white/[0.08] text-xs text-white/80">
                <MapPin className="w-4 h-4 text-cyan-electric shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-medium text-white/95">Corporate Headquarters:</div>
                  <div className="text-[11px] text-white/50 leading-relaxed">
                    Room 206, No.8 Ma Li Road, Longgang Avenue, Longgang District, Shenzhen City, Guangdong Province, China
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Hardware Portfolio */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-electric">
              Flagship Hardware
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <Link href="/smart-glasses" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>AR Smart Glasses</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/laptop" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Studio Laptop</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Spatial Telemetry Dock
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  GaN 100W Studio Brick
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Engineering & Innovation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-electric">
              Engineering
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
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
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-electric">
              Compliance & R&D
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-electric/80" />
                <span>ISO 9001:2015 Precision</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-electric/80" />
                <span>MIL-STD-810H Certified</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-cyan-electric/80" />
                <span>CE / FCC / RoHS Tier 1</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-electric/80" />
                <span>Cleanroom Class 100</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Sub-links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-mono">
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
            <span className="text-cyan-electric/80">Designed for Visionaries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
