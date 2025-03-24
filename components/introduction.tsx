"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60 pt-16">
      {" "}
      {/* Añadí pt-16 para compensar el navbar */}
      <div className="z-20 grid items-center h-auto md:h-full p-6 md:py-0 md:grid-cols-2">
        {/* Imagen más pequeña en móviles */}
        <div className="flex justify-center">
          <Image
            src="/home-4.png"
            priority
            className="w-80 md:w-96"
            width="800"
            height="800"
            alt="profile pic"
          />
        </div>

        <div className="flex flex-col justify-center max-w-md mx-auto">
          <h1 className="text-center leading-tight md:text-left md:text-4xl">
            Si puedes pensarlo,{" "}
            <TypeAnimation
              sequence={[
                "puedes programarlo",
                1000,
                "puedes crearlo",
                1000,
                "puedes lograrlo",
                1000,
                "puede materializarlo",
                1000,
                "puedes optimizarlo",
                1000,
                "puedes lograrlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-amber-700"
            />
          </h1>

          <p className="mt-1 text-center text-lg md:text-left md:mt-5">
            Como desarrollador Front-End y diseñador me dedico a combinar diseño
            y funcionalidad para crear experiencias digitales impactantes y
            accesibles.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/projects"
              className="px-3 py-2 transition-all border-2 cursor-pointer 
              text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </Link>
            <Link
              href="/projects"
              className="px-3 py-2 transition-all border-2 cursor-pointer 
              text-md w-fit rounded-xl hover:shadow-xl text-orange-500 border-amber-600 hover:shadow-white/50"
            >
              Contactame
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
