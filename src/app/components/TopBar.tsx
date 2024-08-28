import React from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

const TopBar: React.FC = () => {
  return (
    <div className="bg-white py-2 border-b">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img src="/path-to-flag.png" alt="Flag" className="w-5 h-5 mr-2" />
            <span>USD</span>
            <span className="ml-1">&#9662;</span>
          </div>
          <div className="flex items-center">
            <span>English</span>
            <span className="ml-1">&#9662;</span>
          </div>
        </div>
        <div className="text-lg font-bold">ecomus</div>
        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-700 hover:text-black cursor-pointer" />
          <FaUser className="text-gray-700 hover:text-black cursor-pointer" />
          <div className="relative">
            <FaHeart className="text-gray-700 hover:text-black cursor-pointer" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">1</span>
          </div>
          <div className="relative">
            <FaShoppingCart className="text-gray-700 hover:text-black cursor-pointer" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;