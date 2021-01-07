import React, {Component} from 'react'
import SubCarousel from './subCarousel'


//array of images making up the carousel
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
      isActive: 0,
      autoSlide: false
    }
    this.handleCarouselMovement = this.handleCarouselMovement.bind(this)
  }

  componentDidMount(){
    this.setAutoSlide()
  }

  setAutoSlide(){
    this.interval = setInterval(() => this.handleCarouselMovement(true, true), 4000)
  }

  handleCarouselMovement(forward, auto){
    this.setState(prev => {
      // bring the next image on the slide show
      if(forward){
        return{
          //make sure isActive is always less than number of images in the carousel
          //as well as greater or equal to index [0]
          isActive: this.state.isActive < (slideImages.length - 1) ?
            (prev.isActive + 1) : (prev.isActive - prev.isActive),
        }        
      }
      //bring the previous image in the slide show
      else{
        return{
          //make sure that isActive is always greater or equal to index [0]
          //while less than the number of images making up the carousel
          isActive: this.state.isActive === 0 ? 
            (prev.isActive + (slideImages.length - 1)) : (prev.isActive - 1),
        }
      }
    })
    if(!auto){
      clearInterval(this.interval)
      this.setAutoSlide()
    }
    else{}
  }

  render(){    
    let activeImg = slideImages[this.state.isActive]
    
    return(
      <div className="col-12 left-clear">
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