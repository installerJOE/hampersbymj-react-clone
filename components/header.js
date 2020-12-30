import React, {Component} from 'react'
import TitleBar from './titleBar'
import NavBar from './navBar'


class Header extends Component{
  render(){
    return(
      <div>
        <TitleBar/>
        <NavBar/>
      </div>
    )
  }
}

export default Header