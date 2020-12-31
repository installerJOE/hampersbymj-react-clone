import React, {Component} from 'react'
import SubAboutCompany from './subAboutCompany'
import subAboutCompanyAPI from './subAboutCompanyArr'

class AboutCompany extends Component{
  render(){
    const subAbtCompanyBlock = subAboutCompanyAPI.map(aboutCompList => 
      <SubAboutCompany
        key={aboutCompList.id}
        aboutList={aboutCompList}
      />
    )
    
    return(
      <div className="col-12">
        {subAbtCompanyBlock}
      </div>
    )
  }
}

export default AboutCompany