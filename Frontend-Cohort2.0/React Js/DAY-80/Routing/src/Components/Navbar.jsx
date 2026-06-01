import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav w-full bg-slate-900 h-[80px] flex items-center justify-center ">
      <div className="flex gap-12">
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            //jese yhi pe talwind lagali vese 2 alag classes bnake index.css me bhi style de skte the
            isActive
              ? "text-amber-100 text-lg font-semibold"
              : "text-white text-lg font-semibold hover:text-amber-100"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-pink-400 text-lg font-semibold"
              : "text-white text-lg font-semibold hover:text-pink-400 transition"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "text-sky-400 text-lg font-semibold"
              : "text-white text-lg font-semibold hover:text-sky-400 transition"
          }
        >
          Courses
        </NavLink>

      </div>
    </div>
  )
}

export default Navbar
