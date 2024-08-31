import React from 'react';
const Hero = () => {
  return (
    <div className=" h-3/4 flex justify-center items-center flex-col">
    <hr className="border-green-950 ml-20"/>
    <h1 className="text-8xl p-10 pb-24 drop-shadow-md mt-20 underline">SnakeVoyage</h1>
    <div className="flex flex-1 justify-center">
      <p className="text-4xl pt-10 pb-20 md:pb-10 drop-shadow-md text-center pl-20 font-bold mr-10">
      Travel the World, One Snake at a Time
      </p>
    </div>
    <div className="mb-20 mt-20 text-xl font-bold mr-20 text-green-950">
    <p >Scroll Down To Know More</p>
    </div>
    </div>
  );
};

export default Hero;