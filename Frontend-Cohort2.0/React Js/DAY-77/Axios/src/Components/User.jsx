import React from 'react'

const User = ({ data }) => {
    //for random colors in user cards
  const clr1 = Math.floor(Math.random() * 256)
  const clr2 = Math.floor(Math.random() * 256)
  const clr3 = Math.floor(Math.random() * 256)

  return (
    <div
      className="user-card"
      style={{
        background: `linear-gradient(135deg, rgb(${clr1},${clr2},${clr3}), #111)`
      }}
    >
      <h2 className="user-name">{data.name}</h2>

      <a
        className="user-website"
        href={`https://${data.website}`}
        target="_blank"
        rel="noreferrer"
      >
        🌐 {data.website}
      </a>

      <p className="user-email">📧 {data.email}</p>
    </div>
  )
}

export default User
