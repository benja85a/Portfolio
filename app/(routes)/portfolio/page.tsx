"use client";
import ContainerPage from "@/components/container";
import CoverParticles from "@/components/coverParticles";
import PortfolioBox from "@/components/portfolioBox";
import TransitionPage from "@/components/transitionPage";
import { dataPortfolio } from "@/data";
import React from "react";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <CoverParticles />
      <TransitionPage />

      <div className="flex flex-col justify-center h-full">
        <h1
          className="text-2xl leading-tight text-center 
    md:text-4xl md:mb-0 hidden md:block"
        >
          Mis ultimos{" "}
          <span className="text-orange-700 font-bold">trabajos realizados</span>
        </h1>

        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-5 md:grid-cols-4 sm:grid-cols-2">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
