import React from 'react'
import Lower from './Lower'
import Upper from './Upper'

const Card = (props) => {
    // // props ass karte time console karle smj jayega rohit
    // console.log(props);
    // console.log(props.card);
    // console.log(props.card2);
    // console.log(props.card2.username);

  return (
    <div className='card'>
       <Upper/>
       <Lower/>

    </div>
  )
}

export default Card