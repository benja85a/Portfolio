"use client";
import CoverParticles from "@/components/coverParticles";
import TransitionPage from "@/components/transitionPage";
import { dataTestimonials } from "@/data";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialsPage = () => {
  return (
    <>
      <CoverParticles />
      <TransitionPage />
      <div className="flex flex-col justify-center items-center h-lvh py-8">
        <h1 className="text-2xl leading-tight text-center md:text-3xl font-semibold ">
          Algunos comentarios
          <span className="block font-bold text-amber-500">
            de nuestros clientes
          </span>
        </h1>

        <div className="mt-5 flex justify-center w-full">
          <div className="w-full max-w-5xl px-4">
            <Swiper
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 25 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-full"
            >
              {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                <SwiperSlide key={id}>
                  <div className="bg-gray-400/30 border border-gray-400/50 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform w-[260px] mx-auto my-5">
                    <div className="flex justify-center">
                      <Image
                        src={imageUrl}
                        alt={name}
                        width={60}
                        height={60}
                        className="mx-auto rounded-full border-2 border-gray-700/50"
                      />
                    </div>
                    <h4 className="text-center text-lg font-light text-gray-900">{name}</h4>
                    <p className="mt-2 text-center text-gray-400/80 text-sm font-light">{description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
