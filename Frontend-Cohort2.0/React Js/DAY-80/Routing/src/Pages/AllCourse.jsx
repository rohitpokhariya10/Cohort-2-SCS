import React from 'react'
import { NavLink } from 'react-router-dom'

const AllCourse = () => {
  return (
    <div className="h-[300px] flex flex-col items-center justify-center gap-8 bg-blue-900">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-sky-400 underline">
        All Courses
      </h1>

      {/* Courses */}
      <div className="flex gap-6 mb-[10px]">
        
        <NavLink
          to="/courses/kodex"
          className={({ isActive }) =>
            `px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300
            ${
              isActive
                ? 'bg-sky-500 text-white'
                : 'bg-slate-800 text-sky-400 hover:bg-sky-500 hover:text-white'
            }`
          }
        >
          Kodex
        </NavLink>

        <NavLink
          to="/courses/kodr"
          className={({ isActive }) =>
            `px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300
            ${
              isActive
                ? 'bg-sky-500 text-white'
                : 'bg-slate-800 text-sky-400 hover:bg-sky-500 hover:text-white'
            }`
          }
        >
          Kodr
        </NavLink>

      </div>
    </div>
  )
}

export default AllCourse
