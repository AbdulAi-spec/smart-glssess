'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpecCardProps {
  title: string;
  subtitle?: string;
  value: string;
  unit?: string;
  description?: string;
  icon?: LucideIcon;
  badge?: string;
  className?: string;
  accent?: boolean;
}

export default function SpecCard({
  title,
  subtitle,
  value,
  unit,
  description,
  icon: Icon,
  badge,
  className,
  accent = false,
}: SpecCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-500',
        'bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.07] hover:border-white/20 backdrop-blur-2xl',
        accent && 'border-champagne/30 bg-champagne/[0.02]',
        className
      )}
    >
      {/* Specular Radial Cursor Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${
            accent ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255, 255, 255, 0.08)'
          }, transparent 80%)`,
        }}
      />

      {/* Top row: Badge and Icon */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        {badge ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-champagne">
            {badge}
          </span>
        ) : (
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
            {subtitle || 'TELEMETRY'}
          </span>
        )}

        {Icon && (
          <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-champagne group-hover:border-champagne/40 transition-colors duration-300">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Metric Display */}
      <div className="relative z-10 space-y-1 mb-3">
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl sm:text-4xl font-light tracking-tight text-white font-sans">
            {value}
          </span>
          {unit && (
            <span className="text-sm sm:text-base font-mono text-champagne/90">
              {unit}
            </span>
          )}
        </div>
        <h4 className="text-sm font-medium text-neutral-200 tracking-wide">
          {title}
        </h4>
      </div>

      {/* Description / Subtext */}
      {description && (
        <p className="relative z-10 text-xs text-neutral-400 leading-relaxed">
          {description}
        </p>
      )}

      {/* Bottom Specular Laser Line */}
      <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-champagne/40 transition-colors duration-500" />
    </motion.div>
  );
}
