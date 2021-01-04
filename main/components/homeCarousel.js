import React, {Component} from 'react'
import SubCarousel from './subCarousel'



const slideImages = [
  {
    id: "1",
    url: "./images/slider.jpg"
  },
  {
    id: "2",
    url: "./images/shoe.jpg"
  },
  {
    id: "3",
    url: "./images/coffee-mugs.jpg"
  }
]


class HomeCarousel extends Component{
  constructor(){
    super()
    this.state = {
      isActive: 0
    }
    this.handleCarouselMovement = this.handleCarouselMovement.bind(this)
  }

  handleCarouselMovement(forward){
    this.setState(prev => {
      // bring the next image on the slide show
      if(forward){
        if(this.state.isActive < (slideImages.length - 1)){
          return{
            isActive: prev.isActive + 1
          }
        }
        else{
          return{
            isActive: (prev.isActive - prev.isActive)
          }
        }        
      }
      //bring the previous image in the slide show
      else{
        if(this.state.isActive === 0){
          return{
            isActive: (prev.isActive + (slideImages.length - 1))
          }
        }
        else{
          return{
            isActive: prev.isActive - 1
          }
        }
      }
    })
  }

  render(){    
    let activeImg = slideImages[this.state.isActive]
    return(
      <div className="col-12">
        <SubCarousel 
          id={this.state.isActive + 1} 
          image={activeImg.url} 
          handleClick={this.handleCarouselMovement}
        />
      </div>
    )
  }
}

export default HomeCarousel