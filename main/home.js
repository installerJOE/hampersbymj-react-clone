import React, { Component } from 'react'
import HomeCarousel from './components/homeCarousel'

class Home extends Component{
  render(){
    return(
      <div className="col-12">
        <HomeCarousel/>
      </div>
    )
  }
}

export default Home