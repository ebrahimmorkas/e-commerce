import React from 'react'

const CartProduct = () => {
  return (
    <div className='container flex items-center justify-between bg-white shadow-2xl rounded-lg p-4 mt-8 mb-4 h-[200px]'>
      
      {/* Product Image */}
      <div className="w-[20%]">
        <img
          src="https://via.placeholder.com/150"
          alt="Sample Product"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex w-[60%] flex-col justify-between px-4">
        {/* Product title */}
        <div className="text-xl font-bold text-gray-800">Sample Product</div>

        {/* Product details (size and quantity) */}
        <div className="flex items-center space-x-4 mt-2">
          <span className="text-gray-600">Size: <span className="font-semibold">M</span></span>
          <span className="text-gray-600">Quantity: <span className="font-semibold">2</span></span>
        </div>

        {/* Price */}
        <div className="text-lg font-bold text-gray-800 mt-4">
          $49.99
        </div>
      </div>

      {/* Delete Button */}
      <div className="w-[20%] flex justify-center items-center">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-300"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
