import React from 'react'

function SubCarousel(props){
  return(
    <div className="div-carousel">
      {/* Previous Slide button */}
      <div className="carousel-ctrl" style={{float: "left", left: "30px"}} onClick={()=>props.handleClick()}> 
        &#10094; 
      </div>
      
      {/* Unit Image of the slide */}
      <img src="./images/slider.jpg" alt="carousel"/>
      
      {/* Next slide button */}
      <div className="carousel-ctrl" style={{float: "right", right: "30px"}} onClick={()=>props.handleClick()}> 
        &#10095; 
      </div>
    </div>
  )
}

export default SubCarousel