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
      <main className="    flex flex-col items-center    w-full">
        <Hero />
        <Servicios />

        <section className="w-full flex flex-col items-center py-10 bg-slate-">
          <div className="text-center px-3 flex flex-col gap-5 py-8">
            <h2 className='text-3xl font-semibold text-gray-700'>Productos</h2>
            <p  className='text-gray-600 text-md md:text-lg mt-2'>Explora nuestra variedad de cortinas roller y encuentra la perfecta para vos.</p>
          </div>
          <Catalogo />
          <CatalogoSistemas />
        </section>

        <Dato />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
