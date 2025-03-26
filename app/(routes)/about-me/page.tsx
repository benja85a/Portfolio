import TransitionPage from "@/components/transitionPage";
import ContainerPage from "@/components/container";
import TimeLine from "@/components/timeLine";
import React from "react";
import CounterServices from "@/components/counterServices";
import CoverParticles from "@/components/coverParticles";
import CircleImage from "@/components/circleImage";

const pageAboutMe = () => {
  return (
    <>
    <CoverParticles/>
      <TransitionPage />
      <CircleImage/>
      <ContainerPage>
        <h1
          className="text-2xl leading-tight text-center 
        md:text-center md:mt-5 "
        >
          Toda mi{" "}
          <span className="font-bold text-orange-600">
            trayectoria profesional
          </span>
        </h1>
         
        <CounterServices />
        <TimeLine/>
      </ContainerPage>
    </>
  );
};

export default pageAboutMe;
