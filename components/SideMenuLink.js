import React from 'react'
import { Link } from 'react-router-dom'

const SideMenuLink = ({ navlink }) => {
  return (
    <li>
      <Link to={navlink.uri} className="nav-link"> 
        <i className={`fas fa-fw fa-home nav-icon ${navlink.icon}`}></i>
        <span className="nav-name"> {navlink.name} </span> 
      </Link>
    </li>
  )
}

export default SideMenuLink
