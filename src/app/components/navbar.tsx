"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black sm:p-6 p-4 shadow-lg">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-between items-center">
        <div className="text-white text-4xl font-bold">Portfolio</div>
        <div className="space-x-10 ml-[1000px] flex">
          <a href='#home' className="text-gray-300 text-xl hover:text-white transition duration-300">Home</a>

          <a href='#about' className="text-gray-300 text-xl hover:text-white transition duration-300">About</a>

          <a href='#contact' className="text-gray-300 text-xl hover:text-white transition duration-300">Contact</a>
        </div>
        <button className="text-black bg-white w-[120px] h-[35px] py-[2px] px-[10px] border-[2px] text-xl hover:bg-transparent hover:text-white">Hire Me!</button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Portfolio</div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 rounded-lg mt-2">
          <a href="#home" className="block text-black py-2 px-2 hover:bg-gray-300 hover:text-white transition duration-300 rounded">Home</a>
          <a href="#about" className="block text-black py-2 px-2 hover:bg-gray-300 hover:text-white transition duration-300 rounded">About</a>
          <a href="#contact" className="block text-black py-2 px-2 hover:bg-gray-300 hover:text-white transition duration-300 rounded">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
