import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectsPage'
import ToDoApp from './pages/ToDoApp'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'


const App = (boolValue) => {
  const [footer, showFooter] = useState(true)
  const showFooterBlock = () => {
    showFooter(boolValue)
  }
  return(
    <Router>
      <Navbar showFooter={showFooterBlock}/>
      <Route path='/' exact component={Home}/>
      <Route path='/projects' component={ProjectPage}/>
      <Route path='/to-do-app' component={ToDoApp}/>
      <Route path='/user' component={Dashboard}/>
      {footer && <Footer/>}
    </Router>
  )
}

export default App