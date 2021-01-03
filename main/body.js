import React, {Component} from 'react'
import Home from './home'


class Body extends Component{
  render(){
    return(
      <div>
        <Home/>
        <div className="col-12 body">
          <h2><h1>I am a working body kiddo. </h1></h2>
        </div>
      </div>
    )
  }
}

export default Body