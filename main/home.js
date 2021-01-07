import React, { Component } from 'react'
import HomeCarousel from './components/homeCarousel'
import HomeBlock from './components/homeBlocks'


class Home extends Component{
  render(){
    return(
      <div className="col-12">
        <HomeCarousel/>
        <HomeBlock/>
      </div>
    )
  }
}

export default Home