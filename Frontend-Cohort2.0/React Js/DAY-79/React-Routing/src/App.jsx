 import React from 'react'
import Navbar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
 
 const App = () => {
   return (
     <div>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/product" element={<Product/>}/>

        {/* Nested Route */}
        {/* isme hum route alag alag karke define kar skte hai
         */}
        <Route path="/product/men" element={<Men/>}/>
        <Route path="/product/women" element={<Women/>}/>
        
       </Routes>
     </div>
   )
 }
 
 export default App
 