import React from 'react'

const ProductFilterLeftSection = () => {
    const categories = ['Men', 'Women', 'Kids']
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input type="checkbox" id={category} className="mr-2" />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
    )
}

export default ProductFilterLeftSection