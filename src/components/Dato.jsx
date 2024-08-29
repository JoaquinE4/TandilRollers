import React from 'react';
import { PiMapPinLineLight } from 'react-icons/pi';

const Dato = () => {
    return (
        <div className="py-10 mb-28 bg-slate-200 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mx-4">
                
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row w-[200px] gap-2 h-[220px] md:h-auto md:w-auto items-center">
            <div className="flex-shrink-0 bg-slate-100 rounded-full p-4 border border-slate-200 shadow-sm md:shadow-md">
                        <PiMapPinLineLight size={50} className="text-slate-700" />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-sm md:text-base text-gray-600 font-normal">
                            Brindamos atención personalizada en Tandil y localidades cercanas a la ciudad.
                        </h3>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row w-[200px] gap-1 h-[220px] md:h-auto md:w-auto items-center">
                    <div className="flex-shrink-0 bg-slate-100 rounded-full p-4 border border-slate-200 shadow-sm md:shadow-md">
                        <img 
                            src="https://www.svgrepo.com/show/7827/notes.svg" 
                            alt="Notes icon" 
                            className="h-[50px] w-[50px]" 
                        />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-sm md:text-base text-gray-600 font-normal">
                            Presupuestos gratuitos y sin compromiso entregados para su conveniencia.
                        </h3>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row w-[200px] gap-2 h-[220px] md:h-auto md:w-auto items-center">
                    <div className="flex-shrink-0 bg-slate-100 rounded-full p-4 border border-slate-200 shadow-sm md:shadow-md">
                        <img 
                            src="https://www.svgrepo.com/show/494509/piggy-bank.svg" 
                            alt="Piggy bank icon" 
                            className="h-[50px] w-[50px]" 
                        />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-sm md:text-base text-gray-600 font-normal">
                            Métodos de pago disponibles incluyen efectivo, transferencia bancaria.
                        </h3>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Dato;
