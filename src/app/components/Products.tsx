"use client";

import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  images: { src: string; color: string }[];
}

const productsData: { [key: string]: Product[] } = {
    "Best Seller": [
      { id: 1, name: 'Ribbed Tank Top', price: '$16.95', images: [{ src: 'https://static.kiabi.es/images/camiseta-de-punto-lisa-negro-axh40_4_frb5.jpg', color: 'black' }, { src: 'https://static.kiabi.es/images/camiseta-de-punto-lisa-blanco-axh40_3_frb1.jpg', color: 'white' }] },
      { id: 2, name: 'Ribbed Modal T-shirt', price: 'From $18.95', images: [{ src: 'https://static.kiabi.es/images/camiseta-de-algodon-con-cuello-redondo-rosa-bcn79_23_frb1.jpg', color: 'pink' }, { src: 'https://static.kiabi.es/images/camiseta-de-algodon-con-cuello-redondo-verde-bcn79_22_frb1.jpg', color: 'green' }] },
      { id: 3, name: 'Loose Fit Hoodie', price: '$9.95', images: [{ src: 'https://static.kiabi.es/images/camiseta-de-punto-guns-and-roses-negro-bzd98_1_frb1.jpg', color: 'gray' }, { src: 'https://static.kiabi.es/images/camiseta-de-algodon-con-cuello-redondo-azul-bcn79_16_frb1.jpg', color: 'blue' }] },
      { id: 4, name: 'Regular Fit Oxford Shirt', price: '$19.95', images: [{ src: 'https://static.kiabi.es/images/camiseta-lisa-de-punto-negro-xi234_6_frb3.jpg', color: 'black' }, { src: 'https://static.kiabi.es/images/camiseta-lisa-de-punto-blanco-xi234_7_frb5.jpg', color: 'white' }] },
      { id: 5, name: 'V-neck T-shirt', price: '$14.95', images: [{ src: 'https://static.kiabi.es/images/camiseta-de-algodon-con-cuello-redondo-rojo-bcn79_21_frb2.jpg', color: 'red' }, { src: 'https://static.kiabi.es/images/camiseta-de-algodon-con-cuello-redondo-amarillo-bcn79_19_frb4.jpg', color: 'yellow' }] },
      { id: 6, name: 'Oversized Hoodie', price: '$29.95', images: [{ src: 'https://static.kiabi.es/images/camiseta-sin-mangas-negro-ayy86_1_frb1.jpg', color: 'black' }, { src: 'https://static.kiabi.es/images/camiseta-lisa-de-punto-violeta-xi234_56_frb5.jpg', color: 'purple' }] },
      { id: 7, name: 'Basic Sweatshirt', price: '$12.95', images: [{ src: 'https://static.kiabi.es/images/sobrecamisa-de-sarga-negro-bue87_4_frb4.jpg', color: 'navy' }, { src: 'https://static.kiabi.es/images/sobrecamisa-de-sarga-blanco-bue87_2_frb5.jpg', color: 'white' }] },
      { id: 8, name: 'Crew Neck Pullover', price: '$22.50', images: [{ src: 'https://static.kiabi.es/images/camiseta-lisa-de-punto-rosa-xi234_88_frb4.jpg', color: 'pink' }, { src: 'https://static.kiabi.es/images/camiseta-de-tirantes-finos-negro-fm862_6_frb1.jpg', color: 'black' }] },
    ],
    "New Arrivals": [
      { id: 9, name: 'bu', price: '$11.95', images: [{ src: 'https://static.kiabi.es/images/sudadera-estilo-campus-azul-btm99_8_frb1.jpg', color: 'blue' }, { src: 'https://static.kiabi.es/images/sudadera-estilo-campus-gris-btm99_6_frb1.jpg', color: 'white' }] },
      { id: 10, name: 'Slim Fit Jeans', price: '$32.95', images: [{ src: 'https://static.kiabi.es/images/vaquero-recto-de-tiro-alto-azul-cdm11_3_frb4.jpg', color: 'denim' }, { src: 'https://static.kiabi.es/images/vaquero-recto-de-tiro-alto-gris-cdm11_4_frb2.jpg', color: 'black' }] },
      { id: 11, name: 'Fleece Joggers', price: '$18.95', images: [{ src: 'https://static.kiabi.es/images/pantalon-tipo-jogger-gris-yz601_21_frb2.jpg', color: 'gray' }, { src: 'https://static.kiabi.es/images/pantalon-tipo-jogger-azul-yz601_2_frb2.jpg', color: 'navy' }] },
      { id: 12, name: 'Bomber Jacket', price: '$45.00', images: [{ src: 'https://static.kiabi.es/images/sudadera-de-manga-larga-con-cremallera-verde-brb23_2_frb5.jpg', color: 'green' }, { src: 'https://static.kiabi.es/images/chaqueta-de-punto-premama-negro-zm238_2_frb1.jpg', color: 'black' }] },
      { id: 13, name: 'Cotton Polo Shirt', price: '$24.95', images: [{ src: 'https://static.kiabi.es/images/polo-regular-fit-de-canale-beige-byv08_2_frb3.jpg', color: 'yellow' }, { src: 'https://static.kiabi.es/images/polo-de-pique-de-algodon-azul-bqg86_1_frb1.jpg', color: 'blue' }] },
      { id: 14, name: 'Denim Jacket', price: '$39.95', images: [{ src: 'https://static.kiabi.es/images/jersey-con-cremallera-en-el-cuello-azul-byj33_5_frb2.jpg', color: 'denim' }, { src: 'https://static.kiabi.es/images/jersey-con-cremallera-en-el-cuello-negro-byj33_4_frb2.jpg', color: 'black' }] },
      { id: 15, name: 'Basic Crew Socks', price: '$4.95', images: [{ src: 'https://static.kiabi.es/images/camiseta-basica-crop-top-blanco-ciz14_1_frb1.jpg', color: 'white' }, { src: 'https://static.kiabi.es/images/camiseta-basica-crop-top-gris-ciz14_5_frb1.jpg', color: 'gray' }] },
      { id: 16, name: 'Cargo Pants', price: '$28.95', images: [{ src: 'https://static.kiabi.es/images/pantalon-cargo-con-pespuntes-a-contraste-beige-azf57_3_frb2.jpg', color: 'brown' }, { src: 'https://static.kiabi.es/images/pantalon-de-color-estilo-carpintero-kaki-cdr85_1_frb2.jpg', color: 'khaki' }] },
    ],
    "On Sale": [
      { id: 17, name: 'Printed T-shirt', price: '$8.95', images: [{ src: 'https://static.kiabi.es/images/camiseta-de-algodon-con-cuello-redondo-negro-bbq08_2_frb1.jpg', color: 'black' }, { src: 'https://static.kiabi.es/images/camiseta-de-manga-corta-marvel-blanco-bvm44_1_frb1.jpg', color: 'white' }] },
      { id: 18, name: 'Graphic Hoodie', price: '$19.95', images: [{ src: 'https://static.kiabi.es/images/sudadera-de-chandal-con-capucha-verde-btu92_6_frb1.jpg', color: 'gray' }, { src: 'https://static.kiabi.es/images/sudadera-de-chandal-con-capucha-beige-btu92_4_frb1.jpg', color: 'pink' }] },
      { id: 19, name: 'Flannel Shirt', price: '$15.95', images: [{ src: 'https://static.kiabi.es/images/camisa-lisa-de-popelina-rosa-bvr83_1_frb1.jpg', color: 'red' }, { src: 'https://static.kiabi.es/images/camisa-de-rayas-de-popelina-azul-bvr83_2_frb1.jpg', color: 'blue' }] },
      { id: 20, name: 'Running Shorts', price: '$10.95', images: [{ src: 'https://static.kiabi.es/images/short-de-deporte-verde-bgj82_2_frb1.jpg', color: 'green' }, { src: 'https://static.kiabi.es/images/short-estilo-americano-negro-cco81_1_frb2.jpg', color: 'black' }] },
      { id: 21, name: 'Knitted Scarf', price: '$7.95', images: [{ src: 'https://static.kiabi.es/images/fular-rectangular-leopardo-beige-cpw51_1_frb1.jpg', color: 'brown' }, { src: 'https://static.kiabi.es/images/panuelo-rectangular-beige-cbh69_3_frb1.jpg', color: 'beige' }] },
      { id: 22, name: 'Wool Beanie', price: '$5.95', images: [{ src: 'https://static.kiabi.es/images/gorro-con-vuelta-de-punto-azul-byi54_5_frb1.jpg', color: 'navy' }, { src: 'https://static.kiabi.es/images/gorro-con-vuelta-de-punto-verde-byi54_4_frb1.jpg', color: 'gray' }] },
      { id: 23, name: 'Leather Belt', price: '$12.50', images: [{ src: 'https://static.kiabi.es/images/cinturon-fino-negro-bra25_2_frb1.jpg', color: 'black' }, { src: 'https://static.kiabi.es/images/cinturon-fino-beige-bra25_3_frb1.jpg', color: 'brown' }] },
      { id: 24, name: 'Sports Cap', price: '$6.95', images: [{ src: 'https://static.kiabi.es/images/gorra-puma-beige-yf379_1_frb1.jpg', color: 'white' }, { src: 'hat.openai.com/auth/login?sso', color: 'blue' }] },
    ]
  };

const ProductGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Best Seller');
  const [selectedImage, setSelectedImage] = useState<{ [key: number]: string }>({});

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleColorChange = (productId: number, imageSrc: string) => {
    setSelectedImage((prev) => ({ ...prev, [productId]: imageSrc }));
  };

  return (
    <div className="py-12 bg-white">
      <div className="flex justify-center space-x-6 mb-8">
        {Object.keys(productsData).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`text-lg ${activeTab === tab ? 'font-bold border-b-2 border-black' : 'text-gray-500'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-6">
        {productsData[activeTab].map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={selectedImage[product.id] || product.images[0].src}
              alt={product.name}
              className="w-full h-auto mb-4"
            />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
            <div className="flex justify-center mt-2">
              {product.images.map((image) => (
                <button
                  key={image.color}
                  className={`w-4 h-4 rounded-full border-2 ${selectedImage[product.id] === image.src ? 'border-black' : 'border-gray-300'} mx-1`}
                  style={{ backgroundColor: image.color }}
                  onClick={() => handleColorChange(product.id, image.src)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-gray-200 px-6 py-2 rounded">Load more</button>
      </div>
    </div>
  );
};

export default ProductGallery;