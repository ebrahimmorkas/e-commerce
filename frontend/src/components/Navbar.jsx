import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeLinkStyle = 'text-blue-500 border-b-2 border-blue-500';
  const normalLinkStyle = 'text-gray-700 hover:text-blue-500';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-blueGray-50 bg-opacity-90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">E-Shop</h1>
          </div>

          {/* DESKTOP NAV LINKS */}
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

          {/* DESKTOP PROFILE, SEARCH & CART ICONS */}
          <div className="hidden lg:flex space-x-6 items-center">
            <FaSearch className="text-gray-700 w-6 h-6 cursor-pointer hover:text-blue-500" />
            <Link to='/cart'>
              <FaShoppingCart className="text-gray-700 w-6 h-6 cursor-pointer hover:text-blue-500" />
            </Link>
            <div className="relative" ref={dropdownRef}>
              <FaUserCircle
                className="text-gray-700 w-6 h-6 cursor-pointer hover:text-blue-500"
                onClick={toggleDropdown}
              />
              {/* Profile Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <Link to='/login'>
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}> 
                    Login
                  </button>
                  </Link>
                  <Link to='/signup' className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                    Sign Up
                  </Link>
                  <Link to='/orders' className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                    Orders
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* MOBILE HAMBURGER MENU & ICONS */}
          <div className="lg:hidden flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <FaUserCircle
                className="text-gray-700 w-6 h-6 cursor-pointer hover:text-blue-500"
                onClick={toggleDropdown}
              />
              {/* Mobile Profile Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <Link to='/login' className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                    Login
                  </Link>
                  <Link to='/signup' className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                    Sign Up
                  </Link>
                  <Link to='/orders' className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>
                    Orders
                  </Link>
                </div>
              )}
            </div>
            <FaSearch className="text-gray-700 w-6 h-6 cursor-pointer hover:text-blue-500" />
            <Link to='/cart'>
              <FaShoppingCart className="text-gray-700 w-6 h-6 cursor-pointer hover:text-blue-500" />
            </Link>
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* MOBILE SIDE NAVIGATION */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {/* Close Button */}
          <button onClick={toggleMenu} className="self-end text-gray-500 hover:text-gray-700 focus:outline-none p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* NAV LINKS */}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
