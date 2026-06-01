
//react 18 ne aya hai root element bnane ke lie
import { createRoot } from 'react-dom/client'
//css import
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
    <App />//App function ko call karre hai--->App()

)
