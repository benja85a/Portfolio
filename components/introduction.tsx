"use client";
import { FileUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="z-20 w-full bg-darkBg/60 pt-16 pb-50 sm:pb-0">
      <div className="z-20 grid items-center h-auto md:h-full p-3 md:py-0 md:grid-cols-2">
        {/* Imagen */}
        <div className="flex justify-center">
          <Image
            src="/rakiti.svg"
            priority
            className="w-80 md:w-96"
            width="800"
            height="800"
            alt="profile pic"
          />
        </div>

        {/* Texto */}
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
              href="/portfolio"
              className="px-4 py-2 border-2 rounded-xl transition-all text-md 
              hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 border-2 rounded-xl text-md transition-all 
              border-amber-600 text-orange-500 hover:bg-amber-600 hover:text-white hover:shadow-xl"
            >
              Contáctame
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="relative z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Fondo oscuro con transición */}
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 flex items-center justify-center p-4 text-center sm:p-0">
            {/* Panel del modal */}
            <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start p-5">
                  {/* Icono */}
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
                    <FileUser className="size-6 text-blue-600" />
                  </div>

                  {/* Contenido */}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg font-semibold text-gray-900"
                      id="modal-title"
                    >
                      Contáctame
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Puedes contactarme a través de WhatsApp o enviarme un
                        correo electrónico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botones */}
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <a
                  href="https://wa.me/qr/XRRSHMTDGAOXF1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
                >
                  📱 WhatsApp
                </a>
                <a
                  href="mailto:rivasbenja97@gmail.com?subject=Contacto&body=Hola,%20quiero%20hablar%20contigo!"
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:ml-3 sm:w-auto"
                >
                  ✉️ Gmail
                </a>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-3 left-0 inline-flex w-full justify-center rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-400 sm:mt-0 sm:w-auto"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Introduction;
