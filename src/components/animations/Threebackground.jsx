import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Starfield(props) {
  const ref = useRef();
  
  // Generate random points in a sphere
  const sphere = useMemo(() => {
    // Generate Float32Array directly with math
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 2.5 + Math.random() * 2; // radius between 2.5 and 4.5
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i*3] = x;
      positions[i*3+1] = y;
      positions[i*3+2] = z;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#1774C3"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-white">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <fog attach="fog" args={['#ffffff', 1, 3.5]} />
        <Starfield />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
