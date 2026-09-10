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
      title: 'text-xs tracking-[0.16em]',
      sub: 'text-[7.5px] tracking-widest',
    },
    default: {
      box: 'w-9 h-9',
      svg: 'w-5 h-5',
      title: 'text-sm tracking-[0.18em]',
      sub: 'text-[8.5px] tracking-widest',
    },
    lg: {
      box: 'w-12 h-12',
      svg: 'w-6.5 h-6.5',
      title: 'text-lg tracking-[0.2em]',
      sub: 'text-[10px] tracking-widest',
    },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={cn('group inline-flex items-center gap-3 select-none', className)}>
      {/* Simple & Elegant Geometric Monogram Emblem */}
      <div
        className={cn(
          'relative rounded-xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-transparent border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyan-electric/50 group-hover:shadow-glow-cyan',
          currentSize.box
        )}
      >
        {/* Subtle internal gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-electric/15 via-transparent to-blue-corporate/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn('relative z-10 transition-transform duration-300 group-hover:scale-105', currentSize.svg)}
        >
          {/* Architectural twin-arch 'M' with refined precision lines */}
          <path
            d="M5 22V10.5C5 8.01 7.01 6 9.5 6C11.5 6 13.15 7.35 14 9.2C14.85 7.35 16.5 6 18.5 6C20.99 6 23 8.01 23 10.5V22"
            stroke="url(#mandili-m-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Central convergence node */}
          <path
            d="M14 11.5V22"
            stroke="url(#mandili-stem-grad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Minimalist cyan apex spark */}
          <circle cx="14" cy="5.25" r="1.25" fill="#00D6FF" />

          <defs>
            <linearGradient id="mandili-m-grad" x1="5" y1="6" x2="23" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.6" stopColor="#E2E8F0" />
              <stop offset="1" stopColor="#00D6FF" />
            </linearGradient>
            <linearGradient id="mandili-stem-grad" x1="14" y1="11.5" x2="14" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D6FF" />
              <stop offset="1" stopColor="#0050FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography Lockup */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                'font-bold uppercase text-white/95 group-hover:text-white transition-colors font-sans',
                currentSize.title
              )}
            >
              MANDILI
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric animate-pulse" />
          </div>
          <span
            className={cn(
              'font-mono uppercase text-white/40 group-hover:text-white/60 transition-colors',
              currentSize.sub
            )}
          >
            TECHNOLOGY • EST. 2022
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-none" aria-label="Mandili Technology Co., Ltd. Home">
        {content}
      </Link>
    );
  }

  return content;
}
