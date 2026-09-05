'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr',
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  children,
  colSpan = 1,
  rowSpan = 1,
}: {
  className?: string;
  children: React.ReactNode;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}) {
  const colSpanClasses = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
  };

  const rowSpanClasses = {
    1: 'row-span-1',
    2: 'row-span-2',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl p-6 sm:p-8',
        'bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.07] backdrop-blur-2xl transition-all duration-500',
        colSpanClasses[colSpan],
        rowSpanClasses[rowSpan],
        className
      )}
    >
      {children}
    </div>
  );
}
