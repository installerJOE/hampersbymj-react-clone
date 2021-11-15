import React from 'react'

const MenuContentHeader = ({ title, icon, subheader }) => {

  return (
    <div className="row">
      <h1 className="dashboard-header" style={{fontSize: subheader !== undefined && subheader && 28 }}>
        <span className={icon}></span> {title}
      </h1>
    </div>
  )
}

export default MenuContentHeader
