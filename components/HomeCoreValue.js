import React from "react";

const HomeCoreValue = (props) => {
  return(
    <div className="col-md-12">
      <div className="col-lg-6 col-md-4 col-sm-4 col-12" style={{float: Number(props.value.id)%2 === 0 ? 'right' : 'left'}}>
        {props.value.icon}
      </div>
      <div className="col-lg-6 col-md-8 col-sm-8 col-12" style={{float: Number(props.value.id)%2 === 0 ? 'left' : 'right'}}>
        <h2 className="sub-sub-header">
          {props.value.header}
        </h2>
        <p>
          {props.value.content}
        </p>
      </div>
    </div>
  )
}

export default HomeCoreValue