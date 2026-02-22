import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const GoldSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#d4a039"
          roughness={0.15}
          metalness={0.95}
          distort={0.25}
          speed={2}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
};

const FloatingRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={ringRef} scale={3.5}>
      <torusGeometry args={[1, 0.02, 32, 100]} />
      <meshStandardMaterial color="#d4a039" metalness={1} roughness={0.1} />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#fff5e0" />
        <pointLight position={[-5, -5, 5]} intensity={0.8} color="#d4a039" />
        <pointLight position={[5, -3, -5]} intensity={0.4} color="#ffffff" />
        <GoldSphere />
        <FloatingRing />
      </Canvas>
    </div>
  );
};

export default Scene3D;
