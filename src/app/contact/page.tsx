'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  Shield,
  Eye,
  Laptop,
  Monitor,
  Headphones,
  BatteryCharging,
  Gift,
  Sparkles,
  Globe,
  Compass,
  HeartHandshake,
  Award,
  Zap,
} from 'lucide-react';
import AppleProductNav from '@/components/layout/AppleProductNav';
import TechLogo from '@/components/ui/TechLogo';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('laptops');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    units: 'Evaluation (1-5 units)',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const navLinks = [
    { name: 'AI Smart Glasses', href: '/smart-glasses' },
    { name: 'Studio Laptop', href: '/laptop' },
    { name: 'Engineering', href: '/engineering' },
    { name: 'Contact', href: '/contact' },
  ];

  const productOptions = [
    { id: 'laptops', name: 'High-Performance Laptops', icon: Laptop },
    { id: 'aio', name: 'All-in-One PCs (AIO)', icon: Monitor },
    { id: 'glasses', name: 'AI Smart Glasses', icon: Eye },
    { id: 'earphones', name: 'Wireless Earphones', icon: Headphones },
    { id: 'ups', name: 'UPS Power Supplies', icon: BatteryCharging },
    { id: 'packaging', name: 'Creative Packaging & Gifts', icon: Gift },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white/90 selection:bg-cyan-electric/30 selection:text-white">
      {/* Apple-style Top Navigation with Tech Logo */}
      <AppleProductNav
        productTitle="Mandili Technology • Contact & Procurement"
        links={navLinks}
        ctaText="Explore Hardware"
        ctaHref="/"
        accentColor="cyan"
        switchHref="/smart-glasses"
        switchTitle="AI Smart Glasses"
      />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 sm:pt-40 pb-24 space-y-20">
        {/* Header Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-cyan-electric/30 text-xs font-mono text-cyan-electric uppercase tracking-widest shadow-glow-cyan"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>MANDILI TECHNOLOGY CO., LTD. • EST. 2022</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white/90"
          >
            Connect With Our
            <span className="block bg-gradient-to-r from-cyan-electric via-white to-[#0050FF] bg-clip-text text-transparent">
              Solutions Team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Direct liaison with our Shenzhen facility for evaluation units, enterprise procurement, custom intelligent electronic terminals, and branded packaging partnerships.
          </motion.p>
        </section>

        {/* Main Grid: Corporate Facility Card & Procurement Form */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Headquarters Card & Live Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-8 relative overflow-hidden">
              {/* Ambient cyan glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-radial opacity-60 pointer-events-none" />

              {/* Logo & Corporate Title */}
              <div className="space-y-4 relative z-10">
                <TechLogo size="lg" />
                <div className="p-4 rounded-xl bg-cyan-electric/[0.04] border border-cyan-electric/20">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-electric block mb-1">
                    OUR CORE PHILOSOPHY
                  </span>
                  <p className="text-sm font-serif italic text-white/90">
                    “Frugality cultivates virtue, quality builds character.”
                  </p>
                </div>
                <p className="text-xs text-white/70 leading-relaxed pt-1">
                  Mandili Technology Co., Ltd., established in 2022, is a vibrant and dynamic tech startup. We build our core competitiveness through efficiency and cost-effectiveness, embedding customer-centricity and quality commitment into every product.
                </p>
              </div>

              {/* Official Registered Facility Address */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08] relative z-10">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#050505] border border-white/[0.08]">
                  <MapPin className="w-5 h-5 text-cyan-electric shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-electric font-semibold">
                      Registered Corporate Address
                    </span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
                      Room 206, No.8 Ma Li Road, Longgang Avenue, Longgang District, Shenzhen City, Guangdong Province, China
                    </p>
                  </div>
                </div>
              </div>

              {/* Facility Coordinates & Operating Hours */}
              <div className="grid grid-cols-2 gap-3 pt-2 relative z-10">
                <div className="p-4 rounded-2xl bg-[#050505] border border-white/[0.06] space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/40 uppercase">
                    <Compass className="w-3 h-3 text-cyan-electric" />
                    <span>COORDINATES</span>
                  </div>
                  <div className="text-xs font-mono text-white/90 font-semibold">
                    22.7214° N, 114.2486° E
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#050505] border border-white/[0.06] space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/40 uppercase">
                    <Globe className="w-3 h-3 text-[#60A5FA]" />
                    <span>TIMEZONE</span>
                  </div>
                  <div className="text-xs font-mono text-white/90 font-semibold">
                    GMT+8 (Shenzhen CST)
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08] text-xs text-white/80 relative z-10">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-electric shrink-0" />
                  <span className="font-mono text-white/90">contact@mandili-tech.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-electric shrink-0" />
                  <span className="font-mono text-white/90">+86 755 8988 2068</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-white/40 shrink-0" />
                  <span className="text-white/50">Mon – Fri: 09:00 – 18:30 CST</span>
                </div>
              </div>

              {/* Quality Commitment Seal */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 text-xs text-white/80 relative z-10">
                <Shield className="w-5 h-5 text-cyan-electric shrink-0" />
                <span className="leading-snug">
                  Direct factory-floor technical support, strict quality controls, and customized batch fulfillment.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Procurement & Customized Solution Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-16 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-electric/10 border border-cyan-electric/30 text-cyan-electric flex items-center justify-center mx-auto shadow-glow-cyan">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-3xl font-bold tracking-tight text-white/90">
                      Inquiry Dispatched to Mandili Technology
                    </h3>

                    <p className="text-sm text-white/60 max-w-md mx-auto leading-relaxed">
                      Thank you. A dedicated solutions director from Mandili Technology has received your inquiry and will contact you within 12 business hours.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-7 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-white hover:border-cyan-electric/40 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold tracking-tight text-white/90">
                        Hardware & Solutions Inquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60">
                        Select your product line of interest or specify customized enterprise and packaging requirements.
                      </p>
                    </div>

                    {/* Hardware Selection Picker (6 Products) */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-white/40 uppercase tracking-wider">
                        Select Product / Solution Domain
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {productOptions.map((prod) => {
                          const Icon = prod.icon;
                          const isSelected = selectedProduct === prod.id;
                          return (
                            <button
                              key={prod.id}
                              type="button"
                              onClick={() => setSelectedProduct(prod.id)}
                              className={cn(
                                'flex items-center gap-2 p-3 rounded-xl text-xs font-medium border transition-all text-left',
                                isSelected
                                  ? 'border-cyan-electric/60 bg-cyan-electric/[0.08] text-white shadow-glow-cyan'
                                  : 'border-white/10 bg-[#050505] text-white/60 hover:text-white hover:border-white/20'
                              )}
                            >
                              <Icon className="w-4 h-4 text-cyan-electric shrink-0" />
                              <span className="truncate">{prod.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Full Name & Organization */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-white/40 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 focus:border-cyan-electric text-white text-xs placeholder:text-white/20 outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-white/40 uppercase tracking-wider">
                          Enterprise / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Company / Organization Name"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 focus:border-cyan-electric text-white text-xs placeholder:text-white/20 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Corporate Email & Volume */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-white/40 uppercase tracking-wider">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="contact@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 focus:border-cyan-electric text-white text-xs placeholder:text-white/20 outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-white/40 uppercase tracking-wider">
                          Deployment Volume
                        </label>
                        <select
                          value={formData.units}
                          onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 focus:border-cyan-electric text-white text-xs outline-none transition-colors"
                        >
                          <option value="Evaluation (1-5 units)">Evaluation (1-5 units)</option>
                          <option value="Pilot Batch (20-100 units)">Pilot Batch (20-100 units)</option>
                          <option value="Fleet Deployment (500+ units)">Fleet Deployment (500+ units)</option>
                          <option value="Custom OEM / ODM Solutions">Custom OEM / ODM Solutions</option>
                          <option value="Creative Packaging & Branded Items">Creative Packaging & Branded Items</option>
                        </select>
                      </div>
                    </div>

                    {/* Direct Phone / WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/40 uppercase tracking-wider">
                        Direct Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+86 ... or International Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 focus:border-cyan-electric text-white text-xs placeholder:text-white/20 outline-none transition-colors"
                      />
                    </div>

                    {/* Technical Specifications / Project Brief */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/40 uppercase tracking-wider">
                        Project Scope / Customization Requirements
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Detail your requirements: hardware specifications, custom packaging needs, branding, volume, or target deployment timeline..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 focus:border-cyan-electric text-white text-xs placeholder:text-white/20 outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Action */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-electric via-[#00B4D8] to-blue-corporate hover:shadow-glow-cyan text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.99]"
                    >
                      <span>Dispatch Hardware Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Vision and Mission Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0F1015] to-[#0A0A0C] border border-white/[0.08] text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-electric uppercase tracking-widest">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>OUR VISION & MISSION</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold text-white">
            “Technology with a Human Touch”
          </h3>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
            We are committed to integrating the digital intelligence of the new era into everyday life, fostering a harmonious coexistence between people and technology. We operate responsibly to give back to society and build a healthy supply chain ecosystem through open, win-win cooperation.
          </p>
        </section>
      </main>
    </div>
  );
}
