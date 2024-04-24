"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

const WavyBack = () => {
  return (
    <div className="h-[40rem] w-full  relative">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className=" sm:mt-20 flex flex-col justify-between items-center">
        <p className="text-2xl md:text-6xl lg:text-7xl text-white font-bold inter-var text-center">
  Elevate Your Web Development Experience
</p>
<p className="text-base md:text-2xl mt-6 text-white font-normal inter-var text-center">
  Explore innovative techniques and tools to enhance your web projects
</p>
 
        </div>
      </WavyBackground>
    </div>
  );
};

export default WavyBack;
