import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className="absolute bottom-0 w-full flex items-center justify-between px-10 py-6 bg-slate-900 mt-6">
      <h2 className="text-white text-2xl font-semibold">
        Footer
      </h2>

      <button className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition duration-300 shadow-lg"
      onClick={()=>{
        navigate("/courses")
      }}
      
      >
        Explore Courses
      </button>
    </div>
  )
}

export default Footer
