import React, {Component} from 'react'
import Home from './home'
import Category from './category'
import Blog  from './blog'
import AboutUs from './aboutUs'
import Cart from './cart'
import User from './user'
import {Route, Switch} from 'react-router-dom'
import Product from './product'
import ToDoList from './toDoList'


class Body extends Component{
  render(){
    return(
      <div>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/category"} component={Category}/>
        <Route path={"/blog"} component={Blog}/>
        <Route path={"/about-us"} component={AboutUs}/>
        <Route path={"/cart"} component={Cart}/>
        <Route path={"/user"} component={User}/>
        <Route path={"/product"} component={Product}/>
        <Route path={"/to-do-list"} component={ToDoList}/>
        
      </div>
    )
  }
}

export default Body