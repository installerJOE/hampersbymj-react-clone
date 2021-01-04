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
      breakInterval: false
    }
    this.handleCarouselMovement = this.handleCarouselMovement.bind(this)
  }

  componentDidMount(){
    setInterval(() => this.handleCarouselMovement(true), 2000)
  }

  pauseAutomation(){

  }
  playAutomation(){
    setInterval(() => this.handleCarouselMovement(true), 2000)
  }

  handleCarouselMovement(forward){
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