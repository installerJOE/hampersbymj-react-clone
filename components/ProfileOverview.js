import React from 'react'

const ProfileOverview = ({ title, value, icon, advanced}) => {
  const profileTitle = {
    padding: 15,
    backgroundColor: "rgb(2, 88, 145) ",
    color: '#fff',
    borderRadius: 4
  }
    
  const profileValue = {
    marginLeft: 15,
    marginRight: 15,
    color: 'rgb(2, 88, 145)',
    marginBottom: "1.5em",
    fontSize: advanced !== undefined && advanced === true ? 20 : 28,
    lineHeight: '1.5em'
  }
  
  return (
    <div className={advanced !== undefined && advanced && "col-md-4 col-sm-12 col-12"}>
      <h3 style={profileTitle}> 
        {title} 
      </h3>
      <h3 style={profileValue}> 
        {value}
      </h3>
    </div>
  )
}

export default ProfileOverview
