'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { pointsInner, pointsOuter } from './particleRingUtils';
import * as THREE from 'three';

interface PointProps {
  position: [number, number, number];
  color: string;
}

const Point = ({ position, color }: PointProps) => {
  return (
    <Sphere position={position} args={[0.15, 12, 12]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.8}
        roughness={0.3}
        color={color}
        toneMapped={false}
      />
    </Sphere>
  );
};

const PointCircle = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const ParticleRing = () => {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{
          position: [0, 0, 18],
          fov: 60,
        }}
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent',
        }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <pointLight position={[-20, 10, -20]} intensity={20.0} color="#22d3ee" />
          <pointLight position={[20, -10, 20]} intensity={12.0} color="#3b82f6" />
          <pointLight position={[0, 0, 15]} intensity={5.0} color="#93c5fd" />
          <PointCircle />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ParticleRing;

