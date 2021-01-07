import React from 'react'
import {NavLink} from 'react-router-dom'

function NavMenu(props){
  return(
    <NavLink 
      to={props.navList.link}
      exact activeClassName={!props.navList.image && "active-nav-menu"}
      className="nav-menu"
      style={{float: props.navList.float, marginTop: props.navList.name !== "Logo" && "12px"}}>
      {
        props.navList.name !== "Logo" ? <span>{props.navList.name}</span> :
        <img src="./logo.png" height="40px"/>
      }
    </NavLink>
  )
}

export default NavMenu