const CatalogoSistemas = () => {
  const items = [{
    imgSrc: "https://http2.mlstatic.com/D_NQ_NP_931551-MLA52899769793_122022-O.webp",  // Aquí puedes colocar la ruta de la imagen si es necesaria
    altText: "Imagen de muestra",
    description: "Soporte simple"
  },
  {
      imgSrc: "https://http2.mlstatic.com/D_NQ_NP_623756-MLA54059556965_022023-O.webp",  // Aquí puedes colocar la ruta de la imagen si es necesaria
      altText: "Imagen de muestra",
      description: "Soporte doble"
    }];

  return (
    <div className="h-full py-12 flex flex-col mb-12 items-center bg-slate-  rounded-sm  w-full   ">

      <h3 className=" pb-16 px-4 text-gray-600   text-sm sm:text-lg  font-normal">Catálogo de Sistemas</h3>
      <div className="flex flex-cols-2 md:flex-cols-3 gap-4 sm:gap-14  stify-evenly   min-w-80  h-full">
        {items.map((item, index) => (
             <div
             key={index}
             className=" md:shadow-md  rounded-md flex flex-col h-[11rem] w-[11rem] md:w-[18rem] md:h-[20rem] sm:h-[10rem] sm:w-[10rem]  items-center justify-center"
           >
             <div className="flex overflow-hidden  items-center justify-center">
               <img
                 src={item.imgSrc}
                 alt={item.altText}
                 className="  h-[9rem] w-[9rem] md:w-[18rem] md:h-[18rem] sm:h-[10rem] sm:w-[10rem] bg-slate-800     transition-transform duration-300 ease-in-out transform hover:scale-110"

               />
             </div>
             <div className="flex justify-start w-9/12">
               <p className="sm:text-lg py-2 text-gray-600 text-start mt-2">{item.description}</p>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogoSistemas;
