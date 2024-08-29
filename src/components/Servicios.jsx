import React from 'react';
import { PiMapPinLineLight } from 'react-icons/pi';

export default function Servicios() {
  return (
    <>
      <section className="bg-slate-50 py-12 w-full">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-700">Nuestros Servicios</h2>
            <p className="text-gray-600 text-sm mt-2">
              Ofrecemos una gama completa de servicios para satisfacer todas tus necesidades de cortinas roller.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl text-gray-700 font-semibold">Fabricación Personalizada</h3>
              <p className="text-gray-600 mt-2">
                Creamos cortinas roller a medida según tus especificaciones y preferencias.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl text-gray-700 font-semibold">Instalación Profesional</h3>
              <p className="text-gray-600 mt-2">
                Instalamos tus cortinas roller con precisión y cuidado para garantizar un ajuste perfecto.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/*  <section className="py-10 bg-slate-50 w-full">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <div className="flex-shrink-0 bg-slate-50 rounded-full p-4 border border-slate-200 shadow-sm md:shadow-md">
                <PiMapPinLineLight size={50} className="text-slate-700" />
              </div>
              <div className="ml-4">
                <h3 className="text-xs sm:text-sm md:text-base text-gray-600 font-normal">
                  Brindamos atención personalizada en Tandil y localidades cercanas a la ciudad.
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <div className="flex-shrink-0 bg-slate-50 rounded-full p-4 border border-slate-200 shadow-sm md:shadow-md">
                <img 
                  src="https://www.svgrepo.com/show/7827/notes.svg" 
                  alt="Notes icon" 
                  className="h-[50px] w-[50px]" 
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xs sm:text-sm md:text-base text-gray-600 font-normal">
                  Presupuestos gratuitos y sin compromiso entregados para su conveniencia.
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <div className="flex-shrink-0 bg-slate-50 rounded-full p-4 border border-slate-200 shadow-sm md:shadow-md">
                <img 
                  src="https://www.svgrepo.com/show/494509/piggy-bank.svg" 
                  alt="Piggy bank icon" 
                  className="h-[50px] w-[50px]" 
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xs sm:text-sm md:text-base text-gray-600 font-normal">
                  Métodos de pago disponibles incluyen efectivo, transferencia bancaria.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
