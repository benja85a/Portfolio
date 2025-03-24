import React from "react";
import MotionTransition from "@/components/transitionComponent";
import Link from "next/link";
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        <div className="container md:flex justify-between max-w-6xl mx-auto md:fex px-20">
          <Link href="/">
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Benja<span className="text-amber-700">Dev</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7 ">
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-orange-500"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
