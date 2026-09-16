import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function TorusKnot() {
  const ref = useRef();
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Slight float effect
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    
    // Parallax based on mouse
    const targetX = (state.mouse.x * Math.PI) / 10;
    const targetY = (state.mouse.y * Math.PI) / 10;
    ref.current.rotation.y += 0.05 * (targetX - ref.current.rotation.y);
    ref.current.rotation.x += 0.05 * (targetY - ref.current.rotation.x);
  });

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <points>
        <torusKnotGeometry args={[2, 0.6, 150, 20]} />
        <pointsMaterial 
          size={0.02} 
          color="#ffffff" 
          transparent 
          opacity={0.8} 
          blending={THREE.AdditiveBlending} 
        />
      </points>
    </group>
  );
}

function Dust() {
  const ref = useRef();
  
  // Generate random positions
  const count = 1000;
  const positions = new Float32Array(count * 3);
  for(let i=0; i<count*3; i++){
    positions[i] = (Math.random() - 0.5) * 15;
  }
  
  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 20;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.015} 
        color="#0ea5e9" 
        transparent 
        opacity={0.5} 
        blending={THREE.AdditiveBlending} 
      />
    </points>
  );
}

export default function Scene() {
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100vh', zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#0ea5e9" />
        <pointLight position={[-5, -5, 2]} intensity={3} color="#8b5cf6" />
        
        {/* Right side alignment for desktop */}
        <group position={[window.innerWidth > 1024 ? 3 : 0, 0, 0]}>
            <TorusKnot />
            <Dust />
        </group>
      </Canvas>
    </div>
  );
}
