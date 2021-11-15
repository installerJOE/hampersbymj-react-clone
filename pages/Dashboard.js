import React, { useState } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import "../css/dashboard.css"
import ProfileSettings from './ProfileSettings'
import SecuritySettings from './SecuritySettings'
import NotePad from './NotePad'
import Profile from './Profile'
import SideMenuLink from '../components/SideMenuLink'
import sideMenuList from '../components/sideMenuList'

const Dashboard = () => {

  const SideNavigation = sideMenuList.map(link => <SideMenuLink key={link.id} navlink={link}/>)

  return (
    <Router>
    <div className="main">
      <div className="col-md-3 col-lg-3 col-sm-12 col-12 side-menu-list" id="sideMenuList">
        { 
          // navigation elements    
          SideNavigation 
        }
      </div>
      <div className="col-md-9 col-lg-9 col-sm-12 col-12 menu-div-content" id="menuDivContent">
        <Route path="/user/dashboard" component={Profile}/>
        <Route path="/user/profile-settings" component={ProfileSettings}/>
        <Route path="/user/security-settings" component={SecuritySettings}/>
        <Route path="/user/notepad" component={NotePad}/>
      </div>
    </div>
    </Router>
  )
}

export default Dashboard
