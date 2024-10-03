import React, {useContext, useState, useEffect} from 'react'
import ShopContext from '../context/ShopContext'
import CartProduct from '../components/CartProduct'
import Spinner from '../components/Spinner'

const Cart = () => {
  const {cartProducts} = useContext(ShopContext)

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if(cartProducts.length > 0) {
      setProducts(cartProducts)
      setLoading(false)
    }
    else {
      setLoading(true)
    }
  }, [cartProducts])
  console.log(cartProducts)
  console.log(products)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-200">
      {products.length > 0 ? cartProducts.map((prod) => <CartProduct key={prod.id} name={prod.name}/>) : (<Spinner />) }
    </div>
  )
}

export default Cart