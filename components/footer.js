import React, {Component} from 'react'
import ContactInfo from './contactInfo'
import AboutCompany from './aboutCompany'
import socials from './socialsAPI'
import SocialMediaLink from './socials'

class Footer extends Component{
  render(){
    const socialMediaBlock = socials.map(name => <SocialMediaLink key={name.id} socialMedia={name}/>)
    return(
      <div className="col-12 footer">
        {/**Put in the contact information of the company/website owner */}
        <ContactInfo/>
        {/**Put other miscellaneous info about the company/website */}
        <AboutCompany/>
        
        <div className="footer-socials">
          <ul className="inline-ul">
            {socialMediaBlock}
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer