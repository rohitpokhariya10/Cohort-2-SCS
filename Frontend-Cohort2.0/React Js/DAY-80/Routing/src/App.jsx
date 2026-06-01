 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Navbar from './Components/Navbar'
import Kodr from './Pages/Kodr'
import Kodex from './Pages/Kodex'
import AllCourse from './Pages/AllCourse'
import Footer from './Components/Footer'
 
 const App = () => {
   return (
     <div>
     <Navbar/>
  
      <Routes>
        {/* default path banana jaroori hota hai */}
        <Route path = "/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
       
       {/* Nested Routes */}
        <Route path="/courses" element={<Courses/>}> 
        
         {/* ye 3 child hai coures route ke */}
         <Route path='/courses' element={<AllCourse/>}/>
         <Route path="/courses/kodr" element={<Kodr/>}/>
         <Route path="/courses/kodex" element={<Kodex/>}/>

        </Route>
      </Routes>

       <Footer/>


      
     </div>
   )
 }
 
 export default App
 