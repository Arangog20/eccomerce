import React from 'react';

const BrandsCarousel: React.FC = () => {
  const brands = [
    { src: 'https://play-lh.googleusercontent.com/3KZOdbnTDjLkVEuKFhdN3xQ9wOUPoaDqGB_zJZeEiJ5zKbSqtZWdxqlJDf9QHMq8bSg', alt: 'SSENSE' },
    { src: 'https://brandemia.org/sites/default/files/inline/images/burberry_logo_portada.jpg', alt: 'BURBERRY' },
    { src: 'https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-vectorial-del-logotipo-nike-en-fondo-blanco-editorial-de-aislada-192037117.jpg', alt: 'NIKE' },
    { src: 'https://1000marcas.net/wp-content/uploads/2021/06/Asos-logo.png', alt: 'ASOS' },
    { src: 'https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-2-4.png', alt: 'PULL&BEAR' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/GILDAN_LOGO_blue.png/1200px-GILDAN_LOGO_blue.png', alt: 'GILDAN' }
  ];

  return (
    <div className="flex justify-center items-center py-8">
      <div className="bg-white rounded-lg shadow-lg flex overflow-x-auto border border-gray-200">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-24 flex items-center justify-center border-r last:border-r-0"
          >
            <img src={brand.src} alt={brand.alt} className="max-h-full max-w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsCarousel;