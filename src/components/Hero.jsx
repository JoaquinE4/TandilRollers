import React from 'react';
import heroImg from '../assets/Heroo.png'; // Asegúrate de que esta ruta es correcta

export default function Hero() {
  return (
    <div 
      className="relative w-full mb-12 h-[400px] bg-cover bg-center rounded-lg flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay para mejor legibilidad */}
      <div className="relative z-10 text-center text-white p-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-2">Fabricamos Cortinas Roller</h2>
        <p className="text-lg sm:text-xl mb-4">Estilo y ajuste perfecto para cualquier espacio</p>
        <a 
          href="#contacto" 
          className="bg-brown-500 hover:bg-slate-400 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
}
