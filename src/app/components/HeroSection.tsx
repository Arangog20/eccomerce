import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-amber-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-0">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold">Summer Escapades</h1>
          <p className="mt-4 text-lg text-gray-600">Embrace the sun-kissed season with our collection of breezy essentials.</p>
          <button className="mt-6 px-6 py-2 bg-black text-white">Shop collection</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="https://images.ecestaticos.com/KCHWZnrkJxvhd9Sip10V9m6PxNQ=/0x0:870x833/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F0e8%2Fc83%2F6d0%2F0e8c836d020de8856805dae0ff25b9e1.jpg" alt="Summer Collection" className="w-screen h-auto "/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;