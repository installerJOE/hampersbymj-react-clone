import React, {Component} from 'react' 

class SocialMediaLink extends Component{
  render(){
    return(
      <li>
        {this.props.socialMedia.name}
      </li>
    )
  }
}


export default SocialMediaLink