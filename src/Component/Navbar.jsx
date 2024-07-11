import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between bg-gray-300 p-3 shadow-lg gap-6'>
      <div>
        <h1 className='text-gray-800 text-2xl font-semibold'> Redux Shopping Cart</h1>
      </div>
      <div className='flex items-center  gap-12 px-8 '>
        <NavLink  to="/" className="text-xl font-semibold text-slate-800 ">Home</NavLink>
        <NavLink to="/carts" className="text-xl font-semibold text-slate-800">Cart</NavLink>
        </div>
    </div>
  )
}
