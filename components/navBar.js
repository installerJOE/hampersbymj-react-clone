import React, { useState } from "react";
import '../css/navbar.css';
import Navlinks from './Navlinks'
import { Link } from 'react-router-dom'

document.addEventListener('scroll', scrollPage)
// scrollPage();

function scrollPage(){
  if(window.screen.width > 767){
    var content = document.getElementById('root');
    var coordY = content.getBoundingClientRect().top;
    var navbar = document.querySelector('#navbar');
        
    if(coordY < -35){
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add("navbar-opaque");
    }
    else{
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove("navbar-opaque");
    }
  }
}

function Navbar({ showFooter }){
  const [dashboardNav, showDashboardNav] = useState(false)

  const showDashbNav = (navState) => {
    showDashboardNav(navState);
    
    showFooter(navState)
  }
  return(
    <header>
        <nav style={{position: "fixed", width: '100%', zIndex: "10000"}}>
        <div className="title-bar">
            <div className="col-md-6 col-sm-6 col-12 mobile-none">
            Full Stack | React | Laravel | REST API Developer 
            </div>
            <div className="col-md-6 col-sm-6 col-6" style={{textAlign:'right'}}>
            <span> +234 (706) 653 1006 </span> 
            <span> installerjoe20@gmail.com </span>
            </div>
        </div>
        <nav className="navbar navbar-expand-md navbar-transparent" id="navbar">
            <div className="container">
            <Link className="navbar-brand" to="/">
                Devijo
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation"> &#9776; </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Right Side Of Navbar */}
            <ul className="navbar-nav ml-auto">
              {/* Authentication Links */}
              { dashboardNav ? <Navlinks
                uri="/"
                name="Back to home"
                defaultNavStatus={() => showDashbNav(false)}
              /> :
              <>
                <Navlinks
                  uri="/"
                  name="Home"
                  defaultNavStatus={() => showDashbNav(false)}
                />

                <Navlinks   
                  uri="/#about"
                  name="About"
                  defaultNavStatus={() => showDashbNav(false)}
                />
                
                <Navlinks   
                  uri="/projects"
                  name="Projects"
                  defaultNavStatus={() => showDashbNav(false)}
                />

                <Navlinks   
                  uri="/contact"
                  name="Contact"
                  defaultNavStatus={() => showDashbNav(false)}
                />

                <Navlinks   
                  uri="/user"
                  name="Profile"
                  defaultNavStatus={() => showDashbNav(true)}
                />
              </>
              }
            </ul>
            </div>
        </nav>
        </nav>
    </header>
  )
}

export default Navbar