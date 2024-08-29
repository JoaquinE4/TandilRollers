import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import rollImg from "../assets/roller-img.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   const navItems = [
    { id: 1, text: "Inicio", href: "/" },

    { id: 2, text: "Catalogos", href: "/" },
    { id: 3, text: "Contacto", href: "/" },
  ];

  return (
    <div
      className="w-full transition-all shadow-md flex  z-20  duration-1000  
         h-[8rem] sm:h-[6rem] md:h-[6rem]  bg-slate-300   top-0 "
    >
      {/* Logo */}
      <Link
        to={"/"}
        className="w-full font-sans content-center bg-slate-200 pl-5 sm:pl-10 justify-center text-2xl sm:text-3xl font-bold transition duration-500 delay-75 hover:text-[#d8d5f5] text-[#ffffff]"
      >
        <img src={rollImg} alt="Logo" className="h-[4rem] md:h-[5rem]" />
      </Link>

      {/* Navegación de escritorio */}
      <ul className="hidden bg-slate-200   z-10 md:flex gap-1 content-center justify-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  text-gray-700 text-sm bg-slate-200  content-center justify-center rounded-xl m-2 cursor-pointer transition hover:text-[#d8d5f5] duration-500 delay-75  "
          >
            <Link className="bg-slate-00" to={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Icono de navegación móvil */}
      <div
        onClick={handleNav}
        className="block content-center bg-slate-200 justify-center pr-7 sm:pr-14  md:hidden"
      >
        {nav ? (
          <AiOutlineClose size={30}   color={"#000000"} />
        ) : (
          <AiOutlineMenu size={30}   color={"#000000"} />
        )}
      </div>

      {/* Menú de navegación móvil */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 z-10 top-0 w-[60%] h-full   bg-gray-200 ease-in-out duration-500"
            : "ease-in-out w-[60%] z-10 duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Logo móvil */}
        <h1 className="w-full text-3xl font-bold text-[#cac7eb] m-4">
          Roller Tandil
        </h1>

        {/* Elementos de navegación móvil */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  rounded-xl hover:bg-[#9186b8] duration-300 hover:text-black cursor-pointer  "
          >
            <Link to={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
