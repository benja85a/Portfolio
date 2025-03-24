import React from "react";
import TransitionPage from "@/components/transitionPage";
import CircleImage from "@/components/circleImage";
import AvatarServices from "@/components/avatarservices";
import SilderServices from "@/components/silderServices";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div
        className="flex flex-col md:flex-row items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:px-10 pt-2"
      >
        <div className="max-w-[550px] text-center md:text-left">
          <h1 className="text-2xl leading-tight md:text-4xl font-bold text-orange-700 mb-6">
            Mis <span className="font-bold text-orange-600">Servicios</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nulla nihil eius quae, explicabo quos ut ipsam qui, eaque odio porro
            nisi, totam dolore molestias debitis provident suscipit nobis
            beatae!
          </p>
          <button className="px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-500/65">
            contacta conmigo
          </button>
        </div>
        <div className="w-full flex justify-center">
          <SilderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
