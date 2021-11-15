import React from 'react'

const ProfileCard = ({ card }) => {
  return (
    <div className="col-md-4 col-sm-12 col-12 stat-card">
      <div className={"card " + card.bgColor}>
        <h3> {card.title} </h3> 
        <h1 className="xl-header"> {card.number} </h1>
        <p> {card.caption} </p>
      </div>
  </div>
  )
}

export default ProfileCard
