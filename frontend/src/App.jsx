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

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/product:productId' element={<Product />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
