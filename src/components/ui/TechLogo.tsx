'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TechLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'default' | 'lg';
  href?: string;
}

export default function TechLogo({
  className,
  showText = true,
  size = 'default',
  href = '/',
}: TechLogoProps) {
  const sizeMap = {
    sm: {
      box: 'w-7 h-7',
      svg: 'w-4 h-4',
      title: 'text-xs tracking-wider',
      sub: 'text-[8px] tracking-widest',
    },
    default: {
      box: 'w-9 h-9',
      svg: 'w-5 h-5',
      title: 'text-sm tracking-widest',
      sub: 'text-[9px] tracking-widest',
    },
    lg: {
      box: 'w-12 h-12',
      svg: 'w-7 h-7',
      title: 'text-lg tracking-widest',
      sub: 'text-[10px] tracking-widest',
    },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={cn('group inline-flex items-center gap-3 select-none', className)}>
      {/* Geometric Tech Glyph Icon */}
      <div
        className={cn(
          'relative rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyan-electric/50 group-hover:shadow-glow-cyan',
          currentSize.box
        )}
      >
        {/* Subtle internal gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-electric/10 via-transparent to-blue-corporate/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn('relative z-10 transition-transform duration-300 group-hover:scale-105', currentSize.svg)}
        >
          {/* Outer geometric faceted shield / prism */}
          <path
            d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
            stroke="url(#tech-logo-grad)"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          {/* Inner precision "M" tech pulse */}
          <path
            d="M7 15V9L12 13L17 9V15"
            stroke="#ffffff"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center spatial aperture dot */}
          <circle cx="12" cy="7.5" r="1" fill="#00D6FF" />

          <defs>
            <linearGradient id="tech-logo-grad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D6FF" />
              <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="1" stopColor="#0050FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography Lockup */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                'font-bold uppercase text-white/95 group-hover:text-white transition-colors font-sans',
                currentSize.title
              )}
            >
              MANDYLI
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric animate-pulse" />
          </div>
          <span
            className={cn(
              'font-mono uppercase text-white/40 group-hover:text-white/60 transition-colors',
              currentSize.sub
            )}
          >
            SHENZHEN TECH
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-none" aria-label="Shenzhen Mandyli Technology Home">
        {content}
      </Link>
    );
  }

  return content;
}
