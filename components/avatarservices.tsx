import React from "react";
import MotionTransition from "./transitionComponent";
import Image from "next/image";

const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:hidden md:absolute"
    >
      <div className="relative w-[350px] h-[350px]">
        <Image
          src="/services.png"
          alt="Avatar"
          fill={true}
          className="object-cover"
        />
      </div>
    </MotionTransition>
  );
};

export default AvatarServices;
