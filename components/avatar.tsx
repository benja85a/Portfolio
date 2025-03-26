"use client";
import React from "react";
import MotionTransition from "./transitionComponent";
import Image from "next/image";

const Avatar = () => {
  return (
    <MotionTransition
      position="bottom"
      className="fixed bottom-0 right-0 z-50 hidden lg:block"
    >
      <Image
        src="/avatar-pana.svg"
        width={550}
        height={550}
        className="w-full h-full"
        alt="Avatar"
      />
    </MotionTransition>
  );
};

export default Avatar;
