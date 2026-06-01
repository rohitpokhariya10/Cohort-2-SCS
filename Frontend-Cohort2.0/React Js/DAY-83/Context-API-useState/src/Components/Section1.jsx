import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Section1 = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
    return (
        <div className='section1'>
            <h1 className='section1-h1'>Section 1</h1>
            <h2>{theme}</h2>
            <button className="theme-btn"
                onClick={() => {
                    if (theme === 'light') {
                        setTheme('dark')
                    }
                    else {
                        setTheme('light')
                    }
                }}
            >Change theme</button>
        </div>
    )
}

export default Section1