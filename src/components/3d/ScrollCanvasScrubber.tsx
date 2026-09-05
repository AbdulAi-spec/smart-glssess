'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ScrollMilestone {
  startProgress: number; // 0.0 - 1.0
  endProgress: number;   // 0.0 - 1.0
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  specs?: { label: string; value: string }[];
  position?: 'left' | 'right' | 'center';
}

interface ScrollCanvasScrubberProps {
  folder: 'laptop' | 'glasses';
  totalFrames?: number;
  milestones: ScrollMilestone[];
  className?: string;
  scrollHeight?: string; // e.g. "h-[450vh]"
}

export default function ScrollCanvasScrubber({
  folder,
  totalFrames = 300,
  milestones,
  className,
  scrollHeight = 'h-[450vh]',
}: ScrollCanvasScrubberProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const targetFrameRef = useRef(1);
  const currentFrameRef = useRef(1);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Array of preloaded HTMLImageElements
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  const getFrameUrl = useCallback(
    (index: number) => {
      const padded = String(index).padStart(3, '0');
      return `/frames/${folder}/ezgif-frame-${padded}.jpg`;
    },
    [folder]
  );

  // Progressive Preloading of all 300 frames
  useEffect(() => {
    let isCancelled = false;
    imagesRef.current = new Array(totalFrames + 1).fill(null);
    let count = 0;

    // Phase 1: Load every 4th keyframe first for immediate interactivity
    const keyFrames: number[] = [];
    for (let i = 1; i <= totalFrames; i += 4) {
      keyFrames.push(i);
    }

    // Phase 2: Load the rest
    const remainingFrames: number[] = [];
    for (let i = 1; i <= totalFrames; i++) {
      if (i % 4 !== 0) remainingFrames.push(i);
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
            if (count >= 20) {
              setIsReady(true);
            }
          }
          resolve();
        };
        img.onerror = () => resolve();
      });
    };

    const runPreload = async () => {
      await Promise.all(keyFrames.map(loadSingle));
      if (isCancelled) return;

      const chunkSize = 20;
      for (let i = 0; i < remainingFrames.length; i += chunkSize) {
        if (isCancelled) break;
        const chunk = remainingFrames.slice(i, i + chunkSize);
        await Promise.all(chunk.map(loadSingle));
      }
    };

    runPreload();

    return () => {
      isCancelled = true;
    };
  }, [totalFrames, getFrameUrl]);

  // High DPI Draw Frame on Canvas
  const drawFrame = useCallback(
    (frameNum: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const bounded = Math.max(1, Math.min(totalFrames, Math.round(frameNum)));

      // Fallback to nearest loaded image if exact frame is buffering
      let img = imagesRef.current[bounded];
      if (!img) {
        for (let off = 1; off < 20; off++) {
          if (bounded + off <= totalFrames && imagesRef.current[bounded + off]) {
            img = imagesRef.current[bounded + off];
            break;
          }
          if (bounded - off >= 1 && imagesRef.current[bounded - off]) {
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
      ctx.clearRect(0, 0, rect.width, rect.height);

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

  // Window Scroll Listener mapping progress 0.0 -> 1.0
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDistance = rect.height - windowHeight;

      if (totalDistance <= 0) return;

      // Calculate progress 0 to 1 based on how far container has scrolled past top
      const currentScroll = -rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / totalDistance));

      setScrollProgress(progress);

      // Map progress to frame index: 1 -> totalFrames
      const frameIndex = 1 + progress * (totalFrames - 1);
      targetFrameRef.current = frameIndex;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  // Butter-Smooth 60fps RAF Lerp Loop
  useEffect(() => {
    let animId: number;

    const render = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.005) {
        // High inertia smooth lerp dampening
        currentFrameRef.current += diff * 0.18;
      }

      drawFrame(currentFrameRef.current);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [drawFrame]);

  return (
    <div ref={containerRef} className={cn('relative w-full', scrollHeight, className)}>
      {/* Sticky Fullscreen 3D Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian-950">
        {/* Ambient Dark-Mode Radial Glow */}
        <div className="absolute inset-0 bg-radial-radial from-champagne/[0.05] via-obsidian-950/40 to-obsidian-950 pointer-events-none" />

        {/* Subtle Tech Blueprint Grid Lines */}
        <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />

        {/* Fullscreen 3D Frame Render Canvas */}
        <canvas
          ref={canvasRef}
          className="relative z-10 w-full h-full object-contain max-h-[85vh] max-w-[95vw] pointer-events-none"
        />

        {/* Loading Buffer Overlay */}
        {!isReady && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-obsidian-950/90 backdrop-blur-md gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-champagne/20 border-t-champagne animate-spin" />
            <div className="text-xs font-mono tracking-widest text-champagne uppercase">
              Initializing 3D Precision Render ({Math.min(100, Math.round((imagesLoaded / 30) * 100))}%)
            </div>
          </div>
        )}

        {/* Floating Narrative Annotations tied to Scroll Progress */}
        {milestones.map((ms, idx) => {
          const isVisible =
            scrollProgress >= ms.startProgress && scrollProgress <= ms.endProgress;

          // Compute opacity: fade in at start, stay full, fade out near end
          const range = ms.endProgress - ms.startProgress;
          const localProgress = (scrollProgress - ms.startProgress) / range;
          let opacity = 0;
          if (localProgress >= 0 && localProgress <= 1) {
            if (localProgress < 0.2) opacity = localProgress / 0.2;
            else if (localProgress > 0.8) opacity = (1 - localProgress) / 0.2;
            else opacity = 1;
          }

          if (opacity <= 0.02) return null;

          const positionClasses = {
            left: 'left-6 sm:left-16 md:left-24 max-w-sm sm:max-w-md text-left',
            right: 'right-6 sm:right-16 md:right-24 max-w-sm sm:max-w-md text-right ml-auto',
            center: 'inset-x-6 sm:inset-x-auto mx-auto max-w-lg text-center',
          };

          return (
            <div
              key={idx}
              style={{ opacity }}
              className={cn(
                'absolute z-20 top-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300',
                positionClasses[ms.position || 'left']
              )}
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.1)] space-y-3">
                {/* Champagne Badge */}
                <div
                  className={cn(
                    'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 text-[10px] font-mono tracking-widest uppercase text-champagne',
                    ms.position === 'right' && 'ml-auto'
                  )}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
                  <span>{ms.badge}</span>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-tight">
                  {ms.title}
                  {ms.highlight && (
                    <span className="block text-gradient-champagne font-normal">
                      {ms.highlight}
                    </span>
                  )}
                </h3>

                {/* Subtext description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                  {ms.description}
                </p>

                {/* Specs telemetry pills if provided */}
                {ms.specs && ms.specs.length > 0 && (
                  <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2">
                    {ms.specs.map((sp, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono"
                      >
                        <span className="text-neutral-400 mr-1.5">{sp.label}:</span>
                        <span className="text-champagne font-semibold">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Minimalist Right Telemetry Progress Line */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-3 pointer-events-none">
          <div className="text-[9px] font-mono text-champagne/80 -rotate-90 origin-center tracking-widest uppercase mb-4">
            SCROLL 3D
          </div>
          <div className="w-[1px] h-32 bg-white/10 relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 left-0 w-full bg-champagne transition-all duration-150"
              style={{ height: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <div className="text-[10px] font-mono text-white/80 font-bold">
            {Math.round(scrollProgress * 100)}%
          </div>
        </div>

        {/* Bottom Scroll Cue Indicator (fades out once user starts scrolling) */}
        {scrollProgress < 0.05 && (
          <div className="absolute bottom-8 inset-x-0 z-20 flex flex-col items-center gap-2 pointer-events-none animate-bounce">
            <span className="text-[10px] font-mono tracking-widest text-champagne uppercase">
              SCROLL DOWN TO TRIGGER 3D TRANSFORMATION
            </span>
            <div className="w-5 h-8 rounded-full border border-champagne/40 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-champagne animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
