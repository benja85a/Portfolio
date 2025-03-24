"use client"
import React from "react";
import MotionTransition from "./transitionComponent";
import Image from "next/image";

const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="fixed bottom-0 right-0 w-50 h-50 
      md:w-96 md:h-96 z-50"
    >
      <Image
        src="/avatar-1.png"
        width={350}
        height={350}
        className="w-full h-full"
        alt="Avatar"
      />
    </MotionTransition>
  );
};

export default Avatar;
