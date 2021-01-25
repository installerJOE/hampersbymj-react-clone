import React from 'react'
import {Link} from 'react-router-dom'



function HomeTrendyGift(props){
  console.log(props.catLink)
  return(
    <Link 
      to={`/category/${props.catLink}/${props.product.pageLink}-item-${props.product.id}`}
      className="col-lg-3 col-sm-3 col-md-3 col-xs-4 product-link"
    >
      <div className="col-12">
        <img src={props.product.imageUrl} width="100%"/>
      </div>
      <div className="col-12">
        <h2>{props.product.title}</h2>
        <h2>{props.product.pricing}</h2>
      </div>
    </Link>
  )
}

export default HomeTrendyGift