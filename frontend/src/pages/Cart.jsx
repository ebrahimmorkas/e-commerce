import React, {useContext} from 'react'
import ShopContext from '../context/ShopContext'

const Cart = () => {
  const {cartProducts} = useContext(ShopContext)
  console.log(cartProducts)
  return (
    <div>Cart</div>
  )
}

export default Cart