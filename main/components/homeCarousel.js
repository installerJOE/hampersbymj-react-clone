import React, {Component} from 'react'
import SubCarousel from './subCarousel'

class HomeCarousel extends Component{
  constructor(){
    super()
    this.state = {
        isClicked: false
    }
    this.handleCarouselMovement = this.handleCarouselMovement.bind(this)
  }

  handleCarouselMovement(){
    this.setState(prev => {
      return{
        isClicked: !prev.isClicked
      }
    })
    
  }

  render(){
    return(
      <div className="col-12">
                
        <SubCarousel
          handleClick={this.handleCarouselMovement}
        />
        
      </div>
    )
  }
}

export default HomeCarousel