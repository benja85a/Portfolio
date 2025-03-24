"use client";
import { dataCounter } from "@/data";
import React from "react";
import CountUp from "react-countup";

const CounterServices = () => {
  return (
    <div
      className="grid justify-between max-w-3xl grid-cols-2 gap-3 
    mx-auto my-8 md:flex md:grid-cols-4 md:gap-6"
    >
      {dataCounter.map(
        ({ id, endCounter, text, lineRight, lineRightMobile }) => (
          <div key={id} className="flex flex-col items-center">
            <div
              className={`${
                lineRight ? " md:border-r-2 md:border-gray-100" : ""
              } ${lineRightMobile ? " border-r-2 border-gray-100" : ""} pr-4`}
            >
              <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-amber-700">
                + <CountUp end={endCounter} start={0} duration={8} />
              </p>
              <p className="text-xs uppercase max-w-[100px] text-center">{text}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CounterServices;
