'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Building2,
  Clock,
  Shield,
  Laptop,
  Eye,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('both');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    units: '50-200',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 sm:pt-32 pb-24 space-y-20">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-champagne/30 text-xs font-mono text-champagne uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ENTERPRISE HARDWARE PROCUREMENT & ODM</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white">
          Direct Shenzhen
          <span className="block text-gradient-champagne font-normal">Headquarters</span>
        </h1>

        <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Connect with our corporate engineering and enterprise procurement representatives in Shenzhen for pilot evaluations, bespoke silicon options, or volume deployment.
        </p>
      </section>

      {/* Main Grid: Form & Corporate Details */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Official Headquarters Card & Telemetry (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-champagne/30 flex items-center justify-center text-champagne">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  Shenzhen Mandyli Technology
                </h3>
                <span className="text-xs text-neutral-400 font-mono">
                  CORPORATE HEADQUARTERS
                </span>
              </div>
            </div>

            {/* Official Address */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-1" />
                <div>
                  <div className="font-mono text-white/90 text-xs uppercase tracking-wider mb-1">
                    Registered Facility Address:
                  </div>
                  <div className="text-neutral-300 leading-relaxed font-sans text-xs">
                    Room 206, No.8 Ma Li Road, Longgang Avenue, Longgang District, Shenzhen City, Guangdong Province, China
                  </div>
                </div>
              </div>
            </div>

            {/* Coordinates & Operating Hours */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-[10px] font-mono text-champagne uppercase">COORDINATES</div>
                <div className="text-xs font-mono text-white">22.7214° N, 114.2486° E</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-[10px] font-mono text-champagne uppercase">TIMEZONE</div>
                <div className="text-xs font-mono text-white">GMT+8 (CST)</div>
              </div>
            </div>

            {/* Communication Channels */}
            <div className="space-y-3 pt-2 border-t border-white/5 text-xs text-neutral-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-champagne shrink-0" />
                <span className="font-mono">procurement@mandyli-tech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-champagne shrink-0" />
                <span className="font-mono">+86 755 8988 2068</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-champagne shrink-0" />
                <span className="text-neutral-400">Mon - Fri: 09:00 - 18:30 (Shenzhen Time)</span>
              </div>
            </div>

            {/* R&D Verification Seal */}
            <div className="p-4 rounded-2xl bg-champagne/[0.03] border border-champagne/20 flex items-center gap-3 text-xs text-champagne">
              <Shield className="w-5 h-5 shrink-0" />
              <span>Direct factory-floor engineering liaison provided for enterprise partners.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Procurement Inquiry Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-champagne/10 border border-champagne/30 text-champagne flex items-center justify-center mx-auto shadow-glow-champagne">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-light text-white">
                  Inquiry Dispatched to Shenzhen
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Thank you. An engineering specialist from our Longgang District headquarters will review your hardware requirements and reply within 12 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-white hover:border-champagne/40 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-light text-white mb-1">
                    Hardware Deployment Inquiry
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Specify your deployment scope for custom lead times and volume pricing.
                  </p>
                </div>

                {/* Product Interest Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider">
                    Hardware System of Interest
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct('laptop')}
                      className={cn(
                        'flex items-center gap-2 p-3 rounded-xl text-xs font-medium border transition-all text-left',
                        selectedProduct === 'laptop'
                          ? 'border-champagne/60 bg-champagne/[0.05] text-white shadow-glow-champagne-sm'
                          : 'border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white'
                      )}
                    >
                      <Laptop className="w-4 h-4 text-champagne shrink-0" />
                      <span>DJS140S Laptop</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct('glasses')}
                      className={cn(
                        'flex items-center gap-2 p-3 rounded-xl text-xs font-medium border transition-all text-left',
                        selectedProduct === 'glasses'
                          ? 'border-champagne/60 bg-champagne/[0.05] text-white shadow-glow-champagne-sm'
                          : 'border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white'
                      )}
                    >
                      <Eye className="w-4 h-4 text-champagne shrink-0" />
                      <span>Neural AR Glasses</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct('both')}
                      className={cn(
                        'flex items-center gap-2 p-3 rounded-xl text-xs font-medium border transition-all text-left',
                        selectedProduct === 'both'
                          ? 'border-champagne/60 bg-champagne/[0.05] text-white shadow-glow-champagne-sm'
                          : 'border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white'
                      )}
                    >
                      <Sparkles className="w-4 h-4 text-champagne shrink-0" />
                      <span>Dual Ecosystem</span>
                    </button>
                  </div>
                </div>

                {/* Name & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Executive / Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-champagne text-white text-xs placeholder:text-neutral-400 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Enterprise / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vance Applied Robotics"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-champagne text-white text-xs placeholder:text-neutral-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@vance.io"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-champagne text-white text-xs placeholder:text-neutral-400 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Target Deployment Volume
                    </label>
                    <select
                      value={formData.units}
                      onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 focus:border-champagne text-white text-xs outline-none transition-colors"
                    >
                      <option value="Evaluation (1-5 units)">Evaluation (1-5 units)</option>
                      <option value="Pilot Batch (20-100 units)">Pilot Batch (20-100 units)</option>
                      <option value="Volume Fleet (500-2,000 units)">Volume Fleet (500-2,000 units)</option>
                      <option value="Bespoke OEM / ODM Specification">Bespoke OEM / ODM Specification</option>
                    </select>
                  </div>
                </div>

                {/* Technical Requirements / Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Technical Specifications / Customization Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify thermal operating conditions, waveguide optical coating requirements, or custom OS integration needs..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-champagne text-white text-xs placeholder:text-neutral-400 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-champagne hover:bg-champagne-light text-obsidian-950 font-semibold text-xs uppercase tracking-wider shadow-glow-champagne transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <span>Dispatch Hardware Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
