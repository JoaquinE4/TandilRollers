import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import rollImg from "../assets/roller-img.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: "Inicio", href: "#" },
    { id: 2, text: "Catálogos", href: "#catalogo" },
    { id: 3, text: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`w-full  fixed md:relative top-0 z-20 bg-slate-300 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto flex items-center justify-between h-full px-5 sm:px-10 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center text-2xl sm:text-3xl font-bold text-white hover:text-[#d8d5f5] transition-colors duration-300" aria-label="Inicio">
          <img src={rollImg} alt="Logo" className="h-12 sm:h-14" />
        </a>

        {/* Navegación de escritorio */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.id} className="p-2 text-gray-700 hover:text-[#d8d5f5] transition-colors duration-300">
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>

        {/* Icono de menú móvil */}
        <div onClick={() => setNav(!nav)} className="block md:hidden cursor-pointer" aria-label={nav ? "Cerrar menú" : "Abrir menú"}>
          {nav ? <AiOutlineClose size={30} color="#000000" /> : <AiOutlineMenu size={30} color="#000000" />}
        </div>

        {/* Menú de navegación móvil */}
        <ul className={`fixed inset-0 bg-gray-200 transition-transform duration-300 ${nav ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <li className="p-4 text-3xl font-bold text-slate-700">Roller Tandil</li>
          {navItems.map((item) => (
            <li key={item.id} className="p-4 hover:bg-[#9186b8] text-black transition-colors duration-300">
              <a href={item.href} onClick={() => setNav(false)}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
