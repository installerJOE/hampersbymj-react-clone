import React from 'react'

function HomeGiftCategory(props){
  return(
    <div className="col-lg-3 col-sm-3 col-md-3 col-xs-6 home-category">
      <div className="col-6">
        {props.category.name}
      </div>
      <div className="col-6">
        <img src={props.category.imageUrl} width="100%"/>
      </div>
    </div>
  )
}

export default HomeGiftCategory