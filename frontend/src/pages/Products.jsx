import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductFilterLeftSection from '../components/ProductFilterLeftSection'
import ShopContext from '../context/ShopContext'
import ClipLoader from 'react-spinners/ClipLoader'

const Products = () => {
  const filterProducts = useContext(ShopContext)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
      const res = await fetch('http://localhost:3000/products')
      const data = await res.json()
      setProducts(data)
      } catch(e) {
        console.log(`Error Fetching data ${e}`)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])


  // const test = useContext(ShopContext)
  // console.log(`Blah blah balh balh ${test}`)
  return (
    // <div className='bg-blueGray-50 flex flex-wrap justify-center p-4'>
    <div className='bg-blueGray-50 flex h-screen'>
      {/* Calling the left section that will filter out the products based on the category */}
      <div className="w-64 bg-white shadow-md">
        <ProductFilterLeftSection />
      </div>
      <div className="flex-1 overflow-y-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {!loading ? 
            filterProducts.filteredProducts.map((product, key) => (
            <ProductCard 
            key={product.id} 
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            category={product.category}
            size={product.size}
            date_of_publish={product.date_of_publish}
            is_added_to_cart={product.is_added_to_cart} />
          )): <ClipLoader />}
      </div>
      </div>
    </div>
  )
}

export default Products