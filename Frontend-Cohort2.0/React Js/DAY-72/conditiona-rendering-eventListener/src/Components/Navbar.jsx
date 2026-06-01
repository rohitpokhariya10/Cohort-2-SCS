import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor : props.color}} className='Nav'>
      <h1>{props.title}</h1>
      <div className='xyz'>
        {
            props.links.map(function(elem){
                return <h3>{elem}</h3>
            })
        }
      </div>
    </div>
  )
}

export default Navbar
