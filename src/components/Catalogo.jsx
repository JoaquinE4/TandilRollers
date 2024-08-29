const Catalogo = () => {
  const items = [
    {
      imgSrc:
        "https://sanisidrolonasar.vtexassets.com/arquivos/ids/161371-500-auto?v=637668841985170000&width=500&height=auto&aspect=true", // Aquí puedes colocar la ruta de la imagen si es necesaria
      altText: "Imagen de muestra",
      description: "Black out",
    },
    {
      imgSrc:
        "https://sanisidrolonasar.vtexassets.com/arquivos/ids/159119-500-auto?v=637648988110830000&width=500&height=auto&aspect=true", // Aquí puedes colocar la ruta de la imagen si es necesaria
      altText: "Imagen de muestra",
      description: "Pampa",
    },
    {
      imgSrc:
        "https://sanisidrolonasar.vtexassets.com/arquivos/ids/162147-500-auto?v=637907269717700000&width=500&height=auto&aspect=true", // Aquí puedes colocar la ruta de la imagen si es necesaria
      altText: "Imagen de muestra",
      description: "Poliester",
    },
    {
      imgSrc:
        "https://sanisidrolonasar.vtexassets.com/arquivos/ids/159119-500-auto?v=637648988110830000&width=500&height=auto&aspect=true", // Aquí puedes colocar la ruta de la imagen si es necesaria
      altText: "Imagen de muestra",
      description: "Sun screen",
    },
    {
      imgSrc:
        "https://sanisidrolonasar.vtexassets.com/arquivos/ids/162147-500-auto?v=637907269717700000&width=500&height=auto&aspect=true", // Aquí puedes colocar la ruta de la imagen si es necesaria
      altText: "Imagen de muestra",
      description: "Rustico",
    },
  ];

  return (
    <section  className="h-full pb-12 flex flex-col mb-12 items-center bg-slate-50 rounded-sm  w-full   ">
      <h3 id="catalogo" className=" py-10 px-4 text-gray-600   text-sm sm:text-lg  font-normal">Catálogo de telas</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-14   min-w-80  h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className=" md:shadow-md  rounded-md flex flex-col max-w-[18rem] max-h-[20rem] items-center justify-center"
          >
            <div className="flex overflow-hidden  items-center justify-center">
              <img
                src={item.imgSrc}
                alt={item.altText}
                className="  h-[7rem] w-[7rem] md:w-[18rem] md:h-[18rem] sm:h-[10rem] sm:w-[10rem] bg-slate-800     transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="flex justify-start w-9/12">
              <p className="sm:text-lg py-2 text-gray-600 text-start mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalogo;
