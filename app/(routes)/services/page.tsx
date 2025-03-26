"use client";
import TransitionPage from "@/components/transitionPage";
import AvatarServices from "@/components/avatarservices";
import SilderServices from "@/components/silderServices";
import CoverParticles from "@/components/coverParticles";
import Avatar from "@/components/avatar";

const ServicesPage = () => {
  return (
    <>
      <CoverParticles />
      <TransitionPage />
      <Avatar />
      <AvatarServices />
      <div className="flex flex-col md:flex-row items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:px-10 pt-2 mt-2">
        <div className="max-w-[550px] text-center md:text-left ">
          <h1 className="text-2xl leading-tight md:text-4xl font-bold text-orange-700 mb-1">
            Mis <span className="font-bold text-orange-600">Servicios</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300 md:mt-0">
            Ofrezco soluciones integrales en diseño y desarrollo web, combinando
            creatividad y tecnología para crear experiencias digitales
            impactantes.
          </p>
        </div>
        <div className="w-full flex justify-center top-0 mb-5">
          <SilderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
