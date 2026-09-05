'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Cpu, Laptop, Eye, ShieldCheck, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Overview', href: '/', icon: Cpu },
  { name: 'Studio Laptop', href: '/laptop', icon: Laptop },
  { name: 'Smart Glasses', href: '/smart-glasses', icon: Eye },
  { name: 'Engineering', href: '/engineering', icon: ShieldCheck },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:py-6 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 max-w-5xl w-full',
            scrolled
              ? 'bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_15px_rgba(212,175,55,0.08)]'
              : 'bg-black/40 backdrop-blur-xl border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
          )}
        >
          {/* Brand Monogram & Name */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Shenzhen Mandyli Technology Home"
          >
            {/* Geometric "M" tech glyph */}
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/0 border border-white/15 flex items-center justify-center overflow-hidden group-hover:border-champagne/40 transition-colors duration-300">
              <div className="absolute inset-0 bg-radial-radial from-champagne/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-champagne transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M4 20V4l8 8 8-8v16" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/90 group-hover:text-white transition-colors flex items-center gap-1.5">
                MANDYLI
                <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
              </span>
              <span className="text-[9px] tracking-widest text-neutral-400 uppercase hidden sm:block">
                Shenzhen Precision
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300',
                    isActive
                      ? 'text-white'
                      : 'text-neutral-300 hover:text-white hover:bg-white/[0.04]'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-champagne/30 shadow-[0_0_12px_rgba(212,175,55,0.15)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right Action / Inquiry */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-gradient-to-r from-champagne/20 to-champagne/10 border border-champagne/40 text-champagne-light hover:border-champagne hover:shadow-glow-champagne-sm transition-all duration-300 active:scale-95"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 border border-white/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-4 top-20 z-40 md:hidden p-5 rounded-3xl bg-obsidian-900/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-2">
              <div className="px-3 py-2 text-[10px] tracking-widest text-champagne/70 uppercase border-b border-white/5 font-mono">
                Hardware Portfolios
              </div>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'bg-white/10 text-champagne border border-champagne/30'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-champagne" />
                      <span>{item.name}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shadow-[0_0_8px_#D4AF37]" />
                    )}
                  </Link>
                );
              })}
              <div className="pt-2 mt-2 border-t border-white/5">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-champagne text-obsidian-950 font-semibold text-xs uppercase tracking-wider hover:bg-champagne-light transition-colors"
                >
                  <span>Enterprise Procurement</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
