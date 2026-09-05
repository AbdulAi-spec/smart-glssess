'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCw, Sparkles, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FrameScrubberProps {
  folder: 'laptop' | 'glasses';
  totalFrames?: number;
  initialFrame?: number;
  className?: string;
  subsystemCallouts?: {
    frameStart: number;
    frameEnd: number;
    title: string;
    description: string;
  }[];
  autoSpinDefault?: boolean;
  aspectRatio?: string;
  showControls?: boolean;
  label?: string;
}

export default function FrameScrubber({
  folder,
  totalFrames = 300,
  initialFrame = 1,
  className,
  subsystemCallouts = [],
  autoSpinDefault = false,
  aspectRatio = '16/9',
  showControls = true,
  label = '360° PHOTOREALISTIC TELEMETRY',
}: FrameScrubberProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentFrame, setCurrentFrame] = useState(initialFrame);
  const targetFrameRef = useRef(initialFrame);
  const currentFrameRef = useRef(initialFrame);

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoSpinDefault);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const dragStartFrameRef = useRef(initialFrame);

  // Cached HTMLImageElements
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  // Format frame number: ezgif-frame-001.jpg
  const getFrameUrl = useCallback((index: number) => {
    const padded = String(index).padStart(3, '0');
    return `/frames/${folder}/ezgif-frame-${padded}.jpg`;
  }, [folder]);

  // Progressive Preloading
  useEffect(() => {
    let isCancelled = false;
    imagesRef.current = new Array(totalFrames + 1).fill(null);

    let loadedCount = 0;

    // Load key frames first (every 5th frame)
    const keyIndices: number[] = [];
    for (let i = 1; i <= totalFrames; i += 5) {
      keyIndices.push(i);
    }
    // Then the rest
    const remainingIndices: number[] = [];
    for (let i = 1; i <= totalFrames; i++) {
      if (i % 5 !== 0) remainingIndices.push(i);
    }

    const loadSingleImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(index);
        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current[index] = img;
            loadedCount++;
            setImagesLoaded(loadedCount);
            if (loadedCount >= Math.min(30, totalFrames)) {
              setIsReady(true);
            }
          }
          resolve();
        };
        img.onerror = () => resolve();
      });
    };

    const runPreload = async () => {
      // Phase 1: Keyframes
      await Promise.all(keyIndices.map(loadSingleImage));
      if (isCancelled) return;

      // Phase 2: Remaining frames in chunks
      const chunkSize = 15;
      for (let i = 0; i < remainingIndices.length; i += chunkSize) {
        if (isCancelled) break;
        const chunk = remainingIndices.slice(i, i + chunkSize);
        await Promise.all(chunk.map(loadSingleImage));
      }
    };

    runPreload();

    return () => {
      isCancelled = true;
    };
  }, [totalFrames, getFrameUrl]);

  // Draw frame on canvas with aspect fit
  const drawFrame = useCallback((frameNum: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const boundedFrame = Math.max(1, Math.min(totalFrames, Math.round(frameNum)));
    
    // Find closest loaded image if exact frame is not ready
    let img = imagesRef.current[boundedFrame];
    if (!img) {
      for (let offset = 1; offset < 15; offset++) {
        if (boundedFrame + offset <= totalFrames && imagesRef.current[boundedFrame + offset]) {
          img = imagesRef.current[boundedFrame + offset];
          break;
        }
        if (boundedFrame - offset >= 1 && imagesRef.current[boundedFrame - offset]) {
          img = imagesRef.current[boundedFrame - offset];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Retina DPI handling
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Calculate aspect fit
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = rect.width / rect.height;
    let drawWidth = rect.width;
    let drawHeight = rect.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = rect.height;
      drawWidth = drawHeight * imgRatio;
      offsetX = (rect.width - drawWidth) / 2;
    } else {
      drawWidth = rect.width;
      drawHeight = drawWidth / imgRatio;
      offsetY = (rect.height - drawHeight) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  }, [totalFrames]);

  // Smooth lerp loop for 60fps inertia
  useEffect(() => {
    let animId: number;

    const renderLoop = () => {
      if (isPlaying && !isDragging) {
        targetFrameRef.current = (targetFrameRef.current % totalFrames) + 0.4;
      }

      // Lerp current frame towards target frame
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.2;
        setCurrentFrame(Math.round(currentFrameRef.current));
      }

      drawFrame(currentFrameRef.current);
      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, isDragging, totalFrames, drawFrame]);

  // Mouse & Touch Drag Interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPlaying(false);
    dragStartXRef.current = e.clientX;
    dragStartFrameRef.current = currentFrameRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartXRef.current;
    const sensitivity = 0.5; // frames per pixel
    let newFrame = dragStartFrameRef.current + deltaX * sensitivity;

    // Wrap around 1..totalFrames
    while (newFrame > totalFrames) newFrame -= totalFrames;
    while (newFrame < 1) newFrame += totalFrames;

    targetFrameRef.current = newFrame;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    setIsDragging(true);
    setIsPlaying(false);
    dragStartXRef.current = e.touches[0].clientX;
    dragStartFrameRef.current = currentFrameRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - dragStartXRef.current;
    const sensitivity = 0.5;
    let newFrame = dragStartFrameRef.current + deltaX * sensitivity;

    while (newFrame > totalFrames) newFrame -= totalFrames;
    while (newFrame < 1) newFrame += totalFrames;

    targetFrameRef.current = newFrame;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Find active subsystem callout
  const activeCallout = subsystemCallouts.find(
    (c) => currentFrame >= c.frameStart && currentFrame <= c.frameEnd
  );

  // Compute rotation angle (approximate degrees 0-360)
  const degrees = Math.round(((currentFrame - 1) / totalFrames) * 360);

  return (
    <div
      ref={containerRef}
      className={cn(
        'group relative overflow-hidden rounded-3xl bg-obsidian-900/90 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none',
        className
      )}
    >
      {/* Top Header Telemetry */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-wider text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
          <span className="text-neutral-400">{label}:</span>
          <span className="text-champagne font-semibold">{degrees}°</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-300">
            <span>FRAME</span>
            <span className="text-white font-bold">{String(currentFrame).padStart(3, '0')}</span>
            <span className="text-neutral-400">/ {totalFrames}</span>
          </div>

          {showControls && (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="pointer-events-auto p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:border-champagne/40 text-neutral-300 hover:text-white transition-colors"
              title={isPlaying ? 'Pause auto-orbit' : 'Play auto-orbit'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-champagne" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      </div>

      {/* Main Canvas Viewport with cursor grab */}
      <div
        className={cn(
          'relative w-full cursor-grab active:cursor-grabbing flex items-center justify-center overflow-hidden',
          aspectRatio === '16/9' && 'aspect-[16/9]',
          aspectRatio === '4/3' && 'aspect-[4/3]',
          aspectRatio === '21/9' && 'aspect-[21/9]'
        )}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-tech opacity-30 pointer-events-none" />

        {/* Ambient radial glow */}
        <div className="absolute inset-0 bg-radial-radial from-champagne/[0.04] to-transparent pointer-events-none" />

        {/* The Frame Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain relative z-10"
        />

        {/* Loading Indicator */}
        {!isReady && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-obsidian-950/80 backdrop-blur-sm gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-champagne/20 border-t-champagne animate-spin" />
            <div className="text-[11px] font-mono tracking-widest text-champagne uppercase">
              Buffering Precision Telemetry ({Math.round((imagesLoaded / 30) * 100)}%)
            </div>
          </div>
        )}

        {/* Drag Hint Overlay */}
        <div className="absolute bottom-16 inset-x-0 z-20 flex justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-300 flex items-center gap-2">
            <RotateCw className="w-3 h-3 text-champagne animate-spin" style={{ animationDuration: '4s' }} />
            <span>DRAG HORIZONTALLY TO ROTATE 360°</span>
          </div>
        </div>

        {/* Active Subsystem Breakdown Callout Overlay */}
        {activeCallout && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-16 left-6 max-w-xs z-20 p-3.5 rounded-2xl bg-black/80 backdrop-blur-xl border border-champagne/40 shadow-glow-champagne-sm pointer-events-none"
          >
            <div className="flex items-center gap-2 text-[10px] font-mono text-champagne uppercase tracking-widest mb-1">
              <Sparkles className="w-3 h-3" />
              <span>{activeCallout.title}</span>
            </div>
            <p className="text-xs text-neutral-300 leading-snug font-sans">
              {activeCallout.description}
            </p>
          </motion.div>
        )}
      </div>

      {/* Bottom Precision Scrubber Bar */}
      {showControls && (
        <div className="relative z-20 px-6 py-3 bg-black/40 border-t border-white/[0.06] flex items-center gap-4">
          <button
            onClick={() => {
              targetFrameRef.current = 1;
              setIsPlaying(false);
            }}
            className="text-[10px] font-mono text-neutral-400 hover:text-white uppercase tracking-wider"
          >
            RESET
          </button>

          <div className="relative flex-1 flex items-center">
            <input
              type="range"
              min={1}
              max={totalFrames}
              value={currentFrame}
              onChange={(e) => {
                const val = Number(e.target.value);
                targetFrameRef.current = val;
                currentFrameRef.current = val;
                setCurrentFrame(val);
                setIsPlaying(false);
              }}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D4AF37] hover:accent-[#E6CA85]"
            />
          </div>

          <div className="text-[10px] font-mono text-champagne tracking-widest">
            {degrees}° DEG
          </div>
        </div>
      )}
    </div>
  );
}
