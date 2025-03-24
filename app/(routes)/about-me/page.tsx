import TransitionPage from "@/components/transitionPage";
import ContainerPage from "@/components/container";
import TimeLine from "@/components/timeLine";
import React from "react";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counterServices";

const pageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h1
          className="text-2xl leading-tight text-center 
        md:text-left md:mt-5 "
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
