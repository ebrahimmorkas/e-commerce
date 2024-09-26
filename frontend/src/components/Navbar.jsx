import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeLinkStyle = 'text-blue-500 border-b-2 border-blue-500';
  const normalLinkStyle = 'text-gray-700 hover:text-blue-500';

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Centered in mobile and left-aligned in desktop */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
            <h1 className="text-2xl font-bold">E-Shop</h1>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex space-x-8 items-center">
            <NavLink exact to="/" className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}>
              Home
            </NavLink>
            <NavLink to="/shop" className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}>
              Shop
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)}>
              Contact
            </NavLink>
          </div>

          {/* Desktop Right Side: Login & Signup */}
          <div className="hidden lg:flex space-x-4">
            <button className="bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-500 rounded">
              Login
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Sign Up
            </button>
          </div>

          {/* Hamburger Menu (Mobile) - Right Aligned with Spacing */}
          <div className="lg:hidden flex items-center mr-4"> {/* Added margin-right */}
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {/* Close Button */}
          <button onClick={toggleMenu} className="self-end text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Nav Links Centered */}
          <div className="flex flex-col items-center space-y-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)} onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/shop" className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)} onClick={toggleMenu}>
              Shop
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)} onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? activeLinkStyle : normalLinkStyle)} onClick={toggleMenu}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Login/Signup Buttons */}
          <div className="flex flex-col items-center mt-4 space-y-2">
            <button className="bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-500 rounded w-full">
              Login
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
