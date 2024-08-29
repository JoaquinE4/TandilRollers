import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Servicios from "../components/Servicios.jsx";
import Catalogo from "../components/Catalogo.jsx";
import CatalogoSistemas from "../components/CatalogoSistemas.jsx";
import Contacto from "../components/Contacto.jsx";
import Dato from "../components/Dato.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-20 py-4 flex flex-col items-center md:py-7 sm:px-8 w-full">
        <Hero />
        <Servicios />

        <section className="w-full flex flex-col items-center py-10 bg-slate-50">
          <div className="text-center py-8">
            <h2 className='text-3xl font-semibold text-gray-700'>Productos</h2>
            <p  className='text-gray-600 text-sm mt-2'>Explora nuestra variedad de cortinas roller y encuentra la perfecta para vos.</p>
          </div>
          <Catalogo />
          <CatalogoSistemas />
        </section>

        <Contacto />
        <Dato />
      </main>
      <Footer />
    </>
  );
}
