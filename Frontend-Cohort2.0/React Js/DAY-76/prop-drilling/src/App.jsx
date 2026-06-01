import React from 'react'
import Card from './Components/Card'

const App = () => {
  const card = {
    username:"Rohit",
    email:"r1@hemail.com",
    profileImg :"https://i.pinimg.com/736x/8c/87/85/8c8785efb6c9b5e65cb4fb50a918a0b6.jpg"
  }
  return (
    <div className='app'>

      <Card  card={card}/>
    </div>
  )
}

export default App
