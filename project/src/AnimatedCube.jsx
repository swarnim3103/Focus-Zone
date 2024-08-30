// src/AnimatedCube.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AnimatedCube = () => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

export default AnimatedCube;
