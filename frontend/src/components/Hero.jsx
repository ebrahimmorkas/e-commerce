import React from 'react';
import { Link } from 'react-router-dom';
import herocomponentimage from '../assets/images/herocomponentimage.png';

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-blueGray-50">
      <section className="relative w-full flex flex-wrap items-center justify-center pt-16 md:pt-0"> 
        {/* Image Section */}
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4 flex justify-center mt-4 md:mt-0"> 
          <img
            alt="Ecommerce"
            className="max-w-full rounded-lg shadow-lg"
            src={herocomponentimage}
            style={{ marginTop: '20px' }} // Adding margin to prevent it from touching the top
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4 flex flex-col items-start">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">A growing company</h3>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">Carefully crafted components</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">Amazing page examples</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-8 w-full flex justify-center">
              <Link
                to="/products"
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 text-center w-full md:w-auto" // Updated to center text
              >
                <i className="fas fa-shopping-cart mr-2"></i> 
                Start Exploring Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
