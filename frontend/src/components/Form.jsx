import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">{location.pathname == '/login' ? "Login" : "Signup"}</h2>

        {/* Name Field */}
        {location.pathname == '/login' ? (false) : (<div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>)}
        

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-500 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              // Eye with stroke (password visible)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-10.5-7.5a10.05 10.05 0 011.303-3.164M14.12 9.88A3 3 0 119.88 14.12M19.07 19.07A10.05 10.05 0 0010.5 2.707M9.88 14.12A3 3 0 1012 10a3 3 0 00-2.12.88m0 0l-3.07 3.07" />
              </svg>
            ) : (
              // Full eye (password hidden)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5c6 0 9.5 7.5 9.5 7.5s-3.5 7.5-9.5 7.5S2.5 12 2.5 12s3.5-7.5 9.5-7.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
            )}
          </button>
        </div>

        {/* Login Button */}
        <div>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            {location.pathname == '/login' ? "Login" : "Signup"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
