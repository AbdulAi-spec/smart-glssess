'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StoryPhase {
  range: [number, number]; // e.g. [0, 0.15]
  alignment: 'center' | 'left' | 'right';
  badge?: string;
  headline: string;
  subheadline: string;
  body?: string | string[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

interface AppleScrollytellingStageProps {
  folder: 'glasses' | 'laptop';
  accentColor: 'cyan' | 'blue';
  phases: StoryPhase[];
}

export default function AppleScrollytellingStage({
  folder,
  accentColor,
  phases,
}: AppleScrollytellingStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const totalFrames = 120;
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Cached 120 HTMLImageElements
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  // Maps frame 0..119 to raw frame 1..300 in /frames/{folder}/
  const getFrameUrl = useCallback(
    (index: number) => {
      // Linear interpolation from 1 to 300
      const rawIndex = Math.round(1 + (index / (totalFrames - 1)) * 299);
      const bounded = Math.max(1, Math.min(300, rawIndex));
      const padded = String(bounded).padStart(3, '0');
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
      return `${basePath}/frames/${folder}/ezgif-frame-${padded}.jpg`;
    },
    [folder, totalFrames]
  );

  // High-performance image loading
  useEffect(() => {
    let isCancelled = false;
    imagesRef.current = new Array(totalFrames).fill(null);
    let count = 0;

    // Load key milestones first (every 3rd frame)
    const keyIndices: number[] = [];
    for (let i = 0; i < totalFrames; i += 3) {
      keyIndices.push(i);
    }
    const remainingIndices: number[] = [];
    for (let i = 0; i < totalFrames; i++) {
      if (i % 3 !== 0) remainingIndices.push(i);
    }

    const loadSingle = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(index);
        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current[index] = img;
            count++;
            setImagesLoaded(count);
            if (count >= 15) {
              setIsReady(true);
            }
          }
          resolve();
        };
        img.onerror = () => resolve();
      });
    };

    const runPreload = async () => {
      await Promise.all(keyIndices.map(loadSingle));
      if (isCancelled) return;

      const chunkSize = 15;
      for (let i = 0; i < remainingIndices.length; i += chunkSize) {
        if (isCancelled) break;
        const chunk = remainingIndices.slice(i, i + chunkSize);
        await Promise.all(chunk.map(loadSingle));
      }
    };

    runPreload();

    return () => {
      isCancelled = true;
    };
  }, [totalFrames, getFrameUrl]);

  // Draw frame on canvas with high DPI and seamless dark background blending
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const bounded = Math.max(0, Math.min(totalFrames - 1, Math.round(frameIndex)));

      // Find closest loaded image
      let img = imagesRef.current[bounded];
      if (!img) {
        for (let off = 1; off < 15; off++) {
          if (bounded + off < totalFrames && imagesRef.current[bounded + off]) {
            img = imagesRef.current[bounded + off];
            break;
          }
          if (bounded - off >= 0 && imagesRef.current[bounded - off]) {
            img = imagesRef.current[bounded - off];
            break;
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Deep charcoal fill perfectly matching #050505
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Aspect Fit
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = rect.width / rect.height;
      let drawW = rect.width;
      let drawH = rect.height;
      let offX = 0;
      let offY = 0;

      if (canvasRatio > imgRatio) {
        drawH = rect.height;
        drawW = drawH * imgRatio;
        offX = (rect.width - drawW) / 2;
      } else {
        drawW = rect.width;
        drawH = drawW / imgRatio;
        offY = (rect.height - drawH) / 2;
      }

      ctx.drawImage(img, offX, offY, drawW, drawH);
      ctx.restore();
    },
    [totalFrames]
  );

  // Window scroll mapping
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = rect.height - windowHeight;

      if (totalScroll <= 0) return;

      const current = -rect.top;
      const progress = Math.min(1, Math.max(0, current / totalScroll));
      setScrollProgress(progress);

      const targetFrame = progress * (totalFrames - 1);
      targetFrameRef.current = targetFrame;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  // 60fps buttery RAF lerp loop
  useEffect(() => {
    let animId: number;

    const render = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current += diff * 0.16;
      }

      drawFrame(currentFrameRef.current);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [drawFrame]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#050505]">
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
        {/* Subtle Radial Glow Behind Product */}
        <div
          className={cn(
            'absolute inset-0 pointer-events-none transition-opacity duration-1000',
            accentColor === 'cyan' ? 'bg-cyan-radial opacity-70' : 'bg-blue-radial opacity-70'
          )}
        />

        {/* The 120-Frame Seamless Canvas */}
        <canvas
          ref={canvasRef}
          className="relative z-10 w-full h-full object-contain max-h-screen max-w-screen pointer-events-none"
        />

        {/* Loading Buffer Screen */}
        {!isReady && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-[#050505] gap-3">
            <div
              className={cn(
                'w-8 h-8 rounded-full border-2 animate-spin',
                accentColor === 'cyan'
                  ? 'border-cyan-electric/20 border-t-cyan-electric'
                  : 'border-blue-corporate/20 border-t-blue-corporate'
              )}
            />
            <div className="text-xs font-mono tracking-widest text-white/50 uppercase">
              Loading 120-Frame Sequence ({Math.min(100, Math.round((imagesLoaded / 15) * 100))}%)
            </div>
          </div>
        )}

        {/* Scrollytelling Text Layers */}
        <div className="absolute inset-0 z-20 pointer-events-none max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">
          {phases.map((phase, idx) => {
            const [start, end] = phase.range;
            const isVisible = scrollProgress >= start && scrollProgress <= end;

            // Compute smooth fade & slide opacity
            const span = end - start;
            const local = (scrollProgress - start) / span;
            let opacity = 0;
            let translateY = 20;

            if (local >= 0 && local <= 1) {
              if (local < 0.2) {
                opacity = local / 0.2;
                translateY = 20 * (1 - opacity);
              } else if (local > 0.8) {
                opacity = (1 - local) / 0.2;
                translateY = -20 * (1 - opacity);
              } else {
                opacity = 1;
                translateY = 0;
              }
            }

            if (opacity <= 0.01) return null;

            const alignmentStyles = {
              center: 'mx-auto text-center max-w-2xl',
              left: 'mr-auto text-left max-w-md sm:max-w-lg',
              right: 'ml-auto text-right max-w-md sm:max-w-lg',
            };

            return (
              <div
                key={idx}
                style={{
                  opacity,
                  transform: `translateY(${translateY}px)`,
                }}
                className={cn(
                  'w-full transition-all duration-300 pointer-events-auto',
                  alignmentStyles[phase.alignment]
                )}
              >
                <div className="space-y-4">
                  {/* Subtle Badge */}
                  {phase.badge && (
                    <div
                      className={cn(
                        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border',
                        accentColor === 'cyan'
                          ? 'bg-cyan-electric/[0.08] border-cyan-electric/30 text-cyan-electric'
                          : 'bg-blue-corporate/[0.08] border-blue-corporate/30 text-[#60A5FA]',
                        phase.alignment === 'right' && 'ml-auto',
                        phase.alignment === 'center' && 'mx-auto'
                      )}
                    >
                      <span>{phase.badge}</span>
                    </div>
                  )}

                  {/* Main Headline */}
                  <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white/90 leading-tight">
                    {phase.headline}
                  </h2>

                  {/* Subheadline */}
                  <p
                    className={cn(
                      'text-xl sm:text-2xl font-medium tracking-tight',
                      accentColor === 'cyan' ? 'text-cyan-electric' : 'text-[#60A5FA]'
                    )}
                  >
                    {phase.subheadline}
                  </p>

                  {/* Body Paragraphs */}
                  {phase.body && (
                    <div className="space-y-2 pt-1 text-sm sm:text-base text-white/60 leading-relaxed max-w-md">
                      {Array.isArray(phase.body) ? (
                        phase.body.map((line, bIdx) => (
                          <p key={bIdx} className="leading-relaxed">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p>{phase.body}</p>
                      )}
                    </div>
                  )}

                  {/* Final Reassembled CTAs */}
                  {(phase.ctaPrimary || phase.ctaSecondary) && (
                    <div
                      className={cn(
                        'flex flex-col sm:flex-row items-center gap-4 pt-6',
                        phase.alignment === 'center' && 'justify-center',
                        phase.alignment === 'right' && 'justify-end'
                      )}
                    >
                      {phase.ctaPrimary && (
                        <a
                          href={phase.ctaPrimary.href}
                          className={cn(
                            'inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 shadow-xl active:scale-95',
                            accentColor === 'cyan'
                              ? 'bg-gradient-to-r from-cyan-electric via-[#00B4D8] to-blue-corporate hover:shadow-glow-cyan'
                              : 'bg-gradient-to-r from-blue-corporate via-[#0066FF] to-cyan-electric hover:shadow-glow-blue'
                          )}
                        >
                          <span>{phase.ctaPrimary.label}</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      )}

                      {phase.ctaSecondary && (
                        <a
                          href={phase.ctaSecondary.href}
                          className="text-sm font-medium text-white/60 hover:text-white transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-white"
                        >
                          {phase.ctaSecondary.label}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Cue Hint at Start */}
        {scrollProgress < 0.04 && (
          <div className="absolute bottom-8 inset-x-0 z-30 flex flex-col items-center gap-2 pointer-events-none animate-bounce">
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
              Scroll to explore
            </span>
            <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
              <div
                className={cn(
                  'w-1 h-2 rounded-full',
                  accentColor === 'cyan' ? 'bg-cyan-electric' : 'bg-blue-corporate'
                )}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
