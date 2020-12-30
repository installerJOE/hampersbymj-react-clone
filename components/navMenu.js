import React from 'react'

function NavMenu(props){
  return(
    <li style={{float: props.navList.float, marginTop: props.navList.name !== "Logo" && "12px"}}>
      {
        props.navList.name !== "Logo" ? <span>{props.navList.name}</span> :
        <img src="./logo.png" height="40px"/>
      }
    </li>
  )
}

export default NavMenu