import React, { useState } from "react";
import {Typewriter} from "./index"
const Hero = () => {
 
  return (
    <div className=" h-3/4 flex justify-center items-center flex-col bg-gradient-to-b from-customBlue4 from-4% via-white via-20% to-customBlue4 to-100%">
    <div className="">
    <Typewriter text="FocusZone" typingSpeed={100} erasingSpeed={50} delay={2000}/>
    </div>
   
    <div className="flex flex-1 justify-center">
      <p className="text-4xl text-white underline pt-10 pb-20 md:pb-10 drop-shadow-md text-center pl-20 font-bold mr-10">
      Defeat Distractions, Embrace Focus
      </p>
    </div>
    </div>
  );
};

export default Hero;