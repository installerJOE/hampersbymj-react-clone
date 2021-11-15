import React from "react"

const HorzRule = (props)=>{
  return (
    <hr
      style={{
        width: props.width,
        margin: "auto",
        border: "1px solid #9ea5e9",
        backgroundColor: "#9ea5e9",
        opacity: 1,
        marginBottom: props.bottom
      }}
    />
  )
}

export default HorzRule