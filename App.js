import React, {Component} from 'react'
import Header from './components/header'
import Body from './main/body'
import Footer from './components/footer'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component{
  render(){   
    return(
      <Router>
        <Header/>
        <Body/>
        <Footer/>
      </Router>
    )
  }
} 

export default App