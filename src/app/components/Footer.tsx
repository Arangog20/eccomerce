import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTiktok, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-amber-100 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna de Información */}
          <div>
            <h2 className="text-xl font-bold mb-4">ecomus</h2>
            <p className="text-sm text-gray-700">Address: 1234 Fashion Street, Suite 567,<br /> New York, NY 10001</p>
            <p className="text-sm text-gray-700">Email: <a href="mailto:info@fashionshop.com" className="underline">info@fashionshop.com</a></p>
            <p className="text-sm text-gray-700">Phone: <a href="tel:+12125551234" className="underline">(212) 555-1234</a></p>
            <a href="#" className="text-sm text-black font-medium underline flex items-center mt-4">Get direction <span className="ml-1">→</span></a>
            <div className="flex space-x-4 mt-4">
              {/* Iconos sociales */}
              <a href="#"><FontAwesomeIcon icon ={faFacebookF} className="w-6 h-6" /></a>
              <a href="#"><FontAwesomeIcon icon={faX}  className="w-6 h-6" /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram}  className="w-6 h-6" /></a>
              <a href="#"><FontAwesomeIcon icon={faTiktok} className="w-6 h-6" /></a>
              <a href="#"><FontAwesomeIcon icon={faPinterest} className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Columna de Ayuda */}
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-700 hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:underline">Returns + Exchanges</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:underline">Shipping</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:underline">FAQs</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:underline">Compare</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:underline">My Wishlist</a></li>
            </ul>
          </div>

          {/* Columna Sobre Nosotros */}
          <div>
            <h3 className="text-lg font-bold mb-4">About us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-700 hover:underline">Our Story</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:underline">Visit Our Store</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:underline">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:underline">Account</a></li>
            </ul>
          </div>

          {/* Columna Suscripción */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sign Up for Email</h3>
            <p className="text-sm text-gray-700 mb-4">Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email..." className="p-2 border border-gray-300 rounded-l w-full" />
              <button className="bg-black text-white px-4 rounded-r hover:bg-gray-800">Subscribe →</button>
            </div>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="flex justify-between items-center mt-10 border-t border-gray-200 pt-6">
          <div className="flex items-center space-x-4">
            {/* Iconos de idioma */}
            <div className="flex items-center space-x-2">
              <Image src="" alt="USA Flag" className="w-6 h-6" />
              <span className="text-sm text-gray-700">USD</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">English</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Iconos de pago */}
            <Image src="" alt="Visa" />
            <Image src="" alt="PayPal" className="w-8 h-6" />
            <Image src="" alt="MasterCard" className="w-8 h-6" />
            <Image src="" alt="American Express" className="w-8 h-6" />
            <Image src="" alt="Discover" className="w-8 h-6" />
          </div>
          <button className="p-2 border rounded-full border-gray-300 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* Derechos reservados */}
        <p className="text-center text-sm text-gray-500 mt-6">© 2024 Ecomus Store. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;