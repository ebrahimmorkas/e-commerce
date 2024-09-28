import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductFilterLeftSection from '../components/ProductFilterLeftSection'

const Products = () => {
  return (
    // <div className='bg-blueGray-50 flex flex-wrap justify-center p-4'>
    <div className='bg-blueGray-50 flex h-screen'>
      {/* Calling the left section that will filter out the products based on the category */}
      <div className="w-64 bg-white shadow-md">
        <ProductFilterLeftSection />
      </div>
      <div className="flex-1 overflow-y-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div><ProductCard /></div>
      <div><ProductCard /></div>
      <div><ProductCard /></div>
      <div><ProductCard /></div>
      <div><ProductCard /></div>
      <div><ProductCard /></div>
      <div><ProductCard /></div>
      <div><ProductCard /></div>
      <div><ProductCard /></div>
      <div><ProductCard /></div>
      </div>
      </div>
    </div>
  )
}

export default Products