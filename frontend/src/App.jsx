import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Login from './pages/Login'
import NavbarLayout from './layouts/NavbarLayout'
import Products from './pages/Products'
import ShopContextProvider from './context/ShopContextProvider'
import SearchContextProvider from './context/SearchContextProvider'
import PlaceOrder from './pages/PlaceOrder'
import Signup from './pages/Signup'

function App() {

  return (
    <BrowserRouter>
    <SearchContextProvider>
    <ShopContextProvider>
      <Routes>
        <Route path='/' element={<NavbarLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/product/:productID' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='place-order' element={<PlaceOrder />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </ShopContextProvider>
    </SearchContextProvider>
    </BrowserRouter>
  )
}

export default App
