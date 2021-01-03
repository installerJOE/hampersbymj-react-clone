import React, {Component} from 'react'
import Header from './components/header'
import Body from './main/body'
import Footer from './components/footer'

class App extends Component{
  render(){   
    return(
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
} 

export default App