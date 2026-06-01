import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Navbar = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className="navbar">
      <h1 className="logo">Navbar</h1>
      <h2>{theme}</h2>
      <button className="theme-btn"
      onClick={()=>{
        if(theme==='light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
      }}
      >Change theme</button>
    </div>
  )
}

export default Navbar
