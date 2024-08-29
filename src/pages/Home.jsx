import Carrusel from "../components/Carrusel.jsx";
import Catalogo from "../components/Catalogo.jsx";
import CatalogoSistemas from "../components/CatalogoSistemas.jsx";
import Contacto from "../components/Contacto.jsx";
import Dato from "../components/Dato.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Servicios from "../components/Servicios.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" py-4 flex flex-col items-center  md:py-7 sm:px-8 w-full h-[calc(100vs+100rem)]">
        <Hero/>
        <Servicios/>
         
        <div className="w-full flex flex-col  items-center  py-10">
      
    <div className="w-full flex pt-11 bg-slate-50 flex-col items-center">
        <h2 className='text-3xl font-semibold text-gray-700'>Productos</h2>
        <p className='pl-8 text-gray-600 text-sm mt-2'>Explora nuestra variedad de cortinas roller y encuentra la perfecta para vos.</p>

    </div>
        <Catalogo />
        <CatalogoSistemas />
        </div>
        <Dato />
        <Contacto/>
      </main>
      <Footer />
    </>
  );
}
