import React, { useEffect, useState } from 'react'
import './index.css'

const App = () => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)

// CASE-->1

  // useEffect(() => {
  //  alert("I am Case 1")
  // },[])

  //CASE-->2

  // useEffect(() => {
  //  alert("I am Case 2")
  // })

  //CASE-->3

  useEffect(() => {
    alert("I am Case 3")
  },[number1,number2])

  return (
    <div>

      <div className="header">
        <h1>Hi Connections 👋</h1>
        <h2>I am showing you 3 useEffect cases</h2>
      </div>

      {/* CASE 1 */}
      <div className="container">
        <div className="card">
          <h2>Number 1</h2>
          <h1>{number1}</h1>
          <button onClick={() => setNumber1(Math.floor(Math.random() * 100))}>
            Change Number1
          </button>
        </div>

        {/* CASE 2 */}
        <div className="card">
          <h2>Number 2</h2>
          <h1>{number2}</h1>
          <button onClick={() => setNumber2(Math.floor(Math.random() * 100))}>
            Change Number2
          </button>
        </div>

        {/* CASE 3 */}
        <div className="card">
          <h2>Number 3</h2>
          <h1>{number3}</h1>
          <button onClick={() => setNumber3(Math.floor(Math.random() * 100))}>
            Change Number3
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
