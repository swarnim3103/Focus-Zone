// src/App.js
import React from 'react';
import ThreeScene from './ThreeScene';
import './index.css'; // Make sure to import Tailwind CSS

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="w-full h-full">
        <ThreeScene />
      </div>
    </div>
  );
}

export default App;

