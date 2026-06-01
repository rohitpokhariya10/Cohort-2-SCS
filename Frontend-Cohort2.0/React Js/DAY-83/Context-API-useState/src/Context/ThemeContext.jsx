import React, { createContext, useState } from 'react'


//step --> createContext() banao
export const ThemeDataContext = createContext()

const ThemeContext = ({children}) => {
    //store
    const [theme, setTheme] = useState("light")

  return (
    <div>
        <ThemeDataContext.Provider value={[theme,setTheme]}>
           {children}
        </ThemeDataContext.Provider>
     
    </div>
  )
}

export default ThemeContext
