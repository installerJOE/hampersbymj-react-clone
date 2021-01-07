import React from 'react'
import {NavLink} from 'react-router-dom'



function HomeTrendyGift(props){
  return(
    <NavLink 
      to="/product"
      className="col-lg-3 col-sm-3 col-md-3 col-xs-4 product-link"
      activeClassName="active-menu"
    >
      <div className="col-12">
        <img src={props.product.imageUrl} width="100%"/>
      </div>
      <div className="col-12">
        <h2>{props.product.title}</h2>
        <h2>{props.product.pricing}</h2>
      </div>
    </NavLink>
  )
}

export default HomeTrendyGift