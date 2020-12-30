import React, {Component} from 'react'
import SocialMediaLink from './socials'
import socials from './socialsAPI'

class TitleBar extends Component{

  render(){
    const socialMediaBlock = socials.map(type => <SocialMediaLink key={type.id} socialMedia={type}/>)
    return(
      <div className="title-bar col-12">
        <div className="col-lg-6 col-md-8 col-sm-8 col-xs-4">
          Prefer to talk? Reach us on 07066531006.
        </div>
        <div className="col-lg-6 col-md-4 col-sm-4 col-xs-4" style={{float: "right"}}>
          <ul className="inline-ul" style={{textAlign: "right"}}>
            {socialMediaBlock}
          </ul>
        </div>
      </div>
    )
  }
}

export default TitleBar