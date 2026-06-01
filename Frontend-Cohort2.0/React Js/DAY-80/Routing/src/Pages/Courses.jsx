import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
   <div className="  justify-around">

      
      <div className="banner flex items-center w-full justify-around bg-slate-900 px-6 py-4  shadow-lg h-[80px]">
        {/* ye sale is live course ke sare childs me dikhega because of Outlet */}
        <p className="text-pink-400 font-semibold">🔥 Sale is Live!!!!</p>
        <p className="text-pink-400 font-semibold">🔥 Sale is Live!!!!</p>
        <p className="text-pink-400 font-semibold">🔥 Sale is Live!!!!</p>
        <p className="text-pink-400 font-semibold">🔥 Sale is Live!!!!</p>
        <p className="text-pink-400 font-semibold">🔥 Sale is Live!!!!</p>
      </div>

{/* Outlet use kara */}
      <Outlet/>

    </div>
  )
}

export default Courses
