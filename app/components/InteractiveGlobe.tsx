"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

function GlobeModel({
  onHover,
}: {
  onHover: (hovered: boolean) => void;
}) {
  const { scene } = useGLTF("/globestudio-world-globe.glb");

  return (
    <primitive
      object={scene}
      scale={1}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
    />
  );
}

function GlobeScene() {
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  return (
    <>
      <ambientLight intensity={1.8} />
      <directionalLight position={[5, 5, 5]} intensity={2.5} />
      <directionalLight position={[-5, -2, -5]} intensity={1} />

      <Suspense fallback={null}>
        <GlobeModel onHover={setHovered} />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate
        enableDamping
        dampingFactor={0.06}
        autoRotate={!hovered && !dragging}
        autoRotateSpeed={1.2}
        onStart={() => setDragging(true)}
        onEnd={() => setDragging(false)}
      />
    </>
  );
}

export default function InteractiveGlobe() {
  return (
    <div
      className="interactive-globe"
      role="img"
      aria-label="Interactive 3D globe. Drag to rotate."
    >
      <Canvas
        camera={{ position: [0,0,7], fov: 40 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <GlobeScene />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/globestudio-world-globe.glb");