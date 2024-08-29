import React from 'react';
import { PiMapPinLineLight } from 'react-icons/pi';

const Todo = () => {
    const items = [
        {
            imgSrc: "https://http2.mlstatic.com/D_NQ_NP_931551-MLA52899769793_122022-O.webp",
            altText: "Soporte simple",
            description: "Soporte simple"
        },
        {
            imgSrc: "https://http2.mlstatic.com/D_NQ_NP_623756-MLA54059556965_022023-O.webp",
            altText: "Soporte doble",
            description: "Soporte doble"
        }
    ];

    return (
        <div className='font-sans bg-gray-100'>
            {/* Encabezado (Header) */}
            <header className='bg-gray-800 text-white p-4 flex items-center justify-between'>
                <div className='text-xl font-bold'>MiEmpresa</div>
                <nav>
                    <ul className='flex space-x-6'>
                        <li><a href='#products' className='hover:text-blue-300'>Productos</a></li>
                        <li><a href='#services' className='hover:text-blue-300'>Servicios</a></li>
                        <li><a href='#about' className='hover:text-blue-300'>Sobre Nosotros</a></li>
                        <li><a href='#testimonials' className='hover:text-blue-300'>Testimonios</a></li>
                        <li><a href='#contact' className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-600'>Contactar</a></li>
                    </ul>
                </nav>
            </header>

            {/* Sección Principal (Hero Section) */}
            <section className='relative bg-cover bg-center h-screen' style={{ backgroundImage: 'url(https://example.com/image.jpg)' }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white'>
                    <h1 className='text-4xl md:text-6xl font-bold'>Cortinas Roller Elegantes y Funcionales</h1>
                    <p className='text-lg md:text-xl mt-4'>Fabricamos y colocamos cortinas roller personalizadas para tu hogar o negocio.</p>
                    <a href='#contact' className='bg-blue-500 text-white px-6 py-3 mt-6 rounded hover:bg-blue-600'>Solicitar Presupuesto</a>
                </div>
            </section>

            {/* Sección de Productos */}
            <section id='products' className='py-16 bg-gray-200'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold'>Nuestros Productos</h2>
                    <p className='text-gray-600 mt-2'>Explora nuestra variedad de cortinas roller y encuentra la opción perfecta para ti.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {items.map((item, index) => (
                        <div key={index} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                            <img src={item.imgSrc} alt={item.altText} className='w-full h-48 object-cover'/>
                            <div className='p-6'>
                                <h3 className='text-xl font-semibold'>{item.description}</h3>
                                <a href='#contact' className='text-blue-500 mt-4 inline-block'>Solicitar Más Información</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección de Servicios */}
            <section id='services' className='py-16'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold'>Nuestros Servicios</h2>
                    <p className='text-gray-600 mt-2'>Ofrecemos una gama completa de servicios para satisfacer todas tus necesidades de cortinas roller.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='bg-white rounded-lg shadow-lg p-6'>
                        <h3 className='text-xl font-semibold'>Fabricación Personalizada</h3>
                        <p className='text-gray-600 mt-2'>Creamos cortinas roller a medida según tus especificaciones y preferencias.</p>
                    </div>
                    <div className='bg-white rounded-lg shadow-lg p-6'>
                        <h3 className='text-xl font-semibold'>Instalación Profesional</h3>
                        <p className='text-gray-600 mt-2'>Instalamos tus cortinas roller con precisión y cuidado para garantizar un ajuste perfecto.</p>
                    </div>
                    {/* Repite para otros servicios */}
                </div>
            </section>

            {/* Sección Sobre Nosotros */}
            <section id='about' className='py-16 bg-gray-100'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold'>Sobre Nosotros</h2>
                    <p className='text-gray-600 mt-2'>Conoce más sobre nuestra empresa y por qué somos la mejor opción para tus cortinas roller.</p>
                </div>
                <div className='max-w-4xl mx-auto text-center'>
                    <p className='text-gray-600'>Somos una empresa dedicada a la fabricación y colocación de cortinas roller con más de 10 años de experiencia en el mercado. Nuestro compromiso es ofrecer productos de alta calidad y un servicio excepcional.</p>
                </div>
            </section>

            {/* Sección de Testimonios */}
            <section id='testimonials' className='py-16'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold'>Lo Que Dicen Nuestros Clientes</h2>
                    <p className='text-gray-600 mt-2'>Lee las experiencias de nuestros clientes satisfechos.</p>
                </div>
                <div className='max-w-4xl mx-auto'>
                    <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
                        <p className='text-gray-600'>"Excelente servicio y productos de alta calidad. La instalación fue rápida y profesional. ¡Recomendados al 100%!"</p>
                        <p className='text-gray-800 font-semibold mt-2'>- Juan Pérez</p>
                    </div>
                    {/* Repite para otros testimonios */}
                </div>
            </section>

            {/* Sección de Contacto */}
            <section id='contact' className='py-16 bg-gray-100'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold'>Contáctanos</h2>
                    <p className='text-gray-600 mt-2'>Estamos aquí para ayudarte. Completa el formulario o contáctanos directamente.</p>
                </div>
                <div className='max-w-4xl mx-auto'>
                    <form className='bg-white p-8 rounded-lg shadow-lg'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input type='text' placeholder='Nombre' className='p-3 border border-gray-300 rounded-lg'/>
                            <input type='email' placeholder='Correo Electrónico' className='p-3 border border-gray-300 rounded-lg'/>
                        </div>
                        <textarea placeholder='Mensaje' className='p-3 border border-gray-300 rounded-lg w-full mt-4' rows='4'></textarea>
                        <button type='submit' className='bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-600'>Enviar</button>
                    </form>
                    <div className='text-center mt-8'>
                        <p className='text-gray-600'>O llámanos al <a href='tel:+123456789' className='text-blue-500'>+123 456 789</a> o envíanos un correo a <a href='mailto:info@example.com' className='text-blue-500'>info@example.com</a>.</p>
                    </div>
                </div>
            </section>

            {/* Pie de Página (Footer) */}
            <footer className='bg-gray-800 text-white py-6'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='flex justify-center space-x-4 mb-4'>
                        <a href='https://facebook.com' className='text-gray-400 hover:text-white'>Facebook</a>
                        <a href='https://twitter.com' className='text-gray-400 hover:text-white'>Twitter</a>
                        <a href='https://instagram.com' className='text-gray-400 hover:text-white'>Instagram</a>
                    </div>
                    <p className='text-gray-400'>© 2024 MiEmpresa. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Todo;
