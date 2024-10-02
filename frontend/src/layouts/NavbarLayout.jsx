import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const NavbarLayout = () => {
  return (
    <>
        <Navbar />
        <SearchBar />
        <Outlet />
    </>
  )
}

export default NavbarLayout