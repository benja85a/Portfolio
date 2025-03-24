"use client";
import { serviceData } from "@/data";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SilderServices = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2, 
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3, 
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] w-[270px] md:h-[340px]  md:w-[550px] min-h-[200px] mb-0"
    >
      {serviceData.map((items, index) => (
        <SwiperSlide key={index}>
          <div
            className="flex px-6 py-8 h-auto md:h-[290px] 
          rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)]
           sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] 
           transition-all duration-300 hover:border-secondary border-2"
          >
            <div className="mb-4 text-4xl text-orange-700">{items.icon}</div>
            <div>
              <h3 className="mb-4 text-lg">{items.title}</h3>
              <p className="text-sm">{items.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SilderServices;
