import React from 'react'

const Card = (props) => {
    // props ass karte time console karle smj jayega rohit
    console.log(props);
    console.log(props.card);
    console.log(props.card2);
    console.log(props.card2.username);
    
    
    
    
  return (
    <div>
        <div className="card">
        <img
          src="https://i.pinimg.com/736x/8c/87/85/8c8785efb6c9b5e65cb4fb50a918a0b6.jpg"
          alt="profile"
          className="card-img"
        />

        <h2 className="card-name">{props.card}</h2>
        <p className="card-email">{props.card2.email}</p>
      </div>
    </div>
  )
}

export default Card