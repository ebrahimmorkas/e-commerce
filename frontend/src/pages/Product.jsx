import React, { useContext } from 'react';
import herocomponentimage from '../assets/images/herocomponentimage.png'; // Add the actual image path
import ShopContext from '../context/ShopContext'
import { useParams } from 'react-router-dom';

const Product = () => {

  const {productID} = useParams();
  const { products } = useContext(ShopContext);
// console.log(`ID is ${productID}`)
  const product = products.filter((prod) => prod.id == productID)
  // console.log(product[0].name)
  return (
    <div className="container mx-auto flex py-8">
      {/* Left section with 4 images */}
      <div className="w-[30%] flex flex-col space-y-4">
        <img src={herocomponentimage} alt="Product Image 1" className="w-full h-[150px] object-cover" />
        <img src={herocomponentimage} alt="Product Image 2" className="w-full h-[150px] object-cover" />
        <img src={herocomponentimage} alt="Product Image 3" className="w-full h-[150px] object-cover" />
        <img src={herocomponentimage} alt="Product Image 4" className="w-full h-[150px] object-cover" />
      </div>``

      {/* Right section with image, title, description, price, sizes, and button */}
      <div className="w-[70%] flex px-4 space-x-4">
        <div className="flex flex-col w-[40%]">
          {/* Main product image */}
          <div className="h-[70%]">
            <img src={herocomponentimage} alt="Main Product Image" className="w-full h-full object-contain" />
          </div>
          {/* Product title */}
          <div className="h-[30%] flex items-start justify-center mt-2">
            <h2 className="text-xl font-bold">{product[0].name}</h2>
          </div>
        </div>

        <div className="w-[30%] space-y-4">
          {/* Product description */}
          <p className="text-gray-700 my-10">{product[0].description}</p>
          {/* Product price */}
          <p className="text-2xl font-bold">{`$ ${product[0].price}`}</p>
          {/* Sizes */}
          <div className="flex space-x-2 container my-10">
            <button className="border border-gray-300 px-4 py-2 w-[100px]">S</button>
            <button className="border border-gray-300 px-4 py-2 w-[100px]">M</button>
            <button className="border border-gray-300 px-4 py-2 w-[100px]">L</button>
            <button className="border border-gray-300 px-4 py-2 w-[100px]">XL</button>
          </div>
          {/* Add to Cart button */}
          <button className="bg-black text-white px-4 py-2 w-[420px] rounded-md">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
