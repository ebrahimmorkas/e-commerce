import React, {useContext} from 'react'
import ShopContext from '../context/ShopContext'


const ProductFilterLeftSection = () => {
  const categoryFilter = useContext(ShopContext)
  // console.log(`Hiii from filters ${categoryFilter.filters}`)
  // categoryFilter.updateFilters(5)
    const categories = ['Men', 'Women', 'Kids']
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          {categories.map((category) => (
            <div key={category} className="flex items-center mb-2">
              <input type="checkbox" id={category} value={category} onChange={() => {categoryFilter.updateFilters(category)}} className="form-checkbox h-5 w-5 text-blue-600" />
              <label htmlFor={category} className="ml-2 text-gray-700">{category}</label>
            </div>
          ))}
        </div>
        {/* Add more filter options here */}
      </div>
    )
}

export default ProductFilterLeftSection