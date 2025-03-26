"use client";
import React from "react";
import MotionTransition from "./transitionComponent";
import Image from "next/image";

const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="bottom"
      className="fixed bottom-0 left-0 z-0 hidden lg:block"
    >
      <Image
        src="/innovation-amico.svg"
        width={150}
        height={150}
        className="w-full h-full"
        alt="Avatar portfolio"
      />
    </MotionTransition>
  );
};

export default AvatarPortfolio;
