import { dataAboutPage } from "@/data";
import React from "react";

const timeLine = () => {
  return (
    <div className="flex flex-col mb-10 justify-center divide-y divide-amber-200">
      <div className="w-full  max-w-3xl mx-auto md:pt-20">
        <div className="my-9">
          {dataAboutPage.map((data) => (
            <div key={data.id} className="relative py-6 pl-8 sm:pl-50 mb-6">
              <h1 className="mb-1 text-2xl font-bold sm:mb-0">{data.title}</h1>
              <div
                className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-6 sm:before:left-10 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:ml-[7rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-6 
                                        sm:after:left-10 after:w-2 after:h-2 after:bg-indigo-600 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[7rem] after:-translate-x-1/2 
                                        after:translate-y-1.5"
              >
                <time className="sm:absolute left-3 sm:left-10 translate-y-0.5 inline-flex items-center justify-center 
                text-xs font-semibold uppercase w-24 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  {data.date}
                </time>
                <p className="text-xl font-bold text-gray-400">{data.subtitle}</p>
              </div>
              <p className="text-slate-600 mt-3 max-w-md">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default timeLine;
