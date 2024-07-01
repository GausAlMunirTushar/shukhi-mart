"use client"
import { useState } from 'react';
import { FaUser, FaShoppingCart, FaBell, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primaryColor max-width:xl p-4 flex items-center justify-between">
      <div className="text-white text-2xl font-bold">MegaMall</div>
      <div className="hidden md:flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Search Products"
          className="rounded-full px-4 py-2"
        />
        <FaUser className="text-white" />
        <FaShoppingCart className="text-white" />
        <FaBell className="text-white" />
        <button className="text-white">Become a Seller</button>
      </div>
      <div className="md:hidden">
        <FaBars
          className="text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-primaryColor p-4 flex flex-col space-y-4 md:hidden">
          <input
            type="text"
            placeholder="Search Products"
            className="rounded-full px-4 py-2"
          />
          <FaUser className="text-white" />
          <FaShoppingCart className="text-white" />
          <FaBell className="text-white" />
          <button className="text-white">Become a Seller</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
