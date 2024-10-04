import React from 'react';

const OrderCard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>
      <div className="flex items-center justify-between border-b border-gray-200 py-4">
        {/* Product Image */}
        <div className="flex items-center space-x-4">
          <img
            src="https://example.com/image1.jpg"
            alt="Men Round Neck Pure Cotton T-shirt"
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <h3 className="text-lg font-semibold">Men Round Neck Pure Cotton T-shirt</h3>
            <p className="text-sm text-gray-500">$200</p>
            <p className="text-sm text-gray-500">Quantity: 1 | Size: M</p>
            <p className="text-sm text-gray-500">Date: 25, Jul, 2024</p>
          </div>
        </div>

        {/* Status and Track Order */}
        <div className="flex items-center space-x-6">
          <span className="text-sm text-green-600 flex items-center">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
            Ready to ship
          </span>
          <button className="text-sm text-blue-500 border border-blue-500 px-3 py-1 rounded transition-colors duration-200 hover:bg-blue-500 hover:text-white">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
