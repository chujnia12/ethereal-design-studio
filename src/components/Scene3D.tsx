import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const GlassSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={2.4}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#ffffff"
          roughness={0.05}
          metalness={0.98}
          distort={0.2}
          speed={1.5}
          envMapIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

const WireframeRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <mesh ref={ringRef} scale={3.8}>
      <torusGeometry args={[1, 0.015, 32, 120]} />
      <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.05} transparent opacity={0.3} />
    </mesh>
  );
};

const OuterRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3 + Math.cos(state.clock.elapsedTime * 0.15) * 0.1;
      ringRef.current.rotation.z = -state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={ringRef} scale={4.5}>
      <torusGeometry args={[1, 0.008, 16, 100]} />
      <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} transparent opacity={0.15} />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ffffff" />
        <pointLight position={[3, -3, -5]} intensity={0.3} color="#cccccc" />
        <GlassSphere />
        <WireframeRing />
        <OuterRing />
      </Canvas>
    </div>
  );
};

export default Scene3D;
