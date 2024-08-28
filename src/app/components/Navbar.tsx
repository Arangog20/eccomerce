import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-center items-center py-4">
        <div className="text-xl font-bold "></div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600">Home</a>
          <a href="#" className="text-gray-600">Shop</a>
          <a href="#" className="text-gray-600">Products</a>
          <a href="#" className="text-gray-600">Pages</a>
          <a href="#" className="text-gray-600">Blog</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;