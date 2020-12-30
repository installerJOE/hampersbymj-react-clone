import React, {Component} from 'react'
import SubContactInfo from './subContactInfo'

class ContactInfo extends Component{
  render(){
    return(
      <div className="col-12 div-footer-contact-info">
        <SubContactInfo 
          contact="07066531006"
          icon="fa fa-phone"
        />
        <SubContactInfo 
          contact="ijoe4jah@gmail.com"
          icon="fa fa-envelope"
        />
        <SubContactInfo 
          contact="5 Olotu Street, Ughelli, Delta State"
          icon="fa fa-location"
        />
      </div>
    )
  }
}

export default ContactInfo