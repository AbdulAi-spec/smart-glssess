'use client';

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { RotateCw, Compass, ZoomIn, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// High-End Procedural 3D Model for Convertible Studio Laptop
function LaptopModel({
  mode = 'clamshell',
  autoRotate = false,
}: {
  mode?: 'clamshell' | 'studio' | 'canvas';
  autoRotate?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const screenHingeRef = useRef<THREE.Group>(null);

  // Smooth mode transitions
  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }

    if (screenHingeRef.current) {
      let targetRotX = -1.8; // Clamshell ~105 deg
      let targetPosY = 0.05;
      let targetPosZ = -0.9;

      if (mode === 'studio') {
        // Pulled forward hover angle
        targetRotX = -0.65;
        targetPosY = 0.35;
        targetPosZ = -0.15;
      } else if (mode === 'canvas') {
        // Flat tablet sketch mode
        targetRotX = 0.02;
        targetPosY = 0.12;
        targetPosZ = 0.0;
      }

      screenHingeRef.current.rotation.x = THREE.MathUtils.damp(
        screenHingeRef.current.rotation.x,
        targetRotX,
        6,
        delta
      );
      screenHingeRef.current.position.y = THREE.MathUtils.damp(
        screenHingeRef.current.position.y,
        targetPosY,
        6,
        delta
      );
      screenHingeRef.current.position.z = THREE.MathUtils.damp(
        screenHingeRef.current.position.z,
        targetPosZ,
        6,
        delta
      );
    }
  });

  // Materials
  const titaniumMaterial = new THREE.MeshStandardMaterial({
    color: '#8e9096',
    metalness: 0.85,
    roughness: 0.25,
    envMapIntensity: 1.2,
  });

  const champagneAccent = new THREE.MeshStandardMaterial({
    color: '#D4AF37',
    metalness: 0.9,
    roughness: 0.2,
  });

  const screenBezelMaterial = new THREE.MeshStandardMaterial({
    color: '#08080a',
    metalness: 0.5,
    roughness: 0.6,
  });

  const screenGlassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#051124',
    emissive: '#0a2540',
    emissiveIntensity: 0.4,
    roughness: 0.1,
    metalness: 0.1,
    transmission: 0.3,
    transparent: true,
  });

  const keyboardMaterial = new THREE.MeshStandardMaterial({
    color: '#15151b',
    metalness: 0.3,
    roughness: 0.8,
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Base Chassis */}
      <mesh material={titaniumMaterial} position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.1, 2.0]} />
      </mesh>

      {/* Keyboard Well */}
      <mesh material={screenBezelMaterial} position={[0, 0.051, -0.1]}>
        <boxGeometry args={[2.5, 0.005, 1.2]} />
      </mesh>

      {/* Keyboard Key Area */}
      <mesh material={keyboardMaterial} position={[0, 0.055, -0.1]}>
        <boxGeometry args={[2.4, 0.006, 1.1]} />
      </mesh>

      {/* Trackpad */}
      <mesh material={titaniumMaterial} position={[0, 0.052, 0.65]}>
        <boxGeometry args={[1.1, 0.004, 0.6]} />
      </mesh>

      {/* Subtle Champagne Edge Chamfer Accent */}
      <mesh material={champagneAccent} position={[0, -0.045, 0]}>
        <boxGeometry args={[2.82, 0.01, 2.02]} />
      </mesh>

      {/* Dual Hinge Mounts */}
      <mesh material={champagneAccent} position={[-0.8, 0.06, -0.98]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.2, 16]} />
      </mesh>
      <mesh material={champagneAccent} position={[0.8, 0.06, -0.98]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.2, 16]} />
      </mesh>

      {/* Display Assembly & Dual Hinge Arm */}
      <group ref={screenHingeRef} position={[0, 0.05, -0.9]}>
        {/* Screen Lid Back */}
        <mesh material={titaniumMaterial} position={[0, 0.95, -0.02]} castShadow>
          <boxGeometry args={[2.8, 1.9, 0.04]} />
        </mesh>

        {/* Minimalist Monogram on Back of Lid */}
        <mesh material={champagneAccent} position={[0, 0.95, -0.042]}>
          <circleGeometry args={[0.12, 32]} />
        </mesh>

        {/* Screen Glass Front */}
        <mesh material={screenGlassMaterial} position={[0, 0.95, 0.005]}>
          <boxGeometry args={[2.7, 1.8, 0.005]} />
        </mesh>

        {/* Bezel frame */}
        <mesh material={screenBezelMaterial} position={[0, 0.95, 0.002]}>
          <boxGeometry args={[2.76, 1.86, 0.003]} />
        </mesh>
      </group>
    </group>
  );
}

// High-End Procedural 3D Model for Neural AR Smart Glasses
function GlassesModel({ autoRotate = false }: { autoRotate?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  const titaniumDark = new THREE.MeshStandardMaterial({
    color: '#24252a',
    metalness: 0.8,
    roughness: 0.3,
  });

  const champagneAccent = new THREE.MeshStandardMaterial({
    color: '#D4AF37',
    metalness: 0.9,
    roughness: 0.2,
  });

  const waveguideLens = new THREE.MeshPhysicalMaterial({
    color: '#00f0ff',
    emissive: '#003344',
    emissiveIntensity: 0.3,
    roughness: 0.05,
    metalness: 0.1,
    transmission: 0.85,
    transparent: true,
    opacity: 0.8,
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[1.4, 1.4, 1.4]}>
      {/* Front Bridge */}
      <mesh material={titaniumDark} position={[0, 0.3, 0]}>
        <boxGeometry args={[0.3, 0.08, 0.08]} />
      </mesh>

      {/* Left Lens Rim */}
      <mesh material={titaniumDark} position={[-0.7, 0.2, 0]}>
        <torusGeometry args={[0.45, 0.05, 16, 32]} />
      </mesh>
      {/* Left Waveguide Lens Glass */}
      <mesh material={waveguideLens} position={[-0.7, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.01, 32]} />
      </mesh>

      {/* Right Lens Rim */}
      <mesh material={titaniumDark} position={[0.7, 0.2, 0]}>
        <torusGeometry args={[0.45, 0.05, 16, 32]} />
      </mesh>
      {/* Right Waveguide Lens Glass */}
      <mesh material={waveguideLens} position={[0.7, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.01, 32]} />
      </mesh>

      {/* Left Temple Stem */}
      <group position={[-1.15, 0.25, -0.7]}>
        <mesh material={titaniumDark} rotation={[0, 0.05, 0]}>
          <boxGeometry args={[0.07, 0.14, 1.4]} />
        </mesh>
        {/* Left Sensor Chip Node */}
        <mesh material={champagneAccent} position={[-0.04, 0, -0.1]}>
          <boxGeometry args={[0.01, 0.08, 0.2]} />
        </mesh>
      </group>

      {/* Right Temple Stem */}
      <group position={[1.15, 0.25, -0.7]}>
        <mesh material={titaniumDark} rotation={[0, -0.05, 0]}>
          <boxGeometry args={[0.07, 0.14, 1.4]} />
        </mesh>
        {/* Right Sensor Chip Node */}
        <mesh material={champagneAccent} position={[0.04, 0, -0.1]}>
          <boxGeometry args={[0.01, 0.08, 0.2]} />
        </mesh>
      </group>
    </group>
  );
}

interface ModelViewer3DProps {
  type: 'laptop' | 'glasses';
  laptopMode?: 'clamshell' | 'studio' | 'canvas';
  className?: string;
}

export default function ModelViewer3D({
  type,
  laptopMode = 'clamshell',
  className,
}: ModelViewer3DProps) {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div
      className={cn(
        'relative w-full aspect-[16/9] min-h-[420px] rounded-3xl overflow-hidden bg-obsidian-900/90 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)]',
        className
      )}
    >
      {/* Top HUD Telemetry */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-wider text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
          <span className="text-neutral-400">WEBGL 3D VIEWPORT:</span>
          <span className="text-champagne font-semibold uppercase">
            {type === 'laptop' ? `DJS140S • ${laptopMode.toUpperCase()}` : 'NEURAL AR TITANIUM'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:border-champagne/40 text-[10px] font-mono text-neutral-300 hover:text-white transition-colors"
          >
            <RotateCw className={cn('w-3 h-3 text-champagne', autoRotate && 'animate-spin')} />
            <span>{autoRotate ? 'ORBIT ACTIVE' : 'ORBIT PAUSED'}</span>
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas */}
      <Canvas shadows dpr={[1, 2]} className="w-full h-full cursor-grab active:cursor-grabbing">
        <PerspectiveCamera makeDefault position={[0, 1.2, 3.6]} fov={45} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-5, 4, -4]} intensity={0.6} color="#D4AF37" />
        <pointLight position={[0, -2, 2]} intensity={0.5} color="#457b9d" />

        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
            {type === 'laptop' ? (
              <LaptopModel mode={laptopMode} autoRotate={autoRotate} />
            ) : (
              <GlassesModel autoRotate={autoRotate} />
            )}
          </Float>
          <ContactShadows position={[0, -0.9, 0]} opacity={0.6} scale={6} blur={2.2} far={4} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          minDistance={2}
          maxDistance={5.5}
          maxPolarAngle={Math.PI / 2 + 0.1}
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Bottom Telemetry Overlay */}
      <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between text-[10px] font-mono text-neutral-400 pointer-events-none">
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-champagne" />
          <span>FULL 360° ORBITAL DRAG ENABLED</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-champagne" />
          <span>PBR CHOP & ANODIZED SHADERS</span>
        </div>
      </div>
    </div>
  );
}
