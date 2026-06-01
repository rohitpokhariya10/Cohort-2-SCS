import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './Components/User'

const App = () => {

  const [allData, setAllData] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setAllData(response.data)
       console.log(response.data);
       
    } catch (err) {
      console.log(err)
    }
  }

  // 👇 page load hote hi API call
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='app'>
      
      <div>
        {/* <button onClick={getData}>Click me</button> */}
      </div>

      <div className='app'>
        {
          allData.map((elem,id) => (
            <User key={elem.id} data={elem} />
          ))
        }
      </div>

    </div>
  )
}

export default App
