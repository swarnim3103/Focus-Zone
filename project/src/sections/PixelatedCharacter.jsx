// PixelatedCharacter.js
import React from 'react';

const PixelatedCharacter = () => {
  // Define the grid size and character pixels
  const characterGrid = [
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
  ];

  return (
    <div className="grid grid-cols-8 gap-0.5">
      {characterGrid.flat().map((pixel, index) => (
        <div
          key={index}
          className={`w-4 h-4 ${pixel ? 'bg-blue-300' : 'bg-transparent'}`}
        ></div>
      ))}
    </div>
  );
};

export default PixelatedCharacter;
