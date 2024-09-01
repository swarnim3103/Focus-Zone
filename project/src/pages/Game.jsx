import React, { useState } from 'react';
import {Nav,Footer,PixelatedCharacter} from '../sections/index.js';

function Game() {
  const [attributes, setAttributes] = useState({
    punch: 52,
    kick: 54,
    blast: 50,
    smash: 53,
  });

  const handleAttack = (type) => {
    // For simplicity, this just reduces the selected attribute by 1.
    setAttributes((prev) => ({
      ...prev,
      [type]: prev[type] - 1,
    }));
  };

  return (
    <>
    <Nav page="section"/>
    <div className='bg-gradient-to-b from-customBlue4 to-white'>
    <div className="p-4 rounded-lg shadow-lg">
      <div className="flex justify-between mb-4">
        {/* Attributes Section */}
        <div className="w-1/3 text-black p-20 rounded-lg">
          <h3 className=" font-bold mb-4 text-2xl">Your Attributes</h3>
          {Object.entries(attributes).map(([key, value]) => (
            <div key={key} className="mb-2">
              <div className=" mb-1">${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}</div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className={`h-full rounded-full ${
                  key === 'punch' ? 'bg-customBlue' :
                  key === 'kick' ? 'bg-blue-500' :
                  key === 'blast' ? 'bg-customBlue3' :
                  'bg-blue-200'
                }`} style={{ width: `${value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Battle Section */}
        <div className="w-2/3  p-4 rounded-lg">
          <h3 className="text-2xl font-bold text-center">Battle</h3>
          <div className="flex justify-center items-center space-x-6 mt-4">
            <div className="text-center">
              <div className=" mb-2">IsaacBot</div>
              <PixelatedCharacter/>
              <div className=" mt-2">Lv 100</div>
              <div className="w-full bg-green-500 rounded-full h-4">
                <div className="h-full bg-green-800 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="text-center p-20">
              <div className="mb-2">ShadowBot</div>
             <PixelatedCharacter/>
              <div className=" mt-2">Lv 85</div>
              <div className="w-full bg-green-500 rounded-full h-4">
                <div className="h-full bg-green-800 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="bg-customBlue px-4 py-2 rounded text-white font-bold"
              onClick={() => handleAttack('punch')}
            >
              Punch
            </button>
            <button
              className="bg-blue-500 px-4 py-2 rounded text-white font-bold"
              onClick={() => handleAttack('kick')}
            >
              Kick
            </button>
            <button
              className="bg-customBlue3 px-4 py-2 rounded text-white font-bold"
              onClick={() => handleAttack('blast')}
            >
              Blast
            </button>
            <button
              className="bg-blue-200 px-4 py-2 rounded text-white font-bold"
              onClick={() => handleAttack('smash')}
            >
              Smash
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
   <Footer/>
    </>
    
  );
}

export default Game;