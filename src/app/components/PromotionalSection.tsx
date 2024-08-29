"use client";

import React from 'react';

const PromotionalSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta 1 */}
          <div className="relative bg-white overflow-hidden group">
            <img
              src="https://static.kiabi.es/images/vestido-midi-bordado-con-aberturas-laterales-beige-bju21_2_frb2.jpg"
              alt="Essential Basics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center opacity-100 transition-opacity duration-300">
              <p className="text-sm text-white uppercase mb-2">UP TO 30% OFF</p>
              <h3 className="text-lg font-bold text-white mb-4">Essential Basics</h3>
              <button className="bg-white text-black px-4 py-2 mt-2 hover:bg-gray-200">Shop now</button>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="relative bg-white overflow-hidden group">
            <img
              src="https://static.kiabi.es/images/gafas-de-sol-mickey-gris-bio01_1_frb2.jpg"
              alt="Athleisure Wear"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center opacity-100 transition-opacity duration-300">
              <p className="text-sm text-white uppercase mb-2">UP TO 30% OFF</p>
              <h3 className="text-lg font-bold text-white mb-4">Athleisure Wear</h3>
              <button className="bg-white text-black px-4 py-2 mt-2 hover:bg-gray-200">Shop now</button>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="relative bg-white overflow-hidden group">
            <img
              src="https://static.kiabi.es/images/bolso-sobre-con-cadena-bandolera-negro-bam74_2_frf1.jpg"
              alt="Seasonal Favorites"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center opacity-100 transition-opacity duration-300">
              <p className="text-sm text-white uppercase mb-2">UP TO 30% OFF</p>
              <h3 className="text-lg font-bold text-white mb-4">Seasonal Favorites</h3>
              <button className="bg-white text-black px-4 py-2 mt-2 hover:bg-gray-200">Shop now</button>
            </div>
          </div>
        </div>

        {/* Sección inferior */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {/* Beneficios */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-gray-100 p-4">
              {/* Icono de envío gratuito */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 16.5V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4.5" strokeWidth="2" />
                <path d="M17 10l-5-5m0 0l-5 5m5-5v12" strokeWidth="2" />
              </svg>
            </div>
            <p className="mt-4 font-medium">Free Shipping</p>
            <p className="text-sm text-gray-500">Free shipping over order $120</p>
          </div>

          {/* Pago Flexible */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-gray-100 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 16.5V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4.5" strokeWidth="2" />
                <path d="M17 10l-5-5m0 0l-5 5m5-5v12" strokeWidth="2" />
              </svg>
            </div>
            <p className="mt-4 font-medium">Flexible Payment</p>
            <p className="text-sm text-gray-500">Pay with Multiple Credit Cards</p>
          </div>

          {/* Devoluciones */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-gray-100 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 16.5V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4.5" strokeWidth="2" />
                <path d="M17 10l-5-5m0 0l-5 5m5-5v12" strokeWidth="2" />
              </svg>
            </div>
            <p className="mt-4 font-medium">14 Day Returns</p>
            <p className="text-sm text-gray-500">Within 30 days for an exchange</p>
          </div>

          {/* Soporte Premium */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-gray-100 p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 16.5V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4.5" strokeWidth="2" />
                <path d="M17 10l-5-5m0 0l-5 5m5-5v12" strokeWidth="2" />
              </svg>
            </div>
            <p className="mt-4 font-medium">Premium Support</p>
            <p className="text-sm text-gray-500">Outstanding premium support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalSection;