import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = ({ uri, name, defaultNavStatus }) => {
  return (
    <li className="nav-item">
        <Link 
          className="nav-link" 
          to={uri}
          onClick={defaultNavStatus}
        > {name} </Link>
    </li>
  )
}

export default Navlinks
