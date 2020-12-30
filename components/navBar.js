import React, {Component} from 'react'
import NavMenu from './navMenu'


class NavBar extends Component{
  render(){
    const menuBlock = [
      {
        id: "1",
        name: "Logo",
        link: "/",
        float: "left"
      },
      {
        id: "2",
        name: "Home",
        link: "/",
        float: "left"
      },
      {
        id: "3",
        name: "Category",
        link: "/category",
        float: "left"
      },
      {
        id: "4",
        name: "Blog",
        link: "/blog",
        float: "left"
      },
      {
        id: "5",
        name: "About Us",
        link: "/about-us",
        float: "left"
      },
      {
        id: "6",
        name: "Cart",
        link: "/cart",
        float: "right"
      },
      {
        id: "7",
        name: "User",
        link: "/user",
        float: "right"
      }
    ].map(list => <NavMenu key={list.id} navList={list}/>)

    return(
      <div className="nav-bar col-12">
        <ul className="inline-ul">
          {menuBlock}
        </ul>
      </div>
    )
  }
}

export default NavBar