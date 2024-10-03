import React, {useContext} from 'react'
import ShopContext from '../context/ShopContext'
import CartProduct from '../components/CartProduct'

const Cart = () => {
  const {cartProducts} = useContext(ShopContext)
  console.log(cartProducts)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-200">
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </div>
  )
}

export default Cart