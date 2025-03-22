import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    
      <nav className="flex justify-center p-5 w-full h-16 min-w-screen gap-10 items-center shadow-md bg-gray-50">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/fav">Favorite</NavLink>
      </nav>
   
  )
}

export default Navbar
