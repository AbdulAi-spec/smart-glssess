'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppleProductNavProps {
  productTitle: string;
  links: { name: string; href: string }[];
  ctaText: string;
  ctaHref?: string;
  accentColor: 'cyan' | 'blue';
  switchHref?: string;
  switchTitle?: string;
}

export default function AppleProductNav({
  productTitle,
  links,
  ctaText,
  ctaHref = '#experience',
  accentColor,
  switchHref,
  switchTitle,
}: AppleProductNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5 opacity-90'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Product Title */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-base sm:text-lg font-semibold tracking-tight text-white/95 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>{productTitle}</span>
          </Link>

          {switchHref && (
            <Link
              href={switchHref}
              className="hidden lg:inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-white/40 hover:text-white/80 transition-colors pl-3 border-l border-white/10"
            >
              <span>Switch to {switchTitle}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        {/* Center: Apple-style Minimal Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Gradient CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className={cn(
              'relative inline-flex items-center justify-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-medium tracking-wide text-white transition-all duration-300 active:scale-95 shadow-lg',
              accentColor === 'cyan'
                ? 'bg-gradient-to-r from-cyan-electric/80 via-cyan-electric to-blue-corporate hover:shadow-glow-cyan'
                : 'bg-gradient-to-r from-blue-corporate via-[#0066FF] to-[#00D6FF] hover:shadow-glow-blue'
            )}
          >
            <span>{ctaText}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
