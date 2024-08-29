import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Contacto() {
  return (
    <section id="contacto" className="bg-slate-50 py-12 w-full">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Contáctanos</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Para cualquier consulta o encargo de presupuesto, no dudes en contactarnos a través de los siguientes medios:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          
          {/* Facebook */}
           <Link to={"https://www.facebook.com/tandil.roller"}>
          <div className="flex items-center bg-white text-gray-700 p-4 rounded-lg shadow-md space-x-4 w-full max-w-xs">
           <FaFacebookF size={30} />
           
            <span className="font-medium">Síguenos en Facebook</span>
          </div>
           </Link> 

          {/* Instagram */}
           <Link to={"https://www.instagram.com/tandil_roller/"}>
          <div className="flex items-center bg-white text-gray-700 p-4 rounded-lg shadow-md space-x-4 w-full max-w-xs">
           
            <FaInstagram size={30} />
            <span className="font-medium">Síguenos en Instagram</span>
          </div>
           </Link>

        
          
          {/* WhatsApp */}
            <Link to={"wa.link/7fhh92"}>
          <div className="flex items-center bg-white text-gray-700 p-4 rounded-lg shadow-md space-x-4 w-full max-w-xs">
            <FaWhatsapp size={30} />
            <span className="font-medium">Chatea con nosotros en WhatsApp</span>
          </div>
            </Link>
          
        </div>
      </div>
    </section>
  );
}
