// src/ThreeScene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import AnimatedCube from './AnimatedCube';

const ThreeScene = () => {
  return (
    <Canvas className="h-full">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <AnimatedCube />
    </Canvas>
  );
};

export default ThreeScene;
