import React from 'react'


function SubContactInfo(props){
  return(
    <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
      <div className="col-lg-12 col-sm-12 col-md-12 col-xs-3">
        {props.icon}
      </div>
      <div className="col-lg-12 col-sm-12 col-md-12 col-xs-9">
        {props.contact}
      </div>
    </div>
  )
}

export default SubContactInfo